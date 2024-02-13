import React, {useState} from 'react';

function Search({toggle, country, handleSearch, handleInputChange}){

    const [searchTerm, setSearchTerm] = useState('');


    return(
        <div  id={toggle ? "black" : "white"}  className="w-96 px-6 h-10 bg-white flex items-center nav-input-div">
        <i id={toggle ? "black" : "white"} className="bg-white mr-4 fa-solid fa-magnifying-glass"></i>
        <input onChange={handleInputChange} className="border-none bg-transparent outline-none" type="search" placeholder='Search for a country...'/>
        </div>
    )
}

export default Search;