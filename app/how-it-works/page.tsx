'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  const pillars = [
    {
      num: '01',
      title: 'Financial Clarity',
      body: 'Revenue trends, EBITDA, owner compensation adjustments, and working capital requirements — structured for buyer review.',
    },
    {
      num: '02',
      title: 'Operational Independence',
      body: 'Documented processes, key personnel, vendor relationships, and the degree to which the business runs without you.',
    },
    {
      num: '03',
      title: 'Customer Defensibility',
      body: 'Concentration risk, contract terms, retention rates, and the strength of your customer relationships.',
    },
    {
      num: '04',
      title: 'Market Position',
      body: 'Competitive advantages, pricing power, barriers to entry, and your position within the industry landscape.',
    },
    {
      num: '05',
      title: 'Transition Readiness',
      body: 'Management depth, knowledge transfer plan, earnout alignment, and the owner\'s role post-close.',
    },
  ];

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
          <div style={{ maxWidth: '680px' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.75rem',
            }}>
              How It Works
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              marginBottom: '2rem',
            }}>
              From conversation<br />
              to <em style={{ fontStyle: 'italic', color: '#B8965A' }}>deal-ready.</em>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
            }}>
              SuccessionIO uses a structured AI interview to extract the institutional knowledge inside your business — the kind that lives in your head after decades of building — and transforms it into a buyer-ready playbook with a verified Deal Readiness Score.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section style={{
        padding: '7rem 2rem',
        background: '#1A1A1A',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }} className="step-grid">
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '6rem',
              fontWeight: 300,
              color: '#2C2C2C',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}>01</p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              The Interview
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#FAF8F5',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
            }}>
              A conversation that captures everything.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#9C9590',
              lineHeight: 1.85,
            }}>
              Our AI conducts a guided 45-minute interview across all five pillars of deal readiness. It asks the questions a sophisticated buyer would ask — about your operations, your customers, your team, your financials, and your competitive position. You answer in plain language. The system structures it.
            </p>
          </div>
          <div style={{
            background: '#2C2C2C',
            padding: '3rem',
            borderLeft: '2px solid #B8965A',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.5rem',
            }}>
              Sample questions
            </p>
            {[
              '"Walk me through what happens on a typical Monday morning without you."',
              '"Which three customers, if lost, would materially change your revenue?"',
              '"What does your business do that a competitor couldn\'t replicate in 12 months?"',
              '"If you were hit by a bus tomorrow, what would break first?"',
            ].map((q) => (
              <p key={q} style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.125rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#FAF8F5',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #1A1A1A',
              }}>
                {q}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section style={{
        padding: '7rem 2rem',
        background: '#FAF8F5',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }} className="step-grid">
          <div style={{ order: 2 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '6rem',
              fontWeight: 300,
              color: '#E8E3DA',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}>02</p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              The Playbook
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
            }}>
              Your business, documented.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
            }}>
              SuccessionIO structures your interview into a formatted business playbook — the document that answers every question a buyer will ask before they make an offer. It covers all five pillars, is formatted for broker review, and can be shared directly in your deal room.
            </p>
          </div>

          {/* Five pillars */}
          <div style={{ order: 1 }}>
            {pillars.map((p, i) => (
              <div key={p.num} style={{
                display: 'flex',
                gap: '1.5rem',
                paddingBottom: '1.75rem',
                marginBottom: '1.75rem',
                borderBottom: i < 4 ? '1px solid #E0DAD2' : 'none',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: '#B8965A',
                  lineHeight: 1,
                  flexShrink: 0,
                  paddingTop: '0.25rem',
                }}>
                  {p.num}
                </span>
                <div>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}>
                    {p.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 300,
                    color: '#6B6560',
                    lineHeight: 1.7,
                  }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section style={{
        padding: '7rem 2rem',
        background: '#F2EFE9',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }} className="step-grid">
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '6rem',
              fontWeight: 300,
              color: '#E0DAD2',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}>03</p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              The Score
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
            }}>
              A number that tells the whole story.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              marginBottom: '2.5rem',
            }}>
              Your Deal Readiness Score is calculated across all five pillars and expressed as a single number from 0–100. It tells you, your broker, and prospective buyers exactly where your business stands — and where to focus before going to market.
            </p>
            <Link href="/assessment" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.9rem 2.5rem',
              background: '#1A1A1A',
              color: '#FAF8F5',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid #1A1A1A',
            }}>
              Get Your Score
            </Link>
          </div>

          {/* Score visual */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {[
              { label: 'Financial Clarity', score: 82 },
              { label: 'Operational Independence', score: 67 },
              { label: 'Customer Defensibility', score: 74 },
              { label: 'Market Position', score: 88 },
              { label: 'Transition Readiness', score: 55 },
            ].map((item) => (
              <div key={item.label}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 300,
                    color: '#6B6560',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.125rem',
                    fontWeight: 400,
                    color: '#1A1A1A',
                  }}>
                    {item.score}
                  </span>
                </div>
                <div style={{
                  height: '2px',
                  background: '#E0DAD2',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${item.score}%`,
                    background: item.score >= 80 ? '#B8965A' : item.score >= 65 ? '#9C9590' : '#6B6560',
                  }} />
                </div>
              </div>
            ))}
            <div style={{
              marginTop: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #E0DAD2',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#9C9590',
              }}>
                Overall Deal Readiness
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.5rem',
                fontWeight: 400,
                color: '#B8965A',
              }}>
                73
              </span>
            </div>
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
            Ready to see your score?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            Start with a single session. Your Deal Readiness Score and executive summary are ready within 24 hours.
          </p>
          <Link href="/assessment" style={{
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
            Get Your Score — $97
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .step-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .step-grid > div[style*="order: 1"] { order: 1 !important; }
          .step-grid > div[style*="order: 2"] { order: 2 !important; }
        }
      `}</style>
    </>
  );
}
