import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  FileText,
  BarChart2,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "react-feather";
import LRESAccomplishments from "./LRESAdmin/LRESAccomplishments";
import AdminServices from "./LRESAdmin/AdminServices";
import LRESAdminLicensing from "./LRESAdmin/LRESAdminLicensing";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Define dropdown options for each section
  const dropdownOptions = {
    Dashboard: ["Overview", "Statistics", "Reports"],
    RSDS: ["Regulations", "Administrative Orders", "Guidelines", "Regulatory Bulletin", "Information Notices", "Announcements"],
    LRES: ["Licensing", "Services", "Accomplishments"],
    IES: ["Inspection", "Permit", "Complaint", "Contact Us"],
    NSSS: ["Configuration", "Preferences", "Security"],
    RIAS: ["Settings", "Logs", "Audit"],
  };

  // Define content for each option
  const renderContent = () => {
    switch (selectedOption) {
      case "Overview":
        return <div>Overview Content</div>
      case "Statistics":
        return <div>Statistics Content</div>;
      case "Reports":
        return <div>Reports Content</div>;
      case "Regulations":
        return <div>Regulations Content</div>;
      case "Administrative Orders":
        return <div>Administrative Orders Content</div>;
      case "Guidelines":
        return <div>Guidelines Content</div>;
      case "Regulatory Bulletin":
        return <div>Regulatory Bulletin Content</div>;
      case "Information Notices":
        return <div>Information Notices Content</div>;
      case "Announcements":
        return <div>Announcements Content</div>;
      case "Licensing":
        return <LRESAdminLicensing/>;
      case "Services":
        return <AdminServices/>;
      case "Accomplishments":
        return <LRESAccomplishments/>;
      case "Inspection":
        return <div>Inspection Content</div>;
      case "Permit":
        return <div>Permit Content</div>;
      case "Complaint":
        return <div>Complaint Content</div>;
      case "Contact Us":
        return <div>Contact Us Content</div>;
      case "Configuration":
        return <div>Configuration Content</div>;
      case "Preferences":
        return <div>Preferences Content</div>;
      case "Security":
        return <div>Security Content</div>;
      case "Settings":
        return <div>Settings Content</div>;
      case "Logs":
        return <div>Logs Content</div>;
      case "Audit":
        return <div>Audit Content</div>;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
              <p className="text-2xl font-bold text-blue-600">$12,345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Active Projects</h3>
              <p className="text-2xl font-bold text-blue-600">45</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen border-r border-gray-200 fixed md:relative transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
        </div>
        <nav className="mt-6 ">
          <ul>
            {["Dashboard", "RSDS", "LRES", "IES", "NSSS", "RIAS"].map(
              (item, index) => (
                <li key={index}>
                  <div
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    onClick={() => toggleDropdown(item)}
                  >
                    <span className="flex items-center">
                      {item === "Dashboard" && (
                        <Home size={18} className="mr-3" />
                      )}
                      {item === "RSDS" && <Users size={18} className="mr-3" />}
                      {item === "LRES" && (
                        <FileText size={18} className="mr-3" />
                      )}
                      {item === "IES" && (
                        <BarChart2 size={18} className="mr-3" />
                      )}
                      {item === "NSSS" && (
                        <Settings size={18} className="mr-3" />
                      )}
                      {item === "RIAS" && (
                        <Settings size={18} className="mr-3" />
                      )}

                      {item}
                    </span>
                    <ChevronDown size={18} />
                  </div>
                  {dropdownOpen[item] && (
                    <ul className="bg-gray-50 pl-10 py-2">
                      {dropdownOptions[item].map((option, idx) => (
                        <li
                          key={idx}
                          className="py-1 hover:text-blue-600 cursor-pointer"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
            <li>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <LogOut size={18} className="mr-3" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="md:hidden">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="text-xl font-semibold">Nuclear Regulatory Division</h2>
          <button className="flex items-center text-gray-700 hover:text-red-600">
            <LogOut size={18} className="mr-2" /> Logout
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;