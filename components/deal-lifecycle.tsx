export function DealLifecycle() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for the deal lifecycle</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            SuccessionIO sits at the critical juncture where deals are won or lost.
          </p>
        </div>

        {/* Deal Lifecycle Flow */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">1. Listing</p>
              <p className="text-slate-700">Business listed for sale</p>
            </div>
            <div className="hidden md:block text-2xl text-slate-300">→</div>
            
            <div className="flex-1 bg-white rounded-lg p-4 border-2 border-slate-900">
              <p className="text-sm font-semibold text-slate-900 uppercase mb-2">2. Screening</p>
              <p className="text-slate-900 font-semibold">SuccessionIO</p>
            </div>
            <div className="hidden md:block text-2xl text-slate-300">→</div>

            <div className="flex-1 bg-white rounded-lg p-4 border-2 border-slate-900">
              <p className="text-sm font-semibold text-slate-900 uppercase mb-2">3. Diligence</p>
              <p className="text-slate-900 font-semibold">SuccessionIO</p>
            </div>
            <div className="hidden md:block text-2xl text-slate-300">→</div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">4. Offer</p>
              <p className="text-slate-700">Buyer makes offer</p>
            </div>
            <div className="hidden md:block text-2xl text-slate-300">→</div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">5. Close</p>
              <p className="text-slate-700">Deal closes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Screening Phase</h3>
            <p className="text-slate-600 mb-4">
              SuccessionIO provides the first signal. Brokers use the Deal Readiness Score to filter listings and prioritize buyer outreach.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ Eliminate unready deals early</li>
              <li>✓ Focus buyer attention on quality listings</li>
              <li>✓ Reduce back-and-forth with unqualified buyers</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Diligence Phase</h3>
            <p className="text-slate-600 mb-4">
              SuccessionIO becomes the source of truth. Buyers use standardized data to evaluate risk, model integration, and support valuation.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ Accelerate due diligence</li>
              <li>✓ Reduce diligence uncertainty</li>
              <li>✓ Support confident offer pricing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-900 text-white rounded-lg text-center">
          <p className="text-lg mb-4">
            <span className="font-bold">Result:</span> Deals close 30-40% faster, with higher certainty and better valuations.
          </p>
        </div>
      </div>
    </section>
  );
}
