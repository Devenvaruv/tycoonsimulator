import React, { useState } from 'react';
import './PropertyInputForm.css'

const PropertyInputForm = ({ onSubmit }) => {
  // State for each input field
  const [zipCode, setZipCode] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action (page reload)
    const propertyData = {
      zipCode,
      numberOfRooms,
      bathrooms,
      propertyType,
    };
    onSubmit(propertyData); // Pass the data back up to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
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
          {/* Add more property types as needed */}
        </select>
      </div>
      <button type="submit">Submit</button>
      
    </form>
  );
};

export default PropertyInputForm;
