import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-5 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap">
        <div className="w-full flex items-center justify-between">
          {/* Left Navigation Links */}
          <ul className="hidden md:flex flex-wrap space-x-6 text-sm font-medium w-full md:w-auto justify-center md:justify-start">
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                New & Notable
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Gifts
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Skin Care
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Hand & Body
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Hair
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Fragrance
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Kits & Travel
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Read
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Stores
              </a>
            </li>
            <li className="w-1/2 sm:w-1/3 md:w-auto mb-2">
              <a href="#" className="hover:underline">
                Facial Appointments
              </a>
            </li>
          </ul>

          {/* Mobile Links (visible on small screens) */}
          <ul className="md:hidden flex space-x-6 text-sm font-medium justify-center">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Read
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                More
              </a>
            </li>
          </ul>

          {/* Right Navigation Links */}
          <div className="flex items-center space-x-6 text-sm font-medium">
            {/* Material-UI Search Icon */}
            <button className="focus:outline-none">
              <SearchIcon className="text-white w-5 h-5" />
            </button>

            <a href="#" className="hover:underline">
              Log in
            </a>
            <a href="#" className="hover:underline">
              Cabinet
            </a>
            <a href="#" className="hover:underline">
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
