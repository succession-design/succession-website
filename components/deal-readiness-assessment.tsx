'use client';

import { useState } from 'react';

export function DealReadinessAssessment() {
  const [scores, setScores] = useState({
    revenue: 50,
    ownerInvolvement: 50,
    teamStructure: 50,
  });
  const [showResults, setShowResults] = useState(false);

  const handleSliderChange = (field: string, value: number) => {
    setScores(prev => ({ ...prev, [field]: value }));
  };

  const dealReadinessScore = Math.round(
    (scores.revenue + (100 - scores.ownerInvolvement) + scores.teamStructure) / 3
  );

  const getScoreColor = (score: number) => {
    if (score >= 75) return { bg: 'bg-[#16A34A]/10', text: 'text-[#16A34A]', ring: '#16A34A' };
    if (score >= 50) return { bg: 'bg-[#C9A84C]/10', text: 'text-[#C9A84C]', ring: '#C9A84C' };
    return { bg: 'bg-[#DC2626]/10', text: 'text-[#DC2626]', ring: '#DC2626' };
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Highly Ready';
    if (score >= 60) return 'Ready';
    if (score >= 40) return 'Moderate Risk';
    return 'High Risk';
  };

  const colors = getScoreColor(dealReadinessScore);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (dealReadinessScore / 100) * circumference;

  return (
    <section id="assessment" className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            Try It Now
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] leading-tight mb-4">
            Run a Deal Readiness Assessment
          </h2>
          <p className="text-lg text-[#475569]">
            See how your business stacks up. Get a preliminary score in seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-[#0B1D3A]/5 p-8 md:p-12">
          {!showResults ? (
            <div className="space-y-10">
              {/* Revenue */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-[15px] font-bold text-[#0B1D3A]">Annual Revenue</label>
                  <span className="text-[15px] font-bold text-[#0B1D3A]">${(scores.revenue * 1000).toLocaleString()}</span>
                </div>
                <input
                  type="range" min="0" max="100" value={scores.revenue}
                  onChange={(e) => handleSliderChange('revenue', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-2">
                  <span>$0</span><span>$100M+</span>
                </div>
              </div>

              {/* Owner Involvement */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <label className="text-[15px] font-bold text-[#0B1D3A]">Owner Involvement</label>
                  <span className="text-[15px] font-bold text-[#0B1D3A]">{scores.ownerInvolvement}%</span>
                </div>
                <p className="text-[13px] text-[#64748B] mb-3">
                  {scores.ownerInvolvement > 70 ? 'Highly dependent on owner' : scores.ownerInvolvement > 40 ? 'Moderate owner involvement' : 'Low owner dependency'}
                </p>
                <input
                  type="range" min="0" max="100" value={scores.ownerInvolvement}
                  onChange={(e) => handleSliderChange('ownerInvolvement', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-2">
                  <span>Low</span><span>High</span>
                </div>
              </div>

              {/* Team Structure */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <label className="text-[15px] font-bold text-[#0B1D3A]">Team Structure</label>
                  <span className="text-[15px] font-bold text-[#0B1D3A]">{scores.teamStructure}%</span>
                </div>
                <p className="text-[13px] text-[#64748B] mb-3">
                  {scores.teamStructure > 70 ? 'Strong, documented team structure' : scores.teamStructure > 40 ? 'Moderate team documentation' : 'Minimal team structure'}
                </p>
                <input
                  type="range" min="0" max="100" value={scores.teamStructure}
                  onChange={(e) => handleSliderChange('teamStructure', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-2">
                  <span>Weak</span><span>Strong</span>
                </div>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-[#0B1D3A] text-white font-semibold py-4 rounded-xl hover:bg-[#122B52] transition-all shadow-lg shadow-[#0B1D3A]/10 hover:shadow-xl text-[15px]"
              >
                Calculate Deal Readiness Score
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Score Display */}
              <div className="text-center">
                <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] mb-6">Your Deal Readiness Score</p>
                <div className="flex justify-center mb-4">
                  <div className="relative" style={{ width: 160, height: 160 }}>
                    <svg width="160" height="160" className="-rotate-90">
                      <circle cx="80" cy="80" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="8" />
                      <circle
                        cx="80" cy="80" r={radius} fill="none" stroke={colors.ring} strokeWidth="8"
                        strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-[#0B1D3A]">{dealReadinessScore}</span>
                      <span className={`text-[12px] font-bold ${colors.text}`}>{getScoreLabel(dealReadinessScore)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Revenue', value: `$${(scores.revenue * 1000).toLocaleString()}` },
                  { label: 'Owner Dependency', value: `${scores.ownerInvolvement}%` },
                  { label: 'Team Structure', value: `${scores.teamStructure}%` },
                ].map((item) => (
                  <div key={item.label} className="bg-[#F8FAFC] rounded-xl p-4 text-center border border-[#E2E8F0]">
                    <p className="text-[11px] text-[#64748B] uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-[#0B1D3A]">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#FBF7EF] border border-[#ECDDb5] rounded-xl p-6">
                <p className="text-[14px] text-[#0B1D3A]">
                  <span className="font-bold">Next step:</span> This preliminary assessment uses basic inputs. A full Deal Readiness Assessment captures operational clarity, financial transparency, transition complexity, and risk exposure.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResults(false)}
                  className="flex-1 border border-[#CBD5E1] text-[#0B1D3A] font-semibold py-3.5 rounded-xl hover:bg-[#F8FAFC] transition-colors text-[14px]"
                >
                  Adjust Inputs
                </button>
                <button className="flex-1 bg-[#0B1D3A] text-white font-semibold py-3.5 rounded-xl hover:bg-[#122B52] transition-all shadow-lg shadow-[#0B1D3A]/10 text-[14px]">
                  Request Full Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
