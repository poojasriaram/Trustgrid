import { motion } from "framer-motion";
import { Server, Cpu, Bot, Layers, ShieldAlert } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const challenges = [
  {
    icon: Server,
    title: "AI Infrastructure Complexity",
    desc: "Distributed AI workloads across cloud, hybrid, and on-prem are hard to manage and expensive.",
    color: "from-red-500/30 to-red-500/0",
  },
  {
    icon: Cpu,
    title: "GPU Performance Bottlenecks",
    desc: "Most AI workloads run at a fraction of theoretical performance, wasting infrastructure spend.",
    color: "from-orange-500/30 to-orange-500/0",
  },
  {
    icon: Bot,
    title: "Agentic AI Adoption Risks",
    desc: "Organizations lack the governance and security frameworks for safe autonomous deployment.",
    color: "from-amber-500/30 to-amber-500/0",
  },
  {
    icon: Layers,
    title: "Fragmented AI Operations",
    desc: "Separate MLOps, LLMOps, and AgentOps create silos and governance challenges.",
    color: "from-yellow-500/30 to-yellow-500/0",
  },
  {
    icon: ShieldAlert,
    title: "Security & Compliance",
    desc: "AI systems introduce new attack surfaces, compliance requirements, and governance risks.",
    color: "from-rose-500/30 to-rose-500/0",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="relative border-b border-border/30 bg-background scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <SectionHeading
          eyebrow="The Challenge"
          title="The Enterprise AI Reality"
          description="Common challenges enterprises face when scaling AI from proof-of-concept to production."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="premium-card p-6 relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform">
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
