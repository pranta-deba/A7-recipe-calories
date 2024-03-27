import PropTypes from "prop-types";

const SeeMoreBtn = ({ handleSeeMoreBtn }) => {
  return (
    <div className="text-center my-8">
      <button onClick={handleSeeMoreBtn} className="btn font-semibold bg-primary-color px-5 border-none outline-none">
        See more
      </button>
    </div>
  );
};
SeeMoreBtn.propTypes = {
  handleSeeMoreBtn: PropTypes.func.isRequired,
};
export default SeeMoreBtn;
