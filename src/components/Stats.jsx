import React from 'react';

const Stats = (stats) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      HP: <progress max="255" value={stats.hp} /><br />
      Attack: <progress max="255" value={stats.att} /><br />
      Defense: <progress max="255" value={stats.def} /><br />
      Sp.Attack: <progress max="255" value={stats.spa} /><br />
      Sp.Defense: <progress max="255" value={stats.spd} /><br />
      Speed: <progress max="255" value={stats.spe} />
    </div>
  );
}

export default Stats;