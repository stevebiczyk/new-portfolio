// src/components/projects/ProjectCard.tsx

type ProjectMember = {
  name: string;
  img?: string;
  linkedin?: string;
  github?: string;
};

type Project = {
  id?: number;
  title: string;
  description: string;
  image?: string;
  date?: string;
  tags?: string[];
  category?: string;
  github?: string;
  webapp?: string;
  member?: ProjectMember[];
};

export function ProjectCard({ project }: { project: Project }) {
  const hasMembers = project.member && project.member.length > 0;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-emerald-500/20">
      {/* Image */}
      {project.image && (
        <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Details */}
      <div className="flex flex-1 flex-col">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-50">
            {project.title}
          </h3>
          {project.date && (
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {project.date}
            </p>
          )}
        </div>

        <p className="mt-3 line-clamp-3 text-sm text-slate-300">
          {project.description}
        </p>

        {/* Members */}
        {hasMembers && (
          <div className="mt-4 flex items-center gap-2">
            {project.member!.map((m, index) => (
              <div
                key={m.github ?? m.linkedin ?? `${m.name}-${index}`}
                className="-ml-2 first:ml-0"
              >
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-slate-900 bg-slate-800 shadow">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-3">
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Live demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
