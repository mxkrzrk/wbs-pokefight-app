import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Cards({ name, url }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err.message));
  }, [url]);

  return (
    <>
      {pokemon && (
        <Card className="cat shadow">
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.dream_world.front_default}
            className="cat-image"
          />
          <Card.Body>
            <Card.Title className="catName">{name}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Link to={`/pokemon/${pokemon.id}`}>
              <Button className="button">More Info</Button>
            </Link>
            <br></br>
            <Link to={`/pokemon/fights/${name}`}>
              <Button className="button">Let's Fight</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
