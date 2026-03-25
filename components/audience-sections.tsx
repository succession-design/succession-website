const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'For Brokers',
    description: 'Close deals faster and increase listing credibility with institutional-grade diligence.',
    benefits: [
      'Close deals 30-40% faster with structured data',
      'Reduce back-and-forth with buyers',
      'Increase listing quality and credibility',
      'Support higher valuations with clear risk signals',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'For Buyers',
    description: 'Evaluate deals quickly, consistently, and with confidence in your diligence.',
    benefits: [
      'Evaluate deals quickly and consistently',
      'Understand real operational risk',
      'Avoid failed acquisitions',
      'Price deals with confidence',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'For Marketplaces',
    description: 'Increase close rates and platform stickiness with standardized deal data.',
    benefits: [
      'Increase close rates and deal velocity',
      'Improve listing transparency and quality',
      'Standardize deal data across platform',
      'Build competitive moat with data insights',
    ],
  },
];

export function AudienceSections() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight">
            Purpose-built for deal professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#C9A84C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FBF7EF] flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/15 transition-colors">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">{audience.title}</h3>
              <p className="text-[15px] text-[#475569] mb-6 leading-relaxed">{audience.description}</p>
              <div className="space-y-3">
                {audience.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="#0B1D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-[#475569] leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
