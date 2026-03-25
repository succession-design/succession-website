'use client';

import { ScreenContainer } from '@/components/screen-container';
import { Text, View, ScrollView } from 'react-native';

export default function PrivacyPage() {
  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-6">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-4xl font-bold text-foreground">Privacy Policy</Text>
            <Text className="text-base text-muted">Last Updated: March 25, 2026</Text>
          </View>

          {/* Introduction */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Introduction</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Succession ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </Text>
          </View>

          {/* Information We Collect */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">1. Information We Collect</Text>
            
            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Personal Information</Text>
              <Text className="text-base text-foreground leading-relaxed">
                We collect information you voluntarily provide, including:
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Name and email address</Text>
                <Text className="text-base text-foreground">• Business information and industry</Text>
                <Text className="text-base text-foreground">• Audio recordings of interviews</Text>
                <Text className="text-base text-foreground">• Payment information (processed by Stripe)</Text>
                <Text className="text-base text-foreground">• Account preferences and settings</Text>
              </View>
            </View>

            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Automatically Collected Information</Text>
              <Text className="text-base text-foreground leading-relaxed">
                When you use our services, we automatically collect:
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Device information (type, OS, browser)</Text>
                <Text className="text-base text-foreground">• IP address and location data</Text>
                <Text className="text-base text-foreground">• Usage data and analytics</Text>
                <Text className="text-base text-foreground">• Cookies and similar technologies</Text>
              </View>
            </View>
          </View>

          {/* How We Use Information */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">2. How We Use Your Information</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We use your information to:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Provide and improve our services</Text>
              <Text className="text-base text-foreground">• Process payments and subscriptions</Text>
              <Text className="text-base text-foreground">• Send service updates and notifications</Text>
              <Text className="text-base text-foreground">• Respond to your inquiries and support requests</Text>
              <Text className="text-base text-foreground">• Analyze usage patterns and improve user experience</Text>
              <Text className="text-base text-foreground">• Comply with legal obligations</Text>
              <Text className="text-base text-foreground">• Prevent fraud and ensure security</Text>
            </View>
          </View>

          {/* Data Protection */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">3. Data Protection & Security</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We implement comprehensive security measures to protect your information:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• HTTPS/TLS encryption for all data in transit</Text>
              <Text className="text-base text-foreground">• AES-256 encryption for data at rest</Text>
              <Text className="text-base text-foreground">• Secure authentication and session management</Text>
              <Text className="text-base text-foreground">• Regular security audits and penetration testing</Text>
              <Text className="text-base text-foreground">• Compliance with SOC 2 Type II standards</Text>
            </View>
          </View>

          {/* Data Sharing */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">4. Data Sharing & Third Parties</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We only share your information with trusted third parties:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Stripe (payment processing)</Text>
              <Text className="text-base text-foreground">• OpenAI (audio transcription and AI processing)</Text>
              <Text className="text-base text-foreground">• AWS (cloud infrastructure)</Text>
              <Text className="text-base text-foreground">• Law enforcement (when legally required)</Text>
            </View>
            <Text className="text-base text-foreground leading-relaxed mt-2">
              We do not sell your personal information to third parties.
            </Text>
          </View>

          {/* User Rights */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">5. Your Rights</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You have the right to:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Access your personal data</Text>
              <Text className="text-base text-foreground">• Correct inaccurate information</Text>
              <Text className="text-base text-foreground">• Request deletion of your data</Text>
              <Text className="text-base text-foreground">• Export your data in portable format</Text>
              <Text className="text-base text-foreground">• Opt-out of marketing communications</Text>
            </View>
          </View>

          {/* Data Retention */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">6. Data Retention</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We retain your information for as long as your account is active. Upon account deletion, we securely delete your data within 30 days, except where retention is required by law.
            </Text>
          </View>

          {/* GDPR & CCPA */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">7. GDPR & CCPA Compliance</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We comply with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). Residents of the EU and California have additional rights regarding their personal data.
            </Text>
          </View>

          {/* Contact */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">8. Contact Us</Text>
            <Text className="text-base text-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground font-semibold">Email: privacy@successionio.com</Text>
              <Text className="text-base text-foreground font-semibold">Address: Succession Inc., San Francisco, CA</Text>
            </View>
          </View>

          {/* Footer */}
          <View className="py-4 border-t border-border">
            <Text className="text-sm text-muted">
              This Privacy Policy is effective as of March 25, 2026 and may be updated periodically. We will notify you of any material changes.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
