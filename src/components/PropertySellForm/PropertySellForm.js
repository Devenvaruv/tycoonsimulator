import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertySellForm = ({ onSell }) => {
  // State for each input field
  const [currentRentPrice, setCurrentRentPrice] = useState('');
  const [rentOption, setRentOption] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

    setError('');

    const propertySellData = {
      currentRentPrice,
      rentOption,
    };

    onSell(propertySellData); // Pass the data back up to the parent component

    // Add navigation if needed
    // navigate('/some-route');
    setCurrentRentPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="currentRentPrice">Current Rent Price:</label>
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
          <option value="rooms">Number of Rooms</option>
          <option value="whole">Whole Property</option>
        </select>
      </div>
      <button type="submit">Sell Property</button>
    </form>
  );
};

export default PropertySellForm;
