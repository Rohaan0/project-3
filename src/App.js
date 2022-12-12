import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen.jsx"
import DetailScreen from "./components/detailComponents/DetailScreen.jsx"
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen.jsx"
import {Route, Routes} from 'react-router-dom'
// import AdBanner from './components/homeComponents/AdBanner.jsx'

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="/recipe/:id" element={<DetailScreen />} />
      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
