import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CasinoInfo from './pages/casinoInfo'
import CountingCards from './pages/countingCards'
import History from './pages/history'
import Simulator from './pages/simulator'

function App ()  {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casinoInfo" element={<CasinoInfo />} />
        <Route path="/countingCards" element={<CountingCards />} />
        <Route path="/history" element={<History />} />
        <Route path="/simulator" element={<Simulator />} />

      </Routes>
    </Router>
  );
};

export default App;