import React from 'react';
import { Link } from "react-router-dom"
import './Dashboard.css';
import Nav from 'react-bootstrap/Nav'


export default function NavBar() {
    return(
        <div>
        <Nav variant="pills" id="bar">
    <Nav.Item>
        <Nav.Link eventKey="1" id="item">
        <Link to="/dashboard" id="item">
        All Players
        </Link>
        </Nav.Link>
    </Nav.Item>
    
    <Nav.Item>
        <Nav.Link eventKey="2" href="#/" id="item">
        Profile
        </Nav.Link>
    </Nav.Item>
</Nav>
        </div>
    )
}
