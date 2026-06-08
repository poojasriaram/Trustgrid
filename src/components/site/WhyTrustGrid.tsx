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
    <section id="why-trustgrid" className="relative border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why TRUSTGRID.AI"
          title="Why Leading Organizations Choose TRUSTGRID.AI"
          description="A partner built for the complexity, scale, and security requirements of enterprise AI."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border/60 bg-background p-6 text-center hover:border-primary/40 transition-all overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-foreground leading-snug">
                  {d.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
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
