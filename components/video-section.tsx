'use client';

import { useState } from 'react';

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] leading-tight mb-4">
            From conversation to playbook in minutes
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto">
            Watch how SuccessionIO turns a 45-minute AI interview into a buyer-ready business playbook.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B1D3A]/15 border border-[#E2E8F0] bg-[#0B1D3A] aspect-video">
          {!playing ? (
            /* Poster / Play State */
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#122B52] to-[#0B1D3A]" />
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 40%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 70% 60%, #2E63A8 0%, transparent 50%)',
                }}
              />

              {/* Content */}
              <div className="relative text-center px-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                  <span className="text-[#C9A84C] text-[11px] font-bold uppercase tracking-wider">Product Demo</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">SuccessionIO in Action</h3>
                <p className="text-[#94A3B8] text-[15px] mb-8">3 min · No signup required</p>

                <button
                  onClick={() => setPlaying(true)}
                  className="group relative w-20 h-20 rounded-full bg-[#C9A84C] hover:bg-[#D4B96E] transition-all shadow-xl shadow-[#C9A84C]/30 hover:shadow-[#C9A84C]/50 hover:scale-105 flex items-center justify-center mx-auto"
                  aria-label="Play video"
                >
                  <svg className="ml-1" width="28" height="28" viewBox="0 0 24 24" fill="#0B1D3A">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            /* Video playing state — replace src with actual video URL */
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src="/videos/successionio-demo.mp4"
            >
              <source src="/videos/successionio-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Below video — quick stats */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { value: '30–60 min', label: 'AI interview session' },
            { value: '5 pillars', label: 'of knowledge captured' },
            { value: '1 playbook', label: 'buyer-ready on completion' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-[#0B1D3A]">{stat.value}</p>
              <p className="text-[13px] text-[#64748B] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
