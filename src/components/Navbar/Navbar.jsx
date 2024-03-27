import Banner from "../Banner/Banner";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="max-w-[1600px] w-full md:w-[90%] mx-auto">
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="lg:hidden flex items-center text-2xl mr-1"
              >
                <GiHamburgerMenu />
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="text-base font-normal text-[#150B2BB3]">Home</a>
                </li>
                <li>
                  <a className="text-base font-normal text-[#150B2BB3]">Recipes</a>
                </li>
                <li>
                  <a className="text-base font-normal text-[#150B2BB3]">About</a>
                </li>
                <li>
                  <a className="text-base font-normal text-[#150B2BB3]">Search</a>
                </li>
              </ul>
            </div>
            <a className="text-[#150B2B] text-3xl font-bold">Healthy<span className="text-primary-color">Bite</span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-base font-normal text-[#150B2BB3]">Home</a>
              </li>
              <li>
                <a className="text-base font-normal text-[#150B2BB3]">Recipes</a>
              </li>
              <li>
                <a className="text-base font-normal text-[#150B2BB3]">About</a>
              </li>
              <li>
                <a className="text-base font-normal text-[#150B2BB3]">Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            <label className="input input-bordered items-center gap-2 bg-[#150b2b0d] hidden md:flex">
            <IoSearchOutline />
              <input type="text" className="grow text-base font-normal text-[#150B2BB3] border-none outline-none" placeholder="Search" />
            </label>
            <a className="btn bg-primary-color text-2xl md:rounded-[50px]"><FaRegUserCircle /></a>
          </div>
        </div>
        <div className="w-[96%] mx-auto md:hidden flex">
          <label className="input input-bordered flex items-center gap-2 bg-[#150b2b0d] w-full">
            <IoSearchOutline />
              <input type="text" className="grow text-base font-normal text-[#150B2BB3] border-none outline-none" placeholder="Search" />
            </label>
          </div>
      </nav>

      <Banner></Banner>
    </header>
  );
};

export default Navbar;
