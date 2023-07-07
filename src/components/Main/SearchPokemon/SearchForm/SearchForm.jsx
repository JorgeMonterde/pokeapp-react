import React, {useState} from "react";
import axios from "axios";


const SearchForm = (props) => {
  const [error, setError] = useState({"status": 200});
  const {modifyPokemons} = props;

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;

    try {
      console.log(name)
      if(name){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonsInfo = response.data;
        console.log("your pokemon info: ", pokemonsInfo);
        modifyPokemons([pokemonsInfo]);
      } else {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`);
        console.log(response);
        const pokemonsEndpt = response.data.results;

        const pokemonsInfo = [];
        for(let i=0; i<pokemonsEndpt.length; i++){
          const url = pokemonsEndpt[i].url;
          const response = await axios.get(url);
          pokemonsInfo.push(response.data);
        }
        console.log("Pokemons info: ", pokemonsInfo);
        modifyPokemons(pokemonsInfo);
      }
        
    } catch (error) {
      console.error("Error: ", error);
      setError(error.response.status);
    }
  };



  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h3>Search a pokemon</h3>
      <div className="inputs-div">
        <input type="text" name="name" id="nameInput" placeholder="Pokemon name"/>
        <input type="submit" value="Search" />
      </div>
      {error == 404 ? <div><p>We are sorry, this pokemon does not exist...</p><p>yet...</p></div> : ""}
    </form>
  );
};

export default SearchForm;
