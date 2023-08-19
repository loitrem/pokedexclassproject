import React from 'react'

function Display(props) {
    const pokemon= props.pokemon
  return (

    <div>
        <h1> Show Page </h1>
        <p><h3><a href="/">Back to Index</a></h3></p>
        <br></br>
            <img src={pokemon.img} alt="" /><br></br> 
            Name: {pokemon.name}<br></br> 
            Type: {pokemon.type.map((current)=>{
              return `"${current}" `;
            })}<br></br> 
            Description: {pokemon.desc}<br></br> 

    </div>

  )
}

export default Display