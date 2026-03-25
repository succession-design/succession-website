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

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Deal Readiness Assessment</h2>
          <span className="text-sm text-gray-600">
            Section {currentSection + 1} of {FORM_SECTIONS.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSection + 1) / FORM_SECTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-2">{section.description}</p>
              <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded">
                Weight: {section.weight}
              </span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {section.fields.map((field) => (
            <div key={field.key} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  {field.label}
                </label>
                <p className="text-sm text-gray-600 mb-3">{field.description}</p>
              </div>

              {/* Slider */}
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={formData[field.key] ?? 0}
                  onChange={(e) => handleSliderChange(field.key, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{field.lowLabel}</span>
                  <span className="text-lg font-bold text-purple-600">
                    {formData[field.key] ?? 0}
                  </span>
                  <span className="text-xs text-gray-600">{field.highLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50 hover:bg-gray-300 transition"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {FORM_SECTIONS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSection
                    ? 'bg-purple-600'
                    : index < currentSection
                      ? 'bg-purple-300'
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentSection === FORM_SECTIONS.length - 1 ? (
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Calculate Score →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentSection(Math.min(FORM_SECTIONS.length - 1, currentSection + 1))}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Next →
            </button>
          )}
        </div>
      </form>

      {/* Completion Message */}
      {submitted && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">✓ Assessment Complete</h4>
          <p className="text-green-800">
            Your Deal Readiness Score is being calculated. You'll see your results on the next page.
          </p>
        </div>
      )}
    </div>
  );
}
