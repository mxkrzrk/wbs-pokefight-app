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
      await Api.get(`/${id}`)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err));
    })();
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      {pokemon && (
        <Card className="poke-info shadow">
          <Card.Header as="h2" className="poke-info-name">
            {pokemon.name}
          </Card.Header>
          <Card.Img
            variant="top"
            className="poke-info-image"
            src={pokemon.sprites.other.dream_world.front_default}
          />
          <Card.Body>
            <div className="d-flex justify-content-around poke-info-text">
              {pokemon.types.map((type) => (
                <Card.Text className="d-flex flex-row" key={type.slot}>
                  {type.type.name.toUpperCase()}
                </Card.Text>
              ))}
            </div>
            <Card.Text>
              Base experience: {pokemon.base_experience} | Height:
              {pokemon.height} | Weight: {pokemon.weight}
            </Card.Text>
          </Card.Body>
          <Card.Body className="d-lg-flex justify-content-lg-around align-items-lg-start flex-lg-row-reverse">
            <ListGroup as="ul" className="poke-info-list">
              <ListGroupItem
                as="li"
                className="poke-info-list-title poke-info-list-item"
              >
                Abilities
              </ListGroupItem>
              {pokemon.abilities.map((ability) => (
                <ListGroupItem key={ability.slot}>
                  {ability.ability.name}
                </ListGroupItem>
              ))}
            </ListGroup>
            <ListGroup as="ul" className="poke-info-list">
              <ListGroupItem
                as="li"
                className="poke-info-list-title poke-info-list-item"
              >
                Stats
              </ListGroupItem>
              {pokemon.stats.map((stat, index) => (
                <ListGroupItem
                  as="li"
                  key={index}
                  className="d-flex justify-content-around align-items-center poke-info-list-item"
                >
                  <div className="text-left w-50">
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                  </div>
                  <div className="w-50">{stat.base_stat}</div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SingleCard;
