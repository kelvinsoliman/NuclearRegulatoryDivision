import React from "react";
import logo from "../../assets/pnriheader.png";

const Header = () => {
  return (
    <div className="w-full bg-[#002147] text-white py-2 px-4 my-1">
      <div className="max-w-screen-xl mx-auto flex items-center space-x-4">
         <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
