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
    marginBottom: '0',
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
      { type: 'p', text: 'These Terms of Service ("Terms") govern your use of SuccessionIO\'s website, mobile application, and services operated by LP Venture Group ("Company," "we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.' },
      { type: 'p', text: 'Please read these Terms carefully. If you do not agree with any part of these Terms, you may not access the services.' },
    ],
  },
  {
    title: '1. User Eligibility',
    content: [
      { type: 'p', text: 'You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or the entity you represent. By using our services, you represent and warrant that you meet these requirements.' },
    ],
  },
  {
    title: '2. Account Responsibility',
    content: [
      { type: 'p', text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to:' },
      { type: 'ul', items: ['Provide accurate and complete information during registration', 'Maintain the security of your account credentials', 'Notify us immediately of any unauthorized access or breach', 'Accept responsibility for all activity conducted through your account'] },
    ],
  },
  {
    title: '3. Acceptable Use Policy',
    content: [
      { type: 'p', text: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services for:' },
      { type: 'ul', items: ['Illegal or unauthorized purposes', 'Harassment, abuse, or threatening behavior toward others', 'Transmitting malware, viruses, or other harmful code', 'Violating intellectual property rights of any party', 'Circumventing or disabling security measures', 'Spamming, phishing, or other deceptive practices', 'Scraping, crawling, or automated data collection without permission'] },
    ],
  },
  {
    title: '4. Intellectual Property Rights',
    content: [
      { type: 'p', text: 'All content, features, and functionality of our services — including but not limited to text, graphics, logos, software, and algorithms — are owned by LP Venture Group, its licensors, or other providers and are protected by copyright, trademark, patent, and other intellectual property laws.' },
      { type: 'p', text: 'You retain ownership of content you create through our services (interview recordings, documents, assessments). By using our services, you grant SuccessionIO a limited, non-exclusive license to use, reproduce, and process your content solely as necessary to provide the services to you.' },
    ],
  },
  {
    title: '5. Payment & Subscription Terms',
    content: [
      { type: 'p', text: 'Billing: Subscription fees are billed according to your selected plan (Trial: $97 one-time; Core Platform: $197/month; Continuity: $347/month; Enterprise: custom). All fees are in USD.' },
      { type: 'p', text: 'Cancellation: You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period. You will retain access through the end of the paid period.' },
      { type: 'p', text: 'Refunds: The Trial tier ($97) is non-refundable after the Gap Analysis and Playbook have been delivered. Monthly subscriptions are non-refundable for partial months. We may issue refunds at our sole discretion.' },
      { type: 'p', text: 'Price Changes: We reserve the right to modify pricing with 30 days\' advance notice. Continued use after the effective date constitutes acceptance of the new pricing.' },
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      { type: 'p', text: 'To the maximum extent permitted by applicable law, LP Venture Group and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, revenue, data, goodwill, or business opportunities — arising from your use of or inability to use our services.' },
      { type: 'p', text: 'Our total liability to you for any claim arising from or related to these Terms or our services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.' },
    ],
  },
  {
    title: '7. Disclaimer of Warranties',
    content: [
      { type: 'p', text: 'Our services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.' },
      { type: 'p', text: 'We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components. The Deal Readiness Score and related assessments are informational tools and do not constitute financial, legal, or investment advice.' },
    ],
  },
  {
    title: '8. Indemnification',
    content: [
      { type: 'p', text: 'You agree to indemnify, defend, and hold harmless LP Venture Group and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of a third party.' },
    ],
  },
  {
    title: '9. Termination',
    content: [
      { type: 'p', text: 'We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services ceases immediately.' },
      { type: 'p', text: 'Provisions that by their nature should survive termination — including intellectual property, warranty disclaimers, indemnification, and limitations of liability — shall survive termination.' },
    ],
  },
  {
    title: '10. Dispute Resolution',
    content: [
      { type: 'p', text: 'Any dispute, claim, or controversy arising out of or relating to these Terms or our services shall be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules.' },
      { type: 'p', text: 'The arbitration shall be conducted in Houston, Texas, and governed by the laws of the State of Texas, without regard to its conflict of law provisions. You waive any right to a jury trial or to participate in a class action lawsuit.' },
    ],
  },
  {
    title: '11. Modifications to Terms',
    content: [
      { type: 'p', text: 'We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date at the top of this page and, where appropriate, by sending an email notification. Continued use of our services after the effective date of modifications constitutes your acceptance of the revised Terms.' },
    ],
  },
  {
    title: '12. Contact',
    content: [
      { type: 'p', text: 'For questions about these Terms of Service, please contact us:' },
      { type: 'ul', items: ['Email: legal@successionio.com', 'Phone: (832) 990-6378', 'Address: LP Venture Group, Houston, TX'] },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(7rem, 14vw, 11rem) 2rem clamp(3rem, 6vw, 5rem)', maxWidth: '800px', margin: '0 auto' }}>
          <span style={S.label}>Legal</span>
          <h1 style={S.h1}>Terms of Service</h1>
          <p style={S.date}>Last Updated: March 25, 2026</p>
        </section>

        {/* Divider */}
        <div style={{ padding: '0 2rem' }}><div style={{ height: '1px', background: '#E0DAD2', maxWidth: '800px', margin: '0 auto' }} /></div>

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
            These Terms of Service are effective as of March 25, 2026. For previous versions, please contact legal@successionio.com.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
