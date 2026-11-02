import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Github, Lock, Mail } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in to Arcly — AI Career Wealth Engine" },
      { name: "description", content: "Sign in to see your Career Value Score, closest offer, and two-week plan to raise your ceiling." },
      { property: "og:title", content: "Sign in to Arcly" },
      { property: "og:description", content: "Sign in to see your Career Value Score, closest offer, and two-week plan to raise your ceiling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 11v2.6h6.1c-.3 1.6-1.9 4.7-6.1 4.7a6.9 6.9 0 0 1 0-13.8c2 0 3.3.8 4.1 1.5l2.6-2.5C16.9 1.9 14.7 1 12 1a11 11 0 1 0 0 22c6.4 0 10.6-4.5 10.6-10.8 0-.7-.1-1.3-.2-1.9H12z" />
    </svg>
  );
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left — editorial green panel */}
      <div className="dot-grid relative flex min-h-[60vh] flex-col bg-emerald-rich lg:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-deep/40" />
        <div className="relative flex items-center justify-between px-8 pt-8 lg:px-16 lg:pt-12">
          <Link to="/" className="font-display text-3xl text-cream">
            Arcly
          </Link>
        </div>

        <div className="relative mt-auto px-8 pb-16 lg:px-16 lg:pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">The Career OS</p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-xl font-display text-5xl leading-[1.05] text-cream lg:text-[64px]"
          >
            You'll never wonder{" "}
            <em className="italic">"am I worth more"</em> again.
          </motion.h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/85">
            Sign in to see your Career Value Score, closest offer, and two-week plan to raise your ceiling.
          </p>
        </div>
      </div>

      {/* Right — sign-in form */}
      <div className="flex items-center justify-center px-6 py-14 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Welcome back</p>
          <h2 className="mt-3 font-display text-5xl text-foreground">Sign in to Arcly.</h2>

          <div className="mt-10 flex gap-4">
            <button
              type="button"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 bg-card text-sm font-medium text-primary transition-colors hover:bg-accent"
            >
              <GoogleIcon className="h-4 w-4" />
              Google
            </button>
            <button
              type="button"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 bg-card text-sm font-medium text-primary transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </button>
          </div>

          <p className="mt-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Or</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-6 space-y-5"
          >
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aarav@arcly.io"
                  className="h-12 w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="h-12 w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <Link
              to="/dashboard"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </form>

          <p className="mt-8 text-sm text-foreground">
            New to Arcly?{" "}
            <Link to="/signup" className="text-primary underline-offset-4 hover:underline">
              Create an account
            </Link>
          </p>

          <Link to="/" className="mt-10 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← Back to site
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
