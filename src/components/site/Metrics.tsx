import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    value: "8",
    label: "Integrated AI Engineering Domains",
    sub: "Delivering end-to-end AI capabilities from infrastructure to autonomous systems.",
  },
  {
    value: "20+",
    label: "Industry Verticals",
    sub: "Deep experience across regulated and complex enterprise environments.",
  },
  {
    value: "5",
    label: "Global Delivery Centers",
    sub: "24/7 engineering and operational support.",
  },
  {
    value: "10x",
    label: "Faster Deployment",
    sub: "Accelerated implementation using proven frameworks and reusable architectures.",
  },
];

const stats = [
  { value: "3–15x", label: "Performance Improvement" },
  { value: "40–75%", label: "Cost Reduction" },
  { value: "128+", label: "GPU Scaling" },
  { value: "24/7", label: "Global Support" },
];

export function Metrics() {
  return (
    <section id="metrics" className="relative border-b border-border/40 bg-surface/20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Trust"
          title="Trusted AI Engineering Across the Full Spectrum"
          description="Organizations worldwide are investing billions into AI, yet many struggle with fragmented architectures, underutilized GPU infrastructure, disconnected data ecosystems, and AI initiatives that never reach production. TRUSTGRID.AI provides the engineering expertise required to transform AI investments into operational capabilities."
        />

        {/* Key highlights with descriptions */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-6 md:p-8 group hover:bg-surface/60 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">
                {h.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground/90">
                {h.label}
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {h.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Existing performance stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {stats.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background p-6 md:p-8 group hover:bg-surface/60 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">
                {m.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
