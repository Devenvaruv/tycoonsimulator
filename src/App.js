import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyPurchase from './pages/PropertyPurchase/PropertyPurchase';
import MonthlyPricing from './pages/MonthlyPricing/MonthlyPricing';
import GameOutcome from './pages/GameOutcome/GameOutcome';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

import Header from './components/Header/Header';

const gameData = {
  revenueData: [
    { name: 'January', Revenue: 4000 },
    { name: 'February', Revenue: 3000 },
    { name: 'March', Revenue: 4300 },
    { name: 'April', Revenue: 3500 },
    { name: 'May', Revenue: 5200 },
    { name: 'June', Revenue: 4700 },
    { name: 'July', Revenue: 5400 },
    { name: 'August', Revenue: 4600 },
    { name: 'September', Revenue: 4800 },
    { name: 'October', Revenue: 5000 },
    { name: 'November', Revenue: 4700 },
    { name: 'December', Revenue: 5500 },
  ],
  operatingCosts: [
    { month: 'January', Cost: 2000 },
    { month: 'February', Cost: 1800 },
    { month: 'March', Cost: 2050 },
    // ...and so on for each month
  ],
  competitorsRevenue: [
    { competitor: 'Competitor A', Revenue: 3000 },
    { competitor: 'Competitor B', Revenue: 3200 },
    // ...could be more detailed or structured differently based on actual game design
  ],
  fixedCosts: [
    { costType: 'Maintenance', Amount: 500 },
    { costType: 'Insurance', Amount: 300 },
    // ...other fixed costs
  ],
  marketEvents: [
    { date: '2023-03-17', description: 'St. Patrick’s Day Festival - High demand expected' },
    { date: '2023-07-04', description: 'Independence Day Celebrations - Prices can be increased' },
    // ...other events
  ],
};

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/property-purchase" element={<PropertyPurchase />} />
        <Route path="/monthly-pricing" element={<MonthlyPricing gameData={gameData}/>} />
        <Route path="/game-outcome" element={<GameOutcome/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
