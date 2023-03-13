import React from "react";
import "./sprite.css"

function Sprite (props) {
  const { showModal, spriteImage, pokemonName } = props 
  return (
    <div className="Sprite" onClick={showModal}>
      <img  className="pokemon-image" src={spriteImage} alt="bulbasaur"/>
      <h3 className="pokemon-title">Bulbasaur</h3>

    </div>
  )
}

export default Sprite 
