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
  title: {
    default: "Best FMGE Coaching Centre in Jaipur, India | Arise Medical Academy",
    template: "Are You Afraid of How to Deal With FMGE? Join Arise Medical Academy Soon and Get Ready With The Best FMGE Coaching Centre in Kerala, India.",
  },

  description: "Arise Medical Academy Jaipur",

  keywords: [
    "blog",
    "best medical academy in jaipur",
    "Arise Medical Academy Jaipur",
  ],

  alternates: {
    canonical: "/blog",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Arise Medical Academy Jaipur",
    url: "/",
    images: [
      {
        url: "/images/blog-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Arise Medical Academy Jaipur Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/blog-image.jpeg"],
  },

  metadataBase: new URL("http://localhost:3000/"),
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
                w-[8px] sm:w-[15px] lg:w-[25px]
                bg-[url('/images/side-border2.png')]
                bg-repeat-y bg-contain z-30
              "
            ></div>

            {/* RIGHT BORDER */}
            <div
              className="
                absolute right-0 top-0 h-full 
                w-[8px] sm:w-[15px] lg:w-[25px]
                bg-[url('/images/side-border2.png')]
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
