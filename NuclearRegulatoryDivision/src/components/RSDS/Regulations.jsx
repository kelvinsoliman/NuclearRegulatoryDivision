import React, { useState, useEffect } from "react";
import { Search, FileText } from "lucide-react";
import RSDSHeroSection from "./RSDSHeroSection";
import RSDSFooter from "./RSDSFooter";
import RSDSNavbar from "./RSDSNavbar";
import img1 from "../../assets/PNRI_Logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Regulations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [guides, setGuides] = useState([
    {
      title: "CODE OF PNRI REGULATIONS Part 00",
      description:
        "PHILIPPINE NUCLEAR RESEARCH INSTITUTE (PNRI) AS REGULATORY AUTHORITY FOR ATOMIC ENERGY FACILITIES AND RADIOACTIVE/NUCLEAR MATERIALS IN THE PHILIPPINES, Rev. 1",
      link: "#",
    },
    {
      title: "CODE OF PNRI REGULATIONS Part 02",
      description:
        "LICENSING OF RADIOACTIVE MATERIALS AND RADIATION FACILITIES, REV. 1",
      link: "#",
    },
    {
      title: "CODE OF PNRI REGULATIONS Part 03",
      description: "STANDARDS FOR PROTECTION AGAINST RADIATION, REV. 2",
      link: "#",
    },
  ]);

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <RSDSHeroSection />
      <RSDSNavbar />

      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Left Side - Logos */}
          <div
            className="lg:w-1/3 flex flex-col items-center justify-center"
            data-aos="fade-right"
          >
            <img
              src={img1}
              alt="Logo 1"
              className="w-32 h-32 rounded-full mb-6"
            />
            <img
              src={img1}
              alt="Logo 1"
              className="w-32 h-32 rounded-full mb-6"
            />
            <img
              src={img1}
              alt="Logo 1"
              className="w-32 h-32 rounded-full mb-6"
            />
            <img
              src={img1}
              alt="Logo 1"
              className="w-32 h-32 rounded-full mb-6"
            />
          </div>

          {/* Right Side - Guides Table */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="text-center">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
                data-aos="zoom-in"
              >
                📖 Code of PNRI Regulations
              </h2>
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-in">
                Providing guidance on compliance with PNRI regulations.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8" data-aos="fade-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-3 text-gray-500">
                  <Search size={20} />
                </span>
              </div>
            </div>

            {/* Regulatory Guides Table */}
            <div className="overflow-x-auto rounded-lg shadow-lg" data-aos="fade-up">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Title No.
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Description
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGuides.map((guide, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 transition-colors duration-200"
                      data-aos="fade-up"
                    >
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {guide.title}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {guide.description}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={guide.link}
                          className="text-blue-500 font-semibold hover:underline flex justify-center items-center"
                        >
                          <FileText size={20} className="mr-2" /> View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <RSDSFooter />
    </div>
  );
};

export default Regulations;
