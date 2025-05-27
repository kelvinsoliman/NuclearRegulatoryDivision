import React from "react";
import backgroundImage from "../../assets/PNRI_2.jpg";

const RIASHero = () => {
  return (
    <header
      className="relative bg-cover z-0 bg-center h-[400px] flex items-center justify-center text-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold">
          Radiological Impact Assessment (RIAS)
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Implements regulatory research and studies in support of the
          various regulatory functions of the Nuclear Regulatory Division as
          well as plans and coordinates the nuclear and radiological emergency
          preparedness and response activities.
        </p>
      </div>
    </header>
  );
};

export default RIASHero;
