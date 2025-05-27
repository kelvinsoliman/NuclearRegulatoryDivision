import { useState } from "react";
import logo from "../../assets/PNRI_Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 shadow-xl ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center justify-between space-x-3 rtl:space-x-reverse "
        >
          <img src={logo} className="h-10 w-10 rounded-full" alt="PNRI Logo" />
          <span className="hidden lg:block self-center text-xl lg:text-2xl font-semibold whitespace-nowrap text-black ">
            Licensing Review & Evaluation 
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          
          <li className="relative hover:bg-slate-200  rounded-xl">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:hover:text-blue-700 "
              >
                Home
                <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute z-50 left-0 mt-1 w-44 bg-white shadow-md rounded-lg py-2">
                  <li>
                    <Link to="/" className="block px-4 py-2 text-black hover:bg-gray-300">Home</Link>
                  </li>
                  <li>
                    <Link to="/Rsds" className="block px-4 py-2 text-black hover:bg-gray-300">RSDS</Link>
                  </li>
                  <li>
                    <Link to="/Ies" className="block px-4 py-2 text-black hover:bg-gray-300">IES</Link>
                  </li>
                  <li>
                    <Link to="/Nsss" className="block px-4 py-2 text-black hover:bg-gray-300">NSSS</Link>
                  </li>
                  <li>
                    <Link to="/Rias" className="block px-4 py-2 text-black hover:bg-gray-300">RIAS</Link>
                  </li>

                </ul>
              )}
            </li>

            
            <li className="hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <Link
                to="/lres"
                className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:p-0 "
              >
                Home
              </Link>
            </li>

            <li className="hover:bg-slate-200 hover:text-white p-2 ease-in-out duration-500 hover:rounded-xl">
              <Link
                to="/LresServices"
                className="block py-2 px-3 text-black rounded-sm md:p-0"
              >
                License Application
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:text-white p-2 ease-in-out duration-500 hover:rounded-xl">
              <Link
                to="/LresContacts"
                className="block py-2 px-3 text-black rounded-sm md:p-0"
              >
                Contacts
              </Link>
            </li>

            

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
