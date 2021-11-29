import { useState } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Pokemon from './Pokemon';

const Body = () => {
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [searchInput, setSearchInput] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSubmit: HandleSubmit = () => {
    if (searchInput) {
      axios.get(apiURL + searchInput.toLowerCase()).then((data) => {
        const p = data.data
        const result: Pokemon = {
          name: p.name,
          sprite: p.sprites.versions['generation-viii'].icons.front_default,
          image: p.sprites.other['official-artwork'].front_default,
          types: [],
          weight: p.weight,
          height: p.height,
          stats: [
            p.stats[0].base_stat,
            p.stats[1].base_stat,
            p.stats[2].base_stat,
            p.stats[3].base_stat,
            p.stats[4].base_stat,
            p.stats[5].base_stat
          ]
        }
        for (let t in p.types) {
          result.types.push(p.types[t].type.name)
        }

        setPokemon(result);
      });
      setSearchInput('');
    }
  }

  const handleChange: HandleChange = (e) => {
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
