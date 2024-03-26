import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameDataProvider } from '../src/utils/GameDataContext';
import PropertyPurchase from './pages/PropertyPurchase/PropertyPurchase';
import MonthlyPricing from './pages/MonthlyPricing/MonthlyPricing';
import GameOutcome from './pages/GameOutcome/GameOutcome';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <GameDataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/property-purchase" element={<PropertyPurchase />} />
          <Route path="/monthly-pricing" element={<MonthlyPricing />} />
          <Route path="/game-outcome" element={<GameOutcome />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </GameDataProvider>
  );
}

export default App;