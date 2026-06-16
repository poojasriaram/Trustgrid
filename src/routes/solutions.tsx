import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import {
  Cpu,
  Brain,
  Bot,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Shield,
  Zap,
  Radio,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
  FileSpreadsheet,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Enterprise AI Solutions — GPU Clusters, LLMOps, Agents & Security | TrustGrid.AI" },
      {
        name: "description",
        content:
          "Explore TrustGrid.AI's full-spectrum AI engineering solutions: GPU infrastructure, custom LLM fine-tuning, RAG knowledge graphs, multi-agent systems, and zero-trust security meshes.",
      },
      { property: "og:title", content: "Enterprise AI Engineering Solutions | TrustGrid.AI" },
      {
        property: "og:description",
        content: "From GPU supercomputing optimization to autonomous multi-agent operations.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

/* ─── DATA DEFINITIONS ────────────────────────────────────────── */

interface Subcategory {
  title: string;
  points: string[];
}

interface TechnicalCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  subcategories: Subcategory[];
}

const technicalCategories: TechnicalCategory[] = [
  {
    id: "gpu-optimization",
    title: "GPU Optimization",
    subtitle: "Category 1",
    icon: Cpu,
    subcategories: [
      {
        title: "1.1 Core Performance Tuning",
        points: [
          "Dynamic Workload Balancing — Distributing inference and training requests across GPUs to prevent bottlenecks and maximize utilization",
          "Memory Bandwidth Optimization — Restructuring data pipelines and tensor layouts to minimize memory bottlenecks and maximize DRAM throughput",
          "GPU Super Scaling — Engineering seamless scale-out architectures to orchestrate tens of thousands of GPUs for foundation model training",
          "Multi-Tenant GPU Orchestration — Isolating GPU resources using MIG (Multi-Instance GPU) and vGPU technologies for secure workspace utilization",
          "Kernel-Level Compute Tuning — Customizing CUDA/Triton kernels to align specifically with the mathematical operations of your architectures",
        ],
      },
      {
        title: "1.2 Scale & Communication Optimization",
        points: [
          "NCCL/TCP Communication Overhead Reduction — Optimizing inter-gpu communication to eliminate gradient synchronization bottlenecks",
          "Inference Latency Reduction — Applying advanced quantization (INT8/FP8), pruning, and speculative decoding to shrink token generation latency",
          "Thermal and Power Management Optimization — Engineering power-capping and dynamic frequency scaling to maintain peak performance",
          "GPU Pooling and Fractional Sharing — Deploying time-slicing and spatial partitioning to allow multiple models to share a physical GPU",
          "NVLink/NVSwitch Interconnect Optimization — Configuring topologies to ensure P2P memory access is fully leveraged for model parallelism",
        ],
      },
    ],
  },
  {
    id: "llm-optimization",
    title: "LLM Optimization",
    subtitle: "Category 2",
    icon: Brain,
    subcategories: [
      {
        title: "2.1 Model Adaptation & Context Scaling",
        points: [
          "Parameter-Efficient Fine-Tuning (PEFT) Deployment — Implementing LoRA/QLoRA to adapt foundational models without the compute cost",
          "Advanced RAG Pipeline Architecture — Designing chunking, embedding, and retrieval pipelines with hybrid search for context injection",
          "Autonomous AI Agent Framework Development — Building tool-calling, memory-managed, and planning-capable agents using LangGraph",
          "Context Window Optimization Strategies — Utilizing RoPE scaling, sliding window attention, and hierarchical memory to extend effective context",
          "Multi-Modal Model Integration and Routing — Designing orchestration layers that dynamically route text, image, and audio inputs",
        ],
      },
      {
        title: "2.2 Efficiency & Cost Optimization",
        points: [
          "Prompt Chaining and Structured Output Generation — Enforcing JSON/XML schema outputs and complex reasoning chains for API integration",
          "LLM Routing and Load Balancing — Implementing semantic routers to direct queries to small/specialized models based on complexity",
          "Vector Embedding Optimization and Indexing — Tuning embedding dimensions and leveraging HNSW indexing for sub-millisecond semantic search",
          "Hallucination Mitigation Frameworks — Integrating semantic validation layers, self-consistency checks, and grounded generation techniques",
          "Cost-Per-Token Optimization Strategies — Implementing caching layers (Semantic Caching) and prompt compression to reduce costs",
        ],
      },
    ],
  },
  {
    id: "ai-trust-reliability",
    title: "AI Trust & Reliability Engineering",
    subtitle: "Category 3",
    icon: ShieldCheck,
    subcategories: [
      {
        title: "3.1 Monitoring & Lifecycle Automation",
        points: [
          "Continuous Model Drift Detection Systems — Implementing statistical monitoring (KL divergence, PSI) to detect data drift in real-time",
          "Automated CI/CD Retraining Pipelines — Building triggers that automatically retrain and validate models when performance metrics degrade",
          "AI Red-Teaming and Adversarial Stress Testing — Simulating hostile inputs and edge-case scenarios to break models before release",
          "End-to-End LLM Observability Stack — Deploying tracing, span analysis, and token-level logging to debug complex agentic workflows",
          "AI-Specific SLA/SLO Definition & Enforcement — Establishing strict latency, accuracy, and availability bounds with circuit breakers",
        ],
      },
      {
        title: "3.2 Data Quality & Safeguards",
        points: [
          "Data Quality Validation Frameworks — Implementing Great Expectations or custom schemas to catch upstream data poisoning",
          "Bias Detection and Fairness Auditing — Measuring model outputs across protected demographics to ensure regulatory compliance",
          "Explainable AI (XAI) Integration — Integrating SHAP, LIME, or attention visualization to make model decision-making transparent",
          "Cascade Failure Prevention Architectures — Designing bulkheads and fallback mechanisms to stop systemic failures in production",
          "Feedback Loop Integration for HITL — Creating seamless human-in-the-loop pipelines to capture user corrections for improvement",
        ],
      },
    ],
  },
  {
    id: "ai-cybersecurity",
    title: "AI Cybersecurity",
    subtitle: "Category 4",
    icon: Shield,
    subcategories: [
      {
        title: "4.1 Lifecycle Hardening & Encryption",
        points: [
          "Adversarial Robustness Testing & Hardening — Training models to resist perturbed inputs (e.g., FGSM) that cause misclassifications",
          "Model Inversion & Data Extraction Defense — Implementing differential privacy and output perturbation to prevent data reconstruction",
          "Confidential Computing for Secure Inference — Utilizing HSMs and TEEs to process data in encrypted memory",
          "AI/ML Supply Chain Vulnerability Scanning — Auditing third-party models, HuggingFace pipelines, and dependencies for malware",
          "Threat Modeling for Machine Learning Systems — Applying STRIDE or ATT&CK frameworks specifically tailored to ML data pipelines",
        ],
      },
      {
        title: "4.2 Defenses & Zero-Trust",
        points: [
          "Model Watermarking & IP Protection — Embedding imperceptible cryptographic signatures into model weights to prove ownership",
          "Prompt Injection Defense Mechanisms — Deploying input sanitization, classifiers, and LLM firewalls to block jailbreaks",
          "Secure Federated Learning Architectures — Enabling distributed model training without exposing raw client data to central servers",
          "Homomorphic Encryption for Data Privacy — Allowing models to compute predictions on encrypted data for highly regulated industries",
          "AI-Powered Security Operations Center Integration — Hardening the internal AI tools used by security teams against evasion",
        ],
      },
    ],
  },
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure Engineering",
    subtitle: "Category 5",
    icon: Layers,
    subcategories: [
      {
        title: "5.1 Pipeline & Cluster Orchestration",
        points: [
          "End-to-End MLOps/LLMOps Pipeline Architecture — Building automated pipelines from data ingestion to model serving and monitoring",
          "Highly Available Scalable Vector Database Deployment — Architecting and tuning vector databases for enterprise RAG workloads",
          "Kubernetes for AI (K8s) Workload Orchestration — Deploying specialized K8s operators (KubeRay, TorchElastic) for training & serving",
          "Serverless GPU Provisioning & Auto-Scaling — Implementing scale-to-zero GPU architectures for sporadic batch inference workloads",
          "Event-Driven AI Microservices Design — Decoupling AI processing using Kafka or EventBridge for highly resilient pipelines",
        ],
      },
      {
        title: "5.2 Storage & Multi-Cloud Automation",
        points: [
          "Feature Store Architecture & Management — Building centralized feature repositories to ensure consistency in serving",
          "Unified Data Lakehouse for AI Training — Architecting Delta Lake or Apache Iceberg solutions for scalable data access",
          "Infrastructure-as-Code (IaC) for AI Environments — Using Terraform and Pulumi to version-control GPU clusters",
          "Hybrid/Multi-Cloud AI Workload Routing — Designing architectures that burst training workloads to cloud regions based on capacity",
          "Cost-Optimized Storage Tiering for ML Datasets — Implementing lifecycle policies to move training data from S3/Glacier to NVMe",
        ],
      },
    ],
  },
];

