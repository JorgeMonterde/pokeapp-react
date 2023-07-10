import React, {useContext} from "react";
import {useParams} from "react-router-dom";
//components
import CardControls from "./CardControls/CardControls";
import RequiredCard from "./RequiredCard/RequiredCard";
//contexts
import { PokemonContext } from "../../../context/pokemonContext";


const Details = () => {
  const { id } = useParams();
  console.log(id);

  const {pokemons, modifyPokemons} = useContext(PokemonContext);

  const printRequiredCard = () => {
    //filter pokemon info in "pokemons" (context) with "id" from params:
    const pokemonRequiredInfo = pokemons.filter(item => item.id == id);

    console.log("This is __>", pokemonRequiredInfo)

    //return detail card:
    return <RequiredCard info={pokemonRequiredInfo}/>;
  };




  return (
    <section className="detail-card">
      <CardControls/>
      <section className="card-info">
        {pokemons? printRequiredCard() : ""}

      </section>
    </section>
    );
};

export default Details;
