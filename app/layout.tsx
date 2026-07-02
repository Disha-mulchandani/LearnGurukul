import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
    default: "LearnGurukul | 1:1 Online Tutoring for USA, UK, Canada, Australia & Global Students",
    template: "%s | LearnGurukul",
  },

  applicationName: "LearnGurukul",

  description:
    "LearnGurukul offers expert-led 1:1 online tutoring for students worldwide including USA, UK, Canada, Australia, India, and Africa. We provide online English classes, creative writing, math tutoring, science classes, coding lessons, SAT preparation, and homework help for Grades 1–12.",

  keywords: [
    // 🌍 Global tutoring
    "online tutoring",
    "online tutoring USA",
    "online tutoring UK",
    "online tutoring Canada",
    "online tutoring Australia",
    "online tutoring India",
    "online tutoring Africa",

    // 📚 English & Writing
    "online English class",
    "English tutor online",
    "online creative writing class",
    "creative writing classes",
    "essay writing help",
    "grammar lessons online",

    // 📊 Math & Science
    "math tutor online",
    "online math classes",
    "science tutor online",
    "physics tutoring online",
    "chemistry tutoring online",

    // 🎓 Grades / School levels
    "grade 1 tutoring",
    "grade 2 tutoring",
    "grade 3 tutoring",
    "grade 4 tutoring",
    "grade 5 tutoring",
    "grade 6 tutoring",
    "grade 7 tutoring",
    "grade 8 tutoring",
    "grade 9 tutoring",
    "elementary tutoring",
    "primary school tutoring",

    // 🧠 Exams
    "SAT tutor online",
    "homework help online",

    // 💻 Coding
    "coding classes online",
    "Python for kids",

    // Brand
    "LearnGurukul"
  ],

  openGraph: {
    title:
      "LearnGurukul | Online Tutoring for Math, English, SAT, Science & Coding",

    description:
      "1:1 expert online tutoring for students across USA, UK, Canada, Australia & worldwide.",

    siteName: "LearnGurukul",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-PNGS9C2HXH`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PNGS9C2HXH');
          `}
        </Script>
      </body>
    </html>
  );
}