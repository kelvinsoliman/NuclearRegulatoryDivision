import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import img1 from "../../assets/PNRI_Logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import IesHero from "./IesHero";
import IesNavbar from "./IesNavbar";
import IesFooter from "./IesFooter";


const IesContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <IesHero/>
      <IesNavbar />

      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4" data-aos="zoom-in">
              📬 Contact Us
            </h2>
            <p className="text-lg text-gray-600" data-aos="zoom-in">
              Get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@pnri.gov.ph</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+63 (2) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Philippine Nuclear Research Institute<br />
                      Commonwealth Avenue, Diliman<br />
                      Quezon City, Philippines
                    </p>
                  </div>
                </div>

                {/* Logo Display */}
                <div className="mt-8 flex justify-center">
                  <img 
                    src={img1} 
                    alt="PNRI Logo" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <IesFooter />
    </div>
  );
};

export default IesContact;