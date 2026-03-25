'use client';

import { DealReadinessForm } from '@/components/deal-readiness-form';

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Deal Readiness Assessment</h1>
          <p className="text-lg text-purple-100">
            Get your business's Deal Readiness Score - the FICO score for SMB acquisitions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">What is Deal Readiness?</h2>
          <p className="text-blue-800 mb-3">
            Your Deal Readiness Score measures how prepared your business is for acquisition across five critical dimensions:
          </p>
          <ul className="space-y-2 text-blue-800">
            <li className="flex gap-2">
              <span className="font-semibold">📊 Financial Transparency (25%):</span>
              <span>How trustworthy are your financial numbers?</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">⚙️ Operational Clarity (20%):</span>
              <span>Can someone else run this business without you?</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">👤 Owner Dependency (20%):</span>
              <span>How replaceable are you in the business?</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">👥 Customer & Revenue Quality (15%):</span>
              <span>How stable is your cash flow?</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">🚀 Transition Readiness (20%):</span>
              <span>Can the deal actually close and succeed?</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <DealReadinessForm
          onSubmit={(data) => {
            console.log('Assessment submitted:', data);
            // In production, send to backend and display results
          }}
        />

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Identify Gaps</h3>
            <p className="text-sm text-gray-600">
              Understand exactly what needs improvement before going to market.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-gray-900 mb-2">Increase Valuation</h3>
            <p className="text-sm text-gray-600">
              Higher scores attract more buyers and justify premium valuations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Faster Deals</h3>
            <p className="text-sm text-gray-600">
              Reduce diligence friction and close deals 4-8 weeks faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
