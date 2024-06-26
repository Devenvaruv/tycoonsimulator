import React, { useState, useEffect } from 'react';
import './Leaderboard.css';

function Leaderboard({ players }) {
  return (
    <div className="leaderboard">
      <h1> </h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Date & Time</th>
            <th>Avg Rent</th>
            <th>Total % Loss</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.handle}</td>
              <td>{player.date}</td>
              <td>{player.rent}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GameOutcome() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://tycoonsim.wn.r.appspot.com/findAllTycoonRecord')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => a.score - b.score);
        setPlayers(sortedData.map((player, index) => ({
          ...player,
          rank: index + 1
        })));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <Leaderboard players={players} />
    </div>
  );
}

export default GameOutcome;
