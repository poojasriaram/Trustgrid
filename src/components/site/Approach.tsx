import { motion } from "framer-motion";
import { HardDrive, Brain, Bot, Settings, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const layers = [
  {
    icon: HardDrive,
    name: "Infrastructure Layer",
    desc: "Build scalable, secure, AI-native platforms.",
    accent: "from-blue-500 to-blue-600",
    glow: "bg-blue-500/20",
  },
  {
    icon: Brain,
    name: "Intelligence Layer",
    desc: "Deploy optimized AI models and reasoning systems.",
    accent: "from-cyan-500 to-cyan-600",
    glow: "bg-cyan-500/20",
  },
  {
    icon: Bot,
    name: "Agent Layer",
    desc: "Create autonomous agents capable of planning, reasoning, and execution.",
    accent: "from-violet-500 to-violet-600",
    glow: "bg-violet-500/20",
  },
  {
    icon: Settings,
    name: "Operations Layer",
    desc: "Establish enterprise-grade MLOps, LLMOps, and AgentOps.",
    accent: "from-emerald-500 to-emerald-600",
    glow: "bg-emerald-500/20",
  },
  {
    icon: Shield,
    name: "Governance Layer",
    desc: "Ensure security, compliance, observability, and accountability.",
    accent: "from-amber-500 to-amber-600",
    glow: "bg-amber-500/20",
  },
];

export function Approach() {
  return (
    <section className="relative border-b border-border/40 bg-surface/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Our Approach"
          title="From Infrastructure to Intelligence"
          description="TRUSTGRID.AI takes a full-spectrum engineering approach that connects infrastructure, models, agents, operations, and governance into a unified ecosystem."
        />

        <div className="mt-16 relative max-w-3xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-violet-500/40 to-amber-500/40" />

          <div className="space-y-6">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex items-start gap-6"
              >
                {/* Node dot */}
                <div className="relative shrink-0">
                  <div
                    className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl ${l.glow} border border-border/60 grid place-items-center group-hover:scale-110 transition-transform`}
                  >
                    <l.icon className="h-7 w-7 md:h-8 md:w-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {l.name}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
