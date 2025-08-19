import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import QuoteModal from './QuoteModal';

const LocationSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const markers = [
    { id: 1, top: '15%', right: '25%', location: 'Aberdeen', slug: 'aberdeen' },
    { id: 2, top: '25%', left: '20%', location: 'Glasgow', slug: 'glasgow' },
    { id: 3, top: '35%', right: '15%', location: 'Newcastle', slug: 'newcastle' },
    { id: 4, top: '45%', left: '25%', location: 'Manchester', slug: 'manchester' },
    { id: 5, top: '55%', right: '30%', location: 'Birmingham', slug: 'birmingham' },
    { id: 6, top: '65%', left: '15%', location: 'Cardiff', slug: 'cardiff' },
    { id: 7, top: '75%', right: '25%', location: 'London', slug: 'london' },
    { id: 8, bottom: '15%', left: '30%', location: 'Bristol', slug: 'bristol' },
    { id: 9, bottom: '10%', right: '20%', location: 'Brighton', slug: 'brighton' }
  ];

  const handleMarkerClick = (slug) => {
    navigate(`/location/${slug}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 tracking-tight">
            Where You Can Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Proactive Cleaners now provide commercial cleaning services across the 
              entire UK. While we remain specialists in the South East — including 
              Oxfordshire, Buckinghamshire, Surrey and London — our team can now 
              travel nationwide for specialist projects or long-term contracts.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We support businesses, homes, construction sites and warehouses across 
              the country. Our experienced teams are based in Luton, Swindon, Oxford, 
              Reading, West London and surrounding regions, and we now serve clients 
              from Cornwall to Scotland.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              If you're looking for reliable, high-quality cleaning services, you're in 
              the right place. No matter where you're located in the UK, we're ready to 
              support your cleaning needs.
            </p>

            <div className="flex gap-4 pt-8">
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://wa.me/01753428100" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300"
              >
                Call Us
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a6 6 0 11-8.48-8.48 6 6 0 018.48 8.48z" />
                </svg>
              </a>
            </div>
          </div>

          {/* UK Map */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* UK Map Shape */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl">
                {/* Custom UK shape using CSS */}
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full"
                  style={{ clipPath: 'inset(0)' }}
                >
                  <defs>
                    <linearGradient id="ukGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  
                  {/* UK mainland shape */}
                  <path
                    d="M150 50 C170 45, 190 48, 210 45 C230 42, 250 40, 270 45 C290 50, 310 55, 320 70 C325 85, 322 100, 320 115 C318 130, 315 145, 310 160 C305 175, 300 190, 295 205 C290 220, 285 235, 280 250 C275 265, 270 280, 265 295 C260 310, 255 325, 250 340 C245 355, 240 370, 235 385 C230 400, 225 415, 220 430 C210 440, 195 435, 180 430 C165 425, 150 420, 135 415 C120 410, 105 405, 95 395 C85 385, 90 370, 95 355 C100 340, 105 325, 110 310 C115 295, 120 280, 125 265 C130 250, 135 235, 140 220 C145 205, 150 190, 155 175 C160 160, 165 145, 162 130 C159 115, 156 100, 153 85 C150 70, 147 55, 150 50 Z"
                    fill="url(#ukGradient)"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Scotland */}
                  <path
                    d="M180 20 C200 15, 220 18, 240 20 C255 25, 265 35, 270 50 C265 65, 255 75, 245 80 C235 85, 225 82, 215 80 C205 78, 195 75, 185 72 C175 68, 170 60, 172 50 C174 40, 177 30, 180 20 Z"
                    fill="url(#ukGradient)"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Northern Ireland */}
                  <circle cx="120" cy="120" r="25" fill="url(#ukGradient)" className="drop-shadow-lg" />
                </svg>

                {/* Location Markers */}
                {markers.map((marker) => (
                  <div
                    key={marker.id}
                    className="absolute w-6 h-6 bg-white border-4 border-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg group"
                    style={{
                      top: marker.top,
                      left: marker.left,
                      right: marker.right,
                      bottom: marker.bottom
                    }}
                    onClick={() => handleMarkerClick(marker.slug)}
                    title={`Go to ${marker.location}`}
                  >
                    {/* Inner dot */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {marker.location}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                    </div>
                  </div>
                ))}

                {/* Pulse animation for emphasis */}
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Floating elements for visual enhancement */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-yellow-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-transparent rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LocationSection;