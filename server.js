//require express *********************************************************************************
const express = require('express');
require("dotenv").config() //for .env file - also need to install dotenv
const mongoose = require('mongoose'); //for mongodb also need to install mongoose - dosent like express-react-views
const Pokemon = require('./models/pokemon')
const axios = require('axios');
const methodOverride = require('method-override');

//connects express instance to variable app
const app = express();

//set port
const PORT = 3000;

//middleware **************************************************************************************

//sets engine - to be able to view jsx files
app.set('view engine', 'jsx'); //tells engine to run on jsx files/format

//starts engine
app.engine('jsx', require('express-react-views').createEngine()); //starts engine using jsx format

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//after connecting opens the connection for use
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const getEachPokeData = async(info) => {
    let res = await axios.get(info);
    return res.data
}
const getPokeData = async() => {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100`); 
    // console.log('getPokeData ran', res.data.results);
    addPokemon(res.data.results);

}

const addPokemon=async(data)=>{

    await data.map(async(current)=>{
    
            const thisPokemon = await getEachPokeData(current.url);

            let diffTypes = [];
            let diffAbilities = [];

            thisPokemon.types.map((current)=>{
                console.log(current.type.name);
                diffTypes.push(`${current.type.name} `)
            })

            thisPokemon.abilities.map((current)=>{
                diffAbilities.push(`${current.ability.name} `)
            })            

            let newPokemon = {
                name: current.name,
                img: thisPokemon.sprites.other.home.front_default,
                type: diffTypes,
                abilities: diffAbilities,
                height: ((thisPokemon.height/10)*3.28084).toFixed(2),
                weight: ((thisPokemon.weight/10)*2.20462).toFixed(2)
            }

            Pokemon.create(newPokemon)
    })
}

// routes **********************************************************************************************


//pokemon index
app.get("/", (req, res) => {
    let count = 0;
    Pokemon.find({}).then((allPokemon) => {
    res.render("Index", {
        pokemon: allPokemon,
        count: count
    });
    });
});

app.get("/:id", (req, res) => {
    let count = parseInt(req.params.id);
    Pokemon.find({}).then((allPokemon) => {
    res.render(`Index`, {
        pokemon: allPokemon,
        count: count
    });
    });
});


app.get("/add", (req, res) => {
    res.render("Add");
});

//get new pokemon, add it and redirect to pokemon index
app.post("/addsubmit", async (req, res) => {
    await Pokemon.create(req.body)
    res.redirect("/")
});

app.get("/api", (req, res) => {
    res.render("Api");
});

//get new pokemon, add it and redirect to pokemon index
app.post("/api", async (req, res) => {
    console.log('api choice? ', req.body.api);
    if (req.body.api==='add'){
        await getPokeData();
    } else if (req.body.api==='remove'){
        await Pokemon.deleteMany({});
    }
    res.redirect("/")
});
// -------{POST}

//pokemon update
app.post("/update/:id", async(req, res) => {
    try{
    const onePokemon = await Pokemon.findById(req.params.id)
    res.render("Update", {
        pokemon: onePokemon,
    });
    console.log('pokemans = ',onePokemon);
} catch (err){
    res.send(err)
}
});

//get new pokemon, add it and redirect to pokemon index
app.put("/updatesubmit/:id", async (req, res) => {
    //update object/document
    await Pokemon.findByIdAndUpdate(req.params.id, req.body)

    res.redirect("/")
});

//removes selected pokemon and redirect to pokemon index
app.post("/removeselected/:id", async (req, res) => {
    //delete object/document

    await Pokemon.deleteOne({_id: req.body.pokemon});

    res.redirect("/")
});

//form to enter new fruit
app.get("/add", (req, res) => {
    res.render("Add");
});

// //delete a record
// app.get("/test", (req, res) => {
//     Pokemon.find({}).then((allPokemon) => {
//         res.render("test", {
//             pokemon: allPokemon,
//         });
//     });
// });
// //delete a record
// app.post("/test2", (req, res) => {
//     Pokemon.findById(req.body.pokemon).then((currentPokemon) => {
//         res.redirect(`/testdel/${currentPokemon.id}`)
//     });
// });

// //form to enter new fruit
// app.delete("/testdel/:id", (req, res) => {
//     Pokemon.deleteOne({_id: req.params.id})
//     res.redirect("/")
// });

//view fruit by id
app.get("/showPokemon/:id", async (req, res) => {
    const eachPokemon = await Pokemon.findById(req.params.id)
    await res.render("Display",{
    pokemon: eachPokemon
    })
});


//sets server and displays message if working **********************************************************
app.listen(PORT,(req, res)=>{
    console.log(`server is now listening on port ${PORT}`);
})