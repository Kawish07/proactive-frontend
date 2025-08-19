import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceData } from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import GetQuoteForm from '../components/GetQuoteForm';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialCard';
import ContactSection from '../components/ContactSection';
import { Contact } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceData[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen">
      {/* Service-specific Hero Section with Home Theme */}
      <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${service.heroImage}')` }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navigation Bar (same as home) */}
          <nav className="px-8 py-8 flex items-center justify-between  backdrop-blur-sm rounded-t-3xl" style={{background: 'linear-gradient(90deg, #02294D 0%, #02294D 100%)'}}>
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
              <a href="/" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer text-green-400">Home</a>
              <a href="/about" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">About Us</a>
              <a href="/services" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Services</a>
              <a href="/location" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Locations</a>
              <a href="/sector" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Sectors</a>
              <a href="/contact" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Contact</a>
              <a href="/contact" className="bg-green-400 hover:bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
          {/* Hero Content */}
          <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">{service.subtitle}</h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">Get a Quote</button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm16 0h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Services
        </button>
      </div>

      {/* Enhanced Service Details Section */}
      <section className="max-w-6xl mx-auto mt-8 p-0">
        <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Why Choose Proactive Cleaners For {service.title}</h2>
            <h3 className="text-xl font-semibold text-green-700 mb-4">{service.subtitle}</h3>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Contract Cleaning Services</h4>
              <p className="text-md text-gray-600 mb-4">Have your communal spaces regularly cleaned with our contract cleaning services. Please contact us to get a no-obligation, bespoke quote.</p>
              <ul className="space-y-2">
                {service.features && service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500 mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={service.heroImage} alt={service.title} className="rounded-2xl w-full max-w-xs object-cover" />
          </div>
        </div>
      </section>

      <ProcessSection />
      <GetQuoteForm />
      <GallerySection />
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default ServicePage;
