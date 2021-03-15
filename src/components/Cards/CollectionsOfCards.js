import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import Card from 'react-bootstrap/Card';
import './cards.css'


export default function Collections() {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch('http://localhost:8080/api/pokemon')
        .then(res => res.json())
        .then(data => setPokemon(data.data))
        .catch(e => console.log(e.message))
    }, [pokemon])


    return(

    <div className="container">
    {pokemon && pokemon.map((cat) => {
        return (
            <Cards cat={cat} />
        )
    })}
        
       
    </div>

    )
}