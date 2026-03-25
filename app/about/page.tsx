'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.5rem',
          }}>
            About SuccessionIO
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.1,
            marginBottom: '2rem',
            maxWidth: '720px',
          }}>
            Built by people who've seen what happens when owners aren't ready.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            maxWidth: '620px',
          }}>
            SuccessionIO was built because the problem is too costly to ignore. Every year, thousands of business owners leave millions on the table — not because their businesses aren't valuable, but because they weren't prepared to prove it.
          </p>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '1px', background: '#E0DAD2' }} />
        </div>

        {/* Origin Story */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.5rem',
            }}>
              Why We Built This
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              The gap between value and exit price is a documentation problem.
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
            }}>
              We've sat across the table from business owners who built extraordinary companies — 20, 30, 40 years of work — only to watch deals collapse or close at a fraction of their worth because buyers couldn't see what the owner knew.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
            }}>
              The problem isn't the business. The problem is that the business lives in the owner's head. Buyers price risk. When they can't see the systems, the customers, the financials, the team — they discount. Heavily.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
            }}>
              SuccessionIO was built to close that gap. To give owners a structured way to surface, document, and present the value that's already there — before the buyer ever walks in the door.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{
          background: '#1A1A1A',
          padding: 'clamp(3rem, 6vw, 4rem) 2rem',
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}>
            {[
              { stat: '10,000+', label: 'Baby boomers retiring daily' },
              { stat: '$2.4T', label: 'In business value transferring' },
              { stat: '4.5M', label: 'Businesses changing hands' },
              { stat: '20–40%', label: 'Avg. discount from unpreparedness' },
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  color: '#B8965A',
                  marginBottom: '0.5rem',
                }}>
                  {item.stat}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#9B9490',
                  letterSpacing: '0.04em',
                  lineHeight: 1.5,
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#B8965A',
                marginBottom: '1.5rem',
              }}>
                Our Mission
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#1A1A1A',
                lineHeight: 1.2,
              }}>
                Every owner deserves to exit on their terms.
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}>
                We believe the value of a business should be determined by what it's actually worth — not by how well the owner can explain it under pressure during due diligence.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.85,
              }}>
                SuccessionIO's mission is to give every business owner — regardless of size, industry, or exit timeline — the tools to document their business, understand their readiness, and enter any transaction with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '1px', background: '#E0DAD2' }} />
        </div>

        {/* LP Venture Group */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.5rem',
          }}>
            Backed By
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.2,
            marginBottom: '2rem',
            maxWidth: '560px',
          }}>
            LP Venture Group
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            marginBottom: '3rem',
            maxWidth: '620px',
          }}>
            SuccessionIO is a venture of LP Venture Group — a business development and venture capital firm focused on building institutional-grade solutions for business owners navigating growth, transition, and exit.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0',
            border: '1px solid #E0DAD2',
            marginBottom: '3rem',
          }}>
            {[
              { title: 'Industry Expertise', desc: 'Deep experience in M&A, succession, and business continuity' },
              { title: 'Technology', desc: 'AI-powered documentation and deal readiness infrastructure' },
              { title: 'Market Access', desc: 'Relationships with owners, advisors, brokers, and institutional buyers' },
              { title: 'Operational Scale', desc: 'Experienced team built to grow and support the platform' },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                borderRight: idx < 3 ? '1px solid #E0DAD2' : 'none',
                borderBottom: '1px solid #E0DAD2',
              }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.02em',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="https://lpventuregroup.com"
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              background: 'transparent',
              color: '#1A1A1A',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid #1A1A1A',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#1A1A1A';
              (e.currentTarget as HTMLAnchorElement).style.color = '#FAF8F5';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#1A1A1A';
            }}
          >
            Visit LP Venture Group
          </Link>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '1px', background: '#E0DAD2' }} />
        </div>

        {/* Contact */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.5rem',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            maxWidth: '480px',
          }}>
            Questions? We'd like to hear from you.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            marginBottom: '2.5rem',
            maxWidth: '520px',
          }}>
            Whether you're a business owner exploring your options, an advisor looking to partner, or a broker interested in our platform — reach out.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:succession@successionio.com"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                background: '#1A1A1A',
                color: '#FAF8F5',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #1A1A1A',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#1A1A1A';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#1A1A1A';
                (e.currentTarget as HTMLAnchorElement).style.color = '#FAF8F5';
              }}
            >
              Email Us
            </a>
            <a
              href="tel:+18329906378"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                background: 'transparent',
                color: '#1A1A1A',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #1A1A1A',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#1A1A1A';
                (e.currentTarget as HTMLAnchorElement).style.color = '#FAF8F5';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#1A1A1A';
              }}
            >
              Call (832) 990-6378
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
