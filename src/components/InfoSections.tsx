import React from 'react';
import { Button } from '@/components/ui/button';
import freshIngredients from '@/assets/fresh-turmeric-ginger.jpg';

const InfoSections = () => {
  return (
    <section id="learn" className="py-20">
      <div className="container mx-auto px-6">
        {/* First Info Block - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img 
              src={freshIngredients} 
              alt="Fresh Organic Turmeric and Ginger"
              className="w-full rounded-2xl shadow-organic"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-brown">
              Pure Organic <span className="text-organic-green">Excellence</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-earth-brown mb-1">100% Certified Organic</h3>
                  <p className="text-foreground/70">All our ingredients are certified organic and sustainably sourced from trusted farms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-earth-brown mb-1">Third-Party Tested</h3>
                  <p className="text-foreground/70">Every batch is rigorously tested for purity, potency, and safety by independent laboratories.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-organic-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-earth-brown mb-1">Eco-Friendly Packaging</h3>
                  <p className="text-foreground/70">Our commitment to sustainability extends to our biodegradable and recyclable packaging.</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Learn Our Process
            </Button>
          </div>
        </div>

        {/* Second Info Block - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-brown">
              Traditional Wisdom, <span className="text-organic-green">Modern Science</span>
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              For over a decade, we've been bridging ancient herbal traditions with cutting-edge 
              scientific research to bring you the most effective natural wellness solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-organic-green mb-2">10+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-organic-green mb-2">500+</div>
                <div className="text-sm text-foreground/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-organic-green mb-2">50+</div>
                <div className="text-sm text-foreground/70">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-organic-green mb-2">100%</div>
                <div className="text-sm text-foreground/70">Satisfaction Rate</div>
              </div>
            </div>
            
            <Button variant="earth" size="lg">
              View Research
            </Button>
          </div>
          
          <div>
            <img 
              src={freshIngredients} 
              alt="Fresh Organic Ingredients"
              className="w-full rounded-2xl shadow-organic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSections;