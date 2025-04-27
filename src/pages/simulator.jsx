import React from 'react';
import './simulator.css';
import House from './elements/House';
import Player from './elements/Player';
import Buttons from './elements/Buttons';



const Simulator = () => {
  
  return (
    <>
  <h1>simulator</h1>
  <House />
      <div className="deck">
        <p>Deck of Cards</p>
      </div>
      <Player />
      <Buttons />
  
</>
  );
};

export default Simulator;