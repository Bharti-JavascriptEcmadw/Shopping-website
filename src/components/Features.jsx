import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material"; // Importing Material UI arrow icons

const Features = () => {
  const [features, setFeatures] = useState([]);
  const scrollRef = useRef(null); // Ref to handle scrolling programmatically

  // Fetching data dynamically (simulating an API call)
  useEffect(() => {
    // Simulated dynamic data fetching
    const fetchData = async () => {
      const data = [
        {
          title: "Complimentary Services",
          description: "Enjoy complimentary gift wrapping for all orders.",
          image: "/assets/img/123.jpg", // Replace with actual image URLs
        },
        {
          title: "Curated Kits",
          description: "Explore our collection of pre-curated kits.",
          image: "/assets/img/3m.png", // Replace with actual image URLs
        },
        {
          title: "Virtual Consultations",
          description: "Book a virtual consultation with our experts.",
          image: "/assets/img/2m.png", // Replace with actual image URLs
        },
        {
          title: "Exclusive Discounts",
          description: "Get exclusive discounts on selected products.",
          image: "/assets/img/3m.png", // Replace with actual image URLs
        },
        {
          title: "Gift Cards",
          description: "Send the perfect gift with our customizable gift cards.",
          image: "/assets/img/3m.png", // Replace with actual image URLs
        },
      ];
      setFeatures(data);
    };

    fetchData();
  }, []); // Run once on component mount

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll left by 300px
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      // Scroll right by 300px
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Feature Cards Container */}
        <div
          className="flex gap-4 px-4 overflow-x-auto scroll-smooth justify-center items-center"
          ref={scrollRef}
          style={{
            maxWidth: "100%", // Ensure the container doesn't overflow
            paddingLeft: "0", // No extra padding on the left
            paddingRight: "0", // No extra padding on the right
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 text-center w-64 sm:w-72 md:w-80 flex-shrink-0"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 sm:h-48 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
