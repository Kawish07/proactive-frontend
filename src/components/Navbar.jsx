import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white text-gray-800 px-8 py-4 flex items-center justify-between shadow-sm">
    <div className="flex items-center">
      <span className="text-l font-bold text-green-900">PROACTIVE GROUP</span>
    </div>
    
    <div className="hidden md:flex">
      <div className="text-sm text-gray-600 mr-10">
        offer Facilities Management, Construction and Extreme Cleaning Services – Fully accredited to ISO 9001, 14001 and 45001 standards.
      </div>
      
      <div className="border-l border-gray-200 pl-6 ml-4">
        <a 
          href="tel:01753428151" 
          className="text-blue-900 font-bold hover:text-green-500 transition-colors flex items-center gap-2"
        >
          <span className="text-xl">☎</span>
          <span>01753 428151</span>
        </a>
        
      </div>
    </div>
    
    <button className="md:hidden text-gray-800">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
);

export default Navbar;