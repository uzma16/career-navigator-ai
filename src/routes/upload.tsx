import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2, X, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Upload Resume — AI Career Wealth Engine" },
      { name: "description", content: "Upload your resume for AI-powered career analysis and recommendations." },
    ],
  }),
  component: UploadPage,
});

function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === "application/pdf" || droppedFile.name.endsWith(".pdf"))) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Steps */}
          <div className="mb-10 flex items-center justify-center gap-4">
            {[
              { label: "Sign Up", done: true },
              { label: "Upload Resume", done: done },
              { label: "Get Analysis", done: done },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    step.done
                      ? "bg-gold text-primary-foreground"
                      : i === 1 && !done
                      ? "bg-gold/20 text-gold border-2 border-gold"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {step.done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={`mt-1 text-xs ${step.done ? "text-gold" : "text-muted-foreground"}`}>
                    {step.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`h-px w-12 ${step.done ? "bg-gold" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-foreground">Upload Your Resume</h1>
            <p className="mt-2 text-muted-foreground">
              Our AI will analyze your skills, experience, and education to calculate your Career Value Score.
            </p>
          </div>

          {!done ? (
            <>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
                  isDragging
                    ? "border-gold bg-gold/5"
                    : file
                    ? "border-gold/30 bg-gold/5"
                    : "border-border bg-card hover:border-gold/30 hover:bg-gold/5"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {file ? (
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 mb-4">
                      <FileText className="h-7 w-7 text-gold" />
                    </div>
                    <p className="text-lg font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                      }}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="h-3.5 w-3.5" />
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 mb-4">
                      <Upload className="h-7 w-7 text-gold" />
                    </div>
                    <p className="text-lg font-medium text-foreground">
                      Drag & drop your resume here
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      or click to browse. Supports PDF, DOC, DOCX.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={startAnalysis}
                  disabled={!file || analyzing}
                  className={`inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-semibold transition-all ${
                    file && !analyzing
                      ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {analyzing ? (
                    <>
                      <Sparkles className="h-5 w-5 animate-spin" />
                      Analyzing with AI...
                    </>
                  ) : (
                    <>
                      Analyze My Career
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-gold/20 bg-gold/5 p-10 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                  <CheckCircle2 className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h2 className="font-display text-2xl text-foreground mb-2">Analysis Complete!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We've analyzed your resume and generated your Career Value Score, skill gaps, and personalized recommendations.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                View Your Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
