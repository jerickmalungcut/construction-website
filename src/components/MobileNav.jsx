import Logo from "../assets/logo-main.png";
import PropTypes from "prop-types";

const MobileNav = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <img src={Logo} alt="Logo" className="w-40 object-contain mb-8" />

        <ul>
          <li className="mb-5">
            <a onClick={() => handleScroll("hero")} className="menu-item">
              Home
            </a>
          </li>
          <li className="mb-5">
            <a onClick={() => handleScroll("services")} className="menu-item">
              Services
            </a>
          </li>
          <li className="mb-5">
            <a onClick={() => handleScroll("work")} className="menu-item">
              Our Work
            </a>
          </li>
          <li className="mb-5">
            <a
              onClick={() => handleScroll("testimonials")}
              className="menu-item"
            >
              Testimonials
            </a>
          </li>
        </ul>

        <button className="h-10 gradient text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
          Contact Us
        </button>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      />
    </div>
  );
};

MobileNav.propTypes = {
  setIsMenuOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default MobileNav;
