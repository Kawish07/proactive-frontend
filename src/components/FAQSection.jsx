import React, { useState } from 'react';
import { ChevronUp, ChevronDown, HelpCircle, Settings } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      id: 0,
      question: "Why should I use Proactive Cleaners?",
      answer: "With over 15 years of experience in the commercial and construction sectors, we have extensive knowledge and expertise, which means we can deliver above and beyond our client's expectations. We form long-lasting relationships with our clients. Many customers continue to work with us because of the quality that we provide.\n\nWhat makes us different is the true personalisation that you'll receive as well as our commitment to quality and safety through our many accreditations. Experience our superior levels of service today by getting in touch to receive your bespoke quote."
    },
    {
      id: 1,
      question: "Do you have a price list?",
      answer: "We provide customized quotes based on your specific cleaning requirements. Each property and cleaning need is unique, so we assess factors like size, frequency, type of cleaning required, and any special requirements to provide you with the most accurate pricing."
    },
    {
      id: 2,
      question: "How do I book a cleaning service?",
      answer: "Booking a cleaning service is simple! You can contact us through our website contact form, call us directly at 01753 428100, or email us at sales@proactivecleaners.co.uk. We'll discuss your requirements and arrange a convenient time for service."
    },
    {
      id: 3,
      question: "How can I trust your cleaners?",
      answer: "All our cleaning staff are fully vetted, insured, and trained to the highest standards. We conduct thorough background checks and provide comprehensive training. Our team is bonded and insured, giving you complete peace of mind when we're working in your property."
    },
    {
      id: 4,
      question: "Are you accredited?",
      answer: "Yes, we hold multiple industry accreditations and certifications. We are committed to maintaining the highest standards of service and safety, which is reflected in our various professional accreditations and ongoing training programs."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? -1 : id);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                      openFAQ === faq.id 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-6 h-6 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 flex-shrink-0" />
                    )}
                  </button>
                  
                  {/* FAQ Answer */}
                  {openFAQ === faq.id && (
                    <div className="px-6 py-6 bg-green-100">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Header and Image */}
            <div className="space-y-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">FAQ's</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Here are some of our most frequently asked questions
              </h2>

              {/* Image with Stats Overlay */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Commercial cleaning workspace"
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Settings Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Settings className="w-6 h-6 text-gray-600" />
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-2xl px-6 py-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      {/* Stats Text */}
                      <div>
                        <div className="text-green-400 text-3xl font-bold">800+</div>
                        <div className="text-white font-medium">We Solved The Problems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-24 left-8 bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full shadow-lg transition-colors">
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default FAQSection;