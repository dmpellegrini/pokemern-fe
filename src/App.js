import './App.css';
import { useState } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Modal from './modal/Modal';


function App() {
  const [ modalClass, setModalClass ] = useState('Modal')

  function showModal() {
    if (modalClass === "Modal"){
      setModalClass('Modal modal-show')
    }else{
      setModalClass('Modal')
    }
  }

  return (
    <div className='App'>
      <Navbar />
      <Modal viewStatus={modalClass} showModal={showModal}/>
      <Home showModal={showModal} />
    </div>
  );
}

export default App;
