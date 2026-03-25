import Link from 'next/link';
import { VideoPlayer } from './video-player';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                Make every business acquisition predictable.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                SuccessionIO is the structured data and diligence layer powering modern SMB transactions — enabling brokers and buyers to evaluate, price, and close deals with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
              >
                Run a Deal Readiness Assessment
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-600">Deals Processed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">$2.5B+</p>
                <p className="text-sm text-slate-600">Transaction Value</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">92%</p>
                <p className="text-sm text-slate-600">Close Rate Lift</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Video Demo */}
          <div className="relative">
            <VideoPlayer
              videoUrl="/demo-video.mp4"
              title="Deal Infrastructure in Action"
              description="From unstructured business data to deal-ready intelligence"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
