import { useState } from "react";
import Logo from "../assets/logo-main.png";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNav isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <div className="bg-background sticky z-10 top-0">
        <nav className="max-w-screen-xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="logo" className="h-11 w-auto object-contain" />

            <ul className="hidden md:flex md:gap-14">
              <li>
                <Link to="hero" smooth spy offset={-80} className="menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth
                  spy
                  offset={-60}
                  className="menu-item"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="work" smooth spy offset={-80} className="menu-item">
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth
                  spy
                  offset={-60}
                  className="menu-item"
                >
                  Testimonials
                </Link>
              </li>
            </ul>

            <button className="hidden md:block h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary transition-all duration-300">
              Contact Us
            </button>
            <button
              onClick={toggleMenu}
              className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50"
            >
              {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
