import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "AMAARA's matcha powder has completely transformed my morning routine. I feel more energized and focused than ever. The quality is exceptional and you can truly taste the difference!",
    location: "Portland, OR",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "As a fitness enthusiast, I'm very particular about my supplements. AMAARA's turmeric capsules have helped reduce my post-workout inflammation significantly. Highly recommend!",
    location: "Austin, TX",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "I've tried many organic brands, but AMAARA stands out for their purity and effectiveness. Their customer service is also outstanding - they truly care about wellness and their customers.",
    location: "Denver, CO",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "The coconut oil is amazing for both cooking and skincare. I love that everything is organic and sustainably sourced. AMAARA has become my go-to brand for all things wellness.",
    location: "Miami, FL",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-earth-cream to-organic-green-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            What Our <span className="text-organic-green">Customers</span> Say
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who've experienced the AMAARA difference
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-organic p-8 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 text-organic-green-muted opacity-30">
              <svg fill="currentColor" viewBox="0 0 100 100">
                <path d="M40 20c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                <path d="M60 44c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
              </svg>
            </div>

            <div className="text-center relative z-10">
              {/* Large Quote Icon */}
              <div className="text-8xl text-organic-green mb-8 font-serif leading-none">"</div>
              
              {/* Testimonial Content */}
              <div className="transition-all duration-700 ease-in-out">
                <p className="text-xl md:text-3xl text-earth-brown/90 italic leading-relaxed mb-12 max-w-4xl mx-auto font-light">
                  {testimonials[currentIndex].quote}
                </p>
                
                {/* Customer Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover shadow-soft border-4 border-organic-green-muted"
                  />
                  
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-earth-brown text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-earth-brown/60 mb-3">
                      {testimonials[currentIndex].location}
                    </p>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center md:justify-start space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-organic-green" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-organic-green w-12' 
                    : 'bg-organic-green/30 hover:bg-organic-green/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;