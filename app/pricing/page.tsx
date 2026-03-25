'use client';

import Link from 'next/link';

const tiers = [
  {
    name: 'Trial',
    price: '$97',
    period: 'one-time',
    tagline: 'See what your business is worth',
    features: [
      'One AI-guided interview session',
      'Deal Readiness Score (single snapshot)',
      'Executive summary report',
      'Identify your top 3 risk areas',
      'PDF export for broker conversations',
    ],
    cta: 'Start for $97',
    href: '/assessment',
    highlight: false,
    roi: '761× average return on investment',
  },
  {
    name: 'Core',
    price: '$197',
    period: 'per month',
    tagline: 'Build your buyer-ready playbook',
    features: [
      'Everything in Trial',
      'Unlimited AI interview sessions',
      'Full 5-pillar business playbook',
      'Monthly Deal Readiness Score updates',
      'Broker-shareable deal room',
      'Buyer Q&A response templates',
      'Priority email support',
    ],
    cta: 'Start Core',
    href: '/assessment',
    highlight: true,
    roi: 'Protects $360K–$720K in negotiated value',
  },
  {
    name: 'Continuity',
    price: '$347',
    period: 'per month',
    tagline: 'Institutional-grade deal preparation',
    features: [
      'Everything in Core',
      'Dedicated succession advisor',
      'White-label reports for your broker',
      'Multi-stakeholder deal room',
      'Buyer NDA management',
      'LOI and term sheet guidance',
      'Post-close transition planning',
      'Phone and video support',
    ],
    cta: 'Start Continuity',
    href: '/assessment',
    highlight: false,
    roi: 'Full institutional deal support',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '7rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        background: '#FAF8F5',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.75rem',
          }}>
            Pricing
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#1A1A1A',
            marginBottom: '1.75rem',
          }}>
            Transparent pricing.<br />
            <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Extraordinary return.</em>
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
          }}>
            The average business owner leaves 20–40% of their sale price on the table due to poor preparation. SuccessionIO pays for itself many times over.
          </p>
        </div>
      </section>

      {/* ROI Banner */}
      <div style={{
        background: '#1A1A1A',
        padding: '1.5rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8125rem',
          fontWeight: 300,
          color: '#9C9590',
          letterSpacing: '0.04em',
        }}>
          <span style={{ color: '#B8965A', fontWeight: 500 }}>$2,364 invested.</span>
          {' '}$1.8M+ in value protected.{' '}
          <span style={{ color: '#FAF8F5' }}>761× return.</span>
        </p>
      </div>

      {/* Pricing Tiers */}
      <section style={{
        padding: '7rem 2rem',
        background: '#FAF8F5',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          border: '1px solid #E0DAD2',
        }} className="pricing-grid">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              style={{
                padding: '3rem 2.5rem',
                borderRight: i < 2 ? '1px solid #E0DAD2' : 'none',
                background: tier.highlight ? '#1A1A1A' : '#FAF8F5',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#B8965A',
                }} />
              )}

              {/* Tier name */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: tier.highlight ? '#B8965A' : '#9C9590',
                marginBottom: '1.25rem',
              }}>
                {tier.name}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '3.5rem',
                  fontWeight: 400,
                  color: tier.highlight ? '#FAF8F5' : '#1A1A1A',
                  lineHeight: 1,
                }}>
                  {tier.price}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: tier.highlight ? '#6B6560' : '#9C9590',
                  marginLeft: '0.5rem',
                }}>
                  {tier.period}
                </span>
              </div>

              {/* Tagline */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: tier.highlight ? '#9C9590' : '#6B6560',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: `1px solid ${tier.highlight ? '#2C2C2C' : '#E0DAD2'}`,
              }}>
                {tier.tagline}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
                {tier.features.map((f) => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.875rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 300,
                    color: tier.highlight ? '#9C9590' : '#6B6560',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      color: '#B8965A',
                      flexShrink: 0,
                      marginTop: '1px',
                      fontSize: '0.875rem',
                    }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* ROI note */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#B8965A',
                lineHeight: 1.5,
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                {tier.roi}
              </p>

              {/* CTA */}
              <Link
                href={tier.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.9rem 2rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: tier.highlight ? '#B8965A' : 'transparent',
                  color: tier.highlight ? '#FAF8F5' : '#1A1A1A',
                  border: `1px solid ${tier.highlight ? '#B8965A' : '#1A1A1A'}`,
                  transition: 'background 0.3s ease, color 0.3s ease',
                }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise row */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          marginTop: '0',
          border: '1px solid #E0DAD2',
          borderTop: 'none',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          background: '#FAF8F5',
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#9C9590',
              marginBottom: '0.5rem',
            }}>
              Enterprise
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '0.5rem',
            }}>
              For brokerages, family offices, and PE firms
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 300,
              color: '#9C9590',
            }}>
              Custom pricing · White-label · API access · Dedicated support · Volume licensing
            </p>
          </div>
          <Link href="mailto:hello@successionio.com" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#1A1A1A',
            textDecoration: 'none',
            border: '1px solid #1A1A1A',
            padding: '0.9rem 2rem',
            whiteSpace: 'nowrap',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: '7rem 2rem',
        background: '#F2EFE9',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.5rem',
          }}>
            Common Questions
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '4rem',
            lineHeight: 1.15,
          }}>
            What you need to know
          </h2>

          {[
            {
              q: 'How long does the initial assessment take?',
              a: 'The AI-guided interview takes 45–60 minutes. Your Deal Readiness Score and executive summary are ready within 24 hours.',
            },
            {
              q: 'Can I share my results with my broker?',
              a: 'Yes. Every plan includes a shareable deal room link and PDF export specifically formatted for broker conversations.',
            },
            {
              q: 'What if I\'m not planning to sell for several years?',
              a: 'The best time to start is now. Businesses that document their operations 2–3 years before sale consistently achieve higher multiples.',
            },
            {
              q: 'Is my information confidential?',
              a: 'Absolutely. Your data is encrypted, never shared with third parties, and you control who sees your deal room.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Monthly plans can be cancelled at any time with no penalty. Your data and reports remain accessible.',
            },
          ].map((item, i) => (
            <div key={item.q} style={{
              paddingTop: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid #E0DAD2',
            }}>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.875rem',
                lineHeight: 1.3,
              }}>
                {item.q}
              </h4>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.8,
              }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { border-right: none !important; border-bottom: 1px solid #E0DAD2; }
          .pricing-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
