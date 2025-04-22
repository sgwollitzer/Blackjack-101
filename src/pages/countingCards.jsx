import React from 'react';

const CountingCards = () => {
  return (
    <>
  <h1>Counting Cards: Learn Two Strategies</h1>
  <p>*Disclaimer* Casinos have methods in place to catch players that card count. Card count at your own discretion.</p>
    <h2>Hi-Lo</h2>
    <ol>
      <li>Bet at least 200 times the minimum bet</li>
      <li>Keep a counter starting at 0 of any card you see. Add 1 to the counter for every 2,3,5,6, or 6 you see. Subtract 1 for every 10, Jack, Queen, King, or Ace you see</li>
      <li>Keep track of true count: counter/number of decks in use</li>
      <li>Every round, bet the true count - 1 times the betting unit</li>
    </ol>
    <h2>Omega II</h2>
    <p>Follow the same steps as Hi-Lo, except:</p>
    <ol>
      <li>cards of value 2,3, or 7 count as +1</li>
      <li>cards of value 4,5, or 6 count as +2</li>
      <li>cards of value 9 count as -1</li>
      <li>cards of value 10 count as -2</li>
      <li>cards of value 8 or 10 count as 0</li>
    </ol>
    <p>Positive counts = more low cards in the deck</p>
    <p>Negative counts = more higher cards in the deck</p>
    {/* https://www.wikihow.com/Count-Cards-in-Blackjack */}
    <h2>Want to Learn More?</h2>
    <p>Here are some great books to check out:</p>
    </>
  )
  ;

};

export default CountingCards;