import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import logo1 from "../../assets/BP-LOGO-BT.png";
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";

const ReviewEvaluation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const reviewProcess = [
    "Submission of Licensing Application and Supporting Documents",
    "Initial Screening and Completeness Check",
    "Technical Evaluation and Safety Assessment",
    "Regulatory Compliance Verification",
    "Final Review and Approval",
    "Issuance of License and Compliance Monitoring",
  ];

  const responsibilities = [
    {
      title: "Application Review",
      description:
        "Evaluating nuclear license applications for regulatory compliance and safety standards.",
      icon: "📑",
    },
    {
      title: "Risk and Safety Assessment",
      description:
        "Conducting thorough risk assessments to ensure public and environmental safety.",
      icon: "⚠️",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Ensuring all nuclear activities adhere to established laws and guidelines.",
      icon: "✅",
    },
    {
      title: "Ongoing Monitoring",
      description:
        "Regular inspections and compliance checks for licensed nuclear facilities.",
      icon: "📊",
    },
  ];

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
          <h1 className="text-3xl font-bold text-blue-600">
            Licensing Review & Evaluation
          </h1>
          <p className="mt-2 text-gray-600">
            The Nuclear Regulatory Division (NRD) is responsible for reviewing
            and evaluating licensing applications for nuclear facilities and
            radioactive materials. Our goal is to ensure compliance with safety
            standards and protect public health and the environment.
          </p>

          <div
            className="mt-6 border rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <div className="bg-slate-900 text-white p-4 font-bold">
              Review & Evaluation Process
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {reviewProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-100 hover:bg-gray-200"
                >
                  <span className="mr-3 text-blue-500 text-xl">✔️</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          Core Responsibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 mb-10 mx-auto max-w-[1440px]">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LresFooter />
    </div>
  );
};

export default ReviewEvaluation;
