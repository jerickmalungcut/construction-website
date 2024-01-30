import { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-background sticky z-10 top-0">
      <nav className="max-w-screen-xl mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="h-11 w-auto object-contain" />

          <ul className="hidden md:flex md:gap-14">
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Services</a>
            </li>
            <li>
              <a className="menu-item">Our Work</a>
            </li>
            <li>
              <a className="menu-item">Testimonials</a>
            </li>
          </ul>

          <button className="hidden md:block h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary">
            Contact Us
          </button>
          <button className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50">
            <RiMenu4Line />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
