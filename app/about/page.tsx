'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">About Succession</h1>
          <p className="text-lg text-slate-500 mt-2">Backed by LP Venture Group</p>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Succession empowers business owners to capture, document, and share their expertise. We transform years of business knowledge into actionable handover documents that enable smooth transitions, facilitate buyer readiness, and ensure business continuity.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Backed by LP Venture Group</h2>
          <div className="bg-slate-50 rounded-lg p-6 space-y-4">
            <p className="text-base text-slate-700 leading-relaxed">
              Succession is a venture of <strong>LP Venture Group</strong>, a leading venture capital and business development firm focused on innovative solutions for business owners.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              With LP Venture Group&apos;s support and expertise, Succession brings together:
            </p>
            <div className="ml-4 space-y-3">
              <div><p className="font-semibold text-slate-900">Industry Expertise</p><p className="text-sm text-slate-500">Deep understanding of business succession, M&amp;A, and business continuity</p></div>
              <div><p className="font-semibold text-slate-900">Technology Innovation</p><p className="text-sm text-slate-500">Cutting-edge AI and audio processing technology</p></div>
              <div><p className="font-semibold text-slate-900">Market Access</p><p className="text-sm text-slate-500">Connections with business owners, advisors, and investors</p></div>
              <div><p className="font-semibold text-slate-900">Operational Support</p><p className="text-sm text-slate-500">Experienced team to scale and grow the platform</p></div>
            </div>
            <Link href="https://lpventuregroup.com" target="_blank" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 font-semibold mt-4">
              Learn More About LP Venture Group
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose Succession?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-lg p-4"><p className="text-lg font-semibold text-slate-900">Purpose-Built</p><p className="text-sm text-slate-700">Designed specifically for business succession and handover documentation</p></div>
            <div className="bg-slate-50 rounded-lg p-4"><p className="text-lg font-semibold text-slate-900">AI-Powered</p><p className="text-sm text-slate-700">Advanced AI transcription and document generation technology</p></div>
            <div className="bg-slate-50 rounded-lg p-4"><p className="text-lg font-semibold text-slate-900">Secure &amp; Compliant</p><p className="text-sm text-slate-700">Enterprise-grade security with SOC 2 compliance standards</p></div>
            <div className="bg-slate-50 rounded-lg p-4"><p className="text-lg font-semibold text-slate-900">Fast &amp; Easy</p><p className="text-sm text-slate-700">Complete handover document in minutes, not weeks</p></div>
            <div className="bg-slate-50 rounded-lg p-4"><p className="text-lg font-semibold text-slate-900">Expert-Backed</p><p className="text-sm text-slate-700">Built by a team with deep business succession expertise</p></div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Have questions about Succession or want to learn more about our partnership with LP Venture Group?
          </p>
          <div className="flex gap-3">
            <Link href="mailto:hello@successionio.com" className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 font-semibold">Contact Us</Link>
            <Link href="https://lpventuregroup.com" target="_blank" className="border border-slate-900 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-50 font-semibold">Visit LP Venture Group</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
