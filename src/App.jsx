import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RecipesContainer from "./components/RecipesContainer/RecipesContainer";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import SeeMoreBtn from "./components/SeeMoreBtn/SeeMoreBtn";
import Footer from "./components/Footer/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  // load data
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      if (!seeMore) {
        setRecipes(data.recipes.slice(0, 6));
        setLoadingSpinner(false);
      } else {
        setRecipes(data.recipes);
        setLoadingSpinner(false);
      }
    };
    loadData();
    setLoadingSpinner(true);
  }, [seeMore]);

  // see more btn click handler
  const handleSeeMoreBtn = () => {
    setSeeMore(true);
  };

  return (
    <>
      <Navbar></Navbar>
      <SectionHeader></SectionHeader>
      {loadingSpinner && <LoadingSpinner></LoadingSpinner>}
      <RecipesContainer
        recipes={recipes}
        loadingSpinner={loadingSpinner}
      ></RecipesContainer>
      {!seeMore && (
        <SeeMoreBtn handleSeeMoreBtn={handleSeeMoreBtn}></SeeMoreBtn>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
