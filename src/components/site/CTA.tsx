import { Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto">
          Transform AI Investments into Enterprise Capabilities
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Whether you are optimizing GPU infrastructure, deploying autonomous agents, modernizing AI operations, or building enterprise-scale AI platforms, TRUSTGRID.AI provides the engineering expertise required to accelerate results.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group">
              Schedule an Executive Strategy Session
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface text-foreground backdrop-blur flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4" />
              Request a Technical Assessment
            </Button>
          </Link>
        </div>
        <div className="mt-12 text-sm font-semibold text-accent tracking-wider uppercase font-mono">
          TRUSTGRID.AI — Engineering the Future of Intelligent Enterprises.
        </div>
      </div>
    </section>
  );
}
