'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setVisible(false);
  };

  if (!isClient || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-lg mx-auto bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl shadow-[#0B1D3A]/10 p-6">
        <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
          We use cookies to improve your experience and analyze site usage.{' '}
          <Link href="/cookies" className="text-[#0B1D3A] font-medium underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
            Learn more
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-[#0B1D3A] text-white text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#122B52] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 border border-[#CBD5E1] text-[#475569] text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#F8FAFC] transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
