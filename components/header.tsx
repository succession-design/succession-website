'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo & Branding */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-bold text-slate-900">Succession</span>
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <Link href="https://lpventuregroup.com" target="_blank">
            <span className="text-sm text-slate-500 hover:text-slate-700">by LP Venture Group</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-base text-slate-700 hover:text-slate-900">
            Home
          </Link>
          <Link href="/#features" className="text-base text-slate-700 hover:text-slate-900">
            Features
          </Link>
          <Link href="/#pricing" className="text-base text-slate-700 hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/about" className="text-base text-slate-700 hover:text-slate-900">
            About
          </Link>
          <Link href="/buyer-portal" className="text-base text-slate-700 hover:text-slate-900">
            Buyer Portal
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/seller-portal" className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
          Get Started
        </Link>
      </div>
    </header>
  );
}
