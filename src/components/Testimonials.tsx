import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import testimonialWoman from '@/assets/testimonial-woman.jpg';
import testimonialMan from '@/assets/testimonial-man.jpg';
import testimonialWoman2 from '@/assets/testimonial-woman-2.jpg';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'Amaara\'s products transformed my wellness routine! The natural ingredients make all the difference in how I feel every day.',
      image: testimonialWoman,
    },
    {
      name: 'James T.',
      quote: 'I love the quality and authenticity of these products. The difference in my energy levels has been remarkable!',
      image: testimonialMan,
    },
    {
      name: 'Emily R.',
      quote: 'The best supplements I\'ve ever used. My body feels so balanced and healthy since starting with Amaara.',
      image: testimonialWoman2,
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            What Our <span className="text-organic-green">Customers</span> Say
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have experienced the Amaara difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-organic transition-all duration-500 hover:-translate-y-2 bg-earth-cream border-0 overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover shadow-soft"
                  />
                </div>
                
                <blockquote className="text-earth-brown/80 text-lg leading-relaxed mb-6 italic relative">
                  <span className="text-4xl text-organic-green/30 absolute -top-4 -left-2">"</span>
                  {testimonial.quote}
                  <span className="text-4xl text-organic-green/30 absolute -bottom-8 right-2">"</span>
                </blockquote>
                
                <div className="flex justify-center items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-organic-green fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                <h4 className="font-semibold text-earth-brown text-xl">
                  {testimonial.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;