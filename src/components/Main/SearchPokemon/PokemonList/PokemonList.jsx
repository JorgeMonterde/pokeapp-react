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
    console.log("HEY",pokemon.name)
    return {
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
  


/*   // print cards 
  useEffect(() => {
    let prevTimerId = timeoutId;
    clearTimeout(prevTimerId);
    let timerId = setTimeout(async () => {
      const endpoints = filterNameStartingWith(pokemonEndPt, searchInput)
      console.log(endpoints)
      try {
        if(endpoints[0]){
          let pokemonsInfo = [];
          for (let endpoint of endpoints){
            const response = await axios.get(endpoint.url);
            pokemonsInfo = response.data;
            console.log("your pokemon info: ", pokemonsInfo);
          }
          modifyPokemons([pokemonsInfo]);
        } else {
          console.log("Waiting for input to search");
        }
          
      } catch (error) {
        console.error("Error: ", error);
        setError(error.response.status);
      }

    }, 2500);
    setTimeoutId(timerId)

  }, [searchInput]); */


  return (
    <ul className="pokemon-list">
      {pokemons[0] ? printPokemonCards() : console.log("there are no pokemons here")}
    </ul>
  );
};

export default PokemonList;
