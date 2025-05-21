import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch("http://localhost:5175/Achievements");
      if (!response.ok) {
        throw new Error(`Failed to load. Status: ${response.status}`);
      }
      const data = await response.json();
      setAchievements(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Process achievements data
  const achievementsByYear = achievements.reduce((acc, achievement) => {
    const year = new Date(achievement.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(achievement);
    return acc;
  }, {});

  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => b - a);
  const achievementTypes = [...new Set(achievements.map(a => a.type || "other"))];

  // Filter achievements based on search and filters
  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === "all" || 
                       new Date(achievement.date).getFullYear().toString() === filterYear;
    const matchesType = activeTab === "all" || achievement.type === activeTab;
    return matchesSearch && matchesYear && matchesType;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
          <h3 className="text-xl font-bold text-red-600 mb-2">Error</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchAchievements}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LresHero />
      <LresNavbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-3">
            Our Achievements
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our milestones and recognitions
          </p>
        </div>

        {/* Interactive Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Achievements
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by title or description..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Year
              </label>
              <select
                id="year-filter"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="all">All Years</option>
                {sortedYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Types
            </button>
            {achievementTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === type
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setFilterYear("all")}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {achievements.length}
            </div>
            <h3 className="text-lg font-medium text-gray-800">Total Awards</h3>
            <p className="text-gray-500 text-sm">Click to view all</p>
          </div>
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setFilterYear(sortedYears[0])}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {sortedYears[0]}
            </div>
            <h3 className="text-lg font-medium text-gray-800">Most Recent Year</h3>
            <p className="text-gray-500 text-sm">Click to filter</p>
          </div>
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setActiveTab(achievementTypes[0])}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {achievementTypes[0] ? achievementTypes[0].charAt(0).toUpperCase() + achievementTypes[0].slice(1) : "N/A"}
            </div>
            <h3 className="text-lg font-medium text-gray-800">Most Common Type</h3>
            <p className="text-gray-500 text-sm">Click to filter</p>
          </div>
        </div>

        {/* Achievements List */}
        {filteredAchievements.length > 0 ? (
          <div className="grid gap-6">
            {filteredAchievements.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => toggleExpand(item.id)}
                data-aos="fade-up"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-3 flex-shrink-0 ${
                    item.type === 'award' ? 'bg-blue-100 text-blue-600' :
                    item.type === 'medal' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {item.type === 'award' ? '🏆' : item.type === 'medal' ? '🥇' : '🌟'}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className={`text-gray-600 ${expandedId === item.id ? '' : 'line-clamp-2'}`}>
                      {item.description}
                    </p>
                    
                    {expandedId === item.id && (
                      <div className="mt-4 animate-fadeIn">
                        {item.image_url && (
                          <a
                            href={item.image_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition mr-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            View Certificate
                          </a>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                            Learn More
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-lg shadow-sm" data-aos="fade-up">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-medium text-gray-400 mb-2">
              No matching achievements found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterYear("all");
                setActiveTab("all");
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <LresFooter />
    </div>
  );
};

export default Achievements;