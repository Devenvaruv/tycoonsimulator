import React, { useState, useEffect } from 'react';

const playerData = [
  { id: 1, name: 'Player 1', score: 1500 },
  { id: 2, name: 'Player 2', score: 1200 },
  { id: 3, name: 'Player 3', score: 1800 },

];

function Leaderboard({ players }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}: {player.score} points
          </li>
        ))}
      </ul>
    </div>
  );
}

function GameOutcome() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  return (
    <div>
      <h1>Game Outcome</h1>
      <Leaderboard players={players} />
      {/* Other components like Player cards, property details, etc. */}
    </div>
  );
}

export default GameOutcome;
