import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded mr-3"></div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">PROACTIVE</h3>
              <h3 className="text-xl font-bold text-gray-800 -mt-1">CLEANERS.</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Proactive Cleaners delivers reliable, high-quality cleaning services tailored to meet your commercial and industrial needs.
          </p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Business Hours</h4>
            <p className="text-gray-600 text-sm">Office hours weekdays: 09:00 – 18:00</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Contact us</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>01753 428151</p>
              <p>sales@proactivecleaners.co.uk</p>
              <p>Futureworks, 2 Brunel Way., Slough</p>
              <p>SL1 1XL, United Kingdom</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Follow Us</h4>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">@</span>
              </div>
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white text-sm">♪</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/location" className="hover:text-blue-600 transition-colors">Areas We Cover</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/services/construction-cleaning" className="hover:text-blue-600 transition-colors">Construction Cleaning</Link></li>
            <li><Link to="/services/commercial-cleaning" className="hover:text-blue-600 transition-colors">Commercial Cleaning</Link></li>
            <li><Link to="/services/property-cleaning" className="hover:text-blue-600 transition-colors">Property Management Cleaning</Link></li>
            <li><Link to="/services/disinfection-cleaning" className="hover:text-blue-600 transition-colors">Disinfection & Decontamination</Link></li>
            <li><Link to="/services/specialist-cleaning" className="hover:text-blue-600 transition-colors">Specialist Cleaning</Link></li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">About Company</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy/GDPR Policy</Link></li>
            <li><Link to="/health-safety" className="hover:text-blue-600 transition-colors">Health and Safety</Link></li>
            <li><Link to="/quality-control" className="hover:text-blue-600 transition-colors">Quality Control</Link></li>
            <li><Link to="/faqs" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Area We Cover with Map */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Area We Cover</h4>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li>Bedfordshire</li>
            <li>Berkshire</li>
            <li>Buckinghamshire</li>
            <li>West London</li>
            <li>Hampshire</li>
            <li>Hertfordshire</li>
            <li>Oxfordshire</li>
            <li>Surrey</li>
          </ul>
          
          {/* UK Map */}
          <div className="relative">
            <svg viewBox="0 0 200 240" className="w-48 h-60">
              {/* UK Outline */}
              <path
                d="M50 40 L60 20 L80 15 L100 20 L120 25 L140 30 L150 40 L160 60 L155 80 L150 100 L145 120 L140 140 L135 160 L130 180 L120 200 L100 210 L80 205 L60 195 L45 180 L40 160 L35 140 L30 120 L25 100 L20 80 L25 60 L35 45 Z"
                fill="#3B82F6"
                className="opacity-80"
              />
              
              {/* Location Markers */}
              <circle cx="70" cy="80" r="3" fill="#1F2937" />
              <circle cx="90" cy="75" r="3" fill="#1F2937" />
              <circle cx="85" cy="95" r="3" fill="#1F2937" />
              <circle cx="110" cy="85" r="3" fill="#1F2937" />
              <circle cx="120" cy="100" r="3" fill="#1F2937" />
              <circle cx="95" cy="110" r="3" fill="#1F2937" />
              <circle cx="75" cy="120" r="3" fill="#1F2937" />
              <circle cx="105" cy="125" r="3" fill="#1F2937" />
              <circle cx="115" cy="140" r="3" fill="#1F2937" />
              <circle cx="85" cy="135" r="3" fill="#1F2937" />
              
              {/* Scotland */}
              <path
                d="M80 15 L85 10 L95 8 L105 12 L115 18 L120 25 L125 35 L130 45 L125 55 L120 50 L115 45 L110 40 L105 35 L100 30 L95 25 L90 22 L85 20 Z"
                fill="#3B82F6"
                className="opacity-80"
              />
              <circle cx="100" cy="30" r="3" fill="#1F2937" />
              
              {/* Northern Ireland */}
              <path
                d="M35 70 L40 65 L48 68 L52 75 L48 82 L42 85 L36 82 L32 78 Z"
                fill="#3B82F6"
                className="opacity-80"
              />
              <circle cx="42" cy="75" r="3" fill="#1F2937" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;