"use client";

type Education = {
  img?: string;
  school: string;
  date?: string;
  grade?: string;
  desc?: string;
  qual?: string;
};

export function EducationCard({ item }: { item: Education }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/40">
      <header className="flex gap-3">
        {item.img ? (
          <img
            src={item.img}
            alt={`${item.school} logo`}
            className="mt-1 h-10 w-10 rounded-lg object-contain bg-slate-50/90 p-1 sm:h-12 sm:w-12"
            loading="lazy"
          />
        ) : (
          <div className="mt-1 h-10 w-10 rounded-lg bg-slate-700/40 sm:h-12 sm:w-12" />
        )}

        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
            {item.school}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            {item.qual ? (
              <p className="text-sm font-medium text-slate-200">{item.qual}</p>
            ) : null}

            {item.date ? (
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                {item.date}
              </p>
            ) : null}
          </div>

          {item.grade ? (
            <p className="mt-1 text-xs font-medium text-slate-300">
              Result: <span className="text-slate-200">{item.grade}</span>
            </p>
          ) : null}
        </div>
      </header>

      {item.desc ? (
        <p className="mt-4 text-sm leading-relaxed text-slate-300 line-clamp-5">
          {item.desc}
        </p>
      ) : null}
    </article>
  );
}
