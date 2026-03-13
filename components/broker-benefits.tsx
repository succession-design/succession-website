'use client';

import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Close Deals Faster',
    description: 'Buyers get operational clarity before diligence begins. Handover documents answer questions upfront, reducing deal timelines by 3-4 weeks.',
    icon: '⚡',
  },
  {
    title: 'Higher Close Rates',
    description: 'When buyers understand how the business actually works, confidence goes up. Fewer deals fall through due to operational surprises.',
    icon: '📈',
  },
  {
    title: 'Premium Valuations',
    description: 'Businesses with handover documents command 8-15% price premiums. Buyers perceive them as lower-risk and better-organized.',
    icon: '💎',
  },
  {
    title: 'Differentiated Listings',
    description: 'Stand out in the market. A business with a handover document signals a serious seller and a clean transition to potential buyers.',
    icon: '🎯',
  },
  {
    title: 'Save Time on Diligence',
    description: 'Reduce buyer questions and concerns. Your team spends less time managing surprises and more time closing deals.',
    icon: '⏱️',
  },
  {
    title: 'Smarter Over Time',
    description: 'Question flows learn from every interview. What buyers ask about during diligence sharpens the questions Succession asks next.',
    icon: '🧠',
  },
];

export function BrokerBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Brokers Choose Succession
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Six reasons to add Succession to your toolkit
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Brokerage?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Free Demo:</strong> See how Succession works with a real business interview
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Broker Pricing:</strong> Special rates for brokers managing multiple deals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Dedicated Support:</strong> Onboarding and training for your team
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Join forward-thinking brokers who are already using Succession to close more deals
              </p>
              <a
                href="/beta"
                className="inline-block bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors shadow-lg"
              >
                Schedule Your Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
