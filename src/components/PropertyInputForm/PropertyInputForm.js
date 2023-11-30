import React, { useState } from 'react';
import './PropertyInputForm.css'

const PropertyInputForm = ({ onSubmit }) => {
  // State for each input field
  const [zipCode, setZipCode] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [error, setError] = useState('');

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action (page reload)

    if (parseInt(bathrooms) >= parseInt(numberOfRooms)) {
      setError('Invalid number of bathrooms or rooms');
      return; // Stop the form submission
    }

    if ((parseInt(bathrooms) >= 10) || (parseInt(bathrooms) <= 0 ) || (!bathrooms)) {
      setError('bathrooms must be between 0 and 10')
      return;
    }

    if ((parseInt(numberOfRooms) >= 10) || (parseInt(numberOfRooms) <= 0 ) || (!numberOfRooms)) {
      setError('room must be between 0 and 10')
      return;
    }

    if (!isTexasZipcode(zipCode)) {
      setError('Zipcode must be valid and from Texas');
      return; // Stop the form submission
    }

    if (!propertyType) {
      setError('Please select a property type');
      return; // Stop the form submission
    }

    

    setError('');


    const propertyData = {
      zipCode,
      numberOfRooms,
      bathrooms,
      propertyType,
    };
    onSubmit(propertyData); // Pass the data back up to the parent component
  };

  function isTexasZipcode(zipCode) {
    const regex = /^(75[0-9]{3}|76[0-9]{3}|77[0-9]{3}|78[0-9]{3}|79[0-8][0-9]{2}|799[0-9]{2}|8851[0-9])$/;
    return regex.test(zipCode);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numberOfRooms">Number of Rooms:</label>
        <input
          type="number"
          id="numberOfRooms"
          value={numberOfRooms}
          onChange={(e) => setNumberOfRooms(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="propertyType">Property Type:</label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          
        </select>
      </div>
      <button type="submit">Start Simulation</button>
      
    </form>
  );
};

export default PropertyInputForm;
