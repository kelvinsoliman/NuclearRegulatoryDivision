import { useState } from "react";
import logo from "../../assets/PNRI_Logo.jpg";
import { Link } from "react-router-dom";

const RSDSNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 w-10 rounded-full" alt="PNRI Logo" />
          <span className="hidden lg:block self-center text-lg lg:text-xl font-semibold whitespace-nowrap text-black">
            Regulations and Standards Development
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex text-sm flex-col font-medium p-4 md:p-0 mt-4 border md:flex-row md:mt-0 md:border-0">
            <li className="hover:bg-slate-200 p-2 rounded-xl">
              <Link to="/Rsds" className="block py-2 px-3 text-black">Home</Link>
            </li>
            <li className="hover:bg-slate-200 p-2 rounded-xl">
              <Link to="/Regulations" className="block py-2 px-3 text-black">Regulations</Link>
            </li>
            <li className="hover:bg-slate-200 p-2 rounded-xl">
              <Link to="/RSDSAdminOrders" className="block py-2 px-3 text-black">Administrative Orders</Link>
            </li>
            <li className="hover:bg-slate-200 p-2 rounded-xl">
              <Link to="/Guidelines" className="block py-2 px-3 text-black">Regulatory Guidelines</Link>
            </li>
            <li className="relative hover:bg-slate-200 p-2 rounded-xl">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:hover:text-blue-700 "
              >
                See More
                <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute z-50 left-0 mt-1 w-44 bg-white shadow-md rounded-lg py-2">
                  <li>
                    <Link to="/RSDSBulletin" className="block px-4 py-2 text-black hover:bg-gray-300">Regulatory Bulletin</Link>
                  </li>
                  <li>
                    <Link to="/RSDSInformation" className="block px-4 py-2 text-black hover:bg-gray-300">Information Notices</Link>
                  </li>
                  <li>
                    <Link to="/RSDSAnnouncement" className="block px-4 py-2 text-black hover:bg-gray-300">Announcements</Link>
                  </li>
                  <li>
                    <Link to="/RsdsContact" className="block px-4 py-2 text-black hover:bg-gray-300">Contacts</Link>
                  </li>

                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RSDSNavbar;
