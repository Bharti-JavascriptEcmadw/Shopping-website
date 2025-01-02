import React, { useState, useEffect } from "react";
import { PlayArrow, Pause } from "@mui/icons-material"; // Import Material UI icons

const BannerWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track the pause status

  const banners = [
    {
      logo: "Aēsop.",
      head:"Online only",
      title: "Timely gifts",
      description:
        "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store.",
      button: "Discover more",
      image: "/assets/img/11.jpg", // Replace with actual image URLs
    },
    {
      logo: "Aēsop.",
      head:"Online only",
      title: "Four bundles for hair, hands",
      description:
        " Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
      button: "Explore Bundles",
      image: "/assets/img/6m.jpg",
    },
    {
      logo: "Aēsop.",
      head:"Token of Appreciation",
      title: "Corporate gifts",
      description:
        "Find a variety of gift-giving options, Trained consultants will be pleased to guide your selections and assist with delivery.",
      button: "Learn About the Services",
      image: "/assets/img/4l.jpg",
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
    <div className="relative flex flex-col items-center w-full h-screen bg-[#fdfbf6] gap-5">
      {/* Banner Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1500px] h-[60%] 
      xxs:h-[50%] lg:h-[40%] bg-[#fdfbf6] xxs:flex-col items-center w-full  flex gap-5">
        {/* Right Content (Image) */}
        <div className="relative w-full lg:w-1/2 h-full order-1 lg:order-2">
          <img
            src={banners[currentPage].image}
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-5 lg:p-10 space-y-6 order-2 lg:order-1 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-gray-800 mt-6">
            {banners[currentPage].logo}
          </h1>
          <p className="text-sm font-semibold text-gray-900 mt-2 mb-5">
            {banners[currentPage].head}
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-5">
            {banners[currentPage].title}
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            {banners[currentPage].description}
          </p>
          <button className="flex items-center px-6 py-3 text-sm font-medium text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white">
            {banners[currentPage].button}
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Pagination Bullets and Pause/Play Button */}
      <div className="absolute bottom-10 flex flex-col items-center space-y-3 w-full">
        <div className="flex items-center space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-full ${
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
          className={`ml-4 p-2 rounded-full bg-white hover:bg-opacity-80`}
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
