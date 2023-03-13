import React from "react";
import "./sprite.css"

function Sprite (props) {
  const { showModal } = props 
  return (
    <div className="Sprite" onClick={showModal}>
      <img  className="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur"/>
      <h3 className="pokemon-title">Bulbasaur</h3>

    </div>
  )
}

export default Sprite 
