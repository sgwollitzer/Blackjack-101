import React from 'react';
import './Home.css';
import playingcardswhiteimg from '../images/playingcardswhite.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return( 
  <>
  <div className="first-section">
  <div className="big section">
  <h1>Welcome to Blackjack</h1>
  <img
        id="playing-cards-img2"
          src={playingcardswhiteimg}
          alt="playing cards"
          
        />
  </div>
  <div className="section rulesection">
      <h2>Rules of Blackjack:</h2>
      <h3>Objective: </h3>
      <p>Try to beat the dealer by getting a count of cards as close to 21 as possible without going over</p>
      <h3>Card Values:</h3>
      <p> Ace is valued at 11 unless that would caues a bust. If it would cause a bust, the ace is valued as a 1. Face cards are worth 10 and number cards are worth their numbers</p>
      <h3>Betting:</h3>
      <p> betting occurs before the cards are dealed</p>
      <h3>Play:</h3>
      <p>The dealer will give one card face up to each player including themself. This is repeated, except the dealer's second card will be face down.</p>
      {/* https://bicyclecards.com/how-to-play/blackjack */}
      <p>Each player is then allowed to make one of four decisions: Hit, Stand, Double Down, Split, or Surrender. After this first decision, future decisions for the player can only be to hit or stand.</p>
      <p>Hit: Take another card</p>
      <p>Stand: Do nothing</p>
      <p>Double down: Double the original bet and take only one more card.</p>
      <p>Split: If your two cards hold the same value, choose to create two hands, receive two starting cards, and place a bet on the second hand.</p>
      <p>Surrender: Forfeit half the bet and close your hand. Cannot be done after a split.</p>
      <h3>Dealer's Play:</h3>
      <p>After all players are finished, the dealer will draw cards until the hand is at at least 17.</p>
      <h3>Win/Lose/Push</h3>
      <p>Player Loses: the player loses if the dealer has a blackjack and they do not, if the player's hand is lower than the dealer's, or if the player busts</p>
      <p>Player Wins: the player has a blackjack and the dealer does not, the player's hand is higher than the dealer's, or the dealer busts</p>
      <p>Push: if both the player and the dealer have a blackjack, the player gets their money back but nothing more</p>
      {/* https://en.wikipedia.org/wiki/Blackjack */}
      <h3>Insurance</h3>
      <p>If a dealer shows an ace, the player can place a bet worth up to half of the player's current bet that the dealer has a blackjack. Insurance bets must be placed before any players play. If the dealer has a blackjack, the player receives back double the original insurance bet.</p>
    </div>
    </div>
    <div className="second-section">
  <div className="card">
  <h2>History</h2>
  <div className="button">
          <Link className="black" to="/history">Click here to learn more about how blackjack came to be</Link></div>
    </div>
    <div className="card">
    <h2>Counting Cards</h2>
    <div className="button">
            <Link className="black"to="/countingCards">Want to know how to actually make money playing blackjack in casinos? Click here to learn the stategy that'll increase your odds</Link></div>
    </div>
    <div className="card">
    
    <h2>Casino Info</h2>
    <div className="button">
            <Link className="black" to="/casinoInfo">Curious about where blackjack is played the most? Click Here</Link></div>
    </div>
    </div>
    <div className="third-section ">
      <h1>Play Blackjack Now!</h1>
      <Link className="border" to="/simulator">Click to Play the Simulator</Link>
    </div>
    </>

   ) ;

};

export default Home;