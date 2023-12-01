import React from 'react';
import './HorizontalTable.css'; // Make sure the path to your CSS file is correct

const HorizontalTable = () => {
  // Boilerplate data for 12 weeks
  const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);
  const income = '1000'; // assuming income is the same for all weeks for boilerplate

  return (
    <table className="table-sm">
      <thead>
        <tr>
          {weeks.map((week, index) => (
            <th key={index} className="th-td-sm">{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {weeks.map((_, index) => (
            <td key={index} className="th-td-sm">{income}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default HorizontalTable;
