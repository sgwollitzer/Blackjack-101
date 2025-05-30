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
  const [hasOriginalTwoCards, setHasOriginalTwoCards]=useState(false);
  const [stopGame, setStopGame]=useState(false);

  const [houseCounter, setHouseCounter]=useState(null);
  const [playerCounter, setPlayerCounter]=useState(null);

  const [showHouseFaceUp, setShowHouseFaceUp]=useState(false); 

  const [finalFaceUp,setFinalFaceUp]=useState([]);

  const [gameResult, setGameResult] = useState('');

  const[canDoubleDown,setCanDoubleDown]=useState(true);
const[blackJack,setBlackJack]=useState('');

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
    <img key={index} src={card.image} className="card-image"/>
  ));
};


const handlePlayerPress=(action)=>{
  if (stopGame && action!= 'new game') {
    setGameResult("The game is over! Press 'New Game' to play again");
    return;
  }
  if(!stopGame && action=='new game'){
    setGameResult("You can only press this once the game has finished");
  }
  else if(action=='new game'){
    console.log("new game");
    newGame();
  } else if(action=='hit'){
    console.log("hit");
    hit();
    setCanDoubleDown(false);
  } else if(action=='stand'){
    console.log("stand");
    stand();
    setCanDoubleDown(false);
  } else if(action=='double down'){
    console.log("double down");
    doubleDown();
  } else if(!canDoubleDown&&action=='double down'){
    setGameResult("You can only press this if you haven't pressed stand or hit yet");
  }

}
const stand=()=>{
  const currPlayer = calculateCounter(playerCards);
  setPlayerCounter(currPlayer);
  console.log("house counter for player standing is:",houseCounter);
  console.log("player counter for player standing", currPlayer);
  if(currPlayer>21&& houseCounter==0){
    setGameResult("House and Player lost");
  }
  else if(houseCounter==0 && currPlayer<=21){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    setGameResult("You win!");
    console.log("deciding winners","player counter",currPlayer,"house:",houseCounter);
  }
  
  //why is playerCounter always printing out as null?
  else if(houseCounter==21 && currPlayer!=21){
    setGameResult("You lose :(");
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(currPlayer==21 && houseCounter!=21){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    setGameResult("You win!");
  } else if(houseCounter == currPlayer){
    setGameResult("Tie!");
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(houseCounter>currPlayer){
    setGameResult("You lost :(");
    setHouseWin(oldHouseWin => oldHouseWin + 1);
  } else if(currPlayer>houseCounter && currPlayer<=21){
    setPlayerWin(oldPlayerWin => oldPlayerWin + 1);
    setGameResult("You win!");
  }
  
  setShowHouseFaceUp(true);
  setStopGame(true);
}
 const showHouseCards2=()=>{
  console.log("showing face up cards");
  if(showHouseFaceUp){
         return finalFaceUp.map((card,index)=>(
           <img key={index} src={card.image} className="card-image" />
         ));
        }
       };


const newGame=async()=>{
  setShowHouseFaceUp(false);
setDeckId(null);
setHouseCards([]);
setPlayerCards([]);
setGameResult('Game in Progress');
setFinalFaceUp([]);
setHasOriginalTwoCards(false);
setStopGame(false);
setCanDoubleDown(true);
setBlackJack("");
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
  let faces=0;
  for(const card of cards){
    if(parseInt(card.value,10)==10){
      faces++;
    }
      if(card.value=='JACK'||card.value=='QUEEN' || card.value=='KING'){
          currCounter+=10;
          faces++;
      } else if(card.value=='ACE'){
          aces++;
      }else{
          currCounter+=parseInt(card.value, 10);
      }
      
  }
  for(let i=0;i<aces;i++){
    if(currCounter+11<=21){
      currCounter+=11;
      console.log("adding 11 as ace");
    } else{
      currCounter+=1;
      console.log("adding 1 as ace");
    }
  }
  if(faces==1&&aces==1&&cards.length==2){
    setBlackJack("BLACKJACK!!!");

  }
console.log("test");
  return currCounter;

}
const hit=async ()=>{
  let currCounter=calculateCounter(playerCards);
  
  setPlayerCounter(currCounter);
  if(currCounter<21){
  try{
    let drawnPlayerCard=await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let drawnPlayerCardVal=drawnPlayerCard.data.cards[0];
    setPlayerCards(prevCards => [...prevCards, drawnPlayerCardVal]);
    currCounter = calculateCounter([...playerCards, drawnPlayerCardVal]);
      setPlayerCounter(currCounter);

}catch(error){
  console.error("Error drawing card:", error);
                console.log("could not draw card for player");
}
  } 
  
      
  if(currCounter>21&& houseCounter==0){
    setGameResult("House and Player lost");
    setShowHouseFaceUp(true);

    setStopGame(true);

  } else if(currCounter>21){
    setGameResult('You lost :(');
    setHouseWin(oldHouseWin => oldHouseWin + 1);
    setShowHouseFaceUp(true);

    setStopGame(true);
  }
  
  // const currPlayer = calculateCounter(playerCards);
  // setPlayerCounter(currPlayer);
  // console.log("this is currentttt player count",currPlayer);
}

  const doubleDown=async ()=>{
    if(canDoubleDown){
      let currCounter=calculateCounter(playerCards);
  
      setPlayerCounter(currCounter);
      if(currCounter<21){
      try{
        let drawnPlayerCard=await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        let drawnPlayerCardVal=drawnPlayerCard.data.cards[0];
        setPlayerCards(prevCards => [...prevCards, drawnPlayerCardVal]);
        currCounter = calculateCounter([...playerCards, drawnPlayerCardVal]);
          setPlayerCounter(currCounter);
    
    }catch(error){
      console.error("Error drawing card:", error);
                    console.log("could not draw card for player");
    }
      } 
    //const currPlayer = calculateCounter(playerCards);
  //setPlayerCounter(currPlayer);
  console.log("house counter for player dd is:",houseCounter);
  console.log("player counter for player dd", currCounter);
    if(currCounter>21&& houseCounter==0){
      setGameResult("House and Player lost");
      setPlayerWin(oldPlayerWin => oldPlayerWin - 1);

    }
    else if(houseCounter==0 && currCounter<=21){
      setPlayerWin(oldPlayerWin => oldPlayerWin + 2);
      setGameResult("You win!");
      console.log("deciding winners","player counter",currCounter,"house:",houseCounter);
    }
    
    //why is playerCounter always printing out as null?
    else if(houseCounter==21 && currCounter!=21){
      setGameResult("You lose :(");
      setHouseWin(oldHouseWin => oldHouseWin + 1);
      setPlayerWin(oldPlayerWin => oldPlayerWin - 1);
    } else if(currCounter==21 && houseCounter!=21){
      setPlayerWin(oldPlayerWin => oldPlayerWin + 2);
      setGameResult("You win!");
    } else if(houseCounter == currCounter){
      setGameResult("Tie!");
      setPlayerWin(oldPlayerWin => oldPlayerWin + 2);
      setHouseWin(oldHouseWin => oldHouseWin + 1);
    } else if(houseCounter>currCounter){
      setGameResult("You lost :(");
      setHouseWin(oldHouseWin => oldHouseWin + 1);
      setPlayerWin(oldPlayerWin => oldPlayerWin - 1);

    } else if(currCounter>houseCounter && currCounter<=21){
      setPlayerWin(oldPlayerWin => oldPlayerWin + 2);
      setGameResult("You win!");
    }else if(houseCounter!=0 && currCounter>21){
      setPlayerWin(oldPlayerWin => oldPlayerWin -1);
      setGameResult("You lost :(");
    }
    setShowHouseFaceUp(true);
    setStopGame(true);
  }else{
    setGameResult("You can only press this if you haven't pressed stand or hit yet");
  }
  }
useEffect(() => {
  console.log("Updated player cards:", playerCards);
}, [playerCards]);

  return (
    <>
  <h1 className="titleH">Simulator</h1>
  <div id="counters">
  <h3 className="h2T2">House Wins: {houseWin}</h3>
  <h3 className="h2T2">Player Wins: {playerWin}</h3></div>
  <div className="gameResultBox">
  {gameResult && <div className="gameResult">{gameResult}</div>}</div>
  <Player cards={playerCards} playerPress={handlePlayerPress}  />
  {!showHouseFaceUp && (<House key={deckId} stopGame={stopGame} cards={houseCards} deckId={deckId} resetHasOriginalTwoCards={resetHasOriginalTwoCards} setHouseCounter={getHouseCounter} setFinalFaceUp={setFinalFaceUp}/>
)}
  <div className="cardContainers2">
        {showHouseCards2(houseCards, stopGame)}
      </div>
      <div className="cardContainers">
        {/* <p>Deck of Cards</p> */}
        <img className="card-image" src="https://deckofcardsapi.com/static/img/back.png" alt="back of card"/>
        <img className="card-image" src="https://deckofcardsapi.com/static/img/back.png" alt="back of card"/>

      </div>
      <h2 className="centeredd">Player's Cards:</h2>
      
      <div className="gameResultBox">
  {blackJack && <div className="blackJack">{blackJack}</div>}</div>
      <div className="cardContainers">{showCards(playerCards)}</div>
      
  
</>
  );
};

export default Simulator;