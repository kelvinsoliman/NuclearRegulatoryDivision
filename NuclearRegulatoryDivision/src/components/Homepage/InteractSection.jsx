import { useEffect, useState } from "react";
import "swiper/css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const InteractSection = () => {
  const [showRegulations, setShowRegulations] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        },
      });
    }, 100); // Small delay to ensure elements are in the DOM
  }, []);

  const slides = [
    {
      img: "src/assets/worker.png",
      text: "Regulations and Standards Development Section (RSDS)",
      link: "#",
    },
    {
      img: "src/assets/regulation.png",
      text: "Inspection and Enforcement Section (IES)",
      link: "/regulations",
    },
    {
      img: "src/assets/licensing.png",
      text: "Licensing, Review and Evaluation Section (LRES)",
      link: "/lres",
    },
    {
      img: "src/assets/guide.png",
      text: "Inspection and Enforcement Section (IES)",
      link: "regulatoryguides.php",
    },
    {
      img: "src/assets/regulation (1).png",
      text: "Nuclear Safeguards and Security Section (NSSS)",
      link: "bulletin.php",
    },
    {
      img: "src/assets/notice.png",
      text: "Radiological Impact Assessment Section (RIAS)",
      link: "information.php",
    },
  ];

  return (
    <section className="text-gray-700 body-font mt-10">
      {/* <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Interact?
      </div> */}
      <div className="container px-10 py-12 mx-auto">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <Link to={slide.link} className="block text-center">
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src={slide.img}
                        className="w-28 mb-3"
                        alt={slide.text}
                      />
                    </div>
                    <h2 className="title-font text-2xl text-gray-900">
                      {slide.text}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        {/* Conditionally render the Regulations component */}
        {showRegulations && (
          <div className="mt-10 p-6 border rounded-lg shadow-lg bg-black">
            <button
              onClick={() => setShowRegulations(false)}
              className="mb-4 text-red-500 hover:text-red-700"
            >
              Close
            </button>
            <Regulations />
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractSection;
