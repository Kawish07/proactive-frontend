import { useState } from 'react';
import { Star, Phone, Mail, MapPin, ChevronDown } from 'react-feather';
import { Contact, Target } from 'lucide-react';
import { ArrowUpRight, Award, User, Settings, CheckCircle } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialCard';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import ProcessSection from '../components/ProcessSection';
import LocationSlider from '../components/LocationSlider';
import QuoteModal from '../components/QuoteModal';

const Home = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };
    const steps = [
        {
            number: '01',
            title: 'Initial\nConsultation',
            description: 'Understanding your specific cleaning requirements and site assessment',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Customised\nPlan',
            description: 'Creating a tailored cleaning plan that meets your specific needs and budget',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.3" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Professional\nCleaning',
            description: 'Our trained professionals carry out the cleaning according to the customized plan',
            icon: (
                <svg className="w-14 h-14" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.36 2.72L20.78 4.14l-1.42 1.42c-.22-.22-.48-.42-.78-.58V9c0 1.1-.9 2-2 2s-2-.9-2-2V4.98c-.3.16-.56.36-.78.58L12.36 4.14 13.78 2.72c1.58-1.58 4.14-1.58 5.72 0zM9 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM6 16.5c0-.83.67-1.5 1.5-1.5S9 15.67 9 16.5 8.33 18 7.5 18 6 17.33 6 16.5zm7.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S12 17.33 12 16.5s.67-1.5 1.5-1.5zm4.5 1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" />
                </svg>
            ),
            isCenter: true
        },
        {
            number: '04',
            title: 'Quality\nInspection',
            description: 'Thorough quality check to ensure all work meets our high standards',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <circle cx="12" cy="12" r="3" fill="white" opacity="0.8" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Feedback and\nFollow-Up',
            description: 'Collecting feedback and ensuring complete satisfaction with our services',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10z" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            )
        }
    ];

    const industries = [
        {
            name: 'Residential',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            )
        },
        {
            name: 'Office & Business',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                    <rect x="14" y="4" width="6" height="2" fill="white" />
                    <text x="17" y="5.5" fill="currentColor" fontSize="3" fontWeight="bold" textAnchor="middle">OFFICE</text>
                </svg>
            )
        },
        {
            name: 'Government',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L2 6v2h20V6l-10-5zM2 10v2h2v6H2v2h20v-2h-2v-6h2v-2H2zm6 8V12h2v6H8zm4 0V12h2v6h-2zm4 0V12h2v6h-2z" />
                </svg>
            )
        },
        {
            name: 'Education',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
            )
        },
        {
            name: 'Healthcare',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    <path d="M16 8h-3V5h-2v3H8v2h3v3h2v-3h3V8z" fill="white" />
                </svg>
            )
        },
        {
            name: 'Hospitality',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73v2.53l9 3.44v9.3H2v-9.3l9-3.44V5.73c-.6-.35-1-.99-1-1.73 0-1.1.9-2 2-2zm0 15c-1.66 0-3-1.34-3-3 0-1.12.61-2.1 1.5-2.61V9.5l-8.5 3.25V20h20v-7.25L13.5 9.5v1.89c.89.51 1.5 1.49 1.5 2.61 0 1.66-1.34 3-3 3z" />
                    <circle cx="12" cy="14" r="2" fill="white" />
                </svg>
            )
        },
        {
            name: 'Retail',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    <path d="M12 6h6v2h-6V6zm0 3h6v2h-6V9z" fill="white" opacity="0.7" />
                </svg>
            )
        },
        {
            name: 'Industrial',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" transform="rotate(45 12 12)" />
                    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
            )
        }
    ];


    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection />
            <AboutSection />

            {/* Trusted Brands Section */}
            {/* Trusted Brands Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
                            Recognised as a Leading Cleaning Company
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'PARADHNS', color: 'text-blue-800' },
                            { name: 'NHS', color: 'text-blue-600' },
                            { name: 'HAVAS', color: 'text-red-600' },
                            { name: 'MORGAN', color: 'text-gray-800' },
                            { name: 'SINDAIL', color: 'text-indigo-800' },
                            { name: 'GROUP', color: 'text-gray-700' },
                            { name: 'Aktronique', color: 'text-purple-600' },
                            { name: 'CSEORNE', color: 'text-green-700' },
                            { name: 'KIER', color: 'text-orange-600' },
                            { name: 'savills', color: 'text-red-700' },
                            { name: 'METROPOLITAN', color: 'text-blue-900' },
                            { name: 'POLICE', color: 'text-blue-800' },
                            { name: 'UNIVERSITY OF', color: 'text-gray-800' },
                            { name: 'OXFORD', color: 'text-blue-900' },
                            { name: 'eCourse.CO.UK', color: 'text-green-600' },
                            { name: 'LADUREE', color: 'text-pink-600' },
                        ].map((brand, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                            >
                                <span className={`${brand.color} font-bold text-lg md:text-xl`}>
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />

            {/* Stats Section */}
            <section className="py-20" style={{ background: 'linear-gradient(90deg, #02294D 0%, #02294D 100%)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Dedicated Attention to Detail Every Step of the Way
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="space-y-12">
                            <div className="text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <Star className="w-8 h-8" style={{ color: '#02294D' }} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Customer Satisfaction</h3>
                                <p className="text-white leading-relaxed">
                                    At Proactive Cleaners, your satisfaction is our priority, with consistent quality and reliable service every time
                                </p>
                            </div>

                            <div className="text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <svg className="w-8 h-8" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Fully Insured & Certified</h3>
                                <p className="text-white leading-relaxed">
                                    Ensuring professional, reliable service with complete peace of mind
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center shadow-2xl">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold text-green-300 mb-1">85+</div>
                                        <div className="text-sm text-blue-100">Estate Agents Worked With</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-300 mb-1">1,500+</div>
                                        <div className="text-sm text-blue-100">Projects Completed</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-300 mb-1">80%</div>
                                        <div className="text-sm text-blue-100">Clients Delivered from Referrals</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                    <Phone className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Emergency Response Team</h3>
                                <p className="text-white leading-relaxed">
                                    Our emergency response team is ready to handle any situation with speed and precision
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                    <svg className="w-8 h-8" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Operating 24/7</h3>
                                <p className="text-white leading-relaxed">
                                    Operating 24/7 to provide reliable cleaning services whenever you need them
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-blue-500 text-white p-2 rounded-full">
                            <Target size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Why Choose Us</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large image - left side */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                    alt="Proactive Cleaners professional worker"
                                    className="w-full h-96 object-cover"
                                />
                            </div>

                            {/* Right column with stats and smaller image */}
                            <div className="space-y-4">
                                {/* Stats card */}
                                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                                    <div className="text-gray-600 font-medium mb-3">Years of Experience</div>
                                    <p className="text-sm text-gray-500 mb-4">
                                        With over 15 years of experience, we deliver trusted and expert cleaning solutions
                                    </p>
                                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 mx-auto transition-colors">
                                        Get a Quote
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>

                                {/* Small image */}
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                        alt="Professional window cleaning"
                                        className="w-full h-32 object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Unbeatable Cleaning In Every Sector
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Our experience and expertise mean that quantity surveyors, site
                                managers, office managers, clinic and education decision-makers
                                regularly seek out Proactive Cleaners as they can trust us to deliver.
                            </p>

                            {/* Feature list */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <Award size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Experts In What We Do</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <User size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Leading The Way In Accreditations</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <Settings size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Specialist Services And Equipment</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Projects Managed To Perfection</span>
                                </div>
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

            <ProcessSection />

            {/* Gallery Section */}
            <GallerySection />

            {/* Location Section */}
            <LocationSection />
            <LocationSlider />

            {/* Industries Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-11a1 1 0 000 2h3a1 1 0 000-2h-3zm0 3a1 1 0 000 2h3a1 1 0 000-2h-3zm0 3a1 1 0 000 2h3a1 1 0 000-2h-3z" clipRule="evenodd" />
                            </svg>
                            Industries
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Industries We Cover</h2>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.name}
                                className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                                    {industry.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Phone Number Button */}
                    <div className="text-center">
                        <button className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            01753 428151
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <TestimonialsSection />
            <ContactSection />
            <FAQSection />
            <BlogSection />
            {/* Quote Modal */}
            <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </div>

    );
};

export default Home;