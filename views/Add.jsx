import React from 'react'

function Add() {
    let num = 2
    let add;
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
                            <img src='/images/add.png' alt="" className="pokemonImg" />
                        </div>
                    </div>
                    <div className="buttonBoxWrapper">
                        <div className="buttonBox">
                            <div className="buttonLeft"> 

                                <form action='' className='buttonForm'>
                                    <button className="btnLeft">PREV</button>
                                </form>
                            </div>
                            <div className="buttonRight">

                                <form action='' className='buttonForm'>
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
                            <form className='form' action="/addsubmit" method="POST">
                                <div className="title">Create New Entry</div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Name: </div>
                                    <div className="inputTag"><input className='input' type="text" name="name" /></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Image Url: </div>
                                    <div className="inputTag"><input className='input' type="text" name="img" /></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">{'Height(decimetres)'}: </div>
                                    <div className="inputTag"><input className='input' type="number" name="height"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">{'Weight(hectograms)'}:</div>
                                    <div className="inputTag"><input className='input' type="number" name="weight"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Type:</div>
                                    <div className="inputTag"><input className='input' type="text" name="type"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Type:</div>
                                    <div className="inputTag"><input className='input' type="text" name="type2"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Ability:</div>
                                    <div className="inputTag"><input className='input' type="text" name="abilities"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <div className="inputTitle">Ability:</div>
                                    <div className="inputTag"><input className='input' type="text" name="abilities2"/></div>
                                </div>
                                <div className="inputWrapper">
                                    <input className='inputSubmit' type="submit" name="" value="Add Pokemon" />
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

export default Add