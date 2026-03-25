'use client';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Cookie Policy</h1>
          <p className="text-base text-slate-500 mt-2">Last Updated: March 25, 2026</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">What Are Cookies?</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They allow websites to remember information about your visit, such as your preferences and login information.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Why We Use Cookies</h2>
          <ul className="ml-4 space-y-1 list-disc list-inside text-slate-700">
            <li>Remember your login information and preferences</li>
            <li>Understand how you use our website</li>
            <li>Improve your user experience</li>
            <li>Analyze website traffic and performance</li>
            <li>Provide personalized content and recommendations</li>
            <li>Detect and prevent fraud</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Types of Cookies We Use</h2>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Essential Cookies</h3>
            <p className="text-base text-slate-700">These cookies are necessary for the website to function properly.</p>
            <ul className="ml-4 list-disc list-inside text-slate-700"><li>Session ID</li><li>Authentication tokens</li><li>CSRF protection tokens</li></ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Performance Cookies</h3>
            <p className="text-base text-slate-700">These cookies help us understand how visitors use our website.</p>
            <ul className="ml-4 list-disc list-inside text-slate-700"><li>Google Analytics</li><li>Page load times</li><li>Error tracking</li></ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Functional Cookies</h3>
            <p className="text-base text-slate-700">These cookies allow us to remember your choices and provide enhanced features.</p>
            <ul className="ml-4 list-disc list-inside text-slate-700"><li>Language preferences</li><li>Theme preferences</li><li>Saved preferences</li></ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Marketing Cookies</h3>
            <p className="text-base text-slate-700">These cookies are used to track visitors across websites for targeted advertising.</p>
            <ul className="ml-4 list-disc list-inside text-slate-700"><li>Advertising pixels</li><li>Conversion tracking</li><li>Retargeting cookies</li></ul>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Cookie Duration</h2>
          <p className="text-base text-slate-700"><strong>Session Cookies:</strong> Deleted when you close your browser.</p>
          <p className="text-base text-slate-700"><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-2 years).</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Third-Party Cookies</h2>
          <ul className="ml-4 list-disc list-inside text-slate-700">
            <li>Google Analytics - Website analytics</li>
            <li>Stripe - Payment processing</li>
            <li>Social media platforms - Social sharing</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Managing Your Cookies</h2>
          <p className="text-base text-slate-700"><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when cookies are being sent.</p>
          <p className="text-base text-slate-700"><strong>Cookie Consent Banner:</strong> Use our cookie consent banner to accept or reject non-essential cookies.</p>
          <p className="text-base text-slate-700"><strong>Opt-Out Tools:</strong> Use opt-out tools provided by analytics and advertising companies.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Questions?</h2>
          <p className="text-base text-slate-700">Contact us at: <strong>privacy@successionio.com</strong></p>
        </div>

        <div className="py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">This Cookie Policy is effective as of March 25, 2026.</p>
        </div>
      </div>
    </div>
  );
}
