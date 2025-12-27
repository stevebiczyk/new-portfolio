"use client";

import { education } from "@/data/contents";
import { EducationCard } from "./EducationCard";

type Education = {
  id?: number;
  img?: string;
  school: string;
  date?: string;
  grade?: string;
  desc?: string;
  qual?: string;
};

export function EducationSection() {
  const items = (education as Education[]) ?? [];

  return (
    <section
      id="education"
      className="mt-24 scroll-mt-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <h2
            id="education-heading"
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
          >
            Education
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-300 sm:text-base">
            Brief background and formal learning. My work and projects are the
            main focus — this section is here for context.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <EducationCard
              key={item.id ?? `${item.school}-${idx}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
