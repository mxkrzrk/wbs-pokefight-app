import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './cards.css';
import Cards from './Cards';
import Col from 'react-bootstrap/Col'

export default function Collections() {

  const { name } = useParams()
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
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
