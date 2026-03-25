'use client';

import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO
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
        <div style={{ maxWidth: '820px' }}>
          {/* Label */}
          <p className="label fade-up delay-1" style={{ marginBottom: '2rem' }}>
            Business Succession Intelligence
          </p>

          {/* Headline */}
          <h1 className="fade-up delay-2" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 6.5vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            marginBottom: '2.5rem',
          }}>
            You built it<br />
            over decades.<br />
            <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Don&apos;t lose it<br />in the sale.</em>
          </h1>

          {/* Subhead */}
          <p className="fade-up delay-3" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            maxWidth: '520px',
            marginBottom: '3.5rem',
          }}>
            SuccessionIO captures the knowledge inside your business — the processes, relationships, and decisions that only you understand — and turns it into a buyer-ready playbook with a verified Deal Readiness Score.
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
              Your business lives<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>inside your head.</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#9C9590',
              lineHeight: 1.85,
              maxWidth: '440px',
            }}>
              After 20 or 30 years, the real value of your business — the relationships, the processes, the institutional knowledge — exists nowhere but in your memory. When buyers can&apos;t see it, they discount it. Or they walk away entirely.
            </p>
          </div>

          {/* Right — consequences */}
          <div style={{ paddingTop: '0.5rem' }}>
            {[
              {
                stat: '20–40%',
                label: 'discount applied when knowledge isn\'t documented',
              },
              {
                stat: '50%',
                label: 'of SMB deals collapse during due diligence',
              },
              {
                stat: '27 years',
                label: 'average time to build a business — lost in weeks without a playbook',
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
      body: 'A guided 45-minute conversation captures your operations, relationships, financials, and competitive advantages — in your own words.',
    },
    {
      num: '02',
      title: 'The Playbook',
      body: 'SuccessionIO structures your answers into a formatted, buyer-ready business playbook covering all five pillars of deal readiness.',
    },
    {
      num: '03',
      title: 'The Score',
      body: 'Your Deal Readiness Score is calculated across every dimension — giving you, your broker, and buyers a clear picture of where you stand.',
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
              Three steps.<br />One complete picture.
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
                color: '#E8E3DA',
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
   TESTIMONIAL — single quote, full width
───────────────────────────────────────────────────────────────────────────── */
function Testimonial() {
  return (
    <section style={{
      padding: '9rem 2rem',
      background: '#F2EFE9',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <span className="divider-gold" style={{ margin: '0 auto 3rem' }} />
        <blockquote style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#1A1A1A',
          lineHeight: 1.4,
          marginBottom: '3rem',
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
          Small Business Owner — Manufacturing
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#B8965A',
          marginTop: '0.5rem',
        }}>
          This is why SuccessionIO exists.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL CTA
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
          Begin Today
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 400,
          color: '#FAF8F5',
          lineHeight: 1.1,
          marginBottom: '2rem',
        }}>
          Know what your<br />
          business is worth.
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          fontWeight: 300,
          color: '#6B6560',
          lineHeight: 1.8,
          marginBottom: '3.5rem',
        }}>
          Start with a single session. No commitment required.
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
      <TheProblem />
      <HowItWorksBrief />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
