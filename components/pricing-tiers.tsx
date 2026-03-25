'use client';

import Link from 'next/link';

const tiers = [
  {
    name: 'Trial Session',
    price: '$97',
    period: 'one-time',
    description: 'One full session. See your playbook firsthand.',
    highlight: false,
    cta: 'Start Your Session',
    href: '/assessment',
    features: [
      'One complete AI-guided interview session',
      'Full Deal Readiness Score',
      'Buyer-ready business playbook',
      'PDF export',
      'Shareable web link',
    ],
    notIncluded: [
      'Unlimited sessions',
      'Broker integration',
      'CRM sync',
      'Priority support',
    ],
  },
  {
    name: 'Core Platform',
    price: '$197',
    period: '/month',
    description: 'Unlimited sessions + full playbook + broker integration.',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
    href: '/assessment',
    features: [
      'Unlimited AI interview sessions',
      'Full 5-pillar knowledge capture',
      'Deal Readiness Score suite',
      'White-label PDF reports',
      'Broker integration & sharing portal',
      'Buyer-facing score dashboard',
      'Email & chat support',
    ],
    notIncluded: [
      'CRM sync',
      'Priority support',
    ],
  },
  {
    name: 'Continuity',
    price: '$347',
    period: '/month',
    description: 'Everything + ongoing CRM sync + priority support.',
    highlight: false,
    cta: 'Get Started',
    href: '/assessment',
    features: [
      'Everything in Core Platform',
      'Ongoing CRM sync & updates',
      'Priority support (24hr response)',
      'Quarterly knowledge review sessions',
      'Advanced analytics & deal tracking',
      'Multi-user team access',
    ],
    notIncluded: [],
    enterprise: false,
  },
];

const enterpriseTier = {
  name: 'Enterprise',
  price: '$25K+',
  period: '/year',
  description: 'White-label for brokerage firms and marketplace platforms.',
  features: [
    'Full white-label platform',
    'Custom scoring models',
    'API access & webhooks',
    'Marketplace integration',
    'Dedicated account manager',
    'SLA-backed uptime guarantee',
    'Custom data exports & BI connectors',
    'Unlimited seats',
  ],
};

export function PricingTiers() {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1D3A] leading-tight mb-4">
            Start for $97. Scale as you grow.
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            No subscriptions required to get started. Every plan includes the full Deal Readiness Score engine.
          </p>
        </div>

        {/* ROI Banner */}
        <div className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3A6B] rounded-2xl p-8 mb-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div>
              <p className="text-[#C9A84C] text-4xl font-extrabold">761×</p>
              <p className="text-white text-[14px] mt-1">Return on Investment</p>
              <p className="text-[#94A3B8] text-[12px]">Typical ROI based on value preserved vs. cost</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10" />
            <div>
              <p className="text-[#C9A84C] text-4xl font-extrabold">$2,364</p>
              <p className="text-white text-[14px] mt-1">vs. $1.8M+ preserved</p>
              <p className="text-[#94A3B8] text-[12px]">Cost of 12 months vs. value on a $1.5M revenue business</p>
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
                tier.highlight
                  ? 'bg-[#0B1D3A] border-[#0B1D3A] shadow-2xl shadow-[#0B1D3A]/20 md:scale-[1.03]'
                  : 'bg-white border-[#E2E8F0] hover:border-[#C9A84C]/30 hover:shadow-lg hover:shadow-[#C9A84C]/5'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#C9A84C] text-[#0B1D3A] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-8">
                  <p className={`text-[12px] font-bold uppercase tracking-[0.12em] mb-3 ${
                    tier.highlight ? 'text-[#C9A84C]' : 'text-[#64748B]'
                  }`}>
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-4xl font-extrabold tracking-tight ${
                      tier.highlight ? 'text-white' : 'text-[#0B1D3A]'
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`text-[14px] ${tier.highlight ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-[14px] leading-relaxed ${
                    tier.highlight ? 'text-[#94A3B8]' : 'text-[#475569]'
                  }`}>
                    {tier.description}
                  </p>
                </div>

                <Link
                  href={tier.href}
                  className={`block text-center py-3.5 rounded-xl text-[14px] font-bold transition-all mb-8 ${
                    tier.highlight
                      ? 'bg-[#C9A84C] text-[#0B1D3A] hover:bg-[#D4B96E] shadow-lg'
                      : 'bg-[#0B1D3A] text-white hover:bg-[#122B52] shadow-sm hover:shadow-md'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className={`border-t mb-6 ${tier.highlight ? 'border-white/10' : 'border-[#E2E8F0]'}`} />

                <div className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" fill={tier.highlight ? '#C9A84C' : '#0B1D3A'} fillOpacity="0.12"/>
                        <path d="M4.5 8l2.5 2.5 4.5-5" stroke={tier.highlight ? '#C9A84C' : '#0B1D3A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`text-[13px] leading-snug ${tier.highlight ? 'text-[#CBD5E1]' : 'text-[#475569]'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-35">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8h8" stroke={tier.highlight ? 'white' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span className={`text-[13px] leading-snug line-through ${tier.highlight ? 'text-[#94A3B8]' : 'text-[#94A3B8]'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Row */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:border-[#C9A84C]/30 transition-all hover:shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[12px] font-bold text-[#64748B] uppercase tracking-[0.12em]">{enterpriseTier.name}</p>
                <span className="px-2.5 py-1 bg-[#0B1D3A]/5 rounded-md text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider">White-Label</span>
              </div>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl font-extrabold text-[#0B1D3A]">{enterpriseTier.price}</span>
                <span className="text-[14px] text-[#64748B]">{enterpriseTier.period}</span>
              </div>
              <p className="text-[14px] text-[#475569]">{enterpriseTier.description}</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {enterpriseTier.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#0B1D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12px] text-[#475569]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="lg:w-48 shrink-0">
              <Link
                href="mailto:hello@successionio.com"
                className="block text-center py-3.5 px-6 bg-[#0B1D3A] text-white rounded-xl text-[14px] font-bold hover:bg-[#122B52] transition-all shadow-sm hover:shadow-md"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-[13px] text-[#94A3B8] mt-8">
          All monthly plans include a 14-day free trial. No credit card required.{' '}
          <a href="mailto:hello@successionio.com" className="text-[#0B1D3A] font-medium hover:text-[#C9A84C] transition-colors">Questions? Contact us.</a>
        </p>
      </div>
    </section>
  );
}
