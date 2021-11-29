type HandleChange = (text: ChangeEvent<HTMLInputElement>) => void

type HandleSubmit = () => void

type Pokemon = {
  name: string,
  sprite: string,
  image: string,
  types: string[],
  weight: number,
  height: number,
  stats: number[]
}