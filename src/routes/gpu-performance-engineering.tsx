import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import {
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Target,
  Zap,
  TrendingUp,
  Users,
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

// ─── Page ─────────────────────────────────────────────────────────────────────

function GpuPerformanceEngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="GPU Performance Engineering"
        title={
          <>
            Maximum Performance from <br />
            Every <span className="text-accent">GPU Cycle</span>
          </>
        }
        description="From infrastructure assessment to custom CUDA kernel engineering — we squeeze every FLOP out of your hardware."
      />

      <div className="bg-background">
        {gpuOfferings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      <CTA />
    </>
  );
}

export const Route = createFileRoute("/gpu-performance-engineering")({
  component: GpuPerformanceEngineeringPage,
});
