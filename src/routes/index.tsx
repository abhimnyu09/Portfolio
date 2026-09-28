import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { HeroSignalField } from "@/components/hero-signal-field";

import portrait from "@/assets/portrait.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import projectPulse from "@/assets/project-pulse.jpg";
import projectHft from "@/assets/project-hft.jpg";
import projectDsa from "@/assets/project-dsa.jpg";
import projectMedical from "@/assets/project-careerpulse.jpg";
import projectRailway from "@/assets/project-railway.jpg";
import projectRiscv from "@/assets/project-riscv.jpg";

const DESCRIPTION =
  "Abhimanyu Sharma — B.Tech Electrical Engineering at IIT Mandi. Software Development Intern at Expedia Group, building automation, ML and embedded systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhimanyu Sharma — Engineer, IIT Mandi" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Abhimanyu Sharma — Engineer, IIT Mandi" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const EMAIL = "b23058@students.iitmandi.ac.in";
const GITHUB = "https://github.com/abhimnyu09";
const LINKEDIN = "https://linkedin.com/in/abhimanyu-sharma-2b213";

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
    title: "Software Development Intern",
    org: "Expedia Group · Gurugram",
    period: "Jun – Jul 2026",
    points: [
      "Built and maintained Pulse, a Slack-based Operational Excellence automation bot for Product Exp & Offers — on-demand reporting across SLO, production readiness, hygiene, cloud cost, bugs and vulnerabilities.",
      "Engineered a modular n8n workflow with five independent execution paths across Slack, internal REST APIs, Jira, CloudZero, ServiceNow, Singularity, Wiz, Core Quality and SLO systems, plus daily directory and nightly OPEX aggregation.",
      "Shipped webhook-served HTML dashboards with secure 24-hour signed sessions, filters, service search, time controls and self-serve reports via @Pulse start.",
      "Integrated AWS Bedrock/Claude for SLO and bug summaries and incident recaps, structured into Impact, Root Cause, Resolution and Follow-ups from Slack threads.",
    ],
  },
  {
    tag: "Leadership",
    tagClass: "bg-accent-2/10 text-accent-2",
    title: "Student Representative",
    org: "Career & Placement Cell, IIT Mandi",
    period: "2025 – present",
    points: [
      "Represent the batch with the placement cell — company outreach, drive coordination and peer preparation support.",
      "Coordinator for Hostels General Championship '25 (Volleyball) and core team member of the Mountain Biking Club.",
    ],
  },
  {
    tag: "Up next",
    tagClass: "bg-foreground/10 text-foreground/80",
    title: "Open to 2027 roles",
    org: "Software · ML · Systems",
    period: "2027",
    points: [
      "Looking for full-time and internship roles where automation, applied ML or low-level systems work actually moves a metric.",
    ],
  },
];

const PROJECTS = [
  {
    image: projectPulse,
    alt: "Operational excellence automation dashboard",
    title: "Pulse — Operational Excellence Bot",
    period: "Jun – Jul '26",
    tag: "Automation",
    tagClass: "text-primary",
    stack: "n8n · JavaScript · Slack · REST APIs · AWS Bedrock",
    blurb:
      "End-to-end Slack-to-dashboard workflow that resolves org/service scope, fans out per-service report requests, and consolidates operational health into Slack summaries and HTML dashboards.",
    href: undefined as string | undefined,
  },
  {
    image: projectHft,
    alt: "High frequency trading backtest chart",
    title: "HFT Strategy Backtester",
    period: "Jun – Jul '25",
    tag: "Quant",
    tagClass: "text-accent-2",
    stack: "Python · Binance API · LightGBM · scikit-learn",
    blurb:
      "Research pipeline over high-frequency BTC/USDT trade data: OHLCV bars, trade flow imbalance, rolling volatility, then a regularised LightGBM classifier backtested with confidence thresholding and per-trade costs.",
    href: "https://github.com/abhimnyu09/High-Frequency-Trading-Strategy-Backtester",
  },
  {
    image: projectDsa,
    alt: "Algorithm visualiser interface",
    title: "DSA Algorithms Visualiser",
    period: "Mar – May '25",
    tag: "Web",
    tagClass: "text-primary",
    stack: "Next.js · React · TypeScript · Tailwind · Vercel",
    blurb:
      "Interactive tool visualising 20+ DSA topics across sorting, trees, graphs and dynamic programming, with playback controls, random data generation and light/dark UI.",
    href: "https://dsa-visualiser-psi.vercel.app",
  },
  {
    image: projectMedical,
    alt: "Medical diagnosis AI interface",
    title: "Multimodal Medical Diagnosis",
    period: "Dec '24 – Apr '25",
    tag: "ML / CV",
    tagClass: "text-accent-2",
    stack: "Python · TensorFlow · CNN · OpenAI API · HAM10000",
    blurb:
      "CNN skin-image classification at 92% accuracy on HAM10000 combined with LangChain symptom analysis and GPT-driven, condition-specific recommendations.",
    href: "https://github.com/abhimnyu09/Multimodel_Medical_Diagnosis_using_Computer_Vision",
  },
  {
    image: projectRailway,
    alt: "Railway locomotive safety detection system",
    title: "Safe Shunting of Locomotives",
    period: "Jan – Apr '25",
    tag: "Embedded",
    tagClass: "text-primary",
    stack: "Raspberry Pi 4 · Sony IMX500 · YOLOv8 · Arduino R4",
    blurb:
      "Real-time safety system detecting humans and animals on track and halting DC motor-driven bogies via GPIO-to-Arduino stop signals, with 360° servo scanning, ultrasonic sensing and a self-aligning auto-coupler.",
    href: "https://github.com/abhimnyu09/Safe_Shunting_of_Railways_Locomotives",
  },
  {
    image: projectRiscv,
    alt: "Processor pipeline circuit visualization",
    title: "RISC-V & Superscalar Processors",
    period: "2025",
    tag: "Hardware",
    tagClass: "text-accent-2",
    stack: "Verilog · Digital Design",
    blurb:
      "A RISC-V processor in Verilog plus a dual-issue superscalar design with scoreboarding, and a four-port RAM/ROM module — written and verified from scratch.",
    href: "https://github.com/abhimnyu09/RISC-V-Processor",
  },
];

