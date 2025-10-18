import React, { useEffect, useMemo, useState } from "react";

// MODERN & UNIQUE: Command Center layout with quick actions palette
// Pure React + Tailwind classes (no external libs). Works with Tailwind v3 or v4.
// Place images in /public (e.g., /profile.jpg, /projects/xyz.jpg)

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [openCmd, setOpenCmd] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const actions = useMemo(
    () => [
      { k: "Go to Projects", hint: "#projects", run: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) },
      { k: "Go to Experience", hint: "#experience", run: () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }) },
      { k: "Go to Services", hint: "#services", run: () => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }) },
      { k: "Email me", hint: "mailto:algetes2004@gmail.com", run: () => (window.location.href = "mailto:algetes2004@gmail.com") },
      { k: "Open Résumé", hint: "/ALGETS.pdf", run: () => window.open("/ALGETS.pdf", "_blank") },
      { k: "GitHub", hint: "https://github.com/Algets07", run: () => window.open("https://github.com/Algets07", "_blank") },
      { k: "LinkedIn", hint: "https://www.linkedin.com/in/algets-s-4b6762304/", run: () => window.open("https://www.linkedin.com/in/algets-s-4b6762304/", "_blank") },
    ],
    []
  );

  // ✅ Updated projects with images
  const projects = useMemo(
    () => [
      {
        title: "Criminal Identification System",
        note: "Real-time deep-learning facial recognition for rapid suspect detection.",
        tags: ["Python", "Deep Learning", "OpenCV"],
        code: "https://github.com/Algets07",
        img: "/projects/WhatsApp_Image_2025-08-21_at_15.50.52_73bf9c3e.jpg",
      },
      {
      title: "Career Mentor System",
      note:
        "ML-powered Django app suggesting top 3 careers, plus salary/demand, chatbot answers, and PDF reports.",
      tags: ["Django", "Machine Learning", "Chatbot", "PDF", "PostgreSQL/SQLite"],
      code: "https://github.com/Algets07",             // ← add your repo link
      img: "/projects/23.png", // ← place an image here
    },
      {
        title: "SHARENEST",
        note: "Co-ownership MVP with escrow and payouts.",
        tags: ["Html&CSS", "Django", "python"],
        code: "https://github.com/Algets07",
        img: "/projects/sharenest-bandra-east-mumbai-property-consultants-xz8it2miez.jpg",
      },
      {
        title: "Smart Library",
        note: "Digital library system with recs.",
        tags: ["Html&CSS", "Django", "python"],
        code: "https://github.com/Algets07",
        img: "/projects/WhatsApp_Image_2025-08-21_at_16.04.53_fb1b80fc.jpg",
      },
    ],
    []
  );

  const experience = [
    {
      where: "ALGETS / Retech",
      role: "Full-Stack & Python Dev",
      when: "2021 — Present",
      points: ["ML-powered apps & analytics", "Django REST backends", "Clean React UIs & DX"],
    },
  ];

  const services = [
    { name: "Web Apps", desc: "React/Next.js with strong accessibility and clean patterns." },
    { name: "APIs & Data", desc: "Django REST, Postgres, caching, auth, observability." },
    { name: "ML Features", desc: "PyTorch/Sklearn integration and background inference." },
  ];

  const filtered = actions.filter((a) => a.k.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      {/* TOP BAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-[#0b0d12]/70">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold tracking-tight">ALGETS</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenCmd(true)}
              className="px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 text-sm"
            >
              Search
            </button>
            <a
              href="/ALGETS.pdf"
              className="hidden sm:inline px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 text-sm"
            >
              Resume
            </a>

          </div>
        </div>
      </header>

      {/* HERO STRIP */}
      <section className="border-b border-white/10 bg-gradient-to-r from-emerald-500/10 via-cyan-400/10 to-indigo-500/10">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-[260px,1fr] gap-6 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square md:aspect-[4/5]">
            {/* Use /profile.jpg from public/ */}
            <img src="/1000006477.jpg" alt="ALGETS" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase opacity-70">Python • Full-Stack • AI</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
              I build dependable products with a modern stack
            </h1>
<br />
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400">
                View projects
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5">
                Hire me
              </a>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center max-w-md">
<Metric k="Scalable" v="Built for growth" />
<Metric k="Secure" v="Follows best practices" />
<Metric k="Maintainable" v="Clean, tested code" />

            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* QUICK PANELS */}
        <section className="grid md:grid-cols-3 gap-4">
