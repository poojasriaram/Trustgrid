import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

export interface SectionData {
  title: string;
  description: string;
  introduction: string;
  capabilities: string[];
  useCases: string[];
  solutions: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
}

function toId(title: string) {
  let id = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (id === "ai-trust-reliability-engineering") return "ai-trust-reliability";
  if (id === "ai-infrastructure-engineering") return "ai-infrastructure";
  return id;
}

export function SectionTemplate({ data }: { data: SectionData }) {
  return (
    <div id={toId(data.title)} className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-6"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              {data.introduction}
            </motion.p>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Enterprise Capabilities
                </h3>
                <ul className="space-y-3">
                  {data.capabilities.map((cap, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Proven Solutions
                </h3>
                <ul className="space-y-3">
                  {data.solutions.map((sol, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {data.metrics.map((metric, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="premium-card p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 font-display relative z-10">{metric.value}</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-mono relative z-10">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 bg-card shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                Strategic Use Cases
              </h3>
              <ul className="space-y-3.5 mb-8">
                {data.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2 border-t border-border/40 pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
                Business Outcomes
              </h3>
              <ul className="space-y-3.5">
                {data.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-4 w-4 rounded-full bg-emerald-100/60 border border-emerald-200/50 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{out}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
