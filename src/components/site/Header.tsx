import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Menu, X, ChevronDown, Cpu, Zap, Bot, Brain, Sparkles, Shield,
  Info, FileText, Mail, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
  {
    to: "/ai-infrastructure-engineering",
    label: "AI Infrastructure",
    desc: "Kubernetes, MLOps, cloud design",
    icon: Cpu,
  },
  {
    to: "/gpu-performance-engineering",
    label: "GPU Performance",
    desc: "CUDA kernel & cluster optimization",
    icon: Zap,
  },
  {
    to: "/agentic-ai-development",
    label: "Agentic AI",
    desc: "Autonomous workflow orchestrations",
    icon: Bot,
  },
  {
    to: "/long-memory-ai-systems",
    label: "Long-Memory AI",
    desc: "Vector databases & knowledge graphs",
    icon: Brain,
  },
  {
    to: "/services",
    label: "Generative AI",
    desc: "Enterprise RAG & multi-modal platforms",
    icon: Sparkles,
  },
  {
    to: "/ai-security",
    label: "AI Security",
    desc: "Zero Trust architecture & compliance",
    icon: Shield,
  },
];

const companyLinks = [
  {
    to: "/about",
    label: "About TrustGrid.AI",
    desc: "Our mandate, team and operations",
    icon: Info,
  },
  {
    to: "/case-studies",
    label: "Case Studies",
    desc: "Engineered outcomes in production",
    icon: FileText,
  },
  {
    to: "/blog",
    label: "Insights",
    desc: "Latest AI engineering research",
    icon: Sparkles,
  },
  {
    to: "/contact",
    label: "Contact Us",
    desc: "Schedule strategy consultations",
    icon: Mail,
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "company" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "services" | "company") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group mr-8" onClick={() => setActiveMenu(null)}>
          <span className="font-display text-xl font-semibold tracking-tight">
            TRUSTGRID<span className="text-accent">.AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Home Link */}
          <Link
            to="/"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md"
            activeProps={{ className: "text-foreground bg-surface/40" }}
            onClick={() => setActiveMenu(null)}
          >
            Home
          </Link>

          {/* Services Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1">
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-accent" : ""}`} />
            </button>

            <AnimatePresence>
              {activeMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 w-[540px]"
                >
                  <div className="rounded-xl border border-border/60 bg-background p-5 shadow-2xl grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 mb-2 border-b border-border/40 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-accent font-semibold">Capabilities Portfolio</span>
                      <Link to="/services" className="text-xs text-muted-foreground hover:text-accent flex items-center gap-0.5" onClick={() => setActiveMenu(null)}>
                        All Services <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setActiveMenu(null)}
                        className="group flex gap-3 p-3 rounded-lg hover:bg-surface/50 border border-transparent hover:border-border/40 transition-all"
                      >
                        <div className="h-9 w-9 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                          <s.icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {s.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-normal">
                            {s.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Case Studies Link */}
          <Link
            to="/case-studies"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md"
            activeProps={{ className: "text-foreground bg-surface/40" }}
            onClick={() => setActiveMenu(null)}
          >
            Case Studies
          </Link>

          {/* Insights Link */}
          <Link
            to="/blog"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md"
            activeProps={{ className: "text-foreground bg-surface/40" }}
            onClick={() => setActiveMenu(null)}
          >
            Insights
          </Link>

          {/* Company Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1">
              Company
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === "company" ? "rotate-180 text-accent" : ""}`} />
            </button>

            <AnimatePresence>
              {activeMenu === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-4 z-50 w-[300px]"
                >
                  <div className="rounded-xl border border-border/60 bg-background p-4 shadow-2xl flex flex-col gap-2">
                    {companyLinks.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setActiveMenu(null)}
                        className="group flex gap-3 p-2.5 rounded-lg hover:bg-surface/50 border border-transparent hover:border-border/40 transition-all"
                      >
                        <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                          <c.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                            {c.label}
                          </div>
                          <div className="text-[10px] text-muted-foreground mt-0.5 leading-normal">
                            {c.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Button & Menu Button */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base">
              Book Strategy Session
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">Services</div>
              <div className="grid gap-3.5 pl-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-base text-foreground hover:text-accent">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Company */}
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">Company</div>
              <div className="grid gap-3.5 pl-2">
                {companyLinks.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <c.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-base text-foreground hover:text-accent">{c.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="default" className="w-full bg-primary text-primary-foreground text-base">
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
