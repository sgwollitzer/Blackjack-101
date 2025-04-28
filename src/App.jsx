import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CasinoInfo from './pages/casinoInfo'
import CountingCards from './pages/countingCards'
import History from './pages/history'
import Simulator from './pages/simulator'

function App ()  {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casinoInfo" element={<CasinoInfo />} />
        <Route path="/countingCards" element={<CountingCards />} />
        <Route path="/history" element={<History />} />
        <Route path="/simulator" element={<Simulator />} />

      </Routes>
    </HashRouter>
  );
};

export default App;