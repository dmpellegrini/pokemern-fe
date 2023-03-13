import React from "react";
import "./sprite.css"

function Sprite (props) {
  const { showModal, spriteImage, pokemon } = props 
  
  return (
    <div className="Sprite" onClick={() => {showModal(pokemon)}}>
      <img  className="pokemon-image" src={pokemon.sprite} alt="bulbasaur"/>
    </div>
  )
}

export default Sprite 
