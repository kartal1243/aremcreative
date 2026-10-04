import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Arem Creative — Sosyal Medya Ajansı",
  description:
    "Arem Creative: hedef kitlenizde yankı uyandıracak, etkileyici ve sonuç odaklı sosyal medya yönetimi, içerik üretimi ve video prodüksiyon.",
  openGraph: {
    title: "Arem Creative — Sosyal Medya Ajansı",
    description: "Be a Creative! Markanızın sesini yükseltiyoruz.",
    type: "website",
    locale: "tr_TR",
  },
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
