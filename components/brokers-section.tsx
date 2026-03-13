export function BrokersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Business Brokers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing deals to knowledge gaps. You bring the owner. We run the sessions. The handover document goes in front of the buyer.
          </p>
        </div>

        {/* Main Benefit */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-amber-600">
          <p className="text-lg text-gray-700 leading-relaxed">
            Diligence moves faster because the answers are already there.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Fewer Stalled Deals */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fewer Stalled Deals
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Buyers get operational clarity before diligence begins. Questions that used to delay closing for weeks get answered upfront.
                </p>
              </div>
            </div>
          </div>

          {/* Higher Close Rates */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Higher Close Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When the buyer understands how the business actually works, confidence goes up and purchase price holds.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiated Listings */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Differentiated Listings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A business with a handover document stands out. It signals a serious seller and a clean transition.
                </p>
              </div>
            </div>
          </div>

          {/* Smarter Over Time */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smarter Over Time
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Question flows learn from every interview. What buyers ask about during diligence sharpens the questions Succession asks next.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA for Brokers */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to Close More Deals?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a demo to see how Succession can streamline your broker workflow.
          </p>
          <a
            href="mailto:succession@successionio.com?subject=Broker%20Demo%20Request"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Request Broker Demo
          </a>
        </div>
      </div>
    </section>
  );
}
