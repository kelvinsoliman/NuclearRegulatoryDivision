import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import img1 from "../../assets/INSO_Thumbnail.png";

const LresStaffs = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    const fetchStaffMembers = async () => {
      try {
        const response = await fetch("http://localhost:5175/LresStaffs");
        const data = await response.json();
        setStaffMembers(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching staff members:", error);
        setError(false);
      }
    };

    fetchStaffMembers();
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

  // const getGridColumnClass = (index) => {
  //   if (index === 0) return "col-span-3"; // First layer: 1 staff (full width)
  //   if (index >= 1 && index <= 3) return "col-span-1"; // Second layer: 3 staffs
  //   if (index >= 4 && index <= 5) return "col-span-2"; // Third layer: 2 staffs
  //   return "col-span-3"; // Rest: 1 staff (full width)
  // };

  return (
    <div className="bg-gray-50 min-h-screen">
      <LresHero />
      <LresNavbar />
      <section className="container mx-auto px-4  py-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo on the left */}
        <div className="lg:w-1/3 mb-8 lg:mb-0   justify-center items-center gap-3 hidden md:flex lg:flex-col">
          <img src={img1} alt="Logo" className="w-32 h-auto rounded-full" />
          <img src={img1} alt="Logo" className="w-32 h-auto rounded-full" />
          <img src={img1} alt="Logo" className="w-32 h-auto rounded-full" />
          <img src={img1} alt="Logo" className="w-32 h-auto rounded-full" />
          <img src={img1} alt="Logo" className="w-32 h-auto rounded-full" />
        </div>
        {/* Staff section on the right */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-12">
            Licensing Review & Evaluation Team
          </h1>
          <div className="grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((staff) => (
              <div
                key={staff.id}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative index`}
                data-aos="fade-up"
              >
                <img
                  src={staff.img}
                  alt={staff.emp_name}
                  className="w-20 h-20 rounded-full mx-auto border border-gray-300"
                />
                <h3 className="mt-5 text-lg font-semibold text-center text-gray-800">
                  {staff.emp_name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {staff.emp_pos}
                </p>
                <div className="absolute inset-0 p-6 bg-white bg-opacity-90 text-black flex items-center justify-center rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center text-sm">
                    Specialization: {staff.emp_specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LresFooter />
    </div>
  );
};

export default LresStaffs;
