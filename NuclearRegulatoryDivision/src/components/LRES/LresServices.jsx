import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import Header from "../Homepage/Header";

const LresServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5175/LresServices");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setServices(data);
      } catch (error) {
        setError(error.message || "Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 bg-gray-100">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Header/>
      <LresHero />
      <LresNavbar />

      <div className="container mx-auto px-4 sm:px-6 py-16 flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4 sticky top-4">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            License Application
          </h2>
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`w-full text-left p-2 rounded transition-colors ${
                  selectedService?.id === service.id
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                <h3 className="font-medium">{service.service_name}</h3>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          {selectedService ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-blue-600">
                  {selectedService.service_category}
                </h1>
                <p className="mt-2 text-gray-600">
                  Under the existing laws and regulations, any person who
                  intends to import, receive, acquire, possess, produce, store,
                  or use a radioactive material for beneficial and peaceful
                  purposes must be authorized in a license. Application forms
                  for new, renewal, and amendment for specific licensed
                  activities can be obtained below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Application Form
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2 text-left">
                          Application Name
                        </th>
                        <th className="border border-gray-300 p-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-gray-300">
                        <td className="border border-gray-300 p-3">
                          {selectedService.application_name}
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <a
                            href={selectedService.url}
                            download
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:text-red-600 transition-colors"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">
                Please select a service to view details.
              </p>
            </div>
          )}
        </main>
      </div>

      <LresFooter />
    </div>
  );
};

export default LresServices;
