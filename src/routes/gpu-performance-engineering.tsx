import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Target,
  Zap,
  TrendingUp,
  Users,
  Search,
  Filter,
  X,
  ArrowUpRight,
  Cpu,
  Layers,
  Shield,
  Activity,
  Network,
  Database,
  Bot,
  Mic,
  Video,
  Boxes,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KpiRow {
  kpi: string;
  impact: string;
  context: string;
}

interface Phase {
  name: string;
  duration: string;
  activities: string[];
  output: string;
}

interface Deliverable {
  name: string;
  description: string;
  audience: string;
}

interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

interface CaseStudy {
  title: string;
  profile: string;
  challenge: string;
  optimizations: string[];
  results: CaseStudyResult[];
  quote?: { text: string; attribution: string };
}

interface GpuOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  statementOfValue: string;
  kpis: KpiRow[];
  benefits: { title: string; description: string }[];
  phases: Phase[];
  totalDuration: string;
  deliverables: Deliverable[];
  caseStudies: CaseStudy[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const gpuOfferings: GpuOffering[] = [
  {
    id: "gpu-infrastructure-assessment",
    number: "01",
    title: "GPU Infrastructure Assessment & Optimization",
    description:
      "A data-driven engagement that maps your entire GPU estate and converts visibility into actionable optimization strategies — improving utilization, reducing waste, and accelerating AI throughput.",
    statementOfValue:
      "Transform underutilized GPU infrastructure into a high-performance AI factory — reducing total spend by up to 40% while increasing effective throughput.",
    kpis: [
      { kpi: "GPU Utilization Rate", impact: "+20% to +60%", context: "Sustained SM occupancy vs. baseline" },
      { kpi: "Total Infrastructure Cost", impact: "-15% to -40%", context: "Combined cloud + on-premise TCO" },
      { kpi: "GPU Idle Time", impact: "-30% to -70%", context: "Time GPUs sit below utilization thresholds" },
      { kpi: "Cluster Throughput", impact: "+20% to +50%", context: "Jobs completed per GPU-hour" },
      { kpi: "AI Job Completion Time", impact: "-15% to -45%", context: "Wall-clock time from submission to result" },
      { kpi: "ROI on GPU Investments", impact: "+30% to +80%", context: "Value-of-work per dollar of GPU spend" },
    ],
    benefits: [
      { title: "Higher GPU Utilization", description: "Move from typical 25–40% utilization to sustained 70–85% by eliminating idle and wasted compute." },
      { title: "Intelligent Workload Placement", description: "Match GPU profiles to workload requirements for optimal resource-to-task alignment." },
      { title: "Cloud Spend Reduction", description: "Identify and eliminate overprovisioned instances, zombie resources, and misaligned pricing models." },
      { title: "Faster AI Workloads", description: "Remove bottlenecks in data loading, GPU memory transfers, and inter-node communication." },
    ],
    phases: [
      {
        name: "Phase 1: Infrastructure Discovery",
        duration: "3–5 days",
        activities: [
          "Hardware inventory across all GPU clusters and cloud accounts",
          "Network topology mapping (InfiniBand/RoCE, NVLink configurations)",
          "Scheduler and orchestrator review (SLURM, Kubernetes, Ray)",
        ],
        output: "Infrastructure Inventory Atlas — single source of truth for your GPU estate.",
      },
      {
        name: "Phase 2: Workload Profiling",
        duration: "5–7 days",
        activities: [
          "Nsight Systems / Nsight Compute trace collection across workloads",
          "Training loop profiling (forward/backward pass, gradient sync breakdown)",
          "Data pipeline profiling (ETL throughput, GPU starvation events)",
        ],
        output: "Workload Characterization Library with optimization potential ratings.",
      },
      {
        name: "Phase 3: Analysis & Optimization",
        duration: "2–4 weeks",
        activities: [
          "Roofline analysis per workload (compute-bound vs. memory-bound)",
          "Bottleneck prioritization by GPU-hours lost and dollars wasted",
          "Quick-win implementation (scheduler tuning, instance right-sizing)",
          "Complex optimizations (data pipeline restructuring, memory improvements)",
        ],
        output: "Prioritized Bottleneck Matrix and Implementation Tracker with before/after metrics.",
      },
      {
        name: "Phase 4: Validation & Handoff",
        duration: "5–7 days",
        activities: [
          "Production workload re-profiling to validate improvements",
          "Monitoring dashboard deployment with regression alerting",
          "Knowledge transfer for operations and engineering teams",
        ],
        output: "Validated Performance Report — certified before/after metrics.",
      },
    ],
    totalDuration: "8 weeks (4-week accelerated option available)",
    deliverables: [
      { name: "GPU Infrastructure Inventory Atlas", description: "Complete hardware, software, and network inventory", audience: "Infrastructure & Operations" },
      { name: "Workload Characterization Library", description: "GPU resource profiles for every major workload with optimization potential ratings", audience: "Engineering Leadership" },
      { name: "Prioritized Bottleneck Matrix", description: "Decision-grade ranking of all optimization opportunities by impact and financial return", audience: "VP Engineering / CTO" },
      { name: "Cost Optimization Plan", description: "Financial model showing current vs. optimized GPU spend with phased savings projections", audience: "Finance & Procurement" },
      { name: "Executive Performance Dashboard", description: "Real-time monitoring dashboard tracking GPU utilization, cost, and throughput", audience: "C-Suite / VP Engineering" },
    ],
    caseStudies: [
      {
        title: "AI Startup — LLM Training Platform",
        profile: "Series C AI startup operating a 200-GPU A100 cluster for LLM training.",
        challenge: "GPU utilization averaged 31%. Training jobs waited 6–12 hours in queue. Teams were pushing for a $4M expansion.",
        optimizations: [
          "Redesigned data pipeline with parallel loading and GPU-accelerated preprocessing",
          "Reconfigured SLURM topology-aware scheduling for contiguous GPU placement",
          "Implemented shared preprocessing cache to eliminate redundant computation",
        ],
        results: [
          { metric: "GPU Utilization", before: "31%", after: "72%", improvement: "+41 pts" },
          { metric: "Job Queue Wait Time", before: "6–12 hours", after: "15–45 min", improvement: "-92%" },
          { metric: "Annual GPU Spend", before: "$5.8M", after: "$3.4M", improvement: "-$2.4M" },
          { metric: "Cluster Expansion Need", before: "$4M planned", after: "Eliminated", improvement: "$4M avoided" },
        ],
        quote: {
          text: "We were about to spend $4M on GPUs we didn't need.",
          attribution: "VP of Engineering",
        },
      },
      {
        title: "Fortune 100 Insurance — AI Risk Modeling",
        profile: "Insurance company running GPU-accelerated models on hybrid on-premise DGX + AWS P4d.",
        challenge: "Monthly cloud costs hit $800K with no visibility. On-premise DGX utilization averaged 38% due to misconfiguration.",
        optimizations: [
          "Terminated 47 orphaned instances ($89K/month savings)",
          "Right-sized 62 overprovisioned instances ($71K/month savings)",
          "Fixed DGX firmware and power management settings (15% performance recovery)",
        ],
        results: [
          { metric: "Monthly Cloud GPU Spend", before: "$800K", after: "$496K", improvement: "-38%" },
          { metric: "On-Premise GPU Utilization", before: "38%", after: "67%", improvement: "+29 pts" },
          { metric: "Annual Infrastructure Savings", before: "—", after: "$1.8M", improvement: "Direct" },
        ],
      },
    ],
  },
  {
    id: "llm-inference-acceleration",
    number: "02",
    title: "LLM Inference Acceleration & Optimization",
    description:
      "A specialized engagement that re-architects your LLM serving infrastructure for order-of-magnitude throughput gains, dramatic cost-per-token reduction, and sub-second latency at scale.",
    statementOfValue:
      "Reduce cost per token by up to 70% while delivering 2X–10X faster inference — serve more users with the same hardware.",
    kpis: [
      { kpi: "Inference Throughput", impact: "2X–10X", context: "Tokens per second per GPU" },
      { kpi: "Cost Per Token", impact: "-20% to -70%", context: "Total cost per output token" },
      { kpi: "Time to First Token (TTFT)", impact: "-30% to -80%", context: "Prefill latency for user-facing apps" },
      { kpi: "Concurrent Users Supported", impact: "+100% to +500%", context: "Simultaneous users per GPU" },
      { kpi: "Total AI Serving Costs", impact: "-25% to -60%", context: "Monthly infrastructure cost" },
    ],
    benefits: [
      { title: "Faster AI Responses", description: "Reduce time-to-first-token from seconds to milliseconds, even under peak load." },
      { title: "More Users Per GPU", description: "Serve 3–5X more concurrent users through intelligent batching and memory optimization." },
      { title: "Lower Inference Costs", description: "Attack cost-per-token from every angle: model compression, serving efficiency, and hardware optimization." },
      { title: "Seamless Scalability", description: "Architecture that scales linearly with demand and supports traffic spikes without degradation." },
    ],
    phases: [
      {
        name: "Phase 1: Inference Assessment",
        duration: "1–2 weeks",
        activities: [
          "Traffic pattern analysis (request rates, concurrency profiles, peak patterns)",
          "Latency decomposition (TTFT, inter-token latency breakdown)",
          "Cost-per-token calculation with full infrastructure allocation",
        ],
        output: "Inference Performance Baseline Report.",
      },
      {
        name: "Phase 2: Model Optimization",
        duration: "1–3 weeks",
        activities: [
          "Quantization (INT8, INT4, GPTQ, AWQ — selecting optimal scheme per model)",
          "Speculative decoding and KV-cache compression implementation",
          "Quality validation: automated benchmarks + human evaluation",
        ],
        output: "Optimized Model Artifacts with validated quality guarantees.",
      },
      {
        name: "Phase 3: Serving & Deployment",
        duration: "2–4 weeks",
        activities: [
          "Serving engine selection and configuration (vLLM, TensorRT-LLM, Triton)",
          "Continuous batching and PagedAttention KV-cache optimization",
          "Auto-scaling policy design and staged production rollout",
        ],
        output: "Production-Ready Deployment — validated, monitored inference infrastructure.",
      },
    ],
    totalDuration: "10 weeks (6-week accelerated option available)",
    deliverables: [
      { name: "Inference Performance Baseline Report", description: "Comprehensive profiling of current inference performance and costs", audience: "Engineering & Product" },
      { name: "Optimized Model Artifacts", description: "Quantized/compressed models with validated quality benchmarks", audience: "ML Engineering" },
      { name: "Serving Configuration Playbook", description: "Complete runtime configuration with tuning parameters and benchmarks", audience: "Infrastructure / DevOps" },
      { name: "Cost-per-Token Analysis", description: "Financial model showing current vs. optimized unit economics", audience: "Finance / Executives" },
      { name: "Performance Monitoring Dashboard", description: "Real-time inference dashboard (latency, throughput, cost)", audience: "All Stakeholders" },
    ],
    caseStudies: [
      {
        title: "Global AI Chatbot Platform — Enterprise Conversational AI",
        profile: "Series D AI company processing 2 billion tokens/day across 800 A100 GPUs with a fine-tuned Llama-2-70B.",
        challenge: "Inference costs reached $14M annually, growing faster than revenue. Response latency averaged 3.2 seconds.",
        optimizations: [
          "AWQ 4-bit quantization with <0.3% quality degradation",
          "Speculative decoding with a 7B draft model (2.1X decode speedup)",
          "PagedAttention with prefix caching for common conversation patterns",
        ],
        results: [
          { metric: "Cost Per Token", before: "$0.0028", after: "$0.0009", improvement: "-68%" },
          { metric: "Time to First Token", before: "3.2s", after: "0.8s", improvement: "-75%" },
          { metric: "Annual Inference Costs", before: "$14M", after: "$6.2M", improvement: "-$7.8M" },
          { metric: "Concurrent Users (per GPU)", before: "50", after: "280", improvement: "5.6X" },
        ],
      },
      {
        title: "Legal AI Platform — Document Analysis",
        profile: "Legal tech company serving 2,000 law firms with AI-powered contract analysis.",
        challenge: "Average latency was 8 seconds — attorneys were abandoning the tool. Sequential processing left GPUs idle ~70% of query duration.",
        optimizations: [
          "Migrated to vLLM with continuous batching",
          "GPTQ 4-bit quantization on the fine-tuned legal analysis model",
          "Semantic caching for repeated queries (25% cache hit rate)",
        ],
        results: [
          { metric: "Average Response Latency", before: "8.0s", after: "1.9s", improvement: "-76%" },
          { metric: "Annual Infrastructure Costs", before: "$3.8M", after: "$1.6M", improvement: "-$2.2M" },
          { metric: "User Satisfaction Score", before: "3.1/5", after: "4.6/5", improvement: "+48%" },
        ],
      },
    ],
  },
  {
    id: "cuda-kernel-engineering",
    number: "03",
    title: "CUDA Kernel Engineering & Performance Tuning",
    description:
      "Custom CUDA kernel development and optimization to unlock the full computational potential of NVIDIA GPU hardware for your most performance-critical workloads.",
    statementOfValue:
      "Extract maximum performance from every CUDA core — achieving kernel-level speedups of 2X–10X that compound across your entire AI pipeline.",
    kpis: [
      { kpi: "Individual Kernel Speedup", impact: "2X–10X", context: "Wall-clock execution time reduction" },
      { kpi: "Memory Bandwidth Utilization", impact: "+20% to +200%", context: "Achieved throughput vs. theoretical peak" },
      { kpi: "End-to-End Training Speed", impact: "+20% to +300%", context: "Compound effect on training time" },
      { kpi: "Tensor Core Utilization", impact: "+40% to +200%", context: "Percentage of time Tensor Cores compute" },
    ],
    benefits: [
      { title: "Maximum GPU Performance", description: "Custom CUDA kernels bypass framework abstractions to directly control GPU hardware at the instruction level." },
      { title: "Sustainable Competitive Advantage", description: "Optimized kernels become strategic assets — competitors using standard frameworks cannot match your throughput." },
      { title: "Compounding Performance Gains", description: "Kernel optimizations compound throughout your pipeline, producing far greater speedups than individual improvements." },
      { title: "Reduced Compute Costs", description: "Faster kernels mean fewer GPU-hours per training run. ROI is typically recovered within 3–6 months." },
    ],
    phases: [
      {
        name: "Phase 1: Kernel Profiling",
        duration: "1–2 weeks",
        activities: [
          "Nsight Compute profiling (execution time, occupancy, stall reasons)",
          "Roofline analysis per kernel (compute-bound vs. memory-bound)",
          "Memory access pattern and coalescing efficiency analysis",
        ],
        output: "Kernel Performance Atlas with root-cause analysis for all underperforming kernels.",
      },
      {
        name: "Phase 2: Implementation & Optimization",
        duration: "3–5 weeks",
        activities: [
          "Custom CUDA kernel implementation with architecture-specific tuning",
          "Shared memory tiling, register optimization, warp-level primitives",
          "Tensor Core integration (WMMA/MMA) and kernel fusion",
        ],
        output: "Optimized CUDA Kernels — production-ready with benchmark results.",
      },
      {
        name: "Phase 3: Validation & Integration",
        duration: "1–2 weeks",
        activities: [
          "Numerical correctness validation against reference implementations",
          "Performance stability testing across input sizes and distributions",
          "Production integration with graceful fallback mechanisms",
        ],
        output: "Correctness-certified, benchmarked, production-ready kernels.",
      },
    ],
    totalDuration: "7–9 weeks",
    deliverables: [
      { name: "Kernel Performance Atlas", description: "Complete ranked profile of every kernel with optimization potential", audience: "Engineering & Architecture" },
      { name: "Optimized CUDA Kernels", description: "Production-ready kernel implementations with full benchmarks", audience: "ML Engineering" },
      { name: "Kernel Optimization Playbook", description: "Documented algorithms, tuning parameters, and future extension guidance", audience: "Engineering Teams" },
    ],
    caseStudies: [
      {
        title: "AI Research Lab — Transformer Training",
        profile: "AI research organization training custom transformer architectures on a 512-GPU H100 cluster.",
        challenge: "Attention kernels ran at 38% of theoretical peak throughput. Training runs were 40% slower than expected.",
        optimizations: [
          "Custom Flash Attention implementation with shared memory tiling",
          "Fused layer normalization + activation kernels",
          "Tensor Core-optimized matrix multiplication using CUTLASS",
        ],
        results: [
          { metric: "Attention Kernel Throughput", before: "38% of peak", after: "87% of peak", improvement: "+129%" },
          { metric: "Training Time (per epoch)", before: "6.2 hours", after: "3.1 hours", improvement: "-50%" },
          { metric: "GPU Memory Efficiency", before: "Baseline", after: "+35%", improvement: "More batch capacity" },
        ],
      },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function KpiTable({ kpis }: { kpis: KpiRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground w-2/5">KPI</th>
            <th className="text-left px-4 py-3 font-semibold text-primary">Impact</th>
            <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Context</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row, i) => (
            <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
              <td className="px-4 py-3 font-medium text-foreground">{row.kpi}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.impact}</td>
              <td className="px-4 py-3 text-muted-foreground text-xs">{row.context}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ResultsTable({ results }: { results: CaseStudyResult[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden mt-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-2/5">Metric</th>
            <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Before</th>
            <th className="text-left px-4 py-3 font-semibold text-primary">After</th>
            <th className="text-left px-4 py-3 font-semibold text-accent text-xs">Improvement</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
              <td className="px-4 py-3 font-medium text-foreground">{row.metric}</td>
              <td className="px-4 py-3 text-foreground/65">{row.before}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.after}</td>
              <td className="px-4 py-3 text-accent text-xs font-medium">{row.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border/50 bg-surface/20 overflow-hidden"
    >
      <div className="p-6 border-b border-border/30 bg-surface/30">
        <div className="flex items-start gap-3">
          <Users className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <h5 className="text-lg font-semibold text-foreground">{study.title}</h5>
            <p className="text-sm text-muted-foreground mt-1">{study.profile}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-accent" /> Challenge
          </h6>
          <p className="text-sm text-muted-foreground">{study.challenge}</p>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-500" /> Key Optimizations
          </h6>
          <ul className="space-y-1.5">
            {study.optimizations.map((opt, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{opt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" /> Results
          </h6>
          <ResultsTable results={study.results} />
        </div>

        {study.quote && (
          <blockquote className="border-l-2 border-accent/40 pl-4 text-sm text-muted-foreground italic">
            "{study.quote.text}" — <span className="font-medium text-foreground">{study.quote.attribution}</span>
          </blockquote>
        )}
      </div>
    </motion.div>
  );
}

function OfferingSection({ offering }: { offering: GpuOffering }) {
  return (
    <section id={offering.id} className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-4xl font-black leading-none font-display bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              {offering.number}
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3.5xl font-semibold tracking-tight text-foreground mb-4">{offering.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">{offering.description}</p>
          <div className="mt-4 p-4 rounded-xl border border-primary/20 bg-primary/5 inline-block">
            <p className="text-sm font-medium text-primary">Value: {offering.statementOfValue}</p>
          </div>
        </motion.div>

        {/* KPI Table */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-accent" /> Expected Performance Gains
          </h3>
          <KpiTable kpis={offering.kpis} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h3>
            <div className="space-y-3">
              {offering.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{benefit.title}: </span>
                    <span className="text-muted-foreground text-sm">{benefit.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Phases */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Engagement Timeline — {offering.totalDuration}
            </h3>
            <div className="space-y-4">
              {offering.phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-border/50 bg-surface/30 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-sm">{phase.name}</h4>
                    <span className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">{phase.duration}</span>
                  </div>
                  <ul className="space-y-1 mb-2">
                    {phase.activities.map((act, j) => (
                      <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        {act}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-accent font-medium">→ {phase.output}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Deliverables</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {offering.deliverables.map((d, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-surface/20 p-4">
                <p className="font-semibold text-foreground text-sm mb-1">{d.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{d.description}</p>
                <span className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">{d.audience}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        {offering.caseStudies.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Client Results</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {offering.caseStudies.map((study, i) => (
                <CaseStudyCard key={i} study={study} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── TRUSTGRID AI 60 Use Cases Data ──────────────────────────────────────────

interface TrustGridUseCase {
  id: number;
  title: string;
  category: string;
  description: string;
  businessValue: string;
  solution: string;
  outcome: string;
  kpis: string;
}

const TRUSTGRID_CATEGORIES = [
  "All Categories",
  "Inference & Routing",
  "Scaling & Infrastructure",
  "Multi-Modal & Media",
  "Training & Fine-Tuning",
  "Security & Compliance",
  "Data & ETL",
  "Agentic & Automation",
  "Edge & Distributed",
  "Industry Vertical",
  "FinOps & Optimization",
  "AI Penetration Testing",
  "Managed Threat Defense",
  "Breach & Attack Simulation",
  "Cybersecurity Verticals",
];

const trustGridUseCases: TrustGridUseCase[] = [
  { id: 1, title: "Dynamic Model Routing", category: "Inference & Routing", description: "Routing queries to different LLMs based on prompt complexity.", businessValue: "Maximizes performance while minimizing unnecessary compute spend.", solution: "TRUSTGRID AI's Intelligent Inference Router classifies prompt difficulty and forwards it to the appropriate model tier.", outcome: "Optimized cost-to-quality ratio; seamless UX.", kpis: "40-60% reduction in LLM API/compute costs; <15ms routing overhead." },
  { id: 2, title: "High-Throughput Chatbot Scaling", category: "Scaling & Infrastructure", description: "Managing massive concurrent spikes in AI chat traffic.", businessValue: "Prevents application crashes during viral moments or peak hours.", solution: "TRUSTGRID AI's Auto-Scaling Fabric provisions GPU nodes based on concurrent connection metrics.", outcome: "Zero dropped connections during traffic surges.", kpis: "Handles 100k+ concurrent WebSockets; <500ms TTFB." },
  { id: 3, title: "Multi-Modal Orchestration", category: "Multi-Modal & Media", description: "Stitching together text, image, and audio models.", businessValue: "Enables rich AI apps (e.g., avatars) without managing separate infra.", solution: "TRUSTGRID AI's Workflow Orchestrator chains distinct GPU workers via high-speed internal mesh networking.", outcome: "Low-latency multi-modal interactions.", kpis: "Sub-1 second total pipeline latency for multi-modal turns." },
  { id: 4, title: "Continuous Batching for ETL", category: "Data & ETL", description: "Processing millions of unstructured docs simultaneously.", businessValue: "Accelerates data preparation for enterprise knowledge bases.", solution: "TRUSTGRID AI utilizes continuous batching to dynamically group incoming chunks, maximizing VRAM.", outcome: "Drastically faster data processing pipelines.", kpis: "3-5x higher throughput; 80%+ GPU utilization." },
  { id: 5, title: "Spot Instance Failover", category: "FinOps & Optimization", description: "Running batch jobs on cheap, interruptible cloud GPUs.", businessValue: "Slashes compute costs for non-time-sensitive training jobs.", solution: "TRUSTGRID AI's Scheduler shifts workloads to spot instances, taking micro-checkpoints and auto-resuming.", outcome: "Uninterrupted batch processing at a fraction of the cost.", kpis: "Up to 70% cost savings; 99% job completion rate despite spot interruptions." },
  { id: 6, title: "GPU Fractionalization", category: "Scaling & Infrastructure", description: "Splitting large GPUs (H100s) into smaller isolated instances.", businessValue: "Makes enterprise GPUs accessible to smaller teams, reducing waste.", solution: "TRUSTGRID AI leverages NVIDIA MIG to partition physical GPUs into secure, hardware-isolated vGPUs.", outcome: "Better hardware ROI; secure multi-tenancy.", kpis: "4x increase in GPU tenant density; strict zero-data-leakage." },
  { id: 7, title: "Zero-Idle Auto-Scaling", category: "FinOps & Optimization", description: "Shutting down GPU clusters during off-peak hours.", businessValue: "Eliminates the massive waste of paying for idle GPUs overnight.", solution: "TRUSTGRID AI's Telemetry Engine scales GPU clusters to zero when idle, waking them instantly on demand.", outcome: "100% utilization of active compute; zero idle spend.", kpis: "50-80% reduction in off-hours infra spend; <30s cold-start." },
  { id: 8, title: "Cold-Start Latency Elimination", category: "Inference & Routing", description: "Keeping models pre-loaded in memory for instant access.", businessValue: "Critical for user-facing apps where loading delays cause churn.", solution: "TRUSTGRID AI maintains a \"Warm Pool\" of pre-loaded model weights, instantly assigning them to endpoints.", outcome: "Instantaneous model responses.", kpis: "<100ms endpoint activation time (vs. 30-60s standard)." },
  { id: 9, title: "Distributed LoRA Fine-Tuning", category: "Training & Fine-Tuning", description: "Training custom model adapters across multiple GPUs.", businessValue: "Allows enterprises to create specialized models on proprietary data affordably.", solution: "TRUSTGRID AI's Training Fabric orchestrates QLoRA distributed training, handling data/weight sharding.", outcome: "Faster time-to-market for custom models.", kpis: "Fine-tuning 70B models in hours; 10x cost reduction vs. full fine-tuning." },
  { id: 10, title: "CI/CD for AI Models", category: "Agentic & Automation", description: "Automating testing and deployment of new model versions.", businessValue: "Removes manual, error-prone deployment processes for ML teams.", solution: "TRUSTGRID AI integrates with Git to automatically trigger training, evaluation, and production swapping.", outcome: "Accelerated ML release cycles with safety guardrails.", kpis: "50% reduction in MLOps time; automated rollback in <5s." },
  { id: 11, title: "Sandboxed Multi-Team Env.", category: "Security & Compliance", description: "Isolating compute environments for corporate departments.", businessValue: "Prevents teams from accessing restricted data or hoarding resources.", solution: "TRUSTGRID AI provisions logically isolated namespaces with dedicated GPU quotas on shared hardware.", outcome: "Secure, frictionless collaboration.", kpis: "100% resource quota adherence; zero cross-team exposure." },
  { id: 12, title: "End-to-End RAG Orchestration", category: "Inference & Routing", description: "Hosting embedding, retrieval, and generation in one stack.", businessValue: "Reduces latency caused by passing data between fragmented vendors.", solution: "TRUSTGRID AI co-locates the Embedding model, Vector DB, and Generative LLM in a single cluster.", outcome: "Faster, more reliable RAG pipelines.", kpis: "40% reduction in RAG latency; higher relevance scores." },
  { id: 13, title: "Persistent Agent Hosting", category: "Agentic & Automation", description: "Providing long-running compute for autonomous AI agents.", businessValue: "Enables complex, multi-day agent tasks without timing out.", solution: "TRUSTGRID AI provides stateful GPU containers that maintain context/memory over extended periods.", outcome: "Reliable execution of multi-step agentic workflows.", kpis: "Supports multi-day continuous runtimes; 99.99% container uptime." },
  { id: 14, title: "High-Frequency Tool Calling", category: "Agentic & Automation", description: "Managing rapid back-and-forth API calls from LLMs.", businessValue: "Powers complex enterprise automation (e.g., database queries) efficiently.", solution: "TRUSTGRID AI's Fast Networking Layer keeps persistent, pooled connections to external APIs.", outcome: "Smooth, rapid execution of agentic tasks.", kpis: "Enables 50+ sequential tool calls per minute without degradation." },
  { id: 15, title: "Sovereign AI / On-Prem", category: "Security & Compliance", description: "Running AI entirely inside a private cloud.", businessValue: "Meets strict GDPR, HIPAA, or ITAR compliance requirements.", solution: "TRUSTGRID AI Air-Gapped Edition deploys entirely within the customer's VPC with no external telemetry.", outcome: "Full compliance with data privacy laws.", kpis: "0% data egress to public internet; 100% on-premise residency." },
  { id: 16, title: "VPC Peering for Vector DBs", category: "Security & Compliance", description: "Connecting AI models to private databases securely.", businessValue: "Prevents man-in-the-middle attacks when retrieving sensitive data.", solution: "TRUSTGRID AI establishes private, encrypted VPC peering directly to enterprise data warehouses.", outcome: "Secure, high-speed data retrieval.", kpis: "<10ms internal network latency; end-to-end encryption." },
  { id: 17, title: "Edge AI Inference Sync", category: "Edge & Distributed", description: "Deploying models to edge locations (factories, retail).", businessValue: "Enables real-time decisions without relying on slow internet.", solution: "TRUSTGRID AI Edge Node syncs quantized models locally and aggregates metadata back to the central cloud.", outcome: "Ultra-reliable on-site AI processing.", kpis: "<20ms inference at the edge; 99.9% uptime offline." },
  { id: 18, title: "Real-Time LLM Guardrails", category: "Security & Compliance", description: "Intercepting prompts/responses to block malicious content.", businessValue: "Protects brands from lawsuits, PR disasters, and exploitation.", solution: "TRUSTGRID AI injects an ultra-fast filtering model inline before the main LLM, dropping bad requests.", outcome: "Safe, brand-compliant AI interactions.", kpis: "<5ms guardrail latency; blocks 95%+ of prompt injections." },
  { id: 19, title: "LLM-as-a-Judge Pipelines", category: "Agentic & Automation", description: "Using AI to automatically score other AI models.", businessValue: "Scalable, automated QA for AI outputs without massive human teams.", solution: "TRUSTGRID AI spins up ephemeral \"judge\" instances to evaluate outputs and tears them down immediately.", outcome: "Rapid, cost-effective model evaluation.", kpis: "Evaluates 10,000 outputs/hour at 90% less cost than humans." },
  { id: 20, title: "Token-Level Cost Attribution", category: "FinOps & Optimization", description: "Tracking exactly which features/users consume AI compute.", businessValue: "Allows product teams to calculate exact ROI of AI features.", solution: "TRUSTGRID AI's Observability Dashboard logs every token and tags it to specific API keys/features.", outcome: "Financial transparency of AI usage.", kpis: "Granular cost tracking down to 1/1000th of a cent per feature." },
  { id: 21, title: "Async Video Gen Queuing", category: "Multi-Modal & Media", description: "Handling long-running video generation requests.", businessValue: "Prevents user-facing apps from timing out during heavy renders.", solution: "TRUSTGRID AI's Async Queue processes renders in the background and fires a webhook when ready.", outcome: "Smooth UX for heavy media generation.", kpis: "Supports render times of 30+ minutes with 0% frontend timeouts." },
  { id: 22, title: "3D Asset Generation (NeRFs)", category: "Multi-Modal & Media", description: "Orchestrating multi-GPU processing for 3D models.", businessValue: "Powers e-commerce (3D views) and gaming by automating asset creation.", solution: "TRUSTGRID AI distributes the heavy math for Gaussian Splatting across interconnected GPUs.", outcome: "Rapid generation of photorealistic 3D environments.", kpis: "Reduces 3D creation from days to hours; utilizes 8+ GPUs in parallel." },
  { id: 23, title: "Medical Imaging (DICOM)", category: "Industry Vertical", description: "Processing specialized, massive medical files securely.", businessValue: "Accelerates diagnostic AI in healthcare while maintaining compliance.", solution: "TRUSTGRID AI provides HIPAA-compliant environments with native DICOM parsing.", outcome: "Faster, compliant medical diagnostics.", kpis: "Processes 3D MRI scans in <2s; 100% HIPAA compliance." },
  { id: 24, title: "Distributed Image Tiling", category: "Multi-Modal & Media", description: "Generating massive 8K+ images in parallel.", businessValue: "Enables high-end digital advertising at massive scales.", solution: "TRUSTGRID AI splits the canvas, assigns tiles to separate GPUs, and stitches the image seamlessly.", outcome: "Creation of ultra-high-res assets impossible on single GPUs.", kpis: "Generates 8K+ images in <10s; seamless stitch accuracy." },
  { id: 25, title: "Sub-200ms Voice Translation", category: "Multi-Modal & Media", description: "Real-time translation of live phone calls.", businessValue: "Breaks down global language barriers for customer service.", solution: "TRUSTGRID AI co-locates STT, Translation LLM, and TTS on a single node to eliminate network hops.", outcome: "Natural, uninterrupted cross-lingual conversation.", kpis: "<180ms end-to-end voice translation latency." },
  { id: 26, title: "Mass Parallel Transcription", category: "Multi-Modal & Media", description: "Transcribing thousands of hours of audio simultaneously.", businessValue: "Makes massive media libraries searchable and actionable.", solution: "TRUSTGRID AI's Batch Orchestrator distributes audio files across a fleet of Whisper-optimized GPUs.", outcome: "Rapid monetization of unstructured audio.", kpis: "Transcribes 1,000 hours of audio in under 2 hours." },
  { id: 27, title: "Real-Time Noise Suppression", category: "Multi-Modal & Media", description: "Cleaning audio live for streaming/broadcasting.", businessValue: "Improves audio quality for remote workers and live streams.", solution: "TRUSTGRID AI deploys optimized audio models on edge GPUs with frame-by-frame processing.", outcome: "Studio-quality audio from any location.", kpis: "<10ms audio processing delay; 20dB+ noise reduction." },
  { id: 28, title: "Synthetic Data Factories", category: "Training & Fine-Tuning", description: "Generating AI data to train other AI models.", businessValue: "Overcomes data scarcity and privacy issues in training.", solution: "TRUSTGRID AI runs a closed loop: Generator creates data → Discriminator validates → saves to storage.", outcome: "Continuous, high-quality training data creation.", kpis: "Generates 1M high-fidelity records/day; 95%+ statistical similarity." },
  { id: 29, title: "GPU-Accelerated Unstructured ETL", category: "Data & ETL", description: "Rapidly parsing messy enterprise documents.", businessValue: "Turns useless file silos into RAG-ready knowledge.", solution: "TRUSTGRID AI spins up high-memory workers optimized for OCR, layout parsing, and chunking.", outcome: "Fast preparation of enterprise knowledge bases.", kpis: "Parses 10,000 complex PDFs per hour." },
  { id: 30, title: "Deduplication at Scale", category: "Data & ETL", description: "Cleaning web-scraped datasets before training.", businessValue: "Prevents model collapse and reduces training costs.", solution: "TRUSTGRID AI utilizes GPU-accelerated MinHash to find/delete duplicates in terabyte-scale sets.", outcome: "Faster, cheaper, higher-quality training.", kpis: "Deduplicates 1TB in hours; reduces dataset size by 20-30%." },
  { id: 31, title: "Webhook-to-GPU Triggers", category: "Agentic & Automation", description: "Triggering AI tasks only when specific events occur.", businessValue: "Ensures AI compute is used exactly when needed.", solution: "TRUSTGRID AI integrates with S3/Kafka to spin up serverless GPUs, execute, and instantly hibernate.", outcome: "100% event-driven, highly efficient backend.", kpis: "<2s from event trigger to GPU execution; billed per-millisecond." },
  { id: 32, title: "Serverless Function Calling", category: "Scaling & Infrastructure", description: "Breaking AI apps into independent, auto-scaling microservices.", businessValue: "Increases developer agility and independent scaling.", solution: "TRUSTGRID AI deploys individual models as serverless functions scaling based on their own traffic.", outcome: "Resilient, modular AI architecture.", kpis: "Zero infra management overhead; independent auto-scaling." },
  { id: 33, title: "Automated Quantization", category: "FinOps & Optimization", description: "Compressing models automatically upon upload.", businessValue: "Makes large models cheaper and faster to run automatically.", solution: "TRUSTGRID AI's Registry compiles uploaded FP16 models down to INT8/INT4 (AWQ/GPTQ) on deploy.", outcome: "Instant performance optimization for any model.", kpis: "2-4x faster inference; 50% VRAM reduction automatically." },
  { id: 34, title: "Multi-LoRA Dynamic Swapping", category: "Training & Fine-Tuning", description: "Serving dozens of custom models from one base model.", businessValue: "Massively reduces infra costs for multi-tenant SaaS AI.", solution: "TRUSTGRID AI keeps one base model in VRAM and hot-swaps LoRA adapters in milliseconds.", outcome: "One GPU does the work of twenty.", kpis: "80% VRAM reduction; <50ms adapter swap time." },
  { id: 35, title: "Automated KV-Cache Mgmt", category: "Inference & Routing", description: "Caching repeated context to save compute.", businessValue: "Slashes costs and latency for chat apps with static system prompts.", solution: "TRUSTGRID AI caches Key-Value pairs of system prompts, bypassing recomputation on every turn.", outcome: "Faster, cheaper multi-turn conversations.", kpis: "50% reduction in tokens processed; 30% lower latency." },
  { id: 36, title: "Semantic Load Balancing", category: "Inference & Routing", description: "Routing based on prompt length, not just volume.", businessValue: "Prevents out-of-memory (OOM) errors by sending long prompts to high-memory nodes.", solution: "TRUSTGRID AI inspects token count and routes long-context to 80GB+ nodes, short to smaller GPUs.", outcome: "Elimination of OOM crashes; optimal hardware usage.", kpis: "0% OOM errors; 25% better cluster throughput." },
  { id: 37, title: "Shadow Deployment", category: "Agentic & Automation", description: "Testing new models on live traffic without user impact.", businessValue: "De-risks model updates by catching hallucinations before they hit users.", solution: "TRUSTGRID AI duplicates live traffic to a shadow cluster running the new model, logging results.", outcome: "Safe, confident model upgrades.", kpis: "100% risk-free testing; automated side-by-side accuracy metrics." },
  { id: 38, title: "Automated Red-Teaming", category: "Security & Compliance", description: "Isolated environments to stress-test AI for safety.", businessValue: "Proactively finds jailbreak vulnerabilities before malicious users do.", solution: "TRUSTGRID AI provisions secure \"attack\" nodes where adversarial models probe target models.", outcome: "Stronger security posture and brand protection.", kpis: "Runs 10,000+ adversarial attacks/hour; automated vuln reports." },
  { id: 39, title: "Multi-Cloud GPU Bursting", category: "Edge & Distributed", description: "Starting on-prem, bursting to AWS/Azure when full.", businessValue: "Balances data privacy (on-prem) with elastic scalability (cloud).", solution: "TRUSTGRID AI monitors on-prem capacity and routes overflow to public clouds via secure tunnels.", outcome: "Infinite scale without compromising data sovereignty.", kpis: "Seamless failover in <10s; pay-for-what-you-use cloud bursting." },
  { id: 40, title: "AI-Native NPC Hosting", category: "Industry Vertical", description: "Powering dynamic video game characters via AI.", businessValue: "Replaces scripted dialogue with dynamic, unscripted AI interactions.", solution: "TRUSTGRID AI co-locates lightweight LLMs with game servers to guarantee strict latency.", outcome: "Next-generation gaming experiences.", kpis: "<50ms added latency to game loop; 1000s of concurrent NPCs." },
  { id: 41, title: "Cross-Modal Retrieval (Text-to-Video)", category: "Multi-Modal & Media", description: "Embedding video frames for semantic search via text prompts.", businessValue: "Allows users to search massive video archives using natural language.", solution: "TRUSTGRID AI orchestrates distributed video-to-frame splitting and multi-GPU embedding generation.", outcome: "Monetizable, highly searchable video libraries.", kpis: "Processes 1 hour of video for search in <5 minutes." },
  { id: 42, title: "Federated Learning Orchestration", category: "Edge & Distributed", description: "Training models across distributed hospital/bank data centers.", businessValue: "Trains on sensitive data without moving it, ensuring compliance.", solution: "TRUSTGRID AI deploys edge training agents, aggregating weight updates centrally via encrypted channels.", outcome: "Compliant, decentralized model improvement.", kpis: "100% data residency; <5% accuracy loss vs. centralized training." },
  { id: 43, title: "Sandboxed AI Code Execution", category: "Security & Compliance", description: "Providing secure compute for AI coding agents to run/test code.", businessValue: "Powers \"Devin-like\" autonomous software engineers safely.", solution: "TRUSTGRID AI spins up secure, ephemeral Docker containers with isolated CPUs/GPUs for code execution.", outcome: "Safe, autonomous software development.", kpis: "<2s container spin-up; 100% network isolation from host." },
  { id: 44, title: "Dynamic Context Pruning", category: "Inference & Routing", description: "Infra-level truncation of less relevant RAG context.", businessValue: "Fits more relevant data into strict LLM token limits automatically.", solution: "TRUSTGRID AI's RAG gateway runs a lightweight scoring model to drop low-relevance chunks pre-inference.", outcome: "Higher quality answers within token limits.", kpis: "30% reduction in prompt tokens; 15% increase in answer accuracy." },
  { id: 45, title: "Multi-Agent Debate Infra", category: "Agentic & Automation", description: "Running 3-5 LLMs in parallel to argue and reach consensus.", businessValue: "Solves highly complex math, logic, or legal reasoning tasks.", solution: "TRUSTGRID AI's Concurrency Engine runs parallel GPU threads, feeding outputs into a \"Judge\" model instantly.", outcome: "Superior reasoning for complex enterprise tasks.", kpis: "3x reduction in logical hallucinations; <5s consensus time." },
  { id: 46, title: "Real-Time Ad-Creative Gen", category: "Industry Vertical", description: "Generating thousands of ad image variations on the fly.", businessValue: "Enables hyper-personalized marketing at massive scale.", solution: "TRUSTGRID AI caches base ad templates in VRAM and dynamically swaps elements based on user profiles.", outcome: "Massive scale of personalized marketing assets.", kpis: "1000+ unique ad variations generated per second." },
  { id: 47, title: "Automated Prompt Optimization", category: "Agentic & Automation", description: "Running hundreds of prompt variations to find the optimal one.", businessValue: "Eliminates manual prompt engineering guesswork.", solution: "TRUSTGRID AI's optimizer runs batch inference tests across prompt candidates, selecting the highest-scoring one.", outcome: "Maximized model performance automatically.", kpis: "Tests 500 prompts in 10 minutes; auto-deploys the winner." },
  { id: 48, title: "Time-Series LLM Forecasting", category: "Industry Vertical", description: "Converting numerical data into text tokens for LLM forecasting.", businessValue: "Brings LLM reasoning to financial and IoT forecasting.", solution: "TRUSTGRID AI provides specialized tokenization workers that stream numerical data to LLMs efficiently.", outcome: "Enhanced forecasting over traditional ML models.", kpis: "Processes 10M data points/second into LLM-ready tokens." },
  { id: 49, title: "Heterogeneous GPU Sharding", category: "Scaling & Infrastructure", description: "Splitting a massive model across different GPU types (A100 + H100).", businessValue: "Maximizes utilization of mixed legacy and next-gen hardware.", solution: "TRUSTGRID AI's pipeline automatically adjusts tensor parallelism based on varying GPU memory/speed.", outcome: "No hardware left behind; flexible capacity.", kpis: "Enables 400B+ parameter models on mixed-cluster hardware." },
  { id: 50, title: "GNN + LLM Hybrid Routing", category: "Industry Vertical", description: "Connecting Graph Neural Networks with LLMs for fraud detection.", businessValue: "Combines relationship mapping with natural language reasoning.", solution: "TRUSTGRID AI co-locates Neo4j/Memgraph with LLMs, passing graph traversals directly as context.", outcome: "Uncover hidden fraud rings intelligently.", kpis: "10x faster fraud ring detection; sub-second graph-to-LLM handoff." },
  { id: 51, title: "Autonomous Vehicle Sim Gen", category: "Industry Vertical", description: "Generating photorealistic synthetic driving scenarios.", businessValue: "Provides infinite, safe training data for self-driving car models.", solution: "TRUSTGRID AI manages heavy 3D rendering pipelines (Unreal Engine + LLMs) on cluster GPUs.", outcome: "Faster autonomous vehicle training cycles.", kpis: "Renders 1000 synthetic driving hours per day at 60 FPS." },
  { id: 52, title: "Live Sports Analytics", category: "Industry Vertical", description: "Real-time computer vision on live video feeds for stats.", businessValue: "Powers automated broadcasting, highlight generation, and betting data.", solution: "TRUSTGRID AI ingests live RTMP streams, runs YOLO/Tracking models, and outputs JSON stats instantly.", outcome: "Real-time sports intelligence.", kpis: "<100ms delay from live action to stat generation; 30 FPS processing." },
  { id: 53, title: "Enterprise Contract Diffing", category: "Industry Vertical", description: "Comparing hundreds of pages of legal contracts instantly.", businessValue: "Accelerates M&A due diligence and legal review.", solution: "TRUSTGRID AI parallelizes document comparison across GPUs, highlighting semantic and textual differences.", outcome: "Days of legal work reduced to minutes.", kpis: "Compares 500-page contracts in <15 seconds." },
  { id: 54, title: "Inference-Level Watermarking", category: "Security & Compliance", description: "Injecting imperceptible watermarks into AI outputs at runtime.", businessValue: "Proves content was generated by a specific enterprise model/brand.", solution: "TRUSTGRID AI injects a lightweight cryptographic watermarking layer post-token-generation.", outcome: "IP protection and AI provenance tracking.", kpis: "0% degradation in text quality; 99.9% watermark detection accuracy." },
  { id: 55, title: "Ephemeral Notebook-as-a-Service", category: "Security & Compliance", description: "Spinning up secure Jupyter environments for external contractors.", businessValue: "Allows third-party data scientists to work on restricted data safely.", solution: "TRUSTGRID AI spins up timed, GPU-backed Jupyter instances that automatically self-destruct after a TTL.", outcome: "Secure, governed external data collaboration.", kpis: "<30s environment provisioning; 100% automated data destruction post-TTL." },
  { id: 56, title: "End-to-End S2ST Translation", category: "Multi-Modal & Media", description: "Speech-to-Speech translation without text intermediaries.", businessValue: "Preserves tone, emotion, and voice identity across languages.", solution: "TRUSTGRID AI hosts massive unified models (like SeamlessM4T) requiring highly synchronized GPU clusters.", outcome: "Hyper-realistic dubbed content or calls.", kpis: "<300ms latency; 90%+ speaker voice identity retention." },
  { id: 57, title: "Genomic Sequence Analysis", category: "Industry Vertical", description: "Using transformers to process DNA/RNA sequences.", businessValue: "Accelerates pharmaceutical R&D and disease marker discovery.", solution: "TRUSTGRID AI optimizes long-context windows specifically for nucleotide base-pair tokenization.", outcome: "Faster drug discovery pipelines.", kpis: "Processes 1 Billion base pairs in <2 hours on a single node." },
  { id: 58, title: "Supply Chain Digital Twins", category: "Industry Vertical", description: "Running massive agent simulations of supply disruptions.", businessValue: "Tests \"what-if\" scenarios to build resilient logistics.", solution: "TRUSTGRID AI hosts hundreds of simulated \"agent\" companies interacting in a sandboxed GPU environment.", outcome: "Proactive supply chain risk management.", kpis: "Simulates 1 year of supply chain activity in 4 hours." },
  { id: 59, title: "Precision Agriculture Vision", category: "Industry Vertical", description: "Processing drone imagery on edge GPUs for crop blight.", businessValue: "Saves crops by identifying disease/pests in real-time in the field.", solution: "TRUSTGRID AI Edge processes high-res multispectral imagery offline and syncs alerts to the cloud.", outcome: "Increased crop yields through early detection.", kpis: "<50ms field-level processing; 98% blight detection accuracy offline." },
  { id: 60, title: "Dynamic Token Pricing Engine", category: "FinOps & Optimization", description: "Adjusting API prices in real-time based on cluster load.", businessValue: "Maximizes profit margins for AI API providers.", solution: "TRUSTGRID AI's billing mesh adjusts per-token costs dynamically based on energy costs and GPU availability.", outcome: "Highly profitable, elastic AI API business models.", kpis: "Real-time pricing updates in <500ms; 15% margin improvement." },
  // ── Cybersecurity & Threat Defense ──────────────────────────────────────────
  { id: 61, title: "Automated Attack Surface Mapping", category: "AI Penetration Testing", description: "Using LLMs to continuously read codebases, APIs, and network topology to find vulnerabilities.", businessValue: "Replaces slow, manual penetration testing with continuous, automated vulnerability discovery.", solution: "TRUSTGRID AI provides secure, high-memory GPU environments to run static code analysis LLMs and graph neural networks across massive repositories.", outcome: "Constant, real-time visibility into exploitable attack surfaces.", kpis: "Scans 10M+ lines of code in <1 hour; 40% higher vulnerability detection vs. traditional SAST." },
  { id: 62, title: "Intelligent Exploit Generation", category: "AI Penetration Testing", description: "AI agents dynamically writing custom exploits (e.g., buffer overflows) based on newly discovered zero-days.", businessValue: "Proves the exploitability of vulnerabilities instantly, forcing faster patching.", solution: "TRUSTGRID AI hosts autonomous coding agents in heavily isolated, air-gapped GPU sandboxes to generate and test exploit code safely.", outcome: "Rapid, safe validation of critical vulnerabilities.", kpis: "Reduces exploit proof-of-concept generation from days to minutes; 100% sandbox containment." },
  { id: 63, title: "Dynamic Payload Obfuscation", category: "AI Penetration Testing", description: "Generating polymorphic malware/payloads using AI to test if enterprise EDR/XDR systems can detect them.", businessValue: "Tests the true efficacy of endpoint security under adversarial AI conditions.", solution: "TRUSTGRID AI's multi-tenant GPU fabric generates thousands of mutated binary variants simultaneously, isolated from the corporate network.", outcome: "Hardened endpoint detection and response (EDR) rules.", kpis: "Tests 10,000+ mutated payloads per hour; improves EDR detection rates by 35%." },
  { id: 64, title: "Line-Rate Network Anomaly Detection", category: "Managed Threat Defense", description: "Analyzing raw network packets (PCAP/Netflow) in real-time using transformer models.", businessValue: "Catches stealthy, slow-and-low data exfiltration that signature-based firewalls miss.", solution: "TRUSTGRID AI deploys streaming-optimized AI models directly on edge GPUs co-located with network taps, processing data at line rate.", outcome: "Real-time interception of covert data theft.", kpis: "Analyzes 100 Gbps of network traffic with <5ms added latency; 99% anomaly detection accuracy." },
  { id: 65, title: "Zero-Day Threat Intel Extraction", category: "Managed Threat Defense", description: "LLMs autonomously reading dark web forums, foreign tech blogs, and PDFs to extract emerging IOCs.", businessValue: "Provides early warning systems for threats before they appear in commercial databases.", solution: "TRUSTGRID AI orchestrates web-scraping agents and multi-lingual NLP models to process and contextualize unstructured threat data 24/7.", outcome: "Proactive defense against emerging, undocumented threats.", kpis: "Processes 50,000 dark web posts/day; delivers IOC intel 72 hours ahead of traditional vendors." },
  { id: 66, title: "Automated SOAR Playbook Execution", category: "Managed Threat Defense", description: "Using LLMs to read security alerts, understand context, and write Python scripts to contain threats.", businessValue: "Drastically reduces Mean Time to Respond (MTTR) by automating junior analyst tasks.", solution: "TRUSTGRID AI provides low-latency inference for agentic models that interface directly via API with SIEM/SOAR platforms (Splunk, Palo Alto).", outcome: "Instant, context-aware threat containment.", kpis: "Reduces MTTR from hours to <3 minutes; automates 80% of Tier-1 SOC alerts." },
  { id: 67, title: "Multi-Modal Phishing Defense", category: "Managed Threat Defense", description: "Analyzing not just email text, but screenshots of landing pages and voice audio (vishing) for fraud.", businessValue: "Defeats modern, AI-generated phishing that bypasses traditional text spam filters.", solution: "TRUSTGRID AI co-locates Vision, NLP, and Audio models to perform simultaneous multi-modal analysis of suspicious communications.", outcome: "Near-perfect blocking of sophisticated social engineering.", kpis: "99.5% phishing detection rate; 90% reduction in false positives." },
  { id: 68, title: "Continuous Purple Teaming", category: "Breach & Attack Simulation", description: "AI acting simultaneously as the Red Team (attacking) and Blue Team (defending) in a loop.", businessValue: "Moves security testing from a point-in-time snapshot to a continuous, self-improving loop.", solution: "TRUSTGRID AI orchestrates parallel GPU clusters: one running adversarial attack agents, the other running defense/healing agents, sharing telemetry in real-time.", outcome: "Evolving, self-healing security postures.", kpis: "Executes 1000s of attack/defense cycles daily; continuous security posture improvement." },
  { id: 69, title: "LLM-Specific Attack Simulation", category: "Breach & Attack Simulation", description: "Simulating prompt injections, jailbreaks, and token-leakage attacks against the company's own AI apps.", businessValue: "Secures the enterprise's external-facing AI chatbots and internal copilots.", solution: "TRUSTGRID AI spins up specialized red-team LLMs to continuously bombard target LLM endpoints hosted on the same platform.", outcome: "Hardened enterprise AI applications.", kpis: "Tests 50,000 adversarial prompts/day; identifies 95% of jailbreak vectors before users do." },
  { id: 70, title: "Lateral Movement Emulation", category: "Breach & Attack Simulation", description: "AI agents simulating how a hacker would move through the network after gaining initial access.", businessValue: "Identifies blind spots in network segmentation and IAM permissions.", solution: "TRUSTGRID AI hosts persistent AI agents that safely emulate credential dumping and lateral traversal techniques within a virtualized network twin.", outcome: "Validation of zero-trust architecture effectiveness.", kpis: "Maps lateral movement paths 10x faster than human red teams; 100% safe environment." },
  { id: 71, title: "Finance: Real-Time Deepfake Voice Detection", category: "Cybersecurity Verticals", description: "Analyzing voice biometrics in live phone-banking calls to detect synthetic audio.", businessValue: "Prevents massive financial fraud from AI-cloned CEO/customer voices.", solution: "TRUSTGRID AI deploys ultra-low-latency audio classification models on edge GPUs directly inside telecom/PBX infrastructure.", outcome: "Real-time blocking of vishing attacks.", kpis: "<200ms detection latency; 98.5% accuracy in identifying AI-generated voices." },
  { id: 72, title: "Healthcare: PHI Exfiltration Prevention", category: "Cybersecurity Verticals", description: "Monitoring AI copilots to ensure they don't leak Patient Health Information (PHI) in prompts/responses.", businessValue: "Maintains HIPAA compliance while allowing doctors to use AI for note-taking.", solution: "TRUSTGRID AI injects a lightweight, GPU-accelerated NER guardrail that masks or blocks PHI in real-time.", outcome: "Safe, compliant use of AI in clinical settings.", kpis: "Blocks 100% of accidental PHI egress; <10ms impact on clinician UX." },
  { id: 73, title: "Manufacturing/OT: ICS Ransomware Defense", category: "Cybersecurity Verticals", description: "Using vision and anomaly models to detect abnormal behavior in Industrial Control Systems.", businessValue: "Prevents catastrophic physical damage or shutdowns from targeted OT ransomware.", solution: "TRUSTGRID AI processes time-series sensor data (SCADA/PLC logs) through specialized transformers on isolated industrial GPUs.", outcome: "Early detection of attacks on physical infrastructure.", kpis: "Detects OT anomalies 15 minutes before critical failure; zero disruption to control systems." },
  { id: 74, title: "Government: Air-Gapped Threat Hunting", category: "Cybersecurity Verticals", description: "Running AI threat hunting entirely offline on classified networks.", businessValue: "Allows intelligence agencies to use advanced AI without risking data leakage to the cloud.", solution: "TRUSTGRID AI On-Premise provides a fully air-gapped, local GPU cluster capable of running cutting-edge LLMs for classified data analysis.", outcome: "Next-gen intelligence analysis at scale with zero exfil risk.", kpis: "0 bytes of data leave the classified enclave; supports 70B+ parameter models offline." },
  { id: 75, title: "Retail: Behavioral Biometric Bot Defense", category: "Cybersecurity Verticals", description: "Analyzing mouse movements, keystroke dynamics, and click patterns via AI to stop scalper bots.", businessValue: "Prevents inventory hoarding, credential stuffing, and coupon abuse on e-commerce sites.", solution: "TRUSTGRID AI runs real-time behavioral inference models that process streaming user telemetry data during high-traffic events (e.g., Black Friday).", outcome: "Elimination of automated bot traffic on digital storefronts.", kpis: "Blocks 99% of advanced bots; scales to 1M+ concurrent user behavior analyses." },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Inference & Routing": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Scaling & Infrastructure": "text-purple-400 bg-purple-400/10 border-purple-400/30",
  "Multi-Modal & Media": "text-pink-400 bg-pink-400/10 border-pink-400/30",
  "Training & Fine-Tuning": "text-orange-400 bg-orange-400/10 border-orange-400/30",
  "Security & Compliance": "text-red-400 bg-red-400/10 border-red-400/30",
  "Data & ETL": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "Agentic & Automation": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Edge & Distributed": "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  "Industry Vertical": "text-violet-400 bg-violet-400/10 border-violet-400/30",
  "FinOps & Optimization": "text-lime-400 bg-lime-400/10 border-lime-400/30",
  "AI Penetration Testing": "text-rose-400 bg-rose-400/10 border-rose-400/30",
  "Managed Threat Defense": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  "Breach & Attack Simulation": "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/30",
  "Cybersecurity Verticals": "text-teal-400 bg-teal-400/10 border-teal-400/30",
};

function UseCaseMatrixSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return trustGridUseCases.filter((uc) => {
      const matchCategory = activeCategory === "All Categories" || uc.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        uc.title.toLowerCase().includes(q) ||
        uc.description.toLowerCase().includes(q) ||
        uc.businessValue.toLowerCase().includes(q) ||
        uc.solution.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="trustgrid-use-cases" className="py-24 bg-background border-t border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Cpu className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">TRUSTGRID AI Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            The Complete{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              60 Use Case Matrix
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every GPU-powered AI workload your enterprise will ever need — orchestrated, optimized, and delivered by TRUSTGRID AI's intelligent infrastructure platform.
          </p>
        </motion.div>

        {/* Search + Stats Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search use cases, solutions, KPIs..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border/60 bg-surface/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-accent" />
            <span>
              Showing{" "}
              <span className="font-semibold text-foreground">{filtered.length}</span>
              {" "}of{" "}
              <span className="font-semibold text-foreground">75</span>
              {" "}use cases
            </span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TRUSTGRID_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const colorClass = cat !== "All Categories" ? CATEGORY_COLORS[cat] : "";
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  isActive
                    ? cat === "All Categories"
                      ? "bg-primary/15 border-primary text-primary shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                      : `${colorClass} shadow-md`
                    : "bg-surface/30 border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <Filter className="h-3 w-3" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((uc, index) => {
              const catColor = CATEGORY_COLORS[uc.category] ?? "text-primary bg-primary/10 border-primary/30";
              const isExpanded = expandedId === uc.id;
              return (
                <motion.div
                  key={uc.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                  className="group rounded-2xl border border-border/50 bg-surface/20 hover:bg-surface/40 hover:border-border/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${catColor}`}>
                        {uc.category}
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground/50 font-medium shrink-0">
                        #{String(uc.id).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-gradient-primary transition-all">
                      {uc.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {uc.description}
                    </p>

                    {/* KPI Highlight */}
                    <div className="rounded-lg bg-primary/5 border border-primary/15 px-3 py-2 mb-4">
                      <div className="flex items-center gap-1.5 mb-1">
                        <BarChart3 className="h-3 w-3 text-primary shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Key Stats</span>
                      </div>
                      <p className="text-xs text-foreground/80 font-medium">{uc.kpis}</p>
                    </div>

                    {/* Expand Toggle */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : uc.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-1 border-t border-border/20 mt-1 pt-3"
                    >
                      <span>{isExpanded ? "Hide details" : "View solution & outcome"}</span>
                      <ArrowUpRight className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-3 border-t border-border/30 pt-4">
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <TrendingUp className="h-3.5 w-3.5 text-accent" />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Business Value</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{uc.businessValue}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <Zap className="h-3.5 w-3.5 text-emerald-400" />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">TRUSTGRID Solution</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{uc.solution}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Expected Outcome</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{uc.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <Search className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No use cases match your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All Categories"); }}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Bottom stats band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Use Cases", value: "75", sub: "GPU infra + cybersecurity verticals" },
            { label: "Categories Covered", value: "14", sub: "Infrastructure to threat defense" },
            { label: "Avg Cost Reduction", value: "50-70%", sub: "GPU & inference spend" },
            { label: "Latency Improvements", value: "2×–10×", sub: "Across inference workloads" },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border/50 bg-surface/30 p-5 text-center">
              <div className="text-2xl font-black text-foreground font-mono mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-[11px] text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function GpuPerformanceEngineeringPage() {
  return (
    <>
      <HeroSlider type="gpu" />

      <div className="bg-background">
        {gpuOfferings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      <UseCaseMatrixSection />

      <CTA />
    </>
  );
}

export const Route = createFileRoute("/gpu-performance-engineering")({
  component: GpuPerformanceEngineeringPage,
});
