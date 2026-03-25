'use client';

import React from 'react';

interface RiskFlag {
  flag: string;
  severity: '🔴 Critical' | '🟡 Warning' | '🟢 Monitor';
  impact: string;
  component: string;
}

interface DealImpactSignal {
  diligenceFriction: 'Low' | 'Medium' | 'High';
  timeToCloseImpact: string;
  valuationPressure: '↑ Upward' | '→ Neutral' | '↓ Downward';
  buyerInterestLevel: 'High' | 'Medium' | 'Low';
  brokerPriorityRank: number;
}

interface DealReadinessDisplayProps {
  score: number;
  label: 'Institutional Ready' | 'Market Ready' | 'Conditional' | 'High Risk';
  percentile: number;
  riskFlags: RiskFlag[];
  dealImpactSignals: DealImpactSignal;
  componentScores: {
    financialTransparency: number;
    operationalClarity: number;
    ownerDependency: number;
    customerRevenueQuality: number;
    transitionReadiness: number;
  };
  dataQuality: number;
}

export function DealReadinessDisplay({
  score,
  label,
  percentile,
  riskFlags,
  dealImpactSignals,
  componentScores,
  dataQuality,
}: DealReadinessDisplayProps) {
  const getScoreColor = (s: number) => {
    if (s >= 85) return 'from-green-500 to-emerald-600';
    if (s >= 70) return 'from-blue-500 to-cyan-600';
    if (s >= 50) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-rose-600';
  };

  const getLabelColor = (l: string) => {
    if (l === 'Institutional Ready') return 'bg-green-100 text-green-800';
    if (l === 'Market Ready') return 'bg-blue-100 text-blue-800';
    if (l === 'Conditional') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getComponentColor = (c: number) => {
    if (c >= 80) return 'from-green-400 to-emerald-500';
    if (c >= 60) return 'from-blue-400 to-cyan-500';
    if (c >= 40) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-rose-500';
  };

  return (
    <div className="space-y-8">
      {/* Headline Score */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Deal Readiness Score</h2>
            <p className="text-gray-600">Your business's acquisition readiness assessment</p>
          </div>
          <div className={`px-4 py-2 rounded-lg font-semibold ${getLabelColor(label)}`}>
            {label}
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* Score Circle */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle cx="60" cy="60" r="55" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              {/* Score circle */}
              <circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke={`url(#scoreGradient)`}
                strokeWidth="8"
                strokeDasharray={`${(score / 100) * 345} 345`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">{score}</div>
                <div className="text-xs text-gray-600">/ 100</div>
              </div>
            </div>
          </div>

          {/* Score Details */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Percentile Rank</div>
              <div className="text-2xl font-bold text-gray-900">{percentile}th percentile</div>
              <p className="text-xs text-gray-600 mt-1">
                Your score is better than {percentile}% of all deals
              </p>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Data Quality</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${dataQuality}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-1">{dataQuality}% complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Component Scores */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Component Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(componentScores).map(([key, value]) => {
            const labels: Record<string, string> = {
              financialTransparency: '📊 Financial Transparency',
              operationalClarity: '⚙️ Operational Clarity',
              ownerDependency: '👤 Owner Dependency',
              customerRevenueQuality: '👥 Customer & Revenue Quality',
              transitionReadiness: '🚀 Transition Readiness',
            };

            const weights: Record<string, string> = {
              financialTransparency: '25%',
              operationalClarity: '20%',
              ownerDependency: '20%',
              customerRevenueQuality: '15%',
              transitionReadiness: '20%',
            };

            return (
              <div key={key} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-900">{labels[key]}</div>
                    <div className="text-xs text-gray-600">Weight: {weights[key]}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getComponentColor(value)}`}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Risk Flags */}
      {riskFlags.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Flags</h3>
          <div className="space-y-3">
            {riskFlags.map((flag, index) => (
              <div key={index} className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{flag.flag}</div>
                    <div className="text-sm text-gray-600 mt-1">{flag.impact}</div>
                  </div>
                  <span className="text-lg font-semibold">{flag.severity}</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Category: <span className="font-semibold capitalize">{flag.component}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deal Impact Signals */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Deal Impact Signals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-600 font-semibold mb-1">Diligence Friction</div>
            <div className="text-2xl font-bold text-blue-900">
              {dealImpactSignals.diligenceFriction}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-sm text-purple-600 font-semibold mb-1">Time to Close</div>
            <div className="text-lg font-bold text-purple-900">
              {dealImpactSignals.timeToCloseImpact}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-600 font-semibold mb-1">Valuation Pressure</div>
            <div className="text-2xl font-bold text-green-900">
              {dealImpactSignals.valuationPressure}
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-sm text-orange-600 font-semibold mb-1">Buyer Interest</div>
            <div className="text-2xl font-bold text-orange-900">
              {dealImpactSignals.buyerInterestLevel}
            </div>
          </div>
        </div>
      </div>

      {/* Broker Priority */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Broker Priority Rank</h4>
            <p className="text-gray-600">
              This deal ranks #{dealImpactSignals.brokerPriorityRank} in broker priority
            </p>
          </div>
          <div className="text-5xl font-bold text-purple-600">
            #{dealImpactSignals.brokerPriorityRank}
          </div>
        </div>
      </div>
    </div>
  );
}
