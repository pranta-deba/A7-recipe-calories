import SideBar from "../SideBar/SideBar";
import Recipes from "../Recipes/Recipes";
import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesContainer = ({ loadingSpinner, recipes }) => {
  const [selectCookItems, setSelectCookItems] = useState([]);
  const [currentlyCookItems, setCurrentlyCookItems] = useState([]);
  const [totalMinAndCalories, setTotalMinAndCalories] = useState([0, 0]);

  // want to cook btn handler
  const handleWantToCookBtn = (id) => {
    const selectedItems = selectCookItems.find((i) => i.id === id);
    if (selectedItems) {
      toast.warn("This recipe is already in the cooking list!");
      return;
    }
    const matchItemById = recipes.find((i) => i.id === id);
    setSelectCookItems([...selectCookItems, matchItemById]);
    toast.success("Added to cooking list.");
  };

  // preparing btn handler
  const handlePreparingBtn = (id) => {
    const matchItemById = recipes.find((i) => i.id === id);
    const newSelectedItems = selectCookItems.filter((i) => i.id !== id);
    const totalMin = totalMinAndCalories[0] + matchItemById?.cookTimeMinutes;
    const totalCalories =
      totalMinAndCalories[1] + matchItemById?.caloriesPerServing;
    setSelectCookItems(newSelectedItems);
    setCurrentlyCookItems([...currentlyCookItems, matchItemById]);
    setTotalMinAndCalories([totalMin, totalCalories]);
  };

  return (
    <div className="flex justify-center flex-col-reverse lg:flex-row gap-6 max-w-[1600px] w-[95%] md:w-[90%] mx-auto">
      <Recipes
        handleWantToCookBtn={handleWantToCookBtn}
        recipes={recipes}
        loadingSpinner={loadingSpinner}
      ></Recipes>
      <SideBar
        totalMinAndCalories={totalMinAndCalories}
        currentlyCookItems={currentlyCookItems}
        handlePreparingBtn={handlePreparingBtn}
        selectCookItems={selectCookItems}
      ></SideBar>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      ></ToastContainer>
    </div>
  );
};

RecipesContainer.propTypes = {
  loadingSpinner: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
};
export default RecipesContainer;
