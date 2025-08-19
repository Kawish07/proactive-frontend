import HeroSection from '../components/HeroSection';

const FAQPage = () => (
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
      title="Frequently Asked Questions"
      subtitle="Answers to Your Common Queries"
      description="Find answers to the most frequently asked questions about our cleaning services and company policies."
      showQuoteButton={false}
    />
    <div className="max-w-4xl mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">What services do you offer?</h3>
        <p className="text-gray-700">We provide commercial, residential, specialist, and construction cleaning services across the UK.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">How do I request a quote?</h3>
        <p className="text-gray-700">You can request a quote using our online form or by contacting us directly via phone or email.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Are your staff insured and trained?</h3>
        <p className="text-gray-700">Yes, all our staff are fully insured and receive regular training to maintain high standards.</p>
      </div>
    </div>
  </div>
);

export default FAQPage;
