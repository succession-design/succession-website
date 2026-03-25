'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { View, Text, Pressable } from 'react-native';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    // Enable analytics and tracking scripts
    if (typeof window !== 'undefined') {
      window.gtag?.('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    // Disable analytics and tracking scripts
    if (typeof window !== 'undefined') {
      window.gtag?.('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <View className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 shadow-lg z-50">
      <View className="max-w-6xl mx-auto flex-row justify-between items-center gap-4">
        {/* Message */}
        <View className="flex-1 gap-2">
          <Text className="text-sm font-semibold text-foreground">
            Cookie Consent
          </Text>
          <Text className="text-xs text-muted">
            We use cookies to enhance your experience, analyze traffic, and for marketing purposes. By clicking "Accept", you consent to our use of cookies. You can learn more in our{' '}
            <Link href="/privacy">
              <Text className="text-primary underline">Privacy Policy</Text>
            </Link>
            .
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex-row gap-3">
          <Pressable
            onPress={handleReject}
            className="px-4 py-2 rounded-lg border border-border active:opacity-80"
          >
            <Text className="text-sm font-medium text-foreground">Reject</Text>
          </Pressable>
          
          <Pressable
            onPress={handleAccept}
            className="px-4 py-2 rounded-lg bg-primary active:opacity-80"
          >
            <Text className="text-sm font-medium text-background">Accept</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
