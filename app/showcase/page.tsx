'use client';

export default function ShowcasePage() {
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
              Assessment User Flow
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              marginBottom: '2rem',
            }}>
              See how business owners get their<br />
              <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Deal Readiness Score</em>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
              maxWidth: '560px',
            }}>
              A walkthrough of the complete assessment experience, from initial questions to personalized results and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Flow Steps */}
      <section style={{
        padding: '6rem 2rem',
        background: '#FFFFFF',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}>
            {/* Step 1 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                1
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                Answer 20 Questions
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                Business owners rate their company across five critical pillars: Financial Clarity, Operational Independence, Customer Defensibility, Market Position, and Transition Readiness.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                2
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                Share Contact Info
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                Before viewing their score, owners provide their name, email, company, and phone number. This ensures we can deliver personalized results and follow up with next steps.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                3
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                View Score & Breakdown
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                An animated score ring displays their overall Deal Readiness Score (0–100), with individual pillar breakdowns showing strengths and gaps.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                4
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                Download Playbook
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                A 20-page personalized playbook with specific recommendations for improving each pillar and preparing for a successful transaction.
              </p>
            </div>

            {/* Step 5 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                5
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                Schedule Consultation
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                Owners can book a 30-minute consultation to discuss their score, gaps, and a customized roadmap to transaction readiness.
              </p>
            </div>

            {/* Step 6 */}
            <div style={{
              padding: '2rem',
              background: '#FAF8F5',
              border: '1px solid #E0DAD2',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '1rem',
              }}>
                6
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                Ongoing Support
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                lineHeight: 1.6,
              }}>
                Follow-up emails with resources, tips, and opportunities to upgrade to a full engagement for deeper analysis and deal preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section style={{
        padding: '6rem 2rem',
        background: '#1A1A1A',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: '#FAF8F5',
            marginBottom: '3rem',
            textAlign: 'center',
          }}>
            Assessment Impact
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3.5rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '0.5rem',
              }}>
                45 min
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#9B9490',
              }}>
                Average time to complete assessment
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3.5rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '0.5rem',
              }}>
                24 hrs
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#9B9490',
              }}>
                Time to receive score and playbook
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3.5rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '0.5rem',
              }}>
                5 pillars
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#9B9490',
              }}>
                Comprehensive evaluation framework
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '3.5rem',
                fontWeight: 400,
                color: '#B8965A',
                marginBottom: '0.5rem',
              }}>
                20 pages
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#9B9490',
              }}>
                Personalized playbook per owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '6rem 2rem',
        background: '#FAF8F5',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '1.5rem',
          }}>
            Ready to see your score?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            marginBottom: '2rem',
          }}>
            Start the assessment and discover exactly where your business stands. Get your personalized Deal Readiness Score and playbook in 24 hours.
          </p>
          <a href="/assessment" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: '#B8965A',
            color: '#FAF8F5',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '1px solid #B8965A',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#B8965A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#B8965A';
            e.currentTarget.style.color = '#FAF8F5';
          }}
          >
            Start Assessment
          </a>
        </div>
      </section>
    </>
  );
}
