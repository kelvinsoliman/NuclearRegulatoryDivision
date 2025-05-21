import React from "react";
import img1 from "../../assets/worker.png";
import img2 from "../../assets/worker.png";
import img3 from "../../assets/worker.png";

const DivisionHeads = () => {
  const nuclearDivisionHeads = [
    { name: "sample name", image: img1, position: "Head" },
    { name: "sample name", image: img2, position: "Head" },
    { name: "sample name", image: img3, position: "Head" },
  ];

  return (
    <div>
      {/* Organizational Chart */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Nuclear Regulatory Division Heads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nuclearDivisionHeads.map((head, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >f
              <img
                src={head.image}
                alt={head.name}
                className="w-32 h-32 mx-auto rounded-full mb-3"
              />
              <p className="font-bold">{head.name}</p>
              <p className="font-semi">{head.position}</p>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DivisionHeads;
