import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, BookOpen, Radio, Cpu, ShieldCheck } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-surface/30 to-background py-24 border-t border-border/40">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,82,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,82,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[850px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 z-10 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Enterprise AI & Optical Wireless Engineering
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground max-w-3xl mx-auto leading-[1.12] font-display">
          Ready to{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Accelerate & Scale
          </span>{" "}
          Your Enterprise Infrastructure?
        </h2>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans font-normal">
          From multi-gigabit Free Space Optics (FSO) wireless deployments to zero-cost CapEx GPU cluster acceleration and production LLM security, TRUSTGRID.AI delivers deterministic performance.
        </p>

        {/* Quick Solution Pill Chips */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <Link
            to="/solutions/free-space-optics"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-surface/60 hover:bg-surface hover:border-primary/50 text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            <Radio className="w-3.5 h-3.5 text-primary" />
            <span>FSO Feasibility & Site Survey</span>
          </Link>
          <Link
            to="/gpu-performance-engineering"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-surface/60 hover:bg-surface hover:border-primary/50 text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>GPU Optimization Audit</span>
          </Link>
          <Link
            to="/ai-security"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-surface/60 hover:bg-surface hover:border-primary/50 text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero-Trust AI Guardrails</span>
          </Link>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 mb-14">
          {/* Card 1: Free Strategy Session */}
          <div className="group relative flex flex-col justify-between p-8 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl hover:border-primary/50 hover:bg-card/90 transition-all duration-300 text-left shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                Strategy Session
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                Schedule a 1-on-1 architecture review with our principal AI & Optical Wireless engineers.
              </p>
            </div>
            <Link to="/contact" search={{ subject: "Strategy Session: Architecture Review" }} className="w-full">
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2">
                Book Session <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>

          {/* Card 2: Request FSO & System Demo */}
          <div className="group relative flex flex-col justify-between p-8 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl hover:border-primary/50 hover:bg-card/90 transition-all duration-300 text-left shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border/60 text-muted-foreground mb-5 group-hover:scale-110 group-hover:text-primary transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                Request FSO / Platform Demo
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                Inspect high-speed FSO wireless hardware specs and GPU telemetry live in action.
              </p>
            </div>
            <Link to="/contact" search={{ subject: "Request Demo: FSO & Platform Walkthrough" }} className="w-full">
              <button className="w-full py-3 border border-border hover:border-primary/50 bg-surface/50 hover:bg-surface text-foreground font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-2">
                Request Walkthrough <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>

          {/* Card 3: Case Studies & Benchmarks */}
          <div className="group relative flex flex-col justify-between p-8 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl hover:border-primary/50 hover:bg-card/90 transition-all duration-300 text-left shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                Case Studies & ROI Reports
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                Explore real enterprise case studies showcasing up to 90% civil trenching savings & 3x GPU speedups.
              </p>
            </div>
            <Link to="/case-studies" className="w-full">
              <button className="w-full py-3 border border-border hover:border-primary/50 bg-surface/50 hover:bg-surface text-foreground font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-2">
                Explore Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Primary Action Button */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Link to="/contact">
            <button className="group flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:scale-[1.02] text-white font-bold rounded-2xl text-sm shadow-xl shadow-blue-500/20 transition-all duration-300 cursor-pointer">
              <span>Start Your Transformation Journey</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <span className="text-xs text-muted-foreground font-medium">
            🔒 NDA & Enterprise Compliance Guaranteed • Fast 24-Hour SLA Response
          </span>
        </div>
      </div>
    </section>
  );
}
