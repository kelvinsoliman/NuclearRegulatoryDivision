import React from "react";
import backgroundImage from "../../assets/PNRI_2.jpg";

const RSDSHeroSection = () => {
  return (
    <header
      className="relative bg-cover z-0 bg-center h-[400px] flex items-center justify-center text-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold">
          Regulations and Standards Development(RSDS)
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          formulates nuclear safety policy, develops and establishes
          nuclear regulations, guides and criteria consistent with
          internationally acceptable guidelines and best practices.
        </p>
      </div>
    </header>
  );
};

export default RSDSHeroSection;
