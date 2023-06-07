import React, { useEffect, useState } from "react";
import "./modal.css";

function Modal (props) {
  const { viewStatus, showModal, pokemonData, allPokemonData } = props
  const { 
    bio,
    encounters,
    is_legendary,
    is_mythical,
    name,
    off_art,
    pokedexNumber,
    evolves_from,
    types,
  } = pokemonData

  return (
    <div className={viewStatus}>
      <button 
        className="modal-arrows"
        onClick={() => {
          let prevPokemon = 0
          if (pokedexNumber - 2 < 0) {
            prevPokemon = allPokemonData.length - 1
            console.log(prevPokemon)
          } else {
            prevPokemon = (pokedexNumber - 2) % 151
          } 
          showModal(allPokemonData[prevPokemon], true)
        }}
      >{"<"}</button>
      <button
        className="modal-close-button"
        onClick={() => showModal(pokemonData, false)}
      >Close</button>
      <h1 className="modal-title">{name}</h1>
      <img className="modal-image" src={off_art} alt="default"/>
      <div className="modal-attributes-container">
        <h4 className="modal-attributes-title" >Pokedex #:</h4>
        <p className="modal-attributes">{pokedexNumber}</p>
        <h4 className="modal-attributes-title" >Evolves From:</h4>
        <p className="modal-attributes">{evolves_from}</p>
        <h4 className="modal-attributes-title" >Types:</h4>
        <p className="modal-attributes">{types ? types.join(", "): ""}</p>
        <div className="bio-container">
          <h4 className="modal-attributes-bio-title" >Info: </h4>
          <p className="modal-attributes-bio">{bio}</p>
        </div>
        <h4 className="modal-attributes-title" >Is Legendary?:</h4>
        <p className="modal-attributes">{is_legendary?"Yes":"No"}</p>
        <h4 className="modal-attributes-title" >Is Mythical?:</h4>
        <p className="modal-attributes">{is_mythical?"Yes":"No"}</p>
      <div className="bio-container">
        <h4 className="modal-attributes-bio-title" >Encounters:</h4>
        <p className="modal-attributes-bio">{encounters ? encounters.join(" | "):""}</p>
      </div>
      </div>
      <button 
        className="modal-arrows"
        onClick={() => {
          const nextPokemon = pokedexNumber % 151
          console.log(nextPokemon)
          showModal(allPokemonData[nextPokemon], true)
        }}
      >{">"}</button>
    </div>
  )
}

export default Modal
