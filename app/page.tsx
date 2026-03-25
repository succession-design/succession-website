'use client';

import { HeroSection } from '@/components/hero-section';
import { FeaturesShowcase } from '@/components/features-showcase';
import { WhyDealsFail } from '@/components/why-deals-fail';
import { HowItWorks } from '@/components/how-it-works';
import { DealLifecycle } from '@/components/deal-lifecycle';
import { AudienceSections } from '@/components/audience-sections';
import { DataDefensibility } from '@/components/data-defensibility';
import { DealReadinessAssessment } from '@/components/deal-readiness-assessment';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyDealsFail />
      <HowItWorks />
      <DealLifecycle />
      <AudienceSections />
      <DealReadinessAssessment />
      <DataDefensibility />
      <FeaturesShowcase />
    </div>
  );
}
