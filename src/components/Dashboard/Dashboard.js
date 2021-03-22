import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Table from 'react-bootstrap/Table'

export default function Dashboard() {

    const [player, setPlayer] = useState()

    useEffect(() => {
        fetch('http://localhost:8080/dashboard')
    .then((res) => res.json())
    .then((data) => setPlayer(data))
    .catch((e) => console.log(e.message));
    }, [])

    console.log(player)

    return(
        <div>
            <Table striped bordered hover id="dashboard">
<thead>
    <tr>
    <th id="titles">Player Name</th>
    <th id="titles">Username</th>
    <th id="titles">Won Matches</th>
    <th id="titles">Lost Matches</th>
    <th id="titles">Total Matches</th>
    </tr>
</thead>
<tbody>

{player && player.map((user) => {
    return (
        <tr id="cells">
    <td>{user.player_name}</td>
    <td>{user.username}</td>
    <td>{user.won_matches}</td>
    <td>{user.lost_matches}</td>
    <td>{user.total_matches}</td>
    </tr>
    )
})}

</tbody>
</Table>
        </div>
    )
} 