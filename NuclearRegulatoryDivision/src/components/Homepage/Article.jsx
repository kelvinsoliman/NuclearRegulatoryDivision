import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import blog1 from "../../assets/blog.png";
import HeroSection from "./HeroSection";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5175/lres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    }
  };

  const responsibilities = [
    {
      title: "License Application Review",
      description:
        "Evaluating applications for nuclear materials, ensuring compliance with national and international safety standards.",
      icon: "📄",
    },
    {
      title: "Safety Assessments",
      description:
        "Conducting safety and risk assessments for nuclear-related activities and facilities.",
      icon: "🛡️",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Ensuring all nuclear-related operations adhere to PNRI's licensing requirements and regulations.",
      icon: "✅",
    },
    {
      title: "Technical Evaluations",
      description:
        "Reviewing technical documentation to validate the safety of nuclear applications.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo4}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          {/* <img
            src={logo2}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          /> */}
          {/* <img
            src={logo3}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo4}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          /> */}
        </div>

          {/* Right Section (Text Content) */}
          <div className="md:w-2/3 mr-10 p-10" data-aos="fade-left">
            <h1 className="text-xl md:text-4xl mb-20 font-medium ">Articles</h1>
            <a
              href="https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open"
              className="text-xl  md:text-4xl font-bold text-indigo-600 text-center md:text-left mb-10 ease-in-out duration-500 hover:text-indigo-800 cursor-pointer"
            >
              Registration for the 2nd PH Nuclear Science Olympiad is now open!
            </a>
            <img src={blog1} alt="" className="p-10 mt-10" />
            <p className="text-gray-700 text-lg mt-4 px-10">
              <strong>
                Registration for the 2nd PH Nuclear Science Olympiad is now
                open!{" "}
              </strong>
              The Department of Science and Technology – Philippine Nuclear
              Research Institute (DOST-PNRI) is calling Filipino secondary
              students aged 15–20 from private and public schools across the
              country to register for the 2nd Philippine Nuclear Science
              Olympiad (PNSO), to be held this April 03, 2025.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              This nationwide competition aims to identify and train the next
              generation of Filipino nuclear scientists and provide them with an
              opportunity to represent the Philippines at the 2nd International
              Nuclear Science Olympiad (INSO) in Malaysia this July 2025.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              Building on the remarkable success of the Philippine team at the
              1st INSO, where the Philippines secured 2 gold and 1 silver
              medals, along with a "Nuclear Ambassador" title and top scorer
              award, the 2nd PNSO seeks to further cultivate excellence in
              nuclear science education within the country.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              Registration is open until 07 March 2025. Each school may nominate
              one (1) team only, composed of one official coach and a maximum of
              three (3) students. Schools are encouraged to rank students to
              facilitate shortlisting, if necessary.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              The 2nd PNSO committee will evaluate the nominees according to
              established criteria and compile a list of official participants.
              The official list of participating students for the on-site exams,
              final testing sites, and the special prizes of the top 20 students
              will be announced on March 14. Participants and coaches will also
              be notified through email.
            </p>

            <p className="text-gray-700 text-lg mt-4 px-10">
              Organizing committee chair Ms. Kristine Marie Romallosa-Dean
              highlights the 2nd PNSO as a testament to the Philippines’
              commitment to nurturing young minds in the field of nuclear
              science and technology. Top winners will receive medals,
              certificates, special prizes, and exclusive training with PNRI
              scientists and experts to prepare for the INSO 2025. Eligible
              students are encouraged to apply for this chance to represent the
              Philippines internationally.
            </p>


              {/* Next Article */}


            <a
              href="https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open"
              className="text-xl mt-10 md:text-4xl font-bold text-indigo-600 text-center md:text-left mb-10 ease-in-out duration-500 hover:text-indigo-800 cursor-pointer"
            >
              Registration for the 2nd PH Nuclear Science Olympiad is now open!
            </a>
            <img src={blog1} alt="" className="p-10 mt-10" />
            <p className="text-gray-700 text-lg mt-4 px-10">
              <strong>
                Registration for the 2nd PH Nuclear Science Olympiad is now
                open!
              </strong>
              The Department of Science and Technology – Philippine Nuclear
              Research Institute (DOST-PNRI) is calling Filipino secondary
              students aged 15–20 from private and public schools across the
              country to register for the 2nd Philippine Nuclear Science
              Olympiad (PNSO), to be held this April 03, 2025
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              This nationwide competition aims to identify and train the next
              generation of Filipino nuclear scientists and provide them with an
              opportunity to represent the Philippines at the 2nd International
              Nuclear Science Olympiad (INSO) in Malaysia this July 2025.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              Building on the remarkable success of the Philippine team at the
              1st INSO, where the Philippines secured 2 gold and 1 silver
              medals, along with a "Nuclear Ambassador" title and top scorer
              award, the 2nd PNSO seeks to further cultivate excellence in
              nuclear science education within the country.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              Registration is open until 07 March 2025. Each school may nominate
              one (1) team only, composed of one official coach and a maximum of
              three (3) students. Schools are encouraged to rank students to
              facilitate shortlisting, if necessary.
            </p>
            <p className="text-gray-700 text-lg mt-4 px-10">
              The 2nd PNSO committee will evaluate the nominees according to
              established criteria and compile a list of official participants.
              The official list of participating students for the on-site exams,
              final testing sites, and the special prizes of the top 20 students
              will be announced on March 14. Participants and coaches will also
              be notified through email.
            </p>

            <p className="text-gray-700 text-lg mt-4 px-10">
              Organizing committee chair Ms. Kristine Marie Romallosa-Dean
              highlights the 2nd PNSO as a testament to the Philippines’
              commitment to nurturing young minds in the field of nuclear
              science and technology. Top winners will receive medals,
              certificates, special prizes, and exclusive training with PNRI
              scientists and experts to prepare for the INSO 2025. Eligible
              students are encouraged to apply for this chance to represent the
              Philippines internationally.
            </p>
          </div>


      </section>

      {/* Footer */}
    </div>
  );
};

export default Article;
