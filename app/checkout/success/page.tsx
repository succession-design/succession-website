'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const TIER_DETAILS: Record<string, { name: string; next: string; nextHref: string }> = {
  trial: {
    name: 'Trial',
    next: 'Complete your Deal Readiness Assessment',
    nextHref: '/assessment',
  },
  core: {
    name: 'Core Platform',
    next: 'Start your first AI interview session',
    nextHref: '/assessment',
  },
  continuity: {
    name: 'Continuity',
    next: 'Access your dedicated advisor dashboard',
    nextHref: '/assessment',
  },
};

function SuccessContent() {
  const params = useSearchParams();
  const tier = params.get('tier') || 'trial';
  const details = TIER_DETAILS[tier] || TIER_DETAILS.trial;

  return (
    <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <section style={{
        paddingTop: 'clamp(8rem, 16vw, 13rem)',
        paddingBottom: 'clamp(6rem, 12vw, 10rem)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {/* Gold check mark */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '1.5px solid #B8965A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2.5rem',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L10 17L19 7" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1.5rem',
          }}>
            Payment Confirmed
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
            Welcome to SuccessionIO.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            marginBottom: '3rem',
          }}>
            Your <strong style={{ fontWeight: 400, color: '#1A1A1A' }}>{details.name}</strong> access is now active.
            A confirmation has been sent to your email. You're ready to begin.
          </p>

          {/* What's next */}
          <div style={{
            border: '1px solid #E0DAD2',
            padding: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#9C9590',
              marginBottom: '1.5rem',
            }}>
              Your Next Step
            </p>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #B8965A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#B8965A' }}>1</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '0.25rem',
                }}>
                  {details.next}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#9C9590',
                }}>
                  Takes approximately 45 minutes. You can pause and resume at any time.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E0DAD2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#9C9590' }}>2</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '0.25rem',
                }}>
                  Receive your Deal Readiness Score
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#9C9590',
                }}>
                  Your score, gap analysis, and playbook are generated immediately upon completion.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E0DAD2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#9C9590' }}>3</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '0.25rem',
                }}>
                  Schedule your consultation
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#9C9590',
                }}>
                  Call (832) 990-6378 or email succession@successionio.com to speak with an advisor.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={details.nextHref}
            style={{
              display: 'inline-block',
              padding: '0.9rem 3rem',
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
            Begin Assessment
          </Link>

        </div>
      </section>
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <main style={{ background: '#FAF8F5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#9C9590' }}>Loading...</p>
        </main>
      }>
        <SuccessContent />
      </Suspense>
      <Footer />
    </>
  );
}
