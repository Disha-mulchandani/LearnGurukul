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
  metadataBase: new URL("https://learngurukul.com"),

  title: {
    default: "LearnGurukul | 1:1 Online Tutoring for USA & Global Students",
    template: "%s | LearnGurukul",
  },

  applicationName: "LearnGurukul",

  description:
    "LearnGurukul offers expert-led 1:1 online tutoring for students in the USA and worldwide. Personalized classes for Math, SAT, English, Reading, Creative Writing, Science, Coding, and homework help for Grades 1–12.",

  keywords: [
    "online tutoring",
    "1:1 online tutoring",
    "tutor at home",
    "online tutor",
    "online classes",
    "math tutor online",
    "english tutor online",
    "creative writing classes",
    "SAT math tutor",
    "coding classes online",
    "science tutoring",
    "homework help online",
    "reading tutor online",
    "USA online tutoring",
    "global online classes",
    "LearnGurukul",
  ],

  openGraph: {
    title:
      "LearnGurukul | Online Tutoring for Math, English, SAT & Coding",
    description:
      "Expert 1:1 online tutoring for students worldwide.",
    siteName: "LearnGurukul",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}