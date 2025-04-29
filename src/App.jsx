import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CasinoInfo from './pages/casinoInfo'
import CountingCards from './pages/countingCards'
import History from './pages/history'
import Simulator from './pages/simulator'
import backgroundImage from './images/backround.jpg'; 

import Rules from './pages/rules'


const appStyle = {
  // backgroundImage: `url(${backgroundImage})`,
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center center',
  // minHeight: '100vh',
};

function App ()  {
  return (
    <HashRouter>
     <div style={appStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casinoInfo" element={<CasinoInfo />} />
        <Route path="/countingCards" element={<CountingCards />} />
        <Route path="/history" element={<History />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/rules" element={<Rules />} />


      </Routes>
      </div>
    </HashRouter>
  );
};

export default App;