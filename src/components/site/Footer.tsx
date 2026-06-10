import { Link } from "@tanstack/react-router";
import { Cpu, Bot, Brain, Shield, Mail, MapPin, ExternalLink } from "lucide-react";
import { SectionLink } from "./Header";

/* ─── Featured Offerings (highlight row) ───────────────────── */
const featuredOfferings = [
  {
    icon: Cpu,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    label: "GPU Performance Engineering",
    to: "/offerings#gpu-performance-engineering",
  },
  {
    icon: Bot,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    label: "AI Agents & Multi-Agent Systems",
    to: "/offerings#agentic-ai-development",
  },
  {
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    label: "LLM / RAG Optimization",
    to: "/offerings#llmops-services",
  },
  {
    icon: Shield,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    label: "NextGen AI Cybersecurity",
    to: "/offerings#ai-security",
  },
];

/* ─── Footer Link Columns ───────────────────────────────────── */
const footerCols = [
  {
    title: "GPU & Infrastructure",
    links: [
      { href: "/offerings#gpu-performance-engineering", label: "GPU Performance Engineering" },
      { href: "/offerings#ai-infrastructure-engineering", label: "AI Infrastructure Engineering" },
      { href: "/offerings#platform", label: "GPU-phi Cloud Platform" },
      { href: "/capabilities#gpu-optimization", label: "GPU Optimization" },
      { href: "/capabilities#cloud-gpu-optimization", label: "Cloud GPU Orchestration" },
      { href: "/capabilities#data-center-network-automation", label: "Data Center Networking" },
      { href: "/capabilities#energy-optimization", label: "Energy Optimization & ESG" },
    ],
  },
  {
    title: "AI Agents",
    links: [
      { href: "/offerings#agentic-ai-development", label: "Agentic AI Development" },
      { href: "/offerings#multi-agent-systems", label: "Multi-Agent Systems" },
      { href: "/offerings#long-memory-ai-systems", label: "Long-Memory AI Systems" },
      { href: "/offerings#agentops-services", label: "AgentOps Services" },
      { href: "/capabilities#multi-agent-fleet-orchestration", label: "Agent Fleet Orchestration" },
      { href: "/solutions#autonomous-agentic-workflows-multi-agent-orchestration", label: "Autonomous Workflows" },
    ],
  },
  {
    title: "LLM / RAG & Security",
    links: [
      { href: "/offerings#llmops-services", label: "LLMOps & LLM Engineering" },
      { href: "/capabilities#llm-optimization", label: "LLM Optimization" },
      { href: "/offerings#ai-security", label: "AI Security & Cyber Dom" },
      { href: "/capabilities#ai-security-cyber-dom-protection-mesh", label: "Zero-Trust AI Governance" },
      { href: "/solutions#cyber-dom-ai-security-mesh-sandbox-execution", label: "Secure Sandbox Execution" },
    ],
  },
  {
    title: "Solutions & Use Cases",
    links: [
      { href: "/solutions#mega-scale-gpu-data-center-private-gpu-cloud-architecture", label: "GPU Data Center Architecture" },
      { href: "/solutions#production-grade-llm-engineering-finetuning-systems", label: "Enterprise LLM Systems" },
      { href: "/solutions#cyber-dom-ai-security-mesh-sandbox-execution", label: "Cyber Dom Security Mesh" },
      { href: "/use-cases", label: "Sovereign AI Initiatives" },
      { href: "/use-cases", label: "High-Frequency Trading" },
      { href: "/use-cases", label: "Regulated AI Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About TrustGrid.AI" },
      { href: "/about#case-studies", label: "Case Studies" },
      { href: "/about#insights", label: "Insights & Blog" },
      { href: "/about#contact", label: "Contact Us" },
      { href: "/offerings", label: "All Offerings" },
      { href: "/capabilities", label: "All Capabilities" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/20">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">

        {/* Featured Offerings Strip */}
        <div className="mb-14 pb-10 border-b border-border/30">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Core Offerings
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredOfferings.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-border/40 hover:border-primary/40 bg-surface/20 hover:bg-surface/50 transition-all group"
              >
                <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                  {item.label}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground/40 group-hover:text-accent ml-auto shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Main link grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1 sm:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-display text-base font-semibold">
                TRUSTGRID<span className="text-accent">.AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Full-Spectrum AI Engineering — GPU kernels to autonomous enterprises, built for reliability and Zero-Trust safety.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent/60" />
                5 Global Delivery Centers
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent/60" />
                24/7 Enterprise Support
              </div>
            </div>
          </div>

          {/* Hidden spacer on lg */}
          <div className="hidden lg:block" />

          {/* Link columns — span 3 on lg */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3.5">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <SectionLink
                        href={l.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-snug"
                      >
                        {l.label}
                      </SectionLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TrustGrid.AI — Engineering AI systems that scale.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted-foreground">
              GPU · AI Agents · LLM/RAG · Cybersecurity
            </p>
            <Link to="/contact" className="text-xs text-accent hover:text-foreground transition-colors font-medium">
              Book a Session →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
