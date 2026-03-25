'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-2">
            <div>
              <p className="text-2xl font-bold text-slate-900">Succession</p>
              <Link href="https://lpventuregroup.com" target="_blank">
                <p className="text-sm text-blue-600 hover:underline">A venture of LP Venture Group</p>
              </Link>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Transform your business knowledge into action. Capture, document, and share your expertise.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Product</p>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-slate-500 hover:text-slate-900">Home</Link>
              <Link href="/#features" className="block text-sm text-slate-500 hover:text-slate-900">Features</Link>
              <Link href="/#pricing" className="block text-sm text-slate-500 hover:text-slate-900">Pricing</Link>
              <Link href="/buyer-portal" className="block text-sm text-slate-500 hover:text-slate-900">Buyer Portal</Link>
              <Link href="/analytics" className="block text-sm text-slate-500 hover:text-slate-900">Analytics</Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Company</p>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-slate-500 hover:text-slate-900">About</Link>
              <Link href="https://lpventuregroup.com" target="_blank" className="block text-sm text-slate-500 hover:text-slate-900">LP Venture Group</Link>
              <Link href="mailto:hello@successionio.com" className="block text-sm text-slate-500 hover:text-slate-900">Contact</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Legal</p>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-slate-500 hover:text-slate-900">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-slate-500 hover:text-slate-900">Terms of Service</Link>
              <Link href="/cookies" className="block text-sm text-slate-500 hover:text-slate-900">Cookie Policy</Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Support</p>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-slate-500 hover:text-slate-900">Help Center</Link>
              <Link href="/" className="block text-sm text-slate-500 hover:text-slate-900">Contact Support</Link>
              <Link href="/" className="block text-sm text-slate-500 hover:text-slate-900">Status</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; 2026 Succession Inc. A venture of LP Venture Group. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-sm text-slate-500 hover:text-slate-900">Twitter</Link>
              <Link href="https://linkedin.com" className="text-sm text-slate-500 hover:text-slate-900">LinkedIn</Link>
              <Link href="https://github.com" className="text-sm text-slate-500 hover:text-slate-900">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
