import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLearn = () => {
    const element = document.getElementById('learn');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Fresh Organic Herbs and Produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-earth-cream/80 via-white/60 to-organic-green-muted/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-earth-brown mb-8 animate-fade-in leading-tight">
          Pure. Simple. <span className="text-organic-green">Organic.</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-earth-brown/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in font-light">
          Your trusted manufacturing partner in authentic, high-quality 
          organic wellness solutions since 2014
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToShop}
            className="min-w-48 shadow-organic"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={scrollToLearn}
            className="min-w-48"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-earth-brown/70 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-organic-green rounded-full"></div>
            <span className="font-medium">100% Organic Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-organic-green rounded-full"></div>
            <span className="font-medium">Trusted Since 2014</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-organic-green rounded-full"></div>
            <span className="font-medium">Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-organic-green rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-organic-green rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;