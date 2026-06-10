import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Cpu, Bot, Brain, Shield, LayoutGrid, Layers, Zap, Globe, BarChart3, Server, FileText, Users, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Mega-Menu Data ─────────────────────────────────────────── */

const homeItems = [
  { label: "Overview", href: "/" },
  { label: "Key Metrics & ROI", href: "/#metrics" },
  { label: "Enterprise Challenges", href: "/#challenges" },
  { label: "Engineering Approach", href: "/#approach" },
  { label: "Core Services", href: "/#services" },
  { label: "Client Case Studies", href: "/#case-studies" },
  { label: "Industries We Serve", href: "/#industries" },
  { label: "Technical Ecosystem", href: "/#tech-ecosystem" },
  { label: "Why Choose Us", href: "/#why-trustgrid" },
  { label: "Engagement Journey", href: "/#engagement-journey" },
  { label: "Insights & Thought Leadership", href: "/#insights" },
  { label: "Book Strategy Session", href: "/contact" },
];

const offeringsItems = [
  { label: "GPU Optimization", href: "/offerings#gpu-optimization" },
  { label: "LLM Optimization & AI Agents", href: "/offerings#llm-optimization-agents" },
  { label: "AI Cybersecurity", href: "/offerings#ai-cybersecurity" },
  { label: "AI Infrastructure Engineering", href: "/offerings#ai-infrastructure-engineering" },
];

const solutionsItems = [
  { label: "GPU & AI HPC Infrastructure", href: "/solutions#gpu-infra" },
  { label: "LLM Optimization & Enterprise Generative AI", href: "/solutions#llm-opt" },
  { label: "AI Agents & Autonomous Systems", href: "/solutions#agentic-ai" },
  { label: "AI Cybersecurity & Governance", href: "/solutions#security-gov" },
];

const capabilitiesItems = [
  { label: "GPU Optimization", href: "/capabilities#gpu-optimization" },
  { label: "Cloud GPU Orchestration", href: "/capabilities#cloud-gpu-optimization" },
  { label: "LLM Optimization", href: "/capabilities#llm-optimization" },
  { label: "AI Infrastructure Automation", href: "/capabilities#ai-optimization" },
  { label: "Data Center Network Automation", href: "/capabilities#data-center-network-automation" },
  { label: "Energy Optimization & ESG", href: "/capabilities#energy-optimization" },
  { label: "AI Security & Cyber Dom", href: "/capabilities#ai-security-cyber-dom-protection-mesh" },
  { label: "Hardened Sandbox Shell & Agent Execution", href: "/capabilities#hardened-sandbox-shell-agent-execution" },
  { label: "Multi-Agent Fleet Orchestration", href: "/capabilities#multi-agent-fleet-orchestration" },
  { label: "All Capabilities", href: "/capabilities" },
];

const useCasesItems = [
  { label: "Sovereign AI Initiatives", href: "/use-cases#sovereign-ai" },
  { label: "High-Frequency Trading", href: "/use-cases#high-frequency-trading" },
  { label: "Global SaaS Platforms", href: "/use-cases#global-saas" },
  { label: "Autonomous Operations", href: "/use-cases#autonomous-operations" },
  { label: "Regulated AI Security", href: "/use-cases#regulated-ai-security" },
  { label: "Secure Medical LLMOps", href: "/use-cases#secure-medical-llmops" },
];

const platformItems = [
  { label: "GPU-phi Orchestration", href: "/platform#gpu-phi-cloud-neutral-orchestration" },
  { label: "GPU FinOps Dashboard", href: "/platform#gpu-finops-dashboard" },
  { label: "Self-Healing Clusters", href: "/platform#self-healing-clusters" },
];

