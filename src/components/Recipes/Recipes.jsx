import LoadingCard from "../LoadingCard/LoadingCard";
import RecipesCard from "../RecipesCard/RecipesCard";
import PropTypes from "prop-types";

const Recipes = ({ loadingSpinner, recipes, handleWantToCookBtn }) => {
  return (
    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 justify-center items-center gap-6 mb-7">
      {loadingSpinner && (
        <>
          <LoadingCard></LoadingCard>
          <LoadingCard></LoadingCard>
        </>
      )}
      {recipes.map((items, index) => (
        <RecipesCard
          handleWantToCookBtn={handleWantToCookBtn}
          key={index}
          items={items}
        ></RecipesCard>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  loadingSpinner: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
  handleWantToCookBtn: PropTypes.func.isRequired,
};
export default Recipes;
