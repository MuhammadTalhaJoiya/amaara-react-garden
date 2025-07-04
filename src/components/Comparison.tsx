import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Comparison: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDF6F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          Amaara vs. Competitors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#A8D5BA]/20 p-6 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold text-[#333333] mb-4">Amaara Botanicals</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCheck className="text-[#A8D5BA] mr-2" /> 100% Organic Ingredients
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#A8D5BA] mr-2" /> Sustainable Packaging
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#A8D5BA] mr-2" /> Cruelty-Free
              </li>
            </ul>
          </div>
          <div className="bg-[#A8D5BA]/20 p-6 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold text-[#333333] mb-4">Competitors</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaTimes className="text-red-500 mr-2" /> May Contain Synthetics
              </li>
              <li className="flex items-center">
                <FaTimes className="text-red-500 mr-2" /> Plastic Packaging
              </li>
              <li className="flex items-center">
                <FaTimes className="text-red-500 mr-2" /> Animal Testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;