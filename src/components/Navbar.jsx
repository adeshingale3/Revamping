import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[40%] h-14 rounded-3xl drop-shadow-xl backdrop-blur bg-white/90 flex flex-row items-center justify-between px-6 shadow-md z-10">
      <a className="w-auto h-auto flex items-center" href="">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </a>
      <div className="hidden md:flex gap-4 items-center text-sm font-medium text-gray-700">
        <a href="">Products</a>
        <a href="">Resources</a>
        <a href="">Integrations</a>
        <a href="">More</a>
      </div>
      <div className="flex gap-2 items-center">
        <a
          href=""
          className="py-1.5 px-3 drop-shadow-xl backdrop-blur-xl rounded-xl bg-gray-300 text-sm"
        >
          Login
        </a>
        <a
          href=""
          className="py-1.5 px-3 drop-shadow-xl backdrop-blur-xl rounded-xl bg-black text-white text-sm"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
