import React from 'react';

function CountryInfo({country, backcountry, toggle}){
    if (!country){
        return (
          <section>

          </section>
        );
      }
    
      return (
        <section className="grid lg:grid-cols-2 m-auto">
            <div className="lg:col-start-1 mt-10 m-auto">
                <div onClick={backcountry} id={toggle ? "black" : "white"} className="mb-10 h-10 cursor-pointer section-btn">
                <i className="pl-2 pr-2 text-center ml-5 mt-1 pt-2 fa-solid fa-arrow-left"></i>
                <button>Back</button>
                </div>
                <img className='info-img' src={country.flags.png}/>
            </div>
            <div className="section-p lg:col-start-2 m-auto">
            <h1 className="font-bold text-2xl mt-4">Belgium</h1>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:col-start-1 mt-6'>
                        <p><span>Native name: </span> {country.name.common}</p>
                        <p><span>Population: </span>{country.population}</p>
                        <p><span>Region: </span>{country.region}</p>
                        <p><span>Sub-region: </span>{country.subregion}</p>
                        <p><span>Capital: </span>{country.capital}</p>
                    </div>
                    <div className="lg:ml-8 grid lg:mt-6 mt-8 lg:col-start-2">
                        <p><span>Top level dominance: </span>{country.tld}</p>
                        <p><span>Currencies: </span>{Object.entries(country.currencies || {}).map(([currcode, currcurr]) =>(
                            <i key={currcode}>{`${currcurr.name}`}</i>
                        ))}</p>
                        <p><span>Languages: </span> {Object.entries(country.languages || {}).map(([langCode, langName]) => (
                <i key={langCode}>{`${langName}`}, </i>
              ))} </p>
                    </div>
                </div>
                <div>
                    <p><span>Border countries: </span>{country.borders ? country.borders.map((borderCode, index)=>(
                        <i key={index}>{borderCode}, </i>
                    )) : "none"}</p>
                    <p></p>
                </div>
            </div>
        </section>
      );
    }
    
    export default CountryInfo;