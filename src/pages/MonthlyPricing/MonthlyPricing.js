import React, { useState } from 'react';
//import Toggle from '../../components/MonthlyPricing/ToggleSwitch/ToggleSwitch'
import Calendar from '../../components/MonthlyPricing/Calender/Calender';
import Chart from '../../components/MonthlyPricing/BarChart/BarChart';
import Table from '../../components/MonthlyPricing/TableComponent/TableComponent';
import PropertiesTable from '../../components/PropertiesTable/PropertiesTable';
import RevenueCostChart from '../../components/RevenueCostChart/RevenueCostChart';
import PropertyInputForm from '../../components/PropertyInputForm/PropertyInputForm';
import DownloadDataButton from '../../components/DownloadDataButton/DownloadDataButton';


const MonthlyPricing = ({ gameData, onPriceUpdate, onTogglePredatoryPricing }) => {
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const [isPredatoryPricing, setIsPredatoryPricing] = useState(false);
  const [revenue, setRevenue] = useState(10000);
  const [cost, setCost] = useState(0);
  const [propertyData, setPropertyData] = useState(null);

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

  
  const handleFormSubmit = (data) => {
    setPropertyData(data); // You can use this data to display in PropertiesTable or elsewhere
    calculateCostAndRevenue(data);
  };

  const calculateCostAndRevenue = (data) => {
    // Implement your logic to calculate cost and revenue based on propertyData
    // For example, let's say cost is $1000 per room and revenue is $1500 per room
    const calculatedCost = data.numberOfRooms * 1000;
    const calculatedRevenue = revenue - calculatedCost;
    setCost(calculatedCost);
    setRevenue(calculatedRevenue);
  };

  // Render the interface
   return (
    
    <div className="property-purchase-container">
      
      <div className="top-content">
        <div className="table-container">
        <h1>Data Download</h1>
    <p>You can download all the data related to the selected properties from here.</p>
          <DownloadDataButton filename="SelectedPropertyDetails.txt"/>
          <h1>Revnue</h1>
          <h1>Demand</h1>
          <h1>ForeCasting</h1>
          
         
          <Table data={gameData.competitorsRevenue} />
          
    
        </div>
        {/* Move the map-container here, between table-container and chart-container */}
       
        <div className="map-container">
        <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="300" height="300"/>
          <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="300" height="300"/>
        </div>
        <div className="chart-container">
          <RevenueCostChart revenue={revenue} cost={cost}/>
          <div className="bottom-content">
        <div className="form-container">
          <PropertyInputForm onSubmit={handleFormSubmit}/>
        </div>
      </div>
        </div>
      </div>
      
    </div>

  //   <div className="monthly-pricing">
  //     <h2>Monthly Pricing and Management</h2>
  //     <Calendar gameSpan={12} />
      
  //     <div className="pricing-input">
  //       <label htmlFor="monthlyPrice">Set Monthly Rental Price:</label>
  //       <input
  //         type="number"
  //         id="monthlyPrice"
  //         value={monthlyPrice}
  //         onChange={handlePriceChange}
  //       />
  //       <button onClick={handlePriceSubmit}>Update Price</button>
  //     </div>

  //     <div className="charts-and-tables">
  //       {/* Chart for monthly revenue */}
  //       <Chart data={gameData.revenueData} />
        
  //       {/* Table for operating costs */}
  //       <Table data={gameData.operatingCosts} />
        
  //       {/* Table for competitors' revenue */}
  //       <Table data={gameData.competitorsRevenue} />
        
  //       {/* Table for fixed costs */}
  //       <Table data={gameData.fixedCosts} />
  //     </div>

  //     {/* <Toggle
  //       label="Predatory Pricing"
  //       checked={isPredatoryPricing}
  //       onChange={handlePredatoryPricingChange}
  //     /> */}
      
  //     {/* Notifications/Alerts for significant market events */}
  //     {gameData.marketEvents.map((event, index) => (
  //       <div key={index} className="market-event-notification">
  //         {event.description}
  //       </div>
  //     ))}
  //   </div>
  );
};

export default MonthlyPricing;
