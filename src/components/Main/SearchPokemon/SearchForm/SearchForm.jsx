import React from "react";


const SearchForm = () => {
  

  return (
    <form>
      <h3>Search a pokemon</h3>
      <input type="text" name="name" id="nameInput" placeholder="Pokemon name"/>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
