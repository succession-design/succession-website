'use client';

import { useState } from 'react';
import { ChevronDown, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { DealReadinessDisplay } from '@/components/deal-readiness-display';

interface Deal {
  dealId: string;
  businessName: string;
  dealReadinessScore: number;
  scoreLabel: string;
  annualRevenue: number;
  riskFlags: string[];
  createdAt: string;
  scoreBreakdown: {
    operationalClarity: number;
    financialTransparency: number;
    ownerDependency: number;
    transitionComplexity: number;
    riskExposure: number;
  };
}

const mockDeals: Deal[] = [
  {
    dealId: 'deal_001',
    businessName: 'Acme Manufacturing Inc.',
    dealReadinessScore: 78,
    scoreLabel: 'Ready',
    annualRevenue: 2500000,
    riskFlags: ['HIGH_OWNER_DEPENDENCY', 'HIGH_CUSTOMER_CONCENTRATION'],
    createdAt: '2026-03-25T01:06:00Z',
    scoreBreakdown: {
      operationalClarity: 24,
      financialTransparency: 19,
      ownerDependency: 16,
      transitionComplexity: 12,
      riskExposure: 7,
    },
  },
  {
    dealId: 'deal_002',
    businessName: 'Smith Services LLC',
    dealReadinessScore: 85,
    scoreLabel: 'Highly Ready',
    annualRevenue: 1800000,
    riskFlags: [],
    createdAt: '2026-03-24T15:30:00Z',
    scoreBreakdown: {
      operationalClarity: 27,
      financialTransparency: 21,
      ownerDependency: 18,
      transitionComplexity: 13,
      riskExposure: 6,
    },
  },
  {
    dealId: 'deal_003',
    businessName: 'RetailCo Stores',
    dealReadinessScore: 62,
    scoreLabel: 'Ready',
    annualRevenue: 5200000,
    riskFlags: ['LOW_OPERATIONAL_DOCUMENTATION', 'HIGH_TRANSITION_COMPLEXITY'],
    createdAt: '2026-03-23T10:15:00Z',
    scoreBreakdown: {
      operationalClarity: 18,
      financialTransparency: 15,
      ownerDependency: 12,
      transitionComplexity: 10,
      riskExposure: 7,
    },
  },
];

export default function BuyerPortal() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [sortBy, setSortBy] = useState<'score' | 'revenue' | 'date'>('score');

  const sortedDeals = [...mockDeals].sort((a, b) => {
    switch (sortBy) {
      case 'score':
        return b.dealReadinessScore - a.dealReadinessScore;
      case 'revenue':
        return b.annualRevenue - a.annualRevenue;
      case 'date':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-900';
    if (score >= 60) return 'bg-blue-100 text-blue-900';
    if (score >= 40) return 'bg-yellow-100 text-yellow-900';
    return 'bg-red-100 text-red-900';
  };

  const getRiskIcon = (flag: string) => {
    return (
      <div key={flag} className="flex items-center gap-2 text-sm text-red-600">
        <AlertCircle size={16} />
        <span>{flag.replace(/_/g, ' ')}</span>
      </div>
    );
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Buyer Portal</h1>
              <p className="text-slate-600 mt-2">Evaluate and compare acquisition opportunities</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Request Deal Access
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Deal List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              {/* Sort Controls */}
              <div className="p-6 border-b border-slate-200">
                <label className="text-sm font-semibold text-slate-700 block mb-3">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="score">Deal Readiness Score</option>
                  <option value="revenue">Annual Revenue</option>
                  <option value="date">Date Added</option>
                </select>
              </div>

              {/* Deal List */}
              <div className="divide-y divide-slate-200">
                {sortedDeals.map((deal) => (
                  <button
                    key={deal.dealId}
                    onClick={() => setSelectedDeal(deal)}
                    className={`w-full text-left p-4 hover:bg-slate-50 transition ${
                      selectedDeal?.dealId === deal.dealId ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 truncate text-sm">
                          {deal.businessName}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          {formatCurrency(deal.annualRevenue)} revenue
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${getScoreColor(deal.dealReadinessScore)}`}>
                        {deal.dealReadinessScore}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Deal Details */}
          <div className="lg:col-span-2">
            {selectedDeal ? (
              <div className="space-y-6">
                {/* Deal Header */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{selectedDeal.businessName}</h2>
                      <p className="text-slate-600 mt-2">Added {formatDate(selectedDeal.createdAt)}</p>
                    </div>
                    <div className={`px-6 py-3 rounded-lg text-lg font-bold ${getScoreColor(selectedDeal.dealReadinessScore)}`}>
                      {selectedDeal.dealReadinessScore} - {selectedDeal.scoreLabel}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 font-semibold">Annual Revenue</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">
                        {formatCurrency(selectedDeal.annualRevenue)}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 font-semibold">Estimated Valuation</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">
                        {formatCurrency(selectedDeal.annualRevenue * 3.5)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">3.5x revenue multiple</p>
                    </div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Deal Readiness Breakdown</h3>

                  <div className="space-y-4">
                    {Object.entries(selectedDeal.scoreBreakdown).map(([key, value]) => {
                      const labels: Record<string, string> = {
                        operationalClarity: 'Operational Clarity',
                        financialTransparency: 'Financial Transparency',
                        ownerDependency: 'Owner Dependency',
                        transitionComplexity: 'Transition Complexity',
                        riskExposure: 'Risk Exposure',
                      };

                      return (
                        <div key={key}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-slate-700">{labels[key]}</span>
                            <span className="text-sm font-bold text-slate-900">{value}/30</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${(value / 30) * 100}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Risk Assessment */}
                {selectedDeal.riskFlags.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="text-red-600" size={20} />
                      <h3 className="text-lg font-bold text-red-900">Identified Risks</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedDeal.riskFlags.map(getRiskIcon)}
                    </div>
                  </div>
                )}

                {/* Valuation Support */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Valuation Support</h3>

                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 font-semibold">Conservative (2.5x)</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">
                        {formatCurrency(selectedDeal.annualRevenue * 2.5)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">For deals with moderate risk</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-blue-900 font-semibold">Market (3.5x)</p>
                      <p className="text-2xl font-bold text-blue-900 mt-1">
                        {formatCurrency(selectedDeal.annualRevenue * 3.5)}
                      </p>
                      <p className="text-xs text-blue-700 mt-1">Standard market multiple</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 font-semibold">Premium (4.5x)</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">
                        {formatCurrency(selectedDeal.annualRevenue * 4.5)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">For highly ready deals</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Make Offer
                  </button>
                  <button className="flex-1 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
                    Request More Info
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-12 text-center">
                <TrendingUp size={48} className="mx-auto text-slate-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Select a Deal</h3>
                <p className="text-slate-600">Choose a deal from the list to view detailed analysis and valuation support</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
