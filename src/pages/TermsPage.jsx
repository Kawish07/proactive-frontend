import HeroSection from '../components/HeroSection';

const TermsPage = () => (
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
      title="Terms and Conditions"
      subtitle="Our Commitment to Transparency"
      description="Read our terms and conditions to understand your rights and responsibilities when using our services."
      showQuoteButton={false}
    />
    <div className="max-w-4xl mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Service Agreement</h3>
        <p className="text-gray-700">All services are provided under a clear agreement to ensure quality and satisfaction for our clients.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Client Responsibilities</h3>
        <p className="text-gray-700">Clients are expected to provide accurate information and access to premises for scheduled cleaning.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Payment & Cancellation</h3>
        <p className="text-gray-700">Payments must be made as agreed. Cancellations require 24-hour notice to avoid charges.</p>
      </div>
    </div>
  </div>
);

export default TermsPage;
