import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Matthew Jacob | Full Stack Engineer",

  description:
    "Portfolio of Matthew Jacob Insigne. Software engineer building web apps end to end, from database to UI.",

  keywords: [
    "Matthew Jacob Insigne",
    "Full Stack Engineer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "Portfolio",
  ],

  authors: [{ name: "Matthew Jacob Insigne" }],

  openGraph: {
    title: "Matthew Jacob | Full Stack Engineer",
    description:
      "Software engineer building web apps end to end, from database to UI.",
    url: "https://matthewisntdev.vercel.app/",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-ink antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="md:pl-[220px]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
