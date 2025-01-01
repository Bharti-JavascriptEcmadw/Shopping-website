// import React from "react";

// const ProductGrid = () => {
//   const products = [
//     { id: 1, title: "Hand Balm", price: "$25", image: "path-to-image1" },
//     { id: 2, title: "Candles", price: "$45", image: "path-to-image2" },
//     { id: 3, title: "Skin Care Kit", price: "$60", image: "path-to-image3" },
//     { id: 4, title: "Face Cleanser", price: "$30", image: "path-to-image4" },
//   ];

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 text-center">
//               <h3 className="font-medium text-lg">{product.title}</h3>
//               <p className="text-gray-500">{product.price}</p>
//               <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;


import React from 'react'

export const ProductGrid = () => {
  return (
    <div>ProductGrid</div>
  )
}
