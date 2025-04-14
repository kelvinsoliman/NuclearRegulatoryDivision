import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/BP-LOGO-BT.png";
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import blog1 from "../../assets/blog.png";


const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:flex md:gap-8">
        {/* Sidebar with Logos */}
        <div 
          className="hidden md:block md:w-1/5 mb-8 md:mb-0" 
          data-aos="fade-right"
        >
          <div className="sticky top-24 space-y-6">
            {[logo1, logo2, logo3, logo4].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-20 h-20 object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="md:w-4/5 space-y-12">
          <h1 className="text-3xl font-bold text-blue-700 mb-6" data-aos="fade-up">
            Latest Articles
          </h1>

          {/* Article 1 */}
          <article 
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            data-aos="fade-up"
          >
            <img
              src={blog1}
              alt="Nuclear Science Olympiad"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                <a 
                  href="https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open"
                  className="hover:text-blue-600 transition-colors"
                >
                  Registration for the 2nd PH Nuclear Science Olympiad is now open!
                </a>
              </h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  The Department of Science and Technology – Philippine Nuclear Research Institute (DOST-PNRI) is calling Filipino secondary students aged 15–20 from private and public schools across the country to register for the 2nd Philippine Nuclear Science Olympiad (PNSO), to be held this April 03, 2025.
                </p>
                <p>
                  This nationwide competition aims to identify and train the next generation of Filipino nuclear scientists and provide them with an opportunity to represent the Philippines at the 2nd International Nuclear Science Olympiad (INSO) in Malaysia this July 2025.
                </p>
                <p className="font-medium text-blue-600">
                  Registration is open until 07 March 2025.
                </p>
              </div>
            </div>
          </article>

          {/* Article 2 - You can duplicate and modify this structure for more articles */}
          <article 
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            data-aos="fade-up"
          >
            <img
              src={blog1}
              alt="Nuclear Science Olympiad"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                <a 
                  href="https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open"
                  className="hover:text-blue-600 transition-colors"
                >
                  Preparing for the Nuclear Science Olympiad
                </a>
              </h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  Building on the remarkable success of the Philippine team at the 1st INSO, where the Philippines secured 2 gold and 1 silver medals, along with a "Nuclear Ambassador" title and top scorer award, the 2nd PNSO seeks to further cultivate excellence in nuclear science education within the country.
                </p>
                <p>
                  Top winners will receive medals, certificates, special prizes, and exclusive training with PNRI scientists and experts to prepare for the INSO 2025.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Article;