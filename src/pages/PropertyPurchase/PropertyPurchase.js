import React, { useState, useContext } from 'react';
import RevenueCostChart from '../../components/RevenueCostChart/RevenueCostChart';
import PropertyInputForm from '../../components/PropertyInputForm/PropertyInputForm';
import DownloadDataButton from '../../components/DownloadDataButton/DownloadDataButton';

import './PropertyPurchase.css';

import { GameDataContext } from '../../utils/GameDataContext';



const PropertyPurchase = () => {
  const [revenue, setRevenue] = useState(10000);
  const [cost, setCost] = useState(0);
  const [propertyData, setPropertyData] = useState(null);
  const { gameStart } = useContext(GameDataContext);

  const handleFormSubmit = (data) => {
    setPropertyData(data); // You can use this data to display in PropertiesTable or elsewhere
    calculateCostAndRevenue(data);
    gameStart(data);
  };
  const calculateCostAndRevenue = (data) => {
    // Implement your logic to calculate cost and revenue based on propertyData
    // For example, let's say cost is $1000 per room and revenue is $1500 per room
    const calculatedCost = data.numberOfRooms * 1000;
    const calculatedRevenue = revenue - calculatedCost;
    setCost(calculatedCost);
    setRevenue(calculatedRevenue);
  };

  return (
    <div className="property-purchase-container">
      <div className="top-content">
        <div className="table-container">
          <h1>In-Depth Property Financials Analysis</h1>
          <p>Access our tailored dataset for insights into property values and market trends. Customize your analysis by specifying room count, bathroom number, and property type to uncover market desirability, investment potential, and strategic planning opportunities.</p>
          <DownloadDataButton filename="SelectedPropertyDetails.txt" />
          <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="150" height="150" />
          <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="150" height="150" />
        </div>
        <div className="map-container">
          <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="300" height="300" />
          <img src='https://i.stack.imgur.com/wciGE.png' alt='Map of Austin' width="300" height="300" />
        </div>
        <div className="chart-container">
          <RevenueCostChart revenue={revenue} cost={cost} />
          <div className="bottom-content">
            <div className="form-container">
              <PropertyInputForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyPurchase;
