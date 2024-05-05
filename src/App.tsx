import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import AnxietyCard from './components/AnxietyCard';
import BullyingCard from './components/BullyingCard';
import SicknessCard from './components/SicknessCard';
import BereavementCard from './components/BereavementCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/anxiety" element={<AnxietyCard />} />
        <Route path="/bullying" element={<BullyingCard />} />
        <Route path="/sickness" element={<SicknessCard />} />
        <Route path="/bereavement" element={<BereavementCard />} />
      </Routes>
    </Router>
  );
}

export default App;