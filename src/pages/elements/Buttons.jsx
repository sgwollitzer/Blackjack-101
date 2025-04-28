import React from 'react';

const Buttons = ({press}) => {
  return (
    <div className="buttons">
      <button onClick={() => press('new game')}>New Game</button> 
      <button onClick={() => press('hit')}>Hit</button>
      <button onClick={() => press('stand')}>Stand</button>
      {/* <button onClick={() => press('split')}>Split</button> */}
    </div>
  );
};

export default Buttons;