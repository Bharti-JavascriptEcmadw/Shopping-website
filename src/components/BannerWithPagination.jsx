import React, { useState, useEffect } from "react";
import { PlayArrow, Pause } from "@mui/icons-material"; // Import Material UI icons

const BannerWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track the pause status

  const banners = [
    {
      logo: "Aēsop.",
      head: "Online only",
      title: "Timely gifts",
      description:
        "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store.",
      button: "Discover more",
      image: "/assets/img/23.jpg", // Replace with actual image URLs
    },
    {
      logo: "Aēsop.",
      head: "Online only",
      title: "Four bundles for hair, hands and home",
      description:
        "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
      button: "Explore Bundles",
      image: "/assets/img/11.jpg",
    },
    {
      logo: "Aēsop.",
      head: "Token of Appreciation",
      title: "Corporate gifts",
      description:
        "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
      button: "Learn More About the Services",
      image: "/assets/img/6m.jpg",
    },
  ];

  // Automatic page change, but only if not paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage < banners.length - 1 ? prevPage + 1 : 0
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isPaused]); // Add isPaused to dependencies so the effect will reset if the pause status changes

  const togglePause = () => {
    setIsPaused((prev) => !prev); // Toggle the pause state
  };

  return (
    <div className="relative flex flex-col items-center w-full h-screen bg-[#fdfbf6]">
      {/* Banner Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1500px] h-[80%] bg-[#fdfbf6]">
        {/* Right Content (Image) */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-full order-1 lg:order-2">
          <img
            src={banners[currentPage].image}
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-6 lg:space-y-7 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 lg:gap-7">
          {/* Logo and Head Text (Centered on Mobile) */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4 sm:mt-6">
              {banners[currentPage].logo}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-2 mb-4 sm:mb-5">
              {banners[currentPage].head}
            </p>
          </div>

          {/* Title and Description */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-5 text-center lg:text-left">
            {banners[currentPage].title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 text-center lg:text-left">
            {banners[currentPage].description}
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button className="flex items-center px-4 sm:px-6 py-3 text-sm font-medium text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white">
              {banners[currentPage].button}
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Bullets and Pause/Play Button */}
      <div className="w-full py-6 sm:py-10 flex justify-center items-center space-x-3">
        {/* Pagination Bullets */}
        <div className="flex space-x-2 sm:space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                currentPage === index
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-900"
              }`}
            ></button>
          ))}
        </div>

        {/* Pause/Play Button with Material UI Icons */}
        <button
          onClick={togglePause}
          className="p-2 rounded-full bg-white hover:bg-opacity-80"
        >
          {isPaused ? (
            <PlayArrow className="w-6 h-6 text-black" />
          ) : (
            <Pause className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BannerWithPagination;
