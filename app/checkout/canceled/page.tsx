'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CheckoutCanceledPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>
        <section style={{
          paddingTop: 'clamp(8rem, 16vw, 13rem)',
          paddingBottom: 'clamp(6rem, 12vw, 10rem)',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#9C9590',
              marginBottom: '1.5rem',
            }}>
              Checkout Canceled
            </p>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}>
              No charge was made.
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              marginBottom: '3rem',
            }}>
              Your payment was not processed. You can return to pricing whenever you're ready, or reach out if you have questions about which plan is right for you.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/pricing"
                style={{
                  display: 'inline-block',
                  padding: '0.9rem 2.5rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: '#1A1A1A',
                  color: '#FAF8F5',
                  border: '1px solid #1A1A1A',
                }}
              >
                Return to Pricing
              </Link>

              <a
                href="mailto:succession@successionio.com?subject=Pricing%20Question"
                style={{
                  display: 'inline-block',
                  padding: '0.9rem 2.5rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: 'transparent',
                  color: '#1A1A1A',
                  border: '1px solid #1A1A1A',
                }}
              >
                Ask a Question
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
