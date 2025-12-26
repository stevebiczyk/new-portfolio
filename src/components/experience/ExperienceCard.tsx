// src/components/experience/ExperienceCard.tsx
"use client";

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

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-black/40">
      <header className="flex gap-3">
        {experience.img ? (
          <img
            src={experience.img}
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

        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
            {experience.role}
            {experience.company ? (
              <span className="text-slate-300"> · {experience.company}</span>
            ) : null}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            {experience.date ? (
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                {experience.date}
              </p>
            ) : null}

            {experience.doc ? (
              <a
                href={experience.doc}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Proof / doc
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {experience.desc ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {experience.desc}
        </p>
      ) : null}

      {experience.skills && experience.skills.length > 0 ? (
        <div className="mt-4">
          <div className="text-xs font-semibold text-slate-200">Skills</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience.skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
