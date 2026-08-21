import { motion } from "framer-motion";
import {
  Wrench, Layers, ShieldCheck, BarChart3, Globe,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const differentiators = [
  {
    icon: Wrench,
    title: "Engineering-First Approach",
    desc: "We build production systems, not demonstrations.",
  },
  {
    icon: Layers,
    title: "Full-Spectrum Expertise",
    desc: "From infrastructure and GPUs to autonomous agents and AI governance.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Security and compliance embedded into every solution.",
  },
  {
    icon: BarChart3,
    title: "Measurable Business Outcomes",
    desc: "Every engagement is aligned with performance, efficiency, and ROI objectives.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    desc: "Flexible engagement options supported by international delivery capabilities.",
  },
];

export function WhyTrustGrid() {
  return (
    <section id="why-trustgrid" className="relative border-b border-border/30 bg-background scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <SectionHeading
          eyebrow="Why TRUSTGRID.AI"
          title="Why Leading Organizations Choose TRUSTGRID.AI"
          description="A partner built for the complexity, scale, and security requirements of enterprise AI."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="premium-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-105 transition-transform duration-300">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-semibold text-foreground leading-snug">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
