import { BrokerBenefits } from '@/components/broker-benefits';
import { BrokerCaseStudies } from '@/components/broker-case-studies';
import { BrokerROICalculator } from '@/components/broker-roi-calculator';
import Link from 'next/link';

export const metadata = {
  title: 'For Business Brokers | Succession',
  description: 'Close more deals faster with Succession. See how brokers are using handover documents to achieve premium valuations and reduce diligence timelines.',
};

export default function BrokersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
              For Business Brokers
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Close More Deals, Faster
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop losing deals to knowledge gaps. Succession turns business expertise into comprehensive handover documents that buyers trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors shadow-lg"
              >
                Schedule Demo
              </Link>
              <a
                href="#roi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Calculate Your ROI
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-2">3-4</div>
              <p className="text-gray-600">Weeks faster to close</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-2">8-15%</div>
              <p className="text-gray-600">Higher valuations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-2">80%</div>
              <p className="text-gray-600">Fewer diligence surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BrokerBenefits />

      {/* ROI Calculator */}
      <div id="roi">
        <BrokerROICalculator />
      </div>

      {/* Case Studies */}
      <BrokerCaseStudies />

      {/* How It Works for Brokers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Succession Works for Brokers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple workflow. Big impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Recommend Succession',
                description: 'Suggest Succession to sellers as part of your transaction services',
              },
              {
                step: '2',
                title: 'Seller Records Interview',
                description: 'Seller answers guided questions about their business in 3-5 sessions',
              },
              {
                step: '3',
                title: 'AI Generates Document',
                description: 'Succession creates a professional handover document automatically',
              },
              {
                step: '4',
                title: 'Share with Buyers',
                description: 'Provide document to buyers before diligence to accelerate deals',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: 'How long does it take to complete an interview?',
                a: 'Most sellers complete the interview in 3-5 sessions of 30-45 minutes each. They can spread it over days or weeks.',
              },
              {
                q: 'Can I customize the handover document?',
                a: 'Yes. The document is AI-generated but fully editable. Sellers can add, remove, or modify any sections.',
              },
              {
                q: 'What if the seller is not tech-savvy?',
                a: 'Succession is designed to be simple. Voice-guided interviews walk sellers through each question. We also provide support.',
              },
              {
                q: 'How much does it cost?',
                a: 'We offer special broker pricing. Contact us for details based on your deal volume.',
              },
              {
                q: 'Can I use this for multiple deals?',
                a: 'Absolutely. Many brokers use Succession for all their listings. We offer team accounts and volume discounts.',
              },
              {
                q: 'What format is the document in?',
                a: 'PDF, Word, or shared link. Buyers can view online or download for their records.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brokerage?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join brokers who are already closing more deals and achieving premium valuations with Succession.
          </p>
          <Link
            href="/beta"
            className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule Your Demo Today
          </Link>
        </div>
      </section>
    </main>
  );
}
