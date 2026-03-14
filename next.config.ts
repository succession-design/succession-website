import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['d2xsxph8kpxj0f.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2xsxph8kpxj0f.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
