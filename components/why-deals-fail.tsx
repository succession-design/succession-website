export function WhyDealsFail() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why deals fail</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Most SMB transactions collapse due to systemic information gaps, not deal quality. SuccessionIO eliminates these failure points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Issue 1 */}
          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📋</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fragmented Information</h3>
                <p className="text-slate-600">
                  Business knowledge lives in spreadsheets, emails, and owner heads. Buyers can't assess what they can't see.
                </p>
              </div>
            </div>
          </div>

          {/* Issue 2 */}
          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hidden Operational Risks</h3>
                <p className="text-slate-600">
                  Key-person dependencies, customer concentration, and transition complexity remain invisible until deal collapse.
                </p>
              </div>
            </div>
          </div>

          {/* Issue 3 */}
          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔄</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Inconsistent Diligence</h3>
                <p className="text-slate-600">
                  Every buyer uses different frameworks. Brokers repeat the same questions. Time and money are wasted.
                </p>
              </div>
            </div>
          </div>

          {/* Issue 4 */}
          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-3xl">❓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Buyer Uncertainty</h3>
                <p className="text-slate-600">
                  Without clear signals, buyers either overpay for risk or walk away from good deals. Valuation suffers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-center text-slate-700">
            <span className="font-semibold">The result:</span> Deals take 3-6 months longer to close, valuations drop 15-25%, and many never close at all.
          </p>
        </div>
      </div>
    </section>
  );
}
