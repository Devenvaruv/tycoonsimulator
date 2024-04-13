import React, { useState, useEffect } from 'react';
import "./HorizontalTable.css"

const HorizontalTable = ({ week, income, incomePercentage, isYourDemand }) => {
  const [yourDemandData, setYourDemandData] = useState(new Array(16).fill(0)); // Initialize for "Your Demand"
  const [compDemandData, setCompDemandData] = useState(new Array(16).fill(0)); // Initialize for "Comp Demand"
  const [percentages, setPercentages] = useState(new Array(16).fill(0)); // Initialize percentages for occurrence loss

  useEffect(() => {
    if (week >= 0 && week <= 16) { // Check for a valid week number
      if (isYourDemand) {
        const newData = [...yourDemandData];
        newData[week - 1] = income; // Update "Your Demand" for the specified week
        setYourDemandData(newData);
      } else {
        const newData = [...compDemandData];
        newData[week - 1] = income; // Update "Comp Demand" for the specified week
        setCompDemandData(newData);
      }

      const newPercentages = [...percentages];
      newPercentages[week - 1] = incomePercentage; // Update percentage loss for the specified week
      setPercentages(newPercentages);
    }
  }, [week, income, incomePercentage, isYourDemand]); // Effect runs when these values change

  const weeks = yourDemandData.map((_, index) => `Week ${index + 1}`);

  return (
    <div className='table-container'>
      <table className="table-sm">
        <thead>
          <tr>
            <th className="th-td-sm">Weeks</th>
            {weeks.map((week, index) => (
              <th key={index} className="th-td-sm">{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th-td-sm">Your Demand</th>
            {yourDemandData.map((value, index) => (
              <td key={index} className="th-td-sm">{value}</td>
            ))}
          </tr>
          <tr>
            <th className="th-td-sm">Comp Demand</th>
            {compDemandData.map((value, index) => (
              <td key={index} className="th-td-sm">{value}</td>
            ))}
          </tr>
          <tr>
            <th className="th-td-sm">Total Demand</th>
            {yourDemandData.map((value, index, arr) => (
              <td key={index} className="th-td-sm">{value + compDemandData[index]}</td>
            ))}
          </tr>
          <tr>
            <th className="th-td-sm">% Occurance Loss</th>
            {percentages.map((percentage, index) => (
              <td key={index} className="th-td-sm">{percentage}%</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorizontalTable;
