import React, { useState, useEffect } from "react";
import Sprite from "../sprite/Sprite";
import "./home.css"
import axios from "axios";


function Home (props) {
  const { showModal } = props
  const [ pokemons, setPokemons ] = useState([])
  const bulbasaurImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

  async function getPokemon() {
    try {
      const response = await axios.get("https://pokemonrest-api-production.up.railway.app/pokemon/all")
      setPokemons(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div id="Home">
      <div className="home-button-container">
        {
          pokemons.map((pokemon) => {
            console.log(pokemon.name)
            console.log(pokemon.sprite)

            return (
              <Sprite 
              showModal={showModal} 
              spriteImage={pokemon.sprite} 
              pokemonName={pokemon.name}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home
