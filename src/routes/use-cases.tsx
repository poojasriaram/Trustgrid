import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { CaseStudies } from "@/components/site/CaseStudies";
import { motion } from "framer-motion";

export const Route = createFileRoute("/use-cases")({
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proven Impact"
        title={
          <>
            Enterprise <span className="text-accent">Use Cases</span> <br />
            and Success Stories
          </>
        }
        description="See how our GPU optimization, network automation, and AI infrastructure solutions accelerate outcomes for the world's most demanding enterprises."
      />

      <div className="py-20 bg-background border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">Sovereign AI Initiatives</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                National-scale AI infrastructure requiring 10,000+ GPUs with absolute data sovereignty, massive scaling efficiency, and resilient power orchestration.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 95%+ Scaling Efficiency</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Custom InfiniBand topologies</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">High-Frequency Trading</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                Financial institutions demanding sub-microsecond latency, custom kernel-level tuning, and hyper-optimized predictive resource allocation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 50%+ Latency Reduction</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> White-box CUDA optimization</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">Global SaaS Platforms</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                B2B platforms integrating real-time LLM inference, requiring strict cost controls, cloud-neutral orchestration, and GPU FinOps to maintain margins.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 70% Infrastructure Savings</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Automated Spot Orchestration</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">Autonomous Operations</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                Global manufacturing enterprises automating high-volume procurement pipelines, vendor contract analysis, and order tracking with CrewAI/LangGraph worker fleets.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 90% Process Automation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Secure Slack/Email action gates</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">Regulated AI Security</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                Government and defense networks deploying generative intelligence interfaces wrapped in Zero-Trust Cyber Dom guardrails and secure WASM/gVisor Bash execution sandboxes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 99.9% Injection Mitigation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 0% Sandbox Escape Rate</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8 flex flex-col h-full hover:border-primary/40 transition-colors animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3">Secure Medical LLMOps</h3>
              <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed">
                Healthcare groups executing custom DPO fine-tunings of 70B parameter medical models, quantized to FP8 for private cloud inference deployments on hospital H100s.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 80% Cost Reduction vs API</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> 99%+ Downstream Accuracy</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <CaseStudies />
      <CTA />
    </>
  );
}
