import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import NSSSHero from "./NSSSHero";
import NSSSNavbar from "./NSSSNavbar";
import NSSSFooter from "./NSSSFooter";

const Nsss = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5175/lres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    }
  };

  const responsibilities = [
    {
      title: "Coordinates and Carries Out Inspections",
      description:
        "Coordinates and carries out detailed inspections in support of international nuclear safeguards commitments. These inspections ensure that nuclear materials are used for peaceful purposes and not diverted for illegal or unauthorized activities. Through these rigorous checks, transparency is maintained, fostering trust between nations involved in nuclear energy production.",
      icon: "📄",
    },
    {
      title: "Involved in the pyhsical protection of nuclear facilities",
      description:
        "NSSS is deeply involved in the physical protection of nuclear facilities and radioactive materials. By    implementing state-of-the-art security measures and working alongside international agencies, NSSS safeguards critical infrastructure against potential threats, ensuring that nuclear power generation, research, and other activities continue safely and securely.",
      icon: "🛡️",
    },
    {
      title: "Coordinates and oversees the implementation of foreign-assisted projects",
      description:
        "NSSS also coordinates and oversees the implementation of foreign-assisted projects focused on nuclear security. These projects strengthen the security frameworks of countries worldwide by providing assistance, expertise, and resources to enhance nuclear security capabilities and address emerging challenges. Through collaboration and knowledge-sharing, NSSS contributes to a safer, more secure nuclear landscape on a global scale.",
      icon: "✅",
    },
    {
      title: "Security, and International Cooperation",
      description:
        "security, and international cooperation, NSSS upholds nuclear security standards, supports global safeguards efforts, and contributes to a world where nuclear materials and facilities are protected for the benefit of all.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <NSSSHero />
      {/* NAVBAR */}
      <NSSSNavbar />
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
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          {/* <img
            src={logo2}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          /> */}
          {/* <img
            src={logo3}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo4}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          /> */}
        </div>

        {/* Right Section (Text Content) */}
        <div className="md:w-2/3" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            About NSSS
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            plays a pivotal role in ensuring the safety, security, and
            safeguarding of nuclear materials and facilities around the world.
            The organization is committed to supporting international nuclear
            safeguards efforts and the physical protection of nuclear and other
            radioactive materials. The mission is to prevent the unauthorized
            use of nuclear technology and materials by coordinating
            comprehensive inspections, monitoring, and assessments in line with
            global standards and regulatory frameworks.
          </p>
          {/* Responsibilities Section */}
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left mt-10">
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
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <NSSSFooter />
    </div>
  );
};

export default Nsss;
