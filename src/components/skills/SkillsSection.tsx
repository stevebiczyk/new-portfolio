"use client";

import { skills } from "@/data/contents";
import Image from "next/image";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 section-wrapper">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-slate-400">
            Here are some of the technologies I&apos;ve been working with.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.id}
              className="group rounded-2xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm transition hover:border-emerald-500/50 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <h3 className="mb-6 text-center text-xl font-semibold text-slate-200 group-hover:text-emerald-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 rounded-lg border border-transparent p-3 transition hover:border-slate-800 hover:bg-slate-800/50"
                  >
                    <div className="relative h-10 w-10 overflow-hidden rounded md:h-12 md:w-12">
                      {/* Using standard img for external URLs to avoid domain config overhead for now */}
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
