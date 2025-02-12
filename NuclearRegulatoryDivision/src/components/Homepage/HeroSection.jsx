import React, { useState, useEffect } from "react";
import bg1 from "../../assets/PNRI_2.jpg";
import bg2 from "../../assets/BP-LOGO-BT.png";
import bg3 from "../../assets/INSO_Thumbnail.png";

const images = [bg1, bg2, bg3]; // Array of images

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full  z-[-999] h-[400px] overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text Content */}
      <div className="absolute inset-9 flex flex-col md:flex-row m-auto">
        <div className="md:w-1/2 mb-4 md:mb-0 text-white text-center md:text-left">
          <h1 className="font-medium text-2xl md:text-3xl lg:mt-44 md:mt-36 leading-tight mb-2 mt-20">
            Nuclear Regulatory Division
          </h1>
          <p className="text-sm text-center md:text-lg md:text-left mb-8 mt-4 lowercase">
            Ensuring Safety & Security of Nuclear and Radioactive Materials for
            the protection of workers, the public, and the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
