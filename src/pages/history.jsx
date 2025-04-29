import React from 'react';
import './history.css';

const History = () => {
  return (
    <>
    <div className="stack">
  <h1 className="titleH">History of Blackjack</h1>
  <div className="section2 rulesection2">
  <h2 className="h2T">Origins</h2>
  <ul>
  <li>Blackjack originated in France and Spain under the name "Vingt-un" or "Vingt-et-un", meaning "21." It was predated by other games circling Europe that had goals of getting as close to a certain value as psosible, whether it be 15, 31, or 21.</li>
  <li>Around the time of WWI, "21" came to the US with a twist: a reward was given if a player had an ace of spades and a blackjack. This reward and its name cuaght on and the game of "21" became the game of "Blackjack" in the US. Finally, in 1931, Nevada created house-banked blackjack.</li>
  </ul>
  <h2 className="h2T">Blackjack's Most Famous Players</h2>
  <ul>
  <li>Jess Marcum was possibly the first card counter. Although the official strategy had yet to be created, Jess was kicked out of many casinos for creating a strategy that allowed him to "beat" blackjack.</li>
  <li>Baldwin, Cantey, Maisel, and McDermott wrote a book together about strategy and how to remember cards to increase your odds of winning.</li>
  <li>Edward Thorp detailed a "ten-count system" in the book Beat the Dealer that became one of the most famous card counting strategies to ever exist.</li>
  </ul>
  <h2 className="h2T">
    Now
  </h2>
  <p>Blackjack remains to be one of the most profitable games at a casino. However, casinos have measures in place to track card counting, and individuals caught card counting are often throw out of and banned from the casino.</p>
 </div>
  {/* https://www.blackjackapprenticeship.com/the-history-of-blackjack-and-card-counting/ */}
  <div className="knowMore">
    <h2>Want to Know More?</h2>
  <div id="youtube">
  <iframe width='700' height='400' src='https://www.youtube.com/embed/i6sIh3966G4' allow='autoplay; encrypted-media' allowFullScreen
  title='history of blackjack'
/>
{/* https://stackoverflow.com/questions/44715819/iframes-and-react-js-how-to-embed-a-youtube-video-into-my-app */}
</div>
</div>
 </div>
  </>
)
  ;
};

export default History;