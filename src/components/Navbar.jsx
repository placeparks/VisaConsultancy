import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="uppercase font-bold text-xl">Career Migration</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 gap-4">
          <a href="#citizenship" className="transition duration-300 ease-in-out transform hover:scale-105 hover:font-bold">Citizenship</a>
          <a href="#golden-visa" className="transition duration-300 ease-in-out transform hover:scale-105 hover:font-bold">Work Permit</a>
          <a href="#contact-us" className="transition duration-300 ease-in-out transform hover:scale-105 hover:font-bold">Contact Us</a>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#citizenship" className="hover:font-bold">Citizenship</a>
          <a href="#golden-visa" className="hover:font-bold">Work Permit</a>
          <a href="#contact-us" className="hover:font-bold">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
