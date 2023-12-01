import React, { useState } from 'react';

import HorizontalTable from '../../components/HorizontalTable/HorizontalTable';
import PropertySellForm from '../../components/PropertySellForm/PropertySellForm';
import DownloadDataButton from '../../components/DownloadDataButton/DownloadDataButton';
import DemandVsTimeGraph from '../../components/DemandVsTimeGraph/DemandVsTimeGraph';


const MonthlyPricing = ({ gameData, onPriceUpdate, onTogglePredatoryPricing }) => {
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const [isPredatoryPricing, setIsPredatoryPricing] = useState(false);
  const [revenue, setRevenue] = useState(10000);
  const [cost, setCost] = useState(0);
  const [propertyData, setPropertyData] = useState(null);
  const [weeklyRentData, setWeeklyRentData] = useState(Array(12).fill(0));

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
    const updatedWeeklyRentData = [...weeklyRentData];
    updatedWeeklyRentData[parseInt(data.rentOption) - 1] = parseFloat(data.currentRentPrice);
    setWeeklyRentData(updatedWeeklyRentData);
    setPropertyData(data); // You can use this data to display in PropertiesTable or elsewhere
    calculateCostAndRevenue(data);
    console.log(data);
  };

  const calculateCostAndRevenue = (data) => {
    // Implement your logic to calculate cost and revenue based on propertyData
    // For example, let's say cost is $1000 per room and revenue is $1500 per room
    const calculatedCost = data.numberOfRooms * 1000;
    const calculatedRevenue = revenue - calculatedCost;
    setCost(calculatedCost);
    setRevenue(calculatedRevenue);
  };
  const graphData = weeklyRentData.map((rent, index) => ({ time: `Week ${index + 1}`, demand: rent }));

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
          <h1> competitors in the zipcode</h1>
          
         
          <HorizontalTable data={weeklyRentData}/>
        </div>

        <div>
          <p>random event</p>
        </div>
        <div className="chart-container">
          <DemandVsTimeGraph data={graphData}/>
          <div className="bottom-content">
        <div  className="form-container">
          <PropertySellForm onSell={handleFormSubmit}/>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default MonthlyPricing;
