import React, {useContext} from "react";

//import components
import SearchForm from "./SearchForm/SearchForm";
import PokemonList from "./PokemonList/PokemonList";

//contexts
import { PokemonContext } from "../../../context/pokemonContext";

const Search = (props) => {
  const {pokemons, modifyPokemons} = useContext(PokemonContext);


  return (
    <section className="search-pokemon">
      <SearchForm modifyPokemons={modifyPokemons}/>
      <PokemonList pokemons={pokemons}/>
    </section>
  );
};

export default Search;
