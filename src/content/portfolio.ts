import projectPulse from "@/assets/project-pulse.jpg";
import projectHft from "@/assets/project-hft.jpg";
import projectDsa from "@/assets/project-dsa.jpg";
import projectMedical from "@/assets/project-careerpulse.jpg";
import projectRailway from "@/assets/project-railway.jpg";
import projectRiscv from "@/assets/project-riscv.jpg";

export const EMAIL = "b23058@students.iitmandi.ac.in";
export const PHONE = "+91 98138 79253";
export const GITHUB = "https://github.com/abhimnyu09";
export const LINKEDIN = "https://linkedin.com/in/abhimanyu-sharma-2b213";
export const LEETCODE = "https://leetcode.com/u/reQJnyVbNO/";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type CaseStudyId = "pulse" | "shunting" | "riscv";

export type CaseStudy = {
  id: CaseStudyId;
  eyebrow: string;
  title: string;
  sections: { label: string; body: string | string[] }[];
  flowTitle: string;
  flow: { label: string; note?: string }[];
  concepts?: string[];
  stack: string[];
  href?: string;
  confidentialNote?: string;
};

export const CASE_STUDIES: Record<CaseStudyId, CaseStudy> = {
  pulse: {
    id: "pulse",
    eyebrow: "Expedia Group · Software Development Intern · Jun – Jul 2026",
    title: "Pulse — Operational Excellence Bot",
    flowTitle: "Architecture",
    flow: [
      { label: "Slack", note: "@Pulse start — self-serve request" },
      { label: "n8n orchestration", note: "Modular workflow, JavaScript nodes" },
      { label: "Scope resolution", note: "Org / service lookup via REST APIs" },
      { label: "Five parallel execution paths", note: "Per-service report fan-out" },
      { label: "Aggregation", note: "Daily directory + nightly OPEX jobs" },
      { label: "AI summaries", note: "AWS Bedrock / Claude" },
      { label: "Slack summary + HTML dashboard", note: "24-hour signed sessions" },
    ],
    sections: [
      {
        label: "Problem",
        body: "Operational health for Product Exp & Offers — SLOs, production readiness, hygiene, cloud cost, bugs and vulnerabilities — lives across many separate systems. Pulse brings it together on demand, from Slack.",
      },
      {
        label: "Approach",
        body: "A Slack-native bot backed by a modular n8n workflow that resolves the org/service scope of a request, fans out per-service report requests and consolidates the results.",
      },
      {
        label: "Integrations",
        body: ["Slack", "Internal REST APIs", "Jira", "CloudZero", "ServiceNow", "Singularity", "Wiz", "Core Quality", "SLO systems"],
      },
      {
        label: "AI & automation",
        body: "AWS Bedrock / Claude generates SLO and bug summaries, and turns Slack incident threads into recaps structured as Impact, Root Cause, Resolution and Follow-ups.",
      },
      {
        label: "Outcome",
        body: "Teams get self-serve reports in Slack and webhook-served HTML dashboards with filters, service search and time controls — secured by 24-hour signed sessions.",
      },
    ],
    stack: ["n8n", "JavaScript", "Slack", "REST APIs", "AWS Bedrock"],
    confidentialNote:
      "Internship work — described at a high level only. No internal URLs, data or proprietary code are shown.",
  },
  shunting: {
    id: "shunting",
    eyebrow: "Embedded AI · Hardware · Jan – Apr 2025",
    title: "Safe Shunting of Railway Locomotives",
    flowTitle: "Detection-to-stop pipeline",
    flow: [
      { label: "AI camera", note: "Sony IMX500 · Picamera2" },
      { label: "YOLOv8 detection", note: "Humans and animals on track" },
      { label: "Raspberry Pi 4", note: "Decision logic" },
      { label: "Servo + ultrasonic sensing", note: "360° scan · HC-SR04" },
      { label: "GPIO stop signal", note: "Pi → Arduino" },
      { label: "Arduino R4", note: "Motor control" },
      { label: "DC motor bogie halts", note: "Stop" },
    ],
    sections: [
      {
        label: "Problem",
        body: "During shunting, people or animals on the track can go unseen by the operator. The system needs to detect them and stop the bogie on its own, in real time.",
      },
      {
        label: "What I built",
        body: "A working prototype: on-camera YOLOv8 detection feeding a Raspberry Pi, which scans with a 360° servo and ultrasonic sensor and sends a GPIO stop signal to an Arduino driving the DC-motor bogies.",
      },
      {
        label: "Hardware / software integration",
        body: ["Raspberry Pi 4", "Sony IMX500 AI camera", "YOLOv8", "Arduino R4", "Servo scanning", "HC-SR04 ultrasonic", "GPIO signalling", "DC motor control"],
      },
      {
        label: "Extra",
        body: "A self-aligning auto-coupler for connecting bogies.",
      },
    ],
    stack: ["Raspberry Pi 4", "Sony IMX500", "YOLOv8", "Arduino R4", "Python"],
    href: "https://github.com/abhimnyu09/Safe_Shunting_of_Railways_Locomotives",
  },
  riscv: {
    id: "riscv",
    eyebrow: "Computer Architecture · Verilog · 2025",
    title: "RISC-V & Superscalar Processors",
    flowTitle: "Conceptual datapath",
    flow: [
      { label: "Instruction Fetch" },
      { label: "Decode" },
      { label: "Register / Issue", note: "Scoreboard tracks dependencies" },
      { label: "Execute", note: "Dual-issue" },
      { label: "Memory", note: "Four-port RAM / ROM" },
      { label: "Writeback" },
    ],
    sections: [
      {
        label: "What I built",
        body: "A RISC-V processor in Verilog, a dual-issue superscalar design using scoreboarding, and a four-port RAM/ROM memory module — written and verified from scratch.",
      },
      {
        label: "Why it matters",
        body: "It's the layer under everything else I build: how instructions actually move through hardware, and what it takes to issue two at once safely.",
      },
    ],
    concepts: ["RISC-V", "Verilog", "Superscalar (dual-issue)", "Scoreboarding", "Memory design (RAM/ROM)", "Digital design"],
    stack: ["Verilog", "Digital Design"],
    href: "https://github.com/abhimnyu09/RISC-V-Processor",
  },
};

