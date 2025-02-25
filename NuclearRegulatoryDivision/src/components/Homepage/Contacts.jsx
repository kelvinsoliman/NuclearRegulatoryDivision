import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/BP-LOGO-BT.png";
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresRating from "../LRES/LresRating";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required field
    if (!formData.message.trim()) {
      setResponseMessage({ type: "error", text: "Message is required." });
      return;
    }

    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("http://localhost:5175/Contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage({
          type: "success",
          text: result.message || "Feedback submitted successfully!",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setResponseMessage({
          type: "error",
          text: result.message || "Submission failed.",
        });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setResponseMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Main Content */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          {[logo1, logo2, logo3, logo4].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-20 md:h-30 md:w-30 rounded-full"
            />
          ))}
        </div>

        {/* Right Section (Text Content) */}
        <div className="md:w-2/3" data-aos="fade-left">
          <h1 className="pt-10 text-indigo-600 text-xl md:text-4xl font-bold capitalize">
            Your Feedback is Important to Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg mt-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name (Optional)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email (Optional)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Feedback"
              ></textarea>
            </div>

            {/* Response Message */}
            {responseMessage && (
              <p
                className={` px-10 font-semibold p-3 w-full text-${
                  responseMessage.type === "error" ? "red" : "green"
                } mb-2 rounded-3xl`}
              >
                {responseMessage.text}
              </p>
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 ease-in-out duration-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>

          <LresRating />
        </div>
      </section>
    </div>
  );
};

export default Contacts;
