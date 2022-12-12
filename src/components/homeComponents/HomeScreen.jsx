import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeContainer from '../newRecipeComponents/RecipeContainer.jsx'


const HomeScreen = () => {  
  const [recipes, setRecipes] = useState({})


  const getRecipes = () => {

    axios
    .get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  
  }



  useEffect(() => {
    getRecipes()
  }, [])

  return (

    <div>
      <AdBanner />
        <RecipeContainer recipes={recipes} />

    </div>
  )
}

export default HomeScreen