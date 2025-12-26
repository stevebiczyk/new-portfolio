// src/components/experience/ExperienceSection.tsx
"use client";

import { experiences } from "@/data/contents";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
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
            My work experience as a web developer — including freelance and
            production-style projects.
          </p>
        </div>

        <div className="mt-10">
          <VerticalTimeline>
            {experiences.map((experience: any, index: number) => (
              <ExperienceCard
                key={experience.id ?? `experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
