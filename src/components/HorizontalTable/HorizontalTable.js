import React from 'react';
import './HorizontalTable.css'; // Make sure the path to your CSS file is correct

const HorizontalTable = ({ data , dataPercentage }) => { // Accept data as a prop
  // Use the data prop to display the income for each week
  const weeks = data.map((income, i) => `Week ${i + 1}`);

  return (
    <div className='table-container'>
      <table className="table-sm">
        <thead>
          <tr>
            <th className="th-td-sm"> Weeks</th>
            {weeks.map((week, index) => (
              <th key={index} className="th-td-sm">{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="th-td-sm"> Rent</th>
            {data.map((income, index) => (
              <td key={index} className="th-td-sm">{income}</td>
            ))}
          </tr>
          <tr>
            <th className="th-td-sm"> % loss</th>
            {dataPercentage.map((income2, index2) => (
              <td key={index2} className="th-td-sm">{income2}%</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorizontalTable;
