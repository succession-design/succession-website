import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/for-brokers', label: 'For Brokers' },
    { href: '/about', label: 'About' },
    { href: '/assessment', label: 'Get Your Score' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: 'mailto:hello@successionio.com', label: 'Contact' },
  ];

  return (
    <footer style={{
      background: '#FAF8F5',
      borderTop: '1px solid #E0DAD2',
      padding: '4.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'start',
      }} className="footer-inner">
        {/* Brand */}
        <div>
          <Link href="/" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.25rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: '#1A1A1A',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '0.875rem',
          }}>
            SuccessionIO
          </Link>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: '#9C9590',
            lineHeight: 1.75,
            maxWidth: '300px',
            marginBottom: '2rem',
          }}>
            Business succession intelligence for owners who built something worth protecting.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 300,
            color: '#C9C4BC',
            letterSpacing: '0.02em',
          }}>
            © {year} LP Venture Group
          </p>
        </div>

        {/* Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.625rem 3.5rem',
          paddingTop: '0.25rem',
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                letterSpacing: '0.04em',
                color: '#9C9590',
                textDecoration: 'none',
                padding: '0.2rem 0',
                transition: 'color 0.2s ease',
                display: 'block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1A1A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9C9590')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
