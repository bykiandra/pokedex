import React from 'react';

import TypeList from './TypeList';
import Stats from './Stats';

const Info = (pokemon) => {
  const p = pokemon.pokemon;

  return (
    <div className="flex flex-col justify-center items-ceter text-xs">
      <TypeList types={p.types} />
      <div className="my-4">
        Weight: {parseFloat(p.weight) / 10} kg<br />
        Height: {parseFloat(p.height) / 10} m
      </div>
      <Stats
        hp={p.stats[0].base_stat}
        att={p.stats[1].base_stat}
        def={p.stats[2].base_stat}
        spa={p.stats[3].base_stat}
        spd={p.stats[4].base_stat}
        spe={p.stats[5].base_stat}
      />
    </div>
  )
}

export default Info;