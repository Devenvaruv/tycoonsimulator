import React, { useState, useEffect } from 'react';
import "./VerticalTable.css";

const VerticalTable = ({ week, income, incomePercentage,isYourDemand }) => {
  const [yourDemandData, setYourDemandData] = useState(JSON.parse(sessionStorage.getItem("yourDemandData")) || Array(16).fill(0));
  const [compDemandData, setCompDemandData] = useState(JSON.parse(sessionStorage.getItem("compDemandData")) || Array(16).fill(0));
  useEffect(() => {
    sessionStorage.setItem("yourDemandData", JSON.stringify(yourDemandData));
    sessionStorage.setItem("compDemandData", JSON.stringify(compDemandData));
  })
  useEffect(() => {
    if (week >= 1 && week <= 16) {  
      const newDataYourDemand = [...yourDemandData];
      const newDataCompDemand = [...compDemandData];

      if (isYourDemand) {
        newDataYourDemand[week - 1] = income;
      } else {
        newDataCompDemand[week - 1] = income;
      }

      setYourDemandData(newDataYourDemand);
      setCompDemandData(newDataCompDemand);
     
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
              {renderPercentageCell(incomePercentage[index])}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerticalTable;
