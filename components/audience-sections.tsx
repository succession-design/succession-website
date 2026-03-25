export function AudienceSections() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Purpose-built for deal professionals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Brokers */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-slate-400 transition-colors">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Brokers</h3>
            <p className="text-slate-600 mb-6">
              Close deals faster and increase listing credibility with institutional-grade diligence.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Close deals 30-40% faster with structured data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Reduce back-and-forth with buyers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Increase listing quality and credibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Support higher valuations with clear risk signals</span>
              </li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-slate-400 transition-colors">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Buyers</h3>
            <p className="text-slate-600 mb-6">
              Evaluate deals quickly, consistently, and with confidence in your diligence.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Evaluate deals quickly and consistently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Understand real operational risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Avoid failed acquisitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Price deals with confidence</span>
              </li>
            </ul>
          </div>

          {/* For Marketplaces */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-slate-400 transition-colors">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Marketplaces</h3>
            <p className="text-slate-600 mb-6">
              Increase close rates and platform stickiness with standardized deal data.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Increase close rates and deal velocity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Improve listing transparency and quality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Standardize deal data across platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900">→</span>
                <span>Build competitive moat with data insights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
