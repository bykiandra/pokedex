interface Props {
  handleChange: HandleChange,
  handleSubmit: HandleSubmit
}

const SearchBar = ({ handleChange, handleSubmit }: Props) => {
  return (
    <form className="bg-gray-100 p-2 rounded-xl">
      <input type="text" name="pokemon" id="pokemon" placeholder="Search..."
        className="bg-transparent w-4/5 focus:outline-none"
        onChange={(e) => { handleChange(e) }} />
      <button type="submit" onClick={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="bg-red-500 hover:bg-red-600 p-1 text-white rounded-lg w-1/5">
        Search
      </button>
    </form>
  );
}

export default SearchBar;