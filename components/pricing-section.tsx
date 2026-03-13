import Link from 'next/link';

export function PricingSection() {
  const tiers = [
    {
      id: 'trial',
      name: 'Knowledge Capture Trial',
      price: 97,
      period: 'one-time',
      description: 'The fastest way to see what Succession produces.',
      features: [
        'Full voice interview access',
        'AI-structured handover document',
        'PDF download included',
        'Industry-specific question flows',
        'One document per purchase',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      id: 'monthly',
      name: 'Monthly AI Playbook',
      price: 197,
      period: 'month',
      description: 'Ongoing access to keep your playbook current.',
      features: [
        'Everything in Trial',
        'Unlimited interview sessions',
        'Playbook updates as business changes',
        'Version history and revisions',
        'Buyer-ready formatting',
        'Priority support',
      ],
      cta: 'Get Started',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      id: 'broker',
      name: 'Playbook + Broker Integration',
      price: 347,
      period: 'month',
      description: 'Full broker coordination and deal management.',
      features: [
        'Everything in Monthly Playbook',
        'Broker dashboard access',
        'Multi-party deal collaboration',
        'CRM and deal tracking tools',
        'Buyer access controls',
        'Dedicated account support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                tier.highlighted
                  ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {tier.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${tier.price}
                </span>
                <span className="text-gray-600 ml-2">
                  {tier.period === 'one-time' ? 'one-time' : `per ${tier.period}`}
                </span>
              </div>

              <Link
                href="/app"
                className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors mb-8 ${
                  tier.highlighted
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            All plans include:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">Secure encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">No setup fees</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
