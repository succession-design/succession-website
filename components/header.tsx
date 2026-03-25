'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-brokers', label: 'For Brokers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      background: scrolled ? 'rgba(250, 248, 245, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${scrolled ? '#E0DAD2' : 'transparent'}`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Wordmark */}
        <Link href="/" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.375rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          color: '#1A1A1A',
          textDecoration: 'none',
        }}>
          SuccessionIO
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  color: '#6B6560',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1A1A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6560')}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/assessment"
            className="nav-cta"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: '#FAF8F5',
              background: '#1A1A1A',
              padding: '0.65rem 1.5rem',
              border: '1px solid #1A1A1A',
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1A1A1A';
              e.currentTarget.style.color = '#FAF8F5';
            }}
          >
            Get Your Score
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              flexDirection: 'column' as const,
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#1A1A1A',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#1A1A1A',
              opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#1A1A1A',
              transition: 'transform 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
            }} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: '#FAF8F5',
          borderTop: '1px solid #E0DAD2',
          padding: '2rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.75rem',
                fontWeight: 400,
                color: '#1A1A1A',
                padding: '0.875rem 0',
                borderBottom: '1px solid #EDE9E3',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/assessment"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'inline-flex',
              marginTop: '1.5rem',
              padding: '0.9rem 2rem',
              background: '#1A1A1A',
              color: '#FAF8F5',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
            }}
          >
            Get Your Score
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