interface Sector {
  id: string;
  name: string;
  icon: any;
  situation: string;
  solutions: string[];
  metrics: string;
}

const sectors: Sector[] = [
  {
    id: "finance",
    name: "Financial Services",
    icon: Landmark,
    situation: "High-frequency trading, fraud detection, risk analytics, and regulatory compliance.",
    solutions: [
      "GPU-Accelerated Risk Analytics — Deploy H100 clusters for real-time Monte Carlo simulations, portfolio optimization, and stress testing",
      "AI Fraud Detection & Prevention — Build autonomous agent systems that monitor transactions in real-time, detect anomalies, and trigger investigations",
      "Regulatory Compliance Automation — Deploy LLM-powered agents that scan documents, generate compliance reports, and ensure regulatory adherence (SOC2, PCI-DSS, Basel III)",
      "Intelligent Trading Operations — Implement autonomous agents for trade execution, market analysis, and portfolio rebalancing with human oversight",
      "Secure AI Infrastructure — Zero-trust architecture for protecting sensitive financial data and model weights in multi-tenant environments",
      "Quantitative Research Acceleration — Fine-tune domain-specific LLMs for financial analysis, earnings call summarization, and market sentiment analysis",
    ],
    metrics: "3–15x performance improvement, 40–75% cost reduction, zero security incidents, 100% audit coverage",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    situation: "Clinical intelligence, patient engagement, operational optimization, AI-assisted diagnostics, and drug discovery.",
    solutions: [
      "AI-Assisted Diagnostics — Deploy fine-tuned medical LLMs for radiology, pathology, and clinical decision support with HIPAA-compliant infrastructure",
      "Clinical Workflow Automation — Autonomous agents for patient scheduling, insurance pre-authorization, and clinical documentation",
      "Drug Discovery & Molecular Modeling — HPC GPU clusters for molecular dynamics simulations, protein folding, and drug candidate screening",
      "Patient Engagement & Monitoring — Long-memory AI systems that maintain patient history, medication adherence, and personalized care plans",
      "Healthcare Data Security — Zero-trust architecture with MicroVM sandboxing for protecting PHI and ensuring HIPAA compliance",
      "Medical Knowledge Management — RAG systems with medical knowledge graphs for evidence-based clinical decision support",
    ],
    metrics: "Improved diagnostic accuracy, reduced administrative burden, accelerated drug discovery timelines, full HIPAA compliance",
  },
  {
    id: "government",
    name: "Government & Defense",
    icon: Shield,
    situation: "Digital transformation, citizen services, intelligence systems, secure AI operations, and national security.",
    solutions: [
      "Secure AI Operations for Classified Environments — Air-gapped GPU clusters with zero-trust security, MicroVM isolation, and FedRAMP compliance",
      "Intelligence Analysis & Surveillance — Multi-agent systems for threat detection, pattern analysis, and intelligence synthesis across multiple data sources",
      "Citizen Services Automation — Autonomous agents for benefits processing, permit applications, and public inquiry management",
      "National-Scale AI Infrastructure — Deploy 10,000+ GPU supercomputing networks for defense research, climate modeling, and infrastructure planning",
      "Cyber Defense & Counter-AI — AI-powered cybersecurity systems that detect and neutralize adversarial AI attacks in real-time",
      "Policy & Regulatory Compliance — LLM-powered systems for legislative analysis, policy drafting, and regulatory impact assessment",
    ],
    metrics: "10x faster deployment, zero security incidents, 100% audit coverage, FedRAMP/SOC2 compliance",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: Zap,
    situation: "Asset monitoring, predictive forecasting, infrastructure intelligence, operational resilience, and grid optimization.",
    solutions: [
      "Predictive Asset Maintenance — AI agents that monitor turbine, transformer, and pipeline health using sensor fusion and anomaly detection",
      "Grid Optimization & Load Balancing — Real-time HPC simulations for energy demand forecasting, renewable integration, and grid stability",
      "Infrastructure Intelligence — Long-memory AI systems that track asset lifecycle, maintenance history, and regulatory compliance across decades",
      "Cyber-Physical Security — Zero-trust architecture for protecting OT/IT converged environments from AI-targeted cyber attacks",
      "Autonomous Operations — Agent fleets for automated grid fault detection, isolation, and restoration in power distribution networks",
      "Environmental Compliance — LLM-powered systems for emissions monitoring, environmental reporting, and regulatory compliance automation",
    ],
    metrics: "Reduced downtime, improved grid reliability, accelerated renewable integration, full NERC CIP compliance",
  },
  {
    id: "telecom",
    name: "Telecommunications",
    icon: Radio,
    situation: "Network optimization, customer experience, operational automation, predictive analytics, and 5G/6G infrastructure.",
    solutions: [
      "AI-Driven Network Optimization — Real-time GPU-accelerated analytics for traffic prediction, congestion management, and quality of service optimization",
      "Customer Experience Automation — Autonomous agents for personalized support, churn prediction, and proactive service management",
      "5G/6G Infrastructure Intelligence — HPC clusters for network simulation, spectrum optimization, and next-generation wireless research",
      "Operational Automation — Agent fleets for automated network provisioning, fault management, and performance optimization",
      "Telecom Security — Zero-trust AI architecture for protecting subscriber data, network infrastructure, and 5G core functions",
      "Predictive Maintenance — AI systems that predict equipment failures in cell towers, data centers, and fiber networks before they occur",
    ],
    metrics: "Improved network performance, reduced customer churn, automated operations, full regulatory compliance",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    situation: "Predictive maintenance, quality inspection, industrial automation, supply chain optimization, and Industry 4.0.",
    solutions: [
      "AI-Powered Quality Inspection — GPU-accelerated computer vision systems for real-time defect detection on production lines",
      "Predictive Maintenance — Multi-agent systems that monitor equipment health, predict failures, and autonomously schedule maintenance",
      "Supply Chain Orchestration — Autonomous agents for demand forecasting, inventory optimization, and logistics coordination across global networks",
      "Industrial Automation — Agent fleets that control robotic systems, optimize production schedules, and manage quality control workflows",
      "Digital Twin & Simulation — HPC GPU clusters for real-time digital twin modeling, process simulation, and optimization",
      "Operational Security — Zero-trust architecture for protecting OT environments, industrial control systems, and intellectual property",
    ],
    metrics: "70–90% workflow automation, reduced downtime, improved quality, accelerated production cycles",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    situation: "Personalization, demand forecasting, inventory intelligence, customer engagement, and omnichannel operations.",
    solutions: [
      "Hyper-Personalization Engines — Fine-tuned LLMs and recommendation systems that deliver individualized shopping experiences at scale",
      "Demand Forecasting & Inventory Optimization — AI systems that predict demand patterns, optimize stock levels, and reduce waste",
      "Autonomous Customer Service — Multi-agent systems for handling inquiries, processing returns, and resolving issues across channels",
      "Visual Search & Product Discovery — GPU-accelerated computer vision for visual search, virtual try-on, and automated product tagging",
      "Supply Chain Intelligence — Long-memory AI systems that track products from manufacturer to consumer with full visibility",
      "Fraud & Security — Real-time AI cybersecurity for protecting payment systems, customer data, and preventing account takeover",
    ],
    metrics: "Increased conversion rates, reduced inventory costs, improved customer satisfaction, zero payment fraud",
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: Truck,
    situation: "Route optimization, fleet intelligence, supply chain orchestration, predictive planning, and autonomous vehicles.",
    solutions: [
      "Autonomous Route Optimization — Real-time HPC algorithms for dynamic routing, fuel optimization, and delivery scheduling",
      "Fleet Intelligence & Management — AI systems that monitor vehicle health, driver behavior, and optimize fleet utilization",
      "Supply Chain Orchestration — Multi-agent systems that coordinate suppliers, warehouses, carriers, and retailers in real-time",
      "Predictive Logistics Planning — Long-memory AI that learns from seasonal patterns, weather events, and market disruptions",
      "Autonomous Vehicle Support — GPU clusters for autonomous vehicle simulation, sensor fusion, and decision model training",
      "Logistics Security — Zero-trust architecture for protecting cargo tracking systems, fleet management platforms, and customer data",
    ],
    metrics: "Reduced fuel costs, improved delivery times, optimized fleet utilization, full cargo security",
  },
  {
    id: "education",
    name: "Education & Research",
    icon: GraduationCap,
    situation: "Personalized learning, research acceleration, administrative automation, campus intelligence.",
    solutions: [
      "Personalized Learning Platforms — Fine-tuned LLMs that adapt to individual student learning styles, pace, and knowledge gaps",
      "Research Acceleration — HPC GPU clusters for scientific computing, simulation, and large-scale data analysis across disciplines",
      "Administrative Automation — Autonomous agents for enrollment management, scheduling, grading, and student support services",
      "Campus Security & Safety — AI-powered surveillance, threat detection, and emergency response systems",
      "Academic Integrity & Security — Zero-trust systems for protecting research data, intellectual property, and ensuring academic integrity",
      "Knowledge Management — RAG systems with institutional knowledge graphs for research discovery, collaboration, and knowledge preservation",
    ],
    metrics: "Improved learning outcomes, accelerated research timelines, reduced administrative burden, enhanced campus safety",
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: FileSpreadsheet,
    situation: "Claims processing, risk assessment, fraud detection, customer service, and regulatory compliance.",
    solutions: [
      "AI-Powered Claims Processing — Autonomous agents that intake claims, validate documentation, assess damage, and process payments",
      "Risk Assessment & Underwriting — Fine-tuned LLMs and HPC models for actuarial analysis, risk modeling, and premium optimization",
      "Fraud Detection & Prevention — Real-time AI systems that detect fraudulent claims, staged accidents, and policy manipulation",
      "Customer Engagement — Multi-agent systems for policy inquiries, coverage recommendations, and personalized insurance advice",
      "Regulatory Compliance — Automated compliance monitoring, reporting, and audit trail generation for state and federal regulations",
      "Secure Data Handling — Zero-trust architecture for protecting sensitive customer data, medical records, and financial information",
    ],
    metrics: "Faster claims processing, reduced fraud losses, improved customer satisfaction, full regulatory compliance",
  },
];

