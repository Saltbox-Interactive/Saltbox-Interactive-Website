import type { Metadata } from "next";
import { Work_Sans, Bebas_Neue, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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
  title: "Saltbox Interactive",
  description: "Saltbox Interactive is an independent game studio creating immersive gaming experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
