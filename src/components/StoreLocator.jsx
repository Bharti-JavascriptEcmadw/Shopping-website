import React from "react";

const StoreLocator = () => {
  return (
    <div className="bg-[#fdfbf6] flex flex-col items-center mb-5">
      {/* Top Section */}
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between mt-10 h-auto sm:h-[80vh]">
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/img/23.jpg"
            alt="Top Banner"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover lg:max-w-[95%] lg:h-[400px]"
          />
        </div>
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Store locator
          </h1>
          <p className="text-gray-600 mb-8">
            Our consultants are available to host you in-store and provide tailored guidance on gift purchases.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center px-7 py-4 border border-gray-800 text-gray-800 hover:bg-gray-100">
              Find a nearby Store
              <span className="ml-5">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
