import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

//styles
import "../styles/style.scss";
//import './App.css'

//import components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//contexts
import { PokemonContext } from "./context/pokemonContext"

function App() {
  const [pokemons, setPokemons] = useState([]);

  const modifyPokemons = (data) => {
    setPokemons(data);
  };

  return (
    <>
    <PokemonContext.Provider value={{pokemons, modifyPokemons}}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </PokemonContext.Provider>
    </>
  )
}

export default App
