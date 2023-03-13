import React from "react";
import "./modal.css";

function Modal (props) {
  const { viewStatus, showModal } = props
  return (
    <div className={viewStatus}>
      <div className="modal-content-container">
        <button 
          className="modal-close-button"
          onClick={showModal}
        >X</button>
        <h1 className="modal-title">Bulbasaur</h1>
        <img className="modal-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"/>
        <div className="modal-attributes-container">
          <h4 className="modal-attributes-title" >Types:</h4>
          <p className="modal-attributes">Grass, Earth</p>
          <h4 className="modal-attributes-title" >Habitats:</h4>
          <p className="modal-attributes">Forest</p>
          <h4 className="modal-attributes-title" >Bio:</h4>
          <p className="modal-attributes modal-attributes-bio">ksdf;lakshdl;fkajs;dlkfj;alskdjf;laksjdf;lakjsd;flkajsd;lfkjas;ldkfjfa;lskdf;laskdff;laksjdf;flkajsd;flkjasd;lfkja;lskdjf;laksjdfas;ldkfja;lskdhgal;skdfja;lskdfja;lskdfha;lskdjfal;skdghal;skdfj;laksdghasdf</p>
        </div>
        <div className="modal-user-inputs-container">
          <h4 className="modal-input-titles">Caught?</h4>
          <input className="modal-user-input" type="checkbox"/>
          <h4 className="modal-input-titles">Shiny?</h4>
          <input className="modal-user-input" type="checkbox"/>
          <h4 className="modal-input-titles">Gender ?</h4>
          <input className="modal-user-input" type="checkbox"/>
        </div>

      </div>
    </div>
  )
}

export default Modal
