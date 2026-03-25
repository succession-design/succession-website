const steps = [
  {
    number: '01',
    title: 'Structure the business',
    description: 'Convert unstructured owner knowledge into standardized operational data. Capture revenue drivers, team structure, customer dependencies, and workflows.',
    details: ['Operational clarity', 'Revenue breakdown', 'Team dependencies'],
  },
  {
    number: '02',
    title: 'Map risks & dependencies',
    description: 'Identify operational gaps, key-person risk, customer concentration, and transition complexity. Surface hidden risks before they derail deals.',
    details: ['Risk identification', 'Transition planning', 'Dependency mapping'],
  },
  {
    number: '03',
    title: 'Generate Deal Readiness Score',
    description: 'Provide a clear, standardized signal for buyers, brokers, and pricing decisions. Like a credit score for businesses.',
    details: ['Standardized scoring', 'Risk quantification', 'Valuation support'],
  },
];

const dimensions = [
  { icon: '01', name: 'Operational Clarity', desc: 'Process documentation and repeatability' },
  { icon: '02', name: 'Financial Transparency', desc: 'Revenue predictability and margins' },
  { icon: '03', name: 'Owner Dependency', desc: 'Key-person risk and transferability' },
  { icon: '04', name: 'Transition Complexity', desc: 'Integration and handoff requirements' },
  { icon: '05', name: 'Risk Exposure', desc: 'Regulatory, customer, and market risk' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            How SuccessionIO works
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Three steps from unstructured business knowledge to deal-ready intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300">
              <div className="text-[48px] font-black text-[#0B1D3A]/8 leading-none mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-4">{step.title}</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-6">{step.description}</p>
              <div className="space-y-2.5">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8L7 11L12 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-[#475569]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Score Dimensions */}
        <div className="bg-white rounded-2xl p-10 lg:p-14 border border-[#E2E8F0]">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#0B1D3A] mb-3">The Deal Readiness Score</h3>
            <p className="text-[15px] text-[#475569] max-w-2xl">
              Every business is evaluated across five critical dimensions. The result is a single, standardized score that buyers and brokers use to assess deal quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-10">
            {dimensions.map((dim) => (
              <div key={dim.name} className="p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-center">
                <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-wider mb-3">{dim.icon}</div>
                <p className="text-[14px] font-bold text-[#0B1D3A] mb-1.5">{dim.name}</p>
                <p className="text-[12px] text-[#64748B] leading-snug">{dim.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3A6B] rounded-xl p-8 text-center">
            <p className="text-[11px] text-[#C9A84C] uppercase tracking-[0.15em] font-bold mb-2">Result</p>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-2">A single Deal Readiness Score</p>
            <p className="text-[#94A3B8] text-[15px]">Used by brokers and buyers to price, evaluate, and close deals with confidence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
