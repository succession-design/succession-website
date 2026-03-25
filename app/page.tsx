'use client';

import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — deal infrastructure framing
───────────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: '#FAF8F5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2rem',
      paddingTop: '72px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '860px' }}>
          {/* Label */}
          <p className="label fade-up delay-1" style={{ marginBottom: '2rem' }}>
            Deal Readiness Infrastructure
          </p>

          {/* Headline — leads with the deal, not the owner's feelings */}
          <h1 className="fade-up delay-2" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 6.5vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            marginBottom: '2.5rem',
          }}>
            The document every<br />
            serious buyer asks for.<br />
            <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Now standardized.</em>
          </h1>

          {/* Subhead — positions as required, not optional */}
          <p className="fade-up delay-3" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '3.5rem',
          }}>
            SuccessionIO produces a verified Deal Readiness Score and buyer-ready playbook from a single structured interview. Brokers request it. Buyers trust it. Lenders reference it.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/assessment" className="btn-primary">
              Get Your Score
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/how-it-works" className="btn-ghost">
              See How It Works
            </Link>
          </div>
        </div>

        {/* Stat bar */}
        <div className="fade-up delay-4" style={{
          marginTop: '6rem',
          paddingTop: '3rem',
          borderTop: '1px solid #E0DAD2',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '680px',
        }}>
          {[
            { value: '4.5M', label: 'businesses transferring this decade' },
            { value: '$2.4T', label: 'in business value at stake' },
            { value: '80%', label: 'of deals fail due to knowledge gaps' },
          ].map((s) => (
            <div key={s.label}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.25rem',
                fontWeight: 400,
                color: '#1A1A1A',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>{s.value}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#9C9590',
                lineHeight: 1.5,
                letterSpacing: '0.02em',
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DEAL STACK SIGNAL BAR — who uses this and why
───────────────────────────────────────────────────────────────────────────── */
function DealStackBar() {
  const parties = [
    {
      role: 'Business Owners',
      signal: 'Use it to enter the market prepared — with a verified score and documented playbook before the first buyer conversation.',
    },
    {
      role: 'Business Brokers',
      signal: 'Require it before listing. Sellers with a Deal Readiness Score close faster, at higher multiples, with fewer surprises in due diligence.',
    },
    {
      role: 'Buyers & Acquirers',
      signal: 'Reference it during diligence. A scored playbook reduces information asymmetry and accelerates the path to LOI.',
    },
    {
      role: 'Lenders & Advisors',
      signal: 'Rely on it for underwriting. Documented operations and verified financials reduce deal risk and support stronger loan structures.',
    },
  ];

  return (
    <section style={{
      padding: '7rem 2rem',
      background: '#F2EFE9',
      borderTop: '1px solid #E0DAD2',
      borderBottom: '1px solid #E0DAD2',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p className="label" style={{ marginBottom: '1.25rem' }}>Used Across the Deal Stack</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.1,
            maxWidth: '600px',
          }}>
            Infrastructure for every party<br />
            <em style={{ fontStyle: 'italic', color: '#B8965A' }}>in the transaction.</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }} className="deal-stack-grid">
          {parties.map((p, i) => (
            <div
              key={p.role}
              style={{
                padding: '2.5rem 2.5rem 2.5rem 0',
                paddingLeft: i === 0 ? '0' : '2.5rem',
                borderLeft: i > 0 ? '1px solid #E0DAD2' : 'none',
              }}
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#B8965A',
                marginBottom: '1rem',
              }}>{p.role}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.75,
              }}>{p.signal}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .deal-stack-grid { grid-template-columns: 1fr 1fr !important; }
          .deal-stack-grid > div { border-left: none !important; padding-left: 0 !important; border-top: 1px solid #E0DAD2; padding-top: 2rem; }
          .deal-stack-grid > div:first-child, .deal-stack-grid > div:nth-child(2) { border-top: none; }
        }
        @media (max-width: 560px) {
          .deal-stack-grid { grid-template-columns: 1fr !important; }
          .deal-stack-grid > div:nth-child(2) { border-top: 1px solid #E0DAD2; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   THE PROBLEM
───────────────────────────────────────────────────────────────────────────── */
function TheProblem() {
  return (
    <section style={{
      padding: '9rem 2rem',
      background: '#1A1A1A',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }} className="problem-grid">
          {/* Left */}
          <div>
            <p className="label" style={{ color: '#B8965A', marginBottom: '1.5rem' }}>The Problem</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 400,
              color: '#FAF8F5',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}>
              Value undocumented<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>is value discounted.</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#9C9590',
              lineHeight: 1.85,
              maxWidth: '440px',
            }}>
              The real value of a business — its customer relationships, operational systems, competitive advantages, and institutional knowledge — rarely exists in any document. When buyers can&apos;t verify it, they price in the risk. That discount is avoidable.
            </p>
          </div>

          {/* Right — consequences */}
          <div style={{ paddingTop: '0.5rem' }}>
            {[
              {
                stat: '20–40%',
                label: 'valuation discount applied when operations aren\'t documented',
              },
              {
                stat: '50%',
                label: 'of SMB deals collapse during due diligence — most due to information gaps',
              },
              {
                stat: '6–18 mo',
                label: 'average time lost when sellers enter the market unprepared',
              },
            ].map((item, i) => (
              <div
                key={item.stat}
                style={{
                  padding: '2rem 0',
                  borderBottom: i < 2 ? '1px solid #2C2C2C' : 'none',
                }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '3rem',
                  fontWeight: 400,
                  color: '#B8965A',
                  lineHeight: 1,
                  marginBottom: '0.625rem',
                }}>{item.stat}</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.6,
                }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HOW IT WORKS (brief — links to full page)
───────────────────────────────────────────────────────────────────────────── */
function HowItWorksBrief() {
  const steps = [
    {
      num: '01',
      title: 'The AI Interview',
      body: 'A guided 45-minute structured interview captures your operations, relationships, financials, and competitive advantages — the information buyers require.',
    },
    {
      num: '02',
      title: 'The Playbook',
      body: 'SuccessionIO formats your responses into a complete, broker-ready business playbook — the document that answers every question before due diligence begins.',
    },
    {
      num: '03',
      title: 'The Score',
      body: 'A verified Deal Readiness Score is calculated across five pillars. It travels with your deal — shared with brokers, buyers, and lenders as a standardized credential.',
    },
  ];

  return (
    <section style={{ padding: '9rem 2rem', background: '#FAF8F5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <p className="label" style={{ marginBottom: '1.25rem' }}>How It Works</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.1,
            }}>
              One session.<br />A complete deal package.
            </h2>
          </div>
          <Link href="/how-it-works" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6B6560',
            textDecoration: 'none',
            borderBottom: '1px solid #E0DAD2',
            paddingBottom: '2px',
            transition: 'color 0.2s ease, border-color 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1A1A1A';
            e.currentTarget.style.borderColor = '#1A1A1A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6B6560';
            e.currentTarget.style.borderColor = '#E0DAD2';
          }}>
            Full process →
          </Link>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
        }} className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: '3rem',
                borderLeft: i > 0 ? '1px solid #E0DAD2' : 'none',
              }}
              className="step-item"
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '4rem',
                fontWeight: 300,
                color: '#E0DAD2',
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}>{step.num}</p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}>{step.title}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.8,
              }}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '5rem',
          paddingTop: '4rem',
          borderTop: '1px solid #E0DAD2',
          textAlign: 'center',
        }}>
          <Link href="/assessment" className="btn-primary">
            Start Your Assessment
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-item { border-left: none !important; border-top: 1px solid #E0DAD2; padding: 2.5rem 0 !important; }
          .step-item:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SCORE REFRAME — market credential, not personal insight
───────────────────────────────────────────────────────────────────────────── */
function ScoreCredential() {
  return (
    <section style={{
      padding: '9rem 2rem',
      background: '#1A1A1A',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8rem',
          alignItems: 'center',
        }} className="score-grid">

          {/* Left — score visual */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              border: '2px solid #B8965A',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '5rem',
                fontWeight: 400,
                color: '#FAF8F5',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>78</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#B8965A',
              }}>Deal Ready</p>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6B6560',
            }}>Sample Deal Readiness Score</p>

            {/* Five pillars mini */}
            <div style={{ marginTop: '2.5rem', textAlign: 'left', maxWidth: '300px', margin: '2.5rem auto 0' }}>
              {[
                { label: 'Financial Clarity', score: 82 },
                { label: 'Operational Independence', score: 67 },
                { label: 'Customer Defensibility', score: 74 },
                { label: 'Market Position', score: 88 },
                { label: 'Transition Readiness', score: 55 },
              ].map((p) => (
                <div key={p.label} style={{ marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 300, color: '#9C9590' }}>{p.label}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 400, color: '#B8965A' }}>{p.score}</span>
                  </div>
                  <div style={{ height: '2px', background: '#2C2C2C', borderRadius: '1px' }}>
                    <div style={{ height: '100%', width: `${p.score}%`, background: '#B8965A', borderRadius: '1px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — market credential framing */}
          <div>
            <p className="label" style={{ color: '#B8965A', marginBottom: '1.5rem' }}>The Deal Readiness Score</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#FAF8F5',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}>
              Not a self-assessment.<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>A market credential.</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#9C9590',
              lineHeight: 1.85,
              marginBottom: '3rem',
            }}>
              Your Deal Readiness Score is calculated across five verified pillars and expressed as a single number from 0–100. It travels with your deal — shared with your broker before listing, presented to buyers during diligence, and referenced by lenders during underwriting. Think of it the way the market thinks of a credit score: not optional, just expected.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}>
              {[
                { party: 'Brokers', action: 'Require it before listing' },
                { party: 'Buyers', action: 'Reference it in diligence' },
                { party: 'Lenders', action: 'Use it in underwriting' },
                { party: 'Advisors', action: 'Share it with their network' },
              ].map((item) => (
                <div key={item.party} style={{
                  padding: '1.25rem',
                  border: '1px solid #2C2C2C',
                }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#B8965A',
                    marginBottom: '0.5rem',
                  }}>{item.party}</p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 300,
                    color: '#6B6560',
                  }}>{item.action}</p>
                </div>
              ))}
            </div>

            <Link href="/assessment" className="btn-primary">
              Get Your Score
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .score-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TESTIMONIALS — owner + broker voice
───────────────────────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section style={{
      padding: '9rem 2rem',
      background: '#F2EFE9',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="testimonials-grid">

          {/* Owner voice */}
          <div>
            <span className="divider-gold" style={{ marginBottom: '3rem', display: 'block' }} />
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.4,
              marginBottom: '2.5rem',
            }}>
              &ldquo;I built this business over 27 years. The last thing I wanted was to leave money on the table because I never wrote any of it down.&rdquo;
            </blockquote>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9C9590',
            }}>
              Business Owner — Manufacturing
            </p>
          </div>

          {/* Broker voice */}
          <div style={{ borderLeft: '1px solid #E0DAD2', paddingLeft: '5rem' }} className="broker-quote">
            <span className="divider-gold" style={{ marginBottom: '3rem', display: 'block' }} />
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.4,
              marginBottom: '2.5rem',
            }}>
              &ldquo;I now require every seller to complete a SuccessionIO assessment before I list their business. It cuts due diligence time in half and eliminates the surprises that kill deals.&rdquo;
            </blockquote>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9C9590',
            }}>
              Business Broker — M&amp;A Advisory
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .broker-quote { border-left: none !important; padding-left: 0 !important; border-top: 1px solid #E0DAD2; padding-top: 3rem; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL CTA — deal-ready language
───────────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section style={{
      padding: '10rem 2rem',
      background: '#1A1A1A',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <p className="label" style={{ color: '#B8965A', marginBottom: '2rem' }}>
          Enter the Market Prepared
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 400,
          color: '#FAF8F5',
          lineHeight: 1.1,
          marginBottom: '2rem',
        }}>
          Your deal package,<br />
          <em style={{ fontStyle: 'italic', color: '#B8965A' }}>ready before they ask.</em>
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          fontWeight: 300,
          color: '#6B6560',
          lineHeight: 1.8,
          marginBottom: '3.5rem',
        }}>
          One structured interview. A verified score. A complete playbook. Everything the deal requires — produced before the first buyer conversation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            transition: 'background 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#B8965A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#B8965A';
            e.currentTarget.style.color = '#FAF8F5';
          }}>
            Get Your Score — $97
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
            transition: 'border-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#6B6560';
            e.currentTarget.style.color = '#FAF8F5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2C2C2C';
            e.currentTarget.style.color = '#9C9590';
          }}>
            View All Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <DealStackBar />
      <TheProblem />
      <HowItWorksBrief />
      <ScoreCredential />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
