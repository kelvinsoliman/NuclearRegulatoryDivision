import React, { useState, useEffect } from "react";
import { Calendar, Clock, AlertTriangle, Info } from "lucide-react";
import RSDSHeroSection from "./RSDSHeroSection";
import RSDSFooter from "./RSDSFooter";
import RSDSNavbar from "./RSDSNavbar";
import AOS from "aos";
import "aos/dist/aos.css";

const RSDSAnnouncement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchAnnouncements();
  }, []);

  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch("http://localhost:5175/RSDSAnnouncement");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertTriangle size={18} className="mr-1" />;
      case "medium":
        return <Info size={18} className="mr-1" />;
      default:
        return <Info size={18} className="mr-1" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col">
      <RSDSHeroSection />
      <RSDSNavbar />

      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
              data-aos="zoom-in"
            >
              📢 Latest Announcements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-aos="fade-up">
              Stay updated with the latest news and important information from our organization.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-2xl mx-auto" data-aos="fade-up">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    Error loading announcements: {error}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.length > 0 ? (
                announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${
                      announcement.priority === "high"
                        ? "border-red-500"
                        : announcement.priority === "medium"
                        ? "border-yellow-500"
                        : "border-blue-500"
                    }`}
                    data-aos="fade-up"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            announcement.priority
                          )}`}
                        >
                          {getPriorityIcon(announcement.priority)}
                          {announcement.priority || "general"}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(announcement.date).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {announcement.title}
                      </h3>

                      <p
                        className={`text-gray-700 mb-4 ${
                          expandedCard === announcement.id
                            ? ""
                            : "line-clamp-3"
                        }`}
                      >
                        {announcement.announcement}
                      </p>

                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => toggleExpand(announcement.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                          {expandedCard === announcement.id
                            ? "Show less"
                            : "Read more"}
                        </button>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          {new Date(announcement.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="col-span-full text-center py-12"
                  data-aos="fade-up"
                >
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
                    <Info className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    No announcements available
                  </h3>
                  <p className="text-gray-500">
                    Check back later for updates.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <RSDSFooter />
    </div>
  );
};

export default RSDSAnnouncement;