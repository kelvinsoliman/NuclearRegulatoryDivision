import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <footer className="bg-white text-white py-12 mt-20" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-xl font-bold text-blue-500">About Us</h3>
            <p className="text-gray-400">
              The Licensing, Review, and Evaluation Section (LRES) ensures the
              safe and secure use of nuclear and radioactive materials in
              compliance with national and international standards.
            </p>
          </div>

          <div className="space-y-4" data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-xl font-bold text-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-500 transition duration-300">Home</a></li>
              <li><a href="#aboutus" className="text-gray-400 hover:text-blue-500 transition duration-300">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4" data-aos="fade-right" data-aos-delay="600">
            <h3 className="text-xl font-bold text-blue-500">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>PNRI Building, Commonwealth Avenue</li>
              <li>Diliman, Quezon City, Philippines</li>
              <li>Email: lres@pnri.gov.ph</li>
              <li>Phone: +63 2 123 4567</li>
            </ul>
          </div>

          <div className="space-y-4" data-aos="fade-right" data-aos-delay="800">
            <h3 className="text-xl font-bold text-blue-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaLinkedin size={24} /></a>
              <a href="mailto:lres@pnri.gov.ph" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaEnvelope size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center" data-aos="fade-up" data-aos-delay="1000">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Nuclear Regulatory Division - PNRI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
