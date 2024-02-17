import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header";
import NavBar from "./components/navbar";
import MainSection from './components/mainartcle';
import CountryInfo from './components/countryinfo';

function App() {

  const [toggle, setToggle] = useState(false)
  const [country, setCountry] = useState([])
  const [searchData, setSearchData] = useState(country)
  const [searchTerm, setSearchTerm] = useState('')
  const [countryInfo, setCountryInfo] = useState(null)
  const [countryRegion, setCountryRegion] = useState(null)

    useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then((res) =>{
          return res.json();
      })
      .then((data) =>{
          setCountry(data)
          setSearchData(data);
      })
  }, [])

  const handleSearch  = (searchword) =>{
    const search = country.filter(item => {
    const itemName = item.name && typeof item.name.common === 'string' ? item.name.common : '';
    return itemName.toLowerCase().includes(searchword.toLowerCase())
  })
    setSearchData(search);
  }

  const handleInputChange = (e) => {
    const searchword = e.target.value;
    setSearchTerm(searchword);
    handleSearch(searchword)
}

const handleClickCountry = (selectedCountry) =>{
  setCountryInfo(selectedCountry)
  setCountryRegion(null);
  console.log('Selected Country:', selectedCountry);
}
const backCountry = (selectedCountry) =>{
  setCountryInfo(!selectedCountry)
}
const backCountryRegion = (selectedRegion) =>{
  setCountryRegion(!selectedRegion)
}
const handleCountryRegion = (selectedRegion) => {
  setCountryRegion(selectedRegion)
  setCountryInfo(null)
  console.log('Selected Region:', selectedRegion);
}

const mainDisplay = () => {
  if(countryInfo){
    return (<>
    <Header toggle={toggle} settoggle={setToggle}/>
    <CountryInfo backcountry={backCountry} toggle={toggle} country={countryInfo}/>
    </>
  )}else if(countryRegion){
    const countriesInRegion = country.filter((item) => item.region === countryRegion);
    return (<>
    <Header toggle={toggle} settoggle={setToggle}/>
    <MainSection backcountry={backCountryRegion} handleClickRegion={handleCountryRegion} toggle={toggle} countryregion={countryRegion} country={countriesInRegion} setToggle={setToggle}/>
    </>
  )}else{
    return (<>
     <Header toggle={toggle} setToggle={setToggle}/>
    <NavBar handleClickRegion={handleCountryRegion} toggle={toggle} setToggle={setToggle} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
    <MainSection handleclick={handleClickCountry} toggle={toggle} setToggle={setToggle} country={searchData} />
    </>)
  }
}

  return (
    <main className={toggle ? "black" : "white"}>
  {mainDisplay()}
    </main>
  )
}

export default App;
