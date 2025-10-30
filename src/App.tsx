import { useState } from "react";

type Tab = "about" | "research" | "pubs" | "resume" | "contact" | null;

// Tune this if you want more/less air above/below the header
const HEADER_H = 300; // px

export default function App() {
  const [active, setActive] = useState<Tab>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* FIXED, CENTERED HEADER (never moves) */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/85 backdrop-blur"
        style={{ height: HEADER_H }}
      >
        <div className="h-full mx-auto max-w-4xl px-4 flex flex-col items-center justify-center text-center">
          <img
            src="/avatar.JPG"
            alt="Kiana portrait"
            className="h-24 w-24 rounded-full object-cover ring-1 ring-neutral-800 shadow-md"
          />
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Kiana Cogdill-Richardson
          </h1>

          {/* Centered tabs */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "about", label: "About" },
              { id: "research", label: "Research" },
              { id: "pubs", label: "Publications" },
              { id: "resume", label: "Resume" },
              { id: "contact", label: "Contact" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() =>
                  setActive((prev) => (prev === (t.id as Tab) ? null : (t.id as Tab)))
                }
                className={`rounded-full px-4 py-2 text-sm border transition
                  ${active === (t.id as Tab)
                    ? "border-indigo-500 bg-indigo-500/10 text-white"
                    : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT AREA — always centered, header never shifts */}
      <div className="mx-auto max-w-4xl px-4">
        {/* Spacer equals header height so content starts beneath it */}
        <div style={{ height: HEADER_H }} />

        {/* Reveal panel sits under the header; no scrolling on click */}
        <div className="pt-6">
          <div
            className={`overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-all duration-300 mx-auto
                        ${active ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
            aria-live="polite"
          >
            {active && (
              <div className="p-6">
                {active === "about" && (
                  <section>
                    <h2 className="text-xl font-semibold text-white">About</h2>
                    <p className="mt-2 text-neutral-300">
                      I’m a research scientist bridging behavioral science, quantitative modeling,
                      and narrative analysis. I scope decisions, design mixed-methods evidence,
                      and report clear recommendations.
                    </p>
                  </section>
                )}

                {active === "research" && (
                  <section>
                    <h2 className="text-xl font-semibold text-white">Selected Research</h2>
                    <ul className="mt-3 space-y-3 text-sm text-neutral-300">
                      <li>
                        <span className="font-medium text-neutral-100">Narrative coherence automation:</span>{" "}
                        204 Dignity Therapy stories with a human-validated rubric; reproducible pipeline.
                      </li>
                      <li>
                        <span className="font-medium text-neutral-100">Resilience profiles:</span>{" "}
                        LPA / clustering across lifespan stress; interpretable profiles tied to outcomes.
                      </li>
                      <li>
                        <span className="font-medium text-neutral-100">Experiments:</span>{" "}
                        brief → metrics → power → guardrails → actionable readouts.
                      </li>
                    </ul>
                  </section>
                )}

                {active === "pubs" && (
                  <section>
                    <h2 className="text-xl font-semibold text-white">Publications</h2>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      <li>Author, K. (Year). <em>Title of paper</em>. Journal. <a className="underline" href="#" target="_blank">PDF</a></li>
                      <li>— Add 2–4 representative items with links.</li>
                    </ul>
                  </section>
                )}

                {active === "resume" && (
                  <section>
                    <h2 className="text-xl font-semibold text-white">Resume</h2>
                    <p className="mt-2 text-neutral-300">One-page summary available below.</p>
                    <a
                      className="mt-4 inline-block rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
                      href="/resume.pdf" download
                    >
                      Download Resume (PDF)
                    </a>
                  </section>
                )}

                {active === "contact" && (
                  <section>
                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                    <div className="mt-2 space-y-1 text-neutral-300">
                      <p>
                        Email:{" "}
                        <a className="underline" href="mailto:you@example.com">
                          you@example.com
                        </a>
                      </p>
                      <p>
                        LinkedIn:{" "}
                        <a
                          className="underline"
                          href="https://www.linkedin.com/in/your-handle"
                          target="_blank"
                          rel="noreferrer"
                        >
                          linkedin.com/in/your-handle
                        </a>
                      </p>
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="py-10" />
      </div>
    </main>
  );
}
