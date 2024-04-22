import React, { useContext } from 'react';
import PropertyInputForm from '../../components/PropertyInputForm/PropertyInputForm';
import { GameDataContext } from '../../utils/GameDataContext';
import './PropertyPurchase.css';

const PropertyPurchase = () => {
  const { gameStart } = useContext(GameDataContext);

  const handleFormSubmit = (data) => {
    gameStart(data);
  };
  
  return (
    <div className="property-purchase-container">
      <div className="top-content">
        <div className="table-container">
          <h1>In-Depth Property Financials Analysis</h1>
          <p>
            Access our dataset for insights into property values and
            market trends. Customize your analysis by specifying room count,
            bathroom number, and property type to uncover market desirability,
            investment potential, and strategic planning opportunities.
          </p>
          <a href={"/DataAustin.xlsx"} download={"DataAustin.xlsx"}>
            <button>
              {"Download Resource"}
            </button>
          </a>
          <div style={{ padding: '10px', paddingTop: '20px' }}>
            <img
              src="./GraphZvsRW.webp"
              alt="Map of Austin"
              width="250"
              height="200"
              style={{ border: '1px solid #c7c7c7', padding: '10px' }}
            />
          </div>
        </div>
        <div className="map-container">
          <iframe title='esri'
            width={500}
            height={400}
            src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4803853fecc4fd3a23f4224bbf096f3"
          >
          </iframe>
          <div className="graphs-container">
            <img
              src="./Graph2.png"
              alt="Map of Austin"
              width="230"
              height="200"
              style={{ border: '1px solid #c7c7c7', padding: '10px' }}
            />
            <img
              src="./Graph3.png"
              alt="Map of Austin"
              width="230"
              height="200"
              style={{ border: '1px solid #c7c7c7', padding: '10px' }}
            />
          </div>
        </div>
        <div className="chart-container">
          <div className="bottom-content">
            <div className="form-container">
              <PropertyInputForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyPurchase;
