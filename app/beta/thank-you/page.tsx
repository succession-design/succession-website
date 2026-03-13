export const metadata = {
  title: "Thank You | Succession Beta Program",
  description: "Thank you for joining the Succession beta program. We'll be in touch soon!",
};

export default function BetaThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          Your application has been submitted successfully. We'll review it and send you access details within 24 hours.
        </p>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">What Happens Next:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Check your email for our welcome message</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Receive beta access link and download instructions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Schedule your onboarding call with our team</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Join our exclusive beta tester community</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-600 mb-2">
            Have questions? Reach out to us:
          </p>
          <p className="font-semibold text-gray-900 mb-1">
            succession@successionio.com
          </p>
          <p className="font-semibold text-gray-900">
            1 (832) 990-6378
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition"
          >
            Back to Home
          </a>
          <a
            href="https://www.succession.io"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition"
          >
            Learn More About Succession
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-6">
          We're excited to have you join the beta program. Your feedback will help us build the best business succession tool on the market.
        </p>
      </div>
    </div>
  );
}
