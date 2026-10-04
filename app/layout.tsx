import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL("https://aremcreative.com.tr"),
  title: {
    default: "Arem Creative — Sosyal Medya Ajansı | İstanbul & Kocaeli",
    template: "%s | Arem Creative",
  },
  description:
    "Arem Creative: İstanbul, İzmit ve Kocaeli'de sosyal medya yönetimi, reels & video içerik üretimi, çekim ve dijital reklam. Hedef kitlende yankı uyandıracak sonuç odaklı içerikler.",
  keywords: [
    "sosyal medya ajansı",
    "sosyal medya ajansı istanbul",
    "sosyal medya ajansı kocaeli",
    "sosyal medya ajansı izmit",
    "reels çekimi",
    "video içerik üretimi",
    "sosyal medya yönetimi",
    "dijital reklam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Arem Creative — Sosyal Medya Ajansı",
    description: "Be a Creative! İstanbul & Kocaeli: sosyal medya yönetimi, reels, çekim ve reklam.",
    url: "/",
    siteName: "Arem Creative",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arem Creative — Sosyal Medya Ajansı",
    description: "İstanbul & Kocaeli odaklı sosyal medya, reels ve video prodüksiyon.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-2026.jpg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
