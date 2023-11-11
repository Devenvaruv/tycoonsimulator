import React, { useState } from 'react';
import Toggle from '../../components/MonthlyPricing/ToggleSwitch/ToggleSwitch'
import Calendar from '../../components/MonthlyPricing/Calender/Calender';
import Chart from '../../components/MonthlyPricing/BarChart/BarChart';
import Table from '../../components/MonthlyPricing/TableComponent/TableComponent';


const MonthlyPricing = ({ gameData, onPriceUpdate, onTogglePredatoryPricing }) => {
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const [isPredatoryPricing, setIsPredatoryPricing] = useState(false);

  const handlePriceChange = (event) => {
    setMonthlyPrice(event.target.value);
  };

  const handlePriceSubmit = () => {
    onPriceUpdate(monthlyPrice);
    // Reset price input if necessary
    setMonthlyPrice('');
  };

  const handlePredatoryPricingChange = (newState) => {
    setIsPredatoryPricing(newState);
    onTogglePredatoryPricing(newState);
  };

  // Render the interface
  return (
    <div className="monthly-pricing">
      <h2>Monthly Pricing and Management</h2>
      <Calendar gameSpan={12} />
      
      <div className="pricing-input">
        <label htmlFor="monthlyPrice">Set Monthly Rental Price:</label>
        <input
          type="number"
          id="monthlyPrice"
          value={monthlyPrice}
          onChange={handlePriceChange}
        />
        <button onClick={handlePriceSubmit}>Update Price</button>
      </div>

      <div className="charts-and-tables">
        {/* Chart for monthly revenue */}
        <Chart data={gameData.revenueData} />
        
        {/* Table for operating costs */}
        <Table data={gameData.operatingCosts} />
        
        {/* Table for competitors' revenue */}
        <Table data={gameData.competitorsRevenue} />
        
        {/* Table for fixed costs */}
        <Table data={gameData.fixedCosts} />
      </div>

      <Toggle
        label="Predatory Pricing"
        checked={isPredatoryPricing}
        onChange={handlePredatoryPricingChange}
      />
      
      {/* Notifications/Alerts for significant market events */}
      {gameData.marketEvents.map((event, index) => (
        <div key={index} className="market-event-notification">
          {event.description}
        </div>
      ))}
    </div>
  );
};

export default MonthlyPricing;
