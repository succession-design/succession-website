import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { FeaturesShowcase } from '@/components/features-showcase';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { PricingSection } from '@/components/pricing-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { OwnersSection } from '@/components/owners-section';
import { BrokersSection } from '@/components/brokers-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <FeaturesShowcase />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <BrokersSection />
      <OwnersSection />
      <CTASection />
    </main>
  );
}
