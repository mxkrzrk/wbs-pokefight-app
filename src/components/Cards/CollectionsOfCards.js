import React, { useState, useEffect } from 'react';
import './cards.css';
import Cards from './Cards';
import Col from 'react-bootstrap/Col';

export default function Collections() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      {pokemon && (
        <Col className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
          {pokemon &&
            pokemon.map((poke, index) => {
              return <Cards key={index} {...poke} />;
            })}
        </Col>
      )}
    </>
  );
}
