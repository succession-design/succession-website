import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-amber-600">
              Succession
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/brokers" className="text-gray-600 hover:text-gray-900 font-medium">
              For Brokers
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/app"
              className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
