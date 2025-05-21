import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/placeholder.jpg";
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import blog1 from "../../assets/blog.png";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Sample articles data for reusability
  const articles = [
    {
      title: "Registration for the 2nd PH Nuclear Science Olympiad is now open!",
      link: "https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open",
      image: blog1,
      content: [
        "The Department of Science and Technology – Philippine Nuclear Research Institute (DOST-PNRI) is calling Filipino secondary students aged 15–20 from private and public schools across the country to register for the 2nd Philippine Nuclear Science Olympiad (PNSO), to be held this April 03, 2025.",
        "This nationwide competition aims to identify and train the next generation of Filipino nuclear scientists and provide them with an opportunity to represent the Philippines at the 2nd International Nuclear Science Olympiad (INSO) in Malaysia this July 2025.",
        "Registration is open until 07 March 2025.",
      ],
    },

    {
      title: "Preparing for the Nuclear Science Olympiad",
      link: "https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open",
      image: blog1,
      content: [
        "Building on the remarkable success of the Philippine team at the 1st INSO, where the Philippines secured 2 gold and 1 silver medals, along with a 'Nuclear Ambassador' title and top scorer award, the 2nd PNSO seeks to further cultivate excellence in nuclear science education within the country.",
        "Top winners will receive medals, certificates, special prizes, and exclusive training with PNRI scientists and experts to prepare for the INSO 2025.",
      ],
    },

    {
      title: "Preparing for the Nuclear Science Olympiad",
      link: "https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open",
      image: logo1,
      content: [
        "Building on the remarkable success of the Philippine team at the 1st INSO, where the Philippines secured 2 gold and 1 silver medals, along with a 'Nuclear Ambassador' title and top scorer award, the 2nd PNSO seeks to further cultivate excellence in nuclear science education within the country.",
        "Top winners will receive medals, certificates, special prizes, and exclusive training with PNRI scientists and experts to prepare for the INSO 2025.",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:flex md:gap-8">
        {/* Sidebar with Logos */}
        <div
          className="hidden md:block md:w-1/6 lg:w-1/5 mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <div className="sticky top-24 space-y-6">
            {[logo1, logo1, logo1, logo1].map((logo, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded-lg shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>

            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="md:w-5/6 lg:w-4/5 space-y-8">
          <header className="mb-8" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Latest Articles
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Stay updated with the latest news and events in nuclear science.
            </p>
          </header>

          {/* Articles List */}
          <div className="space-y-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </h2>
                    <div className="prose prose-blue text-gray-600 space-y-4">
                      {article.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Article;