import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are your products really 100% organic?',
      answer: 'Yes, all our products are made with certified organic ingredients, sourced sustainably.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'We ship to most countries worldwide. Check our shipping page for details.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unopened products in their original condition.',
    },
  ];

  return (
    <section className="py-16 bg-[#FDF6F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#333333] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center bg-[#A8D5BA]/20 p-4 rounded-lg text-[#333333] font-poppins font-semibold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#A8D5BA]/10 rounded-b-lg text-[#333333] font-poppins">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;