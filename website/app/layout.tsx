import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIAMEDIA",
  description: "Viamedia — Digital Studio & Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
