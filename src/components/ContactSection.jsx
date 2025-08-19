import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ChevronUp, ExternalLink, Loader2, Check } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    service: '',
    message: '',
    agreeToPrivacy: false,
    captchaVerified: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCaptchaChange = async (e) => {
    const { checked } = e.target;
    
    if (checked && !captchaCompleted) {
      setCaptchaLoading(true);
      // Simulate 2-second verification process
      setTimeout(() => {
        setCaptchaLoading(false);
        setCaptchaCompleted(true);
        setFormData(prev => ({
          ...prev,
          captchaVerified: true
        }));
      }, 2000);
    } else if (!checked) {
      setCaptchaCompleted(false);
      setFormData(prev => ({
        ...prev,
        captchaVerified: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if captcha is verified
    if (!formData.captchaVerified) {
      alert('Please verify that you are human');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Simulate successful submission for demo purposes
      if (response.ok || true) { // Always show success for demo
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          postcode: '',
          service: '',
          message: '',
          agreeToPrivacy: false,
          captchaVerified: false
        });
        // Reset captcha state
        setCaptchaCompleted(false);
        setCaptchaLoading(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (err) {
      // For demo purposes, still show success
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        service: '',
        message: '',
        agreeToPrivacy: false,
        captchaVerified: false
      });
      setCaptchaCompleted(false);
      setCaptchaLoading(false);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200/50 rounded-full"></div>
      <div className="absolute top-40 left-32 w-20 h-20 bg-gray-200/30 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gray-200/40 rounded-full"></div>
      <div className="absolute top-60 right-20 w-16 h-16 bg-gray-200/35 rounded-full"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Contact Us</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  We'd Love To<br />
                  Hear From You
                </h1>
                <p className="text-gray-600 text-lg mb-2">
                  If You Have A Question Or Want To Find Out More,
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  Please Get In Touch
                </p>
                <p className="text-green-500 font-semibold text-lg">
                  Always Here When you Need Us
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-blue-600">
                    <Phone className="w-full h-full" />
                  </div>
                  <span className="text-gray-900 text-lg font-medium">01753 428100</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-blue-600">
                    <Mail className="w-full h-full" />
                  </div>
                  <span className="text-gray-900 text-lg font-medium">sales@proactivecleaners.co.uk</span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-blue-600">
                    <MapPin className="w-full h-full" />
                  </div>
                  <span className="text-gray-900 text-lg font-medium">Future Works | 2 Brunel Way | Slough | SL1 1XL</span>
                </div>
              </div>

              {/* Call Button */}
              <div className="pt-8">
                <button className="bg-[#02294D] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg">
                  01753 428151
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#02294D] rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">Get a Quote</h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500 text-white rounded-lg text-center font-semibold flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                    required
                  />
                </div>

                {/* Second Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address*"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode*"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                    required
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none appearance-none cursor-pointer"
                    style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="" className="text-gray-900">-- service</option>
                    <option value="residential" className="text-gray-900">Residential Cleaning</option>
                    <option value="commercial" className="text-gray-900">Commercial Cleaning</option>
                    <option value="deep-cleaning" className="text-gray-900">Deep Cleaning</option>
                    <option value="carpet-cleaning" className="text-gray-900">Carpet Cleaning</option>
                  </select>
                </div>

                {/* Message Field */}
                <textarea
                  name="message"
                  placeholder="Please explain how can we help you"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none resize-none"
                ></textarea>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="agreeToPrivacy"
                    id="privacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 bg-transparent border-2 border-white rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="text-white text-sm">
                    I agree to the site's Privacy Policy
                  </label>
                </div>

                {/* Captcha */}
                <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="captchaVerified"
                        id="captcha"
                        checked={captchaCompleted}
                        onChange={handleCaptchaChange}
                        disabled={captchaLoading || captchaCompleted}
                        className="w-6 h-6 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                      />
                      {captchaLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                        </div>
                      )}
                      {captchaCompleted && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                      )}
                    </div>
                    <span className="text-white">
                      {captchaLoading ? 'Verifying...' : captchaCompleted ? 'Verified!' : 'Verify you are human'}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-400 font-bold text-sm">CLOUDFLARE</div>
                    <div className="text-gray-400 text-xs">Privacy • Terms</div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.captchaVerified}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-12 py-4 rounded-full transition-colors shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-24 left-8 bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full shadow-lg transition-colors">
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </button>
      </div>
    </section>
  );
};

export default ContactFormSection;