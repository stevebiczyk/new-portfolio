// src/components/navbar/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "@/data/contents";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-slate-50">
            <DiCssdeck size="2rem" />
            <span className="text-base font-semibold tracking-tight">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition hover:text-emerald-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub button */}
        <div className="hidden md:flex">
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-emerald-400 px-4 py-1.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            GitHub Profile
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-200 outline-none ring-0 transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-sm font-medium text-slate-200 transition hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-2 inline-flex w-max items-center rounded-full border border-emerald-400 px-4 py-1.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
