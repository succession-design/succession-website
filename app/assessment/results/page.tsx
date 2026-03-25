'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [contactCaptured, setContactCaptured] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  // Mock score calculation - in production, this would come from the backend
  const mockScore = 73;
  const mockPillars = [
    { name: 'Financial Clarity', score: 82, weight: 25 },
    { name: 'Operational Independence', score: 67, weight: 20 },
    { name: 'Customer Defensibility', score: 74, weight: 15 },
    { name: 'Market Position', score: 88, weight: 20 },
    { name: 'Transition Readiness', score: 55, weight: 20 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setContactCaptured(true);
      // In production, send to backend
      console.log('Contact captured:', formData);
    } else {
      alert('Please fill in all required fields');
    }
  };

  if (!contactCaptured) {
    return (
      <section style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        background: '#FAF8F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.25rem',
            }}>
              One More Step
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              Before we show your score.
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.8,
            }}>
              Tell us a bit about yourself so we can personalize your next steps and send you a copy of your playbook.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmitContact} style={{
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
            padding: '3rem',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '2.5rem' }}>
              {/* Name */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.625rem',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    border: '1px solid #E0DAD2',
                    background: '#FAF8F5',
                    color: '#1A1A1A',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#B8965A';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = '#FAF8F5';
                    e.currentTarget.style.borderColor = '#E0DAD2';
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.625rem',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    border: '1px solid #E0DAD2',
                    background: '#FAF8F5',
                    color: '#1A1A1A',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#B8965A';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = '#FAF8F5';
                    e.currentTarget.style.borderColor = '#E0DAD2';
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.625rem',
                }}>
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    border: '1px solid #E0DAD2',
                    background: '#FAF8F5',
                    color: '#1A1A1A',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#B8965A';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = '#FAF8F5';
                    e.currentTarget.style.borderColor = '#E0DAD2';
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.625rem',
                }}>
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    border: '1px solid #E0DAD2',
                    background: '#FAF8F5',
                    color: '#1A1A1A',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#B8965A';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = '#FAF8F5';
                    e.currentTarget.style.borderColor = '#E0DAD2';
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: '#B8965A',
                color: '#FAF8F5',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #B8965A',
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
              View My Score
            </button>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 300,
              color: '#9C9590',
              textAlign: 'center',
              marginTop: '1.5rem',
            }}>
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </section>
    );
  }

  // Results View (after contact captured)
  return (
    <>
      {/* Hero with Score */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '7rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        background: '#1A1A1A',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8965A',
              marginBottom: '1.75rem',
            }}>
              Your Results
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#FAF8F5',
              marginBottom: '2rem',
            }}>
              Deal Readiness Score
            </h1>
          </div>

          {/* Score Ring */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4rem',
          }}>
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'conic-gradient(#B8965A 0deg, #B8965A calc(var(--percentage) * 3.6deg), #2C2C2C calc(var(--percentage) * 3.6deg), #2C2C2C 360deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--percentage': mockScore,
            } as any}>
              <div style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: '#1A1A1A',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '4rem',
                  fontWeight: 400,
                  color: '#B8965A',
                  lineHeight: 1,
                }}>
                  {mockScore}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6560',
                  marginTop: '0.5rem',
                }}>
                  Out of 100
                </span>
              </div>
            </div>
          </div>

          {/* Interpretation */}
          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
            paddingBottom: '3rem',
            borderBottom: '1px solid #2C2C2C',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#9C9590',
              lineHeight: 1.8,
            }}>
              Your business is <strong style={{ color: '#B8965A', fontWeight: 400 }}>moderately prepared</strong> for acquisition. You have strong fundamentals in several areas, but there are clear opportunities to strengthen your position before going to market.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar Breakdown */}
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
              Breakdown
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Your five pillars.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}>
            {mockPillars.map((pillar) => (
              <div key={pillar.name} style={{
                paddingBottom: '2rem',
                borderBottom: '1px solid #E0DAD2',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem',
                }}>
                  <div>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: '#1A1A1A',
                      marginBottom: '0.25rem',
                      lineHeight: 1.2,
                    }}>
                      {pillar.name}
                    </h4>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#9C9590',
                    }}>
                      Weight: {pillar.weight}%
                    </p>
                  </div>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: '#B8965A',
                  }}>
                    {pillar.score}
                  </span>
                </div>
                <div style={{
                  height: '4px',
                  background: '#E0DAD2',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${pillar.score}%`,
                    background: pillar.score >= 80 ? '#B8965A' : pillar.score >= 65 ? '#9C9590' : '#6B6560',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
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
              What's Next
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Your personalized roadmap.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid #E0DAD2',
          }} className="next-steps-grid">
            {[
              {
                num: '01',
                title: 'Download Your Playbook',
                body: 'A formatted document with all your answers, structured for buyer review. Share with your broker or advisors.',
              },
              {
                num: '02',
                title: 'Review Gap Analysis',
                body: 'See exactly which pillars need strengthening. We\'ve identified 3 quick wins you can tackle before listing.',
              },
              {
                num: '03',
                title: 'Schedule a Consultation',
                body: 'A 30-minute call with our team to discuss your score, timeline, and next steps toward going to market.',
              },
            ].map((step, i) => (
              <div key={step.num} style={{
                padding: '3rem',
                borderRight: i < 2 ? '1px solid #E0DAD2' : 'none',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#B8965A',
                  lineHeight: 1,
                  marginBottom: '1.5rem',
                }}>
                  {step.num}
                </p>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#6B6560',
                  lineHeight: 1.8,
                }}>
                  {step.body}
                </p>
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
            Ready to move forward?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            Our team will reach out within 24 hours with your full playbook and to schedule your consultation.
          </p>
          <a href="mailto:hello@successionio.com" style={{
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
            Download Playbook
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .next-steps-grid { grid-template-columns: 1fr !important; }
          .next-steps-grid > div { border-right: none !important; border-bottom: 1px solid #E0DAD2; }
          .next-steps-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
