import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { seoKeywords, siteUrl } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Abdelali Nour — Moroccan Close-Up Magician & Creator",
    template: "%s — Abdelali Nour",
  },
  description:
    "Abdelali Nour: Moroccan close-up magician, AliMagicShop creator, and professional performer — Rabat, Témara, and international stages. Original effects for magicians.",
  keywords: [...seoKeywords],
  authors: [{ name: "Abdelali Nour" }],
  creator: "Abdelali Nour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdelali Nour",
    title: "Abdelali Nour — Close-Up Magician & Magic Creator",
    description:
      "Close-up magic, original inventions, and premium performance for private and corporate events in Morocco and abroad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelali Nour — Magician & Creator",
    description:
      "Moroccan close-up specialist. Original creations. Television, festivals, and exclusive events.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
