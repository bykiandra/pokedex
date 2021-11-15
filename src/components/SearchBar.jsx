import React from 'react';

const SearchBar = () => {
  return (
    <form className="bg-gray-100 p-2 rounded-xl">
      <input type="text" name="query" id="query"
        className="bg-transparent w-4/5 text-lg focus:outline-none" />
      <button type="submit" className="bg-red-500 p-1 text-white rounded-lg w-1/5">
        Search
      </button>
    </form>
  );
}

export default SearchBar;