import React from "react";
import img1 from "../../assets/placeholder.jpg";


const DivisionHeads = () => {
  const articles = [
    {
      title: "Registration for the 2nd PH Nuclear Science Olympiad is now open!",
      link: "https://www.pnri.dost.gov.ph/index.php/2-uncategorised/830-registration-for-the-2nd-ph-nuclear-science-olympiad-is-now-open",
      image: img1,
      content: [
        "The Department of Science and Technology – Philippine Nuclear Research Institute (DOST-PNRI) is calling Filipino secondary students aged 15–20 from private and public schools across the country to register for the 2nd Philippine Nuclear Science Olympiad (PNSO), to be held this April 03, 2025.",
        "This nationwide competition aims to identify and train the next generation of Filipino nuclear scientists and provide them with an opportunity to represent the Philippines at the 2nd International Nuclear Science Olympiad (INSO) in Malaysia this July 2025.",
        "Registration is open until 07 March 2025.",
      ],
    },
    // Add more articles here if needed
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
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
    </div>
  );
};



export default DivisionHeads;