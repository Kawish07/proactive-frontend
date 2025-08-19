import React from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import GallerySection from '../components/GallerySection';
import GetQuoteForm from '../components/GetQuoteForm';
import LocationSlider from '../components/LocationSlider';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const locationData = {
    aberdeen: {
        name: 'Aberdeen',
        heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in Aberdeen and surrounding areas.',
        coordinates: { lat: 57.1497, lng: -2.0943 },
        areas: 'Aberdeen, Dyce, Bridge of Don, Westhill, and more.',
        phone: '01224 123456',
        address: 'Aberdeen Office, 1 Union Street, Aberdeen AB10 1TL',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    glasgow: {
        name: 'Glasgow',
        heroImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Glasgow for homes and businesses.',
        coordinates: { lat: 55.8642, lng: -4.2518 },
        areas: 'Glasgow, Paisley, East Kilbride, and more.',
        phone: '0141 123456',
        address: 'Glasgow Office, 10 George Square, Glasgow G2 1DH',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    newcastle: {
        name: 'Newcastle',
        heroImage: 'https://images.unsplash.com/photo-1588776814546-ec7e4b2b1d8e?auto=format&fit=crop&w=800&q=80',
        description: 'Cleaning services for homes and businesses in Newcastle.',
        coordinates: { lat: 54.9783, lng: -1.6174 },
        areas: 'Newcastle, Gateshead, Sunderland, and more.',
        phone: '0191 123456',
        address: 'Newcastle Office, 5 Bigg Market, Newcastle NE1 1UN',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    manchester: {
        name: 'Manchester',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in Manchester and surrounding areas.',
        coordinates: { lat: 53.4808, lng: -2.2426 },
        areas: 'Manchester, Salford, Stockport, and more.',
        phone: '0161 123456',
        address: 'Manchester Office, 20 Piccadilly, Manchester M1 1AN',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    birmingham: {
        name: 'Birmingham',
        heroImage: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Birmingham for homes and businesses.',
        coordinates: { lat: 52.4862, lng: -1.8904 },
        areas: 'Birmingham, Solihull, Wolverhampton, and more.',
        phone: '0121 123456',
        address: 'Birmingham Office, 50 New Street, Birmingham B2 4BA',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    cardiff: {
        name: 'Cardiff',
        heroImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c559?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in Cardiff and South Wales.',
        coordinates: { lat: 51.4816, lng: -3.1791 },
        areas: 'Cardiff, Newport, Swansea, and more.',
        phone: '029 123456',
        address: 'Cardiff Office, 15 Queen Street, Cardiff CF10 2AT',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    bristol: {
        name: 'Bristol',
        heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Bristol and the South West.',
        coordinates: { lat: 51.4545, lng: -2.5879 },
        areas: 'Bristol, Bath, Weston-super-Mare, and more.',
        phone: '0117 123456',
        address: 'Bristol Office, 30 Corn Street, Bristol BS1 1HT',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    brighton: {
        name: 'Brighton',
        heroImage: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in Brighton and Sussex.',
        coordinates: { lat: 50.8225, lng: -0.1372 },
        areas: 'Brighton, Hove, Lewes, and more.',
        phone: '01273 123456',
        address: 'Brighton Office, 100 Western Road, Brighton BN1 2AA',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    surrey: {
        name: 'Surrey',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Comprehensive cleaning solutions for homes and businesses in Surrey. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.2362, lng: -0.5704 },
        areas: 'Guildford, Woking, Epsom, Reigate, Staines, Camberley, Farnham and more.',
        phone: '01483 123456',
        address: 'Surrey Business Centre, 15 High Street, Guildford, Surrey GU1 3AA',
        hours: {
            'Monday to Friday': '7:00AM to 19:00PM',
            'Saturday': '8:00AM to 17:00PM',
            'Sunday': 'Closed'
        }
    },
    'west-london': {
        name: 'West London',
        heroImage: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services for business venues, offices, and homes in West London. Our expert team delivers top-quality results across the area.',
        coordinates: { lat: 51.5074, lng: -0.3278 },
        areas: 'Hammersmith, Fulham, Ealing, Hounslow, Richmond, Brentford, Chiswick and more.',
        phone: '0208 567890',
        address: 'West London Office, 42 King Street, Hammersmith, London W6 0QU',
        hours: {
            'Monday to Saturday': '6:30AM to 20:00PM',
            'Sunday': '9:00AM to 16:00PM'
        }
    },
    oxfordshire: {
        name: 'Oxfordshire',
        heroImage: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Oxfordshire, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.7612, lng: -1.2577 },
        areas: 'Oxford, Banbury, Bicester, Witney, Abingdon, Didcot, Henley-on-Thames and more.',
        phone: '01865 234567',
        address: 'Oxfordshire Centre, 28 George Street, Oxford, Oxfordshire OX1 2AQ',
        hours: {
            'Monday to Saturday': '8:00AM to 18:00PM',
            'Sunday': 'Emergency calls only'
        }
    },
    berkshire: {
        name: 'Berkshire',
        heroImage: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Berkshire, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.4543, lng: -0.9781 },
        areas: 'Reading, Slough, Windsor, Maidenhead, Bracknell, Wokingham, Newbury and more.',
        phone: '0118 345678',
        address: 'Berkshire Hub, 67 Broad Street, Reading, Berkshire RG1 2AP',
        hours: {
            'Monday to Friday': '7:30AM to 18:30PM',
            'Saturday': '8:30AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    hampshire: {
        name: 'Hampshire',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services for homes and businesses in Hampshire. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.0578, lng: -1.3081 },
        areas: 'Southampton, Portsmouth, Winchester, Basingstoke, Andover, Alton, Fareham and more.',
        phone: '023 8456789',
        address: 'Hampshire Office, 91 Above Bar Street, Southampton, Hampshire SO14 7FG',
        hours: {
            'Monday to Saturday': '7:00AM to 19:00PM',
            'Sunday': '10:00AM to 15:00PM'
        }
    },
    buckinghamshire: {
        name: 'Buckinghamshire',
        heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Comprehensive cleaning solutions for homes and businesses in Buckinghamshire. Our team ensures every property is maintained to the highest standards.',
        coordinates: { lat: 51.8168, lng: -0.8252 },
        areas: 'Milton Keynes, High Wycombe, Aylesbury, Amersham, Chesham, Beaconsfield, Marlow and more.',
        phone: '01296 567890',
        address: 'Buckinghamshire Base, 33 Market Square, Aylesbury, Buckinghamshire HP20 1TN',
        hours: {
            'Monday to Friday': '8:00AM to 17:30PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Emergency calls only'
        }
    },
    kent: {
        name: 'Kent',
        heroImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c559?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Kent, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.2787, lng: 0.5217 },
        areas: 'Canterbury, Maidstone, Dover, Folkestone, Margate, Ashford, Dartford and more.',
        phone: '01227 678901',
        address: 'Kent Operations, 54 High Street, Canterbury, Kent CT1 2HJ',
        hours: {
            'Monday to Saturday': '7:30AM to 18:00PM',
            'Sunday': 'Closed'
        }
    },
    essex: {
        name: 'Essex',
        heroImage: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services for homes and businesses in Essex. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.5712, lng: 0.4538 },
        areas: 'Chelmsford, Colchester, Southend-on-Sea, Basildon, Harlow, Brentwood, Braintree and more.',
        phone: '01245 789012',
        address: 'Essex Centre, 76 Duke Street, Chelmsford, Essex CM1 1JY',
        hours: {
            'Monday to Friday': '7:00AM to 18:30PM',
            'Saturday': '8:00AM to 17:00PM',
            'Sunday': '9:00AM to 14:00PM'
        }
    },
    london: {
        name: 'London',
        heroImage: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in London. Serving all boroughs and business districts.',
        coordinates: { lat: 51.5074, lng: -0.1278 },
        areas: 'Central London, North, South, East, West and more.',
        phone: '0207 123456',
        address: 'London Office, 1 Main Street, London, UK',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    sussex: {
        name: 'Sussex',
        heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Expert cleaning services in Sussex for homes and businesses.',
        coordinates: { lat: 50.9280, lng: -0.2044 },
        areas: 'Brighton, Eastbourne, Crawley, Hastings and more.',
        phone: '01273 123456',
        address: 'Sussex Office, 22 High Street, Brighton, Sussex BN1 1AA',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    hertfordshire: {
        name: 'Hertfordshire',
        heroImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        description: 'Cleaning services for homes and businesses in Hertfordshire.',
        coordinates: { lat: 51.8097, lng: -0.2377 },
        areas: 'Watford, St Albans, Hemel Hempstead, Stevenage and more.',
        phone: '01707 123456',
        address: 'Herts Office, 10 Market Street, St Albans, Hertfordshire AL1 3AA',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    middlesex: {
        name: 'Middlesex',
        heroImage: 'https://images.unsplash.com/photo-1465101178521-c1a2b1c6413c?auto=format&fit=crop&w=800&q=80',
        description: 'Professional cleaning services in Middlesex.',
        coordinates: { lat: 51.5272, lng: -0.4416 },
        areas: 'Enfield, Harrow, Uxbridge, Twickenham and more.',
        phone: '0208 123456',
        address: 'Middlesex Office, 5 Main Road, Harrow, Middlesex HA1 1AA',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    bedfordshire: {
        name: 'Bedfordshire',
        heroImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        description: 'Cleaning services for homes and businesses in Bedfordshire.',
        coordinates: { lat: 52.1359, lng: -0.4667 },
        areas: 'Bedford, Luton, Dunstable, Leighton Buzzard and more.',
        phone: '01234 123456',
        address: 'Beds Office, 8 High Street, Bedford, Bedfordshire MK40 1AA',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
};

const LocationPage = () => {
    const { locationId } = useParams();
    const navigate = useNavigate();
    const location = locationData[locationId];

    if (!location) return <div>Location not found</div>;

    // Generate Google Maps embed URL
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address)}&center=${location.coordinates.lat},${location.coordinates.lng}&zoom=12`;

    return (
        <div className="min-h-screen">
            <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${location.heroImage}')` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    {/* Navigation Bar (same as homepage) */}
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
                            <a href="/" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer text-green-400">Home</a>
                            <a href="/about" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">About Us</a>
                            <a href="/services" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Services</a>
                            <a href="/location" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Locations</a>
                            <a href="/sector" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Sectors</a>
                            <a href="/contact" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Contact</a>
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
                    {/* Hero Content */}
                    <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{location.name} Cleaning Services</h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">Quality Cleaning for {location.name}</h2>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed">{location.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/quote" className="bg-green-400 hover:bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/30">
                                Call Us
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#02294D] hover:text-green-800 font-medium">
                    ← Back to Locations
                </button>
            </div>

            {/* Service Details Sections */}
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                {/* Commercial Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Commercial Cleaners in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">Need cleaning services for business venues or offices in Greater/{location.name}? Proactive Cleaners can help, with their wide variety of services for commercial cleaning.</p>
                        <p className="text-lg text-gray-700 mb-6">Our services include hospitality/retail cleaning, office cleaning and school cleaning in {location.name}. Check out our services today.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Commercial Cleaning" className="rounded-2xl w-full max-w-md object-cover" />
                    </div>
                </div>

                {/* Property Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row-reverse items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Property Cleaning in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">There are plenty of properties and buildings in {location.name} that require professional cleaning on a regular basis. Proactive Cleaners offers property cleaning in {location.name}.</p>
                        <p className="text-lg text-gray-700 mb-6">Whether your property in {location.name} needs regular or intensive cleaning, Proactive Cleaning has the right option for you. Our property cleaning services include carpet cleaners, end of tenancy, deep cleaning and garden cleaning.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Property Cleaning" className="rounded-2xl w-full max-w-md object-cover" />
                    </div>
                </div>

                {/* Disinfection Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Disinfection Cleaning in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">COVID-19 has made disinfection cleaning a necessary service for cities across the globe. Proactive Cleaners have provided numerous disinfection services across {location.name}.</p>
                        <p className="text-lg text-gray-700 mb-6">Our disinfection cleaning option includes biohazard cleaning and decontamination. Take a look at our disinfection cleaning option today.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1588776814546-ec7e4b2b1d8e?auto=format&fit=crop&w=800&q=80" alt="Disinfection Cleaning" className="rounded-2xl w-full max-w-md object-cover" />
                    </div>
                </div>
            </div>

            {/* Additional Cleaning Services Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col items-center mb-10">
                    <span className="inline-flex items-center px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-lg mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2z" /></svg>
                        Additional Services
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Additional Cleaning Services in {location.name}</h2>
                    <p className="text-lg text-gray-700 text-center mb-2">Couldn't find what you're looking for? No problem, we have other cleaning services available in {location.name}.<br />Take a look at the additional services we offer below.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Specialist Cleaning Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9V7a5 5 0 0110 0v2" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialist Cleaning</h3>
                        <p className="text-gray-700 mb-4">Within our specialist cleaning service, we provide industrial cleaning and infection control in {location.name}.</p>
                    </div>
                    {/* Construction Cleaning Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9V7a5 5 0 0110 0v2" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Construction Cleaning</h3>
                        <p className="text-gray-700 mb-4">Our after builders cleaning service in {location.name} prioritises safety and cleanliness for all workers within the construction site.</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                </div>
            </div>



            <GallerySection />
            <GetQuoteForm />

            {/* Areas We Serve Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Text */}
                <div className="flex-1">
                    <span className="inline-flex items-center px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-lg mb-6">
                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                        Areas We Serve
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Unbeatable Cleaning<br />In Every Sector</h2>
                    <p className="text-lg text-gray-700 mb-6">As cleaning contractors, our services cover much of Southern England including West and Greater London, Surrey, Hampshire, Hertfordshire, Oxfordshire, Berkshire and Buckinghamshire.</p>
                    <p className="text-lg text-gray-700 mb-6">However, if you're further afield and require our services, please don't hesitate to get in touch; we'll always do our utmost to help.</p>
                    <p className="text-lg font-semibold text-gray-900 mb-6">Click on the map to find out more</p>
                    <div className="flex gap-4 mt-6">
                        <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                    </div>
                </div>
                {/* Right Side - Interactive SVG Map */}
                <div className="flex-1 flex justify-center">
                    <div className="rounded-2xl w-full max-w-xl overflow-hidden bg-blue-50 p-4 flex items-center justify-center">
                        <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                            {/* Example regions - you can add more paths for each county */}
                            <g>
                                {/* Surrey */}
                                <a href="/location/surrey">
                                    <path d="M220,320 L260,320 L260,360 L220,360 Z" fill={locationId === 'surrey' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="240" cy="340" r="10" fill="#22c55e" />
                                </a>
                                {/* West London */}
                                <a href="/location/west-london">
                                    <path d="M180,280 L220,280 L220,320 L180,320 Z" fill={locationId === 'west-london' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="200" cy="300" r="10" fill="#22c55e" />
                                </a>
                                {/* Oxfordshire */}
                                <a href="/location/oxfordshire">
                                    <path d="M260,240 L300,240 L300,280 L260,280 Z" fill={locationId === 'oxfordshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="280" cy="260" r="10" fill="#22c55e" />
                                </a>
                                {/* Berkshire */}
                                <a href="/location/berkshire">
                                    <path d="M220,280 L260,280 L260,320 L220,320 Z" fill={locationId === 'berkshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="240" cy="300" r="10" fill="#22c55e" />
                                </a>
                                {/* Hampshire */}
                                <a href="/location/hampshire">
                                    <path d="M220,360 L260,360 L260,400 L220,400 Z" fill={locationId === 'hampshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="240" cy="380" r="10" fill="#22c55e" />
                                </a>
                                {/* Buckinghamshire */}
                                <a href="/location/buckinghamshire">
                                    <path d="M300,240 L340,240 L340,280 L300,280 Z" fill={locationId === 'buckinghamshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="320" cy="260" r="10" fill="#22c55e" />
                                </a>
                                {/* Kent */}
                                <a href="/location/kent">
                                    <path d="M340,280 L380,280 L380,320 L340,320 Z" fill={locationId === 'kent' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="360" cy="300" r="10" fill="#22c55e" />
                                </a>
                                {/* Essex */}
                                <a href="/location/essex">
                                    <path d="M380,240 L420,240 L420,280 L380,280 Z" fill={locationId === 'essex' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="400" cy="260" r="10" fill="#22c55e" />
                                </a>
                                {/* London */}
                                <a href="/location/london">
                                    <path d="M240,160 L280,160 L280,200 L240,200 Z" fill={locationId === 'london' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="260" cy="180" r="10" fill="#22c55e" />
                                </a>
                                {/* Sussex */}
                                <a href="/location/sussex">
                                    <path d="M180,360 L220,360 L220,400 L180,400 Z" fill={locationId === 'sussex' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="200" cy="380" r="10" fill="#22c55e" />
                                </a>
                                {/* Hertfordshire */}
                                <a href="/location/hertfordshire">
                                    <path d="M260,160 L300,160 L300,200 L260,200 Z" fill={locationId === 'hertfordshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="280" cy="180" r="10" fill="#22c55e" />
                                </a>
                                {/* Middlesex */}
                                <a href="/location/middlesex">
                                    <path d="M300,200 L340,200 L340,240 L300,240 Z" fill={locationId === 'middlesex' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="320" cy="220" r="10" fill="#22c55e" />
                                </a>
                                {/* Bedfordshire */}
                                <a href="/location/bedfordshire">
                                    <path d="M220,200 L260,200 L260,240 L220,240 Z" fill={locationId === 'bedfordshire' ? '#22c55e' : '#38bdf8'} stroke="#02294D" strokeWidth="2" />
                                    <circle cx="240" cy="220" r="10" fill="#22c55e" />
                                </a>
                            </g>
                            {/* Add more counties/regions as needed */}
                        </svg>
                    </div>
                </div>
            </div>
            <LocationSlider />
            {/* Local Information Section */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Check out our local information below
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Information */}
                        <div className="space-y-8">
                            {/* Coverage Areas */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    We cover areas in {location.name}:
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {location.areas}
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 text-green-600 flex-shrink-0 mt-1">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">{location.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 text-green-600 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 002-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-green-600 hover:text-green-700 font-semibold">
                                            {location.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-6 h-6 text-green-600">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12,6 12,12 16,14" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Opening Hours:</h3>
                                </div>
                                <div className="space-y-3">
                                    {Object.entries(location.hours).map(([day, time]) => (
                                        <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                            <span className="font-medium text-gray-700">{day}</span>
                                            <span className={`font-semibold ${time === 'Closed' || time === 'Emergency calls only' ? 'text-red-600' : 'text-green-600'}`}>
                                                {time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center lg:text-left">
                                <p className="text-lg text-gray-700 mb-6">
                                    Interested in our services? Why not get a quote from us using the link below?
                                    Or alternatively, Call us today on <strong>{location.phone}</strong> to discuss your requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/quote" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition flex items-center justify-center gap-2">
                                        Get a Quote <span aria-hidden="true">↗</span>
                                    </a>
                                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 002-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call {location.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Interactive Map */}
                        <div className="lg:sticky lg:top-8">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600">
                                    <h3 className="text-xl font-bold text-white mb-2">Our Location in {location.name}</h3>
                                    <p className="text-blue-100">Click on the map to get directions</p>
                                </div>

                                {/* Google Maps Embed */}
                                <div className="relative h-96 bg-gray-200">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(location.address)}&center=${location.coordinates.lat},${location.coordinates.lng}&zoom=13`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`${location.name} Location Map`}
                                        className="w-full h-full"
                                    />

                                    {/* Fallback for when API key is not available */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-2">Interactive Map</h4>
                                            <p className="text-gray-600 mb-4">Find us in {location.name}</p>
                                            <a
                                                href={`https://www.google.com/maps/place/${encodeURIComponent(location.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                View on Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Footer */}
                                <div className="p-4 bg-gray-50 border-t">
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>📍 Serving {location.name} & surrounding areas</span>
                                        <span className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            Available Now
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-4 shadow text-center">
                                    <div className="text-2xl font-bold text-green-600">24/7</div>
                                    <div className="text-sm text-gray-600">Emergency Service</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow text-center">
                                    <div className="text-2xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-gray-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
            <FAQSection />
        </div >
    );
};

export default LocationPage;