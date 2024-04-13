import React, { useState, useEffect } from 'react';
import "./VerticalTable.css";

const VerticalTable = ({ week, income, incomePercentage, isYourDemand }) => {
  const [yourDemandData, setYourDemandData] = useState(new Array(16).fill(0));
  const [compDemandData, setCompDemandData] = useState(new Array(16).fill(0));
  const [percentages, setPercentages] = useState(new Array(16).fill(0));

  useEffect(() => {
    if (week >= 1 && week <= 16) {  // Assuming weeks are 1-indexed based on your original code
      const newDataYourDemand = [...yourDemandData];
      const newDataCompDemand = [...compDemandData];
      const newPercentages = [...percentages];

      if (isYourDemand) {
        newDataYourDemand[week - 1] = income;
      } else {
        newDataCompDemand[week - 1] = income;
      }

      newPercentages[week - 1] = incomePercentage;

      setYourDemandData(newDataYourDemand);
      setCompDemandData(newDataCompDemand);
      setPercentages(newPercentages);
    }
  }, [week, income, incomePercentage, isYourDemand]);


  const renderPercentageCell = (percentage) => {
    return (
      <td className={`th-td-sm ${percentage > 75 ? 'high-loss' : ''}`}>
        {percentage}%
      </td>
    );
  };

  return (
    <div className='table-container'>
      <table className="table-sm">
        <thead>
          <tr>
            <th className="th-td-sm">Week</th>
            <th className="th-td-sm">Your Demand</th>
            <th className="th-td-sm">Comp Demand</th>
            <th className="th-td-sm">Total Demand</th>
            <th className="th-td-sm">% Occurrence Loss</th>
          </tr>
        </thead>
        <tbody>
          {yourDemandData.map((_, index) => (
            <tr key={index}>
              <th className="th-td-sm">{`${index + 1}`}</th>
              <td className="th-td-sm">{yourDemandData[index]}</td>
              <td className="th-td-sm">{compDemandData[index]}</td>
              <td className="th-td-sm">{yourDemandData[index] + compDemandData[index]}</td>
              {/* <td className="th-td-sm">{percentages[index]}%</td> */}
              {renderPercentageCell(percentages[index])}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerticalTable;
