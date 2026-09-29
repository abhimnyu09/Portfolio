import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { HeroSignalField } from "@/components/hero-signal-field";
import { CaseStudyDialog } from "@/components/case-study-dialog";
import portrait from "@/assets/portrait.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import {
  ACHIEVEMENTS,
  CASE_STUDIES,
  COURSEWORK,
  CURRENTLY,
  EMAIL,
  EXPEDIA_POINTS,
  GITHUB,
  INTERESTS,
  LEADERSHIP,
  LINKEDIN,
  MORE_REPOS,
  NAV_LINKS,
  OTHER_PROFILES,
  PHONE,
  PRIMARY_PROFILES,
  PROJECTS,
  SCHOOL,
  SECONDARY_ROLES,
  SKILL_GROUPS,
  type CaseStudyId,
  type Project,
} from "@/content/portfolio";

const TITLE = "Abhimanyu Sharma — Electrical Engineer | Software · ML · Systems";
const DESCRIPTION =
  "Electrical Engineering student at IIT Mandi building across software, ML, embedded systems and computer architecture. Ex-Software Development Intern at Expedia Group. Open to 2027 roles.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const card = "rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md";
const primaryBtn =
  "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110";
const ghostBtn = "rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5";

function SectionHeading({ id, title, note }: { id?: string; title: string; note?: string }) {
  return (
    <div className="reveal-on-scroll mb-8 flex flex-wrap items-end justify-between gap-2 md:mb-10">
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {note ? <span className="text-xs tracking-widest text-muted-foreground uppercase">{note}</span> : null}
    </div>
  );
}

