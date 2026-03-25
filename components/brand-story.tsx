export function BrandStory() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Stats */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#C9A84C]/8 to-[#0B1D3A]/5 rounded-3xl blur-2xl" />
            <div className="relative space-y-6">
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8">
                <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-6">Why Now</p>
                <p className="text-xl font-bold text-[#0B1D3A] mb-8 leading-snug">
                  The largest business transfer in history is happening right now.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '10,000', label: 'Boomers retire every day' },
                    { value: '$2.4T', label: 'In business value transferring by 2035' },
                    { value: '4.5M', label: 'Businesses changing hands this decade' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl sm:text-3xl font-extrabold text-[#0B1D3A] leading-none mb-2">{stat.value}</p>
                      <p className="text-[12px] text-[#64748B] leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3A6B] rounded-2xl p-8">
                <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">The Reality</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-5xl font-extrabold text-white">20–40%</span>
                </div>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">
                  of your business sale price is silently discounted because your operational knowledge is locked in your head.
                </p>
                <p className="text-[12px] text-[#475569] mt-3">Source: Business broker due diligence benchmarks</p>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div className="space-y-8">
            <div>
              <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.15em] mb-4">
                Why We Built This
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] leading-tight mb-6">
                You built it over decades.<br />
                Don&apos;t lose it in the sale.
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-6">
                When a business owner retires, they take with them decades of knowledge — client relationships, supplier terms, margin logic, operational know-how — that no buyer can see, value, or pay for.
              </p>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-6">
                We built SuccessionIO because we watched too many great businesses sell for less than they were worth, not because the business wasn&apos;t valuable, but because the owner never had a way to show it.
              </p>
            </div>

            {/* Owner Dependency Trap */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6">
              <p className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wider mb-4">When you leave, what stays behind?</p>
              <div className="space-y-3">
                {[
                  { icon: '👥', label: 'Client relationships built over decades' },
                  { icon: '⚙️', label: 'Processes that only you know cold' },
                  { icon: '🤝', label: 'Supplier terms you negotiated personally' },
                  { icon: '📊', label: 'Margin logic that lives in your head' },
                  { icon: '🏭', label: 'Industry knowledge buyers can\'t replicate' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-[14px] text-[#475569]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[15px] text-[#475569] leading-relaxed">
              SuccessionIO captures all of it — through a simple AI-guided conversation — and turns it into a structured, buyer-ready playbook that commands the price your business actually deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