const MORE_REPOS = [
  { name: "spheni", note: "In-memory vector search library in C++ with Python bindings", href: "https://github.com/abhimnyu09/spheni" },
  { name: "Attack-Graph Cloud Risk Scoring", note: "Attack-graph based cloud misconfiguration risk scoring", href: "https://github.com/abhimnyu09/Attack-Graph-Based-Cloud-Misconfiguration-Risk-Scoring" },
  { name: "persona-document-intelligence", note: "Persona-driven document understanding pipeline", href: "https://github.com/abhimnyu09/persona-document-intelligence" },
  { name: "pdf-outline-extractor", note: "Structured outline extraction from PDFs", href: "https://github.com/abhimnyu09/pdf-outline-extractor" },
  { name: "Quant_Projects", note: "Assorted quantitative research notebooks", href: "https://github.com/abhimnyu09/Quant_Projects" },
  { name: "book-It", note: "Full-stack booking app — TypeScript frontend + backend", href: "https://github.com/abhimnyu09/book-It_frontend" },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "SQL", "MATLAB", "Verilog", "HTML/CSS"],
  },
  {
    title: "Web & Frameworks",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "MySQL", "Tailwind CSS"],
  },
  {
    title: "AI / ML & CV",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas", "Matplotlib", "YOLOv8", "SwinUNETR", "MC Dropout"],
  },
  {
    title: "Automation & Cloud",
    skills: ["n8n", "REST APIs", "AWS Bedrock", "Slack Automation", "Vercel CI/CD"],
  },
  {
    title: "Embedded & Hardware",
    skills: ["Raspberry Pi 4", "Arduino", "Sony IMX500", "GPIO", "Picamera2", "HC-SR04"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code"],
  },
];

const EDUCATION = [
  { degree: "B.Tech — Electrical Engineering", institute: "Indian Institute of Technology, Mandi", score: "8.35 CGPA", year: "2023 – 27" },
  { degree: "Senior Secondary (XII)", institute: "Kohinoor International Academy", score: "92.4%", year: "2021 – 22" },
  { degree: "Secondary (X)", institute: "Kohinoor International Academy", score: "98%", year: "2019 – 20" },
];

const COURSEWORK = [
  {
    title: "Data Science & AI",
    items: ["Data Science I & II", "Probability & Statistics", "Machine Learning", "Deep Learning (CS-671)"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "DBMS", "Computer Networks", "Operating Systems", "OOPs", "Computer Organisation & Architecture"],
  },
];

