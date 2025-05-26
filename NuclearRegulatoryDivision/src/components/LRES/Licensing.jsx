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
import Header from "../Homepage/Header";

const LicensingApplication = () => {
  const [appList, setApplist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const fetchLicenses = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5175/licensing");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setApplist(data);
        setError(null);
        console.log("Fetched Data:", data);
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
      <Header/>
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
            License Application
          </h1>
          <p className="mt-2 text-gray-600">
            Under the existing laws and regulations, any person who intends to
            import, receive, acquire, possess, produce, store, or use a
            radioactive material for beneficial and peaceful purposes must be
            authorized in a license. Application forms for new, renewal, and  
            amendment for specific licensed activities can be obtained below.
          </p>

          <div
            className="mt-6 border rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <div className="bg-slate-900 text-white p-4 font-bold">
              RADIOACTIVE MATERIALS LICENSES
            </div>
            <ul className="divide-y divide-gray-300">
              {appList.length > 0 ? (
                appList.map((license) => (
                  <a

                    href={license.url}
                    key={license.id}
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 hover:font-bold ease-in-out duration-500 hover:text-gray-500 text-left cursor-pointer"
                  >
                    <span className="mr-3 text-blue-500 text-xl">📄</span>
                    {license.application_name}
                  </a>
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