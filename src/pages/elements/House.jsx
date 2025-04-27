import React from 'react';

const House = ({cards,deckId}) => {
    const [houseCards, setHouseCards] = useState(cards);
    const [stopGame,setStopGame]=useState(false);
    const [counter,setCounter]=useState(0);

    const calculateCounter=(cards)=>{
        let currCounter=0;
        let aces=0;
        for(const card of cards){
            if(card.value=='JACK'||card.value=='QUEEN' || card.value=='KING'){
                currCounter+=10;
            } else if(card.value=='ACE'){
                aces++;
            }else{
                currCounter+=card.value;
            }
            if(aces!=0){
                currCounter+=11;
                if(currCounter>21){
                    total-=10;
                }
            }
        }
        return currCounter;

    }
    const drawCards=async()=>{
        let currHouseCards=[...houseCards];
        let currCounter=calculateCounter(currHouseCards);
        while (currCounter<17){
            try{
                let drawnCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
                console.log("drawn card", drawnCard.data.cards);
                let drawnCardVal=drawnCard.data.cards[0];
                currHouseCards.push(drawnCardVal);
                currCounter=calculateCounter(currHouseCards);
            }catch{
                console.log("could not continue drawing cards for house");
            }
            setHouseCards(currHouseCards);
            setCounter(currCounter);
            if(currCounter>21){
                onResult('bust');
            } else{
                onResult('not bust');
            }
            setStopGame(true);
        }
    }


  return (
      <h2>House</h2> 
  );
};

export default House;