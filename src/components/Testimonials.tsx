import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'Amaara’s products transformed my skin! The natural ingredients make all the difference.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      name: 'James T.',
      quote: 'I love the eco-friendly packaging and the quality of these products. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      name: 'Emily R.',
      quote: 'The best skincare I’ve ever used. My skin feels so refreshed and radiant!',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#FDF6F0] p-6 rounded-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-[#333333] font-poppins italic mb-4">"{testimonial.quote}"</p>
              <p className="text-[#333333] font-poppins font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;