import { Phone, ArrowUpRight, User } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import { useState } from 'react';

const ProactiveCleanersAbout = () => {

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <User size={20} />
          </div>
          <span className="text-gray-700 font-medium">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Story Of<br />
              Proactive Cleaners
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our founder spent many years working in the construction and commercial
                sectors, with an extensive skillset including surveying, project management,
                design and facilities management.
              </p>

              <p>
                Witnessing first-hand the many frustrations and logistical challenges
                surrounding cleaning across a range of diverse industries and sites, our
                founder saw a chance to create a service that could make a difference.
              </p>

              <p>
                With over 15 years of experience and a passion for service excellence,
                Proactive Cleaners was born.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get a Quote
                <ArrowUpRight size={18} />
              </button>

              {/* WhatsApp button removed, only floating button in App.jsx */}
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-4">
            {/* Top Image - Workers on lift */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Construction workers on elevated platform"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Bottom Row - Two smaller images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Professional cleaner working on glass doors"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Window cleaning professional at work"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-6 left-6">
          <button className="bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowUpRight size={20} className="text-gray-600 rotate-45" />
          </button>
        </div>
      </div>
      {/* Quote Modal */}
      <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default ProactiveCleanersAbout;