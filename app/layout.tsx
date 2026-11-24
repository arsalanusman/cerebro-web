import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { buildMetadata } from "@/lib/seo";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = buildMetadata({
  title: "Cerebro dNano",
  description:
    "Enterprise marketing data integration, analytics and reporting platform for Meta Ads, Google Ads and TikTok Ads.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <SmoothScrollProvider>
          <OrganizationJsonLd />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ConsentBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