interface Capability {
  name: string;
  desc: string;
  impact: string;
}

const capabilities: Capability[] = [
  {
    name: "Full-Spectrum Engineering",
    desc: "From microsecond kernel optimization to multi-day autonomous strategy",
    impact: "End-to-end AI system delivery",
  },
  {
    name: "Global Delivery Model",
    desc: "5 global delivery centers, 24/7 engineering and operational support",
    impact: "Continuous innovation and support",
  },
  {
    name: "Proven Frameworks",
    desc: "Reusable architectures and accelerated implementation methodologies",
    impact: "10x faster deployment",
  },
  {
    name: "Enterprise Security",
    desc: "Zero-trust, compliance-ready, audit-friendly security posture",
    impact: "Deploy confidently in regulated environments",
  },
  {
    name: "Measurable Outcomes",
    desc: "Every engagement aligned with performance, efficiency, and ROI objectives",
    impact: "Quantified business value",
  },
];

const timelineSteps = [
  {
    phase: "01",
    name: "Discovery",
    desc: "Understand infrastructure, objectives, workloads, and business priorities.",
  },
  {
    phase: "02",
    name: "Assessment",
    desc: "Identify bottlenecks, opportunities, risks, and optimization potential.",
  },
  {
    phase: "03",
    name: "Strategy",
    desc: "Define technical architecture, success metrics, and implementation roadmap.",
  },
  {
    phase: "04",
    name: "Implementation",
    desc: "Deploy solutions through phased engineering execution.",
  },
  {
    phase: "05",
    name: "Optimization",
    desc: "Continuously improve performance, scalability, security, and business outcomes.",
  },
];

