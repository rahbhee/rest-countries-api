import React, {useState} from 'react';

function Search({toggle, country, handleSearch, handleInputChange}){

    const [searchTerm, setSearchTerm] = useState('');


    return(
        <div id={toggle ? "black" : "white"} className="w-96 px-6 h-10 flex items-center nav-input-div">
        <i className="mr-4 fa-solid fa-magnifying-glass"></i>
        <input id={toggle ? "black" : "white"} onChange={handleInputChange} className="border-none outline-none" type="search" placeholder='Search for a country...'/>
        </div>
    )
}

export default Search;