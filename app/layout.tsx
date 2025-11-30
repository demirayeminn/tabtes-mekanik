import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tabtesmekanik.com'),
  title: {
    default: 'Çerkezköy Tesisatçı | 7/24 Acil Servis | Tabtes Mekanik',
    template: '%s | Tabtes Mekanik'
  },
  description: 'Çerkezköy ve Trakya bölgesinin güvenilir tesisatçısı. Kombi montajı, su tesisatı, kaçak tespiti, petek temizleme. 15+ yıl deneyim, garantili işçilik. 7/24 acil servis.',
  keywords: ['çerkezköy tesisatçı', 'çorlu tesisatçı', 'tekirdağ tesisat', 'kombi servisi', 'su kaçağı', 'petek temizleme', 'acil tesisatçı', 'tesisat ustası'],
  authors: [{ name: 'Tabtes Mekanik' }],
  creator: 'Tabtes Mekanik',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://tabtesmekanik.com',
    siteName: 'Tabtes Mekanik Tesisat',
    title: 'Çerkezköy Tesisatçı | 7/24 Acil Servis | Tabtes Mekanik',
    description: 'Çerkezköy ve Trakya bölgesinin güvenilir tesisatçısı. 15+ yıl deneyim, garantili işçilik.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Tabtes Mekanik Tesisat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çerkezköy Tesisatçı | Tabtes Mekanik',
    description: 'Çerkezköy ve Trakya bölgesinin güvenilir tesisatçısı.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} font-sans`}>
      <body className="antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
