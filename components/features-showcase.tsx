'use client';

const features = [
  {
    id: 1,
    title: 'Smart Interview Setup',
    description: 'Select your industry and business type. Succession guides you through industry-specific questions tailored to your business model.',
    highlight: 'Industry-Specific',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" rx="3" />
        <path d="M11 10h10M11 15h10M11 20h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Real-Time Recording',
    description: 'Record your knowledge with beautiful waveform visualization. See your audio levels in real-time as you answer guided questions.',
    highlight: 'Live Waveform',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M16 4v24M10 8v16M22 8v16M4 12v8M28 12v8M7 10v12M25 10v12M13 6v20M19 6v20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'AI-Generated Documents',
    description: 'Instantly generate professional handover documents from your recordings. Share with buyers or export as PDF for your records.',
    highlight: 'One-Click Export',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M8 4h10l8 8v16a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M18 4v8h8" />
        <path d="M10 18h12M10 22h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Interview Dashboard',
    description: 'Manage all your interviews in one place. Track recording status, document generation, and share handover documents with buyers.',
    highlight: 'Organized & Simple',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <path d="M4 12h24M12 12v16" strokeLinecap="round" />
        <circle cx="22" cy="20" r="3" />
      </svg>
    ),
  },
];

export function FeaturesShowcase() {
  return (
    <section id="features" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            See Succession in Action
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            From interview to handover document in minutes. Experience the simplicity of capturing business knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#C9A84C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/5"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF7EF] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/15 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <div className="inline-flex px-2.5 py-1 bg-[#0B1D3A]/5 rounded-md mb-3">
                    <span className="text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider">{feature.highlight}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">{feature.title}</h3>
                  <p className="text-[15px] text-[#475569] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#475569] mb-6">Ready to streamline your business transitions?</p>
          <a
            href="/assessment"
            className="inline-flex items-center px-7 py-3.5 bg-[#0B1D3A] text-white text-[15px] font-semibold rounded-xl hover:bg-[#122B52] transition-all shadow-lg shadow-[#0B1D3A]/10 hover:shadow-xl"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
