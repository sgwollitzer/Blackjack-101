import React,{ useState, useEffect }  from 'react';
import Buttons from './Buttons';
const Player = ({cards,playerPress}) => {
   const [playerCards, setPlayerCards] = useState(cards);
    const [counter,setCounter]=useState(0);
    const [hasOriginalTwoCards, setHasOriginalTwoCards] = useState(false);
    
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
          
      }
      while (currCounter>21&&aces>0) {
        currCounter-=10;
        aces--;
      }
      return currCounter;

  }
     
  useEffect(() => {
          if (cards.length>0 && !hasOriginalTwoCards) {
            setPlayerCards(cards);
            setHasOriginalTwoCards(true);
            setCounter(calculateCounter(cards));
          }
        }, [cards,  hasOriginalTwoCards]);

        
        useEffect(() => {
          setCounter(calculateCounter(playerCards)); 
        }, [playerCards]);
 
 
  return (
    <>
      <Buttons press={playerPress} />
      </>
  );
};

export default Player;