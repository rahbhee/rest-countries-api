import React from 'react';

function Header({setToggle, toggle}){

    const handleToggle = () =>{
        setToggle(!toggle)
      }
    return(
        <header  id={toggle ? "black" : "white"} className="w-auto pt-4 pb-4">
            <div className="header-div flex items-center justify-between w-4/5 m-auto">
            <h1 className="font-bold text-xl">Where in the world?</h1>
            <div className="flex items-center">
                {toggle ? <i className="mr-2 fa-regular fa-sun"></i> : <i className="mr-2 fa-regular fa-moon"></i>}
                <button onClick={handleToggle} className="text-sm">{toggle ? "Light Mode" : "Dark Mode"}</button>
            </div>
            </div>
        </header>
    )
}

export default Header;