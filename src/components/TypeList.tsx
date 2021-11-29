interface Props {
  types: string[]
}

const TypeList = ({ types }: Props) => {
  const typeColours: { [key: string]: string } = {
    'bug': '#9FB922',
    'dark': '#665141',
    'dragon': '#794AE3',
    'electric': '#F8C430',
    'fairy': '#F6A8F6',
    'fighting': '#974B33',
    'fire': '#F04E30',
    'flying': '#989DF5',
    'ghost': '#5E51AC',
    'grass': '#6ECB49',
    'ground': '#CCB052',
    'ice': '#5DC5E3',
    'normal': '#A29C89',
    'poison': '#AB4B9B',
    'psychic': '#FB689C',
    'rock': '#B19E51',
    'steel': '#A5A2BE',
    'water': '#4B88FE'
  }

    const type = types.map((t: string) => {
      return (
        <span key={t} style={{ backgroundColor: typeColours[t] }}
          className="text-xs px-2 py-1 rounded-md mr-1">
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </span>
      );
    })

  return (
    <div>
      Type: {type}
    </div>
  );
}

export default TypeList;