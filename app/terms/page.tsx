'use client';

import { ScreenContainer } from '@/components/screen-container';
import { Text, View, ScrollView } from 'react-native';

export default function TermsPage() {
  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-6">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-4xl font-bold text-foreground">Terms of Service</Text>
            <Text className="text-base text-muted">Last Updated: March 25, 2026</Text>
          </View>

          {/* Introduction */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">Introduction</Text>
            <Text className="text-base text-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of Succession's website, mobile application, and services. By accessing or using our services, you agree to be bound by these Terms.
            </Text>
          </View>

          {/* User Eligibility */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">1. User Eligibility</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You must be at least 18 years old and have the legal authority to enter into these Terms. By using our services, you represent and warrant that you meet these requirements.
            </Text>
          </View>

          {/* Account Responsibility */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">2. Account Responsibility</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Provide accurate and complete information</Text>
              <Text className="text-base text-foreground">• Maintain account security</Text>
              <Text className="text-base text-foreground">• Notify us immediately of unauthorized access</Text>
              <Text className="text-base text-foreground">• Accept responsibility for all account activity</Text>
            </View>
          </View>

          {/* Acceptable Use */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">3. Acceptable Use Policy</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You agree not to use our services for:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground">• Illegal or unauthorized purposes</Text>
              <Text className="text-base text-foreground">• Harassment, abuse, or threatening behavior</Text>
              <Text className="text-base text-foreground">• Transmitting malware or harmful code</Text>
              <Text className="text-base text-foreground">• Violating intellectual property rights</Text>
              <Text className="text-base text-foreground">• Circumventing security measures</Text>
              <Text className="text-base text-foreground">• Spamming or phishing</Text>
            </View>
          </View>

          {/* Intellectual Property */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">4. Intellectual Property Rights</Text>
            <Text className="text-base text-foreground leading-relaxed">
              All content, features, and functionality of our services are owned by Succession, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
            </Text>
            <Text className="text-base text-foreground leading-relaxed mt-2">
              You retain ownership of content you create (interviews, documents). By using our services, you grant Succession a license to use, reproduce, and distribute your content as necessary to provide the services.
            </Text>
          </View>

          {/* Payment Terms */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">5. Payment & Subscription Terms</Text>
            <View className="gap-2">
              <Text className="text-base text-foreground leading-relaxed">
                <Text className="font-semibold">Billing:</Text> Subscription fees are billed according to your selected plan. You authorize us to charge your payment method.
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                <Text className="font-semibold">Cancellation:</Text> You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period.
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                <Text className="font-semibold">Refunds:</Text> Refunds are provided according to our refund policy. No refunds for partial months.
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                <Text className="font-semibold">Price Changes:</Text> We may change prices with 30 days' notice. Continued use constitutes acceptance.
              </Text>
            </View>
          </View>

          {/* Limitation of Liability */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">6. Limitation of Liability</Text>
            <Text className="text-base text-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUCCESSION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </Text>
          </View>

          {/* Disclaimer */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">7. Disclaimer of Warranties</Text>
            <Text className="text-base text-foreground leading-relaxed">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </Text>
          </View>

          {/* Indemnification */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">8. Indemnification</Text>
            <Text className="text-base text-foreground leading-relaxed">
              You agree to indemnify and hold harmless Succession from any claims, damages, or costs arising from your use of our services or violation of these Terms.
            </Text>
          </View>

          {/* Termination */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">9. Termination</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We may terminate or suspend your account immediately for violation of these Terms or for any reason at our discretion. Upon termination, your right to use our services ceases immediately.
            </Text>
          </View>

          {/* Dispute Resolution */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">10. Dispute Resolution</Text>
            <Text className="text-base text-foreground leading-relaxed">
              Any disputes shall be resolved through binding arbitration in San Francisco, California, governed by California law, except for intellectual property claims which may be brought in court.
            </Text>
          </View>

          {/* Modifications */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">11. Modifications to Terms</Text>
            <Text className="text-base text-foreground leading-relaxed">
              We may modify these Terms at any time. Continued use of our services after modifications constitutes acceptance of the updated Terms.
            </Text>
          </View>

          {/* Contact */}
          <View className="gap-3">
            <Text className="text-2xl font-semibold text-foreground">12. Contact Us</Text>
            <Text className="text-base text-foreground leading-relaxed">
              For questions about these Terms, please contact us at:
            </Text>
            <View className="ml-4 gap-1">
              <Text className="text-base text-foreground font-semibold">Email: legal@successionio.com</Text>
              <Text className="text-base text-foreground font-semibold">Address: Succession Inc., San Francisco, CA</Text>
            </View>
          </View>

          {/* Footer */}
          <View className="py-4 border-t border-border">
            <Text className="text-sm text-muted">
              These Terms of Service are effective as of March 25, 2026. We reserve the right to update these terms at any time.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
