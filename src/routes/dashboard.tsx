import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  Target,
  Brain,
  Briefcase,
  Award,
  ArrowUpRight,
  FileUp,
  ChevronRight,
  Star,
  Zap,
  BookOpen,
  CheckCircle2,
  Circle,
  LineChart,
  Users,
  MapPin,
  DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — AI Career Wealth Engine" },
      { name: "description", content: "Your career dashboard with AI-powered insights, skill gaps, and recommendations." },
    ],
  }),
  component: DashboardPage,
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const careerScore = 72;
  const marketValue = "$124,500";
  const potentialValue = "$178,000";
  const scoreColor = careerScore >= 70 ? "text-gold" : careerScore >= 50 ? "text-gold-light" : "text-muted-foreground";

  const skillGaps = [
    { skill: "Machine Learning", level: 35, target: 80, priority: "High" },
    { skill: "System Design", level: 55, target: 85, priority: "High" },
    { skill: "Cloud Architecture", level: 60, target: 80, priority: "Medium" },
    { skill: "Data Engineering", level: 45, target: 75, priority: "Medium" },
    { skill: "Leadership", level: 50, target: 70, priority: "Low" },
  ];

  const careerPaths = [
    {
      title: "Senior ML Engineer",
      salary: "$185K — $240K",
      growth: "+32%",
      match: 94,
      skills: ["TensorFlow", "MLOps", "Python", "System Design"],
      timeline: "8-12 months",
    },
    {
      title: "Staff Software Engineer",
      salary: "$200K — $280K",
      growth: "+28%",
      match: 89,
      skills: ["System Design", "Leadership", "Cloud", "Distributed Systems"],
      timeline: "12-18 months",
    },
    {
      title: "Engineering Manager",
      salary: "$190K — $260K",
      growth: "+25%",
      match: 82,
      skills: ["Leadership", "Communication", "Strategy", "Mentorship"],
      timeline: "10-14 months",
    },
  ];

  const jobs = [
    {
      company: "OpenAI",
      role: "Machine Learning Engineer",
      location: "San Francisco, CA",
      salary: "$220K — $300K",
      match: 96,
      posted: "2 days ago",
    },
    {
      company: "Stripe",
      role: "Senior Backend Engineer",
      location: "Remote",
      salary: "$195K — $265K",
      match: 91,
      posted: "1 week ago",
    },
    {
      company: "Databricks",
      role: "Data Platform Engineer",
      location: "Seattle, WA",
      salary: "$180K — $250K",
      match: 88,
      posted: "3 days ago",
    },
    {
      company: "Anthropic",
      role: "Software Engineer — AI Safety",
      location: "San Francisco, CA",
      salary: "$210K — $290K",
      match: 85,
      posted: "5 days ago",
    },
  ];

  const stats = [
    { label: "Career Score", value: careerScore, suffix: "/100", icon: Star, color: "text-gold" },
    { label: "Market Value", value: marketValue, suffix: "", icon: DollarSign, color: "text-gold" },
    { label: "Potential Value", value: potentialValue, suffix: "", icon: TrendingUp, color: "text-emerald-rich" },
    { label: "Skill Gaps", value: 12, suffix: " skills", icon: Target, color: "text-gold-light" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl text-foreground">Welcome back, Alex</h1>
              <p className="mt-1 text-muted-foreground">Here's your career intelligence for today</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-gold/30"
            >
              <FileUp className="h-4 w-4" />
              Upload Resume
            </Link>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                  <stat.icon className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <p className={`font-display text-2xl ${stat.color}`}>
                {stat.value}
                <span className="text-sm font-body text-muted-foreground ml-1">{stat.suffix}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-lg border border-border bg-card p-1 w-fit">
          {[
            { id: "overview", label: "Overview", icon: LineChart },
            { id: "skills", label: "Skill Gaps", icon: Target },
            { id: "paths", label: "Career Paths", icon: MapPin },
            { id: "jobs", label: "Jobs", icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gold/10 text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Career Score Card */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl text-card-foreground">Career Value Analysis</h3>
                <span className="text-sm text-muted-foreground">Last updated: Today</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="h-32 w-32 -rotate-90">
                      <circle
                        cx="64" cy="64" r="56"
                        fill="none" stroke="currentColor"
                        strokeWidth="8"
                        className="text-muted/20"
                      />
                      <circle
                        cx="64" cy="64" r="56"
                        fill="none" stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray={`${careerScore * 3.52} 351.2`}
                        strokeLinecap="round"
                        className="text-gold"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-4xl text-gold">{careerScore}</span>
                      <span className="text-xs text-muted-foreground">of 100</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-card-foreground">Career Value Score</p>
                  <p className="text-xs text-muted-foreground">Top 28% of peers</p>
                </div>
                <div className="sm:col-span-2 space-y-4">
                  {[
                    { label: "Technical Skills", score: 78, icon: Brain },
                    { label: "Experience Depth", score: 65, icon: Award },
                    { label: "Market Demand", score: 82, icon: TrendingUp },
                    { label: "Growth Velocity", score: 58, icon: Zap },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-gold" />
                          <span className="text-sm text-card-foreground">{item.label}</span>
                        </div>
                        <span className="text-sm font-medium text-gold">{item.score}/100</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl text-card-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: "Update Resume", desc: "Refresh your profile", icon: FileUp },
                  { label: "Practice Interview", desc: "AI mock interview", icon: Brain },
                  { label: "Browse Jobs", desc: "12 new matches", icon: Briefcase },
                  { label: "Learning Plan", desc: "Continue roadmap", icon: BookOpen },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="flex w-full items-center gap-3 rounded-xl border border-border bg-background p-3 text-left transition-all hover:border-gold/30 hover:bg-gold/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                      <action.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{action.label}</p>
                      <p className="text-xs text-muted-foreground">{action.desc}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>

            {/* Top Career Path */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-card-foreground">Top Recommended Path</h3>
                <button
                  onClick={() => setActiveTab("paths")}
                  className="text-sm text-gold hover:text-gold-light flex items-center gap-1"
                >
                  View all <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-display text-2xl text-foreground">{careerPaths[0].title}</h4>
                      <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                        {careerPaths[0].match}% Match
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {careerPaths[0].skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-background px-2.5 py-1 text-xs text-muted-foreground border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gold font-semibold">{careerPaths[0].salary}</span>
                      <span className="text-emerald-rich flex items-center gap-1">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        {careerPaths[0].growth}
                      </span>
                      <span className="text-muted-foreground">{careerPaths[0].timeline} to achieve</span>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light shrink-0"
                  >
                    <Zap className="h-4 w-4" />
                    Start Roadmap
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skill Gaps Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-xl text-card-foreground">Skill Gap Analysis</h3>
                <p className="text-sm text-muted-foreground">12 skills identified for your target roles</p>
              </div>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                Priority: High
              </span>
            </div>

            <div className="space-y-6">
              {skillGaps.map((gap) => (
                <div key={gap.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-card-foreground">{gap.skill}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        gap.priority === "High"
                          ? "bg-destructive/20 text-destructive"
                          : gap.priority === "Medium"
                          ? "bg-gold/10 text-gold"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {gap.priority}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {gap.level}% → {gap.target}%
                    </span>
                  </div>
                  <div className="relative h-3 rounded-full bg-muted/30 overflow-hidden">
                    <div
                      className="absolute h-full rounded-full bg-emerald-rich/40"
                      style={{ width: `${gap.target}%` }}
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${gap.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="absolute h-full rounded-full bg-gold"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Link
                      to="/"
                      className="text-xs text-gold hover:text-gold-light flex items-center gap-1"
                    >
                      <BookOpen className="h-3 w-3" />
                      Learn this skill
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Career Paths Tab */}
        {activeTab === "paths" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {careerPaths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-gold/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {path.match}% Match
                  </span>
                  <span className="text-xs text-muted-foreground">{path.timeline}</span>
                </div>
                <h4 className="font-display text-xl text-card-foreground mb-2">{path.title}</h4>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-gold font-semibold">{path.salary}</span>
                  <span className="text-emerald-rich flex items-center gap-1">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {path.growth}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {path.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-background px-2.5 py-1 text-xs text-muted-foreground border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  to="/"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gold/30 bg-gold/5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold/10"
                >
                  <Zap className="h-4 w-4" />
                  View Roadmap
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Jobs Tab */}
        {activeTab === "jobs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-gold/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-display text-lg text-card-foreground">{job.role}</h4>
                      <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-gold-light"
                    >
                      Apply
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
