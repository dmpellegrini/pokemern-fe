import React from "react";
import Sprite from "../sprite/Sprite";
import "./home.css"

function Home (props) {
  const { showModal } = props

  return (
    <div id="Home">
      <div className="home-button-container">
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
        <Sprite showModal={showModal} />
      </div>

    </div>
  )
}

export default Home
