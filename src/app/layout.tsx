// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Your Name – Web Developer (React, Next.js, Python)",
  description:
    "Web and software developer building fast, clean web applications with React, Next.js, and Python. Available for full-time roles and freelance work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pb-16 pt-24 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
