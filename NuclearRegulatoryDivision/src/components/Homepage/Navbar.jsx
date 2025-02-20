import React, { useState, useEffect } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";
import logo from "../../assets/PNRI_Logo.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full mx-auto h-24 px-4 flex items-center justify-between  bg-slate-950  text-white">
      <div className="flex items-center justify-center gap-2.5">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        <a href="https://www.pnri.dost.gov.ph/" className="font-bold text-white text-2xl hidden md:block">
          Nuclear Regulatory Division
        </a>
      </div>

      <ul className="hidden md:flex gap-2.5">
        <li className="p-4 hover:bg-slate-700 rounded-md ease-in-out duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:hover:bg-slate-700 rounded-md ease-in-out duration-500">
          <a href="#aboutus">About</a>
        </li>
        <li className="p-4 hover:hover:bg-slate-700 rounded-md ease-in-out duration-500">
          <Link to="/Activities">Activities</Link>
        </li>
        <li className="p-4 hover:hover:bg-slate-700 rounded-md ease-in-out duration-500">
          <Link to="/Contacts">Contact</Link>
        </li>
      </ul>

      <div onClick={toggleNav} className="block md:hidden text-white">
        {!nav ? <FaX size={30} /> : <FaAlignRight size={30} />}
        {console.log(!nav)}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 bg-slate-950 h-full w-[60%] ease-in-out duration-500 md:hidden text-white"
            : "fixed left-[-100%] top-0 h-full w-[60%] ease-in-out duration-500 md:hidden"
        }
      >
        <h1 className="font-bold text-2xl m-5">Nuclear Regulatory Division</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-slate-900 hover:bg-slate-800  ease-in-out duration-500">
            <a href="#">Home</a>
          </li>
          <li className="p-4 border-b border-slate-900 hover:bg-slate-800  ease-in-out duration-500">
            <a href="#">About</a>
          </li>
          <li className="p-4 border-b border-slate-900 hover:bg-slate-800  ease-in-out duration-500">
            <a href="#">Members</a>
          </li>
          <li className="p-4  hover:bg-slate-800 ease-in-out duration-500">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
