import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Pokemon from './Pokemon';

const Body = () => {
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [searchInput, setSearchInput] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) {
      axios.get(apiURL + searchInput.toLowerCase()).then((data) => {
        setPokemon(data.data);
      });
      setSearchInput('');
    }
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      { pokemon != null ? <Pokemon pokemon={pokemon} /> : <></> }
    </>
  );
}

export default Body;
