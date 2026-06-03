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
    <section className="relative border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why TrustGrid.AI"
          title="Built for enterprises, not experiments"
          description="A side-by-side look at what makes TrustGrid.AI different from generic AI vendors."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-xl border border-border/60"
        >
          <div className="grid grid-cols-3 bg-surface/60 border-b border-border/60">
            <div className="p-5 text-xs uppercase tracking-wider text-muted-foreground">Dimension</div>
            <div className="p-5 text-xs uppercase tracking-wider text-muted-foreground border-l border-border/60">Traditional AI Vendors</div>
            <div className="p-5 text-xs uppercase tracking-wider text-accent border-l border-border/60 bg-primary/5">TrustGrid.AI</div>
          </div>
          {rows.map(([dim, gen, us], i) => (
            <div key={dim} className={`grid grid-cols-3 border-b border-border/40 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
              <div className="p-5 text-sm font-medium text-foreground">{dim}</div>
              <div className="p-5 text-sm text-muted-foreground border-l border-border/40 flex items-start gap-2">
                <X className="h-4 w-4 mt-0.5 shrink-0 text-destructive/70" />
                {gen}
              </div>
              <div className="p-5 text-sm text-foreground border-l border-border/40 bg-primary/[0.03] flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                {us}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
