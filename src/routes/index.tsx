import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Code2,
  Hammer,
  Radio,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { NeuralBg } from "../components/NeuralBg";
import { EnrollForm } from "../components/EnrollForm";
import { WhatsAppFab } from "../components/WhatsAppFab";
import logo from "../assets/velolearn-logo.jpeg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "VeloLearn — Master Agentic AI by Building Real Systems" },
      {
        name: "description",
        content:
          "Live 3-month bootcamp to ship production agentic AI: 90 hours, 15 modules, real systems. Cohort enrolling now.",
      },
      { property: "og:title", content: "VeloLearn — Agentic AI Bootcamp" },
      {
        property: "og:description",
        content: "90 hours · 15 modules · 3 months. Build real agentic systems with live mentors.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap",
      },
    ],
  }),
});

const modules = [
  ["01", "Intro to AI & Agentic AI", 4],
  ["02", "Python for GenAI", 8],
  ["03", "Prompt Engineering", 6],
  ["04", "LLM APIs & Structured Outputs", 6],
  ["05", "Knowledge Grounding & RAG", 5],
  ["06", "Context Management & Memory", 6],
  ["07", "Agentic AI Fundamentals", 5],
  ["08", "Tool Use & Function Calling", 6],
  ["09", "Single-Agent Systems", 6],
  ["10", "Agentic RAG", 4],
  ["11", "Multi-Agent Orchestration", 7],
  ["12", "Guardrails & Responsible AI", 4],
  ["13", "Evaluating & Debugging", 5],
  ["14", "Deployment & Production", 3],
  ["15", "Capstone Project", 10],
] as const;

const pillars = [
  {
    icon: Hammer,
    title: "Learn by Building",
    body: "Every module ships a working artifact — agents, pipelines, evals. No passive lectures.",
  },
  {
    icon: Radio,
    title: "Live Sessions",
    body: "Twice-weekly cohort calls with practitioners shipping agents in production today.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    body: "Portfolio reviews, mock interviews, and intros to teams hiring AI engineers.",
  },
  {
    icon: Brain,
    title: "Agentic AI Focus",
    body: "Tool use, planning, memory, multi-agent orchestration — the stack of the next decade.",
  },
];

const testimonials = [
  {
    quote:
      "I went from prompt-hacking ChatGPT to deploying a 4-agent research system at work. The capstone became my interview piece.",
    name: "Vamsi Gamidi",
    role: "ML Engineer, Fintech",
  },
  {
    quote:
      "The orchestration module alone was worth it. Cleanest mental model for multi-agent flows I've seen anywhere.",
    name: "Pruthvi raju Nallaparaju",
    role: "Staff Engineer, SaaS",
  },
  {
    quote:
      "Live sessions made the difference. Real architectures, real failure modes, real debugging — not toy demos.",
    name: "Manasa Datara",
    role: "AI Engineer",
  },
];

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#results", label: "Results" },
];

const totalHours = modules.reduce((s, m) => s + (m[2] as number), 0);

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Curriculum />
      <Results />
      <CtaSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
          <img
            src={logo}
            alt="VeloLearn Consulting logo"
            className="h-24 w-24 object-contain"
          />
          {/* <span className="brand-gradient-text">VeloLearn</span> */}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#enroll"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Enroll <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0">
        <NeuralBg />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Live cohort enrolling
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Master{" "}
          <span className="text-primary text-glow">Agentic AI</span>
          <br />
          by Building Real Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          A live 3-month cohort for engineers who want to ship production agents — not toy demos.
          Tool use, RAG, orchestration, evals, deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Enroll in next cohort <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
          >
            View curriculum
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    ["90", "hours"],
    ["15", "modules"],
    ["3", "months"],
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-6 py-10 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="font-display text-4xl font-bold text-primary sm:text-5xl">{n}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
        <Sparkles className="h-3.5 w-3.5" /> {kicker}
      </div>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          kicker="How it works"
          title="A bootcamp wired for builders."
          sub="Four pillars that turn theory into shipped systems."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="hover-lift rounded-xl border border-border bg-surface p-6"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section id="curriculum" className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Curriculum"
            title="15 modules. 90 hours. Zero filler."
            sub="From Python foundations to multi-agent orchestration and production deployment."
          />
          <div className="mb-14 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 font-mono text-sm text-primary">
            Total: {totalHours} hrs
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(([num, title, hrs], i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
              className="group relative flex items-start gap-4 bg-surface p-6 transition-colors hover:bg-card"
            >
              <span className="font-mono text-sm font-medium text-primary">{num}</span>
              <div className="flex-1">
                <h3 className="font-display font-semibold leading-snug">{title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{hrs} hrs</p>
              </div>
              <Code2 className="h-4 w-4 text-muted-foreground/40 transition-colors group-hover:text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading kicker="Results" title="Engineers shipping in production." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="hover-lift flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="enroll" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Next cohort starts <span className="text-primary">soon</span>.
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Apply below — we'll continue the conversation on WhatsApp.
        </p>
        <div className="mt-10">
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5 font-display font-bold text-foreground">
          <img src={logo} alt="VeloLearn Consulting logo" className="h-8 w-8 object-contain" />
          <span className="brand-gradient-text">VeloLearn</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VeloLearn. Engineered for builders.
        </p>
      </div>
    </footer>
  );
}
