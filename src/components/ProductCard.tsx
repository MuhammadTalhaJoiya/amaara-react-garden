// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-poppins font-semibold text-[#333333]">{title}</h3>
        <p className="text-[#333333] font-poppins">{price}</p>
        <a
          href="#"
          className="mt-4 inline-block bg-[#A8D5BA] text-white font-poppins rounded-full px-6 py-2 hover:bg-[#8bcaa5] transition-all duration-300"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;