import { useState } from "react";

type Tab = "about" | "research" | "pubs" | "resume" | "contact" | null;

export default function App() {
  const [active, setActive] = useState<Tab>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* HERO: name centered, tabs under it */}
      <section className="min-h-screen grid place-items-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Kiana Cogdill-Richardson
          </h1>
          <p className="mt-3 text-neutral-400">
            Research Scientist · Mixed-methods · Quant modeling · Experiments
          </p>

          {/* tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "about", label: "About" },
              { id: "research", label: "Research" },
              { id: "pubs", label: "Publications" },
              { id: "resume", label: "Resume" },
              { id: "contact", label: "Contact" },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActive(a => (a === (t.id as Tab) ? null : (t.id as Tab)))}
                className={`rounded-full px-4 py-2 text-sm border transition
                  ${active === (t.id as Tab)
                    ? "border-indigo-500 bg-indigo-500/10 text-white"
                    : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900"}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* reveal panel appears directly under tabs */}
          <div
            className={`mt-6 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 text-left transition-all duration-300
              ${active ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
            aria-live="polite"
          >
            {active && (
              <div className="p-6">
                {active === "about" && (
                  <div>
                    <h2 className="text-xl font-semibold text-white">About</h2>
                    <p className="mt-2 text-neutral-300">
                      I’m a research scientist bridging behavioral science, quantitative modeling,
                      and narrative analysis. I scope decisions, design mixed-methods evidence,
                      and report clear recommendations.
                    </p>
                  </div>
                )}

                {active === "research" && (
                  <div>
                    <h2 className="text-xl font-semibold text-white">Selected Research</h2>
                    <ul className="mt-3 space-y-3 text-sm text-neutral-300">
                      <li>
                        <span className="font-medium text-neutral-100">Narrative coherence automation:</span>{" "}
                        204 Dignity Therapy stories scored via human-validated rubric; reproducible pipeline.
                      </li>
                      <li>
                        <span className="font-medium text-neutral-100">Resilience profiles:</span>{" "}
                        LPA / clustering across lifespan stress; interpretable profile readouts.
                      </li>
                      <li>
                        <span className="font-medium text-neutral-100">Experimentation:</span>{" "}
                        brief → metrics → power → readout with guardrails.
                      </li>
                    </ul>
                  </div>
                )}

                {active === "pubs" && (
                  <div>
                    <h2 className="text-xl font-semibold text-white">Publications</h2>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      <li>Author, K. (Year). <em>Title of paper</em>. Journal. <a className="underline" href="#" target="_blank">PDF</a></li>
                      <li>Author, K. (Year). <em>Another paper</em>. Journal. <a className="underline" href="#" target="_blank">PDF</a></li>
                    </ul>
                  </div>
                )}

                {active === "resume" && (
                  <div>
                    <h2 className="text-xl font-semibold text-white">Resume</h2>
                    <p className="mt-2 text-neutral-300">One-page summary available below.</p>
                    <a
                      className="mt-4 inline-block rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
                      href="/resume.pdf" download
                    >
                      Download Resume (PDF)
                    </a>
                  </div>
                )}

                {active === "contact" && (
                  <div>
                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                    <div className="mt-2 space-y-1 text-neutral-300">
                      <p>Email: <a className="underline" href="mailto:you@example.com">you@example.com</a></p>
                      <p>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/your-handle" target="_blank">linkedin.com/in/your-handle</a></p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* tiny hint/link to scroll for more if you add anything below later */}
          {/* <p className="mt-6 text-xs text-neutral-500">Scroll for more</p> */}
        </div>
      </section>
    </main>
  );
}
