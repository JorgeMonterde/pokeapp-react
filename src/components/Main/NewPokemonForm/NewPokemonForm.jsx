import React, { useState } from "react";
import Form from "./Form/Form";
import ControlButtons from "./ControlButtons/ControlButtons";
import List from "./List/List";
import { v4 as uuidv4 } from 'uuid';

const defaultNewPokemons = [{
  "info": {
    name: "Mike Wachowsky",
    img: "https://e7.pngegg.com/pngimages/957/902/png-clipart-mike-wazowski-randall-boggs-james-p-sullivan-monsters-inc-mike-miscellaneous-vertebrate.png"
  },
  "id": uuidv4()
},{
  "info": {
    name: "Naranjito",
    img: "https://i.pinimg.com/originals/b4/27/e6/b427e650a2c7366020b77a057682c228.png"
  },
  "id": uuidv4()
},{
  "info": {
    name: "Clippy",
    img: "https://i.blogs.es/ec5c91/1366_2000-4-/1366_2000.jpeg"
  },
  "id": uuidv4()
}];


const NewPokemonForm = () => {
  const [newPokemons, setNewPokemons] = useState(defaultNewPokemons);

  const addPokemon = (newPokemon) => {
    let newPokemonInfo = {
      "info": newPokemon,
      "id": uuidv4()
    };
    setNewPokemons([...newPokemons, newPokemonInfo]);
  };

  const deletePokemon = (id) => {
    setNewPokemons(newPokemons.filter(pokemon => {
     return id != pokemon.id
    }));
  };

  const clearPokemons = () => {
    setNewPokemons([]);
  };

  const resetPokemons = () => {
    setNewPokemons(defaultNewPokemons);
  };


  return (
    <section className="new-pokemon-section">
      <h2>Create new pokemon</h2>
      <Form addPokemon={addPokemon} />
      <ControlButtons clearPokemons={clearPokemons} resetPokemons={resetPokemons}/>
      <List deletePokemon={deletePokemon} newPokemons={newPokemons} />
    </section>
  );
};

export default NewPokemonForm;
