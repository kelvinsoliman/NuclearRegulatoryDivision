import React, { useState, useEffect } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";
import logo from "../../assets/PNRI_Logo.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="w-full h-24 px-4 mx-auto flex items-center justify-between bg-gray-900 text-white relative z-[100]"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-center gap-3 relative z-50">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 rounded-full"
          data-aos="fade-right"
        />
        <h1 className="font-bold text-2xl hidden md:block" data-aos="fade-left">
          Nuclear Regulatory Division
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-1">
        <li
          className="p-4 hover:bg-gray-500 rounded-md ease-in-out duration-500"
          data-aos="fade-up"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="p-4 hover:bg-gray-500 rounded-md ease-in-out duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="#About">About</a>
        </li>
        <li
          className="p-4 hover:bg-gray-500 rounded-md ease-in-out duration-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a href="#">Members</a>
        </li>
        <li
          className="p-4 hover:bg-gray-500 rounded-md ease-in-out duration-500"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={toggleNav} className="block md:hidden cursor-pointer">
        {nav ? <FaX size={30} /> : <FaAlignRight size={30} />}
      </div>

      {/* Mobile Side Nav */}
      <div
        className={`fixed left-0 top-0 bg-slate-950 h-full w-[60%] ease-in-out duration-500 md:hidden z-[999] ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
        //  data-aos={nav ? "fade-right" : ""}
      >
        <h1 className="font-bold text-2xl m-5">Nuclear Regulatory Division</h1>
        <ul className="uppercase">
          <li
            className="p-4 border-b border-slate-900 hover:bg-slate-800 ease-in-out duration-500"
            data-aos="fade-right"
            // data-aos-delay="100"
          >
            <a href="#">Home</a>
          </li>
          <li
            className="p-4 border-b border-slate-900 hover:bg-slate-800 ease-in-out duration-500"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <a href="#">About</a>
          </li>
          <li
            className="p-4 border-b border-slate-900 hover:bg-slate-800 ease-in-out duration-500"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <a href="#">Members</a>
          </li>
          <li
            className="p-4 hover:bg-slate-800 ease-in-out duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
