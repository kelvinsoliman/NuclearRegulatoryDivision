import { useState } from "react";

const LresNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-xl sticky w-full z-50 border-b border-gray-300 mt-5 px-10 flex justify-end">
      <div className="container mx-auto flex justify-end md:justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600 hidden md:block">Licensing, Review and Evaluation</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {/* Licensing */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("licensing")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("licensing")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Licensing
            </button>
            {openDropdown === "licensing" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">Licensing Categories</h3>
                <p className="px-4 py-2 text-gray-600 text-sm">
                  Information about nuclear licensing categories and requirements.
                </p>
                {/* Submenu on hover */}
                <div 
                  className="relative px-4 py-2 cursor-pointer hover:text-blue-500"
                  onMouseEnter={() => setOpenSubmenu("licensing-sub")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  More Licensing Info
                  {openSubmenu === "licensing-sub" && (
                    <div className="absolute left-full top-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                      <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">Additional Licensing</h3>
                      <p className="px-4 py-2 text-gray-600 text-sm">
                        More details on licensing policies and approvals.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Review & Evaluation */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("review")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("review")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Review & Evaluation
            </button>
            {openDropdown === "review" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">Evaluation Process</h3>
                <p className="px-4 py-2 text-gray-600 text-sm">
                  Detailed review and assessment procedures for regulatory compliance.
                </p>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("contact")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("contact")}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Contact Us
            </button>
            {openDropdown === "contact" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <h3 className="px-4 py-2 text-gray-800 font-semibold border-b">Get in Touch</h3>
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
            <p className="text-gray-600 text-sm">Nuclear licensing categories and requirements.</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">Review & Evaluation</h3>
            <p className="text-gray-600 text-sm">Assessment procedures for regulatory compliance.</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-gray-800 font-semibold">Contact Us</h3>
            <p className="text-gray-600 text-sm">Email: support@nrd.gov.ph | Phone: (123) 456-7890</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LresNavbar;
