import React from 'react';
import './Home.css';
import playingcardswhiteimg from '../images/playingcardswhite.jpg';
import topviewimg from '../images/topview.jpg';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return( 
  <>
  <div className="first-section">
  <div className="big section">
  <h1>Blackjack 101</h1>
  <img
        id="playing-cards-img2"
          src={playingcardswhiteimg}
          alt="playing cards"
          
        />
  </div>
  <div className="section rulesection">
  <img
        id="top-view-img"
          src={topviewimg}
          alt="top view of blackjack gameplay"
          
        />
        <motion.div className="buttonRules" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
        <Link className="black" to="/rules">Learn the Rules</Link></motion.div>
        <div className="third-section ">
      <h1>Click to Play the Simulator!</h1>
      
      <motion.div className="border" whileHover={{  borderColor: "black", backgroundColor: 'rgb(155,35,37)', color:"white" }}>
  <Link  to="/simulator">Start Playing</Link>
</motion.div>
    </div>
  </div>
  </div>
  
    <div className="second-section">
  <div className="card">
  <h2>History</h2>
  <motion.div className="button" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
  <Link className="black aleo" to="/history">Click here to learn more about how blackjack came to be</Link></motion.div>
    </div>
    <div className="card">
    <h2>Counting Cards</h2>
    <motion.div className="button" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>

            <Link className="black aleo"to="/countingCards">Want to know how to actually make money playing blackjack in casinos? Click here to learn the strategy that'll increase your odds</Link></motion.div>
    </div>
    <div className="card">
    
    <h2>Top Casinos</h2>
    <motion.div className="button" whileHover={{scale:1.1}} transition={{ type: "spring", bounce: 0.5 }}>
            <Link className="black aleo" to="/casinoInfo">Curious about where blackjack is played the most? Click Here</Link></motion.div>
    </div>
    </div>
    </>

   ) ;

};

export default Home;