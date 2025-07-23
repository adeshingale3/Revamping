import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[40%] h-14 rounded-3xl drop-shadow-xl backdrop-blur bg-white/90 flex flex-row items-center justify-between px-6 shadow-md z-10">
      <a className="w-auto h-auto flex items-center" href="">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </a>
      
      
      <button 
        className="md:hidden "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <a href="" className='hover:text-green-500 duration-300'>Products</a>
            <a href="" className='hover:text-green-500 duration-300'>Resources</a>
            <a href="" className='hover:text-green-500 duration-300'>Integrations</a>
            <a href="" className='hover:text-green-500 duration-300'>More</a>
            <div className="flex flex-col gap-2">
              <a href="" className="py-1.5 px-3 text-center drop-shadow-xl backdrop-blur-xl rounded-xl bg-gray-300">Login</a>
              <a href="" className="py-1.5 px-3 text-center drop-shadow-xl backdrop-blur-xl rounded-xl bg-black text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex gap-4 items-center text-sm font-medium text-gray-700">
        <a href="" className='hover:text-green-500 duration-300'>Products</a>
        <a href="" className='hover:text-green-500 duration-300'>Resources</a>
        <a href="" className='hover:text-green-500 duration-300'>Integrations</a>
        <a href="" className='hover:text-green-500 duration-300'>More</a>
      </div>
      <div className="hidden md:flex gap-2 items-center">
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
