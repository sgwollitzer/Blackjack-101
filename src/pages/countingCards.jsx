import React from 'react';
import './countingCards.css';
import beatthedealerimg from '../images/beatthedealer.jpg';
import blackjacktowin from '../images/blackjacktowin.jpg';
import basicstrategy from '../images/basicstrategy.jpg';
import { motion } from "framer-motion";



const CountingCards = () => {
  return (
    <>
  <h1 className="titleCC">Counting Cards: Learn Two Strategies</h1>
  <p className="red-underline">*Disclaimer* Casinos have methods in place to catch players that card count. Card count at your own discretion.</p>
    <div className="rulesection">
    <h2 className="h2T">Hi-Lo</h2>
    <ol>
      <li>Bet at least 200 times the minimum bet</li>
      <li>Keep a counter starting at 0 of any card you see. Add 1 to the counter for every 2, 3, 4, 5, or 6 you see. Subtract 1 for every 10, Jack, Queen, King, or Ace you see</li>
      <li>Keep track of true count: counter divided by number of decks in use</li>
      <li>Every round, bet the true count - 1 times the betting unit</li>
    </ol>
    <h2 className="h2T">Omega II</h2>
    <p>Follow the same steps as Hi-Lo, except:</p>
    <ol>
      <li>cards of value 2, 3, or 7 count as +1</li>
      <li>cards of value 4, 5, or 6 count as +2</li>
      <li>cards of value 9 count as -1</li>
      <li>cards of value 10 count as -2</li>
      <li>cards of value 8 or 10 count as 0</li>
    </ol>
    <p>Positive counts = more low cards in the deck</p>
    <p>Negative counts = more higher cards in the deck</p>
    </div>
    {/* https://www.wikihow.com/Count-Cards-in-Blackjack */}
    <div className="rulesection">
    <h2>Want to Learn More?</h2>
    <p className="makecenter">Here are some great books to check out:</p>

    <div id="borderbooks">
    <motion.div className="borderimg hiding" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
    <a
  href="https://www.amazon.com/Beat-Dealer-Winning-Strategy-Twenty-One/dp/0394703103"
  target="_blank"
>
  <img
  className="bookimg"
    src={beatthedealerimg}
    alt="image of the beat the dealer book"
  />
</a>
    
    </motion.div>
    <motion.div className="borderimg" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
    <a
  href="https://www.amazon.com/Playing-Blackjack-Win-Strategy-Game/dp/1580422519"
  target="_blank"
>
  <img
  className="bookimg"
    src={blackjacktowin}
    alt="image of the play blackjack to win book"
  />
</a>
</motion.div>
    <motion.div className="borderimg hiding" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
    <a
  href="https://www.amazon.com/Blackjack-Basic-Strategy-Chart-Dealer/dp/0982119151/ref=sr_1_3?crid=2K6V9BZGC318D&dib=eyJ2IjoiMSJ9.XCLO7vqC3376aCqnT6Lat2lvSJErE1aDIl3sIV6ETBvU9T3QAlC9JEqG4FbmQAaXQSROqZic5FLpyKIdPJhih5-s2arwyzcTWRf3TiDjhULb9o9d0GGyHy3B3Xe51XEqZur29ze54Df7toSa-R9scAuaJvdJ3oRYXlXHmg-7yZli6fL9qnQ30NADIkqxV-7QcMipKoTM0b410ts8SkYz64HQ0bgM91wnnQCPqAW-BVg.hfe917uThmNFQ6-se4AyR76iAY-ZKaniXsZ1bChq7GM&dib_tag=se&keywords=learn+blackjack+card+counting&qid=1745608249&s=books&sprefix=learn+blackjack+card+countin%2Cstripbooks%2C102&sr=1-3"
  target="_blank"
>
  <img
  className="bookimg"
    src={basicstrategy}
    alt="image of the basic strategy book"
  />
</a>
</motion.div>    </div>
    </div>
    
    </>
  )
  ;

};

export default CountingCards;