'use client';

import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'Smart Interview Setup',
    description: 'Select your industry and business type. Succession guides you through industry-specific questions tailored to your business model.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392274051/6iXKgogbvmeVguwFTaR6GR/mockup-phone-interview-nzRrizUZs6MX4YQf6qHSsD.webp',
    highlight: 'Industry-Specific',
  },
  {
    id: 2,
    title: 'Real-Time Recording',
    description: 'Record your knowledge with beautiful waveform visualization. See your audio levels in real-time as you answer guided questions about your business.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392274051/6iXKgogbvmeVguwFTaR6GR/mockup-phone-interview-nzRrizUZs6MX4YQf6qHSsD.webp',
    highlight: 'Live Waveform',
  },
  {
    id: 3,
    title: 'AI-Generated Documents',
    description: 'Instantly generate professional handover documents from your recordings. Share with buyers or export as PDF for your records.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392274051/6iXKgogbvmeVguwFTaR6GR/mockup-phone-document-fCvULMUsw4mSEMNyfUDgqM.webp',
    highlight: 'One-Click Export',
  },
  {
    id: 4,
    title: 'Interview Dashboard',
    description: 'Manage all your interviews in one place. Track recording status, document generation, and share handover documents with buyers.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392274051/6iXKgogbvmeVguwFTaR6GR/mockup-dashboard-aArooiATKvQeSbGxUooNxq.webp',
    highlight: 'Organized & Simple',
  },
];

export function FeaturesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Succession in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From interview to handover document in minutes. Experience the simplicity of capturing business knowledge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Screenshot */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 rounded-3xl blur-2xl opacity-30"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={800}
                      className="w-full h-auto"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {feature.highlight}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-amber-700 font-semibold">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Ready to streamline your business transitions?
          </p>
          <a
            href="/beta"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors shadow-lg"
          >
            Join Beta Program
          </a>
        </div>
      </div>
    </section>
  );
}
