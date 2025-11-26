// src/components/hero/HeroSection.tsx
"use client";

import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Bio } from "@/data/contents";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-900/70 hero-clip"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-sky-500/10" />

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:items-center md:px-8">
        {/* Left: text */}
        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium text-emerald-300">
            Web & software developer
          </p>

          <div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Hi, I&apos;m {Bio.name}.
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-slate-100 md:text-2xl">
              <span>I&apos;m a</span>
              <span className="text-emerald-400">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            {Bio.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Check resume
            </a>
          </div>

          {/* Quick facts (hire-signal for employers + clients) */}
          <dl className="mt-4 grid gap-4 text-xs text-slate-400 sm:grid-cols-3">
            <div>
              <dt className="font-medium text-slate-200">What I build</dt>
              <dd>Personal sites, blogs, small e-commerce</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Core stack</dt>
              <dd>React, Next.js, TypeScript, Python</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">How I work</dt>
              <dd>Design → build → deploy</dd>
            </div>
          </dl>
        </div>

        {/* Right: image */}
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-emerald-400 shadow-lg shadow-emerald-500/30 sm:h-64 sm:w-64 md:h-80 md:w-80">
            <Image
              src="/HeroImage.jpg"
              alt="Portrait"
              fill
              sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
