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
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors relative">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
          </svg>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;