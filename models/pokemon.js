//require mongoose
const mongoose = require('mongoose'); 

//sets schema and sets fields- in this case inputs will require at least namea and color
const pokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  { type: String},
    type: {type: Array},
    abilities: {type: Array},
    height: {type: Number},
    weight: {type: Number}
});

//sets mongoose model in variable Fruit
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

//export fruit
module.exports = Pokemon;