import React from 'react'


function Index(props) {


    props.pokemon.length!=0 ? props.pokemon[props.count].height = ((props.pokemon[props.count].height/10)*3.28084).toFixed(2):'';
    props.pokemon.length!=0 ? props.pokemon[props.count].weight = ((props.pokemon[props.count].weight/10)*2.20462).toFixed(2):'';

    const pokemon = props.pokemon;
    let count = props.count;

    

    const ucFirst = (x) => {

        let firstChar = x.charAt(0);
        let remaining = x.substring(1);
        
        return firstChar.toUpperCase() + remaining;

    }

    return (
        <div className="mainWrapper">
            <link rel="stylesheet" type="text/css" href="/css/style.css" />
            <div className="main">
                <div className="headerWrapper">
                    <div className="header">
                        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="" className="logo" /> 
                    </div>
                </div>
                <div className="innerWrapper">
                    <div className="inner">
                        <div className="left">
                    <div className="imageWrapper">
                        <div className="image">
                            {pokemon.length!=0 ?  <img src={pokemon[count].img} alt="" className="pokemonImg" /> : '' }
                        </div>
                    </div>
                    <div className="buttonBoxWrapper">
                        <div className="buttonBox">
                            <div className="buttonLeft"> 

                                {pokemon.length!=0 ?count>0 ? <form action={`/${count-1}`} className='buttonForm' method='GET'>
                                    <button className="btnLeft">PREV</button>
                                </form>:
                                <form action='/' className='buttonForm'>
                                    <button className="btnLeft">PREV</button>
                                </form>:''}
                            </div>
                            <div className="buttonRight">
                            {pokemon.length!=0 ?count<pokemon.length-1 ? <form action={`/${count+1}`} className='buttonForm' method='GET'>
                                <button className="btnRight">NEXT</button>
                                </form>: 
                                <form className='buttonForm'>
                                    <button action='/' className="btnRight">NEXT</button>
                                </form>:''}
                            </div>
                        </div>
                    </div>
                    <div className="searchBoxWrapper">
                        <div className="searchBox">
                            <div className="menu">
                                <form className='formButtons' action={ pokemon.length!=0 ? `/update/${pokemon[count].id}`:''} method="POST">
                                    <div className="menuItem"><button className="menuLink">Edit</button> </div>
                                </form>
                                <form className='formButtons' action={ pokemon.length!=0 ? `/delete/${pokemon[count].id}?_method=DELETE`:''} method="POST">
                                    <div className="menuItem"><button type='submit' className="menuLink">Delete</button> </div>
                                </form>
                                <form className='formButtons' action="/add" method="GET">
                                    <div className="menuItem"><button className="menuLink">New</button> </div>
                                </form>
                                <form className='formButtons' action="/api" method="GET">
                                    <div className="menuItem"><button className="menuLink">API Data</button> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="infoWrapper">
                        <div className="info">
                            <div className="infoTitle">Pokemon Information</div>
                            <div className="nameWrapper">
                                <div className="nameTitle">Name: </div>
                                <div className="name">{ pokemon.length!=0 ? ucFirst(pokemon[count].name):''}</div>
                            </div>
                            <div className="heightWrapper">
                                <div className="heightTitle">Height: </div>
                                <div className="height">{ pokemon.length!=0 ? pokemon[count].height :''} ft</div>
                            </div>
                            <div className="weightWrapper">
                                <div className="weightTitle">Weight: </div>
                                <div className="weight">{ pokemon.length!=0 ? pokemon[count].weight :''} lbs</div>
                            </div>
                            <div className="typeWrapper">
                                <div className="typeTitle">Type: </div>
                                <div className="listWrapper">
                                    <div className="type">{ pokemon.length!=0 ? pokemon[count].type.map((current, i)=>{
                                            return <div key={i} className="list">{ucFirst(current)}</div>
                                        }):''}
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesWrapper">
                                <div className="abilitiesTitle">Abilities: </div>
                                <div className="abilities">{ pokemon.length!=0 ? pokemon[count].abilities.map((current, i)=>{
                                        return <div key={i} className="list">{ucFirst(current)}</div>
                                    }):''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index

