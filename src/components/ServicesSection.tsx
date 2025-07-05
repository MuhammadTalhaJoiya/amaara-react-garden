import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Private Labeling",
      description: "Complete private label solutions for your brand with custom formulations, packaging, and regulatory compliance.",
      features: ["Custom Formulations", "Brand Development", "Regulatory Support", "Quality Assurance"],
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: (
        <svg className="w-12 h-12 text-organic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Contract Manufacturing",
      description: "Full-service manufacturing capabilities with state-of-the-art facilities and expert quality control.",
      features: ["GMP Certified Facilities", "Scalable Production", "Quality Testing", "Packaging Solutions"],
      image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: (
        <svg className="w-12 h-12 text-organic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Product Development",
      description: "From concept to market-ready products with our experienced R&D team and industry expertise.",
      features: ["Research & Development", "Formulation Testing", "Market Analysis", "Regulatory Guidance"],
      image: "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: (
        <svg className="w-12 h-12 text-organic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-8">
            Our <span className="text-organic-green">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-4xl mx-auto leading-relaxed">
            Comprehensive manufacturing solutions to bring your health and wellness products from idea to market
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-organic transition-all duration-500 hover:-translate-y-3 bg-white border-0 overflow-hidden rounded-3xl shadow-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-8 lg:p-10">
                <h3 className="font-bold text-2xl lg:text-3xl text-earth-brown mb-6">
                  {service.title}
                </h3>
                
                <p className="text-earth-brown/70 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-organic-green rounded-full flex-shrink-0"></div>
                      <span className="text-earth-brown font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-organic-green text-organic-green hover:bg-organic-green hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-organic-green to-organic-green-light rounded-3xl p-12 lg:p-16 text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help bring your health and wellness products to market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="min-w-48 bg-white text-organic-green hover:bg-earth-cream">
              Get Quote
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 border-white text-white hover:bg-white hover:text-organic-green">
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;