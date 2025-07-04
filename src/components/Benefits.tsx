import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: 'https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8',
      title: '100% Organic',
      description: 'Made with certified organic ingredients, free from harmful chemicals.',
      image: 'https://images.unsplash.com/photo-1618005182380-5c7e3337a19b',
    },
    {
      icon: 'https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8',
      title: 'Sustainable Packaging',
      description: 'Eco-friendly packaging to reduce environmental impact.',
      image: 'https://images.unsplash.com/photo-1597843786411-8b525c7b2b75',
    },
    {
      icon: 'https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8',
      title: 'Cruelty-Free',
      description: 'No animal testing, ever. Kind to all creatures.',
      image: 'https://images.unsplash.com/photo-1618005182380-5c7e3337a19b',
    },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          Why Choose Amaara?
        </h2>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12`}
          >
            <div className="md:w-1/2">
              <img src={benefit.image} alt={benefit.title} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 p-6">
              <img src={benefit.icon} alt="icon" className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-poppins font-semibold text-[#333333] mb-2">{benefit.title}</h3>
              <p className="text-[#333333] font-poppins">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;