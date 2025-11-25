import { useState } from "react";

type Tab = "about" | "projects" | "pubs" | "resume" | "contact" | null;

// Tune this if you want more/less air above/below the header
const HEADER_H = 300; // px

export default function App() {
  const [active, setActive] = useState<Tab>("about");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* FIXED, CENTERED HEADER (never moves) */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/85 backdrop-blur"
        style={{ height: HEADER_H }}
      >
        <div className="h-full mx-auto max-w-7xl px-4 flex flex-col items-center justify-center text-center">
          <img
            src="/avatar.png"
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
              { id: "projects", label: "Current Projects" },
              { id: "pubs", label: "Publications" },
              { id: "resume", label: "Resume" },
              { id: "contact", label: "Contact" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() =>
                  setActive((prev) =>
                    prev === (t.id as Tab) ? null : (t.id as Tab)
                  )
                }
                className={`rounded-full px-4 py-2 text-sm border transition
                  ${
                    active === (t.id as Tab)
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT AREA — always centered, header never shifts */}
      <div className="mx-auto max-w-6xl px-4">
        {/* Spacer equals header height so content starts beneath it */}
        <div
  style={{
    height: HEADER_H,
    marginBottom: "1.5rem", // ~24px extra spacing
  }}
/>

        {/* Reveal panel sits under the header; no scrolling on click */}
        <div className="pt-6">
          <div
            className={`overflow-hidden transition-all duration-300 mx-auto max-w-5xl
              ${active ? "max-h-[200vh] opacity-100" : "max-h-0 opacity-0"}`}
            aria-live="polite"
          >

            {/* ABOUT TAB */}
            {active === "about" && (
              <section className="p-6">
                <h2 className="text-xl font-semibold text-white">About</h2>

                <div className="mt-4 flex flex-col md:flex-row items-start gap-6 text-left">

                  {/* LEFT — text */}
                  <div className="md:w-1/3 space-y-4">
                    <p className="text-neutral-300">
                      I’m a mixed-methods research scientist bridging behavioral science,
                      quantitative modeling, and qualitative analysis.
                    </p>
                    <p className="text-neutral-300">
              
                    </p>
                  </div>

                  {/* RIGHT — video */}
                  <div className="md:w-2/3">
                    <video
                      src="/aboutmevid.mp4"
                      controls
                      className="w-full md:w-[700px] lg:w-[800px] rounded-lg shadow-lg"
                    />
                  </div>

                </div>
              </section>
            )}
{/* CURRENT PROJECTS TAB */}
{active === "projects" && (
  <section className="p-6">
 

    {/* ——— CURRENT PROJECT SUMMARY ——— */}
    <div className="mt-4 text-neutral-300 space-y-2">
  <p>
    I am currently completing a Consensual Qualitative Research project, where I led five coders 
    to examine how adults aged 70 and older describe what it means to live a complete life. 
    In parallel, I am developing a structural coherence coding manual designed to evaluate how 
    individuals organize their life stories. This manual will be used to train an AI-based scoring model 
    for large-scale narrative analysis. I also recently completed a UX Research bootcamp through the 
    Erdos Institute, where I strengthened skills in applied research design, rapid experimentation, 
    user-centered interviewing, and translating qualitative and quantitative insights into actionable 
    recommendations for product, clinical, and community settings. If you have any questions about any 
    of these ongoing projects, feel free to contact me—I’d love to chat!
  </p>

      <p className="text-sm text-neutral-500 italic">
        Updated: November 2025
      </p>
    </div>

    {/* ——— LINKEDIN FEED ——— */}
    <div className="mt-10 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50">
      <h3 className="text-lg font-semibold text-white mb-4">Latest on LinkedIn</h3>

      {/* Your Elfsight widget */}
      <div 
        className="elfsight-app-d8bc2d74-4a4e-4271-87d0-6dd9f85fe569" 
        data-elfsight-app-lazy
      ></div>
    </div>
  </section>
)}


{/* PUBLICATIONS TAB */}
{active === "pubs" && (
  <section className="p-6">
    <h2 className="text-xl font-semibold text-white mb-4">Publications</h2>

    <div className="space-y-6">

      {/* 1 — Mechanisms of Dignity Therapy */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
        <p className="text-neutral-300 text-sm">
          <span className="font-semibold">2025.</span>{" "}
          <a 
            href="https://www.liebertpub.com/doi/abs/10.1177/10966218251399600?doi=10.1177/10966218251399600"
            target="_blank"
            className="underline text-indigo-300"
          >
            Mechanisms of Dignity Therapy: Positive outcomes in older cancer patients.
          </a>{" "}
          <em>Journal of Palliative Medicine.</em>
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed">
          We examined a globally used, evidenced-based intervention for older cancer patients using a pre–post study design. 
          Our mixed-methods approach combined qualitative coding of 203 therapy transcripts (capturing narrative richness 
          and provider empathy) with quantitative pre/post measures of dignity, meaning, and emotional preparation. 
          By integrating the two, we found that the richness of a patient’s life story, not provider behavior, 
          was the key driver of positive outcomes.
        </p>
      </div>

      {/* 2 — Reflecting on Death */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
        <p className="text-neutral-300 text-sm">
          <span className="font-semibold">2024.</span>{" "}
          <a 
            href="/reflectingondeath.pdf"
            target="_blank"
            className="underline text-indigo-300"
          >
            Reflecting on death: Priorities for living well.
          </a>{" "}
          <em>Death Studies.</em>
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed">
          We conducted an online study of adults across the lifespan (N = 195) to examine how mortality reflection shapes life priorities. 
          Participants listed three things they wanted to do before they die, and we applied a closed card-sorting method, 
          a structured qualitative approach that allows open-ended responses to be categorized for quantitative analysis, 
          to classify these goals for living well. Findings show that structured death-reflection tasks can actively reveal 
          how people prioritize living well.
        </p>
      </div>

      {/* 3 — Facing Off-Time Mortality */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
        <p className="text-neutral-300 text-sm">
          <span className="font-semibold">2024.</span>{" "}
          <a 
            href="/facingofftimemortality.pdf"
            target="_blank"
            className="underline text-indigo-300"
          >
            Facing off-time mortality: Leaving a legacy.
          </a>{" "}
          <em>Psychology and Aging.</em>
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed">
          We analyzed how older adults with serious and terminal cancer describe their legacy during Dignity Therapy sessions. 
          Using qualitative content analysis of 203 narratives and a lifespan-informed metric of potential years of life lost, 
          we found that individuals facing earlier-than-expected mortality expressed stronger relational themes and greater concern 
          for loved ones’ futures. The project illustrates how narrative data can reveal what matters most to people when 
          confronting shortened life expectancy.
        </p>
      </div>

      {/* 4 — Creativity & Wisdom Chapter */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
        <p className="text-neutral-300 text-sm">
          <span className="font-semibold">2023.</span>{" "}
          A life story perspective on the nexus of creativity and wisdom.{" "}
          <em>In Handbook of Transformational Creativity (Palgrave-Macmillan).</em>
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed">
          We developed a framework explaining how people use creativity to meaningfully contribute to the common good. 
          Drawing on lifespan development and narrative identity theory, we introduce transformational creativity, 
          which is creativity guided by wisdom, empathy, and long-term impact rather than short-term reward. 
          The chapter highlights three wisdom attributes (openness, reflection, and empathy) that are especially important 
          for applying creativity responsibly in real-world contexts. This perspective offers insight into how people 
          can design values-aligned careers, innovate ethically, and create solutions with lasting societal benefit.
        </p>
      </div>

      {/* 5 — Even the Good Life Has an Ending */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
        <p className="text-neutral-300 text-sm">
          <span className="font-semibold">2022.</span>{" "}
          <a 
            href="/virtue.pdf"
            target="_blank"
            className="underline text-indigo-300"
          >
            Even the good life has an ending: Virtue in the face of finitude.
          </a>{" "}
          <em>Journal of Personality.</em>
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed">
          We conducted an online study of adults across three age groups (N = 202) 
          to examine how mortality awareness shapes the way people define a “good life.” 
          Participants wrote a personal narrative either about who they are today or how they want to be remembered, 
          and we used structured qualitative content analysis to code each narrative for universal virtue themes. 
          Participants prompted to imagine being remembered after death expressed more virtue-based qualities, 
          showing how mortality reflection shifts narrative identity toward values, morality, and legacy.
        </p>
      </div>

    </div>
  </section>
)}




{/* RESUME TAB */}
{active === "resume" && (
  <section className="p-6">
    <h2 className="text-xl font-semibold text-white">Resume</h2>
    <p className="mt-2 text-neutral-300">
      Download the latest version below.
    </p>

    <div className="mt-4 flex flex-col sm:flex-row gap-3">
      {/* PDF BUTTON */}
      <a
        className="inline-block rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
        href="/resume-11-25.pdf"
        download
      >
        Download Resume (PDF)
      </a>

      {/* DOCX BUTTON */}
      <a
        className="inline-block rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
        href="/resume-11-25.docx"
        download
      >
        Download Resume (DOCX)
      </a>
    </div>
  </section>
)}



            {/* CONTACT TAB */}
            {active === "contact" && (
              <section className="p-6">
                <h2 className="text-xl font-semibold text-white">Contact</h2>
                <div className="mt-2 space-y-1 text-neutral-300">
                  <p>
                    Email:{" "}
                    <a className="underline" href="mailto:kianamarie.cr@gmail.com">
                      kianamarie.cr@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      className="underline"
                      href="https://www.linkedin.com/in/kmcr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/kmcr
                    </a>
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>

        <div className="py-10" />
      </div>
    </main>
  );
}
