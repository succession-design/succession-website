'use client';

import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export function BrokerROICalculator() {
  const [dealsPerYear, setDealsPerYear] = useState(12);
  const [avgDealValue, setAvgDealValue] = useState(2000000);
  const [premiumPercentage, setPremiumPercentage] = useState(8);
  const [timePerDeal, setTimePerDeal] = useState(40);

  // Calculations
  const totalDealValue = dealsPerYear * avgDealValue;
  const premiumValue = totalDealValue * (premiumPercentage / 100);
  const timePerYear = dealsPerYear * timePerDeal;
  const timeSaved = dealsPerYear * 8; // 8 hours saved per deal
  const brokerCommission = premiumValue * 0.05; // Assuming 5% commission
  const hourlyRate = 150; // Broker hourly rate
  const timeSavingsValue = timeSaved * hourlyRate;
  const totalROI = brokerCommission + timeSavingsValue;

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600">
            See how much you can earn with Succession
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="space-y-8">
            {/* Deals Per Year */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Deals per year: <span className="text-amber-700">{dealsPerYear}</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={dealsPerYear}
                onChange={(e) => setDealsPerYear(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Average Deal Value */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Average deal value: <span className="text-amber-700">${(avgDealValue / 1000000).toFixed(1)}M</span>
              </label>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={avgDealValue}
                onChange={(e) => setAvgDealValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$0.5M</span>
                <span>$10M</span>
              </div>
            </div>

            {/* Premium Percentage */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Price premium achieved: <span className="text-amber-700">{premiumPercentage}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={premiumPercentage}
                onChange={(e) => setPremiumPercentage(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Time Per Deal */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Time per deal (hours): <span className="text-amber-700">{timePerDeal}</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={timePerDeal}
                onChange={(e) => setTimePerDeal(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>10</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Total Deal Value */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <p className="text-gray-600 text-sm mb-2">Total Deal Value (Annual)</p>
              <p className="text-4xl font-bold text-gray-900">
                ${(totalDealValue / 1000000).toFixed(1)}M
              </p>
            </div>

            {/* Premium Value */}
            <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
              <p className="text-gray-600 text-sm mb-2">Premium Value Achieved</p>
              <p className="text-3xl font-bold text-amber-700">
                ${(premiumValue / 1000).toFixed(0)}K
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {premiumPercentage}% of ${(totalDealValue / 1000000).toFixed(1)}M
              </p>
            </div>

            {/* Time Savings */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
              <p className="text-gray-600 text-sm mb-2">Time Saved (Annual)</p>
              <p className="text-3xl font-bold text-green-700">
                {timeSaved} hours
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {timeSaved / 40} weeks of work saved
              </p>
            </div>

            {/* Total ROI */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <p className="text-amber-100 text-sm">Your Annual ROI</p>
              </div>
              <p className="text-4xl font-bold">
                ${(totalROI / 1000).toFixed(0)}K
              </p>
              <p className="text-sm text-amber-100 mt-3">
                Based on 5% commission on premium + {hourlyRate}/hr time savings
              </p>
            </div>

            {/* CTA */}
            <a
              href="/beta"
              className="block w-full bg-gray-900 text-white text-center py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule Demo to Get Started
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          *ROI estimates based on average broker metrics. Actual results may vary based on market conditions and deal characteristics.
        </p>
      </div>
    </section>
  );
}
