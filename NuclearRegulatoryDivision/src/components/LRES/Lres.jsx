import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/PNRI_2.jpg";
import LresNavbar from "./LresNavbar";

const Lres = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white mt-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-10" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold">
            Licensing, Review, and Evaluation
          </h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Ensuring nuclear safety through rigorous licensing and review
            processes.
          </p>
        </div>
      </header>

      {/* NAVBAR */}
      <LresNavbar />
      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          About LRES
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center mt-4">
          The Licensing, Review, and Evaluation Section (LRES) is responsible
          for processing applications, assessing nuclear safety risks, and
          ensuring regulatory compliance.
        </p>
      </section>

      {/* Responsibilities Section */}
      <section
        id="responsibilities"
        className="container mx-auto px-6 py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          Core Responsibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <span className="text-5xl">{item.icon}</span>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
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

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 text-center py-4 mt-10">
        <p>
          &copy; 2025 Nuclear Regulatory Division - Licensing, Review, and
          Evaluation
        </p>
      </footer>
    </div>
  );
};

export default Lres;
