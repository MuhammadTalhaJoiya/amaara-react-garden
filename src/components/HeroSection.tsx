import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Your trusted manufacturing partner in the world of{' '}
            <span className="text-organic-green-light italic">Health & Wellness.</span>
          </h1>

          {/* Since Badge */}
          <div className="inline-flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              Since 2014
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in opacity-90" style={{ animationDelay: '0.4s' }}>
            Offering Private Labelling and Contract Manufacturing to help your brand succeed with 
            authentic, high-quality Dietary Supplements, Herbs & Botanicals, Functional Superfoods, 
            and Lifestyle Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="xl"
              onClick={() => scrollToSection('services')}
              className="min-w-48 text-lg font-semibold bg-organic-green hover:bg-organic-green-dark"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="min-w-48 text-lg font-semibold border-white text-white hover:bg-white hover:text-earth-brown"
            >
              Know more
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;