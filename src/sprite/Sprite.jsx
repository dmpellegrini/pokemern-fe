import React from "react";
import "./sprite.css"

function Sprite (props) {
  const { showModal, pokemon } = props 
  
  return (
    <div className="Sprite" onClick={() => {showModal(pokemon, true)}}>
      <img  className="pokemon-image" src={pokemon.sprite} alt="bulbasaur"/>
    </div>
  )
}

export default Sprite 
