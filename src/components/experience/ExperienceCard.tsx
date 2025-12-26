// src/components/experience/ExperienceCard.tsx
"use client";

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Experience = {
  id?: number;
  img?: string;
  role: string;
  company?: string;
  date?: string;
  desc?: string;
  skills?: string[];
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  const iconImg = experience.img;

  return (
    <VerticalTimelineElement
      icon={
        iconImg ? (
          <img
            width="100%"
            height="100%"
            alt={
              experience.company
                ? `${experience.company} logo`
                : experience.role
            }
            style={{ borderRadius: "9999px", objectFit: "cover" }}
            src={iconImg}
          />
        ) : undefined
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.18)",
      }}
      date={experience.date}
    >
      {/* Top row */}
      <div className="flex w-full gap-3">
        {iconImg ? (
          <img
            src={iconImg}
            alt={
              experience.company
                ? `${experience.company} logo`
                : experience.role
            }
            className="mt-1 h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
            loading="lazy"
          />
        ) : (
          <div className="mt-1 h-10 w-10 rounded-lg bg-slate-700/40 sm:h-12 sm:w-12" />
        )}

        <div className="flex flex-1 flex-col">
          <div className="text-base font-semibold text-slate-50 sm:text-lg">
            {experience.role}
          </div>

          {experience.company ? (
            <div className="text-xs font-medium text-slate-300 sm:text-sm">
              {experience.company}
            </div>
          ) : null}

          {experience.date ? (
            <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
              {experience.date}
            </div>
          ) : null}
        </div>
      </div>

      {/* Description + skills */}
      <div className="text-sm text-slate-200">
        {experience.desc ? (
          <p className="leading-relaxed">{experience.desc}</p>
        ) : null}

        {experience.skills && experience.skills.length > 0 ? (
          <div className="mt-3">
            <div className="text-xs font-semibold text-slate-100">Skills</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </VerticalTimelineElement>
  );
}
