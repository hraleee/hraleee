import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hratech - Soluzioni Digitali Innovative",
  description: "Creiamo soluzioni digitali innovative per far crescere la tua azienda. Siti web, applicazioni e strategie digitali su misura.",
  keywords: "siti web, e-commerce, app mobile, consulenza digitale, SEO, marketing digitale, sviluppo web",
  authors: [{ name: "Hratech" }],
  creator: "Hratech",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Hratech - Soluzioni Digitali Innovative",
    description: "Creiamo soluzioni digitali innovative per far crescere la tua azienda",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
