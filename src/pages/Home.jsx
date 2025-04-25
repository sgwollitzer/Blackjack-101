import React from 'react';

const Home = () => {
  return( 
  <><h1>Our Vision: teach you everything you need to know about blackjack</h1>
  <div>
      <h2>Why play blackjack?</h2>
      <p> stats</p>
      <p>Click here to learn more about how blackjack came to be</p>
    </div>
    <div>
      <h2>Want to know how to actually make money playing blackjack in casinos?</h2>
      <p>Click here to learn the stategy that'll increase your odds</p>
    </div>
    <div>
      <h2>Curious about where blackjack is played the most? click here</h2>
    </div>
    <div>
      <h2>Rules of Blackjack:</h2>
      <h3>Objective: </h3>
      <p>try to beat the dealer by getting a count of cards as close to 21 as possible without going over</p>
      <h3>Card Values: Ace is valued at 11 unless that would caues a bust. If it would cause a bust, the ace is valued as a 1. Face cards are worth 10 and number cards are worth their numbers</h3>
      <h3>Betting: betting occurs before the cards are dealed</h3>
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
    <div>
      <h2>Play Blackjack here!</h2>
      <p>click to play</p>
    </div>
    </>

   ) ;

};

export default Home;