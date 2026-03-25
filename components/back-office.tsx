import Link from 'next/link';

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 17H7A5 5 0 017 7h2M15 7h2a5 5 0 010 10h-2M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Broker Integration',
    description: 'Connect SuccessionIO directly to your listing workflow. Scores and playbooks sync automatically to your CRM and deal pipeline.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Deal Dashboard',
    description: 'Track every active listing, score, and document status from one central view. Filter by readiness tier, industry, or deal stage.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Multi-User Teams',
    description: 'Add associates, analysts, and support staff with role-based permissions. Everyone sees what they need — nothing more.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'White-Label Reports',
    description: 'Brand every buyer-facing document with your firm\'s logo and colors. Deliver a premium experience that reflects your professionalism.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Automated Alerts',
    description: 'Get notified when a seller completes a session, a score changes, or a buyer accesses a playbook. Stay on top of every deal without manual tracking.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Analytics & Reporting',
    description: 'Understand deal flow patterns, score distributions, and time-to-close correlations. Data that makes your brokerage smarter over time.',
  },
];

const supportTiers = [
  {
    name: 'Standard',
    response: '48-hour response',
    channels: ['Email support', 'Help center access', 'Video tutorial library'],
    plan: 'Included in all plans',
  },
  {
    name: 'Priority',
    response: '24-hour response',
    channels: ['Email & chat support', 'Onboarding call', 'Quarterly check-ins'],
    plan: 'Continuity plan',
    highlight: true,
  },
  {
    name: 'Dedicated',
    response: 'Same-day response',
    channels: ['Named account manager', 'Phone & video support', 'Custom training sessions', 'SLA guarantee'],
    plan: 'Enterprise plan',
  },
];

export function BackOffice() {
  return (
    <section id="back-office" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Back Office & Support
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-6">
            Built for the professionals behind the deal
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            SuccessionIO gives brokers, advisors, and deal teams the infrastructure to run a modern, data-driven practice.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-7 hover:border-[#C9A84C]/30 hover:shadow-lg hover:shadow-[#C9A84C]/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5 group-hover:border-[#C9A84C]/30 transition-colors shadow-sm">
                {cap.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2">{cap.title}</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Support Tiers */}
        <div className="border-t border-[#E2E8F0] pt-16">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">Support</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D3A]">
              We&apos;re with you every step of the way
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-7 ${
                  tier.highlight
                    ? 'bg-[#0B1D3A] border-[#0B1D3A]'
                    : 'bg-[#F8FAFC] border-[#E2E8F0]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className={`text-[12px] font-bold uppercase tracking-wider mb-1 ${
                      tier.highlight ? 'text-[#C9A84C]' : 'text-[#64748B]'
                    }`}>{tier.name}</p>
                    <p className={`text-xl font-bold ${tier.highlight ? 'text-white' : 'text-[#0B1D3A]'}`}>
                      {tier.response}
                    </p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-5">
                  {tier.channels.map((channel) => (
                    <div key={channel} className="flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4.5 8l2.5 2.5 4.5-5" stroke={tier.highlight ? '#C9A84C' : '#0B1D3A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`text-[13px] ${tier.highlight ? 'text-[#CBD5E1]' : 'text-[#475569]'}`}>
                        {channel}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`border-t pt-4 ${tier.highlight ? 'border-white/10' : 'border-[#E2E8F0]'}`}>
                  <p className={`text-[12px] font-medium ${tier.highlight ? 'text-[#94A3B8]' : 'text-[#94A3B8]'}`}>
                    {tier.plan}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#475569] text-[15px] mb-4">
              Need help choosing the right plan for your team?
            </p>
            <Link
              href="mailto:hello@successionio.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1D3A] text-white text-[14px] font-semibold rounded-xl hover:bg-[#122B52] transition-all shadow-sm hover:shadow-md"
            >
              Talk to our team
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
