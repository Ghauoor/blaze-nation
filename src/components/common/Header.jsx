import { useState } from "react";
import Logo from "../../assets/images/logo.png";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 ml-5" />
          <h1 className="text-white p-5 text-lg font-bold">Blaze Nation</h1>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="text-white hover:text-gray-300 mr-6 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mr-6 transition duration-300 ease-in-out"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mr-6 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mr-6 transition duration-300 ease-in-out"
          >
            Scrap Prices
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mr-6 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden relative">
          <button
            className="text-white focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <ul>
                {["Home", "About us", "Services", "Contact", "Scrap Price"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900 rounded-t-lg transition duration-300 ease-in-out"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
