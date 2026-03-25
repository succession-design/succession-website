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
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!isClient || !visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '2rem',
      maxWidth: '420px',
      background: '#1A1A1A',
      padding: '1.75rem 2rem',
      zIndex: 200,
      borderTop: '2px solid #B8965A',
    }}>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8125rem',
        fontWeight: 300,
        color: '#9C9590',
        lineHeight: 1.7,
        marginBottom: '1.25rem',
      }}>
        We use cookies to improve your experience.{' '}
        <Link href="/cookies" style={{
          color: '#B8965A',
          textDecoration: 'none',
          borderBottom: '1px solid rgba(184,150,90,0.4)',
        }}>
          Learn more
        </Link>
      </p>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={accept}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FAF8F5',
            background: '#B8965A',
            border: '1px solid #B8965A',
            padding: '0.65rem 1.5rem',
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6B6560',
            background: 'transparent',
            border: '1px solid #2C2C2C',
            padding: '0.65rem 1.5rem',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
