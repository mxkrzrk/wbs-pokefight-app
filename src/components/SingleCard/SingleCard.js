import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCard.css';
import Card from 'react-bootstrap/Card';
import Api from '../../services/Api';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const SingleCard = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await Api
        .get(`/${id}`)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err))
    })()
  }, [id])

  return (
    <div className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      {pokemon && (
        <Card style={{ width: '18rem' }} key={pokemon.id}>
          <Card.Header>{pokemon.name.toUpperCase()} ({pokemon.id})</Card.Header>
          <Card.Img variant="top" src={pokemon.sprites.front_default}/>
          <Card.Body>
            {pokemon.types.map(type => (
              <Card.Text key={type.slot}>{type.type.name.toUpperCase()}</Card.Text>
            ))}
            <Card.Text>
              Base experience {pokemon.base_experience} |
              Height {pokemon.height} |
              Weight {pokemon.weight}
            </Card.Text>
          </Card.Body>
          <ListGroup>
            <ListGroupItem>Abilities</ListGroupItem>
            {pokemon.abilities.map(ability => (
              <ListGroupItem key={ability.slot}>{ability.ability.name}</ListGroupItem>
            ))}
          </ListGroup>
          <ListGroup>
            <ListGroupItem>Stats</ListGroupItem>
            {pokemon.stats.map((stat, index) => (
              <ListGroupItem key={index}>
                {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)} {stat.base_stat}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      )}
    </div>
  )
}

export default SingleCard;
