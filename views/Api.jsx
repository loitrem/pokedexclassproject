import React from 'react'

export const Api = () => {
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
                    <img src='/images/api.png' alt="" className="pokemonImg" />
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
                        <div className="infoTitle">API Information</div>
                        <div className="nameWrapper">
                            <div className="nameTitle apiForm">Select: </div>
                            <div className="name">
                                <form action="/api" method="POST" className='apiForm'>
                                    <select className='input' id="api" name='api'>
                                        <option value="add">ADD DATA</option>
                                        <option value="remove">REMOVE DATA</option>
                                    </select>
                                    <button className='inputSubmit apiSubmit'>Submit</button>
                                </form>
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default Api