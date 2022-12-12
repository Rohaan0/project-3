import React, {useState} from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");


  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values) => {
  console.log(values)
}


const ingredientDisplay = ingredients.map((ing) => {
  return (
    <li>
      {ing.quantity} {ing.name}
    </li>
  );
});



return (
    <>
    <section className="new-recipe-section">
     

      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <form className="input-form">
              <div className="input-container1">
                  <input 
                  placeholder="Name" 
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                  />
                  <input 
                  placeHolder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                  />
              </div>
              <div className="radio-container">
              <div className="cook-input">
                  <input 
                  type="radio" 
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                  />
                  <label>Cook</label>
              </div>
              <div className="bake-input">
                  <input 
                  type="radio" 
                  value="Bake"
                  onChange={handleChange}
                  name="type" />
                  <label>Bake</label>
              </div>
              <div className="drink-input">
                  <input 
                  type="radio" 
                  value="Drink"
                  onChange={handleChange}
                  name="type" />
                  <label>Drink</label>
              </div>
            </div>
            <div className="input-container2">
              <input 
              placeHolder="Prep Time" 
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
              />
              <input  
              placeHolder="Cook Time" 
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"/>
              <input 
              placeHolder="Serves" 
              value={values.serves}
              onChange={handleChange}
              name="serves"/>
            </div>
          <div className="bottom-container">
            <div className="input-container3">
            <input 
            placeHolder="Ingredient" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            placeHolder="Quantity" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        <span>
            <ul className="form-list">
              {ingredientDisplay}
            </ul>
          </span>
        </div>
        

        <button className="add-ingred" type="button" onClick={addIngredient}>Add Another</button>

        <div className="text-area">
          <textarea className="instructions-area" 
          placeHolder="What are the Instructions?" 
          rows={5} 
          value={values.instructions} 
          onChange={handleChange} 
          name="instructions"
          />
        </div>
        <button className="save-btn" type="submit">Save</button>


        
      </form>
            </form>
          )}
      </Formik>
    </section>
    </>
  );
};

export default NewRecipeScreen;
