import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    service: '',
    message: '',
    agreedToPolicy: true
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        // Handle error
      }
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto">
        <div className="bg-[#02294D] rounded-2xl p-6 border border-blue-700/30 shadow-2xl overflow-y-auto" style={{maxHeight: '80vh'}}>
          <h1 className="text-3xl font-bold text-white text-center mb-6">Get a Quote</h1>
          <div className="space-y-6">
            {/* First row - Name, Email, Phone */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Second row - Address, Postcode, Service */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address*"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode*"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled className="bg-blue-800">-- service required --</option>
                  <option value="commercial-cleaning" className="bg-blue-800">Commercial Cleaning</option>
                  <option value="residential-cleaning" className="bg-blue-800">Residential Cleaning</option>
                  <option value="builders-clean" className="bg-blue-800">Builders Clean</option>
                  <option value="deep-cleaning" className="bg-blue-800">Deep Cleaning</option>
                  <option value="carpet-upholstery-cleaning" className="bg-blue-800">Carpet & Upholstery Cleaning</option>
                  <option value="window-cleaning" className="bg-blue-800">Window Cleaning</option>
                  <option value="pressure-washing" className="bg-blue-800">Pressure Washing</option>
                  <option value="specialist-cleaning" className="bg-blue-800">Specialist Cleaning</option>
                  <option value="covid-disinfection" className="bg-blue-800">COVID Disinfection</option>
                  <option value="waste-management" className="bg-blue-800">Waste Management</option>
                  <option value="other" className="bg-blue-800">Other</option>
                </select>
              </div>
            </div>

            {/* Message field */}
            <div>
              <textarea
                name="message"
                placeholder="Please explain how can we help you"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none"
              />
            </div>

            {/* Privacy policy checkbox */}
            <div className="flex items-center space-x-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToPolicy"
                  checked={formData.agreedToPolicy}
                  onChange={handleInputChange}
                  className="sr-only"
                  required
                />
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  formData.agreedToPolicy 
                    ? 'bg-blue-500 border-blue-500' 
                    : 'border-blue-400 bg-transparent'
                }`}>
                  {formData.agreedToPolicy && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="ml-3 text-blue-100">
                  I agree to the site's <span className="text-blue-300 underline">Privacy Policy</span>
                </span>
              </label>
            </div>

            {/* Success message */}
            {showSuccess && (
              <div className="bg-gray-800/90 rounded-lg p-4 flex items-center space-x-3 border border-gray-600">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold">Success!</p>
                  <p className="text-gray-300 text-sm">Your quote request has been submitted.</p>
                </div>
                <div className="text-right text-xs text-gray-400 ml-auto">
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span>CLOUDFLARE</span>
                  </div>
                  <div className="mt-1">
                    <span className="underline cursor-pointer">Privacy</span> • <span className="underline cursor-pointer">Terms</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit button */}
            <div className="flex justify-start">
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/30"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}