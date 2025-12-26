"use client";

import { experiences } from "@/data/contents";
import { ExperienceCard } from "./ExperienceCard";

type Experience = {
  id?: number;
  img?: string;
  role: string;
  company?: string;
  date?: string;
  desc?: string;
  skills?: string[];
  doc?: string;
};

export function ExperienceSection() {
  const items = (experiences as Experience[]) ?? [];

  return (
    <section
      id="experience"
      className="section-wrapper mt-24 scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="text-center">
          <h2
            id="experience-heading"
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
          >
            Experience
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-200 sm:text-base">
            Real-world work I’ve done as a web developer — freelance and
            production-style projects.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative mt-12 space-y-6 border-l border-slate-700/60 pl-6">
          {items.map((exp, idx) => (
            <li key={exp.id ?? `${exp.role}-${idx}`} className="relative">
              {/* Dot */}
              <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border border-emerald-400 bg-slate-950 shadow shadow-emerald-500/20" />
              <ExperienceCard experience={exp} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
