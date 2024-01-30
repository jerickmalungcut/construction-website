import logo from "../assets/logo.png";

const MobileNav = ({ setIsMenuOpen }) => {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" className="w-16 object-contain mb-8" />

        <ul>
          <li className="mb-5">
            <a className="menu-item">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
