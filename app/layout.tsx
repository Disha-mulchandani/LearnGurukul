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
  title: "LearnAtHome | Online One-to-One Tutoring",

  description:
    "Live one-to-one online tutoring for students worldwide.",

  keywords: [
    "Tutor at home",
    "Online classes",
    "online tuition",
    "online tutoring",
    "home tuition",
    "private tutor",
    "online learning",
    "virtual classes",
    "Indian teachers",
    "Indian tutors",
    "worldwide learners",
    "international students",
    "English classes",
    "coding classes",
    "creative writing classes",
    "science tuition",
    "AP Computer Science",
    "computer science tutor",
    "kids online classes",
    "student learning platform",
    "personalized learning",
    "one to one tutoring",
    "online education",
    "e learning",
    "study from home",
    "best online tuition",
    "live online classes",
    "online coaching",
    "academic tutoring",
    "global learning platform",
    "teacher for students",
    "online tutor India",
    "affordable online tuition",
    "interactive learning",
    "learning academy",
    "education platform",
    "school tuition",
    "online classes for kids",
    "online tuition for students",
    "best tutors online",
  ],

  verification: {
    google: "KrQ2D3GxzuRSRjWQrx-lIswKXGged1rcoDFyIk2oYNE",
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
      <body className="min-h-full flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}