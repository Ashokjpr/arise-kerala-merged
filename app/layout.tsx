import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AOSProvider from "@/components/shared/AOSProvider";
import TopSlider from "@/components/shared/TopSalider";
import ScrollToTop from "@/components/shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Website Title",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>

          {/* FULL WIDTH TOP */}
          <TopSlider />
          <Navbar />

          {/* CONTENT AREA */}
          <div className="relative flex flex-col min-h-screen">

            {/* LEFT BORDER */}
            <div
              className="
                absolute left-0 top-0 h-full
                w-[8px] sm:w-[12px] lg:w-[20px]
                bg-[url('/images/side-border.png')]
                bg-repeat-y bg-contain z-30
              "
            ></div>

            {/* RIGHT BORDER */}
            <div
              className="
                absolute right-0 top-0 h-full 
                w-[8px] sm:w-[12px] lg:w-[20px]
                bg-[url('/images/side-border.png')]
                bg-repeat-y bg-contain z-30
                rotate-180 
              "
            ></div>

            {/* MAIN CONTENT WITH PADDING */}
            <main className="flex-1 ">
              {children}
            </main>

          </div>

          {/* FULL WIDTH FOOTER */}
          <ScrollToTop />
          <Footer />

        </AOSProvider>
      </body>
    </html>
  );
}
