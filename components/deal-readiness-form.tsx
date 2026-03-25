'use client';

import { useState } from 'react';
import { z } from 'zod';

// Form schema matching the scoring engine
const DealReadinessFormSchema = z.object({
  // Financial Transparency (25%)
  pAndLCleanness: z.number().min(0).max(100),
  revenueVerification: z.number().min(0).max(100),
  expenseClarity: z.number().min(0).max(100),
  addbacksCredibility: z.number().min(0).max(100),

  // Operational Clarity (20%)
  processDocumentation: z.number().min(0).max(100),
  systemsInPlace: z.number().min(0).max(100),
  roleClarity: z.number().min(0).max(100),
  operationalRepeatability: z.number().min(0).max(100),

  // Owner Dependency (20%)
  revenueOwnerTied: z.number().min(0).max(100),
  ownerDailyInvolvement: z.number().min(0).max(100),
  uniqueKnowledgeConcentration: z.number().min(0).max(100),
  replaceabilityTimeline: z.number().min(0).max(100),

  // Customer & Revenue Quality (15%)
  customerConcentration: z.number().min(0).max(100),
  contractVsTransactional: z.number().min(0).max(100),
  retentionPatterns: z.number().min(0).max(100),
  revenueVolatility: z.number().min(0).max(100),

  // Transition Readiness (20%)
  trainingDocumentation: z.number().min(0).max(100),
  transitionTimelineDefined: z.number().min(0).max(100),
  keyEmployeeRetentionRisk: z.number().min(0).max(100),
  supplierVendorTransferability: z.number().min(0).max(100),
});

type DealReadinessFormData = z.infer<typeof DealReadinessFormSchema>;

interface FormSection {
  title: string;
  description: string;
  weight: string;
  fields: Array<{
    key: keyof DealReadinessFormData;
    label: string;
    description: string;
    lowLabel: string;
    highLabel: string;
  }>;
}

