import React, {useState} from "react";

//util functions
import { v4 as uuidv4 } from "uuid";
import { firstLetterToUppercase } from "../../../../utils/handleData";

//import components
import Card from "./Card/Card";

const PokemonList = (props) => {

  const {pokemons} = props;
  console.log("to print", pokemons)

  const handlePokemonInfo = (pokemon) => {
    return {
      id:pokemon.id,
      name: firstLetterToUppercase(pokemon.name),
      img: pokemon.sprites.other["official-artwork"].front_default,
      thumbnail: pokemon.sprites.front_default,
      types: pokemon.types.map(type => firstLetterToUppercase(type.type.name)),
      height: pokemon.height,
      weight: pokemon.weight,
      stats: pokemon.stats

    }
  };

  const printPokemonCards = () => pokemons.map((pokemon) => {
    let key1 = uuidv4();
    let key2 = uuidv4();
    console.log("??",pokemon)
    const info = handlePokemonInfo(pokemon);
    return (<li key={key2}><Card key={key1} info={info}/></li>)
    }
  );
  


  return (
    <ul className="pokemon-list">
      {pokemons[0] ? printPokemonCards() : console.log("there are no pokemons here")}
    </ul>
  );
};

export default PokemonList;
