import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCard.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const SingleCard = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/pokemon/${id}`)
        .then((res) => setPokemon(res.data[0]))
        .catch((err) => console.log(err));
    })();
  }, [id]);

  return (
    <>
      {pokemon && (
        <Card style={{ width: '18rem' }} key={pokemon.id}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{pokemon.name['english']}</Card.Title>
            <Card.Text>{pokemon.type}</Card.Text>
            <Card.Text>
              Attack {pokemon.base['Attack']} | Defense{' '}
              {pokemon.base['Defense']} | HP {pokemon.base['HP']} | Sp. Attack{' '}
              {pokemon.base['Sp. Attack']} | Sp. Defense{' '}
              {pokemon.base['Sp. Defense']} | Speed {pokemon.base['Speed']}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default SingleCard;
