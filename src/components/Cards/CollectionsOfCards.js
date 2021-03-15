import React, { useState, useEffect } from 'react';
import './Cards.css';
import Cards from './Cards';
import Col from 'react-bootstrap/Col'

export default function Collections() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemon(data.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <Col className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      {pokemon &&
        pokemon.map((cat) => {
          return <Cards key={cat.id} cat={cat} />;
        })}
    </Col>
  );
}
