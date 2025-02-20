import React from "react";
import backgroundImage from "../../assets/PNRI_2.jpg";


const LresHero = () => {
  return (
    <header
      className="relative bg-cover z-0 bg-center h-[400px] flex items-center justify-center text-center text-white mt-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold">
          Licensing, Review and Evaluation
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Ensuring nuclear safety through rigorous licensing and review
          processes.
        </p>
      </div>
    </header>
  );
};

export default LresHero;
