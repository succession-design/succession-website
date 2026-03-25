'use client';

import { View, ScrollView } from 'react-native';
import { HeroSection } from '@/components/hero-section';
import { FeaturesShowcase } from '@/components/features-showcase';

export default function Home() {
  return (
    <ScrollView>
      <View className="bg-background">
        <HeroSection />
        <FeaturesShowcase />
      </View>
    </ScrollView>
  );
}
