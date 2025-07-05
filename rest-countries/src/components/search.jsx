import {useState} from 'react';

function Search({ toggle, handleSearch, handleInputChange, searchTerm }) {
  return (
    <div id={toggle ? "black" : "white"} className="w-96 px-6 h-10 flex items-center nav-input-div">
      <i className="mr-4 fa-solid fa-magnifying-glass"></i>
      <input
        id={toggle ? "black" : "white"}
        value={searchTerm}
        onChange={handleInputChange}
        className="border-none outline-none bg-transparent"
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}


export default Search;