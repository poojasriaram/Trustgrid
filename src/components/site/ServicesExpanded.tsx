import { motion } from "framer-motion";
import {
  Cpu, Zap, Bot, Brain, Sparkles, Shield,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface ServiceDetail {
  icon: typeof Cpu;
  title: string;
  subtitle: string;
  intro: string;
  capabilities: string[];
  outcome: string;
  image: string;
  impact?: { value: string; label: string }[];
}

const services: ServiceDetail[] = [
  {
    icon: Cpu,
    title: "AI Infrastructure Engineering",
    subtitle: "Build the Foundation for Enterprise AI",
    intro:
      "We architect and optimize AI-native environments across cloud, hybrid, and on-prem deployments for high-performance AI workloads.",
    capabilities: [
      "AI Cloud Architecture",
      "Kubernetes Platforms",
      "Distributed Training Infrastructure",
      "GPU Cluster Management",
      "AI FinOps Optimization",
      "High Availability Design",
      "AI Networking & Storage",
    ],
    outcome:
      "Reduce infrastructure costs while increasing scalability, reliability, and deployment velocity.",
    image: "/images/ai_infra.png",
  },
  {
    icon: Zap,
    title: "GPU Performance & Data Center Engineering",
    subtitle: "Transform GPU Infrastructure into Competitive Advantage",
    intro:
      "Most organizations achieve only a fraction of available GPU performance. We identify bottlenecks, optimize multi-node networks, and maximize compute throughput.",
    capabilities: [
      "CUDA Kernel Optimization",
      "Mega-Scale GPU Data Centers",
      "Network Fabric Tuning (NCCL/RoCEv2)",
      "TensorRT & Quantization",
      "Multi-GPU Parallel Scaling",
      "Liquid Cooling Fabric Design",
      "DCGM Self-Healing Clusters",
    ],
    outcome:
      "Unlock maximum hardware utilization and scale to 10,000+ GPU supercomputing networks efficiently.",
    image: "/images/gpu_performance.png",
    impact: [
      { value: "3–15x", label: "Performance Improvement" },
      { value: "40–75%", label: "Cost Reduction" },
      { value: "95%+", label: "Fabric scaling efficiency" },
      { value: "10k+", label: "GPU deployment scale" },
    ],
  },
  {
    icon: Bot,
    title: "Agentic AI & Autonomous Systems",
    subtitle: "Move Beyond Chatbots to Autonomous Operations",
    intro:
      "We design stateful autonomous systems and multi-agent fleets capable of reasoning, planning, memory retention, and secure tool execution.",
    capabilities: [
      "Multi-Agent Orchestration",
      "LangGraph & CrewAI Pipelines",
      "Model Context Protocol (MCP)",
      "Secure Action Gating (HITL)",
      "Agent Memory Architectures",
      "Ephemeral Sandbox Tool Execution",
      "Agent Governance & Auditing",
    ],
    outcome:
      "Enable end-to-end automation of complex business processes with deterministic control and human-in-the-loop oversight.",
    image: "/images/agentic_ai.png",
  },
  {
    icon: Brain,
    title: "Long-Memory AI Systems",
    subtitle: "AI That Learns Beyond the Context Window",
    intro:
      "Traditional AI forgets. We build systems that retain institutional knowledge across months and years.",
    capabilities: [
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "Knowledge Graphs",
      "Memory Architectures",
      "Semantic Search",
      "Persistent Knowledge Stores",
    ],
    outcome:
      "Create AI systems that continuously learn and evolve alongside your organization.",
    image: "/images/long_memory.png",
  },
  {
    icon: Sparkles,
    title: "Enterprise Generative AI & LLMs",
    subtitle: "Production-Ready Generative AI Solutions",
    intro:
      "Transform enterprise knowledge into intelligence using fine-tuned open-weights models and advanced evaluation networks.",
    capabilities: [
      "LLM Fine-Tuning (LoRA/DPO)",
      "FP8 & INT4 Quantization",
      "Automated Evaluation Gateways",
      "Enterprise RAG & Semantics",
      "Domain-Specific Model Runs",
      "Code & Content Automation",
    ],
    outcome:
      "Deploy custom models that outperform generic APIs at a fraction of the operating cost.",
    image: "/images/generative_ai.png",
  },
  {
    icon: Shield,
    title: "AI Security & Cyber Dom Governance",
    subtitle: "Secure AI execution and host infrastructures at Scale",
    intro:
      "Enterprise AI requires governance, observability, and security at every layer. We protect models, data, and host environments from injection and execution compromises.",
    capabilities: [
      "Cyber Dom Security Mesh",
      "Bash Shell Hardening",
      "MicroVM & WASM Sandboxing",
      "Zero Trust AI Architecture",
      "Fine-grained Agent IAM",
      "Compliance Audits (SOC2/FedRAMP)",
      "Real-time Injection Mitigation",
    ],
    outcome:
      "Deploy models and agents confidently in high-privilege, regulated environments without risking host compromise.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
];

export function ServicesExpanded() {
  return (
    <section className="relative border-b border-border/40 bg-surface/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Deep Dive"
          title="Engineering AI Capabilities That Deliver Outcomes"
          description="Purpose-built service domains solving critical enterprise AI challenges."
        />

        <div className="mt-16 space-y-12">
          {services.map((s, i) => {
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-xl border border-border/60 bg-background overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Accent top bar */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 md:p-8">
                  {/* Text content */}
                  <div className="flex flex-col justify-between min-w-0 w-full">
                    <div>
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                          <s.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground">
                            {s.title}
                          </h3>
                          <p className="mt-1 text-sm text-accent font-medium">
                            {s.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {s.intro}
                      </p>

                      {/* Capabilities */}
                      <div className="mt-6">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-3">
                          Capabilities
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {s.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="rounded-md border border-border/60 bg-surface/40 px-2.5 py-1 text-xs text-foreground/85"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/40">
                      {/* Outcome / Impact */}
                      {s.impact ? (
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">
                            Quantified Business Impact
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                            {s.impact.map((m) => (
                              <div key={m.label}>
                                <div className="text-2xl font-bold text-gradient-primary font-display">
                                  {m.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-2">
                        Business Outcome
                      </div>
                      <p className="text-sm text-foreground/90 leading-relaxed flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                        {s.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
