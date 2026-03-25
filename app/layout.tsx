import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuccessionIO — Deal Readiness Intelligence for SMB Transactions",
  description: "The structured data and diligence layer powering modern SMB transactions. Evaluate, price, and close deals with confidence using the Deal Readiness Score.",
  keywords: "business succession, deal readiness, SMB transactions, business acquisition, due diligence, deal intelligence",
  openGraph: {
    title: "SuccessionIO — Deal Readiness Intelligence",
    description: "Make every business acquisition predictable. The structured data and diligence layer for modern SMB transactions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
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
