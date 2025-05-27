import React from "react";
import backgroundImage from "../../assets/PNRI_2.jpg";

const IesHero = () => {
  return (
    <header
      className="relative bg-cover z-0 bg-center h-[400px] flex items-center justify-center text-center text-white mt-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold">
          Inspection and Enforcement Section
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          IES conducts inspection and enforcement activities/actions of licensed
          radioactive materials and atomic energy facilities to ensure
          compliance with regulatory requirements and licensees’ commitments.
        </p>
      </div>
    </header>
  );
};

export default IesHero;
