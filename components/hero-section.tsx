'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function ScoreRing({ score, size = 140 }: { score: number; size?: number }) {
  const [animated, setAnimated] = useState(false);
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getColor = (s: number) => {
    if (s >= 75) return '#16A34A';
    if (s >= 50) return '#C9A84C';
    return '#DC2626';
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#E2E8F0" strokeWidth="8"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={getColor(score)} strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-[#0B1D3A]">{score}</span>
        <span className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider">Score</span>
      </div>
    </div>
  );
}

function ScoreBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const color = value >= 75 ? '#16A34A' : value >= 50 ? '#C9A84C' : '#DC2626';

  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] text-[#475569] w-40 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-[13px] font-semibold text-[#0B1D3A] w-8 text-right">{value}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FBF7EF]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F0F5FB] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0B1D3A]/5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-[12px] font-semibold text-[#0B1D3A] uppercase tracking-wider">
                  Now in Private Beta
                </span>
              </div>

              <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#0B1D3A] leading-[1.05] tracking-tight">
                Make every business
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#A68636]">
                  acquisition
                </span>
                {' '}predictable.
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl">
                The structured data and diligence layer powering modern SMB transactions. Evaluate, price, and close deals with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#assessment"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0B1D3A] text-white text-[15px] font-semibold rounded-xl hover:bg-[#122B52] transition-all shadow-lg shadow-[#0B1D3A]/10 hover:shadow-xl hover:shadow-[#0B1D3A]/15 hover:-translate-y-0.5"
              >
                Run a Deal Readiness Assessment
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-[#0B1D3A] border border-[#CBD5E1] rounded-xl hover:border-[#94A3B8] hover:bg-[#F8FAFC] transition-all"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0]">
              {[
                { value: '500+', label: 'Deals Processed' },
                { value: '$2.5B+', label: 'Transaction Value' },
                { value: '92%', label: 'Close Rate Lift' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#0B1D3A]">{stat.value}</p>
                  <p className="text-[13px] text-[#64748B] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Score Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/10 to-[#0B1D3A]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-[#0B1D3A]/5 p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-[15px] font-bold text-[#0B1D3A]">Deal Readiness Score</h3>
                  <p className="text-[12px] text-[#94A3B8] mt-0.5">Sample Assessment</p>
                </div>
                <div className="px-2.5 py-1 bg-[#16A34A]/10 rounded-md">
                  <span className="text-[11px] font-bold text-[#16A34A] uppercase tracking-wider">Ready</span>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <ScoreRing score={78} size={160} />
              </div>

              <div className="space-y-4">
                <ScoreBar label="Financial Transparency" value={85} delay={500} />
                <ScoreBar label="Operational Clarity" value={72} delay={650} />
                <ScoreBar label="Owner Dependency" value={60} delay={800} />
                <ScoreBar label="Customer Quality" value={90} delay={950} />
                <ScoreBar label="Transition Readiness" value={65} delay={1100} />
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-2 text-[12px] text-[#94A3B8]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L9 5L13 5.5L10 8.5L10.8 12.5L7 10.5L3.2 12.5L4 8.5L1 5.5L5 5L7 1Z" fill="#C9A84C"/>
                  </svg>
                  Powered by SuccessionIO Deal Intelligence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
