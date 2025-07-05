import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Are your products really 100% organic?',
      answer: 'Yes, all our products are made with certified organic ingredients, sourced sustainably from trusted farms worldwide. We maintain strict quality control and third-party testing to ensure purity.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'We ship to most countries worldwide with secure packaging and tracking. Shipping times vary by location, and we provide detailed shipping information during checkout.',
    },
    {
      question: 'What is your return and refund policy?',
      answer: 'We offer a 30-day satisfaction guarantee for unopened products in their original condition. If you\'re not completely satisfied, contact our customer service team for a full refund.',
    },
    {
      question: 'How do I know which products are right for me?',
      answer: 'Our wellness consultants are available to help you choose the right products based on your health goals. You can also consult with your healthcare provider before starting any new supplement regimen.',
    },
    {
      question: 'Are your manufacturing processes certified?',
      answer: 'Yes, we maintain GMP (Good Manufacturing Practice) certification and follow strict quality assurance protocols. All our facilities are regularly inspected and certified by relevant authorities.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-earth-beige">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            Frequently Asked <span className="text-organic-green">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our products and services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-0 shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-lg text-earth-brown hover:text-organic-green transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-earth-brown/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;