export function DataDefensibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Building the data layer for SMB transactions</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every deal processed strengthens our competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Data Collection */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Structured Dataset</h3>
            <p className="text-slate-600 mb-4">
              Every deal processed adds to our institutional knowledge of SMB operations, risks, and outcomes.
            </p>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• Business operations</p>
              <p>• Deal risks and patterns</p>
              <p>• Transition outcomes</p>
              <p>• Valuation benchmarks</p>
            </div>
          </div>

          {/* Intelligence */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Deal Intelligence</h3>
            <p className="text-slate-600 mb-4">
              This data enables insights that individual brokers and buyers cannot access alone.
            </p>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• Pricing intelligence</p>
              <p>• Risk scoring models</p>
              <p>• Deal matching</p>
              <p>• Outcome prediction</p>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Defensible Moat</h3>
            <p className="text-slate-600 mb-4">
              As the system of record for SMB deals, SuccessionIO becomes increasingly valuable over time.
            </p>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• Network effects</p>
              <p>• Data lock-in</p>
              <p>• Switching costs</p>
              <p>• Pricing power</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900 text-white rounded-lg text-center">
          <p className="text-lg">
            <span className="font-bold">Long-term vision:</span> SuccessionIO becomes the trusted data infrastructure layer for the entire SMB acquisition market.
          </p>
        </div>
      </div>
    </section>
  );
}
