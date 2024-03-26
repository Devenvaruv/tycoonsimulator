import React from 'react';
import './DisplayCard.css'; // Assuming you have a CSS file for styling

const DisplayCard = ({ title, imageUrl, currentWealth, fixedCost, miscCost,onContinue }) => {
    const total = currentWealth - fixedCost - miscCost; // Calculate total based on provided values
  
    return (
      <div className="card">
        <h2>Week: {title} Revenue</h2>
          <img src={imageUrl} alt="Card image" className="card-img" />
        <div className="card-content">
          
          <p>//this week your property was not rented</p>
          
          <div className="info-row">
            <p>Current Wealth:</p><p>{currentWealth}</p>
          </div>
          <div className="info-row">
            <p>Fixed Cost:</p><p>-{fixedCost}</p>
          </div>
          <div className="info-row">
            <p>Misc Cost:</p><p>-{miscCost}</p>
          </div>
          <div className="info-row">
            <p>Total:</p><p>{total}</p>
          </div>
          <button onClick={onContinue}>Continue</button>
        </div>
      </div>
    );
  };

export default DisplayCard;
