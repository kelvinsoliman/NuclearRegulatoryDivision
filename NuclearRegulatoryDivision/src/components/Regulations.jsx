import React, { useEffect, useState } from "react";
import { Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";


const Regulations = () => {
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
      description: "LICENSING OF RADIOACTIVE MATERIALS AND RADIATION FACILITIES, REV. 1",
      link: "#",
    },
    {
      title: "CODE OF PNRI REGULATIONS Part 03",
      description: "STANDARDS FOR PROTECTION AGAINST RADIATION, REV. 2",
      link: "#",
    },
  ]);

    const filteredGuides = guides.filter((guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="bg-gray-100 py-24 fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          📖 Code of PNRI Regulations
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Providing guidance on compliance with PNRI regulations.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-6">
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 search-focus"
          />
          <span className="absolute right-3 top-3 text-gray-500">
            <Search size={20} />
          </span>
        </div>

        {/* Regulatory Guides Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white table-auto">
            <thead>
              <tr className="bg-gray-800 text-white text-lg">
                <th className="px-6 py-4 text-center font-semibold">Title No.</th>
                <th className="px-6 py-4 text-center font-semibold">Description</th>
                <th className="px-6 py-4 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody id="guideTable">
              {filteredGuides.map((guide, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">{guide.title}</td>
                  <td className="px-6 py-4 text-gray-600">{guide.description}</td>
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
    </section>
  );
};

export default Regulations;