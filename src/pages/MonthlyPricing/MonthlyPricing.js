import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import HorizontalTable from '../../components/HorizontalTable/HorizontalTable';
import PropertySellForm from '../../components/PropertySellForm/PropertySellForm';
import DownloadDataButton from '../../components/DownloadDataButton/DownloadDataButton';
import DemandVsTimeGraph from '../../components/DemandVsTimeGraph/DemandVsTimeGraph';
import { GameDataProvider } from '../../utils/GameDataContext';
import { GameDataContext } from '../../utils/GameDataContext';

const MonthlyPricing = ({ onPriceUpdate, onTogglePredatoryPricing, gameData }) => {
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const [isPredatoryPricing, setIsPredatoryPricing] = useState(false);
  const [revenue, setRevenue] = useState(10000);
  const [cost, setCost] = useState(0);
  const [propertyData, setPropertyData] = useState(null);
  const [weeklyRentData, setWeeklyRentData] = useState(Array(12).fill(0));
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const {currentGameData} = useContext(GameDataContext);
  const navigate = useNavigate();
  const [showCongratsModal, setShowCongratsModal] = useState(false);
const [userName, setUserName] = useState('');


  const handlePriceChange = (event) => {
    setMonthlyPrice(event.target.value);
  };

  const handlePriceSubmit = () => {
    onPriceUpdate(monthlyPrice);
    setMonthlyPrice('');
  };

  const handlePredatoryPricingChange = (newState) => {
    //setIsPredatoryPricing(newState);
    onTogglePredatoryPricing(newState);
  };

  const handleModalClose = () => {
    setShowCongratsModal(false);
    navigate('/game-outcome', { state: { userName } }); // Pass userName in state if needed
  };

  
  const handleFormSubmit = (data) => {
    // const updatedWeeklyRentData = [...weeklyRentData];
    // updatedWeeklyRentData[parseInt(data.rentOption) - 1] = parseFloat(data.currentRentPrice);
    // setWeeklyRentData(updatedWeeklyRentData);
    // setPropertyData(data); // You can use this data to display in PropertiesTable or elsewhere
    // calculateCostAndRevenue(data);
    // console.log(data)

  //   console.log('Form data:', data.currentRentPrice); // Log the raw form data
  // const weekIndex = parseInt(data.currentRentPrice, 10) - 1; // Always use radix 10 for parseInt
  // console.log('Parsed week index:', weekIndex); // Check the parsed index
  // const updatedWeeklyRentData = [...weeklyRentData];
  
  // // Check if weekIndex is a number and within the expected range
  // if (!isNaN(weekIndex) && weekIndex >= 0 && weekIndex < updatedWeeklyRentData.length) {
  //   updatedWeeklyRentData[weekIndex] = parseFloat(data.currentRentPrice);
  //   setWeeklyRentData(updatedWeeklyRentData);
  // } else {
  //   console.error('Invalid week index:', weekIndex);
  // }
  if (currentWeekIndex < weeklyRentData.length) {
    const updatedWeeklyRentData = [...weeklyRentData];
    updatedWeeklyRentData[currentWeekIndex] = parseFloat(data.currentRentPrice) || 0;
    setWeeklyRentData(updatedWeeklyRentData);
    console.log("devebe" ,currentGameData)

    // Move to the next week
    setCurrentWeekIndex(currentWeekIndex + 1);
  } else {
    setShowCongratsModal(true);
   
    // Handle the case when all weeks have been filled
    console.log('All weeks have been filled');
    
    // Optionally reset or do something else
  }

  setPropertyData(data); // Additional logic...
  };

  // const calculateCostAndRevenue = (data) => {
  //   // Implement your logic to calculate cost and revenue based on propertyData
  //   // For example, let's say cost is $1000 per room and revenue is $1500 per room
  //   const calculatedCost = data.numberOfRooms * 1000;
  //   const calculatedRevenue = revenue - calculatedCost;
  //   setCost(calculatedCost);
  //   setRevenue(calculatedRevenue);
  // };

  const graphData = weeklyRentData.map((rent, index) => ({ time: `Week ${index + 1}`, demand: rent }));

  // Render the interface
   return (
    
    <div className="property-purchase-container">
      
      {!showCongratsModal &&(<div className="top-content">
        <div className="table-container">
          <h1>Data Download</h1>
          <p>You can download all the data related to the selected properties from here.</p>
          <DownloadDataButton filename="SelectedPropertyDetails.txt"/>
          <h1>{currentGameData.zipCode}</h1>
          <h3>{currentGameData.propertyType}</h3>
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
          <p>{}</p>
        </div>
      </div>
        </div>
      </div>)}

      
    {/* Modal for congratulating the user */}
    {showCongratsModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Congratulations!</h2>
          <p>Please enter your name to see the results.</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleModalClose}>Continue</button>
        </div>
      </div>
    )}
      
    </div>
  );
};

export default MonthlyPricing;
