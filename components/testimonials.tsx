export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0B1D3A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em]">
            Customer Feedback
          </p>
        </div>

        {/* Hero Quote */}
        <div className="relative mb-16">
          <div className="absolute -top-6 -left-4 text-[120px] leading-none text-[#C9A84C]/15 font-serif select-none">&ldquo;</div>
          <blockquote className="relative text-2xl sm:text-3xl lg:text-[34px] font-light text-white leading-relaxed text-center px-8 lg:px-16">
            I built this business over{' '}
            <span className="font-bold text-[#C9A84C]">27 years</span>. The last thing I wanted was to leave money on the table because I never wrote any of it down.
          </blockquote>
          <div className="mt-8 text-center">
            <p className="text-[#94A3B8] text-[15px]">— Small Business Owner, Manufacturing</p>
            <p className="text-[#C9A84C] text-[13px] font-semibold mt-1">This is why SuccessionIO exists.</p>
          </div>
        </div>

        {/* Supporting Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              quote: "The AI interview took 45 minutes. The playbook it produced would have taken me months to write myself — if I ever got around to it.",
              name: "Robert K.",
              role: "Owner, HVAC Services Company",
              years: "32 years in business",
            },
            {
              quote: "My broker said it was the most prepared seller she'd worked with. We closed 18% above asking price.",
              name: "Sandra M.",
              role: "Owner, Regional Staffing Agency",
              years: "19 years in business",
            },
            {
              quote: "I didn't realize how much was in my head until I started talking. SuccessionIO helped me see my own business differently.",
              name: "David T.",
              role: "Owner, Commercial Cleaning",
              years: "24 years in business",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
              <div className="text-[#C9A84C] text-2xl mb-4 font-serif">&ldquo;</div>
              <p className="text-[#CBD5E1] text-[14px] leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-[14px]">{t.name}</p>
                <p className="text-[#94A3B8] text-[12px] mt-0.5">{t.role}</p>
                <p className="text-[#C9A84C] text-[11px] font-medium mt-1">{t.years}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Is This You? */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-10">
          <div className="text-center mb-8">
            <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">Is This You?</p>
            <h3 className="text-2xl font-bold text-white">SuccessionIO is built for you if&hellip;</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "You're planning to sell in the next 3–5 years",
              "You're the operational heart of your business",
              "You've never written your processes down",
              "You're not a tech person — and that's fine",
              "You want every dollar your business is worth",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 4-4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#CBD5E1] text-[14px] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
