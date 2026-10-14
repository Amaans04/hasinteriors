import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import Credits from "@/components/Credits";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import FloatingActions from "@/components/FloatingActions";
import { SITE_URL, businessJsonLd } from "@/lib/site";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Interior Designers & Builders in Bangalore | HAS Interiors",
    template: "%s | HAS Interiors",
  },
  description:
    "Interior designers & building contractors on Bannerghatta Road, Bangalore. Home interiors, modular kitchens and construction. 50+ years of craft. Free quote.",
  applicationName: "HAS Interiors",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "HAS Interiors",
    images: [{ url: "/media/hero-poster.jpg", width: 800, height: 450 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Lets CSS hide .reveal items before first paint, so they fade in instead of flashing */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={businessJsonLd()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Credits />
        <FloatingActions />
        <RevealObserver />
      </body>
    </html>
  );
}
