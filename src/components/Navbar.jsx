import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div >
        <Link to="/casinoInfo">Casino Info</Link>
      </div>
      <div >
        <Link to="/countingCards">Counting Cards</Link>
      </div>
      <div >
        <Link to="/history">History</Link>
      </div>
      <div >
        <Link to="/simulator">Simulator</Link>
      </div>
    </nav>
  );
};

export default Navbar;
