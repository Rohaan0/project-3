import {createContext, useReducer} from 'react'

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


const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const reducer = (state, action) => {
        switch(action.type) {
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValues)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
export {GlobalContextProvider}