// import React from "react";

// const ExploreSection = () => {
//   const exploreItems = [
//     {
//       id: 1,
//       title: "Corporate Gifts",
//       description:
//         "Tailored offerings to honor your valued clients and employees.",
//       image: "path-to-image1", // Replace with actual image paths
//       link: "#corporate-gifts",
//     },
//     {
//       id: 2,
//       title: "Store Locator",
//       description:
//         "Visit one of our stores to experience our products firsthand.",
//       image: "path-to-image2", // Replace with actual image paths
//       link: "#store-locator",
//     },
//     {
//       id: 3,
//       title: "Virtual Consultations",
//       description:
//         "Connect with our experts to find the perfect products for you.",
//       image: "path-to-image3", // Replace with actual image paths
//       link: "#virtual-consultations",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Explore Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {exploreItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//                 <p className="text-gray-600 mb-6">{item.description}</p>
//                 <a
//                   href={item.link}
//                   className="text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreSection;


import React from 'react'

export const ExploreSection = () => {
  return (
    <div>ExploreSection</div>
  )
}
