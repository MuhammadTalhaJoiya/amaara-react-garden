import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1618005182380-5c7e3337a19b',
    'https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8',
    'https://images.unsplash.com/photo-1597843786411-8b525c7b2b75',
    'https://images.unsplash.com/photo-1504279571355-4a61a3e83414',
  ];

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;