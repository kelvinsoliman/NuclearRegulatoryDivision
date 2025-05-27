import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/placeholder.jpg"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import RIASFooter from "./RIASFooter";
import RIASHero from "./RIASHero";
import RIASNavbar from "./RIASNavbar";
import Header from "../Homepage/Header";

const Rias = () => {
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
      title: "Coordinates emergency preparedness and response activities",
      description:
        "RIAS takes the initiative to coordinate comprehensive planning and preparedness activities for responding to radiological and nuclear emergencies. Additionally, it establishes and continuously updates training programs to ensure that members of the radiological emergency response teams are well-equipped and trained.",
      icon: "📄",
    },
    {
      title: "Conducts regulatory research",
      description:
        "RIAS engages in essential regulatory research within the fields of radioecology, radioactive waste safety, and health physics. This research is vital for supporting the various functions of the NRD. Also, RIAS conducts radiological impact assessments of radiation facilities and operations, providing thoughtful recommendations, as appropriate.",
      icon: "🛡️",
    },
    {
      title: "Conducts hazard assessment and radiological dispersion modeling",
      description:
        "RIAS is committed to maintaining the technical capability necessary to perform computer modeling and software operationalization for safety and radiological impact assessments. This capability is vital for informed decision-making and enhancing overall safety measures.",
      icon: "✅",
    },
    // {
    //   title: "Technical Evaluations",
    //   description:
    //     "Reviewing technical documentation to validate the safety of nuclear applications.",
    //   icon: "📊",
    // },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      <Header/>
      {/* HERO */}
      <RIASHero />
      {/* NAVBAR */}
      <RIASNavbar />
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
            className="h-20 w-20 md:h-30 md:w-30 "
          />
          <img
            src={logo1}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 "
          />
          <img
            src={logo1}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 "
          />
          <img
            src={logo1}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30"
          />
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 "
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
            About RIAS
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            The Regulatory Impact Assessment Section (RIAS) is dedicated to the
            thoughtful planning, management, and implementation of regulatory
            research and studies that support various regulatory functions of
            the Nuclear Regulatory Division (NRD). This includes a committed
            focus on planning and preparedness activities for effective
            responses to radiological emergencies.
          </p>
          {/* Responsibilities Section */}
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left mt-10">
            Core Function
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
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="space-y-12">
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl font-bold text-indigo-600 text-center"
            data-aos="fade-down"
          >
            Statistics
          </h2>

          {/* Statistics Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {/* RAM License */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                {/* Issued RAM License */}
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo1}
                  alt="RAM license statistics"
                />
              </div>
            </div>

            {/* Certificates of Release */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                {/* Certificates of Release */}
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo1}
                  alt="Certificates statistics"
                />
              </div>
            </div>

            {/* Number of Licenses */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                {/* Number of Licenses */}
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 h-full">
                <img
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                  src={logo1}
                  alt="License count statistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <RIASFooter />
    </div>
  );
};

export default Rias;
