import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

import portrait from "@/assets/portrait.jpg";
import projectCareerPulse from "@/assets/project-careerpulse.jpg";
import projectPulse from "@/assets/project-pulse.jpg";
import projectExperiments from "@/assets/project-experiments.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhimanyu Sharma — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Abhimanyu Sharma, CS undergraduate at IIT Mandi — machine learning, systems, and product engineering.",
      },
      { property: "og:title", content: "Abhimanyu Sharma — Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Abhimanyu Sharma, CS undergraduate at IIT Mandi — machine learning, systems, and product engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    tag: "Internship",
    tagClass: "bg-primary/10 text-primary",
    title: "Software Engineering Intern",
    org: "Expedia Group",
    period: "2025",
    blurb:
      "Worked on search and personalization features for travel discovery, shipping improvements to production surfaces used by millions.",
  },
  {
    tag: "Research",
    tagClass: "bg-accent-2/10 text-accent-2",
    title: "Undergraduate Researcher",
    org: "CnP Lab, IIT Mandi",
    period: "2024",
    blurb:
      "Prototyped compute-and-network systems projects, from distributed workloads to efficient inference on constrained hardware.",
  },
  {
    tag: "Up next",
    tagClass: "bg-foreground/10 text-foreground/80",
    title: "Open to opportunities",
    org: "Wherever the problem is interesting",
    period: "2026",
    blurb:
      "Looking for roles and collaborations across ML, systems, and product engineering. This card is waiting for its story.",
  },
];

const PROJECTS = [
  {
    image: projectCareerPulse,
    alt: "CareerPulse dashboard interface",
    title: "CareerPulse",
    tag: "ML",
    tagClass: "text-primary",
    blurb: "AI career-matching engine predicting skill gaps and recommending learning paths.",
  },
  {
    image: projectPulse,
    alt: "Pulse real-time monitoring interface",
    title: "Pulse",
    tag: "Web",
    tagClass: "text-accent-2",
    blurb: "Real-time telemetry dashboard streaming and visualizing thousands of live events.",
  },
  {
    image: projectExperiments,
    alt: "Neural network visualization",
    title: "Experiments",
    tag: "Research",
    tagClass: "text-primary",
    blurb: "A lab of ML experiments — transformers, diffusion, and reinforcement learning.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages & CS",
    skills: ["Python", "C++", "TypeScript", "SQL", "Data Structures", "Algorithms", "Systems"],
  },
  {
    title: "ML & Tools",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Docker", "Git", "Postgres", "Learning: Rust"],
  },
];

const DIGITAL_PROFILES = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "LeetCode", href: "https://leetcode.com/" },
  { label: "Codeforces", href: "https://codeforces.com/" },
  { label: "CodeChef", href: "https://www.codechef.com/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/" },
];

const ACHIEVEMENTS = [
  "Competitive programming across Codeforces, CodeChef, and LeetCode",
  "Hackathon and coding competition finalist",
  "Strong academic standing at IIT Mandi",
];

const INTERESTS = [
  { title: "Photography", note: "Chasing light and frames" },
  { title: "Travel", note: "Mountains over beaches" },
  { title: "Food", note: "Street food connoisseur" },
  { title: "Volleyball", note: "Weekend spikes" },
];

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-10 flex items-end justify-between">
      <h2 className="font-display text-3xl font-bold tracking-tight">{title}</h2>
      {note ? (
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{note}</span>
      ) : null}
    </div>
  );
}

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground">
      {/* ambient gradient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-a absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-float-b absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-accent-2/25 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* diagonal frosted glass panels */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-a absolute -top-24 right-[8%] h-[460px] w-[300px] rotate-12 rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl" />
        <div className="animate-float-b absolute -bottom-[60px] left-[6%] h-[380px] w-[260px] -rotate-12 rounded-3xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-xl" />
      </div>

      {/* nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-primary/15 font-display font-bold text-primary ring-1 ring-primary/30">
            AS
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">Abhimanyu Sharma</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#resume"
          className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-foreground/10"
        >
          Resume
        </a>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-10 pb-24 md:grid-cols-12 md:pt-16">
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> Open to 2026 opportunities
          </div>
          <h1 className="font-display text-6xl leading-[0.95] font-bold tracking-tight md:text-7xl">
            Building intelligent
            <span className="block bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">
              systems that scale.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Abhimanyu — a CS undergraduate at IIT Mandi working across machine learning,
            systems, and product engineering. I like clean abstractions, measurable impact, and
            shipping things that hold up.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <div className="font-display text-3xl font-bold">
                8.7<span className="text-primary">/10</span>
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">CGPA</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">14+</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">Projects</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">IIT Mandi</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">B.Tech · CSE</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="animate-drift relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent-2/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl">
              <img
                src={portrait}
                alt="Portrait of Abhimanyu Sharma"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* about + academics */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h2 className="font-display text-xl font-semibold">About me</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              I study Computer Science at IIT Mandi and spend most of my time at the seam of
              machine learning and product — building things like CareerPulse and Pulse, and
              exploring small, sharp experiments in between. Off the keyboard you'll find me with
              a camera, on a volleyball court, or chasing good food on the road.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h2 className="font-display text-xl font-semibold">Academics</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              B.Tech in Computer Science &amp; Engineering at IIT Mandi, with a CGPA of 8.7.
              Coursework spans data structures and algorithms, machine learning, computer networks,
              databases, and operating systems — plus academic projects in applied ML and systems.
            </p>
          </div>
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Experience" note="Selected roles" />
        </div>
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-3">
          {EXPERIENCE.map((role) => (
            <div
              key={role.title}
              className="group rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 backdrop-blur-md transition hover:border-primary/40 hover:bg-foreground/[0.06]"
            >
              <div
                className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${role.tagClass}`}
              >
                {role.tag}
              </div>
              <h3 className="font-display text-xl font-semibold">{role.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {role.org} · {role.period}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{role.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Featured projects" />
        </div>
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md transition hover:border-primary/40"
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <span className={`text-xs ${project.tagClass}`}>{project.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{project.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md"
            >
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* achievements + digital */}
      <section id="achievements" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h3 className="font-display text-xl font-semibold">Achievements</h3>
            <ul className="mt-5 space-y-3">
              {ACHIEVEMENTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h3 className="font-display text-xl font-semibold">Digital presence</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {DIGITAL_PROFILES.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 transition hover:border-primary/40"
                >
                  {profile.label} <span className="text-primary">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* interests */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Off the clock" note="The human part" />
        </div>
        <div className="reveal-on-scroll grid grid-cols-2 gap-5 md:grid-cols-4">
          {INTERESTS.map((interest) => (
            <div
              key={interest.title}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5 backdrop-blur-md transition hover:border-accent-2/40"
            >
              <p className="font-display text-lg font-semibold">{interest.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{interest.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* resume / contact */}
      <section id="resume" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div
          id="contact"
          className="reveal-on-scroll rounded-[2rem] border border-foreground/10 bg-foreground/[0.04] p-10 text-center backdrop-blur-xl md:p-14"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            I'm always up for interesting problems, collaborations, or just a good conversation
            about systems and ML.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Download resume
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span>© 2026 Abhimanyu Sharma — Built with intent.</span>
          <div className="flex gap-6">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="transition hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
