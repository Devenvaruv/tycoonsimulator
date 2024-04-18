import React, { useState } from 'react';


const PropertySellForm = ({ onSell , currentWeek }) => {
  // State for each input field
  const [currentRentPrice, setCurrentRentPrice] = useState('');
  const [rentOption, setRentOption] = useState('whole');
  const [error, setError] = useState('');
  

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action (page reload)

    if (!currentRentPrice) {
      setError('Please enter the current rent price');
      return;
    }

    if (!rentOption) {
      setError('Please select an option for renting');
      return;
    }

    if ((currentRentPrice < 1) || (currentRentPrice > 1200)){
      setError("Please enter rent between 0 and 1200");
      return;
    }
    setError('');
    const propertySellData = {
      week: currentWeek,
      currentRentPrice,
      rentOption,
    };
    onSell(propertySellData); // Pass the data back up to the parent component
    setCurrentRentPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="currentRentPrice">Weekly Rate For Week {currentWeek}</label>
        <input
          type="number"
          id="currentRentPrice"
          value={currentRentPrice}
          onChange={(e) => setCurrentRentPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rentOption">Rent Option:</label>
        <select
          id="rentOption"
          value={rentOption}
          onChange={(e) => setRentOption(e.target.value)}
        >
          <option value="">Select Rent Option</option>
          <option value="whole">Whole Property</option>
        </select>
      </div>
      <button type="submit">Move Next Week</button>
    </form>
  );
};

export default PropertySellForm;
