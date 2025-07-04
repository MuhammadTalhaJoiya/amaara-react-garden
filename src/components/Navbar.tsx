// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[#FDF6F0] shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-poppins font-bold text-[#333333]">
          <a href="/">Amaara</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#333333] font-poppins hover:text-[#A8D5BA] transition">Home</a>
          <a href="#products" className="text-[#333333] font-poppins hover:text-[#A8D5BA] transition">Products</a>
          <a href="#about" className="text-[#333333] font-poppins hover:text-[#A8D5BA] transition">About</a>
          <a href="#contact" className="text-[#333333] font-poppins hover:text-[#A8D5BA] transition">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#FDF6F0] py-4">
          <a href="#home" className="block px-4 py-2 text-[#333333] font-poppins hover:bg-[#A8D5BA]/20">Home</a>
          <a href="#products" className="block px-4 py-2 text-[#333333] font-poppins hover:bg-[#A8D5BA]/20">Products</a>
          <a href="#about" className="block px-4 py-2 text-[#333333] font-poppins hover:bg-[#A8D5BA]/20">About</a>
          <a href="#contact" className="block px-4 py-2 text-[#333333] font-poppins hover:bg-[#A8D5BA]/20">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;