'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResultsClient() {
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
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '1rem',
            }}>
              Before we show your score...
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.85,
            }}>
              Tell us a bit about yourself so we can send your personalized playbook and next steps.
            </p>
          </div>

          <form onSubmit={handleSubmitContact} style={{
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
            padding: '2rem',
            borderRadius: '0',
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.5rem',
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
                  padding: '0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
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

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.5rem',
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
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

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.5rem',
              }}>
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Acme Inc."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
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

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.5rem',
              }}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
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
              color: '#9B9490',
              textAlign: 'center',
              marginTop: '1.5rem',
              lineHeight: 1.6,
            }}>
              We respect your privacy. Your information will only be used to send your personalized assessment results and playbook.
            </p>
          </form>
        </div>
      </section>
    );
  }

  // Results display after contact captured
  return (
    <section style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      background: '#FAF8F5',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '1rem',
          }}>
            Your Deal Readiness Score
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '1rem',
          }}>
            {formData.name}, here's your score.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            Based on your responses across all five pillars, here's how ready your business is for a successful transaction.
          </p>
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
            background: `conic-gradient(#B8965A 0deg, #B8965A ${mockScore * 3.6}deg, #2C2C2C ${mockScore * 3.6}deg, #2C2C2C 360deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
                fontWeight: 500,
                color: '#9B9490',
                marginTop: '0.5rem',
                letterSpacing: '0.05em',
              }}>
                OUT OF 100
              </span>
            </div>
          </div>
        </div>

        {/* Interpretation */}
        <div style={{
          maxWidth: '720px',
          margin: '0 auto 4rem',
          textAlign: 'center',
          padding: '2rem',
          background: '#FFFFFF',
          border: '1px solid #E0DAD2',
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.75rem',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '1rem',
          }}>
            Moderately Prepared
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.85,
          }}>
            Your business demonstrates solid fundamentals in several key areas. With targeted improvements in operational independence and transition readiness, you can significantly increase your valuation and reduce buyer risk.
          </p>
        </div>

        {/* Pillar Breakdown */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Pillar Breakdown
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {mockPillars.map((pillar, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: '#FFFFFF',
                border: '1px solid #E0DAD2',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    margin: 0,
                  }}>
                    {pillar.name}
                  </h3>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#B8965A',
                  }}>
                    {pillar.score}
                  </span>
                </div>
                <div style={{
                  height: '6px',
                  background: '#E0DAD2',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${pillar.score}%`,
                    background: '#B8965A',
                  }} />
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#9B9490',
                  margin: 0,
                }}>
                  {pillar.weight}% weight
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          <div style={{
            padding: '2rem',
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
            borderRight: '1px solid #E0DAD2',
          }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
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
              marginBottom: '1.5rem',
            }}>
              Your personalized 20-page playbook with specific recommendations for each pillar.
            </p>
            <button style={{
              width: '100%',
              padding: '0.75rem',
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
              Download PDF
            </button>
          </div>

          <div style={{
            padding: '2rem',
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
            borderRight: '1px solid #E0DAD2',
          }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '1rem',
            }}>
              Gap Analysis
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 300,
              color: '#6B6560',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              Detailed breakdown of where you stand vs. buyer expectations in your industry.
            </p>
            <button style={{
              width: '100%',
              padding: '0.75rem',
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
              View Analysis
            </button>
          </div>

          <div style={{
            padding: '2rem',
            background: '#FFFFFF',
            border: '1px solid #E0DAD2',
          }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
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
              marginBottom: '1.5rem',
            }}>
              Book a 30-minute call with our team to discuss your specific situation and next steps.
            </p>
            <button style={{
              width: '100%',
              padding: '0.75rem',
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
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
