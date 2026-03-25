'use client';

import Link from 'next/link';

export default function ForBrokersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '7rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        background: '#FAF8F5',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.75rem',
            }}>
              For Brokers & Advisors
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              marginBottom: '2rem',
            }}>
              Your clients arrive<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>prepared.</em>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              maxWidth: '560px',
            }}>
              SuccessionIO gives brokers a structured diligence layer before the listing. Every seller arrives with a verified Deal Readiness Score, a formatted playbook, and answers to the questions buyers will ask. Less time on discovery. More time closing.
            </p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section style={{
        padding: '7rem 2rem',
        background: '#1A1A1A',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            borderTop: '1px solid #2C2C2C',
          }} className="value-grid">
            {[
              {
                stat: '40%',
                label: 'reduction in discovery time',
                body: 'Sellers arrive with documented answers to the questions you\'d spend weeks extracting.',
              },
              {
                stat: '2×',
                label: 'faster time to LOI',
                body: 'Buyers move faster when the information they need is already structured and verified.',
              },
              {
                stat: '3×',
                label: 'higher listing confidence',
                body: 'A Deal Readiness Score gives you and your buyer a shared language for valuation conversations.',
              },
            ].map((item, i) => (
              <div key={item.stat} style={{
                padding: '3.5rem 2.5rem',
                borderRight: i < 2 ? '1px solid #2C2C2C' : 'none',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '3.5rem',
                  fontWeight: 400,
                  color: '#B8965A',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {item.stat}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#6B6560',
                  marginBottom: '1.25rem',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#9C9590',
                  lineHeight: 1.75,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Office Features */}
      <section style={{
        padding: '7rem 2rem',
        background: '#FAF8F5',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '5rem' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              Back Office
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              Everything your team needs. Nothing it doesn&apos;t.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.8,
            }}>
              The broker dashboard gives your back office a complete view of every client&apos;s deal readiness, deal room activity, and outstanding gaps — all in one place.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0',
            border: '1px solid #E0DAD2',
          }} className="features-grid">
            {[
              {
                title: 'Deal Dashboard',
                body: 'A single view of all your active listings, each with their Deal Readiness Score, playbook completion status, and buyer activity.',
              },
              {
                title: 'White-Label Reports',
                body: 'Export branded deal packages under your brokerage name. Present buyers with a professional, structured information memorandum.',
              },
              {
                title: 'Multi-User Deal Rooms',
                body: 'Invite your team, the seller, and qualified buyers to a shared deal room with role-based access and NDA management.',
              },
              {
                title: 'Automated Gap Alerts',
                body: 'SuccessionIO flags documentation gaps and sends automated reminders to sellers — so your team doesn\'t have to chase.',
              },
              {
                title: 'Buyer Q&A Management',
                body: 'Buyers submit questions directly in the deal room. Sellers respond with AI-assisted answers. Everything is logged and searchable.',
              },
              {
                title: 'Analytics & Reporting',
                body: 'Track time-to-LOI, buyer engagement, and deal velocity across your entire portfolio. Identify what\'s working and what isn\'t.',
              },
            ].map((feature, i) => (
              <div key={feature.title} style={{
                padding: '2.5rem',
                borderRight: i % 2 === 0 ? '1px solid #E0DAD2' : 'none',
                borderBottom: i < 4 ? '1px solid #E0DAD2' : 'none',
              }}>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2,
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.8,
                }}>
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section style={{
        padding: '7rem 2rem',
        background: '#F2EFE9',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '5rem' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              Support
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Support that matches your volume.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid #E0DAD2',
          }} className="support-grid">
            {[
              {
                tier: 'Standard',
                price: 'Included',
                features: [
                  'Email support (48hr response)',
                  'Help center access',
                  'Video tutorials',
                  'Monthly product updates',
                ],
              },
              {
                tier: 'Priority',
                price: 'Core & above',
                features: [
                  'Email support (4hr response)',
                  'Live chat during business hours',
                  'Onboarding call',
                  'Dedicated account manager',
                  'Quarterly business reviews',
                ],
                highlight: true,
              },
              {
                tier: 'Dedicated',
                price: 'Enterprise',
                features: [
                  'Phone and video support',
                  'Dedicated success manager',
                  'Custom onboarding program',
                  'SLA guarantees',
                  'On-site training available',
                  'Custom integrations',
                ],
              },
            ].map((tier, i) => (
              <div key={tier.tier} style={{
                padding: '3rem 2.5rem',
                borderRight: i < 2 ? '1px solid #E0DAD2' : 'none',
                background: tier.highlight ? '#1A1A1A' : 'transparent',
                position: 'relative',
              }}>
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
                  marginBottom: '0.75rem',
                }}>
                  {tier.tier}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: tier.highlight ? '#FAF8F5' : '#1A1A1A',
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: `1px solid ${tier.highlight ? '#2C2C2C' : '#E0DAD2'}`,
                }}>
                  {tier.price}
                </p>
                <ul style={{ listStyle: 'none' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{
                      display: 'flex',
                      gap: '0.75rem',
                      marginBottom: '0.875rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8125rem',
                      fontWeight: 300,
                      color: tier.highlight ? '#9C9590' : '#6B6560',
                      lineHeight: 1.5,
                    }}>
                      <span style={{ color: '#B8965A', flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '8rem 2rem',
        background: '#1A1A1A',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#FAF8F5',
            lineHeight: 1.15,
            marginBottom: '1.75rem',
          }}>
            Partner with SuccessionIO.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            We work with brokerages, M&A advisors, and family business consultants. Contact us to discuss a partnership or volume arrangement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="mailto:brokers@successionio.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1rem 2.75rem',
              background: '#B8965A',
              color: '#FAF8F5',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid #B8965A',
            }}>
              Contact Us
            </Link>
            <Link href="/pricing" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1rem 2.75rem',
              background: 'transparent',
              color: '#9C9590',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid #2C2C2C',
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .value-grid { grid-template-columns: 1fr !important; }
          .value-grid > div { border-right: none !important; border-bottom: 1px solid #2C2C2C; }
          .features-grid { grid-template-columns: 1fr !important; }
          .features-grid > div { border-right: none !important; }
          .support-grid { grid-template-columns: 1fr !important; }
          .support-grid > div { border-right: none !important; border-bottom: 1px solid #E0DAD2; }
        }
      `}</style>
    </>
  );
}
