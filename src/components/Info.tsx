import TypeList from './TypeList';
import Stats from './Stats';

interface Props {
  pokemon: Pokemon
}

const Info = ({ pokemon }: Props) => {
  const p = pokemon;

  return (
    <div className="flex flex-col justify-center items-ceter text-xs">
      <TypeList types={p.types} />
      <div className="my-4">
        Weight: {p.weight / 10} kg<br />
        Height: {p.height / 10} m
      </div>
      <Stats
        hp={p.stats[0]}
        att={p.stats[1]}
        def={p.stats[2]}
        spa={p.stats[3]}
        spd={p.stats[4]}
        spe={p.stats[5]}
      />
    </div>
  )
}

export default Info;