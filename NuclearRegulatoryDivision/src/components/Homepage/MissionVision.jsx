import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/PNRI_2.jpg";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative p-10 rounded-lg" data-aos="zoom-in">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Mission and Vision
          </h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-200">
            Committed to ensuring safety, transparency, and excellence.
          </p>
        </div>
      </header>

      {/* Mission, Vision, and Transparency Seal Section */}
      <section className="container mx-auto px-6 py-20" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">
             Our Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We envision to contribute, using nuclear science and technology, to the food, health, environment, and energy security of Filipinos.

              We strive, by 2028, to be a national center of excellence in nuclear science and technology, services, and nuclear regulation, and eventually in the Southeast Asian region; expand the nulcear education programs and be ready to service the nuclear power program of the Philippines.

            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-green-300 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
                We contribute to the improvement of the quality of Filipino life through safe and innovative nuclear science and technology.
            </p>
          </div>

          {/* Transparency Seal */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">
              Transparency Seal
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A pearl buried inside a tightly-shut shell is practically worthless. Government information is a pearl meant to be shared with the public in order to maximize its nherent value.
              The Transparency Seal, Depicted by a pearl shining out of an open shell, is a symbol of a policy shift towards openness in access to government information.

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
