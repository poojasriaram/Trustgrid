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
  ArrowRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KpiRow {
  kpi: string;
  before: string;
  after: string;
  isNew?: boolean;
}

interface Benefit {
  text: string;
  isNew?: boolean;
}

interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
}

interface CaseStudy {
  title: string;
  industry: string;
  situation: string;
  intervention: string;
  interventionItems?: { label: string; detail: string }[];
  results: CaseStudyResult[];
}

interface LlmOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  enhancement?: string;
  statementOfValue: string;
  before: string[];
  situation: string;
  kpis: KpiRow[];
  benefits: Benefit[];
  timeline: string;
  caseStudies: CaseStudy[];
}

interface CrossCuttingCapability {
  capability: string;
  description: string;
  impact: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const llmOfferings: LlmOffering[] = [
  {
    id: "enterprise-ai-foundation",
    number: "01",
    title: "Enterprise AI Foundation & LLM Factory",
    description:
      "Design, build, and operationalize an enterprise-grade LLM platform enabling secure deployment, governance, observability, lifecycle management, and continuous optimization of AI applications across the organization.",
    enhancement:
      "The platform now includes an LLM Inference Optimization Layer — a serving-architecture tier built on TensorRT-LLM, vLLM, or Triton Inference Server that delivers continuous batching, paged KV-cache management, and model-variant routing so that every downstream AI application inherits optimized latency, throughput, and cost characteristics from day one.",
    statementOfValue:
      "Build once. Scale AI across hundreds of business functions, geographies, and business units — with inference performance and cost efficiency baked into the foundation.",
    before: [
      "Multiple AI pilots running on default HF/vanilla serving stacks",
      "No governance; shadow AI usage across departments",
      "Security concerns and vendor lock-in",
      "No reusable architecture across teams",
      "Each team independently selects models and serving configs — no shared inference optimization",
    ],
    situation:
      "Enterprise wants to move from experimentation to enterprise-scale AI deployment with a production-grade, optimization-aware serving backbone.",
    kpis: [
      { kpi: "AI Projects in Production", before: "<10%", after: ">70%" },
      { kpi: "Time to Deploy AI App", before: "6 Months", after: "6 Weeks" },
      { kpi: "AI Governance Coverage", before: "15%", after: "100%" },
      { kpi: "Infrastructure Utilization", before: "35%", after: "75%" },
      { kpi: "AI Project Failure Rate", before: "60%", after: "20%" },
      { kpi: "Business Unit Adoption", before: "2", after: "25+" },
      { kpi: "P95 Inference Latency", before: "4.2s", after: "0.9s", isNew: true },
      { kpi: "Tokens/GPU/Second", before: "800", after: "3,200", isNew: true },
    ],
    benefits: [
      { text: "Enterprise AI Governance" },
      { text: "Reusable AI Platform" },
      { text: "Faster AI Rollout" },
      { text: "Reduced AI Risk" },
      { text: "Multi-Model Strategy" },
      { text: "Lower Operational Costs" },
      { text: "Optimized Inference Serving Stack (TensorRT-LLM / vLLM)", isNew: true },
      { text: "Model-variant routing — cascade from small → large model based on query complexity", isNew: true },
      { text: "Centralized KV-cache and prompt-cache management", isNew: true },
      { text: "GPU fleet observability (utilization, memory, thermal, queue depth)", isNew: true },
    ],
    timeline: "18–24 Weeks (Assessment 2 wks → Architecture Design 4 wks → Platform Build + Inference Optimization Layer 10–14 wks → Production Rollout 4 wks)",
    caseStudies: [
      {
        title: "Global Insurance Conglomerate",
        industry: "BFSI / Fortune 100",
        situation:
          "A Fortune 100 insurer had 14 separate AI pilot projects across claims, underwriting, actuarial, and customer service — each with its own model, serving infrastructure, and cloud account. No shared platform. Governance was nonexistent; regulators flagged uncontrolled AI usage.",
        intervention:
          "Built an enterprise LLM Factory on a unified platform with a Triton Inference Server backbone, centralized prompt-guardrails, and a model-routing layer that dispatched simple FAQ queries to a fine-tuned 7B model and complex reasoning tasks to a 70B model.",
        results: [
          { metric: "AI apps in production", before: "3", after: "28" },
          { metric: "Governance coverage", before: "12%", after: "100%" },
          { metric: "Avg inference cost/query", before: "$0.11", after: "$0.03" },
          { metric: "Regulatory audit findings", before: "9 critical", after: "0 critical" },
          { metric: "Time to onboard new AI use case", before: "14 weeks", after: "3 weeks" },
        ],
      },
      {
        title: "National Telecom Provider",
        industry: "Telecom / APAC",
        situation:
          "A major APAC telecom had deployed a customer-facing virtual assistant on raw Hugging Face text-generation-inference without batching or caching. Peak-hour latency exceeded 12 seconds; GPU utilization averaged 22%.",
        intervention:
          "Migrated to vLLM with continuous batching, implemented prefix caching for repeated system prompts (~1,800 tokens, identical across 95% of sessions), and introduced speculative decoding with a 1.5B draft model against the serving 13B model.",
        results: [
          { metric: "P95 latency (peak)", before: "12.4s", after: "1.8s" },
          { metric: "GPU utilization", before: "22%", after: "74%" },
          { metric: "Concurrent sessions supported", before: "200", after: "1,800" },
          { metric: "Monthly GPU spend", before: "$184,000", after: "$62,000" },
          { metric: "Customer satisfaction (CSAT)", before: "3.1/5", after: "4.4/5" },
        ],
      },
    ],
  },
  {
    id: "knowledge-intelligence-rag",
    number: "02",
    title: "Enterprise Knowledge Intelligence & RAG Factory",
    description:
      "Build enterprise knowledge systems that connect LLMs to internal documents, contracts, SOPs, policies, research repositories, engineering documents, CRM systems, and ERP platforms.",
    enhancement:
      "Includes a RAG Performance Optimization Module — covering embedding-model selection and distillation, semantic chunking strategies, hybrid sparse+dense retrieval tuning, re-ranker optimization, and context-window budget management to maximize answer accuracy while minimizing token cost.",
    statementOfValue:
      "Turn decades of enterprise knowledge into an AI-accessible strategic asset — with retrieval precision and cost efficiency engineered from the ground up.",
    before: [
      "Knowledge trapped in silos; employees spend hours searching",
      "Duplicate work and inconsistent answers across teams",
      "Naive chunking yields irrelevant retrieval — LLM receives noisy context and hallucinates",
      "Context stuffing drives spiraling token costs",
    ],
    situation:
      "Large enterprises possess millions of documents but employees cannot access information efficiently. RAG implementations suffer from low retrieval precision, excessive context stuffing, and spiraling token costs.",
    kpis: [
      { kpi: "Search Time", before: "2 Hours/Day", after: "10 Minutes" },
      { kpi: "Employee Productivity", before: "Baseline", after: "+35%" },
      { kpi: "Knowledge Reuse", before: "20%", after: "85%" },
      { kpi: "First Contact Resolution", before: "55%", after: "90%" },
      { kpi: "Document Retrieval Accuracy", before: "60%", after: "95%" },
      { kpi: "Knowledge Discovery Time", before: "Days", after: "Seconds" },
      { kpi: "Retrieval Precision@5", before: "48%", after: "92%", isNew: true },
      { kpi: "Hallucination Rate", before: "22%", after: "3%", isNew: true },
      { kpi: "Avg Tokens per Query", before: "12,000", after: "3,800", isNew: true },
      { kpi: "RAG Cost per Query", before: "$0.09", after: "$0.025", isNew: true },
    ],
    benefits: [
      { text: "Enterprise Search" },
      { text: "AI Knowledge Assistant" },
      { text: "Faster Decisions" },
      { text: "Reduced Employee Friction" },
      { text: "Improved Customer Support" },
      { text: "Embedding-model distillation (10x smaller custom embeddings, 97% recall retention)", isNew: true },
      { text: "Hybrid retrieval (BM25 + dense vector) tuned per document domain", isNew: true },
      { text: "Learned re-ranker (cross-encoder) for top-k refinement", isNew: true },
      { text: "Context-window budget optimizer (only send the 3–5 most relevant passages, not 20)", isNew: true },
      { text: "Chunking strategy per document type (contracts vs. engineering drawings vs. emails)", isNew: true },
    ],
    timeline: "8–14 Weeks (optimization modules integrated into standard delivery)",
    caseStudies: [
      {
        title: "Top-20 Global Law Firm",
        industry: "Professional Services",
        situation:
          "The firm stored 40 million legal documents across 6 DMS platforms. Associates spent 2.3 hours per day searching for precedent. A first-generation RAG attempt using OpenAI Ada embeddings and naive 512-token fixed chunking produced 41% precision@5 — lawyers stopped using it within 3 weeks.",
        intervention:
          "Implemented a domain-tuned hybrid retrieval pipeline — fine-tuned a sentence-transformer on 50K lawyer-annotated query-passage pairs (97% recall at 1/10th the parameters), deployed legal-domain BM25 with custom analyzers for citation and statute references, added a cross-encoder re-ranker, and restructured chunking to respect clause boundaries in contracts and section headings in briefs.",
        results: [
          { metric: "Retrieval precision@5", before: "41%", after: "93%" },
          { metric: "Associate search time", before: "2.3 hrs/day", after: "18 min/day" },
          { metric: "RAG adoption rate", before: "8%", after: "89%" },
          { metric: "Billable hours recovered/associate/week", before: "—", after: "6.2 hrs" },
          { metric: "Hallucination rate", before: "19%", after: "2.4%" },
          { metric: "Annual productivity value (2,000 lawyers)", before: "—", after: "~$78M recovered" },
        ],
      },
      {
        title: "Top-5 Pharma R&D Division",
        industry: "Healthcare / Life Sciences",
        situation:
          "The R&D division needed to query 12 million internal documents (clinical trial reports, FDA submissions, research papers, lab notebooks). The existing keyword search missed 55% of relevant results. Token costs for their first RAG prototype were $47,000/month because every query stuffed the full 128K context window.",
        intervention:
          "Built a multi-stage retrieval pipeline: (1) lightweight BM25 pre-filter to narrow from 12M to ~5K candidates, (2) bi-encoder vector search for top 50, (3) cross-encoder re-ranker for final top-5. Implemented a context-budget controller and a query-cache layer eliminating redundant retrieval for common compound/drug-name queries (38% cache hit rate).",
        results: [
          { metric: "Relevant document discovery rate", before: "45%", after: "94%" },
          { metric: "Avg tokens consumed per query", before: "98,000", after: "4,200" },
          { metric: "Monthly RAG infrastructure cost", before: "$47,000", after: "$6,800" },
          { metric: "Researcher time-to-insight", before: "3.5 days", after: "20 minutes" },
          { metric: "Regulatory submission prep time", before: "6 weeks", after: "2 weeks" },
        ],
      },
    ],
  },
  {
    id: "agentic-enterprise-automation",
    number: "03",
    title: "Agentic Enterprise Automation",
    description:
      "Deploy autonomous and semi-autonomous AI agents capable of reasoning, planning, executing workflows, interacting with enterprise systems, and collaborating with human teams.",
    enhancement:
      "Includes an Agent Inference Optimization Layer — agents are token-hungry by nature (multi-step reasoning, tool calls, chain-of-thought). We engineer the agent serving stack with: (a) speculative decoding for faster chain-of-thought generation, (b) step-level model routing (cheap model for simple tool-selection steps, powerful model for final reasoning), (c) KV-cache reuse across agent steps within a single task, and (d) token-budget governance per agent task to prevent runaway cost.",
    statementOfValue:
      "Move from AI answering questions to AI completing work — with each agent task engineered for cost and latency efficiency.",
    before: [
      "Manual workflows with multiple handoffs and repetitive tasks",
      "High operational costs and low throughput",
      "Agent prototypes work in demos but are too slow and expensive for production",
      "Multi-step agents consume 10–50x more tokens than simple Q&A",
    ],
    situation:
      "Organizations seek workforce productivity improvements beyond chatbots but discover that agentic workflows have fundamentally different inference cost and latency profiles than single-turn chat.",
    kpis: [
      { kpi: "Process Completion Time", before: "Days", after: "Minutes" },
      { kpi: "Human Intervention", before: "100%", after: "20%" },
      { kpi: "Ticket Resolution Time", before: "24 Hours", after: "2 Hours" },
      { kpi: "Workflow Throughput", before: "Baseline", after: "4X" },
      { kpi: "Operational Cost", before: "Baseline", after: "-40%" },
      { kpi: "Employee Productivity", before: "Baseline", after: "+50%" },
      { kpi: "Tokens per Agent Task", before: "45,000", after: "8,500", isNew: true },
      { kpi: "Agent Task Latency (P95)", before: "48s", after: "9s", isNew: true },
      { kpi: "Agent Cost per Task", before: "$0.45", after: "$0.08", isNew: true },
    ],
    benefits: [
      { text: "AI Workforce" },
      { text: "Autonomous Operations" },
      { text: "Faster Service Delivery" },
      { text: "Reduced Operating Costs" },
      { text: "Improved Customer Experience" },
      { text: "Step-level model routing — selects cheap vs. powerful LLM per agent reasoning step", isNew: true },
      { text: "KV-cache reuse across multi-turn agent steps (avoid re-processing full prompt at each step)", isNew: true },
      { text: "Token-budget governance per agent (hard caps prevent runaway chain-of-thought loops)", isNew: true },
      { text: "Speculative decoding for chain-of-thought (3x faster reasoning generation)", isNew: true },
      { text: "Agent observability dashboard (tokens/step, latency/step, cost/step, tool-call success rate)", isNew: true },
    ],
    timeline: "8–14 Weeks (extended from 6–12 to incorporate agent optimization engineering)",
    caseStudies: [
      {
        title: "Fortune 500 Financial Services Firm",
        industry: "BFSI",
        situation:
          "A global bank piloted an AI agent for KYC/AML document review. The agent reasoned through 8–15 steps per case. Average task consumed 52,000 tokens, took 58 seconds, and cost $0.52 per case. With 300,000 cases/month, this was $156,000/month — 4x the approved budget.",
        intervention:
          "Implemented step-level model routing: a lightweight 8B classifier determined at each step whether the reasoning task was 'simple extraction' (routed to a quantized 7B model) or 'complex judgment' (routed to the 70B model). Implemented prefix-caching across agent steps so the system prompt, document context, and prior reasoning steps were cached in KV-memory. Added a hard token-budget governor of 10,000 tokens per case with escalation logic.",
        results: [
          { metric: "Tokens per case", before: "52,000", after: "7,800" },
          { metric: "Latency per case (P95)", before: "58s", after: "8.2s" },
          { metric: "Cost per case", before: "$0.52", after: "$0.07" },
          { metric: "Monthly cost (300K cases)", before: "$156,000", after: "$21,000" },
          { metric: "Accuracy (vs. human reviewer)", before: "91%", after: "94%" },
          { metric: "Human escalation rate", before: "100%", after: "18%" },
        ],
      },
      {
        title: "Large E-Commerce Marketplace",
        industry: "Retail",
        situation:
          "A large online marketplace deployed a customer-service agent that handled returns, disputes, and seller inquiries using a single large model for all steps. During peak traffic, agent latency hit 35 seconds, and the company was burning $340,000/month on inference.",
        intervention:
          "Built a three-tier agent serving architecture: (1) a distilled intent classifier (1.3B) for routing and slot-filling, (2) a 7B model for policy retrieval and standard response generation, (3) the full 70B model only for complex dispute resolution. Implemented speculative decoding on the 70B tier using the 7B model as draft. Added semantic caching — semantically similar queries (cosine similarity > 0.95) returned cached agent responses (34% cache hit rate).",
        results: [
          { metric: "Avg agent latency", before: "18s", after: "3.1s" },
          { metric: "P99 agent latency", before: "35s", after: "7.8s" },
          { metric: "Monthly inference cost", before: "$340,000", after: "$68,000" },
          { metric: "Customer resolution rate (automated)", before: "62%", after: "89%" },
          { metric: "Customer satisfaction", before: "3.6/5", after: "4.5/5" },
          { metric: "Cost per resolution", before: "$0.38", after: "$0.05" },
        ],
      },
    ],
  },
  {
    id: "industry-specific-llm",
    number: "04",
    title: "Industry-Specific LLM Solutions",
    description:
      "Purpose-built LLM platforms optimized for specific industries, regulations, workflows, terminology, and operational requirements.",
    enhancement:
      "Each industry solution now includes domain-optimized inference engineering: industry-specific model distillation (compress a general 70B model into a 7–13B specialist that matches domain accuracy), fine-tuned quantization calibration (quantization-aware training with domain-specific calibration data to prevent accuracy loss on industry jargon), and latency SLA engineering tuned to industry-specific workflow requirements (e.g., sub-second for real-time trading, relaxed for batch clinical coding).",
    statementOfValue:
      "Industry expertise embedded directly into AI systems — with domain-specific model compression that delivers 3–10x cost reduction without accuracy loss.",
    before: [
      "Generic models fail on proprietary industry terminology",
      "No latency SLAs tuned to industry-specific workflows",
      "High inference cost using oversized general-purpose models",
      "Compliance gaps in regulated industries",
    ],
    situation:
      "Industry-specific AI demands purpose-built models and serving stacks — not generic deployments. Domain accuracy, latency SLAs, and compliance requirements differ fundamentally by vertical.",
    kpis: [
      { kpi: "Claims Processing Time", before: "5 Days", after: "2 Hours" },
      { kpi: "Underwriting Cycle", before: "3 Days", after: "30 Minutes" },
      { kpi: "Fraud Investigation", before: "8 Hours", after: "30 Minutes" },
      { kpi: "Clinical Documentation Time", before: "2 Hours", after: "15 Minutes" },
      { kpi: "Medical Coding Accuracy", before: "82%", after: "97%" },
      { kpi: "Model Size (Distilled)", before: "70B", after: "7B–13B specialist", isNew: true },
      { kpi: "Inference Cost/Claim", before: "$0.14", after: "$0.012", isNew: true },
      { kpi: "Fraud Scoring Latency", before: "3,200ms", after: "380ms", isNew: true },
      { kpi: "First-Token Latency (Clinical)", before: "2.1s", after: "180ms", isNew: true },
    ],
    benefits: [
      { text: "Domain-accurate models tailored to your industry vocabulary" },
      { text: "Regulatory compliance built into the serving stack" },
      { text: "Latency SLAs engineered per workflow (real-time fraud vs. batch coding)" },
      { text: "Domain distillation: compress 70B → 7-13B specialist with <2% accuracy loss", isNew: true },
      { text: "INT4/INT8 quantization with domain-specific calibration data", isNew: true },
      { text: "Edge-optimized 3–7B models for factory-floor inference on NVIDIA Jetson / IGX", isNew: true },
      { text: "HIPAA-compliant on-prem GPU-encrypted inference for healthcare", isNew: true },
      { text: "Sub-500ms fraud scoring with TensorRT-LLM + CUDA graph capture", isNew: true },
    ],
    timeline: "12–20 Weeks (varies by industry vertical and compliance requirements)",
    caseStudies: [
      {
        title: "Tier-1 Global Bank",
        industry: "BFSI",
        situation:
          "The bank needed real-time fraud detection using LLM analysis of transaction narratives. The general-purpose 70B model scored 96.2% accuracy but had a P95 latency of 3.2 seconds — too slow for real-time transaction screening requiring sub-500ms decisions.",
        intervention:
          "Distilled the 70B model into a 7B fraud-specialist using 4.8M labeled transaction narratives. Applied GPTQ INT4 quantization with fraud-domain calibration data. Deployed on TensorRT-LLM with CUDA graph capture for deterministic latency. Built a two-stage cascade: the 7B model screens all transactions in <400ms; only the top 2% riskiest transactions are escalated to the full 70B model for deep analysis.",
        results: [
          { metric: "Screening latency (P95)", before: "3,200ms", after: "380ms" },
          { metric: "Fraud detection accuracy", before: "96.2%", after: "95.8% (within tolerance)" },
          { metric: "Real-time screening capability", before: "No", after: "Yes" },
          { metric: "Monthly inference cost", before: "$420,000", after: "$51,000" },
          { metric: "Fraudulent transactions caught pre-settlement", before: "34%", after: "91%" },
          { metric: "Annual fraud losses prevented", before: "—", after: "~$23M" },
        ],
      },
      {
        title: "42-Hospital Network",
        industry: "Healthcare",
        situation:
          "The network deployed an LLM for automated ICD-10 medical coding from clinical notes. The initial 70B general model achieved 94% coding accuracy at $0.08/note. With 2.8M notes/month, the annualized cost was $2.7M. IT leadership demanded sub-$500K annual cost.",
        intervention:
          "Distilled a 13B medical-coding specialist trained on 6M anonymized clinical note-to-ICD-code pairs. Applied SmoothQuant INT8 quantization to preserve accuracy on rare disease codes. Implemented a routing layer: simple single-diagnosis notes (68% of volume) handled by the 13B model; complex multi-morbidity notes escalated to the 70B model. Deployed on a private NVIDIA DGX cluster for HIPAA compliance.",
        results: [
          { metric: "Coding accuracy", before: "94%", after: "97.1% (domain tuning improved it)" },
          { metric: "Cost per note", before: "$0.08", after: "$0.011" },
          { metric: "Annual inference cost", before: "$2.7M", after: "$370K" },
          { metric: "Coding turnaround time", before: "48 hours", after: "2 hours" },
          { metric: "Coding staff redeployed to complex cases", before: "—", after: "38 FTEs" },
          { metric: "HIPAA compliance", before: "Cloud risk", after: "Fully on-prem" },
        ],
      },
    ],
  },
  {
    id: "llm-cost-optimization-finops",
    number: "05",
    title: "LLM Inference Optimization & AI FinOps",
    description:
      "This is a deep LLM inference-optimization engineering engagement delivered by specialists with expertise spanning GPU architecture, model compression, serving systems, and workload-aware resource allocation. Research demonstrates that workload-aware GPU allocation across heterogeneous GPU types can reduce deployment costs by up to 77% while maintaining service-level objectives.",
    enhancement:
      "Full-stack optimization across four layers: Model-Level (quantization, distillation, pruning), Inference-Engine (TensorRT-LLM, continuous batching, PagedAttention, speculative decoding), Serving-Architecture (model routing, semantic caching, Mélange-style heterogeneous GPU allocation), and Infrastructure & FinOps (GPU right-sizing, spot strategies, token-level chargeback).",
    statementOfValue:
      "Reduce AI operating costs by 30–77% without sacrificing performance — through deep inference engineering, not just cloud cost management.",
    before: [
      "GPU costs exploding with no optimization strategy",
      "Wrong model choices: using 70B where a distilled 7B suffices",
      "Uncontrolled token consumption across teams",
      "Low GPU utilization (30% average) with default serving configs",
      "No awareness of heterogeneous GPU cost-efficiency",
      "No model routing — every query hits the most expensive model",
    ],
    situation:
      "Organizations are paying 3–10x more than necessary on LLM inference because serving stacks are running at default configuration, models are not compressed, and GPU fleet composition is not matched to workload characteristics.",
    kpis: [
      { kpi: "Cost Per Query", before: "$0.08", after: "$0.015" },
      { kpi: "GPU Utilization", before: "30%", after: "82%" },
      { kpi: "Inference Cost", before: "Baseline", after: "-65%" },
      { kpi: "Throughput", before: "Baseline", after: "5X" },
      { kpi: "Latency (P95)", before: "8s", after: "1.2s" },
      { kpi: "KV-Cache Hit Rate", before: "0%", after: "42%", isNew: true },
      { kpi: "Model Routing Efficiency", before: "N/A", after: "78% queries → small model", isNew: true },
      { kpi: "Quantization Speedup", before: "1x", after: "3.2x (INT4)", isNew: true },
      { kpi: "Speculative Decoding Speedup", before: "1x", after: "2.4x", isNew: true },
      { kpi: "Heterogeneous GPU Savings", before: "N/A", after: "Up to 77%", isNew: true },
    ],
    benefits: [
      { text: "Lower AI Spend" },
      { text: "Better GPU Utilization" },
      { text: "Reduced Cloud Costs" },
      { text: "Improved ROI" },
      { text: "Sustainable Scaling" },
      { text: "Deep inference-engine optimization (TensorRT-LLM, vLLM, continuous batching)", isNew: true },
      { text: "Model compression pipeline (quantize → distill → prune → validate → deploy)", isNew: true },
      { text: "Workload-aware heterogeneous GPU allocation (Mélange-style)", isNew: true },
      { text: "Model-routing and semantic-caching architecture", isNew: true },
      { text: "Speculative decoding deployment", isNew: true },
      { text: "Token-level FinOps with per-BU chargeback", isNew: true },
      { text: "GPU architecture advisory (which GPU for which workload)", isNew: true },
    ],
    timeline: "10–14 Weeks (Assessment 2 wks → Optimization Design 2 wks → Implementation 4–8 wks → Validation & Tuning 2 wks)",
    caseStudies: [
      {
        title: "B2B SaaS Platform Company",
        industry: "Technology",
        situation:
          "A B2B SaaS company serving 50,000 enterprise customers had embedded an LLM-powered copilot into its product. Monthly inference bill had grown to $1.2M on Azure A100 instances and was climbing 15% month-over-month. The CFO issued an ultimatum: cut AI costs by 50% within 90 days or the copilot becomes a premium-only feature.",
        intervention: "",
        interventionItems: [
          { label: "Model Distillation", detail: "Distilled the 70B general copilot into a 13B product-specialist (fine-tuned on 800K product-specific Q&A pairs). 96% accuracy match on held-out eval." },
          { label: "Quantization", detail: "Applied AWQ INT4 on the 13B model, deployed on TensorRT-LLM — 2.5x additional throughput gain." },
          { label: "Routing", detail: "Built a 350M-parameter query classifier: 72% of queries (FAQ, simple instructions) routed to a cached 1.5B model; 28% routed to 13B." },
          { label: "Caching", detail: "Implemented semantic response caching with 38% hit rate." },
          { label: "GPU Right-Sizing", detail: "Migrated from all-A100 to Mélange-optimized mix: H100 for peak real-time, A10G for batch/tier-2, T4 for dev/staging — 40% infrastructure cost reduction." },
        ],
        results: [
          { metric: "Monthly inference cost", before: "$1,200,000", after: "$185,000" },
          { metric: "Cost reduction", before: "—", after: "84.6%" },
          { metric: "P95 latency", before: "4.8s", after: "1.1s" },
          { metric: "Throughput (queries/sec)", before: "120", after: "580" },
          { metric: "Copilot accuracy (customer-rated)", before: "4.2/5", after: "4.3/5 (improved)" },
          { metric: "CFO mandate met?", before: "—", after: "Yes — exceeded 50% target" },
        ],
      },
      {
        title: "Government Defense & Intelligence Agency",
        industry: "Public Sector / Air-Gapped",
        situation:
          "A defense intelligence agency ran LLM-powered document analysis on a classified air-gapped network with 200 NVIDIA A100 GPUs, processing 50,000 documents/day. The agency needed to double throughput for a new mission requirement without purchasing additional hardware (procurement cycle: 18 months).",
        intervention: "",
        interventionItems: [
          { label: "Quantization", detail: "GPTQ INT4 with defense-domain calibration (intelligence-report corpus); accuracy loss < 0.8% on key extraction tasks." },
          { label: "Continuous Batching", detail: "Migrated from naive sequential serving to vLLM with continuous batching; effective batch size jumped from 1.2 to 8.4." },
          { label: "Speculative Decoding", detail: "Deployed 7B draft model for speculative decoding; 2.1x speedup on long-document summarization." },
          { label: "KV-Cache Optimization", detail: "Paged KV-cache with prefix sharing across documents with identical system prompts (95% of tasks); memory savings enabled 3x more concurrent sequences." },
          { label: "Workload Scheduling", detail: "Batch analysis jobs scheduled during off-peak hours; peak hours reserved for real-time analyst queries with strict SLOs." },
        ],
        results: [
          { metric: "Documents processed/day", before: "50,000", after: "127,000" },
          { metric: "Throughput increase", before: "—", after: "2.54x (exceeded 2x target)" },
          { metric: "GPU utilization", before: "62%", after: "88%" },
          { metric: "Hardware added", before: "—", after: "Zero (same 200 A100s)" },
          { metric: "P95 latency (real-time queries)", before: "6.2s", after: "2.1s" },
          { metric: "Cost of additional hardware avoided", before: "—", after: "~$14M" },
        ],
      },
    ],
  },
  {
    id: "sovereign-ai-private-llm",
    number: "06",
    title: "Sovereign AI & Private LLM Platforms",
    description:
      "Build private, sovereign, and on-premise LLM environments for governments, defense, BFSI, healthcare, telecom, and regulated industries.",
    enhancement:
      "Includes On-Prem Inference Optimization Engineering — sovereign deployments face unique constraints: limited GPU budgets (cannot elastically scale), air-gapped environments (no access to cloud-managed serving tools), and strict latency/throughput requirements. We deliver full-stack optimization for constrained on-prem environments: aggressive model compression to fit within fixed GPU memory, edge-optimized serving (TensorRT-LLM or ONNX Runtime), and workload scheduling to maximize throughput on fixed hardware.",
    statementOfValue:
      "Keep critical enterprise and national data inside your control boundary — with optimized inference that extracts maximum performance from finite on-prem GPU resources.",
    before: [
      "Data privacy concerns and regulatory restrictions on cloud AI",
      "100% dependency on external model APIs",
      "Limited on-prem GPU budget — cannot spin up more instances",
      "Air-gapped environments lack access to cloud-managed serving platforms",
    ],
    situation:
      "Governments, defense agencies, and regulated industries cannot use cloud AI providers for their most sensitive workloads. On-prem deployments face fixed GPU budgets and zero internet connectivity — demanding aggressive optimization to extract maximum performance from finite hardware.",
    kpis: [
      { kpi: "Data Exposure Risk", before: "High", after: "Minimal" },
      { kpi: "Compliance Coverage", before: "50%", after: "100%" },
      { kpi: "External API Dependency", before: "100%", after: "0%" },
      { kpi: "Data Sovereignty", before: "Partial", after: "Full" },
      { kpi: "Security Audit Readiness", before: "Low", after: "High" },
      { kpi: "On-Prem GPU Utilization", before: "28%", after: "85%", isNew: true },
      { kpi: "Throughput on Fixed Hardware", before: "Baseline", after: "3.5X", isNew: true },
      { kpi: "Model Fit in GPU Memory", before: "1 model/node", after: "3 models/node (quantized)", isNew: true },
    ],
    benefits: [
      { text: "Full Data Ownership" },
      { text: "Regulatory Compliance" },
      { text: "National AI Sovereignty" },
      { text: "Enterprise Security" },
      { text: "Vendor Independence" },
      { text: "Maximum throughput on fixed GPU infrastructure", isNew: true },
      { text: "Aggressive quantization for on-prem memory constraints", isNew: true },
      { text: "TensorRT-LLM deployment for deterministic, low-latency serving", isNew: true },
      { text: "Workload scheduling optimized for fixed-capacity environments", isNew: true },
      { text: "Offline model update and redeployment pipeline (no internet required)", isNew: true },
    ],
    timeline: "14–28 Weeks (extended from 12–24 to incorporate on-prem optimization engineering)",
    caseStudies: [
      {
        title: "G20 Central Bank",
        industry: "Government / BFSI",
        situation:
          "The bank needed LLM-powered analysis of monetary policy documents and market surveillance data. Regulatory mandate required all data and models to remain on sovereign soil with zero external connectivity. Their 64 NVIDIA H100 GPUs consumed all capacity for serving a single unoptimized 70B model, leaving no room for additional use cases.",
        intervention:
          "Applied SmoothQuant INT8 quantization (H100 FP8 native) reducing memory footprint by 50%. Deployed TensorRT-LLM with in-flight batching. Implemented model cascading: 7B model handled 74% of routine document queries, 70B model reserved for complex policy analysis. Built an offline model-update pipeline where new checkpoints were validated in staging and promoted via signed artifacts — no internet connectivity required.",
        results: [
          { metric: "GPU utilization", before: "100% (single model, no headroom)", after: "72% (headroom for 3 additional use cases)" },
          { metric: "Models served on 64-GPU cluster", before: "1", after: "4 (distilled 7B, 13B, 70B, embedding)" },
          { metric: "Concurrent users supported", before: "15", after: "180" },
          { metric: "P95 latency", before: "8.4s", after: "1.6s" },
          { metric: "New use cases onboarded (6 months)", before: "0", after: "7" },
        ],
      },
      {
        title: "European National Healthcare System",
        industry: "Healthcare / Government",
        situation:
          "A national healthcare system serving 60M citizens wanted LLMs for clinical decision support, patient record summarization, and medical coding across 300 hospitals. National data protection laws required all processing on government-owned infrastructure. The government had allocated 120 NVIDIA A100 GPUs across 3 regional data centers.",
        intervention:
          "Deployed a distilled 13B medical-specialist model (trained on anonymized national health records) with GPTQ INT4 quantization — fitting 3 model replicas per 8-GPU A100 node (vs. 1 replica of the unoptimized 70B). Implemented continuous batching with vLLM. Built a request-prioritization scheduler: emergency department queries received highest priority; batch coding jobs ran during off-peak hours.",
        results: [
          { metric: "Hospitals served", before: "0 (pilot stuck)", after: "300" },
          { metric: "Clinical coding accuracy", before: "82% (manual)", after: "96% (model-assisted)" },
          { metric: "Avg time per clinical note summary", before: "12 minutes (manual)", after: "45 seconds" },
          { metric: "Data sovereignty compliance", before: "N/A (blocked)", after: "100% compliant" },
          { metric: "Annual clinician hours saved", before: "—", after: "~4.2M hours" },
          { metric: "Estimated productivity value", before: "—", after: "~€630M/year" },
        ],
      },
    ],
  },
];

const crossCuttingCapabilities: CrossCuttingCapability[] = [
  { capability: "Model Quantization Engineering", description: "GPTQ, AWQ, SmoothQuant, FP8 — with domain-specific calibration data", impact: "2–4x throughput, 50–75% memory reduction" },
  { capability: "Knowledge Distillation", description: "Compress 70B+ models into 7–13B domain specialists", impact: "5–10x cost reduction with <2% accuracy loss" },
  { capability: "Speculative Decoding", description: "Draft model accelerates autoregressive generation", impact: "2–3x latency reduction" },
  { capability: "Continuous Batching", description: "Dynamic micro-batching for variable-length requests", impact: "3–8x throughput vs. sequential serving" },
  { capability: "KV-Cache Optimization", description: "PagedAttention, prefix sharing, cache management", impact: "3x more concurrent sequences" },
  { capability: "Model Routing & Cascading", description: "Route queries to right-sized models by complexity", impact: "60–80% cost reduction" },
  { capability: "Semantic Response Caching", description: "Cache responses for semantically equivalent queries", impact: "25–40% cache hit rate typical" },
  { capability: "Heterogeneous GPU Allocation", description: "Workload-aware assignment of GPU types (Mélange)", impact: "Up to 77% cost reduction vs. homogeneous" },
  { capability: "Serving-Engine Optimization", description: "TensorRT-LLM, vLLM, Triton deployment and tuning", impact: "3–5x throughput vs. default serving" },
  { capability: "Token-Level FinOps", description: "Per-query, per-user, per-BU cost attribution", impact: "Full cost transparency and chargeback" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function KpiTable({ kpis }: { kpis: KpiRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground w-2/5">KPI</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/70">Before</th>
            <th className="text-left px-4 py-3 font-semibold text-accent">After</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
            >
              <td className="px-4 py-3 font-medium text-foreground">
                {row.isNew && (
                  <span className="inline-block mr-2 text-[10px] font-bold text-primary border border-primary/40 bg-primary/10 rounded px-1 py-0.5 leading-none align-middle">
                    NEW
                  </span>
                )}
                {row.kpi}
              </td>
              <td className="px-4 py-3 text-foreground/65">{row.before}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.after}</td>
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
            <th className="text-left px-4 py-3 font-semibold text-muted-foreground w-1/4">Before</th>
            <th className="text-left px-4 py-3 font-semibold text-accent">After</th>
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
              <td className="px-4 py-3 font-semibold text-primary">{row.after}</td>
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
            <span className="text-xs text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5 inline-block mt-1">
              {study.industry}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-accent" /> Situation
          </h6>
          <p className="text-sm text-muted-foreground leading-relaxed">{study.situation}</p>
        </div>

        {study.interventionItems && study.interventionItems.length > 0 ? (
          <div>
            <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-500" /> Optimization Stack Applied
            </h6>
            <div className="space-y-2">
              {study.interventionItems.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="font-semibold text-accent shrink-0 min-w-[120px]">{item.label}</span>
                  <span className="text-muted-foreground leading-relaxed">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-500" /> Intervention
            </h6>
            <p className="text-sm text-muted-foreground leading-relaxed">{study.intervention}</p>
          </div>
        )}

        <div>
          <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" /> Impact
          </h6>
          <ResultsTable results={study.results} />
        </div>
      </div>
    </motion.div>
  );
}

function OfferingSection({ offering }: { offering: LlmOffering }) {
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
          {offering.enhancement && (
            <div className="flex gap-3 mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4 max-w-4xl">
              <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">Enhanced: </span>
                {offering.enhancement}
              </p>
            </div>
          )}
        </motion.div>

        {/* Statement of Value */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <ArrowRight className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Statement of Value</p>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">{offering.statementOfValue}</p>
            </div>
          </div>
        </motion.div>

        {/* Before / Situation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border border-border/50 bg-surface/20 p-6">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-4">Before</h3>
            <ul className="space-y-2">
              {offering.before.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400/60 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-4">Situation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{offering.situation}</p>
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
            <BarChart3 className="h-5 w-5 text-primary" /> Key Performance Indicators — Before vs. After
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
            <CheckCircle2 className="h-5 w-5 text-accent" /> Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            {offering.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`flex items-start gap-3 rounded-lg px-4 py-3 border ${b.isNew ? "border-accent/20 bg-accent/5" : "border-border/30 bg-surface/20"}`}
              >
                <ChevronRight className={`h-4 w-4 shrink-0 mt-0.5 ${b.isNew ? "text-accent" : "text-primary"}`} />
                <div>
                  {b.isNew && (
                    <span className="inline-block mr-1.5 text-[10px] font-bold text-accent border border-accent/40 bg-accent/10 rounded px-1 py-0.5 leading-none align-middle">
                      NEW
                    </span>
                  )}
                  <span className="text-sm text-foreground">{b.text}</span>
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
          className="mb-16 rounded-xl border border-border/50 bg-surface/20 p-6"
        >
          <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3">Engagement Timeline</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{offering.timeline}</p>
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
            Representative engagements demonstrating real-world impact across industries.
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

function CrossCuttingSection() {
  return (
    <section id="cross-cutting-capabilities" className="py-24 scroll-mt-20 bg-surface/10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Cross-Cutting Engineering</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-4">
            LLM Optimization Engineering Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            These capabilities apply across all six offerings and differentiate our practice from competitors who treat LLM deployment as infrastructure-only.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/60 overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface/60 border-b border-border/40">
                <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-1/4">Capability</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground/80">Description</th>
                <th className="text-left px-4 py-3 font-semibold text-accent w-1/4">Typical Impact</th>
              </tr>
            </thead>
            <tbody>
              {crossCuttingCapabilities.map((cap, i) => (
                <tr
                  key={i}
                  className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}
                >
                  <td className="px-4 py-3 font-semibold text-foreground">{cap.capability}</td>
                  <td className="px-4 py-3 text-muted-foreground">{cap.description}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{cap.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/llmops-services")({
  head: () => ({
    meta: [
      { title: "LLMOps & LLM Inference Optimization — 6 Enterprise Offerings | Summit AI Architects" },
      { name: "description", content: "Six deep LLM engineering engagements covering enterprise AI foundations, RAG optimization, agentic automation, industry-specific AI, inference FinOps, and sovereign AI platforms. Reduce inference costs by 30–77%." },
      { property: "og:title", content: "LLMOps & LLM Inference Optimization | Summit AI Architects" },
      { property: "og:description", content: "Quantization, distillation, speculative decoding, heterogeneous GPU allocation, and model routing across 6 structured LLM engineering engagements." },
      { property: "og:url", content: "/llmops-services" },
    ],
    links: [{ rel: "canonical", href: "/llmops-services" }],
  }),
  component: LlmOpsPage,
});

function LlmOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="LLMOps & LLM Optimization Engineering"
        title="Operate LLMs in production at enterprise scale"
        description="Six structured engineering engagements — from enterprise AI platforms and RAG factories to agentic automation, industry distillation, inference FinOps, and sovereign AI. Every offering includes deep inference optimization: quantization, distillation, speculative decoding, and workload-aware GPU allocation."
      />

      {/* Outcome stats bar */}
      <section className="border-b border-border/40 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "–77%", label: "Inference cost (heterogeneous GPU)" },
            { value: "3–10x", label: "Cost reduction via distillation" },
            { value: "2–4x", label: "Throughput via quantization" },
            { value: "6", label: "Deep engineering offerings" },
          ].map((o) => (
            <div key={o.label}>
              <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">{o.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky nav */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {llmOfferings.map((o) => (
              <a
                key={o.id}
                href={`#${o.id}`}
                className="shrink-0 rounded-md px-3 py-1.5 text-xs text-foreground/70 hover:text-foreground hover:bg-surface/60 transition-colors whitespace-nowrap"
              >
                <span className="font-bold text-primary mr-1">{o.number}</span>
                {o.title}
              </a>
            ))}
            <a
              href="#cross-cutting-capabilities"
              className="shrink-0 rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-colors whitespace-nowrap border-l border-border/40 ml-2 pl-4"
            >
              Cross-Cutting Capabilities
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-background">
        {llmOfferings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      <CrossCuttingSection />

      <CTA />
    </>
  );
}
