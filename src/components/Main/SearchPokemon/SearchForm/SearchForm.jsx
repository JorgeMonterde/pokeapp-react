import React, {useState, useEffect} from "react";
import axios from "axios";


const SearchForm = (props) => {
  const [error, setError] = useState({"status": 200});
  const [searchInput, setSearchInput] = useState("");
  const [timeoutId, setTimeoutId] = useState("");
  const [pokemonEndpts, setPokemonEndpts] = useState([]);
  const [allEndpts, setAllEndpts] = useState([]);
  const {modifyPokemons} = props;

  // gets pokemon endpoints from the begining:
  useEffect(() => {
    const getPokemonEndpts = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=9999`);
      const pokemonsInfo = response.data.results;
      console.log(pokemonsInfo);
      setAllEndpts(pokemonsInfo);
      
    }
    getPokemonEndpts();
  }, [])


/*   // gets pokemon when submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    e.target.name.value = "";

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
  }; */


  const filterNameStartingWith = async (array, string) => {
    const regEx = new RegExp(`^${string}`);
    const filteredArray = array.filter(item => regEx.test(item.name))
    return filteredArray;
  }

  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

  };




  // filters pokemons by starting letters
  useEffect(() => {
    let prevTimerId = timeoutId;
    clearTimeout(prevTimerId);

    let timerId = setTimeout(async () => {
      console.log("pre -->: ",allEndpts);

      if(!searchInput){
        // if input is undefined, send all endpoints
        setPokemonEndpts(allEndpts);
      } else {
        // if input is not undefined, filter endpoints
        const endpoints = await filterNameStartingWith(allEndpts, searchInput);
        console.log("filtered: ",endpoints);
        setPokemonEndpts(endpoints);
      }

    }, 1500);
    setTimeoutId(timerId)

  }, [searchInput]);




  // gets filtered pokemons info
  useEffect(() => {
    
    let getPokemonInfo = async () => {
      if(!pokemonEndpts){
        console.log("Waiting for input to search")
        return;
      }
      try {
        let pokemonsInfo = [];
        for (let endpoint of pokemonEndpts){
          const response = await axios.get(endpoint.url);
          pokemonsInfo.push(response.data);
        }
        modifyPokemons(pokemonsInfo);
      } catch (error) {
        console.error("Error: ", error);
        setError(error.response.status);
      }

    };
    getPokemonInfo();

  }, [pokemonEndpts]);

  





  


  return (
    <form /* onSubmit={handleSubmit} */ className="search-form">
      <h3>Search a pokemon</h3>
      <div className="inputs-div">
        <input type="text" name="name" id="nameInput" placeholder="Name or id" onChange={handleChange}/>
        {/* <input type="submit" value="Search" /> */}
      </div>
      {error == 404 ? <div><p>We are sorry, this pokemon does not exist...</p><p>yet...</p></div> : ""}
    </form>
  );
};

export default SearchForm;
