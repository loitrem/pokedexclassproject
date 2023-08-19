import React from 'react'

function Update(props) {
    const pokemon = props.pokemon;
console.log(pokemon);
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
                        <img src={pokemon.img} alt="" className="pokemonImg" />
                    </div>
                </div>
                <div className="buttonBoxWrapper">
                    <div className="buttonBox">
                        <div className="buttonLeft"> 

                            <form className='buttonForm'>
                                <button className="btnLeft">PREV</button>
                            </form>
                        </div>
                        <div className="buttonRight">

                            <form className='buttonForm'>
                                <button className="btnRight">NEXT</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="searchBoxWrapper">
                    <div className="searchBox">
                        <div className="menu">
                            <form className='formButtons' action="/" method="GET">
                                <div className="menuItem"><button className="menuLink">Home</button> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="infoWrapper">
                    <div className="info">
                        <form className='form' action={`/updatesubmit/${pokemon.id}?_method=PUT`} method="POST">
                            <div className="title">Update Entry</div>
                            <div className="inputWrapper">
                                <div className="inputTitle">Name: </div>
                                <div className="inputTag"><input className='input' type="text" name="name" defaultValue={pokemon.name} /></div>
                            </div>
                            <div className="inputWrapper">
                                    <div className="inputTitle">Image Url: </div>
                                    <div className="inputTag"><input className='input' type="text" name="img" defaultValue={pokemon.img} /></div>
                                </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">{'Height(decimetres)'}: </div>
                                <div className="inputTag"><input className='input' type="number" name="height" defaultValue={pokemon.height ? pokemon.height : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">{'Weight(hectograms)'}:</div>
                                <div className="inputTag"><input className='input' type="number" name="weight" defaultValue={pokemon.weight ? pokemon.weight : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">Type:</div>
                                <div className="inputTag"><input className='input' type="text" name="type" defaultValue={pokemon.type ? pokemon.type : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">Type:</div>
                                <div className="inputTag"><input className='input' type="text" name="type2" defaultValue={pokemon.type ? pokemon.type : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">Ability:</div>
                                <div className="inputTag"><input className='input' type="text" name="ability" defaultValue={pokemon.abilities ? pokemon.abilities : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <div className="inputTitle">Ability:</div>
                                <div className="inputTag"><input className='input' type="text" name="ability2" defaultValue={pokemon.abilities ? pokemon.abilities : ''}/></div>
                            </div>
                            <div className="inputWrapper">
                                <input className='inputSubmit' type="submit" name="" value="Update Pokemon" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    )
}

export default Update