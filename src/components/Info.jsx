import React from 'react';

import TypeList from './TypeList';
import Stats from './Stats';

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-ceter text-xs">
      <TypeList />
      <div className="my-4">
        Weight: 398.0 kg<br />
        Height: 14.5 m
      </div>
      <Stats
        hp="170"
        att="90"
        def="45"
        spa="90"
        spd="45"
        spe="60"
      />
    </div>
  )
}

export default Info;