import React, { useState } from 'react';
//import './Calendar.css';

const Calendar = ({ onMonthChange }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Let's assume the game starts in January
  const [currentMonth, setCurrentMonth] = useState(0); // January is index 0

  const handleMonthClick = (monthIndex) => {
    setCurrentMonth(monthIndex);
    onMonthChange && onMonthChange(monthIndex); // Notify parent component about the change
  };

  return (
    <div className="calendar">
      {months.map((month, index) => (
        <div
          key={month}
          className={`month ${index === currentMonth ? 'current' : ''}`}
          onClick={() => handleMonthClick(index)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
