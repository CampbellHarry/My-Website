import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Campbell",
  description: "Harry Campbell is a UK-based software engineer specializing in security and full stack development, with 3+ years of experience. Founder of Hdev Group and skilled in various technologies, Harry is open to new opportunities.",
  keywords: ["Harry Campbell", "Harry", "Harry campbell", "developer harry", "swe harry", "software harry" ,"Campbell", "livepool dev", "coder", "liverpool", "website developer", "best developer st helens", "website engineer", "st helens dev", "manchester developer", "web dev manchester", "full stack", "Hdev Group", "Hdev", "Group", "Software Developer", "Web Developer", "Security Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Database Developer", "UK", "England", "United Kingdom", "Europe", "Europe", "Web Development", "Security Engineering", "security", "application developer", "webapp dev", "Near me", "Senior developer"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-zinc-900 scroll-smooth">{children}</body>
    </html>
  );
}
