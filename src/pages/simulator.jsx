import React,{ useState, useEffect }  from 'react';
import './simulator.css';
import House from './elements/House';
import Player from './elements/Player';
import Buttons from './elements/Buttons';
import axios from 'axios';




const Simulator = () => {
  const [deckId, setDeckId] = useState(null);
  const [houseCards,setHouseCards]=useState([]);
  const [playerCards,setPlayerCards]=useState([]);
  const [result, setResult] = useState(null);


  useEffect(() => {
    console.log(deckId);
  async function setUpGame(){
    try{
    let responseData= await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    setDeckId(responseData.data.deck_id) ;
    console.log(responseData.data.deck_id);
    }catch{
      console.log("couldn't set up deck");
    }
  }
  setUpGame();
}, []);

useEffect(() => {
if(deckId!=null){
async function drawCards(){

try{
  let houseCardsResponseData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
  setHouseCards(houseCardsResponseData.data.cards);
  console.log("house cards", houseCardsResponseData.data.cards);
  
  }catch{
    console.log("could not send cards to house");
  }
  try{
    let playerCardsResponseData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    setPlayerCards(playerCardsResponseData.data.cards);
    console.log("player cards", playerCardsResponseData.data.cards);
    }catch{
      console.log("could not send cards to player");
    }
  };
  drawCards();
}
}, [deckId!=null]);

const showCards=(cards)=>{
  return cards.map((card,index)=>(
    <img key={index} src={card.image}/>
  ));
};


  return (
    <>
  <h1>simulator</h1>
  <House cards={houseCards} deckId={deckId}/>
      <div className="deck">
        <p>Deck of Cards</p>
      </div>
      <Player cards={playerCards}/>
      <Buttons />
      <h2>house cards:</h2>
      <div>{showCards(houseCards)}</div>
      <h2>player cards:</h2>
      <div>{showCards(playerCards)}</div>
  
</>
  );
};

export default Simulator;