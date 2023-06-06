import React from "react";
import "./modal.css";

function Modal (props) {
  const { viewStatus, showModal, pokemonData } = props
  const { 
    name,
    evolves_from,
    habitat,
    is_legendary,
    is_mythical,
    off_art,
  } = pokemonData

  console.log(name)

  return (
    <div className={viewStatus}>
      <button 
        className="modal-close-button"
        onClick={showModal}
      >X</button>
      <h1 className="modal-title">{name}</h1>
      <img className="modal-image" src={off_art} alt="default"/>
      <div className="modal-attributes-container">
        <h4 className="modal-attributes-title" >Evolves From:</h4>
        <p className="modal-attributes">{evolves_from}</p>
        <h4 className="modal-attributes-title" >Types:</h4>
        <p className="modal-attributes">Default</p>
        <h4 className="modal-attributes-title" >Habitat:</h4>
        <p className="modal-attributes">{habitat}</p>
        <h4 className="modal-attributes-title" >Is Legendary?</h4>
        <p className="modal-attributes">{is_legendary?"Yes":"No"}</p>
        <h4 className="modal-attributes-title" >Is Mythical</h4>
        <p className="modal-attributes">{is_mythical?"Yes":"No"}</p>
      </div>
    </div>
  )
}

export default Modal
