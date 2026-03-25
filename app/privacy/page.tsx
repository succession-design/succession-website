'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

const S = {
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.6875rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#B8965A',
    marginBottom: '1.25rem',
    display: 'block',
  },
  h1: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 400,
    color: '#1A1A1A',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    marginBottom: '1rem',
  },
  date: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8125rem',
    fontWeight: 300,
    color: '#9B9490',
    letterSpacing: '0.04em',
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.375rem',
    fontWeight: 400,
    color: '#1A1A1A',
    lineHeight: 1.3,
    marginBottom: '1rem',
    marginTop: '0',
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 300,
    color: '#6B6560',
    lineHeight: 1.9,
    marginBottom: '0.875rem',
  },
  li: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 300,
    color: '#6B6560',
    lineHeight: 1.9,
    paddingLeft: '1.25rem',
    position: 'relative' as const,
    marginBottom: '0.375rem',
  },
};

const sections = [
  {
    title: 'Introduction',
    content: [
      { type: 'p', text: 'LP Venture Group ("Company," "we," "us," or "our") operates SuccessionIO and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.' },
      { type: 'p', text: 'By using our services, you consent to the data practices described in this policy. If you do not agree with any part of this policy, please do not use our services.' },
    ],
  },
  {
    title: '1. Information We Collect',
    content: [
      { type: 'p', text: 'Information you provide directly:' },
      { type: 'ul', items: ['Name, email address, and phone number', 'Business name, type, and industry', 'Audio recordings from interview sessions', 'Assessment responses and scores', 'Payment information (processed and secured by Stripe)', 'Account preferences and communication settings'] },
      { type: 'p', text: 'Information collected automatically:' },
      { type: 'ul', items: ['Device type, operating system, and browser', 'IP address and approximate location', 'Pages visited, time spent, and interactions', 'Referral sources and session data', 'Cookies and similar tracking technologies'] },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      { type: 'p', text: 'We use the information we collect to:' },
      { type: 'ul', items: ['Provide, maintain, and improve our services', 'Process payments and manage subscriptions', 'Generate your Deal Readiness Score and Succession Playbook', 'Send transactional emails and service notifications', 'Respond to inquiries and provide customer support', 'Analyze usage patterns to improve the user experience', 'Comply with legal obligations and enforce our Terms', 'Prevent fraud and protect the security of our platform'] },
    ],
  },
  {
    title: '3. Audio Recordings',
    content: [
      { type: 'p', text: 'Interview audio recordings are a core part of our service. We treat these with the highest level of confidentiality. Recordings are:' },
      { type: 'ul', items: ['Stored with AES-256 encryption at rest', 'Transmitted via TLS 1.3 encryption in transit', 'Accessible only to you and authorized SuccessionIO personnel', 'Used solely to generate your Succession Playbook and related documents', 'Never shared with third parties except as required to provide the service (e.g., transcription processing)', 'Deleted upon account closure within 30 days'] },
    ],
  },
  {
    title: '4. Data Sharing & Third Parties',
    content: [
      { type: 'p', text: 'We share your information only with trusted service providers who assist in operating our platform:' },
      { type: 'ul', items: ['Stripe — payment processing and subscription management', 'OpenAI — audio transcription and AI-assisted document generation', 'Amazon Web Services — cloud infrastructure and secure storage', 'Analytics providers — aggregated, anonymized usage data only'] },
      { type: 'p', text: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may disclose information when required by law, court order, or to protect the rights and safety of our users.' },
    ],
  },
  {
    title: '5. Data Protection & Security',
    content: [
      { type: 'p', text: 'We implement industry-standard security measures to protect your information:' },
      { type: 'ul', items: ['HTTPS/TLS 1.3 encryption for all data in transit', 'AES-256 encryption for data at rest', 'Secure authentication and session management', 'Regular security audits and vulnerability assessments', 'Access controls limiting data to authorized personnel only', 'Incident response procedures for potential breaches'] },
      { type: 'p', text: 'While we implement these safeguards, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.' },
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      { type: 'p', text: 'You have the following rights regarding your personal information:' },
      { type: 'ul', items: ['Access — request a copy of the personal data we hold about you', 'Correction — request correction of inaccurate or incomplete data', 'Deletion — request deletion of your personal data', 'Portability — receive your data in a structured, machine-readable format', 'Objection — object to processing of your data for certain purposes', 'Opt-out — unsubscribe from marketing communications at any time'] },
      { type: 'p', text: 'To exercise any of these rights, contact us at privacy@successionio.com. We will respond within 30 days.' },
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      { type: 'p', text: 'We retain your personal information for as long as your account is active or as needed to provide services. Upon account deletion or request:' },
      { type: 'ul', items: ['Personal data is deleted within 30 days', 'Audio recordings are deleted within 30 days', 'Payment records are retained as required by financial regulations (typically 7 years)', 'Anonymized, aggregated data may be retained indefinitely for analytics'] },
    ],
  },
  {
    title: '8. GDPR & CCPA Compliance',
    content: [
      { type: 'p', text: 'We comply with the General Data Protection Regulation (GDPR) for users in the European Union and the California Consumer Privacy Act (CCPA) for California residents.' },
      { type: 'p', text: 'California residents have the right to know what personal information is collected, to opt-out of the sale of personal information (we do not sell personal information), and to non-discrimination for exercising CCPA rights.' },
      { type: 'p', text: 'EU residents may lodge a complaint with their local data protection authority if they believe their rights have been violated.' },
    ],
  },
  {
    title: '9. Cookies',
    content: [
      { type: 'p', text: 'We use cookies and similar technologies to enhance your experience, analyze usage, and support our services. You can control cookie preferences through your browser settings or our cookie consent banner. Disabling cookies may affect the functionality of certain features.' },
    ],
  },
  {
    title: '10. Contact',
    content: [
      { type: 'p', text: 'For questions, requests, or concerns about this Privacy Policy, please contact our Privacy Team:' },
      { type: 'ul', items: ['Email: privacy@successionio.com', 'Phone: (832) 990-6378', 'Address: LP Venture Group, Houston, TX'] },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(7rem, 14vw, 11rem) 2rem clamp(3rem, 6vw, 5rem)', maxWidth: '800px', margin: '0 auto' }}>
          <span style={S.label}>Legal</span>
          <h1 style={S.h1}>Privacy Policy</h1>
          <p style={S.date}>Last Updated: March 25, 2026</p>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '800px', margin: '0 auto' }} /></div>

        {/* Intro callout */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem 2rem 0' }}>
          <div style={{ background: '#1A1A1A', padding: '2rem 2.5rem' }}>
            <p style={{ ...S.body, color: '#E8E3DC', marginBottom: 0, fontSize: '0.9375rem' }}>
              <strong style={{ color: '#B8965A', fontWeight: 500 }}>Our commitment:</strong> We do not sell your personal information. Your interview recordings and business data are encrypted, confidential, and used only to provide you with the services you requested.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sections.map((section, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem', alignItems: 'start' }}>
                <h2 style={S.sectionTitle}>{section.title}</h2>
                <div>
                  {section.content.map((block, bIdx) => {
                    if (block.type === 'p') {
                      return <p key={bIdx} style={S.body}>{block.text}</p>;
                    }
                    if (block.type === 'ul' && block.items) {
                      return (
                        <ul key={bIdx} style={{ listStyle: 'none', padding: 0, margin: '0 0 0.875rem 0' }}>
                          {block.items.map((item, iIdx) => (
                            <li key={iIdx} style={S.li}>
                              <span style={{ position: 'absolute', left: 0, color: '#B8965A', fontWeight: 400 }}>—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '800px', margin: '0 auto' }} /></div>

        {/* Footer note */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem 2rem 5rem' }}>
          <p style={{ ...S.body, fontSize: '0.8125rem', color: '#9B9490' }}>
            This Privacy Policy is effective as of March 25, 2026 and may be updated periodically. We will notify you of material changes via email or a prominent notice on our website.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
