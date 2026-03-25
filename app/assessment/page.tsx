'use client';

import { useRouter } from 'next/navigation';
import { DealReadinessForm } from '@/components/deal-readiness-form';

export default function AssessmentPage() {
  const router = useRouter();
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
              Deal Readiness Assessment
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              marginBottom: '2rem',
            }}>
              Know exactly where<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>your business stands.</em>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              maxWidth: '560px',
            }}>
              A 45-minute conversation that produces a verified Deal Readiness Score and a buyer-ready playbook. Get your score in 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* What is Deal Readiness */}
      <section style={{
        padding: '7rem 2rem',
        background: '#1A1A1A',
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
              The Five Pillars
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#FAF8F5',
              lineHeight: 1.15,
            }}>
              What we measure.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0',
            border: '1px solid #2C2C2C',
          }} className="pillars-grid">
            {[
              {
                num: '01',
                title: 'Financial Clarity',
                weight: '25%',
                body: 'Revenue trends, EBITDA, owner compensation adjustments, and working capital requirements — structured for buyer review.',
              },
              {
                num: '02',
                title: 'Operational Independence',
                weight: '20%',
                body: 'Documented processes, key personnel, vendor relationships, and the degree to which the business runs without you.',
              },
              {
                num: '03',
                title: 'Customer Defensibility',
                weight: '15%',
                body: 'Concentration risk, contract terms, retention rates, and the strength of your customer relationships.',
              },
              {
                num: '04',
                title: 'Market Position',
                weight: '20%',
                body: 'Competitive advantages, pricing power, barriers to entry, and your position within the industry landscape.',
              },
              {
                num: '05',
                title: 'Transition Readiness',
                weight: '20%',
                body: 'Management depth, knowledge transfer plan, earnout alignment, and the owner\'s role post-close.',
              },
            ].map((pillar, i) => (
              <div key={pillar.num} style={{
                padding: '3rem',
                borderRight: i % 2 === 0 ? '1px solid #2C2C2C' : 'none',
                borderBottom: i < 4 ? '1px solid #2C2C2C' : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: '#B8965A',
                    lineHeight: 1,
                  }}>
                    {pillar.num}
                  </p>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6B6560',
                  }}>
                    {pillar.weight}
                  </span>
                </div>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  color: '#FAF8F5',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2,
                }}>
                  {pillar.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#9C9590',
                  lineHeight: 1.8,
                }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Assessment */}
      <section style={{
        padding: '7rem 2rem',
        background: '#FAF8F5',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              Start Here
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              Your assessment begins.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.8,
              maxWidth: '560px',
              margin: '0 auto',
            }}>
              Answer questions across all five pillars. Be specific — the more detail you provide, the more valuable your score.
            </p>
          </div>

          {/* Form Component */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
            padding: '3rem',
            borderRadius: '0',
          }}>
            <DealReadinessForm
              onSubmit={(data) => {
                // Route to results page after form submission
                router.push('/assessment/results');
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              After Your Assessment
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              What you get.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid #E0DAD2',
          }} className="benefits-grid">
            {[
              {
                title: 'Deal Readiness Score',
                body: 'A single number (0–100) that tells you, your broker, and prospective buyers exactly where your business stands.',
              },
              {
                title: 'Buyer-Ready Playbook',
                body: 'A formatted document that answers every question a buyer will ask — structured across all five pillars.',
              },
              {
                title: 'Gap Analysis',
                body: 'Specific recommendations on which pillars to strengthen before going to market to maximize valuation.',
              },
            ].map((benefit, i) => (
              <div key={benefit.title} style={{
                padding: '3rem',
                borderRight: i < 2 ? '1px solid #E0DAD2' : 'none',
              }}>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2,
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.8,
                }}>
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: '7rem 2rem',
        background: '#FAF8F5',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              Questions
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Frequently asked.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}>
            {[
              {
                q: 'How long does the assessment take?',
                a: 'The interview takes 45 minutes. You\'ll receive your Deal Readiness Score and executive summary within 24 hours.',
              },
              {
                q: 'What if my score is low?',
                a: 'A lower score tells you exactly where to focus before going to market. Our gap analysis provides specific recommendations for each pillar.',
              },
              {
                q: 'Can I retake the assessment?',
                a: 'Yes. Many owners retake it after addressing gaps to see improvement. Retest pricing is available.',
              },
              {
                q: 'Is my information confidential?',
                a: 'Absolutely. Your assessment data is encrypted and only shared with your broker or advisors if you choose to do so.',
              },
              {
                q: 'What if I\'m not ready to sell yet?',
                a: 'The assessment is valuable even if you\'re not selling immediately. It shows you what to work on to maximize future valuation.',
              },
              {
                q: 'Do I need a broker to take the assessment?',
                a: 'No. You can take it independently. If you have a broker, they can access your results in their dashboard.',
              },
            ].map((item, i) => (
              <div key={item.q} style={{
                paddingBottom: '2.5rem',
                borderBottom: i < 5 ? '1px solid #E0DAD2' : 'none',
              }}>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2,
                }}>
                  {item.q}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.8,
                }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
          .pillars-grid > div { border-right: none !important; border-bottom: 1px solid #2C2C2C; }
          .benefits-grid { grid-template-columns: 1fr !important; }
          .benefits-grid > div { border-right: none !important; border-bottom: 1px solid #E0DAD2; }
          .benefits-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
