import React from "react";
import BottomSection from "./BottomSection";

const Hero = () => {
  return (
    <div className="bg-[#fdfbf6] min-h-screen flex flex-col items-center justify-center">
      {/* Top Section */}
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row items-center lg:items-start justify-between mt-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src="/assets/img/5.jpg"
            alt="Top Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Right Text Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex justify-center text-center lg:text-left">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Festive giving</h2>
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
              A complimentary sleeve for your gifts
            </h1>
            <p className="text-gray-600 mb-8 text-sm lg:text-base">
              Inspired by the verve of the season, a specially designed gift sleeve
              will swaddle your purchases when you select the ‘gift packaging’ option
              at checkout. Exclusions apply.
            </p>
            <button className="flex items-center px-7 py-4 border border-gray-800 text-gray-800 hover:bg-gray-100 text-sm lg:text-base">
              Explore gifts
              <span className="ml-5">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <BottomSection />
    </div>
  );
};

export default Hero;
