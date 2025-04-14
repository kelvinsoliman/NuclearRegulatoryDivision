import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./LresNavbar";
import LresHero from "./LresHero";
import LresFooter from "./LresFooter";
import trophyIcon from "../../assets/monitor.png";
import medalIcon from "../../assets/inspection.png";
import awardIcon from "../../assets/notice.png";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const fetchAchievements = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5175/Achievements");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setAchievements(data);
        console.log(achievements);
        setError(null);
        console.log("Fetched Achievements:", data);
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 bg-gray-800">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900">
      <LresHero />
      <LresNavbar />

      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          <img src={trophyIcon} alt="Trophy" className="h-20 w-20" />
          <img src={medalIcon} alt="Medal" className="h-20 w-20" />
          <img src={awardIcon} alt="Award" className="h-20 w-20" />
        </div>

        <div className="max-w-4xl mx-auto p-6" data-aos="fade-left">
          <h1 className="text-3xl font-bold text-indigo-600">
            Our Accomplishment
          </h1>
          <p className="mt-2 text-gray-600">
            We are proud to showcase our accomplishments and milestones that
            reflect our dedication and hard work.
          </p>

          <div
            className="mt-6 border rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <div className="bg-slate-900 text-white p-4 font-bold">
              Recognitions & Awards
            </div>
            <ul className="divide-y divide-gray-300">
              {achievements.length > 0 ? (
                achievements.map((achievement) => (
                  <li
                    key={achievement.id}
                    className="flex items-center p-4 bg-gray-100 hover:bg-gray-200 hover:font-bold ease-in-out duration-500 hover:text-gray-500"
                  >
                    <span className="mr-3 text-yellow-500 text-xl">🏆</span>
                    {achievement.achievements}
                  </li>
                ))
              ) : (
                <li className="p-4 text-center text-gray-600">
                  No achievements found.
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <LresFooter />
    </div>
  );
};

export default Achievements;
