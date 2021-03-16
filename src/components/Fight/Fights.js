import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Fights.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Fights() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [lucky, setLucky] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((e) => console.log(e.message));
  }, [name]);

  useEffect(() => {
    const luckyNum = Math.floor(Math.random() * 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${luckyNum}`)
      .then((res) => res.json())
      .then((data) => setLucky(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <Col className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      {pokemon && (
        <Card className="poke shadow">
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.dream_world.front_default}
            className="poke-image"
          />
          <Card.Body>
            <Card.Title className="poke-name">{pokemon.name}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text className="poke-text">
              Abilities: {pokemon.abilities[0].ability.name}
              <br></br>
              Moves: {pokemon.moves[0].move.name}
              <br></br>
              Weight: {pokemon.weight}
              <br></br>
              Height: {pokemon.height}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      {lucky && (
        <Card className="poke shadow">
          <Card.Img
            variant="top"
            src={lucky.sprites.other.dream_world.front_default}
            className="poke-image"
          />
          <Card.Body>
            <Card.Title className="poke-name">{lucky && lucky.name}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text className="poke-text">
              Abilities: {lucky.abilities[0].ability.name}
              <br></br>
              Moves: {lucky.moves[0].move.name}
              <br></br>
              Weight: {lucky.weight}
              <br></br>
              Height: {lucky.height}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
}
