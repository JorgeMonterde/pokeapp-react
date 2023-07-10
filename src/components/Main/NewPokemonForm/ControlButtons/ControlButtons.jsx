import React from "react";

const ControlButtons = (props) => {
  const {clearPokemons, resetPokemons} = props;

  const clearPokemonsClick = () => {
    clearPokemons();
  };

  const resetPokemonsClick = () => {
    resetPokemons();
  };


  return <div className="control-buttons">
    <button className="new-pokemons-button" onClick={clearPokemonsClick}>Clear Pokemons</button>
    <button className="new-pokemons-button" onClick={resetPokemonsClick}>Reset Pokemons</button>
  </div>;
};

export default ControlButtons;
