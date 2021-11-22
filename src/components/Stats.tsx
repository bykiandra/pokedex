import './Stats.css'

interface Props {
  hp: number,
  att: number,
  def: number,
  spa: number,
  spd: number,
  spe: number
}

const Stats = ({ hp, att, def, spa, spd, spe }: Props) => {
  return (
    <div className="grid grid-cols-2">
      HP: <progress max="255" value={hp} className="hp" />
      Attack: <progress max="255" value={att} className="att" />
      Defense: <progress max="255" value={def} className="def" />
      Sp.Attack: <progress max="255" value={spa} className="spa" />
      Sp.Defense: <progress max="255" value={spd} className="spd" />
      Speed: <progress max="255" value={spe} className="spe" />
    </div>
  );
}

export default Stats;