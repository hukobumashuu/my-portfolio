import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. The Title seen in the browser tab
  title: "Matthew Jacob | Full Stack Engineer",

  description:
    "Portfolio of Matthew Jacob Insigne. Build software that solves real problems. Combining strong backend logic with modern design to create applications that are smart, scalable, and genuinely useful.",

  keywords: [
    "Matthew Jacob Insigne",
    "Full Stack Engineer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "Portfolio",
  ],

  // 4. Authorship
  authors: [{ name: "Matthew Jacob Insigne" }],

  // 6. OpenGraph (How it looks when shared on LinkedIn/Discord/Twitter)
  openGraph: {
    title: "Matthew Jacob | Full Stack Engineer",
    description:
      "Combining strong backend logic with modern design to create applications that are smart, scalable, and genuinely useful.",
    url: "https://matthewjacob.dev", // The domain we discussed
    siteName: "Matthew Jacob Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Added 'scroll-smooth' for nice anchor scrolling */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
