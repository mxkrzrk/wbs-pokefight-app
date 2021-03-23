import React, { useState, useEffect } from 'react';
import './Cards.css';
import Cards from './Cards';
import Col from 'react-bootstrap/Col';

export default function Collections() {
  const [pokemon, setPokemon] = useState({
    prev: null,
    next: null,
    pokemon: [],
    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollPositionHandle);
    return () => window.removeEventListener('scroll', scrollPositionHandle);
  }, []);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon((prevState) => ({
          ...prevState,
          prev: data.previous,
          next: data.next,
          pokemon: prevState.pokemon.concat(data.results),
        }));
      })
      .catch((e) => console.log(e.message));
  }, [pokemon.url]);

  const scrollPositionHandle = () => {
    if (
      Math.round(window.innerHeight + window.scrollY) ===
      document.body.scrollHeight
    ) {
      setPokemon((prevState) => ({
        ...prevState,
        url: prevState.next,
      }));
    }
  };

  return (
    <Col className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      {pokemon.pokemon &&
        pokemon.pokemon.map((poke, index) => {
          return <Cards key={index} {...poke} />;
        })}
    </Col>
  );
}
