'use client';

import { HeroSection } from '@/components/hero-section';
import { BrandStory } from '@/components/brand-story';
import { VideoSection } from '@/components/video-section';
import { HowItWorks } from '@/components/how-it-works';
import { FeaturesShowcase } from '@/components/features-showcase';
import { WhyDealsFail } from '@/components/why-deals-fail';
import { DealLifecycle } from '@/components/deal-lifecycle';
import { AudienceSections } from '@/components/audience-sections';
import { Testimonials } from '@/components/testimonials';
import { DealReadinessAssessment } from '@/components/deal-readiness-assessment';
import { PricingTiers } from '@/components/pricing-tiers';
import { BackOffice } from '@/components/back-office';
import { DataDefensibility } from '@/components/data-defensibility';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandStory />
      <VideoSection />
      <HowItWorks />
      <FeaturesShowcase />
      <WhyDealsFail />
      <DealLifecycle />
      <AudienceSections />
      <Testimonials />
      <DealReadinessAssessment />
      <PricingTiers />
      <BackOffice />
      <DataDefensibility />
    </div>
  );
}
