import React from "react";
import BPLogo from "../../assets/BP-LOGO-BT.png";
import FoiLogo from "../../assets/foi_logo.png";
import InsoThumbnail from "../../assets/INSO_Thumbnail.png";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-10 relative z-0 " id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
          About Nuclear Regulatory Division
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/nrd"
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-slate-100 hover:text-white"
          >
            <img
              src={BPLogo}
              alt="wheat flour grinding"
              className="w-full h-64 object-cover  transition duration-300 hover:opacity-80"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2 transition duration-300 hover:text-teal-400">
                Safety & Regulations
              </h3>
              <p className="text-gray-700 text-base transition duration-300 hover:text-gray-300">
                The Nuclear Regulatory Division (NRD) performs the regulatory
                function of PNRI in licensing and regulating the possession and
                use of nuclear and radioactive materials and facilities, as
                mandated by Republic Acts 2067 and 5207, both as amended, and
                Executive Order 128 for the protection of the workers and the
                general public.
              </p>
            </div>
          </Link>

          <Link
            to="/MissionVision"
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-slate-100 hover:text-white"
          >
            <img
              src={FoiLogo}
              alt="Coffee"
              className="w-full h-64 object-cover transition duration-300 hover:opacity-80"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2 transition duration-300 hover:text-teal-400">
                Vision and Mission
              </h3>
              <p className="text-gray-700 text-base transition duration-300 hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur quo nostrum aspernatur quas adipisci nihil natus dolorem
                sint hic iusto!.
              </p>
            </div>
          </Link>

          <Link
            to="/MissionVision"
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-slate-100 hover:text-white"
          >
            <img
              src={InsoThumbnail}
              alt="Coffee"
              className="w-full h-64 object-cover transition duration-300 hover:opacity-80"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2 transition duration-300 hover:text-teal-400">
                Citizen Charter
              </h3>
              <p className="text-gray-700 text-base transition duration-300 hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate ratione necessitatibus ipsum ut! Non, provident.
                Soluta, at. Corrupti ullam dicta vero ab doloribus. Nemo.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
