import { IoIosTimer } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import PropTypes from "prop-types";

const RecipesCard = ({ items , handleWantToCookBtn}) => {
  const {
    id,
    name,
    image,
    ingredients,
    cookTimeMinutes,
    caloriesPerServing,
    instructions,
  } = items;
  return (
    <div className="card bg-base-100 p-3 md:p-6 card-shadows">
      <figure className="h-[200px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-2xl"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title text-xl font-semibold mt-6">
          {name}
        </h2>
        <p className="text-base font-normal text-[#150b2b99] h-6 overflow-auto overflowCard">
          {instructions[0]}
        </p>
        <hr />
        <div>
          <h4 className="text-lg font-medium">Ingredients: {ingredients.length}</h4>
          <ul className="list-disc px-5 py-3 text-lg font-normal text-[#150b2b99] h-24 overflow-y-auto overflowCard">
            {
              ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
            }
          </ul>
        </div>
        <hr />
        <div className="flex items-center justify-between text-base font-normal text-[#150b2b99]">
          <p className="flex items-center space-x-1">
            <span>
              <IoIosTimer />
            </span>
            <span>{cookTimeMinutes} minutes</span>
          </p>
          <p className="flex items-center justify-end space-x-1">
            <span>
              <FaFireFlameCurved />
            </span>
            <span>{caloriesPerServing} calories</span>
          </p>
        </div>
        <div className="card-actions">
          <button onClick={()=> handleWantToCookBtn(id)} className="btn font-semibold bg-primary-color px-5 border-none outline-none rounded-[50px]">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};
RecipesCard.propTypes = {
  items: PropTypes.object.isRequired,
  handleWantToCookBtn: PropTypes.func.isRequired,
};
export default RecipesCard;
