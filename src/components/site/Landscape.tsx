import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const layers = [
  { name: "Reflex Layer", time: "< 1 μs", desc: "Hardware-level inference. CUDA kernels, tensor cores, RDMA fabric.", color: "from-blue-500/40 to-blue-500/0" },
  { name: "Perception Layer", time: "1 μs – 100 ms", desc: "Real-time signal interpretation. Vision, speech, sensor fusion.", color: "from-cyan-500/40 to-cyan-500/0" },
  { name: "Interaction Layer", time: "100 ms – 1 s", desc: "Conversational AI, copilots, low-latency agent responses.", color: "from-sky-500/40 to-sky-500/0" },
  { name: "Operation Layer", time: "1 s – 5 min", desc: "Agentic workflows. Tool-using agents execute multi-step tasks.", color: "from-indigo-500/40 to-indigo-500/0" },
  { name: "Analysis Layer", time: "5 min – 1 hr", desc: "Long-context analysis. Research agents, deep reasoning, planning.", color: "from-violet-500/40 to-violet-500/0" },
  { name: "Strategy Layer", time: "1 hr – Days", desc: "Autonomous enterprise operations. Self-improving agent fleets.", color: "from-fuchsia-500/40 to-fuchsia-500/0" },
];

export function Landscape() {
  return (
    <section className="relative border-b border-border/40 bg-surface/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="The AI Engineering Landscape"
          title="We engineer across the full temporal spectrum"
          description="Most vendors operate at one layer. TrustGrid.AI engineers AI systems from microsecond kernel optimization to multi-day autonomous strategy."
        />

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-4 md:grid-cols-6">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group"
              >
                <div className={`absolute inset-x-0 -top-20 h-20 bg-gradient-to-b ${l.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                <div className="relative rounded-lg border border-border/60 bg-background p-5 h-full hover:border-primary/40 transition-colors">
                  <div className="text-[10px] uppercase tracking-widest text-accent font-mono">
                    {l.time}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {l.name}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {l.desc}
                  </div>
                  <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary border-2 border-background" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
