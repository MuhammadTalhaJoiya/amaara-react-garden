import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logoAmaara from '@/assets/logo-amaara.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoAmaara} 
              alt="AMAARA" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-foreground hover:text-organic-green font-medium transition-colors"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('learn')}
              className="text-foreground hover:text-organic-green font-medium transition-colors"
            >
              Learn
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-organic-green font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-organic-green font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-organic-green font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground rounded"></span>
              <span className="w-full h-0.5 bg-foreground rounded"></span>
              <span className="w-full h-0.5 bg-foreground rounded"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;