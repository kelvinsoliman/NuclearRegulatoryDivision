import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";

const LresServices = () => {
  const [selectedService, setSelectedService] = useState(null); // Re-enable service selection
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5175/LresServices"); // Replace with your correct API
        if (!response.ok) {
          throw new Error("Failed to fetch data. Please try again later.");
        }
        const data = await response.json();
        setServices(data);
        setLoading(false); // Ensure loading is set to false after data is fetched
      } catch (error) {
        console.error("Error fetching licensing data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 bg-gray-800">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <LresHero />
      <LresNavbar />

      <div className="container mx-auto px-4 sm:px-6 py-16 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside
          className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Services Offered
          </h2>
          {services.map((service) => (
            <div key={service.id} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                <button
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                  onClick={() => setSelectedService(service)} // Enable service selection
                >
                  {service.service_name}
                </button>
              </h3>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          {selectedService ? (
            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                {selectedService.service_name}
              </h1>
              <p className="mt-2 text-gray-600">
                {selectedService.service_desc}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6">
                Requirements
              </h2>
              <table className="w-full mt-2 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Requirements</th>
                    <th className="border border-gray-300 p-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300 p-2">
                    <td>{selectedService.requirements}</td>
                    <td>{selectedService.details}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 text-center">
              Select a service from the left panel to view details.
            </p>
          )}
        </main>
      </div>

      <LresFooter />
    </div>
  );
};

export default LresServices;
