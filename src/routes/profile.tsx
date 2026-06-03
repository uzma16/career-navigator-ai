import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  GraduationCap,
  MapPin,
  Globe,
  Save,
  FileText,
  Bell,
  Shield,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile Settings — AI Career Wealth Engine" },
      { name: "description", content: "Manage your profile, preferences, and account settings." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="font-display text-3xl text-foreground">Profile Settings</h1>
            <p className="mt-1 text-muted-foreground">Manage your profile, career preferences, and account.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-2 space-y-1">
                {[
                  { id: "profile", label: "Profile", icon: User },
                  { id: "career", label: "Career Info", icon: Briefcase },
                  { id: "notifications", label: "Notifications", icon: Bell },
                  { id: "privacy", label: "Privacy", icon: Shield },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-gold/10 text-gold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === "profile" && (
                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold font-display text-2xl">
                      A
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-card-foreground">Alex Morgan</h3>
                      <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { label: "Full Name", value: "Alex Morgan", icon: User },
                      { label: "Email", value: "alex.morgan@example.com", icon: Mail },
                      { label: "Location", value: "San Francisco, CA", icon: MapPin },
                      { label: "Website", value: "alexmorgan.dev", icon: Globe },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <label className="block text-sm font-medium text-card-foreground mb-2">Bio</label>
                    <textarea
                      defaultValue="Passionate software engineer with 5+ years of experience building scalable systems. Interested in ML, distributed systems, and high-growth startups."
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "career" && (
                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                  <h3 className="font-display text-xl text-card-foreground">Career Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { label: "Current Role", value: "Senior Software Engineer", icon: Briefcase },
                      { label: "Years of Experience", value: "5", icon: GraduationCap },
                      { label: "Highest Education", value: "B.S. Computer Science", icon: GraduationCap },
                      { label: "Target Role", value: "Staff Engineer / ML Engineer", icon: FileText },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
                  <h3 className="font-display text-xl text-card-foreground">Notification Preferences</h3>
                  {[
                    { label: "Job recommendations", desc: "Get AI-matched job alerts", checked: true },
                    { label: "Salary insights", desc: "Market value and trend updates", checked: true },
                    { label: "Interview reminders", desc: "Upcoming mock interview sessions", checked: false },
                    { label: "Weekly digest", desc: "Career progress and skill updates", checked: true },
                    { label: "New course alerts", desc: "When new relevant courses are added", checked: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer">
                        <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                        <div className="h-5 w-9 rounded-full bg-muted peer-checked:bg-gold transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4" />
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "privacy" && (
                <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
                  <h3 className="font-display text-xl text-card-foreground">Privacy & Security</h3>
                  {[
                    { label: "Profile visibility", desc: "Make your profile visible to recruiters", checked: true },
                    { label: "Share salary data", desc: "Anonymously contribute to salary insights", checked: false },
                    { label: "AI training data", desc: "Allow resume data to improve AI models", checked: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer">
                        <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                        <div className="h-5 w-9 rounded-full bg-muted peer-checked:bg-gold transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4" />
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
