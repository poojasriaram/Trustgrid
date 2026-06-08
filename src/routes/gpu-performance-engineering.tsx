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
  Clock,
  FileText,
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

interface TimelineRow {
  week: string;
  phase: string;
  activities: string;
  milestone: string;
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
  findings: string;
  optimizations: string[];
  results: CaseStudyResult[];
  quote?: { text: string; attribution: string };
}

interface GpuOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  scopeNote: string;
  statementOfValue: string;
  kpis: KpiRow[];
  benefits: { title: string; description: string }[];
  phases: Phase[];
  timeline: TimelineRow[];
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
      "A structured, data-driven assessment and optimization engagement that delivers a complete visibility map of your GPU estate — across on-premise data centers, cloud deployments, and hybrid architectures — and converts that visibility into actionable optimization strategies that materially improve utilization, reduce waste, and accelerate AI workload throughput.",
    scopeNote:
      "NVIDIA A100/H100/H200/B100/B200 clusters, AMD MI250X/MI300X environments, cloud GPU instances (AWS P5/P4, Azure ND H100, GCP A3), and hybrid multi-cloud GPU deployments. Applicable to training, inference, fine-tuning pipelines, simulation/HPC, and mixed workload environments.",
    statementOfValue:
      "Transform underutilized GPU infrastructure into a high-performance AI factory — reclaiming wasted compute capacity, eliminating hidden bottlenecks, and reducing total infrastructure spend by up to 40% while increasing effective throughput across your entire AI pipeline.",
    kpis: [
      { kpi: "GPU Utilization Rate", impact: "+20% to +60%", context: "Measured as sustained SM occupancy and compute throughput vs. baseline" },
      { kpi: "Total Infrastructure Cost", impact: "-15% to -40%", context: "Cloud + on-premise combined TCO reduction" },
      { kpi: "GPU Idle Time", impact: "-30% to -70%", context: "Time GPUs spend with no assigned work or below utilization thresholds" },
      { kpi: "Resource Efficiency Score", impact: "+25% to +55%", context: "Composite metric: compute, memory, network, and storage utilization balance" },
      { kpi: "Cluster Throughput", impact: "+20% to +50%", context: "Jobs completed per GPU-hour across the full cluster" },
      { kpi: "AI Job Completion Time", impact: "-15% to -45%", context: "End-to-end wall-clock time from job submission to completion" },
      { kpi: "Capacity Planning Accuracy", impact: "+40%", context: "Variance between forecasted and actual GPU demand" },
      { kpi: "ROI on GPU Investments", impact: "+30% to +80%", context: "Measured as value-of-work per dollar of GPU spend" },
    ],
    benefits: [
      { title: "Higher GPU Utilization", description: "Eliminate the silent cost of idle and underutilized GPUs. Move from typical 25–40% utilization to sustained 70–85% across your fleet, converting dormant capacity into productive AI compute." },
      { title: "Intelligent Resource Allocation", description: "Replace guesswork with data-driven workload placement. Match GPU profiles (memory capacity, compute capability, interconnect topology) to workload requirements for optimal resource-to-task alignment." },
      { title: "Significant Cloud Spend Reduction", description: "Identify and eliminate overprovisioned instances, zombie resources, inefficient spot/reserved instance strategies, and misaligned pricing models that inflate cloud GPU bills by 30–50%." },
      { title: "Reduced GPU Idle Time", description: "Implement smart scheduling, preemption policies, and workload orchestration that keep GPUs continuously productive, minimizing costly gaps between training runs and inference batches." },
      { title: "Improved Capacity Planning", description: "Build accurate demand forecasting models that prevent both overprovisioning (wasting money) and underprovisioning (starving teams of compute), enabling confident infrastructure investment decisions." },
      { title: "Faster AI Workloads", description: "Eliminate bottlenecks in data loading, preprocessing, GPU memory transfers, and inter-node communication that silently extend training and inference timelines far beyond theoretical GPU performance." },
    ],
    phases: [
      {
        name: "Phase 1: Infrastructure Discovery & Inventory Mapping",
        duration: "3–5 days",
        activities: [
          "Hardware inventory audit across all GPU clusters and cloud accounts",
          "Network topology mapping (InfiniBand/RoCE fabric analysis, NVLink/NVSwitch configurations)",
          "Storage I/O profiling (training data pipeline, checkpoint write/read patterns)",
          "Scheduler and orchestrator review (SLURM, Kubernetes, Ray, custom platforms)",
          "Monitoring and observability gap analysis",
        ],
        output: "Infrastructure Inventory Atlas — a single source of truth for your GPU estate.",
      },
      {
        name: "Phase 2: Workload Profiling & Characterization",
        duration: "5–7 days",
        activities: [
          "Nsight Systems / Nsight Compute trace collection across representative workloads",
          "Training loop profiling (forward pass, backward pass, gradient sync, optimizer step breakdown)",
          "Inference serving profiling (batch construction, KV-cache management, prefill/decode ratios)",
          "Data pipeline profiling (ETL throughput, GPU starvation events, input pipeline bottlenecks)",
          "Workload classification and tagging by GPU resource requirements",
        ],
        output: "Workload Characterization Library — detailed profiles of every major workload with optimization potential ratings.",
      },
      {
        name: "Phase 3: GPU Utilization Deep Analysis",
        duration: "5–7 days",
        activities: [
          "Roofline analysis per workload (compute-bound vs. memory-bound characterization)",
          "SM occupancy analysis and warp scheduling efficiency evaluation",
          "Memory hierarchy utilization (L1/L2 cache hit rates, HBM bandwidth saturation)",
          "Tensor Core utilization analysis for applicable workloads",
          "Multi-GPU communication overhead quantification (AllReduce, AllGather patterns)",
          "Queue wait time and scheduling efficiency analysis",
        ],
        output: "Utilization Gap Analysis Report — root-cause ranked list of all identified inefficiencies with quantified impact.",
      },
      {
        name: "Phase 4: Bottleneck Identification & Prioritization",
        duration: "3–5 days",
        activities: [
          "Bottleneck dependency mapping (identifying which bottlenecks mask others)",
          "Impact quantification per bottleneck (GPU-hours lost, dollars wasted, time added)",
          "Quick-win identification (changes implementable in days with significant impact)",
          "Deep-dive technical analysis for complex bottlenecks",
          "Risk assessment for each proposed optimization",
        ],
        output: "Prioritized Bottleneck Matrix — a decision-grade ranking of every optimization opportunity.",
      },
      {
        name: "Phase 5: Optimization Implementation",
        duration: "2–4 weeks",
        activities: [
          "Quick-win implementation (Week 1): scheduler tuning, instance right-sizing, resource quota adjustments",
          "Medium-complexity optimizations (Weeks 2–3): data pipeline restructuring, memory optimization, communication pattern improvements",
          "Strategic infrastructure changes (Weeks 3–4): cluster re-architecture, orchestrator migration, hybrid deployment optimization",
          "Continuous A/B measurement to validate impact of every change",
          "Rollback procedures for every implemented change",
        ],
        output: "Implementation Tracker — documented before/after metrics for every optimization applied.",
      },
      {
        name: "Phase 6: Performance Validation & Knowledge Transfer",
        duration: "5–7 days",
        activities: [
          "Production workload re-profiling to validate improvements",
          "Stress testing under peak load conditions",
          "Monitoring dashboard deployment with regression alerting",
          "Knowledge transfer sessions for operations and engineering teams",
          "Best practices documentation and runbook creation",
        ],
        output: "Validated Performance Report — certified before/after metrics with monitoring framework.",
      },
    ],
    timeline: [
      { week: "Week 1", phase: "Discovery & Assessment", activities: "Infrastructure inventory, topology mapping, monitoring gap analysis", milestone: "Infrastructure Atlas delivered" },
      { week: "Week 2", phase: "Profiling & Benchmarking", activities: "Workload instrumentation, trace collection, data pipeline profiling", milestone: "Workload Characterization Library complete" },
      { week: "Week 3", phase: "Analysis & Roadmap", activities: "Utilization gap analysis, bottleneck prioritization, optimization roadmap design", milestone: "Prioritized Bottleneck Matrix & Optimization Roadmap delivered" },
      { week: "Weeks 4–5", phase: "Quick-Win Implementation", activities: "High-impact, low-risk optimizations deployed and validated", milestone: "30–50% of projected savings realized" },
      { week: "Week 6", phase: "Strategic Implementation", activities: "Complex optimizations, infrastructure changes, architecture improvements", milestone: "Full optimization portfolio deployed" },
      { week: "Week 7", phase: "Validation & Hardening", activities: "Production stress testing, regression monitoring, performance certification", milestone: "Validated Performance Report delivered" },
      { week: "Week 8", phase: "Executive Report & Handoff", activities: "Executive briefing, knowledge transfer, monitoring handoff, roadmap for continuous improvement", milestone: "Executive Dashboard live; engagement complete" },
    ],
    totalDuration: "8 weeks (accelerated 4-week option available for focused scope)",
    deliverables: [
      { name: "GPU Infrastructure Inventory Atlas", description: "Complete hardware, software, network, and storage inventory with configuration assessment", audience: "Infrastructure & Operations" },
      { name: "Workload Characterization Library", description: "Detailed GPU resource profiles for every major workload with optimization potential ratings", audience: "Engineering Leadership" },
      { name: "Utilization Gap Analysis Report", description: "Root-cause ranked analysis of GPU utilization inefficiencies with quantified impact per finding", audience: "Engineering & Architecture" },
      { name: "Prioritized Bottleneck Matrix", description: "Decision-grade ranking of all optimization opportunities by impact, complexity, and financial return", audience: "VP Engineering / CTO" },
      { name: "Optimization Implementation Playbook", description: "Step-by-step implementation guide for every recommended optimization with rollback procedures", audience: "Engineering Teams" },
      { name: "Cost Optimization Plan", description: "Detailed financial model showing current vs. optimized GPU spend with phased savings projections", audience: "Finance & Procurement" },
      { name: "Capacity Planning Model", description: "Demand forecasting model for 12–24 month GPU capacity planning with scenario analysis", audience: "Infrastructure Planning" },
      { name: "Executive Performance Dashboard", description: "Real-time monitoring dashboard tracking GPU utilization, cost, throughput, and health metrics", audience: "C-Suite / VP Engineering" },
      { name: "Executive Summary Report", description: "Board-ready summary of findings, implemented improvements, ROI achieved, and strategic recommendations", audience: "C-Suite / Board" },
    ],
    caseStudies: [
      {
        title: "AI Startup — LLM Training Platform",
        profile: "Series C AI startup operating a 200-GPU cluster (NVIDIA A100) for training and serving open-source LLM models. Rapid growth had outpaced infrastructure optimization.",
        challenge: "GPU utilization across the cluster averaged just 31%. Training jobs routinely waited 6–12 hours in queue. Data pipeline bottlenecks caused GPU starvation events during 40% of training runs. Engineering teams were pushing for a $4M cluster expansion.",
        findings: "The bottleneck was not GPU capacity — it was infrastructure efficiency. A single-threaded data preprocessing stage was starving GPUs for 35–45% of training time. SLURM was configured with defaults that fragmented GPU allocation, creating suboptimal placement for multi-GPU jobs. Three separate training jobs were running identical data preprocessing redundantly.",
        optimizations: [
          "Redesigned data pipeline with multi-worker parallel loading, prefetching, and GPU-accelerated preprocessing",
          "Reconfigured SLURM topology-aware scheduling to ensure contiguous GPU placement",
          "Implemented shared preprocessing cache to eliminate redundant computation",
          "Deployed GPU-aware job preemption policies to prioritize high-value training runs",
          "Right-sized instance types for mixed training/inference workloads",
        ],
        results: [
          { metric: "GPU Utilization", before: "31%", after: "72%", improvement: "+41 percentage points" },
          { metric: "Job Queue Wait Time", before: "6–12 hours", after: "15–45 minutes", improvement: "-92%" },
          { metric: "Training Jobs per Day", before: "4.2", after: "9.8", improvement: "+133%" },
          { metric: "Annual GPU Spend", before: "$5.8M", after: "$3.4M", improvement: "-$2.4M savings" },
          { metric: "Cluster Expansion Need", before: "$4M planned", after: "Eliminated", improvement: "$4M avoided" },
        ],
        quote: {
          text: "We were about to spend $4M on GPUs we didn't need. This assessment saved us that capital expenditure and doubled our effective throughput with the infrastructure we already had.",
          attribution: "VP of Engineering",
        },
      },
      {
        title: "Global Insurance Enterprise — AI Risk Modeling",
        profile: "Fortune 100 insurance company running GPU-accelerated risk simulation and AI-driven underwriting models on a hybrid infrastructure spanning on-premise NVIDIA DGX systems and AWS P4d instances.",
        challenge: "Monthly GPU cloud costs had grown to $800K with no visibility into what was driving spend. Different teams provisioned GPU instances independently with no standardization. On-premise DGX systems showed average utilization of 38%, yet teams claimed compute was insufficient.",
        findings: "Assessment uncovered $340K/month in identifiable cloud waste: 47 orphaned GPU instances running with no active workloads, 62 overprovisioned instances where smaller GPU types would deliver equivalent performance, and $120K/month in spot instance interruptions costing more in re-computation than spot savings provided. On-premise DGX systems were misconfigured — power management settings were throttling GPU clock speeds by 15%.",
        optimizations: [
          "Terminated 47 orphaned instances immediately ($89K/month savings)",
          "Right-sized 62 overprovisioned instances ($71K/month savings)",
          "Migrated fault-tolerant batch workloads to properly configured spot strategies ($140K/month savings)",
          "Updated DGX firmware and corrected power management settings (15% performance recovery on-premise)",
          "Implemented centralized GPU resource governance with team-level cost allocation",
          "Deployed auto-scaling policies tied to workload queue depth",
        ],
        results: [
          { metric: "Monthly Cloud GPU Spend", before: "$800K", after: "$496K", improvement: "-38%" },
          { metric: "On-Premise GPU Utilization", before: "38%", after: "67%", improvement: "+29 percentage points" },
          { metric: "Orphaned/Idle Instances", before: "47", after: "0", improvement: "Eliminated" },
          { metric: "Annual Infrastructure Savings", before: "—", after: "$1.8M", improvement: "Direct cost reduction" },
          { metric: "Budget Forecast Accuracy", before: "±35%", after: "±8%", improvement: "+77% improvement" },
        ],
      },
      {
        title: "Healthcare AI Provider — Medical Imaging Pipeline",
        profile: "Healthcare AI company deploying GPU-accelerated medical imaging analysis models across a multi-cloud environment (Azure + GCP) serving 200+ hospital systems with real-time diagnostic AI.",
        challenge: "Training pipeline throughput had decreased 30% over six months despite no change in model architecture. New model training runs that previously completed in 18 hours were now taking 28+ hours, causing missed release deadlines.",
        findings: "Root cause was a systemic data infrastructure problem. Training data was stored across multiple cloud regions, causing 40% of training time spent waiting for data transfers. The pipeline loaded the full medical imaging dataset into GPU memory at startup, causing OOM errors that silently triggered restart cycles adding 3–4 hours per training run. Checkpoint writing to cloud storage was synchronous and unoptimized, adding 45 minutes of I/O wait per training epoch.",
        optimizations: [
          "Co-located training data in the same region and availability zone as GPU clusters (eliminated cross-region transfers)",
          "Implemented streaming data loading with intelligent caching (eliminated OOM restart cycles)",
          "Asynchronous checkpoint writing with background cloud upload (eliminated epoch I/O wait)",
          "Enabled mixed-precision training with automatic loss scaling (reduced GPU memory footprint by 35%)",
          "Implemented gradient accumulation to enable larger effective batch sizes without additional memory",
        ],
        results: [
          { metric: "Training Time per Model", before: "28 hours", after: "14.5 hours", improvement: "-48%" },
          { metric: "GPU Compute Utilization", before: "44%", after: "79%", improvement: "+35 percentage points" },
          { metric: "Data Loading Overhead", before: "40% of training time", after: "6% of training time", improvement: "-85%" },
          { metric: "Monthly Model Releases", before: "2", after: "4", improvement: "+100%" },
          { metric: "Annual Compute Costs", before: "$1.4M", after: "$0.9M", improvement: "-$500K savings" },
        ],
      },
    ],
  },
  {
    id: "llm-inference-acceleration",
    number: "02",
    title: "LLM Inference Acceleration & Optimization",
    description:
      "A specialized engineering engagement that re-architects and optimizes your Large Language Model serving infrastructure to achieve order-of-magnitude improvements in inference throughput, dramatic reductions in per-token cost, and sub-second latency at scale. Our engineers bring deep expertise across the full inference optimization stack — from model-level optimizations (quantization, distillation, speculative decoding) to serving infrastructure engineering (vLLM, TensorRT-LLM, Triton), to deployment architecture design (dynamic batching, KV-cache management, tensor parallelism).",
    scopeNote:
      "LLM serving (GPT-scale, Llama, Mistral, Falcon, proprietary models), vision-language models, embedding models, multi-modal inference pipelines. Applicable to NVIDIA GPUs (H100, A100, L40S, T4), AMD MI300X, and custom accelerators.",
    statementOfValue:
      "Reduce your cost per token by up to 70% while delivering 2X–10X faster inference — enabling you to serve more users, support larger models, and dramatically improve unit economics without sacrificing model quality.",
    kpis: [
      { kpi: "Inference Throughput", impact: "2X–10X", context: "Tokens per second per GPU, measured under production traffic patterns" },
      { kpi: "Cost Per Token", impact: "-20% to -70%", context: "Total cost (compute + infrastructure + operational) per output token" },
      { kpi: "Time to First Token (TTFT)", impact: "-30% to -80%", context: "Prefill latency for user-facing applications" },
      { kpi: "Inter-Token Latency (ITL)", impact: "-25% to -60%", context: "Decode latency between consecutive tokens" },
      { kpi: "GPU Memory Efficiency", impact: "-15% to -50%", context: "GPU memory required per model instance, enabling more models per GPU" },
      { kpi: "Concurrent Users Supported", impact: "+100% to +500%", context: "Simultaneous users served per GPU without latency SLA violations" },
      { kpi: "Request Processing Capacity", impact: "2X–8X", context: "Total requests per second across the serving fleet" },
      { kpi: "Total AI Serving Costs", impact: "-25% to -60%", context: "Monthly infrastructure cost for inference serving" },
    ],
    benefits: [
      { title: "Faster AI Responses", description: "Deliver the responsive, instant-feeling AI experience that users demand. Reduce time-to-first-token from seconds to milliseconds and ensure consistent low-latency responses even under peak load." },
      { title: "More Users Per GPU", description: "Dramatically increase the number of concurrent users each GPU can serve through intelligent batching, memory optimization, and serving architecture redesign. Serve 3–5X more users with the same hardware." },
      { title: "Lower Inference Costs", description: "Attack the largest operational cost in GenAI from every angle: model compression, serving efficiency, hardware optimization, and infrastructure architecture. Achieve sustainable cost-per-token targets that make your unit economics work." },
      { title: "Better User Experience", description: "Eliminate the quality-of-service degradation that occurs under load: inconsistent latency, timeout errors, degraded throughput. Deliver enterprise-grade SLAs for AI-powered applications." },
      { title: "Seamless Scalability", description: "Architect inference serving infrastructure that scales linearly with demand, supports traffic spikes without degradation, and enables cost-efficient capacity expansion as your user base grows." },
      { title: "Model Quality Preservation", description: "All optimizations are validated against your quality metrics (perplexity, accuracy, BLEU, human evaluation) to ensure performance gains never come at the cost of model output quality." },
    ],
    phases: [
      {
        name: "Phase 1: Inference Assessment & Baseline Establishment",
        duration: "1–2 weeks",
        activities: [
          "Current serving architecture documentation and analysis",
          "Production traffic pattern analysis (request rates, payload sizes, concurrency profiles, peak/valley patterns)",
          "Latency decomposition (TTFT, ITL, end-to-end latency breakdown by component)",
          "Throughput benchmarking under steady-state and burst conditions",
          "GPU utilization profiling during inference serving (compute, memory, bandwidth)",
          "Cost-per-token calculation with full infrastructure allocation",
          "Quality baseline establishment (model accuracy metrics under serving conditions)",
          "SLA gap analysis (current performance vs. required performance)",
        ],
        output: "Inference Performance Baseline Report — comprehensive quantification of current state with identified optimization targets.",
      },
      {
        name: "Phase 2: Model-Level Optimization",
        duration: "1–3 weeks",
        activities: [
          "Quantization analysis and implementation (INT8, INT4, GPTQ, AWQ, GGUF — selecting optimal scheme per model and hardware)",
          "Structured and unstructured pruning evaluation",
          "Knowledge distillation assessment for applicable use cases",
          "Model architecture optimization (attention mechanism optimization, MoE routing efficiency)",
          "Speculative decoding implementation for applicable models",
          "KV-cache compression and optimization techniques",
          "Quality impact validation: automated benchmarks + human evaluation panels where applicable",
        ],
        output: "Optimized Model Artifacts — compressed/optimized models with validated quality guarantees and performance benchmarks.",
      },
      {
        name: "Phase 3: Serving Infrastructure Optimization",
        duration: "2–3 weeks",
        activities: [
          "Serving engine evaluation and selection (vLLM, TensorRT-LLM, Triton, SGLang, custom runtimes)",
          "Continuous batching implementation and tuning",
          "Dynamic batching strategy optimization based on traffic patterns",
          "KV-cache management optimization (PagedAttention, prefix caching, cache eviction policies)",
          "Tensor parallelism and pipeline parallelism configuration optimization",
          "CUDA graph optimization for inference workloads",
          "Custom kernel integration for model-specific operations",
          "Flash Attention and memory-efficient attention implementation",
        ],
        output: "Optimized Serving Configuration — production-ready serving setup with benchmarked performance improvements.",
      },
      {
        name: "Phase 4: Deployment Architecture Design",
        duration: "1–2 weeks",
        activities: [
          "Auto-scaling policy design based on latency and throughput SLAs",
          "Load balancing strategy optimization (request routing, prefix-aware routing)",
          "Multi-model serving architecture (model multiplexing, GPU sharing strategies)",
          "Traffic shaping and rate limiting design",
          "Disaster recovery and failover architecture for inference endpoints",
          "Cost-optimized deployment patterns (spot/preemptible instance strategies, reserved capacity planning)",
          "Edge deployment architecture for latency-sensitive applications",
        ],
        output: "Deployment Architecture Blueprint — production deployment design with scaling, reliability, and cost optimization specifications.",
      },
      {
        name: "Phase 5: Production Deployment & Validation",
        duration: "1–2 weeks",
        activities: [
          "Staged production rollout with canary deployment strategy",
          "Production traffic A/B testing (optimized vs. baseline)",
          "Quality validation under production traffic patterns",
          "Performance stress testing and SLA verification",
          "Latency and throughput monitoring deployment",
          "Cost monitoring and alerting setup",
          "Runbook creation for operations teams",
          "Incident response procedures for inference infrastructure",
        ],
        output: "Production-Ready Deployment — validated, monitored, documented inference infrastructure.",
      },
    ],
    timeline: [
      { week: "Weeks 1–2", phase: "Assessment & Baseline", activities: "Traffic analysis, latency decomposition, cost calculation, quality baseline", milestone: "Inference Performance Baseline Report" },
      { week: "Weeks 3–4", phase: "Model Optimization", activities: "Quantization, pruning, speculative decoding, quality validation", milestone: "Optimized model artifacts with quality guarantees" },
      { week: "Weeks 5–7", phase: "Serving Infrastructure", activities: "Runtime optimization, batching, KV-cache, parallelism, custom kernels", milestone: "Serving configuration with benchmarked improvements" },
      { week: "Weeks 8–9", phase: "Architecture & Deployment", activities: "Auto-scaling, load balancing, multi-model serving, DR architecture", milestone: "Deployment Architecture Blueprint" },
      { week: "Week 10", phase: "Production Validation", activities: "Staged rollout, A/B testing, SLA verification, monitoring handoff", milestone: "Production deployment with validated metrics" },
    ],
    totalDuration: "10 weeks (6-week accelerated option for single-model focused engagements)",
    deliverables: [
      { name: "Inference Performance Baseline Report", description: "Comprehensive profiling of current inference performance, costs, and quality metrics", audience: "Engineering & Product" },
      { name: "Optimization Strategy Document", description: "Prioritized optimization roadmap with expected impact per technique and quality trade-off analysis", audience: "VP Engineering / CTO" },
      { name: "Optimized Model Artifacts", description: "Quantized/compressed models with validated quality benchmarks and deployment scripts", audience: "ML Engineering" },
      { name: "Serving Configuration Playbook", description: "Complete serving runtime configuration with tuning parameters and benchmark results", audience: "Infrastructure / DevOps" },
      { name: "Cost-per-Token Analysis", description: "Detailed financial model showing current vs. optimized cost-per-token with unit economics projection", audience: "Finance / Executives" },
      { name: "Deployment Architecture Blueprint", description: "Production deployment design with scaling, reliability, and cost specifications", audience: "Infrastructure Architecture" },
      { name: "Production Deployment Runbook", description: "Step-by-step deployment, monitoring, and incident response procedures", audience: "Operations / SRE" },
      { name: "Performance Monitoring Dashboard", description: "Real-time inference performance dashboard (latency, throughput, cost, quality)", audience: "All Stakeholders" },
    ],
    caseStudies: [
      {
        title: "Global AI Chatbot Platform — Enterprise Conversational AI",
        profile: "Series D AI company providing enterprise conversational AI to 500+ enterprise customers. Processing 2 billion tokens per day across a fleet of 800 NVIDIA A100 GPUs using a fine-tuned Llama-2-70B model.",
        challenge: "Inference serving costs had reached $14M annually and were growing faster than revenue. Response latency averaged 3.2 seconds for typical queries, causing customer complaints and churn risk. The platform needed to support 5X more concurrent users within 12 months to meet contractual obligations.",
        findings: "Unit economics were unsustainable at current cost-per-token levels. The serving stack lacked continuous batching, prefix caching, and modern memory management — leaving 60–70% of potential GPU throughput untapped. Customer acquisition was increasing traffic 15–25% month-over-month, projecting costs to $25M within 12 months at the current trajectory.",
        optimizations: [
          "Implemented AWQ 4-bit quantization with calibration on representative customer conversations (<0.3% quality degradation)",
          "Enabled speculative decoding with a 7B draft model (2.1X decode speedup)",
          "Migrated from custom serving stack to TensorRT-LLM with continuous batching",
          "Implemented PagedAttention with prefix caching for common conversation patterns",
          "Optimized KV-cache management reducing memory per instance by 40%",
          "Deployed CUDA graphs for kernel launch overhead elimination",
          "Redesigned deployment for dynamic auto-scaling based on real-time traffic",
          "Migrated 60% of fleet to H100 GPUs for higher throughput per GPU",
        ],
        results: [
          { metric: "Cost Per Token", before: "$0.0028", after: "$0.0009", improvement: "-68%" },
          { metric: "Time to First Token", before: "3.2s", after: "0.8s", improvement: "-75%" },
          { metric: "Tokens per Second (per GPU)", before: "1,200", after: "5,800", improvement: "4.8X" },
          { metric: "Concurrent Users (per GPU)", before: "50", after: "280", improvement: "5.6X" },
          { metric: "Annual Inference Costs", before: "$14M", after: "$6.2M", improvement: "-$7.8M savings" },
          { metric: "Monthly Capacity (tokens)", before: "60B", after: "200B", improvement: "3.3X" },
          { metric: "Quality Score (accuracy)", before: "94.2%", after: "93.9%", improvement: "-0.3% (within tolerance)" },
        ],
      },
      {
        title: "Legal AI Platform — Document Analysis & Generation",
        profile: "Legal technology company providing AI-powered contract analysis, legal research, and document generation to 2,000 law firms. Running a mixture of GPT-4 API calls and self-hosted fine-tuned models.",
        challenge: "Average response latency was 8 seconds for contract analysis queries — attorneys were abandoning the tool and reverting to manual review. The company was spending $3.8M annually. Self-hosted models ran on aging A10G GPU instances with a custom Flask-based serving stack that processed requests sequentially with no batching.",
        findings: "Sequential request processing meant each query blocked the next. No batching, no prefix caching, and no tiered routing caused all requests — simple and complex alike — to compete for the same compute. The serving stack was bottlenecked at I/O, not compute, leaving GPUs idle for ~70% of query duration.",
        optimizations: [
          "Migrated serving to vLLM with continuous batching (immediately enabling concurrent request processing)",
          "Implemented structured output generation with guided decoding to eliminate post-processing latency",
          "Applied GPTQ 4-bit quantization to the fine-tuned legal analysis model",
          "Redesigned the inference pipeline with a tiered approach: fast classifier routes simple queries to smaller/faster models",
          "Implemented semantic caching for repeated legal research queries (25% cache hit rate achieved)",
          "Migrated from A10G to L40S GPUs (2.4X inference throughput improvement)",
        ],
        results: [
          { metric: "Average Response Latency", before: "8.0 seconds", after: "1.9 seconds", improvement: "-76%" },
          { metric: "P95 Response Latency", before: "14.2 seconds", after: "3.8 seconds", improvement: "-73%" },
          { metric: "Attorney Task Completion Rate", before: "62%", after: "91%", improvement: "+47%" },
          { metric: "Annual Infrastructure Costs", before: "$3.8M", after: "$1.6M", improvement: "-$2.2M savings" },
          { metric: "Concurrent Query Capacity", before: "120", after: "890", improvement: "7.4X" },
          { metric: "User Satisfaction Score", before: "3.1/5", after: "4.6/5", improvement: "+48%" },
        ],
      },
      {
        title: "Customer Service AI Provider — Real-Time Agent Assist",
        profile: "Enterprise SaaS company providing real-time AI agent assistance to 50,000 customer service representatives across 15 contact centers. The AI suggests responses, surfaces knowledge articles, and generates summaries in real-time during live customer interactions.",
        challenge: "The AI system needed to respond within 500ms to be useful during live conversations, but actual latency averaged 1.8 seconds with frequent spikes to 4+ seconds. During peak hours, the system hit GPU capacity limits, triggering request queuing that pushed latency beyond usable thresholds. Monthly GPU cloud costs were $280K.",
        findings: "GPUs were provisioned for peak capacity, resulting in 65% GPU idle time during off-peak hours. No request prioritization meant batch analytics workloads competed with live customer interactions for the same GPU capacity. The 13B production model had no speculative decoding or quantization applied.",
        optimizations: [
          "Deployed TensorRT-LLM with INT8 quantization and continuous batching",
          "Implemented speculative decoding with a 1.3B draft model for the 13B production model",
          "Designed multi-tier serving architecture: lightweight models for simple suggestions, larger models for complex generation",
          "Implemented prefix caching for common customer service scenarios (32% cache hit rate)",
          "Built time-zone-aware auto-scaling that pre-provisions capacity 30 minutes before predicted peak hours",
          "Implemented request prioritization: live customer interactions get priority over batch analytics workloads",
        ],
        results: [
          { metric: "Average Response Latency", before: "1.8 seconds", after: "380ms", improvement: "-79%" },
          { metric: "P99 Latency (peak hours)", before: "4.2 seconds", after: "680ms", improvement: "-84%" },
          { metric: "Concurrent Users Supported", before: "12,000", after: "48,000", improvement: "4X" },
          { metric: "GPU Utilization (off-peak)", before: "18%", after: "62%", improvement: "+244%" },
          { metric: "Monthly GPU Cloud Costs", before: "$280K", after: "$155K", improvement: "-45%" },
          { metric: "Agent Productivity (calls/hour)", before: "6.2", after: "7.8", improvement: "+26%" },
        ],
      },
    ],
  },
  {
    id: "cuda-kernel-engineering",
    number: "03",
    title: "CUDA Kernel Engineering & Performance Tuning",
    description:
      "A deeply technical engineering engagement that delivers custom CUDA kernel development, optimization, and performance tuning to unlock the full computational potential of NVIDIA GPU hardware for your most performance-critical workloads. Our CUDA kernel engineers bring expertise spanning the full NVIDIA architecture stack — from Ampere and Hopper compute capabilities to Blackwell architecture optimizations, from shared memory and register management to Tensor Core programming, from warp-level primitives to cooperative kernel design.",
    scopeNote:
      "Custom CUDA kernel development, existing kernel optimization, CUTLASS/CUB library integration, Tensor Core programming, CUDA graph optimization, multi-stream concurrency, kernel fusion, memory coalescing optimization, warp-level algorithm design, and cooperative kernel patterns. Applicable to training, inference, simulation, scientific computing, and real-time processing workloads.",
    statementOfValue:
      "Extract the maximum computational performance from every CUDA core, Tensor Core, and byte of GPU memory — achieving kernel-level speedups of 2X–10X that compound across your entire AI pipeline and create sustainable performance advantages that competitors cannot match with off-the-shelf tooling.",
    kpis: [
      { kpi: "Individual Kernel Speedup", impact: "2X–10X", context: "Wall-clock execution time reduction for targeted kernels" },
      { kpi: "Memory Bandwidth Utilization", impact: "+20% to +200%", context: "Achieved memory throughput vs. theoretical peak" },
      { kpi: "GPU Occupancy", impact: "+15% to +80%", context: "Streaming multiprocessor occupancy improvement" },
      { kpi: "End-to-End Training Speed", impact: "+20% to +300%", context: "Compound effect of kernel optimizations on training time" },
      { kpi: "Energy Efficiency", impact: "+15% to +50%", context: "Performance per watt improvement through better kernel design" },
      { kpi: "Runtime Reduction", impact: "-20% to -70%", context: "Total GPU runtime for optimized pipeline stages" },
      { kpi: "Host-Device Transfer Overhead", impact: "-30% to -80%", context: "CPU-GPU data transfer time through async and overlap techniques" },
      { kpi: "Tensor Core Utilization", impact: "+40% to +200%", context: "Percentage of time Tensor Cores are actively computing" },
    ],
    benefits: [
      { title: "Maximum GPU Performance", description: "Achieve performance levels that are simply impossible with framework-level optimizations alone. Custom CUDA kernels bypass framework abstractions to directly control GPU hardware, enabling optimizations at the instruction level." },
      { title: "Sustainable Competitive Advantage", description: "Custom-optimized kernels become strategic performance assets. Competitors using standard frameworks cannot match your throughput or latency without equivalent engineering investment." },
      { title: "Compounding Performance Gains", description: "Kernel optimizations compound throughout your pipeline. A 3X faster attention kernel combined with a 2X faster normalization kernel combined with optimized data movement produces pipeline-level speedups that far exceed individual kernel improvements." },
      { title: "Reduced Compute Costs", description: "Faster kernels mean fewer GPU-hours per training run, fewer GPUs needed per inference request, and lower total compute costs. Organizations typically recover CUDA engineering investment within 3–6 months through compute savings." },
      { title: "Future-Proof Architecture", description: "Custom kernels designed with architecture-awareness (Hopper TMA, Blackwell FP4, cooperative groups) are positioned to exploit hardware improvements as you upgrade GPU generations, protecting your engineering investment." },
    ],
    phases: [
      {
        name: "Phase 1: Kernel Profiling & Hot Path Analysis",
        duration: "1–2 weeks",
        activities: [
          "Application-level GPU trace collection using Nsight Systems",
          "Kernel-level profiling using Nsight Compute (execution time, occupancy, throughput, stall reasons)",
          "Roofline analysis per kernel (compute-bound vs. memory-bound classification)",
          "Memory access pattern analysis (coalescing efficiency, bank conflicts, cache hit rates)",
          "Occupancy analysis (register pressure, shared memory allocation, block size optimization)",
          "Data transfer profiling (host-device transfers, peer-to-peer transfers, overlap opportunities)",
          "Execution dependency mapping (kernel launch order, synchronization points, stream utilization)",
        ],
        output: "Kernel Performance Atlas — complete ranked profile of every kernel with optimization potential assessment and root-cause analysis for underperformance.",
      },
      {
        name: "Phase 2: Optimization Strategy & Algorithm Design",
        duration: "1–2 weeks",
        activities: [
          "Optimization technique selection per kernel (memory coalescing, shared memory tiling, register blocking, warp-level primitives, Tensor Core utilization, kernel fusion, algorithm redesign)",
          "Mathematical reformulation where applicable (algorithmic improvements that reduce computational complexity)",
          "Memory hierarchy strategy design (shared memory allocation, register usage, L1/L2 cache utilization)",
          "Thread block and grid configuration optimization",
          "Kernel fusion opportunity identification and fusion strategy design",
          "Precision optimization strategy (FP32 → FP16/BF16/INT8/FP8 with accuracy validation)",
        ],
        output: "Kernel Optimization Blueprint — detailed technical specification for each planned kernel optimization with expected performance impact.",
      },
      {
        name: "Phase 3: Kernel Implementation & Iteration",
        duration: "3–5 weeks",
        activities: [
          "CUDA kernel implementation with architecture-specific optimizations",
          "Shared memory tiling and data staging implementation",
          "Register optimization and occupancy tuning",
          "Warp-level primitive integration (__shfl, __ballot, cooperative groups)",
          "Tensor Core integration via WMMA/MMA PTX instructions or CUTLASS abstractions",
          "Kernel fusion implementation",
          "Asynchronous memory copy and compute overlap implementation",
          "Multi-stream concurrent kernel execution",
          "Iterative profiling and optimization (profile → optimize → measure → repeat)",
        ],
        output: "Optimized CUDA Kernels — production-ready kernel implementations with benchmark results.",
      },
      {
        name: "Phase 4: Validation & Integration",
        duration: "1–2 weeks",
        activities: [
          "Numerical correctness validation against reference implementations",
          "Precision/accuracy impact assessment (ensuring quality metrics are maintained)",
          "Performance stability testing across input sizes and data distributions",
          "Multi-GPU validation (ensuring optimizations work correctly in distributed settings)",
          "Integration testing with surrounding application code",
          "Memory leak and race condition detection",
          "Production pipeline integration with graceful fallback mechanisms",
        ],
        output: "Validated Kernels — correctness-certified, performance-benchmarked, production-ready kernels.",
      },
      {
        name: "Phase 5: Documentation & Knowledge Transfer",
        duration: "1 week",
        activities: [
          "Technical documentation of kernel design decisions, optimization techniques, and performance characteristics",
          "Architecture porting guide (how to adapt optimizations for future GPU architectures)",
          "Performance regression testing framework delivery",
          "Knowledge transfer workshops for your GPU engineering team",
          "Code review and cleanup for long-term maintainability",
        ],
        output: "Complete Kernel Engineering Package — documented, maintainable, transferable kernel codebase.",
      },
    ],
    timeline: [
      { week: "Weeks 1–2", phase: "Profiling & Analysis", activities: "Nsight profiling, roofline analysis, hot path identification, optimization opportunity ranking", milestone: "Kernel Performance Atlas delivered" },
      { week: "Week 3", phase: "Strategy & Design", activities: "Algorithm design, optimization technique selection, fusion planning, precision strategy", milestone: "Kernel Optimization Blueprint approved" },
      { week: "Weeks 4–7", phase: "Implementation & Iteration", activities: "CUDA kernel development, optimization iterations, profiling cycles", milestone: "Optimized kernels meeting target performance" },
      { week: "Weeks 8–9", phase: "Validation & Integration", activities: "Correctness testing, accuracy validation, production integration, stability testing", milestone: "Validated production-ready kernels" },
      { week: "Week 10", phase: "Documentation & Handoff", activities: "Technical docs, knowledge transfer, regression testing framework", milestone: "Complete Kernel Engineering Package delivered" },
    ],
    totalDuration: "8–12 weeks (varies by number and complexity of target kernels)",
    deliverables: [
      { name: "Kernel Performance Atlas", description: "Complete GPU execution profile with ranked kernel analysis and optimization opportunities", audience: "GPU Engineering" },
      { name: "Kernel Optimization Blueprint", description: "Detailed technical specification for each planned optimization with expected performance impact", audience: "Engineering Architecture" },
      { name: "Optimized CUDA Source Code", description: "Production-ready CUDA kernel implementations with build system integration", audience: "Engineering" },
      { name: "Performance Benchmark Report", description: "Comprehensive before/after performance comparison across all optimized kernels", audience: "Engineering Leadership" },
      { name: "Numerical Accuracy Report", description: "Validation of numerical correctness and quality metric preservation", audience: "ML Engineering" },
      { name: "Architecture Porting Guide", description: "Guide for adapting optimizations to future NVIDIA GPU architectures", audience: "GPU Engineering" },
      { name: "Performance Regression Framework", description: "Automated testing suite to detect performance regressions in future development", audience: "DevOps / QA" },
      { name: "Technical Documentation", description: "Complete documentation of kernel design, optimization decisions, and usage guidelines", audience: "Engineering" },
    ],
    caseStudies: [
      {
        title: "Autonomous Vehicle Company — Perception Pipeline",
        profile: "Leading autonomous vehicle company running a real-time perception pipeline that processes 16 camera streams at 30 FPS, performing object detection, depth estimation, and trajectory prediction on NVIDIA Orin and H100 GPUs.",
        challenge: "The perception pipeline was running at 18 FPS on their target hardware — 40% below the 30 FPS requirement for safe autonomous operation. Standard TensorRT optimization had been exhausted. The attention mechanism consumed 45% of total inference time, and the custom NMS operator was a significant bottleneck.",
        findings: "Kernel-level profiling revealed the attention kernel was materializing the full attention matrix in GPU memory, causing HBM bandwidth saturation. The NMS implementation processed one class at a time serially, failing to exploit GPU parallelism. Preprocessing operations ran as separate kernel launches, incurring significant kernel launch overhead.",
        optimizations: [
          "Developed a fused multi-head attention kernel using Flash Attention v2 principles with custom modifications for their specific sequence lengths",
          "Implemented online softmax computation to eliminate full attention matrix materialization in GPU memory",
          "Developed a parallel NMS kernel using warp-level sorting and cooperative filtering (multi-class NMS in a single kernel launch)",
          "Fused preprocessing kernels (normalization, resizing, color space conversion) into a single kernel",
          "Implemented CUDA graph capture for the entire inference pipeline, eliminating kernel launch overhead",
          "Enabled async data transfer overlap with compute using double-buffered input staging",
        ],
        results: [
          { metric: "Perception Pipeline FPS", before: "18 FPS", after: "34 FPS", improvement: "1.9X speedup" },
          { metric: "Attention Kernel Latency", before: "4.2ms", after: "0.8ms", improvement: "5.2X speedup" },
          { metric: "NMS Latency", before: "2.1ms", after: "0.25ms", improvement: "8.5X speedup" },
          { metric: "Total Inference Latency", before: "55ms", after: "29ms", improvement: "-47%" },
          { metric: "GPU Memory Usage", before: "8.2GB", after: "5.1GB", improvement: "-38%" },
          { metric: "Real-Time Safety (30 FPS)", before: "Not met", after: "Exceeded", improvement: "✓ Achieved" },
        ],
      },
      {
        title: "Drug Discovery Platform — Molecular Dynamics Simulation",
        profile: "Computational biology company running GPU-accelerated molecular dynamics simulations for drug discovery. Simulating protein-ligand interactions for pharmaceutical clients to identify promising drug candidates.",
        challenge: "Each molecular dynamics simulation of a protein-ligand complex took 14 days on a 4-GPU node. Pharmaceutical clients needed to screen 50,000 compounds per drug target, requiring 700,000 GPU-days of compute — making the economics untenable.",
        findings: "The simulation kernels were severely memory-bandwidth limited. Force calculation kernels had poor memory access patterns causing cache thrashing. Neighbor list construction was done on CPU, creating GPU starvation during 30% of simulation time. Energy calculation kernels failed to use Tensor Cores despite the workload being amenable to mixed-precision computation.",
        optimizations: [
          "Redesigned force calculation kernels with spatial hashing for better memory locality",
          "Implemented GPU-native neighbor list construction eliminating CPU-GPU synchronization overhead",
          "Developed mixed-precision energy calculation kernels exploiting Tensor Core throughput",
          "Implemented kernel fusion for bonded force calculations (4 separate kernels → 1 fused kernel)",
          "Optimized particle data layout from AoS to SoA for coalesced memory access",
          "Implemented multi-GPU particle decomposition with NCCL-based gradient exchange",
        ],
        results: [
          { metric: "Simulation Time per Complex", before: "14 days", after: "3.8 days", improvement: "3.7X speedup" },
          { metric: "Force Calculation Kernel", before: "Baseline", after: "4.2X faster", improvement: "4.2X speedup" },
          { metric: "GPU Memory Bandwidth Utilization", before: "31% of peak", after: "87% of peak", improvement: "+181%" },
          { metric: "Compounds Screened per Month", before: "2,000", after: "7,400", improvement: "3.7X" },
          { metric: "Compute Cost per Drug Target", before: "$33.6M", after: "$9.1M", improvement: "-73%" },
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
            <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-1/3">KPI</th>
            <th className="text-left px-4 py-3 font-semibold text-accent w-1/4">Typical Impact</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">Context</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
            >
              <td className="px-4 py-3 font-medium text-foreground">{row.kpi}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.impact}</td>
              <td className="px-4 py-3 text-foreground/65">{row.context}</td>
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
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">Metric</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">Before</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">After</th>
            <th className="text-left px-4 py-3 font-semibold text-accent">Improvement</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
            >
              <td className="px-4 py-3 font-medium text-foreground">{row.metric}</td>
              <td className="px-4 py-3 text-foreground/65">{row.before}</td>
              <td className="px-4 py-3 text-foreground">{row.after}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineTable({ rows }: { rows: TimelineRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-28">Week</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-40">Phase</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">Key Activities</th>
            <th className="text-left px-4 py-3 font-semibold text-accent">Milestone</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
            >
              <td className="px-4 py-3 font-semibold text-primary">{row.week}</td>
              <td className="px-4 py-3 font-medium text-foreground">{row.phase}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.activities}</td>
              <td className="px-4 py-3 text-foreground">{row.milestone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeliverablesTable({ deliverables }: { deliverables: Deliverable[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-1/3">Deliverable</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/80">Description</th>
            <th className="text-left px-4 py-3 font-semibold text-accent w-40">Audience</th>
          </tr>
        </thead>
        <tbody>
          {deliverables.map((d, i) => (
            <tr
              key={i}
              className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
            >
              <td className="px-4 py-3 font-medium text-foreground">{d.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{d.description}</td>
              <td className="px-4 py-3 text-foreground">{d.audience}</td>
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
      <div className="p-6 md:p-8 border-b border-border/30 bg-surface/30">
        <div className="flex items-start gap-3">
          <Users className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <h5 className="text-lg font-semibold text-foreground">{study.title}</h5>
            <p className="text-sm text-muted-foreground mt-1">{study.profile}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-accent" /> Challenge
          </h6>
          <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" /> Discovery Findings
          </h6>
          <p className="text-sm text-muted-foreground leading-relaxed">{study.findings}</p>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-500" /> Optimizations Implemented
          </h6>
          <ul className="space-y-2">
            {study.optimizations.map((opt, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{opt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" /> Results
          </h6>
          <ResultsTable results={study.results} />
        </div>

        {study.quote && (
          <blockquote className="border-l-2 border-primary/50 pl-4 py-2 italic bg-primary/5 rounded-r-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">"{study.quote.text}"</p>
            <cite className="text-xs text-accent font-semibold mt-1 block not-italic">— {study.quote.attribution}</cite>
          </blockquote>
        )}
      </div>
    </motion.div>
  );
}

function OfferingSection({ offering }: { offering: GpuOffering }) {
  return (
    <section id={offering.id} className="py-24 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-5xl font-black leading-none font-display bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
              {offering.number}
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-4">
            {offering.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-4">
            {offering.description}
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-4xl leading-relaxed border-l-2 border-border/60 pl-4">
            <span className="font-semibold text-foreground/60">Scope: </span>{offering.scopeNote}
          </p>
        </motion.div>

        {/* Statement of Value */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <Zap className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Statement of Value</p>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">{offering.statementOfValue}</p>
            </div>
          </div>
        </motion.div>

        {/* KPI Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" /> Key Performance Indicators
          </h3>
          <KpiTable kpis={offering.kpis} />
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" /> Customer Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offering.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border/50 bg-surface/20 p-5"
              >
                <h4 className="font-semibold text-foreground mb-2 text-sm">{b.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Phases */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" /> Methodology
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            A structured engineering framework that produces specific artifacts and decision points at every stage.
          </p>
          <div className="space-y-4">
            {offering.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border/40 bg-surface/20 overflow-hidden"
              >
                <div className="flex items-center gap-4 px-5 py-4 border-b border-border/30 bg-surface/30 border-l-2 border-l-primary/50">
                  <span className="text-2xl font-black leading-none font-display shrink-0 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent min-w-[2rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{phase.name}</h4>
                  </div>
                  <span className="text-xs text-accent font-semibold flex items-center gap-1 shrink-0 bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                    <Clock className="h-3 w-3" /> {phase.duration}
                  </span>
                </div>
                <div className="px-5 py-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Activities</p>
                    <ul className="space-y-1.5">
                      {phase.activities.map((act, j) => (
                        <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-accent shrink-0 mt-1.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Output</p>
                    <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3 py-1 bg-primary/5 rounded-r-lg">
                      {phase.output}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" /> Engagement Timeline
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Total duration: <span className="font-semibold text-foreground">{offering.totalDuration}</span>
          </p>
          <TimelineTable rows={offering.timeline} />
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" /> Deliverables
          </h3>
          <DeliverablesTable deliverables={offering.deliverables} />
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> Case Studies
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            Representative engagements demonstrating real-world impact across client environments.
          </p>
          <div className="space-y-8">
            {offering.caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/gpu-performance-engineering")({
  head: () => ({
    meta: [
      { title: "GPU Performance Engineering — Infrastructure, Inference & CUDA Kernel Optimization | Summit AI Architects" },
      { name: "description", content: "Three structured GPU engineering engagements: GPU Infrastructure Assessment, LLM Inference Acceleration, and CUDA Kernel Engineering. Achieve up to 10X throughput gains, 70% cost reduction, and sub-second AI response latency." },
      { property: "og:title", content: "GPU Performance Engineering Offerings | Summit AI Architects" },
      { property: "og:description", content: "GPU Infrastructure Assessment, LLM Inference Acceleration & CUDA Kernel Engineering — 8–12 week engagements delivering measurable throughput and cost improvements." },
      { property: "og:url", content: "/gpu-performance-engineering" },
    ],
    links: [{ rel: "canonical", href: "/gpu-performance-engineering" }],
  }),
  component: GpuPerformancePage,
});

function GpuPerformancePage() {
  return (
    <>
      <PageHero
        eyebrow="GPU Performance Engineering"
        title="Maximize every dollar of GPU spend"
        description="Three specialized engineering engagements — GPU Infrastructure Assessment, LLM Inference Acceleration, and CUDA Kernel Engineering — each delivering measurable, quantified improvements to your AI compute stack."
      />

      {/* Outcome stats bar */}
      <section className="border-b border-border/40 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2X–10X", label: "Kernel Speedup" },
            { value: "–70%", label: "Cost Per Token" },
            { value: "–40%", label: "Infrastructure TCO" },
            { value: "8–12 wks", label: "Typical Engagement" },
          ].map((o) => (
            <div key={o.label}>
              <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">{o.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nav anchors */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {gpuOfferings.map((o) => (
              <a
                key={o.id}
                href={`#${o.id}`}
                className="shrink-0 rounded-md px-3 py-1.5 text-xs text-foreground/70 hover:text-foreground hover:bg-surface/60 transition-colors whitespace-nowrap"
              >
                <span className="font-bold text-primary mr-1.5">{o.number}</span>
                {o.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="bg-background">
        {gpuOfferings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      <CTA />
    </>
  );
}
