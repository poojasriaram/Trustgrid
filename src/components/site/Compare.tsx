import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const rows = [
  ["Engineering scope", "Chatbots & demos", "Full-Spectrum AI Engineering"],
  ["Agent capabilities", "Generic development", "Agentic AI specialists"],
  ["Infrastructure depth", "Limited", "GPU & cluster engineering experts"],
  ["Security posture", "Basic", "Enterprise Zero-Trust"],
  ["Architecture", "Point solutions", "Multi-Agent + Long-Memory systems"],
  ["Delivery", "Local teams", "5 global delivery centers, 24/7"],
  ["Outcomes", "Pilots", "Production AI at Fortune 500 scale"],
];

export function Compare() {
  return (
    <section className="relative border-b border-border/30 bg-background">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <SectionHeading
          eyebrow="Why TrustGrid.AI"
          title="Built for enterprises, not experiments"
          description="A side-by-side look at what makes TrustGrid.AI different from generic AI vendors."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg"
        >
          <div className="grid grid-cols-3 bg-surface border-b border-border/80 font-mono text-[10px] uppercase tracking-widest font-bold">
            <div className="p-5 text-muted-foreground">Dimension</div>
            <div className="p-5 text-muted-foreground border-l border-border/40">Traditional Vendors</div>
            <div className="p-5 text-accent border-l border-border/40 bg-primary/[0.04] flex items-center justify-between">
              <span>TrustGrid.AI</span>
              <span className="rounded bg-primary/25 border border-primary/40 px-1.5 py-0.5 text-[8px] tracking-wider text-accent font-sans font-bold">
                Leader
              </span>
            </div>
          </div>
          {rows.map(([dim, gen, us], i) => (
            <div
              key={dim}
              className={`grid grid-cols-3 border-b border-border/45 last:border-b-0 hover:bg-surface/30 transition-colors duration-200 ${
                i % 2 === 0 ? "bg-background" : "bg-surface/10"
              }`}
            >
              <div className="p-5 text-sm font-semibold text-foreground tracking-tight">{dim}</div>
              <div className="p-5 text-sm text-muted-foreground border-l border-border/40 flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 text-destructive/80" />
                </div>
                <span>{gen}</span>
              </div>
              <div className="p-5 text-sm text-foreground font-medium border-l border-border/40 bg-primary/[0.015] flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-foreground/95">{us}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
