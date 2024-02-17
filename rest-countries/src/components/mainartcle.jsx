import React from "react";

function MainSection({toggle, country, handleclick, backcountry, countryregion}){

    const handleCountryClick = (selectedCountry) => {
        handleclick(selectedCountry)
    }
    
    return(
        <>
          {
            countryregion ? <div onClick={backcountry} id={toggle ? "black" : "white"} className="relative mt-10 ml-32 h-10 cursor-pointer section-btn">
            <i className="pl-2 pr-2 text-center ml-5 mt-1 pt-2 fa-solid fa-arrow-left"></i>
            <button>Back</button>
            </div> : ""
        }
        <main className="m-auto mt-8 w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {country.map((count) =>(
             <div key={count.id} onClick={() => handleCountryClick(count)} id={toggle ? "black" : "white"} className="m-auto main-div bg-white">
                <div className="img-div">
                <img className="mt-0" src={count.flags.png}/>
                </div>
                 <div className="pt-4 details-div 10 pl-6">
                 <p className='mb-2 text-base font-extrabold'>{count.name.official}</p>
                 <p className="text-sm font-medium">Population: <span  id={toggle ? "white" : "gray"} className="">{count.population}</span></p>
                 <p className="text-sm">Region: <span  id={toggle ? "black" : "gray"} className="">{count.continents}</span></p>
                 <p className="text-sm">Capital: <span  id={toggle ? "black" : "gray"} className="">{count.capital}</span></p>
                 </div>
             </div>
            ))}
        </main>
        </>
      
    )
}
export default MainSection;