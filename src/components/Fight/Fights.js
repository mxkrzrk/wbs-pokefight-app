import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  attack,
  specialAttack,
  health,
  checkVictory,
} from '../../utils/attacksType';
import './Fights.css';
import CardFight from './CardFight';
import Col from 'react-bootstrap/Col';
import Won from '../Won/Won';

export default function Fights() {
  const history = useHistory();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [lucky, setLucky] = useState();
  const [won, setWon] = useState({ check: false, winner: null });

  useEffect(() => {
    if ((pokemon, lucky)) {
      const winner = checkVictory(pokemon, lucky);
      switch (winner) {
        case 1:
          setWon({ check: true, winner: pokemon.data.name });
          break;
        case 2:
          setWon({ check: true, winner: pokemon.data.name });
          break;
        case 0:
          setWon({ check: true, winner: pokemon.data.name });
          break;
        default:
          break;
      }
    }
  }, [pokemon, lucky]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) =>
        setPokemon({
          data: data,
          player: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
          },
        })
      )
      .catch((e) => console.log(e.message));
  }, [name]);

  useEffect(() => {
    const luckyNum = Math.floor(Math.random() * 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${luckyNum}`)
      .then((res) => res.json())
      .then((data) =>
        setLucky({
          data: data,
          player: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
          },
        })
      )
      .catch((e) => console.log(e.message));
  }, []);

  const handleClickAttack = () => {
    setLucky((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        hp: attack(pokemon, prevState),
      },
    }));
    // Attack from opponent
    setPokemon((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        hp: attack(lucky, prevState),
      },
    }));
  };

  const handleClickSpecialAttack = () => {
    setLucky((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        hp: specialAttack(pokemon, prevState),
      },
    }));
    // Attack from opponent
    setPokemon((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        hp: specialAttack(lucky, prevState),
      },
    }));
  };

  const handleClickHealth = () => {
    setPokemon((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        hp: health(prevState, prevState.data.stats[0].base_stat),
      },
    }));
  };

  const handleClickWon = () => {
    history.push('/');
  };

  return (
    <>
      {won.check && <Won {...won} onClickWon={handleClickWon} />}
      <Col className="d-flex flex-column align-items-start flex-md-row flex-md-wrap justify-content-center">
        {pokemon && (
          <CardFight
            {...pokemon}
            onClickAttack={handleClickAttack}
            onClickSpecialAttack={handleClickSpecialAttack}
            onClickHealth={handleClickHealth}
          />
        )}
        {lucky && <CardFight {...lucky} opponent />}
      </Col>
    </>
  );
}
