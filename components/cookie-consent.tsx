'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-slate-900">Cookie Consent</p>
          <p className="text-xs text-slate-500">
            We use cookies to enhance your experience, analyze traffic, and for marketing purposes. By clicking &quot;Accept&quot;, you consent to our use of cookies. You can learn more in our{' '}
            <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleReject} className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Reject
          </button>
          <button onClick={handleAccept} className="px-4 py-2 rounded-lg bg-slate-900 text-sm font-medium text-white hover:bg-slate-800">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
