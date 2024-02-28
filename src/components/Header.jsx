import React from "react";

const Header = () => {
  return (
    <div className="self-stretch relative mt-4">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-400 h-1 lg:w-48 md:w-32 sm:w-20"></div>
      <div className="text-yellow-400 uppercase text-center text-6xl tracking-wide font-light z-10">
        fast react pizza co.
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 h-1 lg:w-48 md:w-32 sm:w-20"></div>
    </div>
  );
};

export default Header;
