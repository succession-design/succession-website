'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const S = {
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.6875rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#B8965A',
    marginBottom: '1.25rem',
    display: 'block',
  },
  h1: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(2.75rem, 6vw, 5rem)',
    fontWeight: 400,
    color: '#1A1A1A',
    lineHeight: 1.08,
    letterSpacing: '-0.01em',
    marginBottom: '2rem',
  },
  h2: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
    fontWeight: 400,
    color: '#1A1A1A',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9375rem',
    fontWeight: 300,
    color: '#6B6560',
    lineHeight: 1.9,
  },
  lead: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.0625rem',
    fontWeight: 300,
    color: '#6B6560',
    lineHeight: 1.85,
    maxWidth: '600px',
  },
  divider: {
    height: '1px',
    background: '#E0DAD2',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 2rem',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(7rem, 14vw, 11rem) 2rem clamp(4rem, 8vw, 6rem)', maxWidth: '900px', margin: '0 auto' }}>
          <span style={S.label}>About SuccessionIO</span>
          <h1 style={S.h1}>
            Built by people who've seen<br />what happens when owners<br />aren't ready.
          </h1>
          <p style={S.lead}>
            SuccessionIO was built because the problem is too costly to ignore. Every year, thousands of business owners leave millions on the table — not because their businesses aren't valuable, but because they weren't prepared to prove it.
          </p>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '900px', margin: '0 auto' }} /></div>

        {/* Origin Story */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <span style={S.label}>Why We Built This</span>
            <h2 style={S.h2}>
              The gap between value and exit price is a documentation problem.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={S.body}>
              We've sat across the table from business owners who built extraordinary companies — 20, 30, 40 years of work — only to watch deals collapse or close at a fraction of their worth because buyers couldn't see what the owner knew.
            </p>
            <p style={S.body}>
              The problem isn't the business. The problem is that the business lives in the owner's head. Buyers price risk. When they can't see the systems, the customers, the financials, the team — they discount. Heavily.
            </p>
            <p style={S.body}>
              SuccessionIO was built to close that gap. To give owners a structured way to surface, document, and present the value that's already there — before the buyer ever walks in the door.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: '#1A1A1A', padding: 'clamp(3.5rem, 7vw, 5rem) 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {[
              { stat: '10,000+', label: 'Baby boomers retiring daily' },
              { stat: '$2.4T', label: 'In business value transferring' },
              { stat: '4.5M', label: 'Businesses changing hands' },
              { stat: '20–40%', label: 'Avg. discount from unpreparedness' },
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 400, color: '#B8965A', marginBottom: '0.625rem', lineHeight: 1 }}>
                  {item.stat}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 300, color: '#9B9490', letterSpacing: '0.05em', lineHeight: 1.6 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <span style={S.label}>Our Mission</span>
            <h2 style={S.h2}>
              Every owner deserves to exit on their terms.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={S.body}>
              We believe the value of a business should be determined by what it's actually worth — not by how well the owner can explain it under pressure during due diligence.
            </p>
            <p style={S.body}>
              SuccessionIO's mission is to give every business owner — regardless of size, industry, or exit timeline — the tools to document their business, understand their readiness, and enter any transaction with confidence.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '900px', margin: '0 auto' }} /></div>

        {/* LP Venture Group */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
          <span style={S.label}>Backed By</span>
          <h2 style={{ ...S.h2, marginBottom: '1.5rem', maxWidth: '480px' }}>LP Venture Group</h2>
          <p style={{ ...S.body, maxWidth: '600px', marginBottom: '3.5rem' }}>
            SuccessionIO is a venture of LP Venture Group — a business development and venture capital firm focused on building institutional-grade solutions for business owners navigating growth, transition, and exit.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', border: '1px solid #E0DAD2', marginBottom: '3rem' }}>
            {[
              { title: 'Industry Expertise', desc: 'Deep experience in M&A, succession, and business continuity' },
              { title: 'Technology', desc: 'AI-powered documentation and deal readiness infrastructure' },
              { title: 'Market Access', desc: 'Relationships with owners, advisors, brokers, and institutional buyers' },
              { title: 'Operational Scale', desc: 'Experienced team built to grow and support the platform' },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '2rem 1.75rem',
                borderRight: idx < 3 ? '1px solid #E0DAD2' : 'none',
                borderBottom: '0',
              }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', fontWeight: 300, color: '#6B6560', lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://lpventuregroup.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#1A1A1A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderBottom: '1px solid #1A1A1A',
              paddingBottom: '2px',
            }}
          >
            Visit LP Venture Group →
          </a>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '900px', margin: '0 auto' }} /></div>

        {/* Contact */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
          <span style={S.label}>Contact</span>
          <h2 style={{ ...S.h2, marginBottom: '3rem', maxWidth: '480px' }}>
            Ready to talk?
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:succession@successionio.com"
              style={{
                display: 'inline-block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#FAF8F5',
                background: '#1A1A1A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '1rem 2rem',
              }}
            >
              Email Us
            </a>
            <a
              href="tel:8329906378"
              style={{
                display: 'inline-block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#1A1A1A',
                border: '1px solid #1A1A1A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '1rem 2rem',
              }}
            >
              (832) 990-6378
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
