import React from "react";
import "./sprite.css"

function Sprite (props) {
  const { showModal, spriteImage, pokemon } = props 
  return (
    <div className="Sprite" onClick={showModal}>
      <img  className="pokemon-image" src={spriteImage} alt="bulbasaur"/>
    </div>
  )
}

export default Sprite 
