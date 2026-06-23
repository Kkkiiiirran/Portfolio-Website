import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import PageLoader from "@/components/animations/PageLoader";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import { ThemeProvider } from "@/lib/theme-context";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiranpreet Kaur | Software Engineer & AI Enthusiast",
  description: "Software Engineering Intern at Cisco Systems specializing in AI/ML, backend development, and competitive programming.",
  keywords: ["Software Engineer", "AI/ML", "Full-Stack Developer", "Cisco", "Machine Learning", "Python", "TypeScript"],
  authors: [{ name: "Kiranpreet Kaur" }],
  openGraph: {
    title: "Kiranpreet Kaur | Software Engineer & AI Enthusiast",
    description: "Software Engineering Intern at Cisco Systems specializing in AI/ML, backend development, and competitive programming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <BackgroundEffects />
          <PageLoader />
          <CustomCursor />
          <SmoothScroll />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
