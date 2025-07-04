import React from 'react';
import { Button } from '@/components/ui/button';

const InfoSections = () => {
  return (
    <section id="learn" className="section-padding bg-white">
      <div className="container-custom">
        {/* First Info Block - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh Organic Turmeric and Ginger"
                className="w-full rounded-3xl shadow-organic"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-organic-green rounded-full flex items-center justify-center animate-float">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-earth-brown leading-tight">
              Pure Organic <span className="text-organic-green">Excellence</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-earth-brown mb-2">100% Certified Organic</h3>
                  <p className="text-earth-brown/70 leading-relaxed">All our ingredients are certified organic and sustainably sourced from trusted farms worldwide.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-earth-brown mb-2">Third-Party Tested</h3>
                  <p className="text-earth-brown/70 leading-relaxed">Every batch is rigorously tested for purity, potency, and safety by independent laboratories.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-earth-brown mb-2">Eco-Friendly Packaging</h3>
                  <p className="text-earth-brown/70 leading-relaxed">Our commitment to sustainability extends to our biodegradable and recyclable packaging materials.</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="mt-8">
              Learn Our Process
            </Button>
          </div>
        </div>

        {/* Second Info Block - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-earth-brown leading-tight">
              Traditional Wisdom, <span className="text-organic-green">Modern Science</span>
            </h2>
            
            <p className="text-xl text-earth-brown/70 leading-relaxed">
              For over a decade, we've been bridging ancient herbal traditions with cutting-edge 
              scientific research to bring you the most effective natural wellness solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-earth-cream rounded-2xl">
                <div className="text-4xl font-bold text-organic-green mb-2">10+</div>
                <div className="text-earth-brown/70 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-earth-cream rounded-2xl">
                <div className="text-4xl font-bold text-organic-green mb-2">500+</div>
                <div className="text-earth-brown/70 font-medium">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-earth-cream rounded-2xl">
                <div className="text-4xl font-bold text-organic-green mb-2">50+</div>
                <div className="text-earth-brown/70 font-medium">Premium Products</div>
              </div>
              <div className="text-center p-6 bg-earth-cream rounded-2xl">
                <div className="text-4xl font-bold text-organic-green mb-2">100%</div>
                <div className="text-earth-brown/70 font-medium">Satisfaction Rate</div>
              </div>
            </div>
            
            <Button variant="earth" size="lg">
              View Research
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Traditional Herbs and Modern Science"
              className="w-full rounded-3xl shadow-organic"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-earth-brown rounded-full flex items-center justify-center animate-float">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSections;