import React from "react";

const BottomSection = () => {
  const cards = [
    {
      image: "/assets/img/12.jpg",
      title: "Six aromatic encounters",
      description:
        "Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody, and the opulent.",
    },
    {
      image: "/assets/img/123.jpg",
      title: "Home gifts",
      description:
        "From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud, or the recently moved in.",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-start">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomSection;
