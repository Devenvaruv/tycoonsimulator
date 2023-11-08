import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyPurchase from './pages/PropertyPurchase/PropertyPurchase';
import MonthlyPricing from './pages/MonthlyPricing/MonthlyPricing';
import GameOutcome from './pages/GameOutcome/GameOutcome';
import Faq from './pages/Faq/Faq';

import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<PropertyPurchase/>} />
        <Route path="/monthly-pricing" element={<MonthlyPricing/>} />
        <Route path="/game-outcome" element={<GameOutcome/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