export type Project = {
  image: string;
  alt: string;
  title: string;
  period: string;
  tag: string;
  problem: string;
  built: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  caseStudy?: CaseStudyId;
};

export const PROJECTS: Project[] = [
  {
    image: projectPulse,
    alt: "Illustration of an operations dashboard",
    title: "Pulse — Operational Excellence Bot",
    period: "Jun – Jul '26 · Expedia",
    tag: "Software · Automation",
    problem: "Operational health scattered across many systems.",
    built: "A Slack bot + n8n workflow that fans out per-service reports into Slack summaries and HTML dashboards.",
    stack: ["n8n", "JavaScript", "Slack", "REST APIs", "AWS Bedrock"],
    caseStudy: "pulse",
  },
  {
    image: projectRailway,
    alt: "Illustration of a locomotive safety detection system",
    title: "Safe Shunting of Railway Locomotives",
    period: "Jan – Apr '25",
    tag: "Embedded AI · Hardware",
    problem: "People and animals on track during shunting can go unseen.",
    built: "Real-time YOLOv8 detection on a Pi that halts DC-motor bogies via GPIO-to-Arduino stop signals.",
    stack: ["Raspberry Pi 4", "Sony IMX500", "YOLOv8", "Arduino R4"],
    href: "https://github.com/abhimnyu09/Safe_Shunting_of_Railways_Locomotives",
    caseStudy: "shunting",
  },
  {
    image: projectRiscv,
    alt: "Illustration of a processor pipeline circuit",
    title: "RISC-V & Superscalar Processors",
    period: "2025",
    tag: "Computer Architecture",
    problem: "Understanding how instructions really move through hardware.",
    built: "A RISC-V core, a dual-issue superscalar design with scoreboarding, and a four-port RAM/ROM — in Verilog.",
    stack: ["Verilog", "Digital Design"],
    href: "https://github.com/abhimnyu09/RISC-V-Processor",
    caseStudy: "riscv",
  },
  {
    image: projectHft,
    alt: "Illustration of a trading backtest chart",
    title: "HFT Strategy Backtester",
    period: "Jun – Jul '25",
    tag: "Quant · ML",
    problem: "Testing whether short-horizon signals survive trading costs.",
    built: "BTC/USDT pipeline: OHLCV bars, trade-flow imbalance, volatility features, LightGBM classifier, cost-aware backtest.",
    stack: ["Python", "Binance API", "LightGBM", "scikit-learn"],
    href: "https://github.com/abhimnyu09/High-Frequency-Trading-Strategy-Backtester",
  },
  {
    image: projectDsa,
    alt: "Illustration of an algorithm visualiser interface",
    title: "DSA Algorithms Visualiser",
    period: "Mar – May '25",
    tag: "Software · Algorithms",
    problem: "Algorithms are easier to learn when you can watch them run.",
    built: "Interactive visualiser for 20+ topics — sorting, trees, graphs, DP — with playback controls and random data.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    href: "https://dsa-visualiser-psi.vercel.app",
    linkLabel: "Live demo",
  },
  {
    image: projectMedical,
    alt: "Illustration of a medical diagnosis interface",
    title: "Multimodal Medical Diagnosis",
    period: "Dec '24 – Apr '25",
    tag: "ML · Computer Vision",
    problem: "Combining skin images and symptoms for a fuller first read.",
    built: "CNN classifier at 92% accuracy on HAM10000 plus LangChain symptom analysis and GPT recommendations.",
    stack: ["Python", "TensorFlow", "CNN", "OpenAI API"],
    href: "https://github.com/abhimnyu09/Multimodel_Medical_Diagnosis_using_Computer_Vision",
  },
];

