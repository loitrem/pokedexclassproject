import React from 'react'


function Index(props) {
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
                            <img src={pokemon[count].img} alt="" className="pokemonImg" />
                        </div>
                    </div>
                    <div className="buttonBoxWrapper">
                        <div className="buttonBox">
                            <div className="buttonLeft"> 

                                {count>0 ? <form action={`/${count-1}`} className='buttonForm' method='GET'>
                                    <button className="btnLeft">PREV</button>
                                </form>:
                                <form action='/' className='buttonForm'>
                                    <button className="btnLeft">PREV</button>
                                </form>}
                            </div>
                            <div className="buttonRight">
                            {count<100 ? <form action={`/${count+1}`} className='buttonForm' method='GET'>
                                <button className="btnRight">NEXT</button>
                                </form>: 
                                <form className='buttonForm'>
                                    <button action='/' className="btnRight">NEXT</button>
                                </form>}
                            </div>
                        </div>
                    </div>
                    <div className="searchBoxWrapper">
                        <div className="searchBox">
                            <div className="menu">
                                <form className='formButtons' action={`/update/${pokemon[count].id}`} method="POST">
                                    <div className="menuItem"><button className="menuLink">Edit</button> </div>
                                </form>
                                <form className='formButtons' action="/delete" method="GET">
                                    <div className="menuItem"><button className="menuLink">Delete</button> </div>
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
                                <div className="name">{ucFirst(pokemon[count].name)}</div>
                            </div>
                            <div className="heightWrapper">
                                <div className="heightTitle">Height: </div>
                                <div className="height">{pokemon[count].height} ft</div>
                            </div>
                            <div className="weightWrapper">
                                <div className="weightTitle">Weight: </div>
                                <div className="weight">{pokemon[count].weight} lbs</div>
                            </div>
                            <div className="typeWrapper">
                                <div className="typeTitle">Type: </div>
                                <div className="listWrapper">
                                    <div className="type">{pokemon[count].type.map((current)=>{
                                            return <div className="list">{ucFirst(current)}</div>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesWrapper">
                                <div className="abilitiesTitle">Abilities: </div>
                                <div className="abilities">{pokemon[count].abilities.map((current)=>{
                                        return <div className="list">{ucFirst(current)}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     {/* <DefaultLayout title={"Pokemon Index Page"}> */}
        //     <h1 className='test'>POKEDEX</h1>
        //     <nav>
        //         <h3><a href="/add">Add New Pokemon</a></h3>
        //         <h3><a href="/update">Edit Pokemon</a></h3>
        //         <h3><a href="/remove">Delete Pokemon</a></h3>
        //         <br></br>
        //         <h3><a href="/api">Add API Data</a></h3>
        //     </nav>
        //     <p><h2>Pokemon</h2></p>
        // <br></br>
        //     {pokemon!=null ?pokemon.map((pokemon, i) => {
        //         return (
        //             <div key={i}>
        //                 <li>
        //                     <a href={`/showPokemon/${pokemon.id}`}>
        //                         <h2>{pokemon.name}</h2>
        //                     </a>{' '}
        //                     <br />
        //                 </li>
        //             </div>
        //         );
        //     }):''}
        // {/* </DefaultLayout> */}
        // </div>
    )
}

export default Index

