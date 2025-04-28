import React,{ useState, useEffect }  from 'react';
import axios from 'axios';

const House = ({cards,deckId, resetHasOriginalTwoCards, setHouseCounter}) => {
    const [houseCards, setHouseCards] = useState(cards);
    const [stopGame,setStopGame]=useState(false);
    const [counter,setCounter]=useState(0);
    const [hasOriginalTwoCards, setHasOriginalTwoCards] = useState(false);

    const calculateCounter=(cards, stopGame)=>{
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
    const drawCards=async()=>{
        let currHouseCards=[...houseCards];
        console.log("House cards before drawing more:", currHouseCards);
        let currCounter=calculateCounter(currHouseCards);
        console.log("currCounter",currCounter);
        while (currCounter<17){
            console.log("is this happening");
            try{
                let drawnCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
                console.log("drawn card", drawnCard.data.cards);
                let drawnCardVal=drawnCard.data.cards[0];
                currHouseCards.push(drawnCardVal);
                currCounter=calculateCounter(currHouseCards);
            }catch{
                console.error("Error drawing card:", error);
                console.log("could not continue drawing cards for house");
            }
            setHouseCards(currHouseCards);
            setCounter(currCounter);
            setHouseCounter(currCounter);
            
            
        }
        if(currCounter>21){
               // gameResult('bust');
               setHouseCounter(0); //0=bust
               console.log("bust");
            } else{
                setHouseCounter(currCounter);
                //gameResult('not bust');
                console.log("not bust");
            }
        setStopGame(true);
    }
    useEffect(() => {
        resetHasOriginalTwoCards();
      }, [resetHasOriginalTwoCards]);
    useEffect(() => {
        if (cards.length>0 && !stopGame && !hasOriginalTwoCards) {
          setHouseCards(cards);
          setHasOriginalTwoCards(true);
        }
      }, [cards, stopGame, hasOriginalTwoCards]);
    
      useEffect(() => {
        if (hasOriginalTwoCards && !stopGame) {
          drawCards();
        }
      }, [hasOriginalTwoCards, stopGame]);
    
      // const showHouseCards=(cards)=>{
      //   return cards.map((card,index)=>(
      //     <img key={index} src={card.image} className="card-image" />
      //   ));
      // };
      const showHouseCards=(cards,stopGame)=>{
        if(stopGame){
          console.log("cards will be facedown");
        return cards.map((card,index)=>{
          let cardImage;
          if(index==0){
            cardImage=card.image;
          } else{
            cardImage = 'https://deckofcardsapi.com/static/img/back.png';

          }
           return <img key={index} src={cardImage} className="card-image" />

        });
      }else{
        console.log("cards will not be facedown");

        return cards.map((card,index)=>(
               <img key={index} src={card.image} className="card-image" />
             ));
      }
      }


  return (
    <>
      <h2 className="centeredd">House Cards:</h2> 
      <div className="cardContainers">{showHouseCards(houseCards,stopGame)}</div>
      </>
  );
};

export default House;