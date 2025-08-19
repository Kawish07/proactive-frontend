import HeroSection from '../components/HeroSection';

const PrivacyPage = () => (
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1465101178521-c1a2b1c6413c?auto=format&fit=crop&w=1800&q=80"
      title="Privacy/GDPR Policy"
      subtitle="Your Data, Our Responsibility"
      description="Learn how we protect your privacy and comply with GDPR regulations to keep your information safe."
      showQuoteButton={false}
    />
    <div className="max-w-4xl mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Data Protection</h3>
        <p className="text-gray-700">We use industry-standard security measures to safeguard your personal data at all times.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">GDPR Compliance</h3>
        <p className="text-gray-700">Our policies and procedures are fully compliant with GDPR requirements for data handling and privacy.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Your Rights</h3>
        <p className="text-gray-700">You have the right to access, update, or delete your personal information at any time.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPage;
