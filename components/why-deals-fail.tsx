const issues = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12v4M12 8h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fragmented Information',
    description: 'Business knowledge lives in spreadsheets, emails, and owner heads. Buyers cannot assess what they cannot see.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.96l-6.93-12a2 2 0 00-3.5 0l-6.93 12A2 2 0 005.07 19z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Hidden Operational Risks',
    description: 'Key-person dependencies, customer concentration, and transition complexity remain invisible until deal collapse.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Inconsistent Diligence',
    description: 'Every buyer uses different frameworks. Brokers repeat the same questions. Time and money are wasted on every deal.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Buyer Uncertainty',
    description: 'Without clear signals, buyers either overpay for risk or walk away from good deals. Valuation suffers across the board.',
  },
];

export function WhyDealsFail() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            Why deals fail
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Most SMB transactions collapse due to systemic information gaps, not deal quality. SuccessionIO eliminates these failure points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="group p-8 rounded-2xl border border-[#E2E8F0] hover:border-[#C9A84C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/5 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FBF7EF] flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/15 transition-colors">
                {issue.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">{issue.title}</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">{issue.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#0B1D3A] to-[#122B52] rounded-2xl">
          <p className="text-center text-white text-lg">
            <span className="font-bold text-[#C9A84C]">The result:</span>{' '}
            Deals take 3-6 months longer to close, valuations drop 15-25%, and many never close at all.
          </p>
        </div>
      </div>
    </section>
  );
}
