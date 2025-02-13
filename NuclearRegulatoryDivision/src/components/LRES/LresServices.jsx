import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";

const services = [
  {
    category: "Licensing Services",
    items: [
      { name: "Issuance of Radioactive Material License", details: "Details about this service..." },
      { name: "Issuance of of Certificate of License Exemption", details: "Details about this service..." },
      { name: "Issuance of of Certificate of Release", details: "Details about this service..." },
      { name: "Termination of Radioactive Material License", details: "Details about this service..." },
    ]
  },
  {
    category: "Compliance Services",
    items: [
      { name: "Regulatory Inspections", details: "Details about this service..." },
      { name: "Radiation Safety Training", details: "Details about this service..." }
    ]
  }
];

const LresServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <LresHero />
      <LresNavbar />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4" data-aos="fade-right">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Services Offered</h2>
          {services.map((category, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
              <ul className="mt-2">
                {category.items.map((service, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                    onClick={() => setSelectedService(service)}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
          {selectedService ? (
            <div>
              <h1 className="text-3xl font-bold text-blue-600">{selectedService.name}</h1>
              <p className="mt-2 text-gray-600">{selectedService.details}</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6">Requirements</h2>
              <table className="w-full mt-2 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Document</th>
                    <th className="border border-gray-300 p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Application Form</td>
                    <td className="border border-gray-300 p-2">Properly filled-out form</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Safety Assessment Report</td>
                    <td className="border border-gray-300 p-2">Evaluation of potential risks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 text-center">Select a service from the left panel to view details.</p>
          )}
        </main>
      </div>
      
      <LresFooter />
    </div>
  );
};

export default LresServices;