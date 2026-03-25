'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-base text-slate-500 mt-2">Last Updated: March 25, 2026</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Introduction</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of Succession&apos;s website, mobile application, and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">1. User Eligibility</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            You must be at least 18 years old and have the legal authority to enter into these Terms. By using our services, you represent and warrant that you meet these requirements.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">2. Account Responsibility</h2>
          <p className="text-base text-slate-700 leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Provide accurate and complete information</li>
            <li>Maintain account security</li>
            <li>Notify us immediately of unauthorized access</li>
            <li>Accept responsibility for all account activity</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">3. Acceptable Use Policy</h2>
          <p className="text-base text-slate-700">You agree not to use our services for:</p>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Illegal or unauthorized purposes</li>
            <li>Harassment, abuse, or threatening behavior</li>
            <li>Transmitting malware or harmful code</li>
            <li>Violating intellectual property rights</li>
            <li>Circumventing security measures</li>
            <li>Spamming or phishing</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">4. Intellectual Property Rights</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            All content, features, and functionality of our services are owned by Succession, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            You retain ownership of content you create (interviews, documents). By using our services, you grant Succession a license to use, reproduce, and distribute your content as necessary to provide the services.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">5. Payment &amp; Subscription Terms</h2>
          <p className="text-base text-slate-700"><strong>Billing:</strong> Subscription fees are billed according to your selected plan.</p>
          <p className="text-base text-slate-700"><strong>Cancellation:</strong> You may cancel at any time. Cancellation takes effect at the end of your current billing period.</p>
          <p className="text-base text-slate-700"><strong>Refunds:</strong> Refunds are provided according to our refund policy. No refunds for partial months.</p>
          <p className="text-base text-slate-700"><strong>Price Changes:</strong> We may change prices with 30 days&apos; notice.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">6. Limitation of Liability</h2>
          <p className="text-base text-slate-700 leading-relaxed uppercase">
            To the maximum extent permitted by law, Succession shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">7. Disclaimer of Warranties</h2>
          <p className="text-base text-slate-700 leading-relaxed uppercase">
            Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">8. Indemnification</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            You agree to indemnify and hold harmless Succession from any claims, damages, or costs arising from your use of our services or violation of these Terms.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">9. Termination</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            We may terminate or suspend your account immediately for violation of these Terms. Upon termination, your right to use our services ceases immediately.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">10. Dispute Resolution</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Any disputes shall be resolved through binding arbitration in San Francisco, California, governed by California law.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">11. Modifications to Terms</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            We may modify these Terms at any time. Continued use of our services after modifications constitutes acceptance.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">12. Contact Us</h2>
          <p className="text-base text-slate-700">For questions about these Terms, contact us at:</p>
          <p className="text-base text-slate-700 font-semibold">Email: legal@successionio.com</p>
          <p className="text-base text-slate-700 font-semibold">Address: Succession Inc., San Francisco, CA</p>
        </div>

        <div className="py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            These Terms of Service are effective as of March 25, 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
