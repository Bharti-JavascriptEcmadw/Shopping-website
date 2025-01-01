import React from "react";

const TravelBag = () => {
  const cards = [
    {
      image: "/assets/img/2i.jpg",
      title: "For their travel bag",
      description:
        "Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials.",
    },
    {
      image: "/assets/img/2ii.jpg",
      title: "Noteworthy gifts",
      description:
        "From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center sm:items-start">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center sm:text-left">
              {card.title}
            </h3>
            <p className="text-gray-600 text-center sm:text-left">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBag;
