import React, {useState, useEffect} from "react";

function MainSection({toggle}){

    const [country, setCountry] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) =>{
            return res.json();
        })
        .then((data) =>{
            setCountry(data)
        })
    }, [])

    return(
        <main className="m-auto mt-8 w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {country.map((count) =>(
             <div id={toggle ? "black" : "white"} className="m-auto main-div bg-white">
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
    )
}
export default MainSection;