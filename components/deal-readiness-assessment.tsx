'use client';

import { useState } from 'react';

export function DealReadinessAssessment() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({
    revenue: 50,
    ownerInvolvement: 50,
    teamStructure: 50,
  });
  const [showResults, setShowResults] = useState(false);

  const handleSliderChange = (field: string, value: number) => {
    setScores(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateDealReadinessScore = () => {
    const avg = (scores.revenue + (100 - scores.ownerInvolvement) + scores.teamStructure) / 3;
    return Math.round(avg);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-900';
    if (score >= 60) return 'bg-yellow-100 text-yellow-900';
    if (score >= 40) return 'bg-orange-100 text-orange-900';
    return 'bg-red-100 text-red-900';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Highly Ready';
    if (score >= 60) return 'Ready';
    if (score >= 40) return 'Moderate Risk';
    return 'High Risk';
  };

  const dealReadinessScore = calculateDealReadinessScore();

  return (
    <section id="assessment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Run a Deal Readiness Assessment</h2>
          <p className="text-xl text-slate-600">
            See how your business stacks up. Get a preliminary Deal Readiness Score in seconds.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-12">
          {!showResults ? (
            <>
              {/* Revenue Slider */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">
                  Annual Revenue: ${(scores.revenue * 1000).toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scores.revenue}
                  onChange={(e) => handleSliderChange('revenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>$0</span>
                  <span>$100M+</span>
                </div>
              </div>

              {/* Owner Involvement Slider */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">
                  Owner Involvement: {scores.ownerInvolvement}%
                </label>
                <p className="text-sm text-slate-600 mb-4">
                  {scores.ownerInvolvement > 70 ? 'Highly dependent on owner' : scores.ownerInvolvement > 40 ? 'Moderate owner involvement' : 'Low owner dependency'}
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scores.ownerInvolvement}
                  onChange={(e) => handleSliderChange('ownerInvolvement', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              {/* Team Structure Slider */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">
                  Team Structure: {scores.teamStructure}%
                </label>
                <p className="text-sm text-slate-600 mb-4">
                  {scores.teamStructure > 70 ? 'Strong, documented team structure' : scores.teamStructure > 40 ? 'Moderate team documentation' : 'Minimal team structure'}
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scores.teamStructure}
                  onChange={(e) => handleSliderChange('teamStructure', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Weak</span>
                  <span>Strong</span>
                </div>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors mt-8"
              >
                Calculate Deal Readiness Score
              </button>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-slate-500 uppercase mb-4">Your Deal Readiness Score</p>
                <div className={`inline-block rounded-lg px-8 py-6 mb-6 ${getScoreColor(dealReadinessScore)}`}>
                  <p className="text-5xl font-bold">{dealReadinessScore}</p>
                  <p className="text-lg font-semibold mt-2">{getScoreLabel(dealReadinessScore)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600 mb-2">Revenue</p>
                  <p className="text-2xl font-bold text-slate-900">${(scores.revenue * 1000).toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600 mb-2">Owner Dependency</p>
                  <p className="text-2xl font-bold text-slate-900">{scores.ownerInvolvement}%</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600 mb-2">Team Structure</p>
                  <p className="text-2xl font-bold text-slate-900">{scores.teamStructure}%</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Next step:</span> This preliminary assessment is based on basic inputs. A full Deal Readiness Assessment captures operational clarity, financial transparency, transition complexity, and risk exposure for a complete picture.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowResults(false)}
                  className="flex-1 border border-slate-300 text-slate-900 font-bold py-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Adjust Inputs
                </button>
                <button
                  className="flex-1 bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Request Full Assessment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