function Chips({ items, mono }: { items: string[]; mono?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/85 ${mono ? "font-mono" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  project,
  featured,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: (id: CaseStudyId) => void;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden ${card} transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 ${featured ? "md:col-span-2 md:flex-row" : ""}`}
    >
      <div className={`overflow-hidden ${featured ? "md:w-1/2" : ""}`}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          width={1024}
          height={640}
          className="aspect-[16/10] size-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:p-8" : ""}`}>
        <p className="text-xs tracking-widest text-accent-2 uppercase">{project.tag}</p>
        <h3 className={`mt-2 font-display leading-snug font-semibold ${featured ? "text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.period}</p>
        <p className="mt-4 text-sm font-medium text-foreground/90">{project.problem}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{project.built}</p>
        <p className="mt-4 font-mono text-xs text-muted-foreground">{project.stack.join(" · ")}</p>
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          {project.caseStudy ? (
            <button
              type="button"
              onClick={() => onOpen(project.caseStudy!)}
              className="font-semibold text-primary transition hover:brightness-125"
            >
              Read case study →
            </button>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 transition hover:text-foreground"
            >
              {project.linkLabel ?? "GitHub"} ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Index() {
  useReveal();
  const [openStudy, setOpenStudy] = useState<CaseStudyId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featured, ...rest] = PROJECTS;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-body text-foreground">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <div className="grain-overlay" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="hero-signal-field pointer-events-auto absolute inset-x-0 top-0 h-[720px] overflow-hidden"
      >
        <HeroSignalField />
        <div className="hero-signal-grid absolute inset-0" />
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-transparent bg-background/60 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2" aria-label="Abhimanyu Sharma — back to top">
            <span className="grid size-9 place-items-center rounded-lg bg-primary/15 font-display font-bold text-primary ring-1 ring-primary/30">
              AS
            </span>
            <span className="font-display text-sm font-semibold tracking-wide">Abhimanyu Sharma</span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Resume
            </a>
          </nav>
          <button
            type="button"
            className="rounded-full border border-foreground/15 px-4 py-2 text-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen ? (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-foreground/10 bg-background/95 px-6 py-4 md:hidden">
            <ul className="grid gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2.5 text-base">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={resumeAsset.url} target="_blank" rel="noreferrer" className={`${primaryBtn} mt-2 inline-block`}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="main">
        {/* hero */}
        <section
          id="top"
          aria-labelledby="hero-title"
          className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-8 pb-16 md:grid-cols-12 md:pt-14 md:pb-20"
        >
          <div className="md:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" /> Open to 2027 Software · ML · Systems roles
            </div>
            <p className="font-display text-lg text-foreground/80">
              Abhimanyu Sharma · <span className="text-foreground">IIT Mandi</span>, Electrical Engineering
            </p>
            <h1 id="hero-title" className="mt-3 font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl md:text-7xl">
              From silicon to
              <span className="block bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">
                shipped software.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              I build across the stack — software engineering, machine learning, embedded systems,
              computer architecture and automation. Most recently: Pulse, a Slack-native automation bot,
              as a Software Development Intern at Expedia Group.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className={primaryBtn}>
                View projects
              </a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className={ghostBtn}>
                Resume
              </a>
              <a href="#contact" className="px-2 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground">
                Contact →
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: "8.35", s: "/10", l: "CGPA" },
                { v: "500+", s: "", l: "Students mentored" },
                { v: "6+", s: "", l: "Engineering projects" },
              ].map((stat) => (
                <div key={stat.l}>
                  <dt className="order-2 text-[11px] tracking-widest text-muted-foreground uppercase">{stat.l}</dt>
                  <dd className="font-display text-2xl font-bold md:text-3xl">
                    {stat.v}
                    <span className="text-primary">{stat.s}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent-2/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/[0.04]">
                <img
                  src={portrait}
                  alt="Abhimanyu Sharma standing in a stadium"
                  width={1200}
                  height={1460}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ticker */}
        <div aria-hidden="true" className="relative z-10 overflow-hidden border-y border-foreground/10 bg-foreground/[0.02] py-4">
          <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-10">
                {["IIT Mandi", "Expedia Group", "Electrical Engineering", "Embedded Systems", "Machine Learning", "Computer Architecture", "Automation", "Verilog", "n8n", "AWS Bedrock", "YOLOv8", "Next.js"].map((word) => (
                  <span key={`${copy}-${word}`} className="flex items-center gap-10 font-display text-sm tracking-[0.2em] text-foreground/50 uppercase">
                    {word}
                    <span className="size-1.5 rounded-full bg-primary/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* about + currently */}
        <section id="about" aria-labelledby="about-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pt-20 pb-20">
          <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className={`${card} p-7 md:col-span-7 md:p-9`}>
              <h2 id="about-title" className="font-display text-3xl font-bold tracking-tight">
                About
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/80">
                I like problems that cross layers — a YOLOv8 model on a Raspberry Pi stopping a train
                bogie, a Verilog pipeline I can trace by hand, an n8n workflow that turns a Slack message
                into a live dashboard.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/70">
                Electrical Engineering gave me the hardware intuition. Embedded work, ML, web development
                and a lot of DSA gave me the rest.
              </p>
              <p className="mt-6 font-mono text-xs leading-relaxed text-primary">
                Electrical → Embedded → ML → Software → Systems
              </p>
              <p className="mt-6 text-sm leading-relaxed text-foreground/60">
                Off the keyboard: volleyball, mountain biking around Mandi, a camera, and a long list of
                places to eat at.
              </p>
            </div>
            <aside aria-labelledby="currently-title" className={`${card} p-7 md:col-span-5`}>
              <h3 id="currently-title" className="flex items-center gap-2 text-xs tracking-widest text-accent-2 uppercase">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
                </span>
                Currently
              </h3>
              <dl className="mt-5 space-y-4">
                {CURRENTLY.map((row) => (
                  <div key={row.k} className="border-b border-foreground/10 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs text-muted-foreground">{row.k}</dt>
                    <dd className="mt-0.5 text-sm font-medium">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* experience */}
        <section id="experience" aria-labelledby="experience-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
          <SectionHeading id="experience-title" title="Experience" note="Where I've shipped" />

          <article className="reveal-on-scroll relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-gradient-to-br from-primary/[0.07] via-foreground/[0.02] to-accent-2/[0.05] p-7 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">Internship · Featured</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Expedia Group</h3>
                <p className="mt-1 text-foreground/80">Software Development Intern · Gurugram</p>
              </div>
              <p className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/80">Jun – Jul 2026</p>
            </div>
            <dl className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {EXPEDIA_POINTS.map((point) => (
                <div key={point.k} className="border-l-2 border-primary/40 pl-4">
                  <dt className="text-xs tracking-widest text-accent-2 uppercase">{point.k}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground/80">{point.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setOpenStudy("pulse")} className={primaryBtn}>
                Read the Pulse case study
              </button>
              <p className="font-mono text-xs text-muted-foreground">n8n · JavaScript · Slack · REST APIs · AWS Bedrock</p>
            </div>
          </article>

          <div className="reveal-on-scroll mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SECONDARY_ROLES.map((role) => (
              <article key={role.title} className={`${card} p-6`}>
                <p className="text-xs tracking-widest text-accent-2 uppercase">{role.tag}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{role.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {role.org}
                  {role.period ? ` · ${role.period}` : ""}
                </p>
                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className={`${card} border-dashed p-6`}>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Up next</p>
              <h3 className="mt-2 font-display text-lg font-semibold">Open to 2027 roles</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">Software · ML · Systems</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Full-time and internship roles where automation, applied ML or low-level systems work
                actually moves a metric.
              </p>
            </article>
          </div>
        </section>

        {/* projects */}
        <section id="projects" aria-labelledby="projects-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
          <SectionHeading id="projects-title" title="Projects" note="Software · Hardware · Systems" />
          <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured ? (
              <div className="md:col-span-2 lg:col-span-3">
                <ProjectCard project={featured} featured onOpen={setOpenStudy} />
              </div>
            ) : null}
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={setOpenStudy} />
            ))}
          </div>

          <div className={`reveal-on-scroll mt-5 ${card} p-7`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">Also on GitHub</h3>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="text-sm text-primary transition hover:brightness-125">
                github.com/abhimnyu09 →
              </a>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
              {MORE_REPOS.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 transition hover:border-accent-2/40"
                  >
                    <p className="text-sm font-medium break-words">{repo.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{repo.note}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* skills */}
        <section id="skills" aria-labelledby="skills-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
          <SectionHeading id="skills-title" title="Skills" note="Things I'd happily discuss in an interview" />
          <div className={`reveal-on-scroll ${card} divide-y divide-foreground/10`}>
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="grid gap-3 p-5 md:grid-cols-[14rem_1fr] md:items-center md:px-7">
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
                <Chips items={group.skills} />
              </div>
            ))}
          </div>
        </section>

        {/* education */}
        <section aria-labelledby="education-title" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <SectionHeading id="education-title" title="Education" />
          <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className={`${card} p-7 md:col-span-7 md:p-9`}>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">2023 – 27</p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">IIT Mandi</h3>
              <p className="mt-1 text-foreground/80">B.Tech — Electrical Engineering</p>
              <p className="mt-6 font-display text-4xl font-bold">
                8.35<span className="text-primary text-2xl"> / 10</span>
              </p>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">CGPA</p>

              <h4 className="mt-8 text-xs tracking-widest text-accent-2 uppercase">Relevant coursework</h4>
              <div className="mt-4 space-y-4">
                {COURSEWORK.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-medium">{group.title}</p>
                    <Chips items={group.items} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${card} self-start p-6 md:col-span-5`}>
              <h3 className="text-xs tracking-widest text-muted-foreground uppercase">School</h3>
              <ul className="mt-4 space-y-3">
                {SCHOOL.map((row) => (
                  <li key={row.degree} className="flex items-start justify-between gap-4 text-sm">
                    <div>
                      <p className="font-medium">{row.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {row.institute} · {row.year}
                      </p>
                    </div>
                    <p className="shrink-0 font-semibold text-primary">{row.score}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* achievements + leadership */}
        <section id="achievements" aria-labelledby="achievements-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
          <h2 id="achievements-title" className="sr-only">
            Achievements and leadership
          </h2>
          <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { title: "Achievements", items: ACHIEVEMENTS, dot: "bg-primary" },
              { title: "Leadership", items: LEADERSHIP, dot: "bg-accent-2" },
            ].map((block) => (
              <div key={block.title} className={`${card} p-7`}>
                <h3 className="font-display text-xl font-semibold">{block.title}</h3>
                <ul className="mt-5 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span aria-hidden="true" className={`mt-2 size-1.5 shrink-0 rounded-full ${block.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* interests */}
        <section aria-labelledby="interests-title" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <SectionHeading id="interests-title" title="Off the clock" note="The human part" />
          <ul className="reveal-on-scroll grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {INTERESTS.map((interest) => (
              <li key={interest.title} className={`${card} p-5 transition hover:border-accent-2/40`}>
                <p className="font-display text-lg font-semibold">{interest.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{interest.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* contact */}
        <section id="contact" aria-labelledby="contact-title" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
          <div id="resume" className="reveal-on-scroll rounded-[2rem] border border-foreground/10 bg-foreground/[0.04] p-8 text-center backdrop-blur-xl md:p-14">
            <h2 id="contact-title" className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let's build something.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Open to software, ML and systems opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className={primaryBtn}>
                Email me
              </a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className={ghostBtn}>
                Resume
              </a>
              {PRIMARY_PROFILES.map((p) => (
                <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className={ghostBtn}>
                  {p.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs break-all text-muted-foreground">
              {EMAIL} · {PHONE} · Mandi, India
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Also on{" "}
              {OTHER_PROFILES.map((p, i) => (
                <span key={p.label}>
                  <a href={p.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-foreground hover:underline">
                    {p.label}
                  </a>
                  {i < OTHER_PROFILES.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span>© 2026 Abhimanyu Sharma — Built with intent.</span>
          <div className="flex gap-6">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="transition hover:text-foreground">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="transition hover:text-foreground">LinkedIn</a>
            <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="transition hover:text-foreground">Resume</a>
            <a href={`mailto:${EMAIL}`} className="transition hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>

      <CaseStudyDialog study={openStudy ? CASE_STUDIES[openStudy] : null} onClose={() => setOpenStudy(null)} />
    </div>
  );
}
