import React, { useEffect } from "react";
import { Mail, Phone, Users, FileText, AlertTriangle, User } from "lucide-react";
import RIASHero from "./RIASHero";
import RIASFooter from "./RIASFooter";
import RIASNavbar from "./RIASNavbar";
import AOS from "aos";
import "aos/dist/aos.css";

const RIASContacts = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const staffMembers = [
    {
      name: "Dr. Sample Name",
      position: "Section Head",
      email: "placeholders@pnri.gov.ph",
    },
    {
      name: "Engr. Sample Name",
      position: "Science Research Specialist",
      email: "placeholders@pnri.gov.ph",
    },
    {
      name: "Dr. Sample Name",
      position: "Science Research Analyst",
      email: "placeholders@pnri.gov.ph",
    },
    {
      name: "Mr. Sample Name",
      position: "Project Technical Assistant",
      email: "placeholders@pnri.gov.ph",
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <RIASHero />
      <RIASNavbar />

      <div className="flex-1 py-12 px-4 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3" data-aos="fade-up">
            RIAS Contact Information
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4" data-aos="fade-up"></div>
          <p className="text-gray-600" data-aos="fade-up">
            Contact details for the Radiological Impact Assessment Section
          </p>
        </div>

        {/* Staff Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Users className="text-purple-600 mr-2" size={20} />
            RIAS Staff Directory
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {staffMembers.map((staff, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full">
                  <User className="text-purple-600" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{staff.name}</h3>
                  <p className="text-gray-600 text-sm">{staff.position}</p>
                  <p className="text-blue-600 text-sm mt-1">{staff.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Radiation Emergency Contact Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="text-red-600 mr-2" size={20} />
            Radiation Emergency
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">Contact Numbers:</p>
            <p className="text-red-600">8929-6011 to 19 local 285 or 311</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">RIAS Office Location</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="text-gray-700">
                <span className="font-medium">Building:</span> NART<br />
                <span className="font-medium">Floor No:</span> 3rd<br />
                <span className="font-medium">Hours:</span> Monday-Friday, 8:00AM-5:00PM
              </p>
            </div>
            <div className="sm:w-1/3 bg-gray-100 rounded flex items-center justify-center min-h-[120px]">
              <p className="text-gray-400 text-sm">[RIAS office location photo]</p>
            </div>
          </div>
        </div>
      </div>

      <RIASFooter />
    </div>
  );
};

export default RIASContacts;