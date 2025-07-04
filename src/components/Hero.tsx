const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1618005182380-5c7e3337a19b')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#A8D5BA]/50 flex items-center justify-center">
        <div className="text-center text-[#333333] px-4">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Discover Natural Beauty with Amaara Botanicals
          </h1>
          <p className="text-lg md:text-xl font-poppins mb-8 max-w-2xl mx-auto">
            Pure, organic skincare crafted from nature’s finest ingredients.
          </p>
          <a
            href="#products"
            className="inline-block bg-[#A8D5BA] text-white font-poppins font-medium rounded-full px-6 py-3 hover:bg-[#8bcaa5] transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;