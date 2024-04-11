import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import HorizontalTable from "../../components/HorizontalTable/HorizontalTable";
import PropertySellForm from "../../components/PropertySellForm/PropertySellForm";

import DemandVsTimeGraph from "../../components/DemandVsTimeGraph/DemandVsTimeGraph";
import BellGraph from "../../components/BellGraph/BellGraph";
import PriceTable from "../../components/PriceTable/PriceTable";
import { GameDataContext } from "../../utils/GameDataContext";
import "./MonthlyPricing.css";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const MonthlyPricing = () => {
  const { currentGameData } = useContext(GameDataContext);
  const navigate = useNavigate();
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [doDisplayCard, setDoDisplayCard] = useState(false);
  const [userName, setUserName] = useState("");
  const [competatorRent, setCompetatorRent] = useState();
  const [thisWeekDeviation, setThisWeekDeviation] = useState(1);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const [weeklyRentData, setWeeklyRentData] = useState(Array(16).fill(0));
  const [weeklyDemandData, setWeeklyDemandData] = useState(Array(16).fill(0));
  const [weeklyPercentageLossData, setWeeklyPercentageLossData] = useState(
    Array(16).fill(0)
  );
  const jsonData = require("./df.json"); 

  const toggle = () => {
    if(currentWeekIndex >= 16){
      setShowCongratsModal(true);
    }
    setDoDisplayCard(!doDisplayCard);
  };

  const findMatchingRow = (data, filters) => {
    return data.find((row) => {
      return Object.keys(filters).every((key) => row[key] === filters[key]);
    });
  };

  const [sum, setSum] = useState(50); // Using state to store the sum

  useEffect(() => {
    // Assuming `jsonData` is available within this component, or fetched inside this useEffect
    let tempSum = 0;
    let currentFilters = {
      // Initialize your filters here, except for the 'week'
      zipcode: parseInt(currentGameData.zipCode),
      bathrooms: parseInt(currentGameData.bathrooms),
      bedrooms: parseInt(currentGameData.numberOfRooms),
      accommodates: parseInt(currentGameData.accommodation),
      property_type: "Entire home/apt",
      // 'week' will be set in the loop
    };

    for (let week = 1; week <= 16; week++) {
      currentFilters.week = week;
      const matchingRow = findMatchingRow(jsonData, currentFilters);
      if (matchingRow) {
        tempSum += matchingRow.simulated_occupancy; 
      } else {
        tempSum += 5;
      }
    }

    setSum((tempSum / 16) * 10); // Update state with the final sum
  }, [currentGameData]);

  const getRandomNumberAround = (center, deviation) => {
    const min = center - deviation;
    const max = center + deviation;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleModalClose = async () => {
    if (!userName) {
      alert("Please enter a username");
      return;
    }
    try {
      const requestBody = {
        // Replace these with actual property names and values you want to send
        handle: userName,
        score: weeklyPercentageLossData.reduce((acc, current) => acc + current, 0), // Replace with actual score variable
        date: new Date().toLocaleString(), // Or any other date format as per your backend requirement
      };

      // Perform the POST request
      const response = await fetch(
        "https://tycoonsim.wn.r.appspot.com/saveTycoonRecord",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include other headers as needed, e.g., authorization
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Process the response (optional)
      const responseData = await response.json();
      console.log("Response from API:", responseData);

      // Continue with navigation
      navigate("/game-outcome", { state: { userName } });
    } catch (error) {
      console.error("Error in POST request:", error);
    }
    setShowCongratsModal(false);

    navigate("/game-outcome", { state: { userName } }); // Pass userName in state if needed
  };

  const handleFormSubmit = (data) => {
    const filters = {
      zipcode: parseInt(currentGameData.zipCode),
      bathrooms: parseInt(currentGameData.bathrooms),
      bedrooms: parseInt(currentGameData.numberOfRooms),
      accommodates: parseInt(currentGameData.accommodation),
      property_type: "Entire home/apt",
      week: parseInt(currentWeekIndex + 1),
    };

    const matchingRow = findMatchingRow(jsonData, filters);

    setThisWeekDeviation(
      filters.accommodates / ((filters.bathrooms + filters.bedrooms) / 2)
    );
    const currentWeekSimulatedOccupancy =
      (matchingRow ? matchingRow.simulated_occupancy : 5) * 10;
    const competatorRentRandom = getRandomNumberAround(
      currentWeekSimulatedOccupancy,
      thisWeekDeviation * 10
    );
    setCompetatorRent(competatorRentRandom);

    setDoDisplayCard(!doDisplayCard);

    const currentWeekWinner = data.currentRentPrice < competatorRentRandom ? true : false;

    if (currentWeekIndex < 17) {
      const updatedWeeklyRentData = [...weeklyRentData];

      updatedWeeklyRentData[currentWeekIndex] = currentWeekWinner
        ? parseFloat(data.currentRentPrice)
        : 0;

      const updatedWeeklyDemandData = [...weeklyDemandData];
      updatedWeeklyDemandData[currentWeekIndex] = matchingRow
        ? matchingRow.simulated_occupancy
        : 5;

      const updatedWeeklyPercentageLossData = [...weeklyPercentageLossData];
      updatedWeeklyPercentageLossData[currentWeekIndex] = currentWeekWinner
        ? +(
            ((competatorRentRandom - data.currentRentPrice) /
              competatorRentRandom) *
            100
          ).toFixed(1)
        : 100;
        

      setWeeklyPercentageLossData(updatedWeeklyPercentageLossData);
      setWeeklyRentData(updatedWeeklyRentData);
      setWeeklyDemandData(updatedWeeklyDemandData);

      setCurrentWeekIndex(currentWeekIndex + 1);
    } else {
      setShowCongratsModal(true);
      // Handle the case when all weeks have been filled
      console.log("All weeks have been filled");
    }
  };

  const graphData2 = weeklyDemandData.map((rent, index) => ({
    time: `Week ${index + 1}`,
    userRent: rent,
    compRent: rent+10,
    avgRent: sum,
  }));

  const graphRentData = weeklyRentData.map((rent, index) => ({
    time: `Week ${index + 1}`,
    userRent: rent,
    compRent: rent+10,
    avgRent: sum,
  }));

  return (
    <div className="rent-determination-container">
      {!showCongratsModal && (
        <div className="pre-congrats-content">
          {doDisplayCard && (
            
              <DisplayCard
                title={currentWeekIndex}
                currentWealth={weeklyRentData[currentWeekIndex - 1] * 7}
                fixedCost={100}
                miscCost={50}
                onContinue={toggle}
                expectedValue={weeklyDemandData[currentWeekIndex - 1] * 10}
                userValue={weeklyRentData[currentWeekIndex - 1]}
                userValue2={competatorRent}
                fluctation={thisWeekDeviation * 10}
              />
            
          )}
          <div className="week-container">
            <h1>Comprehensive Property Insights</h1>
            <p>
              Explore and download our comprehensive dataset, which offers a
              historical analysis of financial performance for properties within
              the {currentGameData.zipCode}. This rich dataset includes detailed
              revenue and cost combinations for various types of properties,
              from residential to commercial, providing a granular look at the
              financial landscape of real estate in this area. Gain a
              competitive edge by leveraging our curated data to inform your
              strategic decisions.
            </p>
            <h3>Zipcode: {currentGameData.zipCode}</h3>
            <h3>No of Rooms: {currentGameData.numberOfRooms}</h3>
            <h3>No of Bathrooms: {currentGameData.bathrooms}</h3>
            <h3>No of Accommodates: {currentGameData.accommodation}</h3>
            <h3>Property Type: {currentGameData.propertyType}</h3>
            <HorizontalTable
              data={weeklyDemandData}
              dataPercentage={weeklyPercentageLossData}
            />
          </div>

          <div className="text-container">
            <BellGraph
              expectedValue={sum}
              fluctation={sum - 40}
            />
            <p>{"Normal distribution curve of properties in your area"}</p>
            <PriceTable />
          </div>
          <div className="rng-container">
            <DemandVsTimeGraph userData={graphRentData}/>
            <div className="rent-setter-container">
              <PropertySellForm onSell={handleFormSubmit} />
              <p>{}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal for congratulating the user */}
      {showCongratsModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Congratulations !</h2>
            <h3>You have completed the game!</h3>
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
