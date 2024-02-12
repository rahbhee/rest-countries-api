import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import NavBar from "./components/navbar";
import MainSection from './components/mainartcle';


function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <main className={toggle ? "black" : "white"}>
      <Header toggle={toggle} setToggle={setToggle}/>
      <NavBar toggle={toggle} setToggle={setToggle}/>
      <MainSection toggle={toggle} setToggle={setToggle}/>
    </main>
  )
}

export default App
