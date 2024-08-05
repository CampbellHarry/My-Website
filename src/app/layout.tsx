import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Campbell",
  description: "Harry Campbell is a software developer based in the UK. He has 3 years of experience working in web development and security engineering.",
  keywords: ["Harry Campbell", "Harry", "Campbell", "livepool dev", "coder", "liverpool", "website developer", "best developer st helens", "website engineer", "st helens dev", "manchester developer", "web dev manchester", "full stack", "Hdev Group", "Hdev", "Group", "Software Developer", "Web Developer", "Security Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Database Developer", "UK", "England", "United Kingdom", "Europe", "Europe", "Web Development", "Security Engineering"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}