<Panel title="Focus"  text="Simple flows, strong architecture, calm visuals." />
<Panel title="Stack"  text="HTML & CSS & JS/React on top, Django/Postgres beneath." />
<Panel title="Clients" text="People building real products." />
        </section>

        {/* PROJECTS – with images */}
        <section id="projects">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          </div>
<div className="mt-6 grid lg:grid-cols-2 gap-4">
  {projects.slice(0, 2).map((p) => (
    <article
      key={p.title}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
    >
      {/* slight blur + tiny scale for clarity; unblurs on hover */}
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-64 object-cover opacity-90 transition will-change-transform
                   blur-[1px] scale-[1.01] group-hover:blur-0 group-hover:scale-100"
        loading="lazy"
      />
      {/* stronger, taller gradient + a hint of backdrop blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12]/90 via-[#0b0d12]/40 to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[1.5px]" aria-hidden />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm opacity-90 max-w-xl">{p.note}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={p.code || "#"}
            target={p.code ? "_blank" : undefined}
            className="text-sm px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  ))}
</div>

          {/* Cards grid for remaining projects */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(2).map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition overflow-hidden"
              >
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-1 text-sm opacity-80 min-h-[3rem]">{p.note}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
     
                    <a
                      href={p.code || "#"}
                      target={p.code ? "_blank" : undefined}
                      className="text-sm px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <br />
          <br />
          {/* CERTIFICATIONS – Badges */}
<section id="certifications">
  <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { name: "IBM Artificial Intelligence", org: "IBM Skills" },
      { name: "Full Stack development", org: "KK academy" },
      { name: "cloud computing", org: "oracle" },
      { name: "Block development", org: " NSE academy" },

    ].map((c) => (
      <div key={c.name} className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
        <div className="text-sm font-semibold">{c.name}</div>
        <div className="mt-1 text-xs opacity-70">{c.org}</div>
      </div>
    ))}
  </div>
</section>

        </section>
{/* TESTIMONIALS – Scroll-snap */}
<section id="testimonials" className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
  <h2 className="text-2xl md:text-3xl font-bold">What people say</h2>

  <div className="mt-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2">
    {[
      { name: "Priya, PM", text: "Clear, steady delivery. Our MVP shipped on time and felt polished." },
      { name: "Arun, CTO", text: "Great API design and observability. Easier on-call from day one." },
      { name: "Mira, Founder", text: "Translated our idea into a usable product quickly—great comms." },
    ].map((t) => (
      <figure key={t.name}
        className="min-w-[280px] sm:min-w-[360px] snap-center rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
        <blockquote className="text-sm opacity-90">“{t.text}”</blockquote>
        <figcaption className="mt-3 text-xs opacity-70">— {t.name}</figcaption>
      </figure>
    ))}
  </div>
</section>

        {/* CONTACT */}
        <section id="contact" className="rounded-3xl border border-white/10 p-6 bg-white/[0.02]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Let’s build something real</h2>
              <p className="opacity-80">Share your scope and timeline—I’ll reply within a day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:algetes2004@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400"
              >
                Email
              </a>
              <a
                href="https://github.com/Algets07"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/algets-s-4b6762304/"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-sm opacity-70 text-center pb-8">
        © {new Date().getFullYear()} ALGETS {new Date().toLocaleTimeString()}
      </footer>

      {/* COMMAND PALETTE MODAL */}
      {openCmd && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpenCmd(false)} />
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111319] shadow-xl overflow-hidden">
            <div className="border-b border-white/10 p-3">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command (e.g., Projects, Email, Resume)"
                className="w-full bg-transparent outline-none text-sm px-3 py-2 rounded-xl border border-white/10"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {(filtered.length ? filtered : actions).map((a, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      a.run();
                      setOpenCmd(false);
                      setQuery("");
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/5 flex items-center justify-between"
                  >
                    <span className="text-sm">{a.k}</span>
                    <span className="text-[11px] opacity-60">{a.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between text-[11px] opacity-60 px-3 py-2 border-t border-white/10">
              <span>Press Esc to close</span>
              <span>⌘K / Ctrl+K to open</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Panel({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-1 text-sm opacity-80">{text}</p>
    </div>
  );
}

function Metric({ k, v }) {
  return (
    <div className="rounded-xl border border-white/10 p-3 text-center bg-white/[0.03]">
      <div className="text-base font-extrabold">{k}</div>
      <div className="text-[11px] opacity-70">{v}</div>
    </div>
  );
}
