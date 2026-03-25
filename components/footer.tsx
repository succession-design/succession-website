'use client';

import Link from 'next/link';
import { View, Text } from 'react-native';

export function Footer() {
  return (
    <View className="bg-surface border-t border-border py-8 px-6">
      <View className="max-w-6xl mx-auto gap-6">
        {/* Main Footer Content */}
        <View className="gap-8">
          {/* Brand Section */}
          <View className="gap-2">
            <Text className="text-2xl font-bold text-foreground">Succession</Text>
            <Text className="text-sm text-muted max-w-xs">
              Transform your business knowledge into action. Capture, document, and share your expertise.
            </Text>
          </View>

          {/* Links Grid */}
          <View className="gap-6">
            {/* Product Links */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-foreground">Product</Text>
              <View className="gap-2">
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Home</Text>
                </Link>
                <Link href="/#features">
                  <Text className="text-sm text-muted hover:text-foreground">Features</Text>
                </Link>
                <Link href="/#pricing">
                  <Text className="text-sm text-muted hover:text-foreground">Pricing</Text>
                </Link>
              </View>
            </View>

            {/* Company Links */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-foreground">Company</Text>
              <View className="gap-2">
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">About</Text>
                </Link>
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Blog</Text>
                </Link>
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Contact</Text>
                </Link>
              </View>
            </View>

            {/* Legal Links */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-foreground">Legal</Text>
              <View className="gap-2">
                <Link href="/privacy">
                  <Text className="text-sm text-muted hover:text-foreground">Privacy Policy</Text>
                </Link>
                <Link href="/terms">
                  <Text className="text-sm text-muted hover:text-foreground">Terms of Service</Text>
                </Link>
                <Link href="/cookies">
                  <Text className="text-sm text-muted hover:text-foreground">Cookie Policy</Text>
                </Link>
              </View>
            </View>

            {/* Support Links */}
            <View className="gap-3">
              <Text className="text-sm font-semibold text-foreground">Support</Text>
              <View className="gap-2">
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Help Center</Text>
                </Link>
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Contact Support</Text>
                </Link>
                <Link href="/">
                  <Text className="text-sm text-muted hover:text-foreground">Status</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Section */}
        <View className="border-t border-border pt-6 gap-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-muted">
              © 2026 Succession Inc. All rights reserved.
            </Text>
            <View className="flex-row gap-4">
              <Link href="https://twitter.com">
                <Text className="text-sm text-muted hover:text-foreground">Twitter</Text>
              </Link>
              <Link href="https://linkedin.com">
                <Text className="text-sm text-muted hover:text-foreground">LinkedIn</Text>
              </Link>
              <Link href="https://github.com">
                <Text className="text-sm text-muted hover:text-foreground">GitHub</Text>
              </Link>
            </View>
          </View>
          <Text className="text-xs text-muted">
            Made with ❤️ in San Francisco
          </Text>
        </View>
      </View>
    </View>
  );
}
