import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cat from '../../img/cat.png';

export default function Cards({ cat }) {

  const { name } = useParams()

  return (
    <Card className="cat">
      <Card.Img variant="top" src={Cat} />
      <Card.Body>
        <Card.Title className="catName">{cat.name[0].toUpperCase() + cat.name.substring(1)}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Link to={`/pokemon/${cat.id}`}>
          <Button className="button">More Info</Button>
        </Link>
        <br></br>
        <Link to={`/pokemon/fights/${cat.name}`}>
        <Button className="button">
          Let's Fight
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
