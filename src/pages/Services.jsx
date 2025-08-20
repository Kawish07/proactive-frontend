import React from 'react';
import ServicesSection, { serviceData } from '../components/ServicesSection';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with nav links */}
      <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <nav className="px-8 py-8 flex items-center justify-between bg-[#02294D] backdrop-blur-sm rounded-t-3xl">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-blue-600 rounded-full relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">
                    <span className="text-green-400">PROACTIVE</span>
                  </div>
                  <div className="font-bold text-xl -mt-1">
                    <span className="text-white">CLEANERS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Home</Link>
              <Link to="/about" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">About Us</Link>
              <Link to="/services" className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer">Services</Link>
              <Link to="/location" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Locations</Link>
              <Link to="/sector" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Sectors</Link>
              <Link to="/contact" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Contact</Link>
              <Link to="/quote" className="bg-green-400 hover:bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></Link>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
          <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Our Cleaning Services</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">Quality Cleaning for Every Need</h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">Explore our full range of cleaning services for commercial, property, construction, specialist, and disinfection needs. Click any card below to learn more about each service.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">Get a Quote</Link>
              {/* WhatsApp button removed, only floating button in App.jsx */}
            </div>
          </div>
        </div>
      </section>

      {/* All Service Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(serviceData).map(([key, service], idx) => (
          <Link to={`/service/${key}`} key={key} className="block">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 h-80 hover:scale-105 z-10">
              <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${service.heroImage})` }}></div>
              <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/40"></div>
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-6">
                  {/* You can add an icon here if available in serviceData */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-2">{service.title}</h3>
                  <p className="text-sm mb-4">{service.subtitle}</p>
                  <span className="inline-block bg-green-400 text-blue-900 font-bold py-1 px-4 rounded-full text-xs">Learn More</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
