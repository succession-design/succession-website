'use client';

import Link from 'next/link';
import { View, Text, Pressable } from 'react-native';

export function Header() {
  return (
    <View className="bg-background border-b border-border py-4 px-6 sticky top-0 z-50">
      <View className="max-w-6xl mx-auto flex-row justify-between items-center">
        {/* Logo & Branding */}
        <View className="flex-row items-center gap-2">
          <Link href="/">
            <Text className="text-2xl font-bold text-foreground">Succession</Text>
          </Link>
          <View className="h-6 w-px bg-border" />
          <Link href="https://lpventuregroup.com" target="_blank">
            <Text className="text-sm text-muted hover:text-primary">by LP Venture Group</Text>
          </Link>
        </View>

        {/* Navigation */}
        <View className="flex-row gap-8 items-center">
          <Link href="/">
            <Text className="text-base text-foreground hover:text-primary">Home</Text>
          </Link>
          <Link href="/#features">
            <Text className="text-base text-foreground hover:text-primary">Features</Text>
          </Link>
          <Link href="/#pricing">
            <Text className="text-base text-foreground hover:text-primary">Pricing</Text>
          </Link>
          <Link href="/about">
            <Text className="text-base text-foreground hover:text-primary">About</Text>
          </Link>
        </View>

        {/* CTA Button */}
        <Pressable className="bg-primary px-6 py-2 rounded-lg active:opacity-80">
          <Text className="text-background font-semibold">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
