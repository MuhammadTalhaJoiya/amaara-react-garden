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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-earth-cream via-white to-earth-beige">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-cream/80 via-white/60 to-earth-beige/80"></div>
      </div>

      {/* Floating Product Images */}
      <div className="absolute top-20 left-10 animate-float opacity-80">
        <div className="w-32 h-32 bg-white rounded-2xl shadow-organic p-4 transform rotate-12">
          <img 
            src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Organic supplement pills"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-float opacity-70" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 bg-white rounded-full shadow-soft p-3 transform -rotate-12">
          <img 
            src="https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Natural herbs"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float opacity-90" style={{ animationDelay: '2s' }}>
        <div className="w-28 h-28 bg-white rounded-xl shadow-organic p-3 transform rotate-6">
          <img 
            src="https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Herbal powder"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-20 right-24 animate-float opacity-60" style={{ animationDelay: '0.5s' }}>
        <div className="w-36 h-24 bg-white rounded-2xl shadow-soft p-3 transform -rotate-6">
          <img 
            src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Supplement bottles"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium text-earth-brown/80 tracking-wider uppercase animate-fade-in">
            From idea to fruition
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-earth-brown leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your trusted manufacturing partner in the world of{' '}
            <span className="block mt-4">
              <span className="text-organic-green italic">Health & Wellness.</span>
            </span>
          </h1>

          {/* Since Badge */}
          <div className="inline-flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-brown/70">
              Since 2014
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-earth-brown/70 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Offering Private Labelling and Contract Manufacturing to help your brand succeed with 
            authentic, high-quality Dietary Supplements, Herbs & Botanicals, Functional Superfoods, 
            and Lifestyle Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="default" 
              size="xl"
              onClick={() => scrollToSection('services')}
              className="min-w-48 text-lg font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="earth" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="min-w-48 text-lg font-semibold"
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