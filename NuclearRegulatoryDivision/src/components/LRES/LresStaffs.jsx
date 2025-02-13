import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";

const LresStaffs = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // Staff list organized in hierarchy with area of specialization
  const staffHierarchy = {
    head: {
      id: "head",
      name: "Carl M. Nohay",
      position: "Licensing Review and Evaluation Head",
      image: "https://via.placeholder.com/100",
      specialization: "Overall regulatory compliance and strategic oversight",
    },
    level2: [
      {
        id: "level2-1",
        name: "Norman Jay V. Barro",
        position: "SRS II",
        image: "https://via.placeholder.com/100",
        specialization: "Nuclear safety and reactor design",
      },
      {
        id: "level2-2",
        name: "Allan Gregor D. Bulos",
        position: "SRS II",
        image: "https://via.placeholder.com/100",
        specialization: "Radiation protection and safety protocols",
      },
    ],
    level3: [
      {
        id: "level3-1",
        name: "Romelda P. Azores, M. SC.",
        position: "Senior SRS",
        image: "https://via.placeholder.com/100",
        specialization: "Environmental impact assessments",
      },
      {
        id: "level3-2",
        name: "MA. Elina Salvacion Kristina V. Ramo, M, SC.",
        position: "Senior SRS",
        image: "https://via.placeholder.com/100",
        specialization: "Medical radiation safety and dosimetry",
      },
      {
        id: "level3-3",
        name: "Joseph R. Tugo",
        position: "Senior SRS",
        image: "https://via.placeholder.com/100",
        specialization: "Quality assurance and regulatory audits",
      },
    ],
    level4: [
      {
        id: "level4-1",
        name: "Bee Jay Magallanes",
        position: "SRS I",
        image: "https://via.placeholder.com/100",
        specialization: "Support in licensing and documentation",
      },
    ],
    level5: [
      {
        id: "level5-1",
        name: "Jericisa Amberose P. Acha",
        position: "SRSn",
        image: "https://via.placeholder.com/100",
        specialization: "Support in licensing and documentation",
      },
    ],
    level6: [
      {
        id: "level6-1",
        name: "Jericisa Amberose P. Acha",
        position: "SRSn",
        image: "https://via.placeholder.com/100",
        specialization: "Support in licensing and documentation",
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <LresHero />
      <LresNavbar />

      {/* Main Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Licensing Review & Evaluation Team
        </h1>
        <p className="mt-2 text-gray-600">
          Meet our expert team ensuring compliance with safety and regulatory
          standards.
        </p>

        {/* Organizational Chart */}
        <div className="flex flex-col items-center mt-10 space-y-10">
          {/* Top Level */}
          <div
            className="bg-white p-6 rounded-lg shadow-md max-w-sm relative transform transition-transform hover:scale-105 hover:shadow-lg"
            data-aos="fade-down"
            onMouseEnter={() => setHoveredMember(staffHierarchy.head)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <img
              src={staffHierarchy.head.image}
              alt={staffHierarchy.head.name}
              className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
            />
            <h3 className="text-lg font-semibold mt-3 text-blue-600">
              {staffHierarchy.head.name}
            </h3>
            <p className="text-gray-600">{staffHierarchy.head.position}</p>
            {hoveredMember?.id === staffHierarchy.head.id && (
              <div className="absolute -top-10 left-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                <p className="text-sm">{staffHierarchy.head.specialization}</p>
              </div>
            )}
          </div>

          {/* Second Level - 3 columns */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {staffHierarchy.level3.map((staff, index) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-lg shadow-md w-60 relative transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredMember(staff)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
                />
                <h3 className="text-lg font-semibold mt-3 text-blue-600">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
                {hoveredMember?.id === staff.id && (
                  <div className="absolute -top-10 right-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                    <p className="text-sm">{staff.specialization}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Third Level - 2 columns */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            {staffHierarchy.level2.map((staff, index) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-lg shadow-md w-64 relative transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredMember(staff)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
                />
                <h3 className="text-lg font-semibold mt-3 text-blue-600">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
                {hoveredMember?.id === staff.id && (
                  <div className="absolute -top-10 left-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                    <p className="text-sm">{staff.specialization}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Level 4 */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {staffHierarchy.level4.map((staff, index) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-lg shadow-md w-64 relative transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredMember(staff)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
                />
                <h3 className="text-lg font-semibold mt-3 text-blue-600">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
                {hoveredMember?.id === staff.id && (
                  <div className="absolute -top-10 right-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                    <p className="text-sm">{staff.specialization}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Level 5 */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {staffHierarchy.level5.map((staff, index) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-lg shadow-md w-64 relative transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredMember(staff)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
                />
                <h3 className="text-lg font-semibold mt-3 text-blue-600">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
                {hoveredMember?.id === staff.id && (
                  <div className="absolute -top-10 right-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                    <p className="text-sm">{staff.specialization}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Level 6 */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {staffHierarchy.level6.map((staff, index) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-lg shadow-md w-64 relative transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredMember(staff)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600"
                />
                <h3 className="text-lg font-semibold mt-3 text-blue-600">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
                {hoveredMember?.id === staff.id && (
                  <div className="absolute -top-10 right-0 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50">
                    <p className="text-sm">{staff.specialization}</p>
                  </div>
                )}
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