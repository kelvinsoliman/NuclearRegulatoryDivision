import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./IesHero";
import IesFooter from "./IesFooter";
import LresRating from "./IesRating";
import Inspection from "../../assets/inspection.jpg"
import Enforcement from "../../assets/enforcement.jpg"
import { Link, useHref } from "react-router-dom";

const IesPermit = () => {
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
      const response = await fetch("http://localhost:5175/Ies", {
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
      title: "Inspection",
      description:
        "Inspection",
      icon: "🔍",
    },
    {
      title: "Enforcement",
      description:
        "Enforcement",
      icon: "🛂",
    },

    {
      Link:"/permit",
      title: "Permit to Transport",
      description:
        "Permit to Transport",
      icon: "📜",
    },
    {
      Link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.pnri.dost.gov.ph%2Fimages%2Fofficialforms%2FEmergencyIncident_Notification_Services%2FIncidentNotificationForm.doc&wdOrigin=BROWSELINK",
      title: "Incident Form",
      description:
        "Incident Report",
      icon: "📉",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
      

        {/* Permit to Trasnport reqs */}
        <div className="md:w-2/3" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            Permit to Transport
          </h2>
          <p className="text-gray-700 text-lg mt-4">
           Permits to Transport radioactive materials should be sent only to 
         
          <i className="text-blue-500 ml-1 mr-1 hover:underline">
           
          <a href="mailto:nrd-pt@pnri.dost.gov.ph">
           nrd-pt@pnri.dost.gov.ph.
           </a>
          
          </i><br></br>
        
          The cut-off for requests is every Monday and Wednesday at 2:00 pm, while the issuance of Permits 
          takes place every Tuesday and Thursday from 10:00 AM to 4:00 PM.
          
          
          <i className="text-red-600 mr-1 ml-2 hover:underline text-justify">Permits shall not be issued on any other day unless otherwise advised.</i> 
          <p className="mt-5">Please accomplish and email the following requirements for securing a Permit to Transport (e-copy/scanned):</p>

          <p className="mt-5 ml-15">1. Request/Cover letter regarding the plan to transport your radioactive material to your planned destination addressed to the following:</p>
          <p className="mt-5 ml-25">Mr. Carl M. Nohay</p>
          <p className="ml-25">OIC, Nuclear Regulatory Division</p>
          <p className="ml-25">Attention: Nelson P. Badinas</p>
          <p className="ml-25">Head, Inspection and Enforcement Section;</p>

          <p className="mt-5 ml-15">2. Completely filled-out Consignor’s Declaration for the Transport of Radioactive Material (see attachment through this 
             <a href="https://pnridostgovph-my.sharepoint.com/:f:/g/personal/nrd-pt_pnri_dost_gov_ph/ErSuwLb1Qj1KnwCNl2zCNJwB6Y-tIyc2XSGvu-gO352I3g?e=bLERWJ"target="_blank">
             <i className=" text-blue-500 ml-2 hover:underline">Link</i>.)
             </a>
          </p>
          <p className="mt-5 ml-15">3. Permit to Transport Fee ( PhP 500.00 / permit). Kindly indicate preferred payment option (Online/On-site).</p>
          <p className="mt-5 ml-15">4. Certificate of Release for Importation of RAM. <i className="text-red-600 hover:underline">Requests (Imported RAM only) without the Certificate of Release shall not be processed.</i></p>
          <p className="mt-5 ml-15">5. Shipper’s Declaration of Dangerous Goods, Airway Bill and Packaging List (for imported RAM only).</p>
          
          <p className="mt-5 font-bold">The Certificate of Release needs to be requested from the Licensing, Review and Evaluation Section. Kindly contact them for instructions at
          <a href="mailto:nrd-lre@pnri.dost.gov.ph" className="ml-2 text-blue-500 font-bold hover:underline">
            nrd-lre@pnri.dost.gov.ph.</a></p>

          <p className="mt-5">For the payment and claiming of permit/s, kindly schedule an appointment online through the link</p>
          <a href="https://services.pnri.dost.gov.ph/portal/nrd/Appoint" target="_blank">
          <p className="text-blue-900 hover:underline">https://services.pnri.dost.gov.ph/portal/nrd/Appoint.</p>
          </a>
          
          <p className="mt-5 mb-20">For any questions and clarifications, you may address your concern or inquiry to 
          <a href="mailto:nrd-pt@pnri.dost.gov.ph">
          <i className="text-blue-500 ml-1 hover:underline">nrd-pt@pnri.dost.gov.ph</i>.</a></p>
          

          
          </p>
         </div>

           
        
      </section> 

      {/* Footer */}
      <IesFooter />
    </div>
  );
};

export default IesPermit;