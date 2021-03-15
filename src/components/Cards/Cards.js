import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cat from '../../img/cat.png';

export default function Cards({ cat }) {
  return (
    <Card className="cat">
      <Card.Img variant="top" src={Cat} />
      <Card.Body>
        <Card.Title className="catName">{cat.name.english}</Card.Title>
        <Card.Text className="textCat">
          {cat.type[0]} {cat.type[1]}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/pokemon/${cat.id}`}>
          <Button className="button">More Info</Button>
        </Link>
        <br></br>
        <Button href="#" className="button">
          Let's Fight
        </Button>
      </Card.Body>
    </Card>
  );
}
