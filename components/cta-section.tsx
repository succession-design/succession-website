import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-amber-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Capture Your Business Knowledge?
        </h2>
        <p className="text-xl text-amber-100 mb-8 leading-relaxed">
          Start with a free trial today. No credit card required. See exactly what your handover document will look like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/app"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
          <Link
            href="mailto:succession@successionio.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>

        <p className="text-amber-100 text-sm">
          Questions? <Link href="mailto:succession@successionio.com" className="underline hover:text-white">Contact our team</Link>
        </p>
      </div>
    </section>
  );
}
