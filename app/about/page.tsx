'use client';

import Link from 'next/link';
import { ScreenContainer } from '@/components/screen-container';
import { Text, View, ScrollView, Pressable } from 'react-native';

export default function AboutPage() {
  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-8">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-4xl font-bold text-foreground">About Succession</Text>
            <Text className="text-lg text-muted">Backed by LP Venture Group</Text>
          </View>

          {/* Mission */}
          <View className="gap-3 bg-surface rounded-lg p-6">
            <Text className="text-2xl font-semibold text-foreground">Our Mission</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Succession empowers business owners to capture, document, and share their expertise. We transform years of business knowledge into actionable handover documents that enable smooth transitions, facilitate buyer readiness, and ensure business continuity.
            </Text>
          </View>

          {/* LP Venture Group Partnership */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Backed by LP Venture Group</Text>
            <View className="bg-surface rounded-lg p-6 gap-4">
              <Text className="text-base text-foreground leading-relaxed">
                Succession is a venture of <Text className="font-semibold">LP Venture Group</Text>, a leading venture capital and business development firm focused on innovative solutions for business owners.
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                With LP Venture Group's support and expertise, Succession brings together:
              </Text>
              <View className="ml-4 gap-2">
                <View className="gap-1">
                  <Text className="text-base font-semibold text-foreground">Industry Expertise</Text>
                  <Text className="text-sm text-muted">Deep understanding of business succession, M&A, and business continuity</Text>
                </View>
                <View className="gap-1">
                  <Text className="text-base font-semibold text-foreground">Technology Innovation</Text>
                  <Text className="text-sm text-muted">Cutting-edge AI and audio processing technology</Text>
                </View>
                <View className="gap-1">
                  <Text className="text-base font-semibold text-foreground">Market Access</Text>
                  <Text className="text-sm text-muted">Connections with business owners, advisors, and investors</Text>
                </View>
                <View className="gap-1">
                  <Text className="text-base font-semibold text-foreground">Operational Support</Text>
                  <Text className="text-sm text-muted">Experienced team to scale and grow the platform</Text>
                </View>
              </View>
              <Link href="https://lpventuregroup.com" target="_blank">
                <Pressable className="bg-primary px-6 py-3 rounded-lg active:opacity-80 mt-4">
                  <Text className="text-background font-semibold text-center">Learn More About LP Venture Group</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          {/* Why Choose Succession */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Why Choose Succession?</Text>
            <View className="gap-3">
              <View className="bg-surface rounded-lg p-4 gap-2">
                <Text className="text-lg font-semibold text-foreground">🎯 Purpose-Built</Text>
                <Text className="text-sm text-foreground">
                  Designed specifically for business succession and handover documentation
                </Text>
              </View>
              <View className="bg-surface rounded-lg p-4 gap-2">
                <Text className="text-lg font-semibold text-foreground">🤖 AI-Powered</Text>
                <Text className="text-sm text-foreground">
                  Advanced AI transcription and document generation technology
                </Text>
              </View>
              <View className="bg-surface rounded-lg p-4 gap-2">
                <Text className="text-lg font-semibold text-foreground">🔒 Secure & Compliant</Text>
                <Text className="text-sm text-foreground">
                  Enterprise-grade security with SOC 2 compliance standards
                </Text>
              </View>
              <View className="bg-surface rounded-lg p-4 gap-2">
                <Text className="text-lg font-semibold text-foreground">⚡ Fast & Easy</Text>
                <Text className="text-sm text-foreground">
                  Complete handover document in minutes, not weeks
                </Text>
              </View>
              <View className="bg-surface rounded-lg p-4 gap-2">
                <Text className="text-lg font-semibold text-foreground">👥 Expert-Backed</Text>
                <Text className="text-sm text-foreground">
                  Built by a team with deep business succession expertise
                </Text>
              </View>
            </View>
          </View>

          {/* Team & Advisors */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Team & Advisors</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Succession is led by experienced entrepreneurs and business advisors with decades of combined experience in:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Business succession and M&A</Text>
              <Text className="text-base text-foreground">• Enterprise software development</Text>
              <Text className="text-base text-foreground">• AI and machine learning</Text>
              <Text className="text-base text-foreground">• Business consulting and advisory</Text>
              <Text className="text-base text-foreground">• Venture capital and investment</Text>
            </View>
          </View>

          {/* Contact */}
          <View className="gap-3 bg-surface rounded-lg p-6">
            <Text className="text-2xl font-semibold text-foreground">Get in Touch</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Have questions about Succession or want to learn more about our partnership with LP Venture Group?
            </Text>
            <View className="gap-2">
              <Link href="mailto:hello@successionio.com">
                <Pressable className="bg-primary px-6 py-3 rounded-lg active:opacity-80">
                  <Text className="text-background font-semibold text-center">Contact Us</Text>
                </Pressable>
              </Link>
              <Link href="https://lpventuregroup.com" target="_blank">
                <Pressable className="border border-primary px-6 py-3 rounded-lg active:opacity-80">
                  <Text className="text-primary font-semibold text-center">Visit LP Venture Group</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          {/* Footer */}
          <View className="py-4 border-t border-border">
            <Text className="text-sm text-muted">
              © 2026 Succession Inc. A venture of LP Venture Group. All rights reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
