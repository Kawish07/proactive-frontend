import React, { useState } from 'react';
import { Phone } from 'react-feather';
import { Link } from 'react-router-dom';

const serviceDetails = {
  commercial: {
    title: 'Commercial Cleaning',
    description: 'We specialize in delivering top-quality commercial cleaning services to keep your business spotless and inviting. Our tailored solutions ensure a clean, healthy, and productive environment, from office spaces to retail establishments. Trust our expert team to maintain the highest standards of cleanliness, helping your business shine every day.',
    phone: '01753 428100',
  },
  property: {
    title: 'Property Cleaning',
    description: 'Expert property cleaning for residential and commercial spaces. Our team ensures every property is maintained to the highest standards, providing a clean and safe environment for tenants and owners alike.',
    phone: '01753 428200',
  },
  construction: {
    title: 'Construction Cleaning',
    description: 'Post-construction cleaning to make your new build or renovation spotless and ready for use. We remove dust, debris, and ensure a pristine finish for your project.',
    phone: '01753 428300',
  },
  specialist: {
    title: 'Specialist Cleaning',
    description: 'Specialist cleaning for unique requirements, including biohazard, industrial, and high-level cleaning. Our certified team handles complex jobs with safety and expertise.',
    phone: '01753 428400',
  },
  disinfection: {
    title: 'Disinfection Cleaning',
    description: 'Advanced disinfection and sanitization for health-critical environments. We use hospital-grade products and techniques to ensure safety and compliance.',
    phone: '01753 428500',
  },
};
const locationAreas = [
  { name: "London", id: "london" },
  { name: "Surrey", id: "surrey" },
  { name: "Berkshire", id: "berkshire" },
  { name: "Hampshire", id: "hampshire" },
  { name: "Buckinghamshire", id: "buckinghamshire" },
  { name: "Oxfordshire", id: "oxfordshire" },
  { name: "Kent", id: "kent" },
  { name: "Sussex", id: "sussex" },
  { name: "Hertfordshire", id: "hertfordshire" },
  { name: "Essex", id: "essex" },
  { name: "Middlesex", id: "middlesex" },
  { name: "Bedfordshire", id: "bedfordshire" }
];

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  title = "The Best Cleaning Service Solutions",
  subtitle = "Quality Cleaning for Homes, Businesses & Sites",
  description = "We provide bespoke cleaning solutions & services that exceed your expectations covering the Residential, Commercial, Specialist & Construction Sectors.",
  showQuoteButton = true
}) => {
  const [selectedService, setSelectedService] = useState('commercial');

  return (
    <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4 ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Single Navigation Bar */}
        <nav className="px-8 py-8 flex items-center justify-between" style={{ backgroundColor: '#02294D' }}>
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
            <Link
              to="/"
              className={`text-white hover:text-green-300 transition-colors font-medium cursor-pointer text-green-400`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-[800px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="flex min-h-[400px]">
                  {/* Left Side - Service Categories */}
                  <div className="w-1/3 bg-gray-50 p-8 rounded-l-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Our Services</h3>
                    <div className="space-y-4">
                      {Object.keys(serviceDetails).map((key) => (
                        <div
                          key={key}
                          className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${selectedService === key ? 'bg-gray-200' : ''}`}
                          onClick={() => setSelectedService(key)}
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-blue-500 rounded"></div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{serviceDetails[key].title.split(' ')[0]}</div>
                            <div className="text-sm text-gray-500">Cleaning</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Main Content */}
                  <div className="w-2/3 p-8">
                    {/* Header with selected service */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-green-500 rounded"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{serviceDetails[selectedService].title}</h3>
                        <div className="w-6 h-6 bg-green-500 rounded-sm ml-auto"></div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {serviceDetails[selectedService].description}
                      </p>
                      <div className="flex justify-between items-center mb-6">
                        <Link
                          to="/services"
                          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <span className="text-gray-400">📞 {serviceDetails[selectedService].phone}</span>
                      </div>
                    </div>

                    {/* Sector Icons Grid - Three Rows */}
                    <div className="space-y-4">
                      {/* First Row */}
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Factory</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Retail</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">School</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Hospitality</div>
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Office</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Warehouse</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Leisure</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">University</div>
                        </div>
                      </div>

                      {/* Third Row - Data Centre */}
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">Data Centre</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <Link
                to="/location"
                className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer flex items-center gap-1"
              >
                Locations
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Locations Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-[1000px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Areas We Cover</h3>
                    <p className="text-gray-600">Professional cleaning services throughout South East England</p>
                  </div>

                  {/* Horizontal Location Areas */}
                  <div className="grid grid-cols-6 gap-4 mb-8">
                    {locationAreas.map((location, index) => (
                      <Link
                        key={index}
                        to={`/location/${location.id}`}
                        className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-all duration-300 cursor-pointer border border-green-100 hover:shadow-md hover:scale-105 block"
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-3">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                          <span className="font-bold text-gray-800 text-sm">{location.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Featured Coverage Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">South East England Coverage</h3>
                          <p className="text-gray-600">Serving communities across the region</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-500 mb-2">📞 01753 428100</div>
                        <div className="text-sm text-gray-400">Available 24/7</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Our commitment to excellence has earned us a reputation as the go-to provider of top-quality extreme cleaning services throughout the South East of England. We provide reliable, professional cleaning services to residential, commercial, and specialist sectors across all covered areas.
                    </p>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="bg-white/50 p-4 rounded-lg text-center hover:bg-white/80 transition-colors">
                        <div className="w-10 h-10 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-2">
                          <div className="w-5 h-5 bg-white rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">Emergency Response</div>
                      </div>

                      <div className="bg-white/50 p-4 rounded-lg text-center hover:bg-white/80 transition-colors">
                        <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-2">
                          <div className="w-5 h-5 bg-white rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">Fully Insured</div>
                      </div>

                      <div className="bg-white/50 p-4 rounded-lg text-center hover:bg-white/80 transition-colors">
                        <div className="w-10 h-10 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
                          <div className="w-5 h-5 bg-white rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">24/7 Available</div>
                      </div>

                      <div className="bg-white/50 p-4 rounded-lg text-center hover:bg-white/80 transition-colors">
                        <div className="w-10 h-10 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-2">
                          <div className="w-5 h-5 bg-white rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">Expert Team</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Link
                        to="/locations"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        View All Coverage Areas
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/sector"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Sectors
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="ml-6 bg-green-400 hover:bg-green-500 text-[#02294D] font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2"
            >
              Get a Quote <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Main Content with Glassy Sidebar */}
        <div className="flex-grow flex items-center relative">
          {/* Smaller Glassy Sidebar - Middle Left */}
          <div className="hidden lg:flex absolute right-40 top-1/2 transform -translate-y-1/2 w-48 bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <div className="space-y-6">
              {[
                'Customer Satisfaction',
                'Emergency Response Team',
                'Fully Insured & Certified',
                'Operating 24/7'
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">
              {subtitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {showQuoteButton && (
                <Link
                  to="/quote"
                  className="ml-6 bg-[#02294D] hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2"
                >
                  Get a Quote <span aria-hidden="true">↗</span>
                </Link>
              )}
              <a
                href="https://wa.me/447123456789" // Replace with your WhatsApp number
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;