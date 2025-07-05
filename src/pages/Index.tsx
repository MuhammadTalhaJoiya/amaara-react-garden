import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import InfoSections from '@/components/InfoSections';
import ComparisonGrid from '@/components/ComparisonGrid';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-earth-cream">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <InfoSections />
        <ComparisonGrid />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
