import { MdFormatListNumbered } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import { MdOutlinePendingActions } from "react-icons/md";
import PropTypes from "prop-types";

const SideBar = ({
  selectCookItems,
  handlePreparingBtn,
  currentlyCookItems,
  totalMinAndCalories,
}) => {
  return (
    <div className="lg:w-1/3 card-shadows h-full py-5 space-y-4 flex flex-col justify-center">
      <h1 className="px-5 text-center text-2xl font-semibold">
        Want to cook: {selectCookItems.length}
      </h1>
      <hr />
      <table className="text-center">
        <thead className="px-5">
          <tr className="text-sm md:text-base md:font-medium text-[#878787]">
            <th>
              <MdFormatListNumbered />
            </th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th className="flex justify-center">
              <PiCookingPotBold />
            </th>
          </tr>
        </thead>
        <tbody>
          {selectCookItems.map((item, index) => (
            <tr key={index} className="sidebarCart">
              <td>{index + 1}</td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.name}
              </td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.cookTimeMinutes} minutes
              </td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.caloriesPerServing} calories
              </td>
              <td>
                <button
                  onClick={() => handlePreparingBtn(item.id)}
                  className="btn text-xs md:text-base md:font-semibold bg-primary-color md:px-4 border-none outline-none rounded-[50px] hidden md:flex"
                >
                  Preparing
                </button>
                <button
                onClick={() => handlePreparingBtn(item.id)}
                 className="btn text-xs md:text-base md:font-semibold bg-primary-color md:px-4 border-none outline-none rounded-[50px] flex md:hidden">
                  <MdOutlinePendingActions />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="px-5 text-center text-2xl font-semibold">
        Currently cooking: {currentlyCookItems.length}
      </h1>
      <hr />
      <table className="text-center">
        <thead className="px-5">
          <tr className="text-sm md:text-base md:font-medium text-[#878787]">
            <th>
              <MdFormatListNumbered />
            </th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentlyCookItems.map((item, index) => (
            <tr key={index} className="sidebarCart cooking">
              <td>{index + 1}</td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.name}
              </td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.cookTimeMinutes} minutes
              </td>
              <td className="text-xs md:text-base font-normal text-[#878787]">
                {item?.caloriesPerServing} calories
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-[#282828CC] text-base font-medium px-6">
        <p>Total Time = {totalMinAndCalories[0]} minutes</p>
        <p>Total Calories = {totalMinAndCalories[1]} calories</p>
      </div>
    </div>
  );
};
SideBar.propTypes = {
  selectCookItems: PropTypes.array.isRequired,
  handlePreparingBtn: PropTypes.func.isRequired,
  currentlyCookItems: PropTypes.array.isRequired,
  totalMinAndCalories: PropTypes.array.isRequired,
};
export default SideBar;
