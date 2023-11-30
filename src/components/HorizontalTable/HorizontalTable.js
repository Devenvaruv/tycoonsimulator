import React from 'react';

const HorizontalTable = () => {
  // Boilerplate data for 12 weeks
  const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);
  const income = '1000'; // assuming income is the same for all weeks for boilerplate
  return (
    <table>
      <thead>
        <tr>
          {weeks.map((week, index) => (
            <th key={index}>{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {weeks.map((_, index) => (
            <td key={index}>{income}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default HorizontalTable;
