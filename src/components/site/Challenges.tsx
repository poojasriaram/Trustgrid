import { motion } from "framer-motion";
import { Server, Cpu, Bot, Layers, ShieldAlert } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const challenges = [
  {
    icon: Server,
    title: "AI Infrastructure Complexity",
    desc: "Managing distributed AI workloads across cloud, hybrid, and on-prem environments has become increasingly difficult and expensive.",
    color: "from-red-500/30 to-red-500/0",
  },
  {
    icon: Cpu,
    title: "GPU Performance Bottlenecks",
    desc: "Most AI workloads operate at a fraction of their theoretical performance, resulting in wasted infrastructure investments.",
    color: "from-orange-500/30 to-orange-500/0",
  },
  {
    icon: Bot,
    title: "Agentic AI Adoption Risks",
    desc: "Organizations want autonomous systems but lack the governance, security, and operational frameworks required for safe deployment.",
    color: "from-amber-500/30 to-amber-500/0",
  },
  {
    icon: Layers,
    title: "Fragmented AI Operations",
    desc: "MLOps, LLMOps, and AgentOps are often implemented separately, creating operational silos and governance challenges.",
    color: "from-yellow-500/30 to-yellow-500/0",
  },
  {
    icon: ShieldAlert,
    title: "Security & Compliance Concerns",
    desc: "AI systems introduce new attack surfaces, compliance requirements, and governance risks.",
    color: "from-rose-500/30 to-rose-500/0",
  },
];

export function Challenges() {
  return (
    <section className="relative border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="The Challenge"
          title="The Enterprise AI Reality"
          description="Many organizations face the same challenges when scaling AI from proof-of-concept to production."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border/60 bg-background p-6 hover:border-destructive/30 transition-all overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-b ${c.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-destructive/10 border border-destructive/20 grid place-items-center text-destructive/80 group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
