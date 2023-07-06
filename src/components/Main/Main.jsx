import React from "react";
import { Routes, Route } from 'react-router-dom';

//import components
import Home from "./Home/Home";
import NewPokemonForm from "./NewPokemonForm/NewPokemonForm";
import Details from "./Details/Details";
import SearchPokemon from "./SearchPokemon/SearchPokemon";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPokemonForm />} />
        <Route path="/search" element={<SearchPokemon />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </main>
  );
};

export default Main;
