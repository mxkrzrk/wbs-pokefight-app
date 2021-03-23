import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Table from 'react-bootstrap/Table';

export default function Dashboard() {
  const [player, setPlayer] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/dashboard')
      .then((res) => res.json())
      .then((data) => setPlayer(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <Table responsive striped bordered hover className="dashboard">
        <thead>
          <tr>
            <th className="titles">Player Name</th>
            <th className="titles">Username</th>
            <th className="titles">Won Matches</th>
            <th className="titles">Lost Matches</th>
            <th className="titles">Total Matches</th>
          </tr>
        </thead>
        <tbody>
          {player &&
            player.map((user, index) => {
              return (
                <tr key={index} className="cells">
                  <td>{user.player_name}</td>
                  <td>{user.username}</td>
                  <td>{user.won_matches}</td>
                  <td>{user.lost_matches}</td>
                  <td>{user.total_matches}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
