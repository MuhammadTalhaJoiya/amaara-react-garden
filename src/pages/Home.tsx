import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductIntro from '../components/ProductIntro';
import ProductCard from '../components/ProductCard';
import Benefits from '../components/Benefits';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1618005182380-5c7e3337a19b',
      title: 'Organic Face Serum',
      price: '$29.99',
    },
    {
      image: 'https://images.unsplash.com/photo-1512428813834-7e3d8414b3f8',
      title: 'Herbal Moisturizer',
      price: '$24.99',
    },
    {
      image: 'https://images.unsplash.com/photo-1597843786411-8b525c7b2b75',
      title: 'Natural Body Lotion',
      price: '$19.99',
    },
    {
      image: 'https://images.unsplash.com/photo-1504279571355-4a61a3e83414',
      title: 'Botanical Cleanser',
      price: '$22.99',
    },
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <ProductIntro />
      <section id="products" className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Benefits />
      <Comparison />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;