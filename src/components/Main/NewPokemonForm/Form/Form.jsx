import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';



const Form = (props) => {

  const {addPokemon} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    let pokemonInfo = {
      "name": event.target.name.value,
      "img": event.target.img.value
    };
      

    event.target.name.value = "";
    event.target.img.value = "";
    addPokemon(pokemonInfo);
    
  };

  const printErrorMessage = () => {
    return JSON.stringify("Message need to be at least 6 characters long.");
  };

  
  
  return (
  <form className="add-pokemon-form" onSubmit={handleSubmit}>
    <input type="text" name="name" id="name" placeholder="Pokemon name" />
    <input type="text" name="img" id="img" placeholder="Pokemon image" />
    <input type="submit" value="ADD" />
  </form>
  );
};

export default Form;
