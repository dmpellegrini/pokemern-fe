import React, { useState, useEffect } from "react";
import Sprite from "../sprite/Sprite";
import "./home.css"


function Home (props) {
  const { showModal, pokemons } = props

  return (
    <div id="Home">
      <div className="home-button-container">
        {
          pokemons.map((pokemon) => {
            return (
              <Sprite 
                showModal={showModal} 
                pokemon={pokemon}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home
