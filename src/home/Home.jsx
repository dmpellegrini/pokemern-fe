import React from "react";
import Sprite from "../sprite/Sprite";
import "./home.css"

function Home (props) {
  const { showModal } = props
  const bulbasaurImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

  return (
    <div id="Home">
      <div className="home-button-container">
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
        <Sprite showModal={showModal} spriteImage={bulbasaurImage} />
      </div>

    </div>
  )
}

export default Home
