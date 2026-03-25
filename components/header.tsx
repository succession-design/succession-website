'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#0B1D3A] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 6V14H2V6L8 2Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M6 14V9H10V14" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#0B1D3A]' : 'text-[#0B1D3A]'}`}>
              Succession
            </span>
            <span className="hidden sm:inline text-[11px] font-medium text-[#94A3B8] tracking-wide uppercase">
              by LP Venture Group
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: '/#how-it-works', label: 'How It Works' },
            { href: '/#assessment', label: 'Assessment' },
            { href: '/about', label: 'About' },
            { href: '/buyer-portal', label: 'For Buyers' },
            { href: '/broker-dashboard', label: 'For Brokers' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[13px] font-medium text-[#475569] hover:text-[#0B1D3A] transition-colors rounded-lg hover:bg-[#F1F5F9]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/assessment"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-[13px] font-semibold text-white bg-[#0B1D3A] rounded-lg hover:bg-[#122B52] transition-all shadow-sm hover:shadow-md"
          >
            Get Your Score
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0B1D3A" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M5 5L15 15M15 5L5 15" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M3 6H17" strokeLinecap="round"/>
                  <path d="M3 10H17" strokeLinecap="round"/>
                  <path d="M3 14H17" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {[
              { href: '/#how-it-works', label: 'How It Works' },
              { href: '/#assessment', label: 'Assessment' },
              { href: '/about', label: 'About' },
              { href: '/buyer-portal', label: 'For Buyers' },
              { href: '/broker-dashboard', label: 'For Brokers' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-[#475569] hover:text-[#0B1D3A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 text-center text-[14px] font-semibold text-white bg-[#0B1D3A] rounded-lg"
            >
              Get Your Score
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
