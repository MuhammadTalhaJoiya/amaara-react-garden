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
    <section className="py-20 bg-organic-green-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-brown mb-6">
            Why Choose <span className="text-organic-green">AMAARA</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See how our commitment to quality sets us apart from the competition
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-organic overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-organic text-white">
            <div className="p-6 text-center font-semibold">Feature</div>
            <div className="p-6 text-center font-semibold border-l border-white/20">
              AMAARA Botanicals
            </div>
            <div className="p-6 text-center font-semibold border-l border-white/20">
              Generic Competitors
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-earth-cream/50'} hover:bg-organic-green-muted/20 transition-colors`}
            >
              <div className="p-6 font-medium text-earth-brown">
                {item.feature}
              </div>
              <div className="p-6 border-l border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 bg-organic-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-organic-green font-medium">{item.amaara}</span>
                </div>
              </div>
              <div className="p-6 border-l border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{item.competitor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl px-8 py-4 shadow-card">
            <div className="text-organic-green font-semibold">Ready to experience the difference?</div>
            <button className="bg-organic-green text-white px-6 py-2 rounded-lg hover:bg-organic-green-dark transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;