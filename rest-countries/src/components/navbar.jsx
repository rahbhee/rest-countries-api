import React, {useState} from 'react';
import Search from './search';

function NavBar({toggle, country, handleSearch, handleInputChange}){

    const [hover, setHover] = useState(false)

    const dropDown = () =>{
        setHover(!hover)
    }

    return(
        <nav className="flex text-sm mt-8 justify-between items-center w-4/5 m-auto">
          <Search country={country} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
            <div id={toggle ? "black" : "white"} className="w-44 pt-2 pb-2 pl-6 h-10 bg-white filter">
                <button onClick={dropDown} className="flex items-center dropdown">
                <p>Filter by Region</p>
                {hover ? <i className="ml-4 fa-solid fa-angle-up"></i> : <i className="ml-4 fa-solid fa-angle-down"></i>}
                </button>
                {hover ? <div className="relative bg-white w-44 dropdown-content">
                    <div><a href="">Africa</a></div>
                    <div> <a href="">America</a></div>
                    <div><a href="">Asia</a></div>
                    <div> <a href="">Europe</a></div>
                    <div className="mb-2"> <a href="">Oceania</a></div> 
                </div> : ""}
            </div>
        </nav>
    )
}

export default NavBar;