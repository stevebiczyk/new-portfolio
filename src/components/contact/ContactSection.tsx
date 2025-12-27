"use client";

import React from "react";
import { Bio } from "@/data/contents";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function buildMailto({ name, email, message }: FormState) {
  const to = Bio.email ?? "";
  const subject = encodeURIComponent(
    `Portfolio inquiry — ${name || "New message"}`
  );
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const canSend = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section
      id="contact"
      className="mt-24 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 pb-16 md:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/40 sm:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left: copy + links */}
            <div>
              <h2
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
              >
                Let’s work together
              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                If you’re hiring or you need a developer for a modern web app or
                a personal or business website, send a message and I’ll get back
                to you.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {Bio.email ? (
                  <li className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                    <span className="text-slate-200">Email</span>
                    <a
                      href={`mailto:${Bio.email}`}
                      className="font-medium text-emerald-300 hover:text-emerald-200"
                    >
                      {Bio.email}
                    </a>
                  </li>
                ) : null}

                <li className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                  <span className="text-slate-200">GitHub</span>
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    @stevebiczyk
                  </a>
                </li>

                <li className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                  <span className="text-slate-200">LinkedIn</span>
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Connect
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-xs text-slate-400">
                Typical response time: 1–2 business days.
              </p>
            </div>

            {/* Right: form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Simple, no-backend “send”: open the user’s email client.
                // Later we can swap this for a real endpoint without changing UI.
                if (!Bio.email) return;
                window.location.href = buildMailto(form);
              }}
            >
              <div>
                <label
                  className="text-xs font-medium text-slate-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  className="text-xs font-medium text-slate-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  className="text-xs font-medium text-slate-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="mt-2 min-h-[140px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Tell me what you're building and what you need help with…"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={!canSend || !Bio.email}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
                    canSend && Bio.email
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "cursor-not-allowed bg-slate-800 text-slate-400",
                  ].join(" ")}
                >
                  Send message
                </button>

                {Bio.email ? (
                  <a
                    href={`mailto:${Bio.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                  >
                    Email me directly
                  </a>
                ) : (
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                  >
                    Message on LinkedIn
                  </a>
                )}
              </div>

              {!Bio.email ? (
                <p className="text-xs text-slate-400">
                  Tip: add <code className="text-slate-300">Bio.email</code> to
                  enable the mailto form. For now, LinkedIn is the fastest path.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
