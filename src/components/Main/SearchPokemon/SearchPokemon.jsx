import React from "react";

//import components
import SearchForm from "./SearchForm/SearchForm";
import PokemonList from "./PokemonList/PokemonList";

const Search = () => {
  return (
    <section>
      <SearchForm />
      <PokemonList />
    </section>
  );
};

export default Search;
