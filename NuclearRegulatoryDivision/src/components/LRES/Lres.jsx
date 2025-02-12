import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";

const Lres = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

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
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo4}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />

          {/* Add more logos as needed */}
        </div>

        {/* Right Section (Text Content) */}
        <div className="md:w-2/3" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-blue-600 text-center md:text-left">
            About LRES
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            LRES carries out the review, evaluation and assessment of
            applications to import, export, acquire, possess, transport, handle
            and use nuclear and radioactive material, and operate atomic energy
            facilities in order to ensure compliance with established
            regulations and standards. LRES recommends the issuance of license
            and prepares the license thereof.
          </p>

          {/* Responsibilities Section */}
          <h2 className="text-4xl font-bold text-blue-600 text-center md:text-left mt-10">
            Core Responsibilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="container mx-auto px-6 py-16 text-center bg-white rounded-xl shadow-md"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-blue-600">Get in Touch</h2>
        <p className="text-gray-700 mt-4">
          For inquiries or licensing concerns, contact us:
        </p>
        <a
          href="mailto:contact@pnri.gov.ph"
          className="text-blue-500 text-lg underline"
        >
          contact@pnri.gov.ph
        </a>
      </section>
 */}
      {/* Footer */}
      <LresFooter/>
    </div>
  );
};

export default Lres;
