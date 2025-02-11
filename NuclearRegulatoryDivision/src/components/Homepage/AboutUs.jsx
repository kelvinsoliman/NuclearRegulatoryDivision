import React from "react";
import img from '../../assets/through-the-yearsrev3.png';

const AboutUs = () => {
  return (
    <section className="bg-gray-100" id="aboutus">
      <div className="container mx-auto py-16 px-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-md">
            
            <p className="mt-4 text-gray-600 text-lg flex flex-col">
              <strong>
                The Philippine Nuclear Research Institute (PNRI) is mandated to:
              </strong>
              undertake research and development activities in the peaceful uses
              of nuclear energy, to institute regulations on the said uses and
              to carry out the enforcement of said regulations to protect the
              health and safety of radiation workers and the general public.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={img}
              alt="About Us Image"
              className="object-fit rounded-lg shadow-md h-[500px] w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;