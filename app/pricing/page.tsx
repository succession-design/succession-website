'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const tiers = [
  {
    id: 'trial',
    name: 'Deal Prep',
    price: '$97',
    period: 'one-time',
    tagline: 'Enter the market with a verified score and documented playbook',
    features: [
      'One AI-guided interview session',
      'Verified Deal Readiness Score',
      'Gap Analysis Report',
      '20-page Buyer-Ready Playbook',
      'Top 3 deal risk areas identified',
      'PDF export for broker conversations',
      '30-day platform access',
    ],
    cta: 'Get Deal Ready — $97',
    highlight: false,
    roi: '761× average return on investment',
  },
  {
    id: 'core',
    name: 'Deal Platform',
    price: '$197',
    period: 'per month',
    tagline: 'A complete, continuously updated deal package for serious sellers',
    features: [
      'Everything in Deal Prep',
      'Unlimited AI interview sessions',
      'Full 5-pillar business playbook',
      'Monthly Deal Readiness Score updates',
      'Broker-shareable deal room',
      'Buyer Q&A response templates',
      'Priority email support',
    ],
    cta: 'Start Deal Platform',
    highlight: true,
    roi: 'Protects $360K–$720K in negotiated value',
  },
  {
    id: 'continuity',
    name: 'Transaction Suite',
    price: '$347',
    period: 'per month',
    tagline: 'Institutional-grade deal infrastructure from first conversation to close',
    features: [
      'Everything in Deal Platform',
      'Dedicated succession advisor',
      'White-label reports for your broker',
      'Multi-stakeholder deal room',
      'Buyer NDA management',
      'LOI and term sheet guidance',
      'Post-close transition planning',
      'Phone and video support',
    ],
    cta: 'Start Transaction Suite',
    highlight: false,
    roi: 'Full institutional deal support',
  },
];

const faqs = [
  {
    q: 'What happens after I pay for Deal Prep?',
    a: 'You\'ll complete the Deal Readiness Assessment, then receive your verified score, Gap Analysis, and 20-page Buyer-Ready Playbook within 24 hours. You\'ll also get 30 days of platform access to review and download your materials.',
  },
  {
    q: 'Can I upgrade from Deal Prep to a monthly plan?',
    a: 'Yes. At any time during or after Deal Prep, you can upgrade to Deal Platform or Transaction Suite. Your assessment data and playbook carry over seamlessly.',
  },
  {
    q: 'Is there a contract for monthly plans?',
    a: 'No contracts. Cancel anytime. Your access continues through the end of the billing period.',
  },
  {
    q: 'What if I\'m not ready to sell yet?',
    a: 'That\'s actually the best time to start. Owners who begin preparation 2–3 years before their target exit date consistently achieve better outcomes. The Deal Platform is designed for exactly this scenario — building and maintaining your deal package over time.',
  },
  {
    q: 'What does Enterprise include?',
    a: 'Enterprise is designed for brokerages, family offices, and PE firms managing multiple transactions. It includes white-label reports, API access, volume licensing, and a dedicated account team. Contact us for custom pricing.',
  },
];

export default function PricingPage() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (tierId: string) => {
    setLoadingTier(tierId);
    setError(null);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tierId }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Unable to start checkout. Please try again.');
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoadingTier(null);
    }
  };

  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          paddingTop: 'clamp(7rem, 14vw, 11rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
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
              lineHeight: 1.08,
              color: '#1A1A1A',
              marginBottom: '1.75rem',
              letterSpacing: '-0.01em',
            }}>
              Deal infrastructure.<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Priced to close.</em>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
            }}>
              Brokers require it. Buyers reference it. Lenders rely on it. Every tier produces a verified Deal Readiness Score and buyer-ready playbook — the documents your deal depends on.
            </p>
          </div>
        </section>

        {/* ROI Banner */}
        <div style={{ background: '#1A1A1A', padding: '1.5rem 2rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: '#9C9590',
            letterSpacing: '0.04em',
            margin: 0,
          }}>
            <span style={{ color: '#B8965A', fontWeight: 500 }}>$2,364 invested.</span>
            {' '}$1.8M+ in value protected.{' '}
            <span style={{ color: '#FAF8F5' }}>761× return.</span>
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            maxWidth: '1100px',
            margin: '2rem auto 0',
            padding: '1rem 2rem',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            color: '#DC2626',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 300,
          }}>
            {error}
          </div>
        )}

        {/* Pricing Tiers */}
        <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            border: '1px solid #E0DAD2',
          }}>
            {tiers.map((tier, i) => (
              <div
                key={tier.id}
                style={{
                  padding: '3rem 2.5rem',
                  borderRight: i < 2 ? '1px solid #E0DAD2' : 'none',
                  background: tier.highlight ? '#1A1A1A' : '#FAF8F5',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
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

                <ul style={{ listStyle: 'none', marginBottom: '2.5rem', flexGrow: 1 }}>
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
                      <span style={{ color: '#B8965A', flexShrink: 0, marginTop: '1px' }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>

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

                <button
                  onClick={() => handleCheckout(tier.id)}
                  disabled={loadingTier !== null}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0.9rem 2rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: loadingTier !== null ? 'wait' : 'pointer',
                    background: tier.highlight ? '#B8965A' : 'transparent',
                    color: tier.highlight ? '#FAF8F5' : '#1A1A1A',
                    border: `1px solid ${tier.highlight ? '#B8965A' : '#1A1A1A'}`,
                    opacity: loadingTier !== null && loadingTier !== tier.id ? 0.5 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {loadingTier === tier.id ? 'Redirecting to checkout...' : tier.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Enterprise row */}
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
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
            <a
              href="mailto:succession@successionio.com?subject=Enterprise%20Inquiry"
              style={{
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
              }}
            >
              Contact for Enterprise
            </a>
          </div>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '900px', margin: '0 auto' }} /></div>

        {/* FAQ */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.25rem',
          }}>
            Common Questions
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '3.5rem',
            lineHeight: 1.15,
          }}>
            Everything you need to know
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                padding: '2rem 0',
                borderBottom: '1px solid #E0DAD2',
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '3rem',
                alignItems: 'start',
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {faq.q}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
