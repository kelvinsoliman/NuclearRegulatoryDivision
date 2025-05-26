import React, { useEffect } from "react";
import { Mail, Phone, Users, FileText } from "lucide-react";
import LresFooter from "./LresFooter";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Homepage/Header";

const LresContacts = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const contacts = [
    {
      icon: <Mail className="text-blue-600" size={20} />,
      title: "LRES Main Email",
      value: "nrd-lre@pnri.dost.gov.ph",
      description: "For general inquiries"
    },
    {
      icon: <Phone className="text-green-600" size={20} />,
      title: "LRES Office",
      value: "+63 (2) 1234-5678",
      description: "Local 123, Mon-Fri 8AM-5PM"
    },
    {
      icon: <Users className="text-purple-600" size={20} />,
      title: "LRES Director",
      value: "director.lres@pnri.gov.ph",
      description: "For official matters"
    },
    {
      icon: <FileText className="text-orange-600" size={20} />,
      title: "Document Requests",
      value: "lres.docs@pnri.gov.ph",
      description: "For research documents"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>
      <LresHero />
      <LresNavbar />

      <div className="flex-1 py-12 px-4 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3" data-aos="fade-up">
            LRES Contact Information
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4" data-aos="fade-up"></div>
          <p className="text-gray-600" data-aos="fade-up">
            Department-specific contacts for the Research and Development Services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-up">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{contact.title}</h3>
                  <p className="text-blue-600 font-medium mt-1">{contact.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{contact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">LRES Office Location</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="text-gray-700">
                <span className="font-medium">Building:</span> NART<br />
                <span className="font-medium">Floor No.:</span> 3rd<br />
                <span className="font-medium">Hours:</span> Monday-Friday, 8:00AM-5:00PM
              </p>
            </div>
            <div className="sm:w-1/3 bg-gray-100 rounded flex items-center justify-center min-h-[120px]">
              <p className="text-gray-400 text-sm">[Floor plan or building photo]</p>
            </div>
          </div>
        </div>
      </div>  
      <LresFooter />
    </div>
  );
};

export default LresContacts;