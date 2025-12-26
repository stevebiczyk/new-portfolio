"use client";

// src/components/experience/ExperienceSection.tsx
"use client";

import { experiences } from "@/data/contents";

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
            Where I’ve applied my skills in real projects — including freelance
            work and production-style app development.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {items.map((exp, idx) => (
            <article
              key={exp.id ?? `${exp.role}-${idx}`}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-black/40"
            >
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {exp.role}
                    {exp.company ? (
                      <span className="text-slate-300"> · {exp.company}</span>
                    ) : null}
                  </h3>
                  {exp.date ? (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                      {exp.date}
                    </p>
                  ) : null}
                </div>

                {exp.doc ? (
                  <a
                    href={exp.doc}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-max items-center rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                  >
                    Proof / doc
                  </a>
                ) : null}
              </header>

              {exp.desc ? (
                <p className="mt-3 text-sm text-slate-300">{exp.desc}</p>
              ) : null}

              {exp.skills && exp.skills.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
