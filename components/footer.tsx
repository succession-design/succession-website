'use client';

import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Assessment', href: '/#assessment' },
    { label: 'Buyer Portal', href: '/buyer-portal' },
    { label: 'Analytics', href: '/analytics' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'LP Venture Group', href: 'https://lpventuregroup.com', external: true },
    { label: 'Contact', href: 'mailto:hello@successionio.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to make your next deal predictable?
          </h3>
          <p className="text-[#94A3B8] text-lg mb-8 max-w-xl mx-auto">
            Join the growing number of deal professionals using SuccessionIO to close with confidence.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center px-7 py-3.5 bg-[#C9A84C] text-[#0B1D3A] text-[15px] font-bold rounded-xl hover:bg-[#D4B96E] transition-all shadow-lg"
          >
            Run a Free Assessment
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 6V14H2V6L8 2Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6 14V9H10V14" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold">Succession</span>
            </div>
            <p className="text-[14px] text-[#94A3B8] leading-relaxed max-w-xs mb-4">
              The structured data and diligence layer powering modern SMB transactions.
            </p>
            <Link href="https://lpventuregroup.com" target="_blank" className="text-[13px] text-[#C9A84C] hover:text-[#D4B96E] transition-colors">
              A venture of LP Venture Group
            </Link>
          </div>

          {/* Product */}
          <div>
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em] mb-4">Product</p>
            <div className="space-y-3">
              {footerLinks.product.map((link) => (
                <Link key={link.href} href={link.href} className="block text-[14px] text-[#94A3B8] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em] mb-4">Company</p>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block text-[14px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em] mb-4">Legal</p>
            <div className="space-y-3">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="block text-[14px] text-[#94A3B8] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#64748B]">
            &copy; {new Date().getFullYear()} Succession Inc. A venture of LP Venture Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="https://twitter.com" target="_blank" className="text-[#64748B] hover:text-[#C9A84C] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-[#64748B] hover:text-[#C9A84C] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
