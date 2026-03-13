import { BetaSignupForm } from "@/components/beta-signup-form";

export const metadata = {
  title: "Join Succession Beta | Early Access Program",
  description:
    "Be among the first to experience Succession. Join our exclusive beta program and help shape the future of business succession planning.",
};

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">🚀 Exclusive Opportunity</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Succession Beta Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be among the first brokers to experience the future of business succession planning.
              Shape the product, get exclusive benefits, and close more deals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Benefits */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Beta?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: "⚡",
                    title: "Early Access",
                    description:
                      "Be the first to use Succession before public launch. Get a competitive advantage in your market.",
                  },
                  {
                    icon: "🎯",
                    title: "Shape the Product",
                    description:
                      "Your feedback directly influences development. Help us build the features you need most.",
                  },
                  {
                    icon: "💰",
                    title: "Special Pricing",
                    description:
                      "Beta participants get exclusive pricing locked in for life. Significant savings vs. standard rates.",
                  },
                  {
                    icon: "🤝",
                    title: "Dedicated Support",
                    description:
                      "Direct access to our team. Priority support and personalized onboarding for your brokerage.",
                  },
                  {
                    icon: "🏆",
                    title: "Founding Partner Status",
                    description:
                      "Recognition as a founding partner. Featured in our case studies and marketing materials.",
                  },
                  {
                    icon: "📈",
                    title: "Close More Deals",
                    description:
                      "Accelerate deal closings by 20-30%. Reduce diligence surprises and buyer hesitation.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What to Expect
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <span>
                    <strong>Application Review</strong> - We'll review your application within 24 hours
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <span>
                    <strong>Access Granted</strong> - Receive download link and onboarding materials
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <span>
                    <strong>Onboarding Call</strong> - 30-min call with our team to get you started
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <span>
                    <strong>Start Using</strong> - Begin capturing business knowledge and generating handover documents
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                  <span>
                    <strong>Share Feedback</strong> - Regular feedback sessions to shape the product
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Signup Form */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Apply Now
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Limited spots available. Apply today to secure your place.
              </p>

              <BetaSignupForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How much does the beta program cost?",
                a: "The beta program is free to join. You'll have full access to Succession during the beta period. After launch, beta participants receive special lifetime pricing.",
              },
              {
                q: "How long is the beta period?",
                a: "The beta program runs for 3 months. During this time, we'll be actively gathering feedback and making improvements based on your input.",
              },
              {
                q: "What if I want to cancel?",
                a: "You can cancel anytime. However, we're confident you'll love Succession and want to continue as a paying customer after beta.",
              },
              {
                q: "Do you offer training?",
                a: "Yes! We provide comprehensive onboarding, video tutorials, and dedicated support to ensure your success.",
              },
              {
                q: "Can I use this with my existing clients?",
                a: "Absolutely. Many beta participants are already using Succession with their clients and seeing great results.",
              },
              {
                q: "What if I have technical issues?",
                a: "Our support team is here to help. Beta participants get priority support with direct access to our team.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-amber-800 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Close More Deals?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the Succession beta program and get early access to the future of business succession.
          </p>
          <a
            href="#signup"
            className="inline-block bg-white text-amber-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Apply for Beta Access
          </a>
        </div>
      </div>
    </div>
  );
}
