import React, { useState, useEffect } from 'react'
import './cards.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cat from '../../img/cat.png'


export default function Cards(props) {

    return(

<Card style={{ width: '18rem' }} id="cat">
  <Card.Img variant="top" src={Cat} />
  <Card.Body>
    <Card.Title id="catName">{props.cat.name.english}</Card.Title>
    <Card.Text id="textCat">
    {props.cat.type[0]} {props.cat.type[1]}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Button href="#" id="button">More Info</Button>
    <br></br>
    <Button href="#" id="button">Let's Fight</Button>
  </Card.Body>
</Card>

    )
}