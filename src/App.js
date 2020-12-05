import React, { useState, useEffect } from "react";
import "./styles.css";
import Recipe from "./Recipe";

const App = () => {
  // api dan istifade edirik ( edamam.com )

  const APP_ID = "5656d321";
  const APP_KEY = "b11023893e9ec76d7b7e2ab21761e906";

  //const [counter,setCounter] = useState(0);

  // state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const requestUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    //console.log("Effect has run");
    getRecipes();
  }, [query]); // bir defe cagirmasi ucun bos -> []

  const getRecipes = async () => {
    const response = await fetch(requestUrl);
    const data = await response.json();
    //console.log(data.hits);

    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn">Search</button>
      </form>
      {/* <h1 onClick={ ()=> setCounter(counter+1) } >{counter}</h1> */}
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients ={ recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
