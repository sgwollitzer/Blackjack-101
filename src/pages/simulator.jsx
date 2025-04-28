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
  const[houseWin,setHouseWin]=useState(0);
  const[playerWin,setPlayerWin]=useState(0);
  const [hasOriginalTwoCards, setHasOriginalTwoCards] = useState(false);
  const [stopGame, setStopGame] = useState(false);

  const [houseCounter, setHouseCounter] = useState(null);
  const [playerCounter, setPlayerCounter] = useState(null);


  const getHouseCounter = (value) => {
    setHouseCounter(value);
   
  };
  

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
async function drawCards(){

try{
  let houseCardsResponseData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
  console.log("House cards drawn:", houseCardsResponseData.data.cards);  // Log drawn cards
  setHouseCards(houseCardsResponseData.data.cards);
  
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
useEffect(() => {
if(deckId!=null){

  drawCards();
}
}, [deckId!=null]);
useEffect(() => {
  console.log("test House cards updated:", houseCards);
}, [houseCards]);

const showCards=(cards)=>{
  return cards.map((card,index)=>(
    <img key={index} src={card.image}/>
  ));
};


const handlePlayerPress=(action)=>{
  if (stopGame && action!= 'new game') {
    alert("the game is over! press new game to play again")
    return;
  }
  if(!stopGame && action=='new game'){
    alert("you can only new game once this game is finished")
  }
  else if(action=='new game'){
    console.log("new game");
    newGame();
  } else if(action=='hit'){
    console.log("hit");
    hit();
  } else if(action=='stand'){
    console.log("stand");
    stand();
  }

}
const stand=()=>{
  const currPlayer = calculateCounter(playerCards);
  setPlayerCounter(currPlayer);
  console.log("house counter for player standing is:",houseCounter);
  if(currPlayer>21&& houseCounter==0){
    alert("you both lost");
  }
  else if(houseCounter==0){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    alert("you won");
    console.log("deciding winners","player counter",currPlayer,"house:",houseCounter);
  }
  
  //why is playerCounter always printing out as null?
  else if(houseCounter==21 && currPlayer!=21){
    alert("you lost");
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(currPlayer==21 && houseCounter!=21){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    alert("you won");
  } else if(houseCounter == currPlayer){
    alert("tie");
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(houseCounter>currPlayer){
    alert("you lost");
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(currPlayer>houseCounter){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    alert("you won");
  }
  setStopGame(true);
}


const newGame=async()=>{
setDeckId(null);
setHouseCards([]);
setPlayerCards([]);

setHasOriginalTwoCards(false);
setStopGame(false);
console.log("reset game");
try {
  let responseData = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  setDeckId(responseData.data.deck_id);  
  console.log("set game up again");
} catch (error) {
  console.log("couldn't set up deck");
}
console.log("set game up again");
}
const resetHasOriginalTwoCards = () => {
  setHasOriginalTwoCards(false);
};


const calculateCounter=(cards)=>{
  let currCounter=0;
  let aces=0;
  for(const card of cards){
      if(card.value=='JACK'||card.value=='QUEEN' || card.value=='KING'){
          currCounter+=10;
      } else if(card.value=='ACE'){
          aces++;
      }else{
          currCounter+=parseInt(card.value, 10);
      }
      if(aces!=0){
          currCounter+=11;
          if(currCounter>21){
              currCounter-=10;
          }
      }
  }
  return currCounter;

}
const hit=async ()=>{
  const currCounter=calculateCounter(playerCards);
  setPlayerCounter(currCounter);
  if(currCounter<21){
  try{
    let drawnPlayerCard=await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let drawnPlayerCardVal=drawnPlayerCard.data.cards[0];
    setPlayerCards(prevCards => [...prevCards, drawnPlayerCardVal]);

}catch(error){
  console.error("Error drawing card:", error);
                console.log("could not draw card for player");
}
  } else{
    alert("can't hit");
  }
  if(currCounter>21){
    alert('player loses');
    setHouseWin(oldHouseWin => oldHouseWin + 1);
    setStopGame(true);
  }
}
useEffect(() => {
  console.log("Updated player cards:", playerCards);
}, [playerCards]);

  return (
    <>
  <h1>Simulator</h1>
  <h2>House wins: {houseWin}</h2>
  <h2>Player wins: {playerWin}</h2>
  <House key={deckId} cards={houseCards} deckId={deckId} resetHasOriginalTwoCards={resetHasOriginalTwoCards} setHouseCounter={getHouseCounter}/>
      <div className="deck">
        <p>Deck of Cards</p>
      </div>
      <Player cards={playerCards} playerPress={handlePlayerPress}  />
      <h2>Player's Cards:</h2>
      <div>{showCards(playerCards)}</div>
  
</>
  );
};

export default Simulator;