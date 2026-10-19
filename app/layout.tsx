import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// On Vercel this is the production domain; locally it falls back to localhost.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "devcypher | Web & Automation",
  description: "devcypher builds websites, online stores and automations for small businesses. Based in Morocco, working with clients remotely.",
  keywords: ["Web Development", "Website Creation", "Landing Page", "E-commerce", "Full Stack", "Morocco", "Freelance Developer", "Automation", "devcypher"],
  authors: [{ name: "devcypher" }],
  openGraph: {
    title: "devcypher | Web & Automation",
    description: "Websites, online stores and automations for small businesses.",
    url: "/",
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
      <body
        className={`${inter.variable} antialiased bg-[#0b1120] text-gray-300 font-sans selection:bg-blue-500/30 selection:text-blue-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
