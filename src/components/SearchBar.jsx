import React from 'react';

const SearchBar = (props) => {
  return (
    <form className="bg-gray-100 p-2 rounded-xl" onSubmit={props.handleSubmit}>
      <input type="text" name="pokemon" id="pokemon" placeholder="Search..."
        className="bg-transparent w-4/5 focus:outline-none"
        onChange={props.handleChange} />
      <button type="submit" onClick={props.handleSubmit}
        className="bg-red-500 hover:bg-red-600 p-1 text-white rounded-lg w-1/5">
        Search
      </button>
    </form>
  );
}

export default SearchBar;