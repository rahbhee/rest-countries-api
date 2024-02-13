import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header";
import NavBar from "./components/navbar";
import MainSection from './components/mainartcle';

function App() {

  const [toggle, setToggle] = useState(false)
  const [country, setCountry] = useState([])
  const [searchData, setSearchData] = useState(country)
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <main id={""} className={toggle ? "black" : "white"}>
      <Header toggle={toggle} setToggle={setToggle}/>
      <NavBar toggle={toggle} setToggle={setToggle} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
      <MainSection toggle={toggle} setToggle={setToggle}  country={searchData} />
    </main>
  )
}

export default App;
