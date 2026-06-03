import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Brain,
  Target,
  Briefcase,
  ChevronRight,
  Sparkles,
  Award,
  Zap,
  BarChart3,
} from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Career Wealth Engine — Discover Your Highest-Paying Career Path" },
      { name: "description", content: "AI-powered career growth platform that analyzes your skills, experience, and goals to recommend the highest-paying career paths and personalized learning roadmaps." },
      { property: "og:title", content: "AI Career Wealth Engine" },
      { property: "og:description", content: "Discover your highest-paying career path with AI-powered analysis." },
    ],
  }),
  component: LandingPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Career Intelligence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground"
            >
              Discover Your{" "}
              <span className="text-gold">Highest-Paying</span>{" "}
              Career Path
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Upload your resume. Our AI analyzes your skills, experience, and goals to calculate your Career Value Score, identify skill gaps, and recommend personalized paths to maximize your salary potential.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
              >
                Start Your Analysis
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary"
              >
                <BarChart3 className="h-5 w-5" />
                View Demo Dashboard
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl text-gold">$47K</p>
                <p className="text-sm text-muted-foreground">Avg. salary increase</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-3xl text-gold">12K+</p>
                <p className="text-sm text-muted-foreground">Careers analyzed</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-3xl text-gold">94%</p>
                <p className="text-sm text-muted-foreground">Interview success</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl text-foreground">
              Your Complete Career <span className="text-gold">Operating System</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From resume analysis to interview prep, every tool you need to accelerate your career growth in one powerful platform.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Career Analysis",
                desc: "Deep AI analysis of your skills, experience, and education to calculate your market value and potential.",
              },
              {
                icon: Target,
                title: "Skill Gap Detection",
                desc: "Identify exactly what skills you're missing for your target roles and get a prioritized learning plan.",
              },
              {
                icon: TrendingUp,
                title: "Salary Insights",
                desc: "Real-time market data shows what you should be earning and which career moves pay the most.",
              },
              {
                icon: Briefcase,
                title: "Job Matching",
                desc: "AI-matched job recommendations based on your profile, preferences, and growth trajectory.",
              },
              {
                icon: Award,
                title: "Interview Prep",
                desc: "Personalized mock interviews, question banks, and performance feedback powered by AI.",
              },
              {
                icon: Zap,
                title: "Learning Roadmaps",
                desc: "Step-by-step skill-building paths with curated courses, projects, and certifications.",
              },
              {
                icon: BarChart3,
                title: "Growth Analytics",
                desc: "Track your career score, skill progression, and salary potential over time with visual dashboards.",
              },
              {
                icon: Sparkles,
                title: "Placement Readiness",
                desc: "Comprehensive readiness assessment that tells you exactly when you're ready to apply and succeed.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl text-foreground">
              How It <span className="text-gold">Works</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to unlock your career potential.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Resume",
                desc: "Upload your resume or manually enter your skills, education, and experience. Our AI parses and structures everything.",
              },
              {
                step: "02",
                title: "Get Your Analysis",
                desc: "Receive a comprehensive Career Value Score, market value estimate, skill gap analysis, and personalized recommendations.",
              },
              {
                step: "03",
                title: "Grow & Succeed",
                desc: "Follow your custom learning roadmap, track applications, prepare for interviews, and watch your market value climb.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="relative rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-display text-5xl text-gold/20">{item.step}</span>
                <h3 className="font-display text-2xl text-card-foreground mt-4 mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="rounded-3xl border border-gold/20 bg-gradient-to-br from-emerald-deep/60 to-emerald-rich/40 p-12 text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl text-foreground">
              Ready to Maximize Your <span className="text-gold">Career Value</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of professionals who discovered their highest-paying path with AI Career Wealth Engine.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
              >
                Start Your Free Analysis
                <ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold">
                <span className="font-display text-sm font-bold text-primary-foreground">W</span>
              </div>
              <span className="font-display text-lg text-foreground">Wealth Engine</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI Career Wealth Engine. Maximize your potential.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
