import type { Metadata } from "next";
import { Work_Sans, Bebas_Neue, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { OrganizationSchema } from "@/components/StructuredData";
import "lenis/dist/lenis.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saltbox Interactive | Preserving History Through Interactive Experiences",
    template: "%s | Saltbox Interactive"
  },
  description: "Saltbox Interactive creates immersive virtual environments where history comes alive. We preserve the past through interactive digital experiences, transforming historical locations into explorable virtual worlds.",
  keywords: ["historical preservation", "virtual history", "interactive experiences", "digital heritage", "historical reconstruction", "Old D'Hanis", "virtual archaeology", "Michael Salton", "game developer", "historical games"],
  authors: [{ name: "Michael Salton" }, { name: "Saltbox Interactive" }],
  creator: "Michael Salton",
  publisher: "Saltbox Interactive",
  metadataBase: new URL('https://saltboxinteractive.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saltboxinteractive.com",
    siteName: "Saltbox Interactive",
    title: "Saltbox Interactive | Preserving History Through Interactive Experiences",
    description: "Create immersive virtual environments where history comes alive. Experience the past through interactive digital preservation.",
    images: [
      {
        url: "/images/dod-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Saltbox Interactive - Historical Preservation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltbox Interactive | Preserving History Through Interactive Experiences",
    description: "Create immersive virtual environments where history comes alive.",
    images: ["/images/dod-cover.jpg"]
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
        <OrganizationSchema />
      </head>
      <body
        className={`${workSans.variable} ${bebas.variable} ${archivoBlack.variable} antialiased relative`}
      >
        <SmoothScroll>
          <Header />
          <Footer />
          <main className="relative" style={{ zIndex: 100, minHeight: '100vh' }}>
            <div className="bg-black">
              {children}
            </div>
          </main>
          <div style={{ height: '400px', position: 'relative', zIndex: 1 }}></div>
        </SmoothScroll>
      </body>
    </html>
  );
}
