'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-base text-slate-500 mt-2">Last Updated: March 25, 2026</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Introduction</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Succession (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">1. Information We Collect</h2>
          <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
          <p className="text-base text-slate-700">We collect information you voluntarily provide, including:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Name and email address</li>
            <li>Business information and industry</li>
            <li>Audio recordings of interviews</li>
            <li>Payment information (processed by Stripe)</li>
            <li>Account preferences and settings</li>
          </ul>
          <h3 className="text-lg font-semibold text-slate-900">Automatically Collected Information</h3>
          <p className="text-base text-slate-700">When you use our services, we automatically collect:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Device information (type, OS, browser)</li>
            <li>IP address and location data</li>
            <li>Usage data and analytics</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">2. How We Use Your Information</h2>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Provide and improve our services</li>
            <li>Process payments and subscriptions</li>
            <li>Send service updates and notifications</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze usage patterns and improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">3. Data Protection &amp; Security</h2>
          <p className="text-base text-slate-700">We implement comprehensive security measures:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>HTTPS/TLS encryption for all data in transit</li>
            <li>AES-256 encryption for data at rest</li>
            <li>Secure authentication and session management</li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with SOC 2 Type II standards</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">4. Data Sharing &amp; Third Parties</h2>
          <p className="text-base text-slate-700">We only share your information with trusted third parties:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Stripe (payment processing)</li>
            <li>OpenAI (audio transcription and AI processing)</li>
            <li>AWS (cloud infrastructure)</li>
            <li>Law enforcement (when legally required)</li>
          </ul>
          <p className="text-base text-slate-700 mt-2">We do not sell your personal information to third parties.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">5. Your Rights</h2>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Export your data in portable format</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">6. Data Retention</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            We retain your information for as long as your account is active. Upon account deletion, we securely delete your data within 30 days, except where retention is required by law.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">7. GDPR &amp; CCPA Compliance</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            We comply with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). Residents of the EU and California have additional rights regarding their personal data.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">8. Contact Us</h2>
          <p className="text-base text-slate-700">If you have questions about this Privacy Policy, contact us at:</p>
          <p className="text-base text-slate-700 font-semibold">Email: privacy@successionio.com</p>
          <p className="text-base text-slate-700 font-semibold">Address: Succession Inc., San Francisco, CA</p>
        </div>

        <div className="py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            This Privacy Policy is effective as of March 25, 2026 and may be updated periodically.
          </p>
        </div>
      </div>
    </div>
  );
}
