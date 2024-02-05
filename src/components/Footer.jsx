import Logo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto gradient">
        <div className="flex flex-col items-center justify-center p-8">
          <img src={Logo} alt="Logo" className="w-60 mb-6" />

          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <a href="" className="text-sm text-white hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-white hover:text-blue-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-white hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-white hover:text-blue-300">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-white hover:text-blue-300">
                Get Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-darkBlue text-center text-white p-4 text-xs">
        TerraForm Constuction &copy; 2024. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
