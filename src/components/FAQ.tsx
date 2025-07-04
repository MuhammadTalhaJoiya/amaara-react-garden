import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Are all AMAARA products certified organic?",
    answer: "Yes, absolutely! Every single product in our range is certified organic by recognized certification bodies. We source only from trusted organic farms and maintain strict quality standards throughout our entire supply chain to ensure the highest level of purity and authenticity."
  },
  {
    id: 2,
    question: "How do you ensure product quality and purity?",
    answer: "We implement a comprehensive quality assurance program that includes third-party laboratory testing for every batch, verification of organic certification, and regular audits of our suppliers. Each product undergoes rigorous testing for purity, potency, and contamination before reaching our customers."
  },
  {
    id: 3,
    question: "What makes AMAARA different from other supplement brands?",
    answer: "Our commitment to authenticity sets us apart. We combine traditional Ayurvedic wisdom with modern scientific research, source directly from trusted farms, use traditional processing methods, and maintain complete transparency in our ingredients and sourcing practices. Quality over quantity is our motto."
  },
  {
    id: 4,
    question: "How should I store my AMAARA products?",
    answer: "Store all products in a cool, dry place away from direct sunlight. Keep containers tightly sealed after opening. Most of our powders and capsules maintain their potency for 2-3 years when stored properly. Check individual product labels for specific storage instructions and expiration dates."
  },
  {
    id: 5,
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within the United States and Canada with fast, reliable delivery options. We're working on expanding our international shipping capabilities to serve our global community better. Please subscribe to our newsletter to be notified when we expand to your region."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            Frequently Asked <span className="text-organic-green">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products and practices
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div 
                key={item.id}
                className="bg-earth-cream/50 rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 border border-organic-green/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-organic-green-muted/30 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-earth-brown text-lg lg:text-xl pr-6 leading-relaxed">
                    {item.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 w-10 h-10 bg-organic-green rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    <p className="text-earth-brown/80 leading-relaxed text-base lg:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-earth-brown/70 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <button className="bg-organic-green text-white px-10 py-4 rounded-full hover:bg-organic-green-dark transition-all duration-300 font-medium shadow-soft hover:shadow-organic transform hover:-translate-y-1 text-lg">
            Contact Our Wellness Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;