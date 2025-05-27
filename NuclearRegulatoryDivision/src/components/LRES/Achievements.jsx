import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import Header from "../Homepage/Header";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch("http://localhost:5175/Achievements");
      if (!response.ok) throw new Error("Failed to load achievements");
      setAchievements(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get unique years and types
  const years = [...new Set(achievements.map(a => new Date(a.date).getFullYear()))].sort((a, b) => b - a);
  const achievementTypes = [...new Set(achievements.map(a => a.type || "other"))];

  // Filter achievements
  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === "all" || 
                       new Date(achievement.date).getFullYear().toString() === filterYear;
    const matchesType = activeTab === "all" || achievement.type === activeTab;
    return matchesSearch && matchesYear && matchesType;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setFilterYear("all");
    setActiveTab("all");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center p-4">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <LresHero />
      <LresNavbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Our Achievements</h1>
          <p className="text-gray-600">Explore our milestones and recognitions</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Search achievements..."
              className="flex-1 p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 border rounded"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded ${activeTab === "all" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
            >
              All
            </button>
            {achievementTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-3 py-1 rounded ${activeTab === type ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements List */}
        {filteredAchievements.length > 0 ? (
          <div className="space-y-4">
            {filteredAchievements.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
                {item.image_url && (
                  <a href={item.image_url} target="_blank" rel="noopener" className="text-indigo-600 text-sm mt-2 inline-block">
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-lg shadow">
            <h3 className="text-lg text-gray-500 mb-4">No achievements found</h3>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded"
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