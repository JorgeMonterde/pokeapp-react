import React, { useState } from "react";
import Item from "./Item/Item";
import { v4 as uuidv4 } from 'uuid';



const List = (props) => {
  const {newPokemons, deletePokemon} = props;

  const printNewPokemons = () => newPokemons.map((pokemon) => {
    let key = uuidv4();
    return <Item key={key} name={pokemon.info.name} img={pokemon.info.img} deleteItem={() => deletePokemon(pokemon.id)}/>
  });




  return (
    <ul id="list">
      {printNewPokemons()}
    </ul>
  );
};

export default List;