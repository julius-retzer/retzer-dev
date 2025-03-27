import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Július Retzer - Senior Software Engineer",
  description: "Senior Software Engineer specializing in React, TypeScript, and Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