const categoryThemes: Record<
  string,
  {
    accent: string;
    badgeBg: string;
    badgeText: string;
    borderHover: string;
    glowHover: string;
    dotColor: string;
    iconBox: string;
    eyebrow: string;
  }
> = {
  "gpu-optimization": {
    accent: "text-blue-600",
    badgeBg: "bg-blue-50/80",
    badgeText: "text-blue-600 border-blue-200/50",
    borderHover: "hover:border-blue-500/35",
    glowHover: "hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.12)]",
    dotColor: "bg-blue-500",
    iconBox: "bg-blue-50 border-blue-200/60 text-blue-600",
    eyebrow: "text-blue-600",
  },
  "llm-optimization": {
    accent: "text-violet-600",
    badgeBg: "bg-violet-50/80",
    badgeText: "text-violet-600 border-violet-200/50",
    borderHover: "hover:border-violet-500/35",
    glowHover: "hover:shadow-[0_12px_30px_-10px_rgba(139,92,246,0.12)]",
    dotColor: "bg-violet-500",
    iconBox: "bg-violet-50 border-violet-200/60 text-violet-600",
    eyebrow: "text-violet-600",
  },
  "ai-trust-reliability": {
    accent: "text-sky-600",
    badgeBg: "bg-sky-50/80",
    badgeText: "text-sky-600 border-sky-200/50",
    borderHover: "hover:border-sky-500/35",
    glowHover: "hover:shadow-[0_12px_30px_-10px_rgba(14,165,233,0.12)]",
    dotColor: "bg-sky-500",
    iconBox: "bg-sky-50 border-sky-200/60 text-sky-600",
    eyebrow: "text-sky-600",
  },
  "ai-cybersecurity": {
    accent: "text-rose-600",
    badgeBg: "bg-rose-50/80",
    badgeText: "text-rose-600 border-rose-200/50",
    borderHover: "hover:border-rose-500/35",
    glowHover: "hover:shadow-[0_12px_30px_-10px_rgba(244,63,94,0.12)]",
    dotColor: "bg-rose-500",
    iconBox: "bg-rose-50 border-rose-200/60 text-rose-600",
    eyebrow: "text-rose-600",
  },
  "ai-infrastructure": {
    accent: "text-emerald-600",
    badgeBg: "bg-emerald-50/80",
    badgeText: "text-emerald-600 border-emerald-200/50",
    borderHover: "hover:border-emerald-500/35",
    glowHover: "hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.12)]",
    dotColor: "bg-emerald-500",
    iconBox: "bg-emerald-50 border-emerald-200/60 text-emerald-600",
    eyebrow: "text-emerald-600",
  },
};

