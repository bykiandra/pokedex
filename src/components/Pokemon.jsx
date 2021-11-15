import React from 'react';

import Info from './Info';

const Pokemon = (pokemon) => {
  const p = pokemon.pokemon;
  return (
    <div className="mt-6">
      <h1 className="border-b border-solid text-lg mb-2">
        <img src={p.sprites.versions['generation-viii'].icons.front_default}
          className="float-right -mt-9"
          alt="Pokemon sprite" />
        {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <img src={p.sprites.other['official-artwork'].front_default}
        alt="Pokemon official artwork" />
        <Info pokemon={p} />
      </div>
    </div>
  );
}

export default Pokemon;
