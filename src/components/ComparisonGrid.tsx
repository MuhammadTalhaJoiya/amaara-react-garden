import React from 'react';

const ComparisonGrid = () => {
  const comparisonData = [
    {
      feature: "Organic Certification",
      amaara: "100% Certified Organic",
      competitor: "Partially Organic"
    },
    {
      feature: "Third-Party Testing",
      amaara: "Every Batch Tested",
      competitor: "Limited Testing"
    },
    {
      feature: "Sourcing",
      amaara: "Direct from Trusted Farms",
      competitor: "Various Suppliers"
    },
    {
      feature: "Processing",
      amaara: "Traditional Methods",
      competitor: "Industrial Processing"
    },
    {
      feature: "Packaging",
      amaara: "Eco-Friendly Materials",
      competitor: "Standard Packaging"
    },
    {
      feature: "Customer Support",
      amaara: "Dedicated Wellness Experts",
      competitor: "Basic Support"
    }
  ];

  return (
    <section className="section-padding bg-organic-green-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            Why Choose <span className="text-organic-green">AMAARA</span>?
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            See how our commitment to quality sets us apart from the competition
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-organic overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-organic-green to-organic-green-light text-white">
            <div className="p-6 lg:p-8 text-center font-semibold text-lg">Feature</div>
            <div className="p-6 lg:p-8 text-center font-semibold text-lg border-l border-white/20">
              AMAARA Botanicals
            </div>
            <div className="p-6 lg:p-8 text-center font-semibold text-lg border-l border-white/20">
              Generic Competitors
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-earth-cream/50'} hover:bg-organic-green-muted/30 transition-colors duration-300`}
            >
              <div className="p-6 lg:p-8 font-semibold text-earth-brown text-center lg:text-left">
                {item.feature}
              </div>
              <div className="p-6 lg:p-8 border-l border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-organic-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-organic-green font-semibold">{item.amaara}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 border-l border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">{item.competitor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white rounded-2xl px-8 py-6 shadow-card">
            <div className="text-earth-brown font-semibold text-lg">Ready to experience the difference?</div>
            <button className="bg-organic-green text-white px-8 py-3 rounded-full hover:bg-organic-green-dark transition-all duration-300 font-medium shadow-soft hover:shadow-organic transform hover:-translate-y-1">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;