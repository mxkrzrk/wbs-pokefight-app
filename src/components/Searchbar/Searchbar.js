import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Searchbar() {
  const history = useHistory();
  const [pokeName, setPokeName] = useState('');
  const [error, setError] = useState(false);

  const searchPokemonSubmitHandle = (e) => {
    e.preventDefault();
    if (pokeName.trim()) {
      const validateName = pokeName.trim().toLowerCase();
      fetch(`https://pokeapi.co/api/v2/pokemon/${validateName}`)
        .then((res) => res.json())
        .then((data) => {
          history.push(`/pokemon/${data.id}`);
        })
        .catch((err) => setError(true));
    } else {
      setError(true);
    }
  };

  const searchPokemonInputHandle = (e) => {
    setError(false);
    setPokeName(e.target.value);
  };

  return (
    <Form className="search-form" onSubmit={searchPokemonSubmitHandle}>
      <Form.Group className="d-flex justify-content-center align-items-center mb-0">
        <Form.Control
          type="search"
          className="search-form-input"
          onChange={searchPokemonInputHandle}
        />
        <Button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-button-icon" />
        </Button>
      </Form.Group>
      {error && (
        <p className="text-warning">
          Pokemon not found, please enter another or correct name!
        </p>
      )}
    </Form>
  );
}
