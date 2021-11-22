import React from 'react';

import './Stats.css'

const Stats = (stats) => {
  return (
    <div className="grid grid-cols-2">
      HP: <progress max="255" value={stats.hp} className="hp" />
      Attack: <progress max="255" value={stats.att} className="att" />
      Defense: <progress max="255" value={stats.def} className="def" />
      Sp.Attack: <progress max="255" value={stats.spa} className="spa" />
      Sp.Defense: <progress max="255" value={stats.spd} className="spd" />
      Speed: <progress max="255" value={stats.spe} className="spe" />
    </div>
  );
}

export default Stats;