import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppLink } from "./components/WhatsAppLink";

export const metadata: Metadata = {
  metadataBase: new URL("https://jarid.sa"),
  title: {
    default: "جريد | قوالب سيليكون مخصصة",
    template: "%s | جريد",
  },
  description:
    "جريد مصنع سعودي لقوالب السيليكون المخصصة للشوكولاتة والتيراميسو.",
  keywords: [
    "قوالب سيليكون",
    "قوالب شوكولاتة",
    "قوالب تيراميسو",
    "تصنيع سعودي",
    "قوالب مخصصة",
  ],
  icons: {
    icon: "/brand/jarid-icon-navy.svg",
    shortcut: "/brand/jarid-icon-navy.svg",
  },
  openGraph: {
    title: "جريد | فكرتك، قالبها جريد",
    description:
      "قوالب سيليكون مخصصة للعلامات التجارية والمصانع في جميع أنحاء المملكة.",
    locale: "ar_SA",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "جريد - قوالب سيليكون مخصصة" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "جريد | فكرتك، قالبها جريد",
    description: "تصميم وتصنيع قوالب سيليكون مخصصة للأعمال.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#112736",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <WhatsAppLink className="floating-whatsapp" aria-label="تواصل مع جريد عبر واتساب">
          <span className="floating-pulse" aria-hidden="true" />
          واتساب
          <i aria-hidden="true">↗</i>
        </WhatsAppLink>
      </body>
    </html>
  );
}
