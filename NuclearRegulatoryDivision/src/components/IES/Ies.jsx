import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./IesHero";
import LresFooter from "./IesFooter";
import LresRating from "./IesRating";
import Inspection from "../../assets/inspection.jpg"
import Enforcement from "../../assets/enforcement.jpg"
import { Link, useHref } from "react-router-dom";

const Ies = () => {
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
      const response = await fetch("http://localhost:5175/Ies", {
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
      Link:"/inspectionpage",
      title: "Inspection",
      description:
        "Inspections ensure compliance with safety standards for handling, storage, and transport of radioactive materials. They help maintain safety, minimize risks, and ensure legal adherence.",
      icon: "🔍",
    },
    {
      Link:"/IesComplaint",
      title: "File a Complaint",
      description:
        "If you have concerns or complaints about a licensee or facility under our oversight, please submit a detailed report.",
        icon: "📝"
    },

    {
      Link:"/IesPermit",
      title: "Permit to Transport",
      description:
        "To transport radioactive materials, a valid permit is required. Please apply for a permit by providing the necessary details and ensuring compliance with safety regulations.",
      icon: "📜"
    },
    {
      Link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.pnri.dost.gov.ph%2Fimages%2Fofficialforms%2FEmergencyIncident_Notification_Services%2FIncidentNotificationForm.doc&wdOrigin=BROWSELINK",
      title: "Incident Form",
      description:
        "If you’ve witnessed or been involved in an incident with radioactive materials, please report it immediately. Provide details to help us address the situation safely and efficiently.",
      icon: "📉",
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
        </div>

        {/* Right Section (Text Content) */}
        <div className="md:w-2/3" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            About IES
          </h2>
          <p className="text-gray-700 text-lg mt-4">
          IES conducts inspection and enforcement activities/actions of 
          licensed radioactive materials and atomic energy facilities 
          to ensure compliance with regulatory requirements and licensees’ 
          commitments.
          </p>
          {/* Responsibilities Section */}
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left mt-10">
            Core Responsibilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            {responsibilities.map((item, index) => (
              <Link
                link to={item.Link}   target={item.title === "Incident Form" ? "_blank" : "_self"}
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-600"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2 hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-justify">{item.description}</p>
                </div>
              </Link>
            ))}
           
          </div>
          {/* Annual Report */}
          <h1 className="pt-10 text-indigo-600 text-xl md:text-4xl font-bold capitalize">
            Conducted Inspection
          </h1>
          <h3 className="text-3xl font-semibold text-black-600 mb-2 mt-4">2020-2025</h3>
          <div  className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4 mt-10" data-aos="fade-down">
            <img className="h-130 w-500 rounded-xl"  src={Inspection} alt="conducted inspection" />
          </div>

          <h1 className="pt-10 text-indigo-600 text-xl md:text-4xl font-bold capitalize">
            Enforcement Action
          </h1>
          <h3 className="text-3xl font-semibold text-black-600 mb-2 mt-4">2020-2025</h3>
          <div  className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4 mt-10" data-aos="fade-down">
            <img className="h-130 w-500 rounded-xl"  src={Enforcement} alt="conducted inspection" /></div>
        </div>
           

           
        
      </section> 

      {/* Footer */}
      <LresFooter />
    </div>
  );
};

export default Ies;