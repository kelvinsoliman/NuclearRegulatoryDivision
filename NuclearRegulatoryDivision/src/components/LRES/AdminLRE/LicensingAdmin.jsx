import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../../assets/BP-LOGO-BT.png";
import logo2 from "../../../assets/foi_logo.png";
import logo3 from "../../../assets/INSO_Thumbnail.png";
import logo4 from "../../../assets/AEW52_Thumbnail.png";

const LicensingAdmin = () => {
  const [appList, setApplist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicationName, setApplicationName] = useState("");
  const [file, setFile] = useState(null);

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!applicationName || !file) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("application_name", applicationName);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5175/LicensingAdmin", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Failed to upload file");

      const result = await response.json();
      console.log("File uploaded successfully:", result);

      // Refresh the list of licenses
      const res = await fetch("http://localhost:5175/licensing");
      const data = await res.json();
      setApplist(data);

      // Clear the form
      setApplicationName("");
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError(error.message);
    }
  };

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

  const handleDownload = async (licenseId, fileName) => {
    try {
      const response = await fetch(
        `http://localhost:5175/licensing/${licenseId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to download file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName || "downloaded_file";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
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

          {/* File Upload Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Application Name
              </label>
              <input
                type="text"
                value={applicationName}
                onChange={(e) => setApplicationName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Upload File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </form>

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
                    href={`http://localhost:5175/licensing/${license.id}`}
                    key={license.id}
                    className="flex items-center p-4 bg-gray-100 hover:bg-gray-200 hover:font-bold ease-in-out duration-500 hover:text-gray-500"
                    download
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
    </div>
  );
};

export default LicensingAdmin;
