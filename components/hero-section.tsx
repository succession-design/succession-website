import Link from 'next/link';
import { VideoPlayer } from './video-player';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Capture Your Business Knowledge
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business expertise into a comprehensive handover document. Perfect for succession planning, buyer readiness, and business continuity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors shadow-lg"
              >
                🚀 Join Beta Program
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                View Pricing
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-600 font-semibold">✓</span>
              <span>Limited beta spots available. Apply today for early access and special pricing.</span>
            </div>
          </div>

          {/* Right Visual - Video Demo */}
          <div className="relative">
            <VideoPlayer
              videoUrl="/demo-video.mp4"
              title="See It In Action"
              description="From interview to handover document in minutes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
