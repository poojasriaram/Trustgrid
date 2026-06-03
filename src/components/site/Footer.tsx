import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/ai-infrastructure-engineering", label: "AI Infrastructure" },
      { to: "/gpu-performance-engineering", label: "GPU Engineering" },
      { to: "/agentic-ai-development", label: "Agentic AI" },
      { to: "/multi-agent-systems", label: "Multi-Agent Systems" },
      { to: "/long-memory-ai-systems", label: "Long-Memory AI" },
      { to: "/llmops-services", label: "LLMOps" },
      { to: "/agentops-services", label: "AgentOps" },
      { to: "/ai-security", label: "AI Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/services", label: "Financial Services" },
      { to: "/services", label: "Healthcare" },
      { to: "/services", label: "Government & Defense" },
      { to: "/services", label: "Manufacturing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-display text-base font-semibold">
                TRUSTGRID<span className="text-accent">.AI</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Full-Spectrum AI Engineering. From GPUs to autonomous enterprises.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TrustGrid.AI. Engineering AI systems that scale.
          </p>
          <p className="text-xs text-muted-foreground">
            5 Global Delivery Centers · 24/7 Enterprise Support
          </p>
        </div>
      </div>
    </footer>
  );
}
