import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Map,
  Briefcase,
  MessagesSquare,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcly — The Career Operating System" },
      { name: "description", content: "Arcly reads your resume, scores your market value, closes your skill gaps, and rehearses your interviews — so every week your salary ceiling moves up, not sideways." },
      { property: "og:title", content: "Arcly — The career operating system for what you'll become." },
      { property: "og:description", content: "Score your market value, close your skill gaps, and rehearse your interviews with Arcly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------- Score ring (78% arc) ---------- */
function ScoreRing() {
  const r = 104;
  const c = 2 * Math.PI * r;
  const pct = 0.78;
  return (
    <div className="relative mx-auto h-[260px] w-[260px]">
      <svg viewBox="0 0 260 260" className="h-full w-full -rotate-90">
        <circle cx="130" cy="130" r={r} fill="none" strokeWidth="18" className="stroke-[oklch(0.90_0.02_95)]" />
        <circle
          cx="130"
          cy="130"
          r={r}
          fill="none"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${c * pct} ${c}`}
          className="stroke-primary"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-7xl leading-none text-foreground">78</span>
        <span className="mt-2 font-mono text-[11px] tracking-[0.25em] text-muted-foreground">CAREER VALUE</span>
      </div>
    </div>
  );
}

const heroAvatars = [
  "https://i.pravatar.cc/72?img=32",
  "https://i.pravatar.cc/72?img=47",
  "https://i.pravatar.cc/72?img=12",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============================= NAV ============================= */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-3xl leading-none text-foreground">Arcly</span>
            <span className="text-lg text-primary">•</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#loops" className="text-[15px] text-foreground/80 transition-colors hover:text-foreground">Product</a>
            <a href="#loops" className="text-[15px] text-foreground/80 transition-colors hover:text-foreground">How it works</a>
            <Link to="/signup" className="text-[15px] text-foreground/80 transition-colors hover:text-foreground">Pricing</Link>
            <Link to="/signup" className="text-[15px] text-foreground/80 transition-colors hover:text-foreground">Stories</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/login" className="hidden text-[15px] text-foreground/80 transition-colors hover:text-foreground sm:block">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden">
        {/* faint editorial grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
        {/* soft glow behind the score card */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-[-60px] h-[560px] w-[720px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16">
          <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_1fr]">
            {/* left column */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-[0.12em] text-foreground/80">v1.0 · Career OS is live</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mt-8 font-display text-[56px] leading-[1.02] text-foreground sm:text-[72px] lg:text-[88px]"
              >
                The career{" "}
                <em className="text-primary">operating system</em>{" "}
                for what you'll become.
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Arcly reads your resume, scores your market value, closes your skill gaps,
                and rehearses your interviews — so every week your salary ceiling moves
                up, not sideways.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  Get my Career Value Score
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-full border border-foreground/25 px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary"
                >
                  See a live dashboard
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {heroAvatars.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <p className="text-[15px] text-muted-foreground">
                  <span className="font-semibold text-foreground">24,318 candidates</span> grew their score last month.
                </p>
              </motion.div>
            </motion.div>

            {/* right column — score card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mt-6 lg:mt-2"
            >
              {/* floating match card */}
              <div className="absolute -top-12 right-0 z-20 w-64 rounded-2xl border border-border bg-card p-5 shadow-[0_16px_40px_-16px_rgba(20,50,40,0.25)]">
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">MATCH · 94</p>
                <p className="mt-1.5 font-display text-lg text-foreground">Lincar · Product Eng</p>
                <p className="mt-1 font-mono text-sm text-foreground/85">$95k – $140k</p>
              </div>

              <div className="relative z-10 rounded-3xl border border-border bg-card px-8 pb-8 pt-10 shadow-[0_24px_60px_-24px_rgba(20,50,40,0.18)]">
                <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground">LIVE · AARAV S.</p>
                <h2 className="mt-2 font-display text-3xl text-foreground">Career Value Score</h2>

                <div className="mt-6">
                  <ScoreRing />
                  <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-mono text-xs tracking-[0.08em] text-foreground/85">+6 · vs. market median</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: "MARKET VALUE", value: "$132k" },
                    { label: "DEMAND", value: "92" },
                    { label: "READINESS", value: "66" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-secondary px-3 py-4 text-center">
                      <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 font-display text-2xl text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating next-action card */}
              <div className="absolute -bottom-10 -left-6 z-20 w-72 rounded-2xl border border-border bg-card p-5 shadow-[0_16px_40px_-16px_rgba(20,50,40,0.25)] sm:-left-10">
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">NEXT ACTION</p>
                <p className="mt-1.5 font-display text-xl leading-snug text-foreground">Close the System Design gap.</p>
                <p className="mt-1.5 text-sm text-muted-foreground">+12 to score in 2 weeks.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================= PLACED AT ============================= */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-10 gap-y-4 px-6 py-9 lg:px-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">PLACED AT</span>
          <div className="flex flex-1 flex-wrap items-center justify-between gap-x-8 gap-y-3">
            {["Vercel", "Razorpay", "Perplexity", "Figma", "Airbnb", "Zerodha", "Google", "Stripe"].map((name) => (
              <span key={name} className="font-display text-[22px] text-foreground/85">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= THE ARCLY OS ============================= */}
      <section id="loops" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.p variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
              THE ARCLY OS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-5 max-w-3xl font-display text-[44px] leading-[1.05] text-foreground sm:text-[60px]">
              Nine loops. One <em className="text-primary">compounding</em> career.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every module in Arcly makes the next one smarter. Your resume feeds your score,
              your score feeds your roadmap, your roadmap feeds your mock interviews.
            </motion.p>
          </motion.div>

          {/* row 1 — two wide cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                label: "01 · VALUE",
                title: "A single, honest score.",
                desc: "We benchmark your resume against 1.4M active candidates and 850K live openings to produce the Career Value Score — the number that moves offers.",
              },
              {
                icon: Target,
                label: "02 · GAPS",
                title: "Find the two topics that matter.",
                desc: "A radar of your skills against the target role. We rank gaps by salary impact, so you study only what pays.",
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-border bg-card p-9"
              >
                <div className="flex items-center gap-3">
                  <card.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.8} />
                  <span className="font-mono text-[11px] tracking-[0.25em] text-foreground/70">{card.label}</span>
                </div>
                <h3 className="mt-5 font-display text-[30px] leading-tight text-foreground">{card.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* row 2 — three cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Map,
                label: "03 · ROADMAP",
                title: "Ten-week roadmap, cut to the bone.",
                desc: "Hand-picked resources, weekly milestones, and honest checkpoints.",
              },
              {
                icon: Briefcase,
                label: "04 · JOBS",
                title: "Only the ones that pay.",
                desc: "Live salary intelligence per role, per city, per stack.",
              },
              {
                icon: MessagesSquare,
                label: "05 · REHEARSAL",
                title: "Mock the loop, not the vibes.",
                desc: "Behavioural, system design, and coding — with structured feedback and a readiness meter.",
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-border bg-card p-9"
              >
                <div className="flex items-center gap-3">
                  <card.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.8} />
                  <span className="font-mono text-[11px] tracking-[0.25em] text-foreground/70">{card.label}</span>
                </div>
                <h3 className="mt-5 font-display text-[28px] leading-tight text-foreground">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* row 3 — full width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-6 rounded-3xl border border-border bg-card p-9"
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="h-4.5 w-4.5 text-primary" strokeWidth={1.8} />
              <span className="font-mono text-[11px] tracking-[0.25em] text-foreground/70">06 · OPS</span>
            </div>
            <h3 className="mt-5 font-display text-[30px] leading-tight text-foreground">One board for every offer in motion.</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Track every stage — from applied to negotiation — with reminders that respect your calendar and follow-ups written for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================= CLOSING CTA ============================= */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={fadeInUp} className="mx-auto max-w-3xl font-display text-[44px] leading-[1.05] text-foreground sm:text-[56px]">
              Your salary ceiling is <em className="text-primary">a decision</em> away.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Get your Career Value Score in under five minutes — free.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Get started
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================= FOOTER ============================= */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-10">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-2xl leading-none text-foreground">Arcly</span>
            <span className="text-base text-primary">•</span>
          </Link>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            THE CAREER OPERATING SYSTEM
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/login" className="transition-colors hover:text-foreground">Sign in</Link>
            <Link to="/signup" className="transition-colors hover:text-foreground">Get started</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
