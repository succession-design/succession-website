import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                Make every business acquisition predictable.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                SuccessionIO is the structured data and diligence layer powering modern SMB transactions — enabling brokers and buyers to evaluate, price, and close deals with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
              >
                Run a Deal Readiness Assessment
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-600">Deals Processed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">$2.5B+</p>
                <p className="text-sm text-slate-600">Transaction Value</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">92%</p>
                <p className="text-sm text-slate-600">Close Rate Lift</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Deal Readiness Score Preview */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Deal Readiness Score</h3>
              <p className="text-sm text-slate-500">Sample Assessment</p>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 rounded-full border-8 border-emerald-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-emerald-600">78</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Financial Transparency</span>
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Operational Clarity</span>
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Owner Dependency</span>
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Customer Quality</span>
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Transition Readiness</span>
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
