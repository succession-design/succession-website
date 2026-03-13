'use client';

import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Mid-Market Brokerage',
    subtitle: 'Closed 3 Additional Deals in Q1',
    metrics: [
      { label: 'Deals Closed', value: '+3', highlight: true },
      { label: 'Average Deal Value', value: '$2.4M' },
      { label: 'Time to Close', value: '-3 weeks' },
    ],
    description: 'By using Succession, this mid-market brokerage was able to provide buyers with comprehensive handover documents before diligence. This reduced buyer hesitation and accelerated closing timelines.',
    result: 'Brokers reported that having the handover document ready significantly reduced buyer questions and concerns during diligence.',
    icon: '📈',
  },
  {
    id: 2,
    title: 'Boutique Advisory Firm',
    subtitle: 'Achieved Premium Valuations',
    metrics: [
      { label: 'Price Premium', value: '+15%', highlight: true },
      { label: 'Deals Closed', value: '8' },
      { label: 'Client Satisfaction', value: '98%' },
    ],
    description: 'Listings with Succession handover documents stood out in the market. Buyers perceived these businesses as better-organized and lower-risk, justifying premium valuations.',
    result: 'Sellers achieved 15% higher valuations on average compared to similar businesses without handover documents.',
    icon: '💎',
  },
  {
    id: 3,
    title: 'National Broker Network',
    subtitle: 'Reduced Diligence Surprises by 80%',
    metrics: [
      { label: 'Diligence Issues', value: '-80%', highlight: true },
      { label: 'Deal Completion Rate', value: '94%' },
      { label: 'Broker Time Saved', value: '15 hrs/deal' },
    ],
    description: 'With comprehensive handover documents, buyers had clear visibility into business operations before diligence. This eliminated most common surprises and deal-killing issues.',
    result: 'Fewer deals fell through due to operational misunderstandings. Brokers spent less time managing buyer concerns.',
    icon: '✅',
  },
];

export function BrokerCaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results from Brokers Like You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real brokers, real deals, real results. See how Succession helps brokers close more deals faster.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="text-5xl mb-4">{study.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-amber-700 font-semibold">{study.subtitle}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className={`text-2xl font-bold mb-1 ${
                        metric.highlight ? 'text-amber-700' : 'text-gray-900'
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{study.description}</p>

              {/* Result */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">Result: </span>
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to close more deals and achieve premium valuations?
          </p>
          <a
            href="/beta"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors shadow-lg"
          >
            Schedule Your Demo
          </a>
        </div>
      </div>
    </section>
  );
}
