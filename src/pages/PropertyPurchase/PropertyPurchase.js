import React, { useState } from 'react';
import PropertiesTable from '../../components/PropertiesTable/PropertiesTable';
import RevenueCostChart from '../../components/RevenueCostChart/RevenueCostChart';
import PropertyInputForm from '../../components/PropertyInputForm/PropertyInputForm';
import DownloadDataButton from '../../components/DownloadDataButton/DownloadDataButton';
import './PropertyPurchase.css';


const PropertyPurchase = () => {
  const [revenue, setRevenue] = useState(10000);
  const [cost, setCost] = useState(0);
  const [propertyData, setPropertyData] = useState(null);

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
  

  return (
    <div className="property-purchase-container">
      <h1>Property Purchase and Analysis</h1>
      <div className="top-content">
        <div className="table-container">
          <PropertiesTable />
        </div>
        {/* Move the map-container here, between table-container and chart-container */}
        <div className="map-container">
          <img src='https://www.keymaps.com/cdn/shop/products/ScreenShot2022-07-07at2.58.46PM_300x300.jpg?v=1657224372' alt='Map of Austin' width="700" height="700"/>
        </div>
        <div className="chart-container">
          <RevenueCostChart revenue={revenue} cost={cost}/>
          <div className="bottom-content">
        <div className="form-container">
          <PropertyInputForm onSubmit={handleFormSubmit}/>
        </div>
        <div className="download-button-container">
          <DownloadDataButton filename="SelectedPropertyDetails.txt"/>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};
export default PropertyPurchase;
