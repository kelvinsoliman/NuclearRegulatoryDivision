import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/PNRI_2.jpg";

const NuclearRegulatoryDiv = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const sections = [
    {
      title: "Regulations and Standards Development Section (RSDS)",
      description:
        "Develops nuclear safety regulations and policies based on international standards.",
      borderColor: "border-blue-500",
      textColor: "text-blue-300",
    },
    {
      title: "Licensing, Review and Evaluation Section (LRES)",
      description:
        "Reviews applications for nuclear materials, ensuring compliance with safety standards.",
      borderColor: "border-green-500",
      textColor: "text-green-300",
    },
    {
      title: "Inspection and Enforcement Section (IES)",
      description:
        "Conducts inspections and ensures compliance with nuclear safety regulations.",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-300",
    },
    {
      title: "Nuclear Safeguards and Security Section (NSSS)",
      description:
        "Ensures nuclear security and international safeguards compliance.",
      borderColor: "border-purple-500",
      textColor: "text-purple-300",
    },
    {
      title: "Radiological Impact Assessment Section (RIAS)",
      description:
        "Researches radiological impacts and plans emergency responses.",
      borderColor: "border-red-500",
      textColor: "text-red-300",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <header
        id="#nrd"
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative p-10 rounded-lg" data-aos="zoom-in">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
            Nuclear Safety and Regulations
          </h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto animate-fade-in delay-500">
            Ensuring the safe use of nuclear technology for a better future.
          </p>
        </div>
      </header>

      {/* About NRD Section */}
      <section className="container mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          Nuclear Regulatory Division
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto text-center">
          The Nuclear Regulatory Division (NRD) performs the regulatory function
          of PNRI in licensing and regulating the possession and use of nuclear
          and radioactive materials and facilities.
        </p>
      </section>

      {/* NRD Sections */}
      <section className="container mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          NRD Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 ${section.borderColor}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3
                className={`text-2xl font-semibold ${section.textColor} mb-2`}
              >
                {section.title}
              </h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NuclearRegulatoryDiv;
