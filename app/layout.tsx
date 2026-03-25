import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "SuccessionIO — Know What Your Business Is Worth",
  description: "AI-powered business knowledge capture and deal readiness scoring for owners preparing to sell. Built for the 4.5 million businesses transferring over the next decade.",
  keywords: "business succession, deal readiness, business sale preparation, M&A readiness, business broker tools",
  openGraph: {
    title: "SuccessionIO — Know What Your Business Is Worth",
    description: "Capture what makes your business run. Protect what it's worth.",
    type: "website",
    url: "https://successionio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
