import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white text-center text-sm py-2 px-4 sm:text-base md:text-lg">
      <p>
        Kindly note, due to the Christmas public holidays, the processing of
        orders may be delayed.{" "}
        <a href="#" className="underline hover:text-black">
          Conditions apply.
        </a>
      </p>
    </header>
  );
};

export default Header;
