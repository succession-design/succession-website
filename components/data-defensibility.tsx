const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Structured Dataset',
    description: 'Every deal processed adds to our institutional knowledge of SMB operations, risks, and outcomes.',
    items: ['Business operations', 'Deal risks and patterns', 'Transition outcomes', 'Valuation benchmarks'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Deal Intelligence',
    description: 'This data enables insights that individual brokers and buyers cannot access alone.',
    items: ['Pricing intelligence', 'Risk scoring models', 'Deal matching', 'Outcome prediction'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Defensible Moat',
    description: 'As the system of record for SMB deals, SuccessionIO becomes increasingly valuable over time.',
    items: ['Network effects', 'Data lock-in', 'Switching costs', 'Pricing power'],
  },
];

export function DataDefensibility() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Our Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            Building the data layer for SMB transactions
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Every deal processed strengthens our competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FBF7EF] flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">{pillar.title}</h3>
              <p className="text-[15px] text-[#475569] mb-5 leading-relaxed">{pillar.description}</p>
              <div className="space-y-2">
                {pillar.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                    <span className="text-[13px] text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3A6B] rounded-2xl p-10 text-center">
          <p className="text-lg text-white leading-relaxed">
            <span className="font-bold text-[#C9A84C]">Long-term vision:</span>{' '}
            SuccessionIO becomes the trusted data infrastructure layer for the entire SMB acquisition market.
          </p>
        </div>
      </div>
    </section>
  );
}
