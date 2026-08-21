import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { value: "8", label: "AI Engineering Domains", sub: "End-to-end AI stack coverage.", gradient: "from-indigo-600 to-violet-600" },
  { value: "20+", label: "Industry Verticals", sub: "Regulated enterprise environments.", gradient: "from-orange-500 to-red-600" },
  { value: "5", label: "Global Delivery Centers", sub: "24/7 support worldwide.", gradient: "from-emerald-500 to-teal-600" },
  { value: "10x", label: "Faster Deployment", sub: "Proven frameworks, fast delivery.", gradient: "from-blue-600 to-cyan-500" },
];

const stats = [
  { value: "3–15x", label: "Performance Improvement", gradient: "from-rose-500 to-pink-600" },
  { value: "40–75%", label: "Cost Reduction", gradient: "from-amber-500 to-orange-600" },
  { value: "128+", label: "GPU Scaling", gradient: "from-violet-600 to-fuchsia-600" },
  { value: "24/7", label: "Global Support", gradient: "from-teal-500 to-green-600" },
];

export function Metrics() {
  return (
    <section id="metrics" className="relative border-b border-border/30 bg-background scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <SectionHeading
          eyebrow="Trust"
          title="Trusted AI Engineering Across the Full Spectrum"
          description="We transform AI investments into operational capabilities — across infrastructure, models, agents, and governance."
        />

        {/* Key highlights with descriptions */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="premium-card p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${h.gradient} bg-clip-text text-transparent font-display tracking-tight`}>
                  {h.value}
                </div>
                <div className="mt-4 text-sm font-semibold text-foreground/90 leading-tight">
                  {h.label}
                </div>
              </div>
              <div className="mt-3 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                {h.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Existing performance stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="premium-card p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent font-display tracking-tight`}>
                  {m.value}
                </div>
              </div>
              <div className="mt-4 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase font-mono border-t border-border/40 pt-3">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
