import {useState} from 'react';
import Search from './search';

function NavBar({toggle, country, handleSearch, handleClickRegion, handleInputChange}){

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const dropDown = () =>{
        setDropdownVisible(!dropdownVisible)
    };

    const handleClickCountryRegion = (selectedRegion, event) =>{
        handleClickRegion(selectedRegion)
        event.preventDefault();
    }

    return(
        <nav className="flex text-sm mt-8 justify-between items-center w-4/5 m-auto">
          <Search toggle={toggle} country={country} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
            <div id={toggle ? "black" : "white"} className="w-44 pt-2 pb-2 pl-6 h-10 bg-white filter">
                <button onClick={dropDown} className="flex items-center dropdown">
                <p>Filter by Region</p>
                {dropdownVisible ? <i className="ml-4 fa-solid fa-angle-up"></i> : <i className="ml-4 fa-solid fa-angle-down"></i>}
                </button>
                {dropdownVisible ? <div id={toggle ? "black" : "white"} className="relative bg-white w-44 dropdown-content">
                        <div onClick={(e) => handleClickCountryRegion('Africa', e)}><a href="">Africa</a></div>
                         <div onClick={(e) => handleClickCountryRegion('Americas', e)}> <a href="">America</a></div>
                         <div onClick={(e) => handleClickCountryRegion('Asia', e)}><a href="">Asia</a></div>
                         <div onClick={(e) => handleClickCountryRegion('Europe', e)}> <a href="">Europe</a></div>
                         <div onClick={(e) => handleClickCountryRegion('Oceania', e)} className="mb-2"> <a href="">Oceania</a></div> 
                        </div>
                    : ""}
            </div>
        </nav>
    )
}

export default NavBar;