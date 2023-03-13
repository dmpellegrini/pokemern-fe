import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Modal from './modal/Modal';
import axios from "axios";

function App() {
  const [ modalClass, setModalClass ] = useState('Modal')
  const [ modalData, setModalData ] = useState('Pokemon')
  const [ pokemons, setPokemons ] = useState([])

  function showModal(pokemon) {
    if (modalClass === "Modal"){
      setModalClass('Modal modal-show')
    }else{
      setModalClass('Modal')
    }
    setModalData(pokemon)
  }

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
    <div className='App'>
      <Navbar />
      <Modal 
        viewStatus={modalClass} 
        showModal={showModal} 
        pokemonData={modalData}
      />
      <Home showModal={showModal} pokemons={pokemons}/>
    </div>
  );
}

export default App;
