import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import  { BsSearch }  from "react-icons/bs";

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })
  return (
    <section>
            <div className="search-bar">
            <BsSearch size="1.5em" color="#CC6600" />
            <input type="text" 
            placeHolder="Search for a Recipe" 
            value={search}  
            onChange={(e) => setSearch(e.target.value)} 
            className="recipe-input"
             />
            
    </div>
    <div className="cards-container">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes : </h2>}
    </div>
    </section>
  );
};

export default RecipeContainer;