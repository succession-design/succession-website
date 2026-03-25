const phases = [
  { step: '1', label: 'Listing', desc: 'Business listed for sale', active: false },
  { step: '2', label: 'Screening', desc: 'SuccessionIO', active: true },
  { step: '3', label: 'Diligence', desc: 'SuccessionIO', active: true },
  { step: '4', label: 'Offer', desc: 'Buyer makes offer', active: false },
  { step: '5', label: 'Close', desc: 'Deal closes', active: false },
];

export function DealLifecycle() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Integration
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            Built for the deal lifecycle
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            SuccessionIO sits at the critical juncture where deals are won or lost.
          </p>
        </div>

        {/* Lifecycle Flow */}
        <div className="bg-[#F8FAFC] rounded-2xl p-8 lg:p-10 border border-[#E2E8F0] mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {phases.map((phase, i) => (
              <div key={phase.step} className="flex items-center gap-3 w-full md:w-auto">
                <div className={`flex-1 md:flex-none text-center px-6 py-5 rounded-xl transition-all ${
                  phase.active
                    ? 'bg-[#0B1D3A] text-white shadow-lg shadow-[#0B1D3A]/15'
                    : 'bg-white border border-[#E2E8F0]'
                }`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    phase.active ? 'text-[#C9A84C]' : 'text-[#94A3B8]'
                  }`}>
                    Step {phase.step}
                  </p>
                  <p className={`text-[14px] font-bold ${phase.active ? 'text-white' : 'text-[#0B1D3A]'}`}>
                    {phase.label}
                  </p>
                  <p className={`text-[12px] mt-0.5 ${phase.active ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    {phase.desc}
                  </p>
                </div>
                {i < phases.length - 1 && (
                  <svg className="hidden md:block shrink-0 text-[#CBD5E1]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#0B1D3A] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B1D3A]">Screening Phase</h3>
            </div>
            <p className="text-[15px] text-[#475569] mb-5 leading-relaxed">
              Brokers use the Deal Readiness Score to filter listings and prioritize buyer outreach with confidence.
            </p>
            <div className="space-y-2.5">
              {['Eliminate unready deals early', 'Focus buyer attention on quality listings', 'Reduce back-and-forth with unqualified buyers'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8L7 11L12 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[13px] text-[#475569]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#0B1D3A] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B1D3A]">Diligence Phase</h3>
            </div>
            <p className="text-[15px] text-[#475569] mb-5 leading-relaxed">
              SuccessionIO becomes the source of truth. Buyers use standardized data to evaluate risk and support valuation.
            </p>
            <div className="space-y-2.5">
              {['Accelerate due diligence', 'Reduce diligence uncertainty', 'Support confident offer pricing'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8L7 11L12 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[13px] text-[#475569]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-[#0B1D3A] to-[#1A3A6B] rounded-2xl p-8 text-center">
          <p className="text-lg text-white">
            <span className="font-bold text-[#C9A84C]">Result:</span>{' '}
            Deals close 30-40% faster, with higher certainty and better valuations.
          </p>
        </div>
      </div>
    </section>
  );
}
