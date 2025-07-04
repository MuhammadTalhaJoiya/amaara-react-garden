import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fresh-organic.jpg';
import logoAmaara from '@/assets/logo-amaara.png';

const Hero = () => {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
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
          alt="Fresh Organic Herbs and Produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-organic-green-muted/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logoAmaara} 
            alt="AMAARA" 
            className="h-16 md:h-20 w-auto mx-auto mb-4"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-earth-brown mb-6 animate-fade-in">
          Pure. Simple. <span className="text-organic-green">Organic.</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in">
          From idea to fruition - Your trusted partner in authentic, high-quality 
          organic wellness solutions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToShop}
            className="min-w-48"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            className="min-w-48"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/60 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-organic-green rounded-full"></div>
            <span>100% Organic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-organic-green rounded-full"></div>
            <span>Since 2014</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-organic-green rounded-full"></div>
            <span>Trusted Partner</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-organic-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-organic-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;