const FORM_SECTIONS: FormSection[] = [
  {
    title: 'Financial Transparency',
    description: 'Measures the trustworthiness of financial numbers',
    weight: '25%',
    fields: [
      {
        key: 'pAndLCleanness',
        label: 'P&L Cleanness',
        description: 'How normalized and verified are the financial statements?',
        lowLabel: 'Messy, many adjustments',
        highLabel: 'Verified, normalized, reconciled',
      },
      {
        key: 'revenueVerification',
        label: 'Revenue Verification',
        description: 'Is revenue aligned with bank records and tax returns?',
        lowLabel: 'Unverified',
        highLabel: 'Bank/tax aligned',
      },
      {
        key: 'expenseClarity',
        label: 'Expense Clarity',
        description: 'How clearly are expenses documented and categorized?',
        lowLabel: 'Unclear, mixed categories',
        highLabel: 'Fully documented',
      },
      {
        key: 'addbacksCredibility',
        label: 'Add-backs Credibility',
        description: 'Are claimed add-backs justified and defensible?',
        lowLabel: 'Questionable',
        highLabel: 'Justified, recurring',
      },
    ],
  },
  {
    title: 'Operational Clarity',
    description: 'Can someone else run this business without the owner guessing?',
    weight: '20%',
    fields: [
      {
        key: 'processDocumentation',
        label: 'Process Documentation',
        description: 'Are key business processes documented?',
        lowLabel: 'Undocumented',
        highLabel: 'Fully documented',
      },
      {
        key: 'systemsInPlace',
        label: 'Systems & Tools',
        description: 'Are business operations supported by systems/tools?',
        lowLabel: 'Manual processes',
        highLabel: 'Fully automated',
      },
      {
        key: 'roleClarity',
        label: 'Role Clarity',
        description: 'Are roles and responsibilities clearly defined?',
        lowLabel: 'Unclear, overlapping',
        highLabel: 'Well-defined',
      },
      {
        key: 'operationalRepeatability',
        label: 'Operational Repeatability',
        description: 'Can operations be repeated consistently?',
        lowLabel: 'Inconsistent',
        highLabel: 'Highly repeatable',
      },
    ],
  },
  {
    title: 'Owner Dependency',
    description: 'The most important hidden variable - how replaceable is the owner?',
    weight: '20%',
    fields: [
      {
        key: 'revenueOwnerTied',
        label: 'Revenue Tied to Owner',
        description: 'What % of revenue is tied to owner relationships?',
        lowLabel: '80%+ owner-dependent',
        highLabel: '<10% owner-dependent',
      },
      {
        key: 'ownerDailyInvolvement',
        label: 'Owner Daily Involvement',
        description: 'How much time does owner spend on daily operations?',
        lowLabel: '80%+ of time',
        highLabel: '<10% of time',
      },
      {
        key: 'uniqueKnowledgeConcentration',
        label: 'Unique Knowledge Concentration',
        description: 'How much unique knowledge is concentrated with owner?',
        lowLabel: 'Highly concentrated',
        highLabel: 'Well distributed',
      },
      {
        key: 'replaceabilityTimeline',
        label: 'Replaceability Timeline',
        description: 'How long would it take to replace owner?',
        lowLabel: '>12 months',
        highLabel: '<3 months',
      },
    ],
  },
  {
    title: 'Customer & Revenue Quality',
    description: 'Measures the stability and reliability of cash flow',
    weight: '15%',
    fields: [
      {
        key: 'customerConcentration',
        label: 'Customer Concentration',
        description: 'How diversified is the customer base?',
        lowLabel: '1 customer = 40%+ revenue',
        highLabel: 'Well diversified',
      },
      {
        key: 'contractVsTransactional',
        label: 'Contract vs Transactional',
        description: 'What % of revenue is from long-term contracts?',
        lowLabel: 'Mostly transactional',
        highLabel: 'Mostly contracts',
      },
      {
        key: 'retentionPatterns',
        label: 'Retention Patterns',
        description: 'What is the customer retention trend?',
        lowLabel: 'Declining',
        highLabel: 'Growing',
      },
      {
        key: 'revenueVolatility',
        label: 'Revenue Volatility',
        description: 'How stable is revenue month-to-month?',
        lowLabel: 'Highly volatile',
        highLabel: 'Very stable',
      },
    ],
  },
  {
    title: 'Transition Readiness',
    description: 'The wedge - directly impacts whether deal closes and timeline',
    weight: '20%',
    fields: [
      {
        key: 'trainingDocumentation',
        label: 'Training Documentation',
        description: 'Is there comprehensive training documentation?',
        lowLabel: 'None exists',
        highLabel: 'Comprehensive',
      },
      {
        key: 'transitionTimelineDefined',
        label: 'Transition Timeline',
        description: 'Is the transition timeline clearly defined?',
        lowLabel: 'Undefined',
        highLabel: 'Detailed plan',
      },
      {
        key: 'keyEmployeeRetentionRisk',
        label: 'Key Employee Retention',
        description: 'What is the risk of losing key employees?',
        lowLabel: 'High risk',
        highLabel: 'Low risk',
      },
      {
        key: 'supplierVendorTransferability',
        label: 'Supplier/Vendor Transferability',
        description: 'Can key supplier/vendor relationships be transferred?',
        lowLabel: 'Non-transferable',
        highLabel: 'Easily transferable',
      },
    ],
  },
];

interface DealReadinessFormProps {
  onSubmit?: (data: DealReadinessFormData) => void;
}

