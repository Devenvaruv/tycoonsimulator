import React, { useState } from 'react';


const PropertySellForm = ({ onSell }) => {
  // State for each input field
  const [currentRentPrice, setCurrentRentPrice] = useState('');
  const [rentOption, setRentOption] = useState('whole');
  const [currentWeek, setCurrentWeek] = useState(1);
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

    if ((currentRentPrice < 1) || (currentRentPrice > 19286)){
      setError("Please enter rent between 0 and 19286");
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
    //setRentOption('');
    setCurrentWeek(currentWeek + 1); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="currentRentPrice">Weekly Night Rental Rate For Week: {currentWeek}</label>
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