const aboutItems = [
  { label: "About TrustGrid.AI", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights & Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const featuredOfferings = [
  {
    icon: Cpu,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    label: "GPU Optimization",
    href: "/offerings#gpu-optimization",
  },
  {
    icon: Bot,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    label: "LLM Optimization & AI Agents",
    href: "/offerings#llm-optimization-agents",
  },
  {
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    label: "AI Cybersecurity",
    href: "/offerings#ai-cybersecurity",
  },
  {
    icon: Layers,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    label: "AI Infrastructure Engineering",
    href: "/offerings#ai-infrastructure-engineering",
  },
];

/* ─── Hash-aware navigation helper ──────────────────────────── */

/**
 * SectionLink navigates to an href that may contain a #hash anchor.
 * On same-page clicks it smooth-scrolls; on cross-page it navigates
 * then retries scrolling until the element appears in the DOM.
 */
export function SectionLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    const hashIdx = href.indexOf("#");
    const path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
    const hash = hashIdx >= 0 ? href.slice(hashIdx + 1) : "";
    const targetPath = path || "/";

    const scrollToHash = () => {
      if (!hash) return;
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 15) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    };

    // Same page – just scroll
    if (window.location.pathname === targetPath || (!path && window.location.pathname === "/")) {
      scrollToHash();
      if (hash) window.history.replaceState(null, "", `#${hash}`);
      return;
    }

    // Cross-page: push to history, dispatch popstate so TanStack Router picks it up
    const fullUrl = hash ? `${targetPath}#${hash}` : targetPath;
    window.history.pushState(null, "", fullUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
    setTimeout(scrollToHash, 150);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

/* ─── Dropdown Components ────────────────────────────────────── */

function HomeDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {homeItems.map((item) => (
          <SectionLink
            key={item.href + item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function OfferingsDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {offeringsItems.map((item) => (
          <SectionLink
            key={item.href + item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function SolutionsDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {solutionsItems.map((item) => (
          <SectionLink
            key={item.href + item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function CapabilitiesDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {capabilitiesItems.map((item) => (
          <SectionLink
            key={item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function UseCasesDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {useCasesItems.map((item) => (
          <SectionLink
            key={item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function PlatformDropdown() {
  return (
    <div className="nav-dropdown w-[600px]">
      <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
        {platformItems.map((item) => (
          <SectionLink
            key={item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

function AboutDropdown() {
  return (
    <div className="nav-dropdown w-[480px]">
      <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
        {aboutItems.map((item) => (
          <SectionLink
            key={item.label}
            href={item.href}
            className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-primary/[0.03] group/item transition-all"
          >
            <span className="text-accent font-semibold transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
              →
            </span>
            <span className="text-sm font-medium text-foreground/85 group-hover/item:text-primary transition-colors">
              {item.label}
            </span>
          </SectionLink>
        ))}
      </div>
    </div>
  );
}

/* ─── NavItem with Dropdown ──────────────────────────────────── */

type NavItemProps = {
  label: string;
  to: string;
  children?: React.ReactNode;
};

function NavItem({ label, to, children }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  if (!children) {
    return (
      <Link
        to={to}
        className="text-sm font-bold text-foreground transition-colors hover:text-primary px-3 py-1.5 rounded-md whitespace-nowrap"
        activeProps={{ className: "text-foreground bg-surface/50 px-3 py-1.5 rounded-md font-bold" }}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={to}
        className="flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-primary px-3 py-1.5 rounded-md whitespace-nowrap"
        activeProps={{ className: "text-foreground bg-surface/50 px-3 py-1.5 rounded-md flex items-center gap-1 font-bold" }}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-accent" : ""}`}
        />
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-[200]">
          <div className="animate-dropdown">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Accordion Section ───────────────────────────────── */

type MobileAccordionProps = {
  title: string;
  to: string;
  children: React.ReactNode;
  onClose: () => void;
};

function MobileAccordion({ title, to, children, onClose }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/30 last:border-0">
      <button
        className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-foreground"
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 pl-2">
          <Link
            to={to}
            onClick={onClose}
            className="block py-2 text-xs font-medium text-accent hover:text-foreground transition-colors"
          >
            View all →
          </Link>
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Main Header ─────────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Global dropdown styles */}
      <style>{`
        .nav-dropdown {
          background: oklch(1.0 0 0 / 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          box-shadow: 0 16px 36px -12px oklch(0.12 0.015 250 / 0.08), 0 0 0 1px oklch(0.45 0.18 260 / 0.05);
          padding: 1.5rem;
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-dropdown {
          animation: dropdown-in 0.18s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="w-full flex h-16 items-center justify-between px-6 md:px-8">

          {/* Brand */}
          <Link to="/" className="flex items-center group mr-6 shrink-0">
            <span className="font-display text-xl font-semibold tracking-tight">
              TRUSTGRID<span className="text-accent">.AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavItem label="Home" to="/">
              <HomeDropdown />
            </NavItem>
            <NavItem label="Offerings" to="/offerings">
              <OfferingsDropdown />
            </NavItem>
            <NavItem label="Solutions" to="/solutions">
              <SolutionsDropdown />
            </NavItem>
            <NavItem label="Capabilities" to="/capabilities">
              <CapabilitiesDropdown />
            </NavItem>
            <NavItem label="Use Cases" to="/use-cases">
              <UseCasesDropdown />
            </NavItem>
            <NavItem label="Platform" to="/platform">
              <PlatformDropdown />
            </NavItem>
            <NavItem label="About Us" to="/about">
              <AboutDropdown />
            </NavItem>
          </nav>

          {/* Action + Hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block">
              <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm">
                Book Strategy Session
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/40 bg-background max-h-[88vh] overflow-y-auto">
            <div className="px-5 py-4">

              {/* Featured strip */}
              <div className="mb-4 p-3 rounded-xl bg-surface/40 border border-border/40">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Key Offerings</p>
                <div className="grid grid-cols-2 gap-2">
                  {featuredOfferings.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface/60 transition-colors"
                    >
                      <div className={`p-1.5 rounded-md ${item.bg}`}>
                        <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                      </div>
                      <span className="text-xs font-medium text-foreground leading-tight">{item.label}</span>
                    </SectionLink>
                  ))}
                </div>
              </div>

              <MobileAccordion title="Home" to="/" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {homeItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="Offerings" to="/offerings" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {offeringsItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="Solutions" to="/solutions" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {solutionsItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="Capabilities" to="/capabilities" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {capabilitiesItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="Use Cases" to="/use-cases" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {useCasesItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="Platform" to="/platform" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {platformItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <MobileAccordion title="About Us" to="/about" onClose={() => setMobileOpen(false)}>
                <div className="space-y-1 py-1">
                  {aboutItems.map((item) => (
                    <SectionLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </SectionLink>
                  ))}
                </div>
              </MobileAccordion>

              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block mt-5">
                <Button size="default" className="w-full bg-primary text-primary-foreground text-sm">
                  Book Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
