import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import logo1 from "../../assets/BP-LOGO-BT.png";
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";

const LicensingApplication = () => {
  const [appList, setApplist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const fetchLicenses = async () => {
      try {
        const res = await fetch("http://localhost:5175/licensing");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setApplist(data);
      } catch (err) {
        console.error("Error fetching licensing data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLicenses();
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
    <div className="bg-gray-100 text-gray-900">
      <LresHero />
      <LresNavbar />

      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          <img src={logo1} alt="Logo 1" className="h-20 w-20 rounded-full" />
          <img src={logo2} alt="Logo 2" className="h-20 w-20 rounded-full" />
          <img src={logo3} alt="Logo 3" className="h-20 w-20 rounded-full" />
          <img src={logo4} alt="Logo 4" className="h-20 w-20 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto p-6" data-aos="fade-left">
          <h1 className="text-3xl font-bold text-indigo-600">
            License Application Process
          </h1>
          <p className="mt-2 text-gray-600">
            Below is the process for applying for a license, ensuring compliance
            with safety and regulatory standards.
          </p>

          <div
            className="mt-6 border rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <div className="bg-slate-900 text-white p-4 font-bold">
              Application Steps
            </div>
            <ul className="divide-y divide-gray-300">
              {appList.length > 0 ? (
                appList.map((license) => (
                  <a
                    href={license.url}
                    key={license.id}
                    className="flex items-center p-4 bg-gray-100 hover:bg-gray-200 hover:font-bold ease-in-out duration-500 hover:text-gray-500"
                    download={license.url}
                  >
                    <span className="mr-3 text-blue-500 text-xl">📄</span>
                    {license.application_name}
                  </a>
                  // <li
                  //   key={license.id}
                  //   className="flex items-center p-4 bg-gray-100 hover:bg-gray-200"
                  // >
                  //   <span className="mr-3 text-blue-500 text-xl"></span>
                  //   {license.application_name}
                  // </li>
                ))
              ) : (
                <li className="p-4 text-center text-gray-600">
                  No licenses found.
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <LresFooter />
    </div>
  );
};

export default LicensingApplication;
