import React from 'react';

import Info from './Info';

const Pokemon = (pokemon) => {
  const p = pokemon.pokemon;

  const nameUpperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const pokemonName = (name) => {
    let nameSplit = []
    let displayName = ''

    if (name.includes('-')) {
      nameSplit = name.split('-')
      nameSplit[0] = nameUpperCase(nameSplit[0])
      nameSplit[1] = ' (' + nameUpperCase(nameSplit[1]) + ' Form)'

      displayName = nameSplit.join('')
    } else {
      displayName = name.charAt(0).toUpperCase() + name.slice(1)
    }

    return displayName
  }

  return (
    <div className="mt-6">
      <h1 className="border-b border-solid text-lg mb-2">
        <img src={p.sprites.versions['generation-viii'].icons.front_default}
          className="float-right -mt-9"
          alt="Pokemon sprite" />
        {pokemonName(p.name)}
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
