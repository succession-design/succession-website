import Link from 'next/link';

export function OwnersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Retiring Business Owners
          </h2>
          <p className="text-2xl text-amber-600 font-semibold mb-4">
            Thirty years of expertise.
          </p>
          <p className="text-2xl text-amber-600 font-semibold mb-4">
            Five conversations.
          </p>
          <p className="text-2xl text-amber-600 font-semibold mb-8">
            One handover document.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Succession captures what the owner knows through voice-guided interviews and turns it into the operational manual the business never had. So when the keys change hands, the knowledge stays.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-600 mb-2">10,000</div>
            <p className="text-gray-700 font-medium">Boomers retiring daily in the US</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-600 mb-2">6M</div>
            <p className="text-gray-700 font-medium">SMBs changing hands by 2035</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-600 mb-2">56%</div>
            <p className="text-gray-700 font-medium">With no succession plan at all</p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-12">
          <p className="text-lg text-gray-800 italic leading-relaxed">
            "The buyer gets the building, the equipment, and the books. The part that actually makes it work walks out the door."
          </p>
        </div>

        {/* The Gap */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Every Business Sale Has a Knowledge Gap
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">👥</div>
              <p className="text-gray-700 leading-relaxed">
                Thirty years of customer relationships
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🤝</div>
              <p className="text-gray-700 leading-relaxed">
                Vendor negotiations and relationships
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📅</div>
              <p className="text-gray-700 leading-relaxed">
                Seasonal patterns and cycles
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <p className="text-gray-700 leading-relaxed">
                Operational instincts coded into habits that nobody ever wrote down
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-800 font-semibold mb-6">
            Brokers watch deals stall. Buyers discover surprises. Owners can't explain what they never articulated.
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6">
            <p className="text-lg text-gray-900 font-semibold text-center">
              Succession closes that gap before it kills the deal.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/app"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}
