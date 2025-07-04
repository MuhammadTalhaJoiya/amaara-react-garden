import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logoAmaara from '@/assets/logo-amaara.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoAmaara} 
              alt="AMAARA Botanicals" 
              className={`h-10 lg:h-12 w-auto object-contain transition-all duration-300 ${
                isScrolled ? '' : 'filter brightness-0 invert'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 hover:text-organic-green ${
                isScrolled ? 'text-earth-brown' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-organic-green ${
                isScrolled ? 'text-earth-brown' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`font-medium transition-colors duration-300 hover:text-organic-green ${
                isScrolled ? 'text-earth-brown' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-organic-green ${
                isScrolled ? 'text-earth-brown' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="default" 
              size="default"
              className="bg-organic-green hover:bg-organic-green-dark"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-organic-green-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled ? 'bg-earth-brown' : 'bg-white'}`}></span>
              <span className={`w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-earth-brown' : 'bg-white'}`}></span>
              <span className={`w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled ? 'bg-earth-brown' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-organic-green-muted bg-white/95 backdrop-blur-lg rounded-lg px-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-earth-brown hover:text-organic-green font-medium transition-colors text-left py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-earth-brown hover:text-organic-green font-medium transition-colors text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-earth-brown hover:text-organic-green font-medium transition-colors text-left py-2"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-earth-brown hover:text-organic-green font-medium transition-colors text-left py-2"
            >
              Contact
            </button>
            <div className="pt-4">
              <Button variant="default" size="default" className="w-full bg-organic-green hover:bg-organic-green-dark">
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;