/* ─── COMPONENT ──────────────────────────────────────────────── */

function SolutionsPage() {
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);

  const activeSector = sectors[activeSectorIndex];
  const SectorIcon = activeSector.icon;

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Full-Spectrum <span className="text-accent">AI Engineering Solutions</span>
          </>
        }
        description="We deliver production-ready, bespoke solutions designed to optimize cloud GPU architectures, scale domain-specific models, operate autonomous agent grids, and protect host infrastructure with zero-trust security mesh."
      />

      {/* PART 1: Technical Solution Categories */}
      <section className="py-24 border-b border-border/30 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent mb-4">
              Part 1
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gradient font-display">
              Technical Solution Categories
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Deep-dive engineering capability packages addressing specialized components of the modern enterprise AI lifecycle.
            </p>
          </div>

          <div className="space-y-24">
            {technicalCategories.map((cat, catIdx) => {
              const CatIcon = cat.icon;
              const theme = categoryThemes[cat.id] || categoryThemes["gpu-optimization"];
              return (
                <div key={cat.id} id={cat.id} className="pt-16 border-t border-border/40 first:border-t-0 first:pt-0 scroll-mt-20">
                  {/* Category Header (Top, full-width) */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                    <div className={`h-11 w-11 rounded-xl border grid place-items-center shrink-0 shadow-sm transition-colors duration-300 ${theme.iconBox}`}>
                      <CatIcon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase block transition-colors duration-300 ${theme.eyebrow}`}>
                        {cat.subtitle}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-display">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subcategories grid: full width, 3 or 4 columns based on length */}
                  <div className={`grid gap-6 md:grid-cols-2 ${cat.subcategories.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                    {cat.subcategories.map((sub, subIdx) => {
                      const dotIdx = sub.title.indexOf(" ");
                      const indexBadge = dotIdx >= 0 ? sub.title.slice(0, dotIdx) : "";
                      const displayTitle = dotIdx >= 0 ? sub.title.slice(dotIdx + 1) : sub.title;

                      return (
                        <div
                          key={subIdx}
                          className={`premium-card p-6 bg-card flex flex-col justify-between h-full relative overflow-hidden group border border-border/80 ${theme.borderHover} ${theme.glowHover} transition-all duration-300`}
                        >
                          {/* Colored top accent line */}
                          <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-current to-transparent opacity-40 transition-colors duration-300 ${theme.accent}`} />
                          
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/20 opacity-100 pointer-events-none" />
                          
                          <div className="relative z-10 flex flex-col justify-between h-full w-full">
                            <div>
                              {/* Card subcategory index and title */}
                              <div className="flex items-center gap-3 mb-6 border-b border-border/45 pb-4">
                                {indexBadge && (
                                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${theme.badgeBg} ${theme.badgeText} shadow-sm leading-none shrink-0 transition-colors duration-300`}>
                                    {indexBadge}
                                  </span>
                                )}
                                <h4 className="text-[15px] font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors duration-250">
                                  {displayTitle}
                                </h4>
                              </div>
                              
                              {/* Points block formatting */}
                              <ul className="space-y-2.5">
                                {sub.points.map((pt, ptIdx) => {
                                  const dashIdx = pt.indexOf(" — ");
                                  const titleText = dashIdx >= 0 ? pt.slice(0, dashIdx) : pt;
                                  const descText = dashIdx >= 0 ? pt.slice(dashIdx + 3) : "";
                                  return (
                                    <li
                                      key={ptIdx}
                                      className="group/item flex gap-3 items-start p-2.5 rounded-lg hover:bg-slate-50/80 transition-all duration-200 border border-transparent hover:border-border/40 hover:shadow-[0_2px_6px_rgba(0,0,0,0.015)]"
                                    >
                                      {/* Beautiful modern dot bullet indicator */}
                                      <div className="mt-2 shrink-0">
                                        <div className={`h-1.5 w-1.5 rounded-full ${theme.dotColor} opacity-30 group-hover/item:opacity-100 transition-opacity duration-200`} />
                                      </div>
                                      
                                      <div className="flex flex-col items-start gap-0.5">
                                        <span className="text-xs font-bold text-foreground/90 tracking-tight group-hover/item:text-primary transition-colors duration-200">
                                          {titleText}
                                        </span>
                                        {descText && (
                                          <span className="text-[11px] text-muted-foreground leading-relaxed">
                                            {descText}
                                          </span>
                                        )}
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PART 2: Industry & Sector Solutions */}
      <section id="industry-solutions" className="py-24 border-b border-border/30 bg-surface/10 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent mb-4">
              Part 2
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gradient font-display">
              Industry & Sector Solutions
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Regulated, mission-critical solutions designed to address the specific performance, security, and integration challenges of complex verticals.
            </p>
          </div>

          {/* Interactive tabs layout */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start mt-12">
            {/* Sidebar with 10 sectors (tabs) */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none max-w-full lg:max-w-none">
              {sectors.map((sec, idx) => {
                const ActiveIcon = sec.icon;
                const isActive = idx === activeSectorIndex;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-left transition-all text-xs font-semibold cursor-pointer shrink-0 border border-transparent ${
                      isActive
                        ? "bg-card border-border/80 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-card/40 hover:text-foreground"
                    }`}
                  >
                    <ActiveIcon className={`h-4 w-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                    <span>{sec.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Display pane for active sector */}
            <div className="premium-card p-6 md:p-8 bg-card shadow-lg relative min-h-[400px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSector.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8 flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 border-b border-border/40 pb-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-accent">
                        <SectorIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">Vertical Target</span>
                        <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">{activeSector.name}</h3>
                      </div>
                    </div>

                    {/* Situation */}
                    <div className="mt-6">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground">The Situation</span>
                      <p className="mt-2 text-sm text-foreground/90 font-medium leading-relaxed">
                        {activeSector.situation}
                      </p>
                    </div>

                    {/* Solutions list */}
                    <div className="mt-6 pt-6 border-t border-border/40">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">Bespoke Solutions</span>
                      <ul className="space-y-3.5">
                        {activeSector.solutions.map((sol, solIdx) => {
                          const dashIdx = sol.indexOf(" — ");
                          const name = dashIdx >= 0 ? sol.slice(0, dashIdx) : sol;
                          const desc = dashIdx >= 0 ? sol.slice(dashIdx + 3) : "";
                          return (
                            <li key={solIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                              <CheckCircle2 className="h-4.5 w-4.5 text-accent mt-0.5 shrink-0" />
                              <span>
                                <strong className="text-foreground font-semibold">{name}</strong>
                                {desc && ` — ${desc}`}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics footer card */}
                  <div className="mt-8 pt-6 border-t border-border/40 bg-surface/30 p-5 rounded-lg border border-border/60">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent">Performance Metrics</span>
                    <p className="mt-2 text-xs md:text-sm font-semibold text-foreground leading-relaxed">
                      {activeSector.metrics}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: Cross-Cutting Capabilities */}
      <section id="capabilities" className="py-24 border-b border-border/30 bg-background relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent mb-4">
              Part 3
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gradient font-display">
              Universal Enablers
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Cross-cutting enablers integrated into every project, guaranteeing secure execution, linear performance, and clear business outcomes.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-border/50 bg-card shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border/80 font-mono text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  <th className="p-5">Capability</th>
                  <th className="p-5 border-l border-border/40">Description</th>
                  <th className="p-5 border-l border-border/40">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((cap, capIdx) => (
                  <tr
                    key={capIdx}
                    className={`border-b border-border/45 last:border-b-0 hover:bg-surface/30 transition-colors duration-200 ${
                      capIdx % 2 === 0 ? "bg-background" : "bg-surface/10"
                    }`}
                  >
                    <td className="p-5 text-sm font-semibold text-foreground tracking-tight">{cap.name}</td>
                    <td className="p-5 text-sm text-muted-foreground border-l border-border/40">{cap.desc}</td>
                    <td className="p-5 text-sm text-foreground/90 font-medium border-l border-border/40 bg-primary/[0.015]">
                      {cap.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section id="transformation-model" className="py-24 border-b border-border/30 bg-surface/10 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent mb-4">
              Engagement Journey
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gradient font-display">
              5-Phase Transformation Model
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              A structured execution journey from initial workflow audits to continuous performance optimization.
            </p>
          </div>

          {/* Horizontal timeline cards */}
          <div className="relative mt-16">
            {/* Connection line */}
            <div className="absolute left-8 right-8 top-5 h-0.5 bg-gradient-to-r from-primary/60 via-accent/40 to-border/30 hidden md:block" />

            <div className="grid gap-6 md:grid-cols-5 relative z-10">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-stretch group">
                  <div className="mb-6 flex items-center justify-center lg:justify-start">
                    <div className="h-10 w-10 rounded-full bg-card border border-border/80 shadow-sm flex items-center justify-center text-xs font-mono font-bold text-accent group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative z-20">
                      {step.phase}
                    </div>
                  </div>

                  <div className="premium-card p-5 h-full relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <h3 className="text-sm font-semibold text-foreground tracking-tight">{step.name}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
