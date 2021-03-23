import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <Nav variant="pills" className="bar">
      <ButtonGroup>
        <Link to="/dashboard">
          <Button className="item">Ranking</Button>
        </Link>
        <Link to="/">
          <Button className="item">Profile</Button>
        </Link>
      </ButtonGroup>
    </Nav>
  );
}
