import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import playingcardsimg from '../images/playingcards.png';

const Navbar = () => {
  return (
    <nav>
      <div id="cards-nav-circ">
      <Link to="/">
      <img
      id="playing-cards-img"
        src={playingcardsimg}
        alt="playing cards that go to homepage"
        
      />
    </Link>
      </div>
      <div id="main-nav">
      <div >
        <Link className="hover" to="/history">History</Link>
      </div>
      <div >
        <Link className="hover" to="/countingCards">Counting Cards</Link>
      </div>
      <div >
        <Link className="hover" to="/casinoInfo">Top Casinos</Link>
      </div>
      
      
      <div >
        <Link className="hover" to="/simulator">Simulator</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
