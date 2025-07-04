import React from 'react';

const ProductIntro: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDF6F0] relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] mb-6">
          Welcome to Amaara Botanicals
        </h2>
        <p className="text-lg font-poppins text-[#333333] max-w-3xl mx-auto">
          Our mission is to bring you the purest, most sustainable skincare products crafted with love and care from nature’s finest botanicals. Experience the difference of organic beauty.
        </p>
      </div>
    </section>
  );
};

export default ProductIntro;