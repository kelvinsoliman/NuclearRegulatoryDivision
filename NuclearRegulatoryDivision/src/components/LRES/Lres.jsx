import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import logo1 from "../../assets/placeholder.jpg";
import logo2 from "../../assets/ramissued.jpg";
import logo3 from "../../assets/certofrelease.jpg";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import logo4 from "../../assets/numberlicenses.jpg";
import Header from "../Homepage/Header";

const Lres = () => {
  const [licenseStats, setLicenseStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("http://localhost:5175/lres");
      const data = await response.json();
      setLicenseStats(data.sort((a, b) => b.year - a.year));
    } catch (error) {
      console.error("Failed to fetch license stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const responsibilities = [
    {
      title: "License Application Review",
      description:
        "Evaluating applications for nuclear materials, ensuring compliance with national and international safety standards.",
      icon: "📄",
    },
    {
      title: "Safety Assessments",
      description:
        "Conducting safety and risk assessments for nuclear-related activities and facilities.",
      icon: "🛡️",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Ensuring all nuclear-related operations adhere to PNRI's licensing requirements and regulations.",
      icon: "✅",
    },
    {
      title: "Technical Evaluations",
      description:
        "Reviewing technical documentation to validate the safety of nuclear applications.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <LresHero />
      <LresNavbar />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div
            className="flex items-center mx-auto lg:w-1/4 lg:flex-col gap-2 overflow-hidden"
            data-aos="fade-right"
          >
            {[logo1, logo1, logo1, logo1].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-auto max-w-[150px] rounded-lg shadow-md"
              />
            ))}
          </div>

          <div className="lg:w-3/4" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
              About LRES
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              LRES carries out the review, evaluation and assessment of
              applications to import, export, acquire, possess, transport,
              handle and use nuclear and radioactive material, and operate
              atomic energy facilities in order to ensure compliance with
              established regulations and standards. LRES recommends the
              issuance of license and prepares the license thereof.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
              Core Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
      
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="space-y-12">
          
          <h2
            className="text-3xl md:text-4xl font-bold text-indigo-600 text-center"
            data-aos="fade-down"
          >
            LRES Statistics
          </h2>

     
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
           
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Radioactive Material License Issued
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo2}
                  alt="RAM license statistics"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Certificates of Release
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo3}
                  alt="Certificates statistics"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Number of Licenses
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo4}
                  alt="License count statistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4 bg-white">
        <div className="space-y-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-indigo-600 text-center"
            data-aos="fade-down"
          >
            {/* ... */}
          </h2>

          <div
            className=""
            data-aos="fade-up"
          >
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full min-h-[500px] ">    
                <img
                  className="w-full h-full max-h-[500px] object-contain rounded-md"
                  src={logo1}
                  alt="PHILIPPINE MAP"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <LresFooter />
    </div>
  );
};

export default Lres;
