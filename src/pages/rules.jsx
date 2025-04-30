import React from 'react';
import './rules.css';

const Rules = () => {
  return (
    <>
      <h1 className="titleH">Rules of Blackjack</h1>

  <div className="section2 rulesection2">
      <h2 className="h2T">Objective </h2>
      <p>Try to beat the dealer by getting a count of cards as close to 21 as possible without going over.</p>
      <h2 className="h2T">Card Values</h2>
      <p> Ace is valued at 11 unless that would caues a bust. Bust means loss. If it would cause a bust, the ace is valued as a 1. Face cards are worth 10 and number cards are worth their numbers.</p>
      <h2 className="h2T">Betting</h2>
      <p> Betting occurs before the cards are dealed.</p>
      <h2 className="h2T">Play</h2>
      <p>The dealer will give one card face up to each player including themself. This is repeated, except the dealer's second card will be face down.</p>
      {/* https://bicyclecards.com/how-to-play/blackjack */}
      <p>Each player is then allowed to make one of four decisions: Hit, Stand, Double Down, Split, or Surrender. After this first decision, future decisions for the player can only be to hit or stand.</p>
      <p>Hit: Take another card</p>
      <p>Stand: Do nothing</p>
      <p>Double down: Double the original bet and take only one more card.</p>
      <p>Split: If your two cards hold the same value, choose to create two hands, receive two starting cards, and place a bet on the second hand.</p>
      <p>Surrender: Forfeit half the bet and close your hand. Cannot be done after a split.</p>
      <h2 className="h2T">Dealer's Play</h2>
      <p>After all players are finished, the dealer will draw cards until the hand is at at least 17.</p>
      <h2 className="h2T">Win/Lose/Push</h2>
      <p>Player Loses: the player loses if the dealer has a blackjack and they do not, if the player's hand is lower than the dealer's, or if the player busts.</p>
      <p>Player Wins: the player has a blackjack and the dealer does not, the player's hand is higher than the dealer's, or the dealer busts.</p>
      <p>Push: if both the player and the dealer have a blackjack, the player gets their money back but nothing more.</p>
      {/* https://en.wikipedia.org/wiki/Blackjack */}
      <h2 className="h2T">Insurance</h2>
      <p>If a dealer shows an ace, the player can place a bet worth up to half of the player's current bet that the dealer has a blackjack. Insurance bets must be placed before any players play. If the dealer has a blackjack, the player receives back double the original insurance bet.</p>
    </div>
    
 
  </>
)
  ;
};

export default Rules;