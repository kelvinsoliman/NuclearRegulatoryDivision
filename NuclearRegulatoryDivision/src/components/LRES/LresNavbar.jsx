import { useState } from "react";
import { Link } from "react-router-dom";

const LresNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // For main dropdowns
  const [openSubmenu, setOpenSubmenu] = useState(null); // For nested submenus

  // Toggle main dropdown
  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null); // Close if already open
      setOpenSubmenu(null); // Close submenu
    } else {
      setOpenDropdown(menu); // Open the clicked dropdown
      setOpenSubmenu(null); // Reset submenu
    }
  };

  // Toggle nested submenu
  const toggleSubmenu = (submenu) => {
    if (openSubmenu === submenu) {
      setOpenSubmenu(null); // Close if already open
    } else {
      setOpenSubmenu(submenu); // Open the clicked submenu
    }
  };

  return (
    <nav className="bg-white shadow-xl sticky w-full  z-50 border-b border-gray-300 px-10 flex justify-end items-center">
      <div className="container mx-auto flex justify-end md:justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600 hidden md:block">
          Licensing, Review and Evaluation
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {/* Licensing Dropdown */}
          <div className="relative">
            <Link
              to="/licensing"
              onMouseOver={() => toggleDropdown("licensing")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Licensing
            </Link>
            {openDropdown === "licensing" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">
                  Licensing Categories
                </h3>
                <p className="px-4 py-2 text-gray-600 text-sm">
                  Information about nuclear licensing categories and
                  requirements.
                </p>
                {/* Submenu */}
                <div
                  className="relative px-4 py-2 cursor-pointer hover:text-blue-500"
                  onClick={() => toggleSubmenu("licensing-sub")}
                >
                  More Licensing Info
                  {openSubmenu === "licensing-sub" && (
                    <div className="absolute left-full top-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                      <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">
                        Additional Licensing
                      </h3>
                      <p className="px-4 py-2 text-gray-600 text-sm">
                        More details on licensing policies and approvals.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Review & Evaluation Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("review")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Review & Evaluation
            </button>
            {openDropdown === "review" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">
                  Evaluation Process
                </h3>
                <p className="px-4 py-2 text-gray-600 text-sm">
                  Detailed review and assessment procedures for regulatory
                  compliance.
                </p>
              </div>
            )}
          </div>

          {/* Education and Training Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("education")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Education and Training
            </button>
            {openDropdown === "education" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <ul className="py-2 text-gray-600">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Nuclear Training Courses
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    NST Education Program
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    On-the-Job Training Opportunities
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Non-Destructive Testing Courses
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Frequently Asked Questions
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("contact")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Contact Us
            </button>
            {openDropdown === "contact" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">
                  Get in Touch
                </h3>
                <p className="px-4 py-2 text-gray-600 text-sm">
                  Email: support@nrd.gov.ph <br /> Phone: (123) 456-7890
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-2 absolute w-full left-0 top-16 z-50">
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">Licensing</h3>
            <p className="text-gray-600 text-sm">
              Nuclear licensing categories and requirements.
            </p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">Review & Evaluation</h3>
            <p className="text-gray-600 text-sm">
              Assessment procedures for regulatory compliance.
            </p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">
              Education and Training
            </h3>
            <ul className="text-gray-600 text-sm">
              <li>Nuclear Training Courses</li>
              <li>NST Education Program</li>
              <li>On-the-Job Training Opportunities</li>
              <li>Non-Destructive Testing Courses</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">Contact Us</h3>
            <p className="text-gray-600 text-sm">
              Email: support@nrd.gov.ph | Phone: (123) 456-7890
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LresNavbar;
