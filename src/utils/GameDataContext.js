// GameDataContext.js
import React from 'react';

export const GameDataContext = React.createContext(null);

export const GameDataProvider = ({ children }) => {
  const [currentGameData, setCurrentGameData] = React.useState({
    zipCode: '',
    numberOfRooms: '',
    bathrooms: '',
    propertyType: '',
    accommodation: ''
  });

  // This function updates the current game data
  const gameStart = (data) => {
    setCurrentGameData({
      ...currentGameData,
      ...data,
    });
  };

  return (
    <GameDataContext.Provider value={{ currentGameData, gameStart }}>
      {children}
    </GameDataContext.Provider>
  );
};
