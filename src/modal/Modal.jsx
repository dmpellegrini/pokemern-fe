import React from "react";
import "./modal.css";

function Modal (props) {
  const { viewStatus, showModal, pokemonData } = props
  const { name, habitat, off_art } = pokemonData
  return (
    <div className={viewStatus}>
      <button 
        className="modal-close-button"
        onClick={showModal}
      >X</button>
      <h1 className="modal-title">{name}</h1>
      <img className="modal-image" src={off_art} alt="default"/>
      <div className="modal-attributes-container">
        <h4 className="modal-attributes-title" >Types:</h4>
        <p className="modal-attributes">Default</p>
        <h4 className="modal-attributes-title" >Habitats:</h4>
        <p className="modal-attributes">{habitat}</p>
        <h4 className="modal-attributes-title" >Bio:</h4>
      </div>
    </div>
  )
}

export default Modal
