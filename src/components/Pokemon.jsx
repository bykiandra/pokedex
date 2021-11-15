import React from 'react';

import Info from './Info';

const Pokemon = () => {
  return (
    <div className="mt-6">
      <h1 className="border-b border-solid text-lg mb-2">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/321.png"
          className="float-right -mt-9"
          alt="Pokemon sprite" />
        Wailord
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
        alt="Pokemon official artwork" />
        <Info />
      </div>
    </div>
  );
}

export default Pokemon;
