import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid md:grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Categories</a>
        <a className="link link-hover">Terms and Conditions</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl cursor-pointer">
          <FaFacebook />
          </a>
          <a className="text-2xl cursor-pointer">
          <FaGithub />
          </a>
          <a className="text-2xl cursor-pointer">
          <FaLinkedin />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by FoodRaj Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
