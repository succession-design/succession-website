'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

interface DealMetrics {
  totalDeals: number;
  totalTransactionValue: number;
  averageCloseRate: number;
  averageTimeToClose: number;
  scoreDistribution: {
    highlyReady: number;
    ready: number;
    moderateRisk: number;
    highRisk: number;
  };
  monthlyTrends: {
    month: string;
    deals: number;
    value: number;
    closeRate: number;
  }[];
  riskFactors: {
    name: string;
    frequency: number;
    percentage: number;
  }[];
  industryBreakdown: {
    industry: string;
    deals: number;
    avgScore: number;
    closeRate: number;
  }[];
}

const mockMetrics: DealMetrics = {
  totalDeals: 247,
  totalTransactionValue: 2500000000,
  averageCloseRate: 0.92,
  averageTimeToClose: 45,
  scoreDistribution: {
    highlyReady: 89,
    ready: 98,
    moderateRisk: 45,
    highRisk: 15,
  },
  monthlyTrends: [
    { month: 'January', deals: 18, value: 185000000, closeRate: 0.88 },
    { month: 'February', deals: 22, value: 215000000, closeRate: 0.90 },
    { month: 'March', deals: 26, value: 245000000, closeRate: 0.92 },
    { month: 'April', deals: 24, value: 230000000, closeRate: 0.91 },
    { month: 'May', deals: 28, value: 265000000, closeRate: 0.93 },
    { month: 'June', deals: 31, value: 295000000, closeRate: 0.94 },
  ],
  riskFactors: [
    { name: 'High Owner Dependency', frequency: 78, percentage: 31.6 },
    { name: 'High Customer Concentration', frequency: 62, percentage: 25.1 },
    { name: 'Low Operational Documentation', frequency: 45, percentage: 18.2 },
    { name: 'High Transition Complexity', frequency: 38, percentage: 15.4 },
    { name: 'Low Financial Transparency', frequency: 24, percentage: 9.7 },
  ],
  industryBreakdown: [
    { industry: 'Manufacturing', deals: 78, avgScore: 76, closeRate: 0.94 },
    { industry: 'Services', deals: 92, avgScore: 79, closeRate: 0.92 },
    { industry: 'Retail', deals: 54, avgScore: 71, closeRate: 0.89 },
    { industry: 'Other', deals: 23, avgScore: 74, closeRate: 0.91 },
  ],
};

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<'month' | 'quarter' | 'year'>('month');

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Analytics Dashboard</h1>
              <p className="text-slate-600 mt-2">Deal metrics and performance insights</p>
            </div>
            <div className="flex gap-2">
              {(['month', 'quarter', 'year'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {range === 'month' ? 'Last Month' : range === 'quarter' ? 'Last Quarter' : 'Last Year'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Deals */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">Total Deals</h3>
              <BarChart3 className="text-blue-600" size={20} />
            </div>
            <p className="text-3xl font-bold text-slate-900">{mockMetrics.totalDeals}</p>
            <p className="text-sm text-green-600 font-semibold mt-2">↑ 12% from last period</p>
          </div>

          {/* Transaction Value */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">Transaction Value</h3>
              <DollarSign className="text-green-600" size={20} />
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(mockMetrics.totalTransactionValue)}</p>
            <p className="text-sm text-green-600 font-semibold mt-2">↑ 18% from last period</p>
          </div>

          {/* Close Rate */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">Average Close Rate</h3>
              <TrendingUp className="text-purple-600" size={20} />
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatPercentage(mockMetrics.averageCloseRate)}</p>
            <p className="text-sm text-green-600 font-semibold mt-2">↑ 3% from last period</p>
          </div>

          {/* Time to Close */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">Avg Time to Close</h3>
              <Clock className="text-orange-600" size={20} />
            </div>
            <p className="text-3xl font-bold text-slate-900">{mockMetrics.averageTimeToClose} days</p>
            <p className="text-sm text-green-600 font-semibold mt-2">↓ 8 days from last period</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Score Distribution */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Deal Readiness Distribution</h3>
            <div className="space-y-4">
              {[
                { label: 'Highly Ready (80-100)', value: mockMetrics.scoreDistribution.highlyReady, color: 'bg-green-600' },
                { label: 'Ready (60-79)', value: mockMetrics.scoreDistribution.ready, color: 'bg-blue-600' },
                { label: 'Moderate Risk (40-59)', value: mockMetrics.scoreDistribution.moderateRisk, color: 'bg-yellow-600' },
                { label: 'High Risk (0-39)', value: mockMetrics.scoreDistribution.highRisk, color: 'bg-red-600' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900">{item.value} deals</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`${item.color} h-3 rounded-full transition-all`}
                      style={{ width: `${(item.value / mockMetrics.totalDeals) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Monthly Deal Volume</h3>
            <div className="space-y-3">
              {mockMetrics.monthlyTrends.map((trend) => (
                <div key={trend.month} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">{trend.month}</p>
                    <p className="text-xs text-slate-500">{trend.deals} deals • {formatCurrency(trend.value)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(trend.deals / 31) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-900 w-12 text-right">
                      {formatPercentage(trend.closeRate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Factors & Industry Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Risk Factors */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Top Risk Factors</h3>
            <div className="space-y-4">
              {mockMetrics.riskFactors.map((risk) => (
                <div key={risk.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{risk.name}</span>
                    <span className="text-sm font-bold text-slate-900">{risk.frequency} deals</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: `${risk.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{risk.percentage}% of deals</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Breakdown */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Industry Breakdown</h3>
            <div className="space-y-4">
              {mockMetrics.industryBreakdown.map((industry) => (
                <div key={industry.industry} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{industry.industry}</p>
                      <p className="text-xs text-slate-500">{industry.deals} deals</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">Score: {industry.avgScore}</p>
                      <p className="text-xs text-slate-500">Close: {formatPercentage(industry.closeRate)}</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(industry.avgScore / 100) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
