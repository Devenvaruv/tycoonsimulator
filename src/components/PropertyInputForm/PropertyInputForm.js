import React, { useState } from 'react';
import './PropertyInputForm.css'
import { useNavigate } from 'react-router-dom';


const PropertyInputForm = ({ onSubmit }) => {
  // State for each input field
  const [zipCode, setZipCode] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const allowedBathroomValues = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 1, 2, 3, 4, 5, 6, 7, 8, 12];
  const allowedRoomValues = [1, 2, 3, 4, 5, 6, 7, 9, 12, 14];


  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action (page reload)

    if (parseInt(bathrooms) > parseInt(numberOfRooms)) {
      setError('Invalid number of bathrooms or rooms');
      return; // Stop the form submission
    }

    if (!allowedBathroomValues.includes(Number(bathrooms))) {
      setError('Invalid Number of Bathrooms, Must be between 1 and 12')
      return;
    }

    if (!allowedRoomValues.includes(Number(numberOfRooms))) {
      setError('Room must be between 0 and 14')
      return;
    }
    if (zipCode !== '78701' && zipCode !== '78705' && zipCode !== '78746') {
      setError('Zipcode must be either 78746, 78701, or 78705.');
      return; // Stop the form submission
    }
    if ((parseInt(accommodation) >= 17) || (parseInt(accommodation) <= 0 ) || (!accommodation)) {
      setError('Accommodation must be between 1 and 16');
      
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
      accommodation
    };
    onSubmit(propertyData); // Pass the data back up to the parent component

    navigate('/monthly-pricing');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="number"
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
        <label htmlFor="accommodation">Accommodates:</label>
        <input
          type="number"
          id="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
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
