import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#FDF6F0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#333333] font-poppins mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Amaara Botanicals</h3>
            <p className="text-sm">Crafting natural beauty since 2023</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#home" className="text-[#333333] font-poppins text-sm hover:text-[#A8D5BA]">Home</a>
            <a href="#products" className="text-[#333333] font-poppins text-sm hover:text-[#A8D5BA]">Products</a>
            <a href="#about" className="text-[#333333] font-poppins text-sm hover:text-[#A8D5BA]">About</a>
            <a href="#contact" className="text-[#333333] font-poppins text-sm hover:text-[#A8D5BA]">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com" className="text-[#333333] hover:text-[#A8D5BA]">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" className="text-[#333333] hover:text-[#A8D5BA]">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-[#333333] font-poppins mt-6">
          © 2025 Amaara Botanicals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;