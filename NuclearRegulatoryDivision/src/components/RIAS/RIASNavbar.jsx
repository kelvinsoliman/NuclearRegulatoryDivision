import { useState } from "react";
import logo from "../../assets/PNRI_Logo.jpg";
import { Link } from "react-router-dom";

const RIASNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isRadEmergencyOpen, setIsRadEmergencyOpen] = useState(false);
  const [isRadMonitoringOpen, setIsRadMonitoringOpen] = useState(false);
  const [isHazardAssessmentOpen, setIsHazardAssessmentOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 shadow-xl ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto   p-4">
        <a
          href="#"
          className="flex items-center justify-between space-x-3 rtl:space-x-reverse "
        >
          <img src={logo} className="h-10 w-10 rounded-full" alt="PNRI Logo" />
          <span className="hidden lg:block self-center text-xl lg:text-xl font-semibold whitespace-nowrap text-black ">
            Radiological Impact Assessment
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
          <ul className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 border  md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            
            <li className="relative hover:bg-slate-200 rounded-xl">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:hover:text-blue-700"
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
                    <Link to="/Lres" className="block px-4 py-2 text-black hover:bg-gray-300">LRES</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ACTIVITIES */}
            <li className="relative hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <button
                onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:p-0"
              >
                Activities
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isActivitiesOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Content by month
                  </div>
                </div>
              )}
            </li>

            {/* RADIATION EMERGENCY */}
            <li className="relative hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <button
                onClick={() => setIsRadEmergencyOpen(!isRadEmergencyOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:p-0"
              >
                Radiation Emergency
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isRadEmergencyOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/RADPLAN"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Radplan
                  </Link>
                </div>
              )}
            </li>

            {/* RADIATION MONITORING */}
            <li className="relative hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <button
                onClick={() => setIsRadMonitoringOpen(!isRadMonitoringOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:p-0"
              >
                Radiation Monitoring
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isRadMonitoringOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/ARGUS"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    ARGUS
                  </Link>
                </div>
              )}
            </li>

            {/* HAZARD ASSESSMENT */}
            <li className="relative hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <button
                onClick={() => setIsHazardAssessmentOpen(!isHazardAssessmentOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:p-0"
              >
                Hazard Assessment
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isHazardAssessmentOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/JRODOS"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    JRODOS
                  </Link>
                </div>
              )}
            </li>

            {/* CONTACT US */}
            <li className="hover:bg-slate-200 p-2 ease-in-out duration-500 hover:rounded-xl">
              <Link
                to="/RIASContacts"
                className="block py-2 px-3 text-black rounded-sm md:p-0"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RIASNavbar;