const DIGITAL_PROFILES = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "LeetCode", href: "https://leetcode.com/u/reQJnyVbNO/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/abhimanyusharma" },
  { label: "CodeChef", href: "https://www.codechef.com/users/abhimanyu_09" },
  { label: "Codolio", href: "https://codolio.com/profile/abhimanyusharma" },
  { label: "Code360", href: "https://www.naukri.com/code360/profile/bc865a55-d8e7-4f9e-ab98-540fb0a3b73f" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

const ACHIEVEMENTS = [
  "Top 10% institute-wide merit list — earned a competitive branch upgrade to Electrical Engineering",
  "NDA triple qualifier — cleared the exam thrice and screened in at SSB (IAF & IA)",
  "Student Representative, Career & Placement Cell, IIT Mandi",
  "Coordinator, Hostels General Championship '25 — Volleyball",
  "Core team member, Mountain Biking Club, IIT Mandi",
];

const INTERESTS = [
  { title: "Volleyball", note: "Coordinated the hostel championship" },
  { title: "Mountain Biking", note: "Core team, IIT Mandi club" },
  { title: "Photography", note: "Chasing light in the Himalayas" },
  { title: "Travel & Food", note: "Mountains, and whatever's cooking there" },
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
      {/* film grain */}
      <div className="grain-overlay" />

      {/* living signal field — concentrated around the landing screen */}
      <div className="hero-signal-field pointer-events-auto absolute inset-x-0 top-0 h-[760px] overflow-hidden">
        <HeroSignalField />
        <div className="hero-signal-grid absolute inset-0" />
        <div className="animate-signal-scan absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
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
          href={resumeAsset.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-foreground/10"
        >
          Resume
        </a>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-10 pb-24 md:grid-cols-12 md:pt-16">
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> Open to 2027 opportunities
          </div>
          <h1 className="font-display text-6xl leading-[0.95] font-bold tracking-tight md:text-7xl">
            From silicon to
            <span className="block bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">
              shipped software.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Abhimanyu — an Electrical Engineering undergrad at IIT Mandi who works across
            automation, machine learning and embedded systems. Most recently I built Pulse, a
            Slack-native operational excellence bot, as a Software Development Intern at Expedia
            Group.
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
                8.35<span className="text-primary">/10</span>
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">CGPA</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">19</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Public repos
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">IIT Mandi</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                B.Tech · Electrical
              </div>
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

      {/* marquee ticker */}
      <div className="relative z-10 overflow-hidden border-y border-foreground/10 bg-foreground/[0.02] py-4 backdrop-blur-sm">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10">
              {[
                "IIT Mandi",
                "Expedia Group",
                "Electrical Engineering",
                "Machine Learning",
                "Embedded Systems",
                "Automation",
                "Verilog",
                "n8n",
                "AWS Bedrock",
                "YOLOv8",
                "LightGBM",
                "Next.js",
              ].map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="flex items-center gap-10 font-display text-sm tracking-[0.2em] text-foreground/50 uppercase"
                >
                  {word}
                  <span className="size-1.5 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* about + academics */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-24">
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h2 className="font-display text-xl font-semibold">About me</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              I like problems that cross layers — a YOLOv8 model on a Raspberry Pi stopping a train
              bogie, a Verilog pipeline I can trace by hand, an n8n workflow that turns a Slack
              message into a live dashboard. Electrical Engineering at IIT Mandi gave me the
              hardware intuition; embedded work, web development, ML and DSA gave me the rest.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Off the keyboard: volleyball, mountain biking around Mandi, a camera, and a long list
              of places to eat at.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
            <h2 className="font-display text-xl font-semibold">Education</h2>
            <div className="mt-5 space-y-4">
              {EDUCATION.map((row) => (
                <div
                  key={row.degree}
                  className="flex items-start justify-between gap-4 border-b border-foreground/10 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{row.degree}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{row.institute}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold text-primary">{row.score}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{row.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {COURSEWORK.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Experience" note="Roles & leadership" />
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
              <ul className="mt-4 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Featured projects" note="Built & shipped" />
        </div>
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => {
            const Card = project.href ? "a" : "div";
            return (
              <Card
                key={project.title}
                {...(project.href
                  ? { href: project.href, target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group block overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md transition hover:border-primary/40"
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
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg leading-snug font-semibold">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 text-xs ${project.tagClass}`}>{project.tag}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{project.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{project.blurb}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{project.stack}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="reveal-on-scroll mt-5 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-lg font-semibold">Also on GitHub</h3>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary transition hover:brightness-125"
            >
              github.com/abhimnyu09 →
            </a>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {MORE_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 transition hover:border-accent-2/40"
              >
                <p className="text-sm font-medium">{repo.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{repo.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="reveal-on-scroll">
          <SectionHeading title="Technical skills" note="Day to day" />
        </div>
        <div className="reveal-on-scroll grid grid-cols-1 gap-5 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 backdrop-blur-md transition hover:border-primary/30"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
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
            <h3 className="font-display text-xl font-semibold">Achievements & leadership</h3>
            <ul className="mt-5 space-y-3">
              {ACHIEVEMENTS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
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
            Open to software, ML and systems roles, collaborations, or a conversation about
            automation and embedded AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Download resume
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
            >
              {EMAIL}
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">+91 98138 79253 · Mandi, India</p>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span>© 2026 Abhimanyu Sharma — Built with intent.</span>
          <div className="flex gap-6">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`} className="transition hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
