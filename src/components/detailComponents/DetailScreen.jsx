import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import DetailImage from './DetailImage.jsx'

const DetailScreen = ({title, prep_time, ingredients, quantity, ingredient, cook_time}) => {  
  const [recipe, setRecipe] = useState({})
  const { id } = useParams();
  const url = "https://recipes.devmountain.com";
  console.log(recipe)


 

  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
    });
  }, [])

  return (
    <section>
    <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
    <div className="full-container">
        <div className="left-container">
            <span className="Recipe">
              <h1>Recipe</h1>
              <ul>
                <li>{recipe.prep_time}</li>  
                <li>{recipe.cook_time}</li>  
                <li>{recipe.quantity}</li>  
              </ul>
            </span>
            <span className="ingredients">
              <h1>Ingredients</h1>
              <ul>
                <li>{recipe.ingredients && recipe.ingredients.map((ing, index) => {
                  return <h4>{ing.quantity} {ing.ingredient}</h4>
                })}</li>
              </ul>
            </span>
            
        </div>
        <div className="right-container">
          <h1 className="instructions">Instructions</h1>
          <p style={{ whitespace: "pre-wrap" }}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>

    </div>
    </section>
  );
};

export default DetailScreen;