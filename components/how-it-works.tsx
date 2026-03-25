export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How SuccessionIO works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three steps from unstructured business knowledge to deal-ready intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full font-bold mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Structure the business</h3>
            <p className="text-slate-600 mb-6">
              Convert unstructured owner knowledge into standardized operational data. Capture revenue drivers, team structure, customer dependencies, and operational workflows.
            </p>
            <div className="text-sm text-slate-500 space-y-2">
              <p>✓ Operational clarity</p>
              <p>✓ Revenue breakdown</p>
              <p>✓ Team dependencies</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full font-bold mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Map risks and dependencies</h3>
            <p className="text-slate-600 mb-6">
              Identify operational gaps, key-person risk, customer concentration, and transition complexity. Surface hidden risks before they derail deals.
            </p>
            <div className="text-sm text-slate-500 space-y-2">
              <p>✓ Risk identification</p>
              <p>✓ Transition planning</p>
              <p>✓ Dependency mapping</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full font-bold mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Generate Deal Readiness Score</h3>
            <p className="text-slate-600 mb-6">
              Provide a clear, standardized signal for buyers, brokers, and pricing decisions. Like a credit score for businesses — instantly understood by deal professionals.
            </p>
            <div className="text-sm text-slate-500 space-y-2">
              <p>✓ Standardized scoring</p>
              <p>✓ Risk quantification</p>
              <p>✓ Valuation support</p>
            </div>
          </div>
        </div>

        {/* Deal Readiness Score Explanation */}
        <div className="mt-16 bg-white rounded-lg p-12 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">The Deal Readiness Score</h3>
          <p className="text-slate-600 mb-8">
            Every business is evaluated across five critical dimensions. The result is a single, standardized score that buyers and brokers use to assess deal quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">📊</div>
              <p className="font-semibold text-slate-900">Operational Clarity</p>
              <p className="text-sm text-slate-600 mt-2">Process documentation and repeatability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">💰</div>
              <p className="font-semibold text-slate-900">Financial Transparency</p>
              <p className="text-sm text-slate-600 mt-2">Revenue predictability and margins</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">👤</div>
              <p className="font-semibold text-slate-900">Owner Dependency</p>
              <p className="text-sm text-slate-600 mt-2">Key-person risk and transferability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">🔄</div>
              <p className="font-semibold text-slate-900">Transition Complexity</p>
              <p className="text-sm text-slate-600 mt-2">Integration and handoff requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">⚠️</div>
              <p className="font-semibold text-slate-900">Risk Exposure</p>
              <p className="text-sm text-slate-600 mt-2">Regulatory, customer, and market risk</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg text-center">
            <p className="text-sm uppercase tracking-wide mb-2">Result</p>
            <p className="text-3xl font-bold">A single Deal Readiness Score</p>
            <p className="text-slate-300 mt-2">Used by brokers and buyers to price, evaluate, and close deals with confidence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
