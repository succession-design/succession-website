'use client';

import { ScreenContainer } from '@/components/screen-container';
import { Text, View, ScrollView } from 'react-native';

export default function CookiePolicyPage() {
  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-6">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-4xl font-bold text-foreground">Cookie Policy</Text>
            <Text className="text-base text-muted">Last Updated: March 25, 2026</Text>
          </View>

          {/* Introduction */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">What Are Cookies?</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They allow websites to remember information about your visit, such as your preferences and login information.
            </Text>
          </View>

          {/* Why We Use Cookies */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Why We Use Cookies</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We use cookies to:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Remember your login information and preferences</Text>
              <Text className="text-base text-foreground">• Understand how you use our website</Text>
              <Text className="text-base text-foreground">• Improve your user experience</Text>
              <Text className="text-base text-foreground">• Analyze website traffic and performance</Text>
              <Text className="text-base text-foreground">• Provide personalized content and recommendations</Text>
              <Text className="text-base text-foreground">• Detect and prevent fraud</Text>
            </View>
          </View>

          {/* Types of Cookies */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Types of Cookies We Use</Text>
            
            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Essential Cookies</Text>
              <Text className="text-base text-foreground leading-relaxed">
                These cookies are necessary for the website to function properly. They enable you to navigate the site and use its features. These cookies cannot be disabled without affecting site functionality.
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Session ID</Text>
                <Text className="text-base text-foreground">• Authentication tokens</Text>
                <Text className="text-base text-foreground">• CSRF protection tokens</Text>
              </View>
            </View>

            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Performance Cookies</Text>
              <Text className="text-base text-foreground leading-relaxed">
                These cookies help us understand how visitors use our website by collecting and reporting information anonymously. This helps us improve website performance and user experience.
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Google Analytics</Text>
                <Text className="text-base text-foreground">• Page load times</Text>
                <Text className="text-base text-foreground">• Error tracking</Text>
              </View>
            </View>

            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Functional Cookies</Text>
              <Text className="text-base text-foreground leading-relaxed">
                These cookies allow us to remember your choices and provide enhanced, more personalized features.
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Language preferences</Text>
                <Text className="text-base text-foreground">• Theme preferences</Text>
                <Text className="text-base text-foreground">• Saved preferences</Text>
              </View>
            </View>

            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Marketing Cookies</Text>
              <Text className="text-base text-foreground leading-relaxed">
                These cookies are used to track visitors across websites to display targeted advertising based on their interests.
              </Text>
              <View className="ml-4 gap-1">
                <Text className="text-base text-foreground">• Advertising pixels</Text>
                <Text className="text-base text-foreground">• Conversion tracking</Text>
                <Text className="text-base text-foreground">• Retargeting cookies</Text>
              </View>
            </View>
          </View>

          {/* Cookie Duration */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Cookie Duration</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Cookies may be either "session" cookies or "persistent" cookies:
            </Text>
            <View className="ml-4 gap-2">
              <View>
                <Text className="text-base text-foreground font-semibold">Session Cookies</Text>
                <Text className="text-base text-foreground">Deleted when you close your browser</Text>
              </View>
              <View>
                <Text className="text-base text-foreground font-semibold">Persistent Cookies</Text>
                <Text className="text-base text-foreground">Remain on your device for a set period (typically 1-2 years)</Text>
              </View>
            </View>
          </View>

          {/* Third-Party Cookies */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Third-Party Cookies</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We may allow third parties to place cookies on your device for analytics and marketing purposes:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Google Analytics - Website analytics</Text>
              <Text className="text-base text-foreground">• Stripe - Payment processing</Text>
              <Text className="text-base text-foreground">• Social media platforms - Social sharing</Text>
            </View>
          </View>

          {/* Managing Cookies */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Managing Your Cookies</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You can control and manage cookies in several ways:
            </Text>
            <View className="ml-4 gap-2">
              <View>
                <Text className="text-base text-foreground font-semibold">Browser Settings</Text>
                <Text className="text-base text-foreground">Most browsers allow you to refuse cookies or alert you when cookies are being sent.</Text>
              </View>
              <View>
                <Text className="text-base text-foreground font-semibold">Cookie Consent Banner</Text>
                <Text className="text-base text-foreground">Use our cookie consent banner to accept or reject non-essential cookies.</Text>
              </View>
              <View>
                <Text className="text-base text-foreground font-semibold">Opt-Out Tools</Text>
                <Text className="text-base text-foreground">Use opt-out tools provided by analytics and advertising companies.</Text>
              </View>
            </View>
          </View>

          {/* Privacy Impact */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Privacy Impact</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Disabling cookies may affect your ability to use certain features of our website. Essential cookies cannot be disabled as they are necessary for the site to function.
            </Text>
          </View>

          {/* Contact */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Questions?</Text>
            <Text className="text-base text-foreground leading-relaxed">
              If you have questions about our cookie policy, please contact us at:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground font-semibold">Email: privacy@successionio.com</Text>
            </View>
          </View>

          {/* Footer */}
          <View className="py-4 border-t border-border">
            <Text className="text-sm text-muted">
              This Cookie Policy is effective as of March 25, 2026 and may be updated periodically.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
