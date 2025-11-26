// src/components/projects/ProjectsSection.tsx
"use client";

import React from "react";
import { projects } from "@/data/contents";
import { ProjectCard } from "./ProjectCard";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web page", label: "Web pages" },
  { id: "web app", label: "Web applications" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function ProjectsSection() {
  const [filter, setFilter] = React.useState<FilterId>("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base max-w-xl mx-auto">
          I’ve built a mix of web pages and full-stack web applications. Here
          are a few representative projects that show how I work with React,
          Next.js, Python, and modern tooling.
        </p>

        {/* Filters */}
        <div className="mt-6 inline-flex items-center gap-px rounded-xl border border-emerald-500/70 bg-slate-900/60 p-1 text-xs font-medium text-emerald-300 sm:text-sm">
          {FILTERS.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={[
                  "rounded-lg px-3 py-1.5 transition",
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-emerald-200 hover:bg-emerald-500/10",
                ].join(" ")}
              >
                {f.label.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id ?? project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
