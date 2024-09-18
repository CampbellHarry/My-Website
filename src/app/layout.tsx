import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/main.css'
import React from "react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Campbell - Full Stack Developer & Security Engineer | Hdev Group Founder",
  description:
    "Harry Campbell is an experienced full stack developer and security engineer based in the UK, specializing in secure web application development and software engineering. As the founder of Hdev Group, Harry brings over 3 years of expertise in building scalable, high-performance digital solutions. Available for freelance projects, collaborations, and full-time opportunities globally.",
  keywords: [
    "Harry Campbell", 
    "Full Stack Developer UK", 
    "Security Engineer UK", 
    "Freelance Software Developer", 
    "Web Application Developer", 
    "Founder of Hdev Group", 
    "Senior Software Engineer", 
    "Secure Web Development", 
    "Cybersecurity Expert", 
    "Software Development Consultant", 
    "Liverpool Web Developer", 
    "Manchester Software Developer", 
    "UK-based Full Stack Developer", 
    "Experienced Developer for Hire", 
    "Web Development Expert UK", 
    "JavaScript Developer UK", 
    "React Developer", 
    "Node.js Developer", 
    "Frontend and Backend Developer", 
    "API Developer", 
    "Database Management", 
    "Software Security Specialist", 
    "Web Developer Near Me", 
    "Top Software Engineer UK", 
    "Best Developer St Helens", 
    "Freelance Developer Manchester", 
    "Full Stack Engineer Europe", 
    "Cybersecurity Engineer UK", 
    "Tech Consultant UK", 
    "Freelance Web Developer UK", 
    "Tech Innovator UK", 
    "Remote Software Engineer", 
    "Digital Solutions Architect", 
    "Startup Software Developer", 
    "Software Engineer for Hire", 
    "Security Engineer for Startups"
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 background flex items-center justify-center scroll-smooth">{children}</body>
    </html>
  );
}
