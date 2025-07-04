import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-[#A8D5BA]/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          Stay in Touch
        </h2>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-full bg-[#FFFFFF] text-[#333333] font-poppins border border-[#A8D5BA] focus:outline-none focus:ring-2 focus:ring-[#8bcaa5]"
            />
            <button
              type="submit"
              className="bg-[#A8D5BA] text-white font-poppins rounded-full px-6 py-3 hover:bg-[#8bcaa5] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;