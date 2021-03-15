import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

export default function Fights() {

const { name } = useParams()
const [pokemon, setPokemon] = useState();
const [lucky, setLucky] = useState()

useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((data) => setPokemon(data))
    .catch((e) => console.log(e.message));
}, []);

useEffect(() => {
    const luckyNum = Math.floor(Math.random() * 800)
    fetch(`https://pokeapi.co/api/v2/pokemon/${luckyNum}`)
    .then((res) => res.json())
    .then((data) => setLucky(data))
    .catch((e) => console.log(e.message));
}, [])

console.log(lucky)

    return( 
        <Col className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
        <Card className="cat">
        <Card.Img variant="top" src="" />
        <Card.Body>
        <Card.Title className="catName">{pokemon && pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Card.Title>
        </Card.Body>
        <Card.Body>
        <Card.Text className="catText">
        Abilities: {pokemon && pokemon.abilities[0].ability.name} 
        <br></br>
        Moves: {pokemon && pokemon.moves[0].move.name} 
        <br></br>
        Weight: {pokemon && pokemon.weight}
        <br></br>
        Height: {pokemon && pokemon.height}
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className="cat">
        <Card.Img variant="top" src="" />
        <Card.Body>
        <Card.Title className="catName">{lucky && lucky.name[0].toUpperCase() + lucky.name.substring(1)}</Card.Title>
        </Card.Body>
        <Card.Body>
        <Card.Text className="catText">
        Abilities: {lucky && lucky.abilities[0].ability.name} 
        <br></br>
        Moves: {lucky && lucky.moves[0].move.name} 
        <br></br>
        Weight: {lucky && lucky.weight}
        <br></br>
        Height: {lucky && lucky.height}
        </Card.Text>
        </Card.Body>
        </Card>

        </Col>

    )
}