export const MORE_REPOS = [
  { name: "spheni", note: "In-memory vector search library in C++ with Python bindings", href: "https://github.com/abhimnyu09/spheni" },
  { name: "Attack-Graph Cloud Risk Scoring", note: "Attack-graph based cloud misconfiguration risk scoring", href: "https://github.com/abhimnyu09/Attack-Graph-Based-Cloud-Misconfiguration-Risk-Scoring" },
  { name: "persona-document-intelligence", note: "Persona-driven document understanding pipeline", href: "https://github.com/abhimnyu09/persona-document-intelligence" },
  { name: "pdf-outline-extractor", note: "Structured outline extraction from PDFs", href: "https://github.com/abhimnyu09/pdf-outline-extractor" },
  { name: "Quant_Projects", note: "Assorted quantitative research notebooks", href: "https://github.com/abhimnyu09/Quant_Projects" },
  { name: "book-It", note: "Full-stack booking app — TypeScript frontend + backend", href: "https://github.com/abhimnyu09/book-It_frontend" },
];

export const EXPEDIA_POINTS = [
  { k: "Built", v: "Pulse — a Slack bot for on-demand Operational Excellence reporting for Product Exp & Offers." },
  { k: "Covers", v: "SLO, production readiness, hygiene, cloud cost, bugs and vulnerabilities in one request." },
  { k: "Architecture", v: "Modular n8n workflow with five independent execution paths, plus daily directory and nightly OPEX aggregation." },
  { k: "Integrations", v: "Slack, internal REST APIs, Jira, CloudZero, ServiceNow, Singularity, Wiz, Core Quality and SLO systems." },
  { k: "Dashboards", v: "Webhook-served HTML dashboards with filters, service search, time controls and 24-hour signed sessions." },
  { k: "AI", v: "AWS Bedrock / Claude for SLO and bug summaries and structured incident recaps from Slack threads." },
];

export const SECONDARY_ROLES = [
  {
    tag: "Mentoring",
    title: "Academic Mentor",
    org: "Physics Wallah",
    period: "",
    points: [
      "Mentored 500+ JEE aspirants through online sessions, structured study plans and doubt solving.",
      "Tracked progress and ran regular follow-ups with each student.",
    ],
  },
  {
    tag: "Leadership",
    title: "Student Representative",
    org: "Career & Placement Cell, IIT Mandi",
    period: "2025 – present",
    points: ["Company outreach, drive coordination and peer preparation support for the batch."],
  },
];

export const SKILL_GROUPS = [
  { title: "Languages", skills: ["C / C++", "Python", "JavaScript / TypeScript", "SQL", "Verilog", "MATLAB"] },
  { title: "Software", skills: ["React", "Next.js", "Node.js", "REST APIs", "MongoDB", "MySQL", "Git"] },
  { title: "AI / ML", skills: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "scikit-learn", "LightGBM"] },
  { title: "Systems / Embedded", skills: ["Raspberry Pi", "Arduino", "Sony IMX500", "GPIO", "Digital Design"] },
  { title: "Cloud / Automation", skills: ["AWS Bedrock", "n8n", "Slack automation", "Vercel"] },
];

export const SCHOOL = [
  { degree: "Senior Secondary (XII)", institute: "Kohinoor International Academy", score: "92.4%", year: "2021 – 22" },
  { degree: "Secondary (X)", institute: "Kohinoor International Academy", score: "98%", year: "2019 – 20" },
];

export const COURSEWORK = [
  {
    title: "Computer Science",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Computer Organisation & Architecture"],
  },
  {
    title: "AI / ML",
    items: ["Probability & Statistics", "Machine Learning", "Deep Learning (CS-671)", "Data Science I & II"],
  },
];

export const ACHIEVEMENTS = [
  "Top 10% institute-wide merit list — earned a competitive branch upgrade to Electrical Engineering",
  "NDA triple qualifier — cleared the exam three times and screened in at SSB (IAF & IA)",
];

export const LEADERSHIP = [
  "Student Representative, Career & Placement Cell, IIT Mandi",
  "Academic Mentor, Physics Wallah — 500+ JEE aspirants",
  "Coordinator, Hostels General Championship '25 — Volleyball",
  "Core team member, Mountain Biking Club, IIT Mandi",
];

export const PRIMARY_PROFILES = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "LeetCode", href: LEETCODE },
];

export const OTHER_PROFILES = [
  { label: "Codeforces", href: "https://codeforces.com/profile/abhimanyusharma" },
  { label: "CodeChef", href: "https://www.codechef.com/users/abhimanyu_09" },
  { label: "Codolio", href: "https://codolio.com/profile/abhimanyusharma" },
  { label: "Code360", href: "https://www.naukri.com/code360/profile/bc865a55-d8e7-4f9e-ab98-540fb0a3b73f" },
];

export const CURRENTLY = [
  { k: "Studying", v: "B.Tech Electrical Engineering @ IIT Mandi" },
  { k: "Building", v: "Software, ML & embedded systems" },
  { k: "Looking for", v: "2027 Software · ML · Systems roles" },
  { k: "Learning", v: "Deeper systems & backend engineering" },
];

export const INTERESTS = [
  { title: "Volleyball", note: "Coordinated the hostel championship" },
  { title: "Mountain Biking", note: "Core team, IIT Mandi club" },
  { title: "Photography", note: "Chasing light in the Himalayas" },
  { title: "Travel & Food", note: "Mountains, and whatever's cooking there" },
];
