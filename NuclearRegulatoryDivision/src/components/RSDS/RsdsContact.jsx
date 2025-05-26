import React, { useEffect } from "react";
import { Mail, Phone, Users, FileText } from "lucide-react";
import RSDSHeroSection from "./RSDSHeroSection";
import RSDSFooter from "./RSDSFooter";
import RSDSNavbar from "./RSDSNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Homepage/Header";

const RsdsContact = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const contacts = [
    {
      icon: <Mail className="text-blue-600" size={20} />,
      title: "RSDS Main Email",
      value: "rsds@pnri.gov.ph",
      description: "For general inquiries",
    },
    {
      icon: <Phone className="text-green-600" size={20} />,
      title: "RSDS Office",
      value: "+63 (2) 1234-5678",
      description: "Local 123, Mon-Fri 8AM-5PM",
    },
    {
      icon: <Users className="text-purple-600" size={20} />,
      title: "RSDS head",
      value: "director.rsds@pnri.gov.ph",
      description: "For official matters",
    },
    {
      icon: <FileText className="text-orange-600" size={20} />,
      title: "Document Requests",
      value: "rsds.docs@pnri.gov.ph",
      description: "For research documents",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>
      <RSDSHeroSection />
      <RSDSNavbar />

      <div className="flex-1 py-12 px-4 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-bold text-gray-800 mb-3"
            data-aos="fade-up"
          >
            RSDS Contact Information
          </h1>
          <div
            className="w-16 h-1 bg-blue-500 mx-auto mb-4"
            data-aos="fade-up"
          ></div>
          <p className="text-gray-600" data-aos="fade-up">
            Department-specific contacts for the Research and Development
            Services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-up">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1">{contact.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {contact.title}
                  </h3>
                  <p className="text-blue-600 font-medium mt-1">
                    {contact.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {contact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            RSDS Office Location
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="text-gray-700">
                <span className="font-medium">Building:</span> NART
                <br />
                <span className="font-medium">Floor No.:</span> 3rd
                <br />
                <span className="font-medium">Hours:</span> Monday-Friday,
                8:00AM-5:00PM
              </p>
            </div>
            <div className="sm:w-1/3 bg-gray-100 rounded flex items-center justify-center min-h-[120px]">
              <p className="text-gray-400 text-sm">
                [Floor plan or building photo]
              </p>
            </div>
          </div>
        </div>
      </div>

      <RSDSFooter />
    </div>
  );
};

export default RsdsContact;
