import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "devcypher | Web & Automation",
  description: "devcypher builds websites, online stores and automations for small businesses. Based in Morocco, working with clients remotely.",
  keywords: ["Web Development", "Website Creation", "Landing Page", "E-commerce", "Full Stack", "Morocco", "Freelance Developer", "Automation", "devcypher"],
  authors: [{ name: "devcypher" }],
  openGraph: {
    title: "devcypher | Web & Automation",
    description: "Websites, online stores and automations for small businesses.",
    siteName: "devcypher",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-[#0b1120] text-gray-300 font-sans selection:bg-blue-500/30 selection:text-blue-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
