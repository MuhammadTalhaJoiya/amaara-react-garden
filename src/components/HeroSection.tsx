import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-organic-produce.jpg';

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
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Organic botanical ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-earth-cream/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 bg-organic-green/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-organic-green/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-organic-green/15 rounded-full blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium text-earth-brown/80 tracking-wide uppercase">
            From idea to fruition
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-earth-brown leading-tight">
            Your trusted manufacturing partner in the world of{' '}
            <span className="block mt-2">
              <em className="text-organic-green font-serif">Health & Wellness.</em>
            </span>
          </h1>

          {/* Since Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-light text-earth-brown/70 italic">
              Since 2014
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Offering Private Labelling and Contract Manufacturing to help your brand succeed with 
            authentic, high-quality Dietary Supplements, Herbs & Botanicals, Functional Superfoods, 
            and Lifestyle Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="default" 
              size="xl"
              onClick={() => scrollToSection('shop')}
              className="min-w-48"
            >
              Get Started
            </Button>
            <Button 
              variant="earth" 
              size="xl"
              onClick={() => scrollToSection('learn')}
              className="min-w-48"
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;