import React from "react";

const VisitUs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">
            Find us
          </h2>
          <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
        </div>
        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                  <p className="mt-1 font-bold text-gray-600">
                    <a href="#">Phone: +63 9382498000</a>
                  </p>
                 
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Philippine Nuclear Research Institute, Commonwealth Ave,
                    Diliman, Quezon City, Metro Manila
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday : 9pm - 6pm
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden order-none sm:order-first">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.0758219003992!2d121.05506507029716!3d14.662111230406943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77461ac900d%3A0x79e5d2ddad59c83e!2sPNRI%20Entrance%20Gate!5e1!3m2!1sen!2sph!4v1738888658901!5m2!1sen!2sph"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;