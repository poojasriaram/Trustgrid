import { motion } from "framer-motion";
import {
  Search, ClipboardCheck, Map, Rocket, TrendingUp,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "Understand infrastructure, objectives, workloads, and business priorities.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Assessment",
    desc: "Identify bottlenecks, opportunities, risks, and optimization potential.",
  },
  {
    icon: Map,
    step: "03",
    title: "Strategy",
    desc: "Define technical architecture, success metrics, and implementation roadmap.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Implementation",
    desc: "Deploy solutions through phased engineering execution.",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Optimization",
    desc: "Continuously improve performance, scalability, security, and business outcomes.",
  },
];

export function EngagementJourney() {
  return (
    <section id="engagement-journey" className="relative border-b border-border/40 bg-surface/10 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Engagement Model"
          title="Our Engagement Journey"
          description="A structured, proven approach to transforming your AI initiatives into enterprise capabilities."
          align="center"
        />

        <div className="mt-16 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative text-center"
              >
                {/* Step number & icon */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="h-20 w-20 rounded-2xl border border-border/60 bg-background grid place-items-center group-hover:border-primary/40 group-hover:bg-surface/60 transition-all">
                    <s.icon className="h-8 w-8 text-accent" />
                  </div>
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary/90 grid place-items-center">
                    <span className="text-[10px] font-bold text-primary-foreground font-mono">
                      {s.step}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