export function DealReadinessForm({ onSubmit }: DealReadinessFormProps) {
  const [formData, setFormData] = useState<Partial<DealReadinessFormData>>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSliderChange = (key: keyof DealReadinessFormData, value: number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = DealReadinessFormSchema.parse(formData);
      setSubmitted(true);
      onSubmit?.(validatedData);
    } catch (error) {
      console.error('Form validation error:', error);
      alert('Please fill in all fields before submitting');
    }
  };

  const section = FORM_SECTIONS[currentSection];
  const completedSections = FORM_SECTIONS.filter((s) =>
    s.fields.every((f) => formData[f.key] !== undefined && formData[f.key] !== null)
  ).length;

  const progressPercent = ((currentSection + 1) / FORM_SECTIONS.length) * 100;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#6B6560',
          }}>
            Section {currentSection + 1} of {FORM_SECTIONS.length}
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#B8965A',
          }}>
            {Math.round(progressPercent)}% complete
          </p>
        </div>
        <div style={{
          width: '100%',
          height: '2px',
          background: '#E0DAD2',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${progressPercent}%`,
            background: '#B8965A',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Section Header */}
        <div style={{
          marginBottom: '3.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #E0DAD2',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B8965A',
            marginBottom: '0.875rem',
          }}>
            Pillar {currentSection + 1}
          </p>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2.2rem',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '0.875rem',
            lineHeight: 1.2,
          }}>
            {section.title}
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
            maxWidth: '600px',
          }}>
            {section.description}
          </p>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#9C9590',
            padding: '0.5rem 1rem',
            border: '1px solid #E0DAD2',
          }}>
            Weight: {section.weight}
          </span>
        </div>

        {/* Form Fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '4rem' }}>
          {section.fields.map((field) => (
            <div key={field.key} style={{
              paddingBottom: '2.5rem',
              borderBottom: '1px solid #E0DAD2',
            }}>
              <label style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.5rem',
                lineHeight: 1.2,
              }}>
                {field.label}
              </label>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6560',
                marginBottom: '1.75rem',
                lineHeight: 1.6,
              }}>
                {field.description}
              </p>

              {/* Slider */}
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={formData[field.key] ?? 0}
                  onChange={(e) => handleSliderChange(field.key, parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '3px',
                    background: '#E0DAD2',
                    outline: 'none',
                    borderRadius: '0',
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                />
                <style>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    background: #B8965A;
                    cursor: pointer;
                    border-radius: 50%;
                    border: none;
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    background: #B8965A;
                    cursor: pointer;
                    border-radius: 50%;
                    border: none;
                  }
                `}</style>
              </div>

              {/* Labels and Value */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#9C9590',
                }}>
                  {field.lowLabel}
                </span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#B8965A',
                }}>
                  {formData[field.key] ?? 0}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#9C9590',
                }}>
                  {field.highLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid #E0DAD2',
          gap: '1rem',
        }}>
          <button
            type="button"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            style={{
              padding: '0.875rem 2rem',
              background: currentSection === 0 ? '#F2EFE9' : '#FAF8F5',
              color: currentSection === 0 ? '#9C9590' : '#1A1A1A',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: `1px solid ${currentSection === 0 ? '#E0DAD2' : '#E0DAD2'}`,
              cursor: currentSection === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (currentSection > 0) {
                e.currentTarget.style.background = '#F2EFE9';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = currentSection === 0 ? '#F2EFE9' : '#FAF8F5';
            }}
          >
            ← Previous
          </button>

          {/* Section Dots */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
          }}>
            {FORM_SECTIONS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: index === currentSection ? '#B8965A' : index < currentSection ? '#B8965A' : '#E0DAD2',
                  transition: 'background 0.2s ease',
                }}
              />
            ))}
          </div>

          {currentSection === FORM_SECTIONS.length - 1 ? (
            <button
              type="submit"
              style={{
                padding: '0.875rem 2rem',
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
              Calculate Score →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentSection(Math.min(FORM_SECTIONS.length - 1, currentSection + 1))}
              style={{
                padding: '0.875rem 2rem',
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
              Next →
            </button>
          )}
        </div>
      </form>

      {/* Completion Message */}
      {submitted && (
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: '#F2EFE9',
          border: '1px solid #E0DAD2',
        }}>
          <h4 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '0.5rem',
          }}>
            ✓ Assessment Complete
          </h4>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: '#6B6560',
            lineHeight: 1.8,
          }}>
            Your responses have been recorded. Next, we'll capture your contact information to display your Deal Readiness Score and personalized next steps.
          </p>
        </div>
      )}
    </div>
  );
}
