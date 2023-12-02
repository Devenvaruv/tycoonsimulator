import React from 'react';
import './HorizontalTable.css'; // Make sure the path to your CSS file is correct

const HorizontalTable = ({ data }) => { // Accept data as a prop
  console.log('Table data:', data);
  // Use the data prop to display the income for each week
  const weeks = data.map((income, i) => `Week ${i + 1}`);

  return (
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
      </tbody>
    </table>
  );
};

export default HorizontalTable;
