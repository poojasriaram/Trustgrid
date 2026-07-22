import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Brain, ShieldCheck, Shield, Layers, CheckCircle2, Radio, Thermometer, Car, Wifi, Wrench, Bot, Anchor, Building2, Mountain, PlaneTakeoff, Navigation, AlertCircle, Network, Handshake, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

interface MatrixCapability {
  capability: string;
  description: string;
  outcomes: string;
  relevance: string;
}

interface MatrixCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  emoji: string;
  description: string;
  capabilities: MatrixCapability[];
}

const matrixCategories: MatrixCategory[] = [
  {
    id: "gpu-optimization",
    title: "GPU Optimization",
    icon: Cpu,
    emoji: "🔥",
    description: "Maximize compute throughput, memory bandwidth, and interconnect efficiency for high-performance AI workloads.",
    capabilities: [
      {
        capability: "High-Performance Compute (HPC) Tuning",
        description: "Optimizing cluster nodes, task scheduler layouts, and execution parameters for heavy numerical workloads.",
        outcomes: "Minimizes idle time, aligns CPU-GPU pipeline coordination, and accelerates compute loops by 2-5x.",
        relevance: "Highly suited for simulation models, massive batch training runs, and scientific processing."
      },
      {
        capability: "Energy-Efficient GPU Scheduling",
        description: "Implementing smart power and workload scheduling policies to throttle power usage during off-peak hours and manage thermal levels.",
        outcomes: "Reduces electricity overhead by 15-30% with negligible impact on final completion timelines.",
        relevance: "Essential for organizations with heavy continuous training jobs seeking to meet ESG and budget limits."
      },
      {
        capability: "Real-Time Inference Acceleration",
        description: "Deploying high-throughput, sub-millisecond serving frameworks like TensorRT-LLM and custom Triton backends.",
        outcomes: "Up to 4-8x inference throughput boost and 50-80% lower latency on live pipelines.",
        relevance: "Critical for interactive consumer services, high-frequency processing, and real-time APIs."
      },
      {
        capability: "GPU Super-Scaling & Global Cluster Orchestration",
        description: "Engineering robust scale-out protocols to orchestrate tens of thousands of GPUs for foundation model training.",
        outcomes: "Ensures 95%+ training scaling efficiency and automated multi-node fault isolation.",
        relevance: "Indispensable for foundational model training across globally distributed super-clusters."
      },
      {
        capability: "Ultra-Low Latency HPC Network Fabric Engineering",
        description: "Tuning RDMA, InfiniBand, and RoCEv2 fabric settings to eliminate communication overhead during gradient steps.",
        outcomes: "Reduces latency to sub-microsecond levels, avoiding interconnect synchronization bottlenecks.",
        relevance: "Critical for distributed parallel training (data, tensor, and pipeline parallel) at scale."
      },
      {
        capability: "GPU Memory Fragmentation Mitigation",
        description: "Restructuring memory allocation patterns, applying PagedAttention, and scheduling garbage collection to avoid OOMs.",
        outcomes: "Eliminates fragmentation waste, allowing 20-40% larger batch sizes without additional hardware.",
        relevance: "Perfect for loading massive model sizes or long context lengths on fixed GPU memory sizes."
      },
      {
        capability: "Custom CUDA/Triton Kernel Development",
        description: "Writing customized CUDA and Triton code to bypass standard framework overhead for proprietary layer mathematics.",
        outcomes: "30-70% speedups on specialized operations compared to generic PyTorch or TensorFlow code.",
        relevance: "Crucial for novel model architectures, custom activation functions, and proprietary logic."
      },
      {
        capability: "Heterogeneous Compute Management (CPU/GPU/DPU)",
        description: "Designing hybrid workflows that offload auxiliary tasks to CPUs and DPUs, reserving peak GPU cores for matrix arithmetic.",
        outcomes: "Reduces GPU idle bottlenecks, maximizing total hardware ROI and lowering cost.",
        relevance: "Ideal for complex data prep, real-time ingestion, and large-scale video/image preprocessing."
      },
      {
        capability: "Deep GPU Utilization Analytics & Telemetry",
        description: "Deploying granular, low-level telemetry agents (NVML, DCGM) to trace per-core and per-tensor-core metrics in real-time.",
        outcomes: "Exposes hidden bottlenecks, resource starvation events, and thermal throttling instantly.",
        relevance: "Essential for FinOps audits, operational health checks, and capacity planning."
      },
      {
        capability: "Bare-Metal GPU Provisioning & Optimization",
        description: "Configuring bare-metal GPU nodes, low-level drivers, and runtime libraries directly to bypass hypervisor overhead.",
        outcomes: "Reclaims 5-15% virtualization loss, achieving near-perfect hardware potential.",
        relevance: "Best for sovereign AI, private cloud setups, and ultra-high performance dedicated clusters."
      }
    ]
  },
  {
    id: "llm-optimization",
    title: "LLM Optimization",
    icon: Brain,
    emoji: "🧠",
    description: "Engineering highly efficient, accurate, and agentic large language model systems at enterprise scale.",
    capabilities: [
      {
        capability: "Advanced Prompt Engineering & System Prompt Design",
        description: "Structuring few-shot examples, dynamic context injections, and system instructions for reliable outputs.",
        outcomes: "Improves prompt compliance, structured outputs (JSON/XML), and lowers task failure rates.",
        relevance: "Essential for consistent customer experiences and deterministic tool-calling integrations."
      },
      {
        capability: "Domain-Specific LLM Adaptation & Alignment",
        description: "Aligning models to industry terminologies, jargon, and brand voice through instruction tuning, RLHF, and DPO.",
        outcomes: "Produces higher domain accuracy, context-aware responses, and prevents brand-incompatible outputs.",
        relevance: "Highly relevant for medical, legal, and financial enterprises deploying custom AI systems."
      },
      {
        capability: "Semantic Search & Retrieval Engineering",
        description: "Designing advanced chunking strategies, dense/sparse hybrid search indexes, and re-ranking algorithms.",
        outcomes: "Boosts retrieval precision, matching context relevance, and drastically reduces hallucinations.",
        relevance: "Fundamental for high-fidelity RAG, enterprise search, and complex knowledge extraction."
      },
      {
        capability: "Agentic Workflow & State Machine Design",
        description: "Architecting multi-agent systems with loop validation, state persistence, and deterministic execution graphs.",
        outcomes: "Achieves 90%+ success rates on complex, multi-step tasks compared to linear prompt chains.",
        relevance: "Perfect for autonomous code generation, customer support routing, and automated analysis."
      },
      {
        capability: "Multi-Modal Data Processing & Fusion",
        description: "Integrating text, vision, audio, and tabular data parsing to feed unified multi-modal architectures.",
        outcomes: "Ensures seamless alignment between different media types and enables comprehensive search capabilities.",
        relevance: "Essential for document parsing (PDFs), video analytics, and multi-channel customer support."
      },
      {
        capability: "Tokenization Optimization & Custom Tokenizers",
        description: "Developing customized vocabularies and tokenizers optimized for domain-specific languages or non-English text.",
        outcomes: "Cuts token counts by 20-50%, accelerating processing speed and lowering API costs.",
        relevance: "Highly recommended for coding assistants, translation tools, and niche vertical applications."
      },
      {
        capability: "Knowledge Graph Integration (GraphRAG)",
        description: "Mapping unstructured data into structured knowledge graphs to enable semantic relationships during search.",
        outcomes: "Unlocks deep, cross-document reasoning and improves context relevance for complex queries.",
        relevance: "Critical for research discovery, regulatory compliance, and multi-hop intelligence tasks."
      },
      {
        capability: "LLM Evaluation & Red-Team Benchmarking",
        description: "Building automated testing suites that evaluate model answers for toxic content, jailbreaks, and accuracy.",
        outcomes: "Ensures safe deployment, establishes performance baselines, and flags regressions automatically.",
        relevance: "Required for customer-facing systems and meeting strict regulatory standards."
      },
      {
        capability: "Contextual Memory Management (Short/Long-term)",
        description: "Implementing persistent state, semantic caching, and sliding context window strategies for agents.",
        outcomes: "Retains historical conversation history efficiently, keeping context overhead low.",
        relevance: "Key for virtual assistants, personal coaching, and long-running workspace agents."
      },
      {
        capability: "Instruction Tuning & RLHF/DPO Implementation",
        description: "Applying supervised fine-tuning and reinforcement feedback to align open-source models to precise instructions.",
        outcomes: "Reduces dependence on expensive proprietary APIs by training highly capable open-source models.",
        relevance: "Ideal for companies wanting complete control over their model weights and security."
      }
    ]
  },
  {
    id: "ai-trust-reliability",
    title: "AI Trust & Reliability Engineering",
    icon: ShieldCheck,
    emoji: "🛡️",
    description: "Ensuring AI systems remain accurate, fair, resilient, and strictly aligned with business SLAs and compliance standards.",
    capabilities: [
      {
        capability: "Statistical Drift & Outlier Analysis",
        description: "Monitoring inputs and predictions to detect data and concept drift using metrics like KL divergence.",
        outcomes: "Flags model accuracy degradation early, allowing for preemptive retraining before failure.",
        relevance: "Critical for dynamic environments like market prediction, fraud detection, and credit scoring."
      },
      {
        capability: "Automated ML Pipeline Orchestration (CI/ML)",
        description: "Configuring automated data validation, model training, evaluation, and deployment loops.",
        outcomes: "Reduces maintenance overhead, ensures models are always updated, and guarantees safety gates.",
        relevance: "Essential for teams running numerous production models with changing datasets."
      },
      {
        capability: "Adversarial Prompt Resilience Testing",
        description: "Stress-testing LLMs with automated jailbreak prompts, indirect injections, and safety overrides.",
        outcomes: "Blocks 99%+ of hostile inputs before they compromise the application or databases.",
        relevance: "Mandatory for public-facing chatbots, internal agent terminals, and corporate databases."
      },
      {
        capability: "Deep Traceability & Data/Model Lineage Tracking",
        description: "Recording every data transformation, training run, model version, and inference request cryptographically.",
        outcomes: "Provides auditable proof of data sources, satisfying compliance requirements and simplifying debugging.",
        relevance: "Crucial for highly regulated fields like banking, healthcare, and insurance."
      },
      {
        capability: "Real-Time Performance Anomaly Detection",
        description: "Analyzing live performance metrics (latency, error rate, tokens/sec) to detect system degradation.",
        outcomes: "Alerts engineers to outages, stuck loops, or queue congestion within seconds.",
        relevance: "Required to maintain high availability and meet strict Service Level Agreements (SLAs)."
      },
      {
        capability: "Model Versioning, Rollback & Shadow Deployments",
        description: "Running new model versions in shadow mode alongside production models to compare outputs.",
        outcomes: "Ensures zero-downtime updates and safe rollbacks if a regression is detected.",
        relevance: "Best practice for updating critical decision models without risking user experience."
      },
      {
        capability: "Fairness Metric Computation & Reporting",
        description: "Measuring demographic parity, equal opportunity, and disparate impact metrics across protected classes.",
        outcomes: "Guarantees ethical compliance, reduces legal risk, and generates auditable bias reports.",
        relevance: "Indispensable for recruitment, credit scoring, and government AI projects."
      },
      {
        capability: "Interpretability & Feature Importance Visualization",
        description: "Integrating SHAP, LIME, or attention map visualization to explain individual model predictions.",
        outcomes: "Exposes the 'why' behind model outputs, helping operators make informed final approvals.",
        relevance: "Crucial for healthcare diagnostic validation, loan rejections, and legal applications."
      },
      {
        capability: "Chaos Engineering for Distributed AI Systems",
        description: "Intentionally injecting failures (network delays, node crashes, data corruption) to test cluster resilience.",
        outcomes: "Validates failover, replication, and backup systems, ensuring continuous operations.",
        relevance: "Critical for mission-critical services operating at massive scale."
      },
      {
        capability: "Continuous Integration for Machine Learning (CI/ML)",
        description: "Building unified linting, testing, and formatting pipelines specifically for ML models and datasets.",
        outcomes: "Ensures high code and data quality standards, preventing regressions from slipping into production.",
        relevance: "Speeds up team collaboration and maintains robust engineering hygiene."
      }
    ]
  },
  {
    id: "ai-cybersecurity",
    title: "AI Cybersecurity",
    icon: Shield,
    emoji: "🔒",
    description: "Hardening the AI lifecycle from data ingestion to model inference against adversarial threat vectors.",
    capabilities: [
      {
        capability: "Penetration Testing for Neural Networks",
        description: "Evaluating neural network resilience against evasion, poisoning, and model extraction attacks.",
        outcomes: "Identifies hidden vulnerabilities and maps robustness scores before models go live.",
        relevance: "Critical for protecting high-value models from extraction or bypass attacks."
      },
      {
        capability: "Zero-Trust Architecture for ML APIs",
        description: "Enforcing micro-segmentation, mutual TLS, and token-level authorization on all model endpoints.",
        outcomes: "Ensures only verified clients can invoke endpoints, blocking unauthorized access.",
        relevance: "Fundamental for securing enterprise APIs and multi-tenant hosting environments."
      },
      {
        capability: "Hardware-Backed Trusted Execution Environment (TEE) Setup",
        description: "Configuring secure enclaves (e.g., SGX, TDX) to encrypt models and data in memory during execution.",
        outcomes: "Guarantees data confidentiality even in untrusted cloud or edge environments.",
        relevance: "Essential for processing highly sensitive data (PHI, PII, proprietary weights)."
      },
      {
        capability: "Differential Privacy Implementation & Tuning",
        description: "Adding calibrated mathematical noise to datasets or gradients during model training.",
        outcomes: "Prevents adversaries from reconstructuring individual training samples via API outputs.",
        relevance: "Critical for healthcare collaboration, demographic analysis, and regulatory compliance."
      },
      {
        capability: "Regulatory Compliance Mapping (NIST AI RMF, EU AI Act)",
        description: "Mapping technical security controls to requirements specified in global AI risk frameworks.",
        outcomes: "Ensures compliance with emerging laws, preventing fines and de-risking market access.",
        relevance: "Highly relevant for global enterprises and compliance-sensitive markets."
      },
      {
        capability: "Training Data Poisoning Detection",
        description: "Scanning training datasets for adversarial perturbations or backdoor triggers.",
        outcomes: "Catches malicious data modifications, guaranteeing model integrity before training starts.",
        relevance: "Important for crowd-sourced datasets, open-source scraping, and multi-tenant platforms."
      },
      {
        capability: "Anomaly-Based AI Threat Detection",
        description: "Monitoring API request payloads and traffic patterns for signs of automated model probing.",
        outcomes: "Blocks reconnaissance attempts and rate-limits potential extraction tools.",
        relevance: "Protects proprietary model intellectual property from being cloned or reverse-engineered."
      },
      {
        capability: "Cryptographic Model Provenance Tracking",
        description: "Signing model weights and training logs cryptographically to guarantee lineage and integrity.",
        outcomes: "Prevents model tampering, substitution attacks, and unauthorized weight modifications.",
        relevance: "Critical for safety-critical systems, government defense, and enterprise deployments."
      },
      {
        capability: "Secure Multi-Party Computation (SMPC)",
        description: "Enabling multiple parties to jointly train or query models on combined datasets without revealing their inputs.",
        outcomes: "Enables secure collaboration, satisfying privacy requirements across distinct entities.",
        relevance: "Perfect for consortium banking, medical research, and cross-border analytics."
      },
      {
        capability: "Secure Model Serialization & Safe Deserialization",
        description: "Auditing pickle and other dynamic model formats for embedded malware or shellcode execution.",
        outcomes: "Prevents remote code execution (RCE) vulnerabilities during model load phases.",
        relevance: "Essential when loading third-party or open-source model weights (e.g., from HuggingFace)."
      }
    ]
  },
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure Engineering",
    icon: Layers,
    emoji: "⚙️",
    description: "Designing the foundational cloud-native, scalable, automated, and sustainable systems that power enterprise AI.",
    capabilities: [
      {
        capability: "Cloud-Native AI Deployment & Containerization",
        description: "Packaging models, runtimes, and dependencies into secure, lightweight container images.",
        outcomes: "Ensures consistent execution across dev, test, and production environments.",
        relevance: "Standard requirement for modern DevOps and cloud deployments."
      },
      {
        capability: "GPU Cluster Provisioning Automation",
        description: "Using Infrastructure as Code (IaC) to spin up, configure, and teardown multi-GPU environments dynamically.",
        outcomes: "Reduces environment setup times from days to minutes, preventing resource waste.",
        relevance: "Crucial for data science teams requiring on-demand, reproducible cluster environments."
      },
      {
        capability: "High-Throughput Data Ingestion Engineering",
        description: "Building high-performance ETL pipelines capable of streaming multi-terabyte datasets to training nodes.",
        outcomes: "Eliminates I/O starvation bottlenecks, keeping GPU cores continuously utilized.",
        relevance: "Essential for pre-training and continuous reinforcement learning setups."
      },
      {
        capability: "Distributed Storage System Optimization (Lustre, GPFS)",
        description: "Tuning parallel file systems and cache levels for rapid checkpointing and data load speeds.",
        outcomes: "Reduces checkpoint saving delays from hours to minutes, securing training progress.",
        relevance: "Required for large cluster training setups where nodes frequently save state."
      },
      {
        capability: "Containerized Model Serving (Triton, vLLM, TGI)",
        description: "Deploying production-grade runtime servers with dynamic batching and tensor-parallel execution.",
        outcomes: "Increases throughput, lowers latency, and scales to meet incoming traffic demands.",
        relevance: "The foundation of highly scalable LLM, vision, and recommendation APIs."
      },
      {
        capability: "CI/CD Pipeline Automation for Machine Learning",
        description: "Automating building, testing, model validation, and deployment stages on code changes.",
        outcomes: "Automates model validation, deployment, and testing, keeping deployment pipelines fast and safe.",
        relevance: "Core component of enterprise-grade MLOps and LLMOps strategies."
      },
      {
        capability: "Infrastructure Cost Optimization (FinOps for AI)",
        description: "Auditing cloud bills, right-sizing GPU SKUs, and automating spot instance utilization.",
        outcomes: "Cuts infrastructure budgets by 30-60% without sacrificing service availability.",
        relevance: "Critical for finance teams and engineering managers with high cloud spend."
      },
      {
        capability: "Real-Time Streaming Data Integration (Kafka/Flink)",
        description: "Designing event-driven streaming pipelines for live model input features and predictions.",
        outcomes: "Enables sub-second latency on real-time decisions, keeping models synchronized with live data.",
        relevance: "Essential for personalization engines, IoT monitoring, and live analytics."
      },
      {
        capability: "Multi-Cloud Architecture Design & Abstraction",
        description: "Building cloud-agnostic management layers to run workloads across AWS, GCP, Azure, or on-prem.",
        outcomes: "Avoids vendor lock-in and allows dynamic workload routing to the cheapest provider.",
        relevance: "Perfect for enterprises seeking price leverage and high redundancy."
      },
      {
        capability: "Decentralized Compute Orchestration",
        description: "Managing training and inference tasks across geographically distributed edge clusters.",
        outcomes: "Unlocks idle capacity, routes around local outages, and complies with local data laws.",
        relevance: "Great for federated learning, IoT sensor networks, and edge device clusters."
      }
    ]
  }
];

const capabilitiesData: SectionData[] = [
  {
    title: "GPU Optimization",
    description: "Maximum hardware throughput and efficiency.",
    introduction: "We optimize every layer of the compute stack, from low-level CUDA kernels and inter-GPU communication fabrics to high-performance clustering. This ensures your workloads leverage the full capacity of your hardware investment.",
    capabilities: [
      "Custom CUDA/Triton kernel development and compiler fusions",
      "Dynamic workload balancing and fractional sharing",
      "Memory bandwidth optimization and OOM fragmentation mitigation",
      "Ultra-low latency HPC network fabric engineering (RDMA, InfiniBand)",
      "GPU super-scaling and global cluster orchestration"
    ],
    solutions: [
      "GPU Super Scaling",
      "Low Latency Networking for HPC",
      "Memory Bandwidth Optimization",
      "Inference Latency Reduction",
      "Multi-Tenant GPU Orchestration"
    ],
    useCases: [
      "Foundation model pre-training across globally distributed GPU super-clusters",
      "Ultra-low latency HPC simulations (e.g., computational fluid dynamics)",
      "Large-scale LLM pre-training acceleration",
      "Real-time video analytics and computer vision pipelines",
      "High-frequency trading algorithm execution"
    ],
    outcomes: [
      "Unlock maximum hardware throughput for parallel workloads",
      "Dramatically reduce multi-node training synchronization times",
      "Shrink token generation latency and operational cost",
      "Maintain peak performance within strict thermal limits"
    ],
    metrics: [
      { label: "Performance Gains", value: "3-15x" },
      { label: "Cost Reduction", value: "40-75%" },
      { label: "Latency Reduction", value: "50%+" },
      { label: "Hardware Utilization", value: "95%+" }
    ]
  },
  {
    title: "LLM Optimization",
    description: "Accelerating GenAI inference and training.",
    introduction: "We deliver production-ready, highly accurate, and cost-efficient Large Language Model integrations. From parameter-efficient fine-tuning (PEFT) and semantic search (RAG) to autonomous multi-agent grids, we ensure fluid execution.",
    capabilities: [
      "Parameter-Efficient Fine-Tuning (LoRA, QLoRA)",
      "Advanced RAG pipeline architecture and knowledge graphs",
      "Autonomous AI agent framework development",
      "Multi-modal model integration and dynamic routing",
      "Cost-per-token optimization strategies"
    ],
    solutions: [
      "Advanced RAG Pipeline Architecture",
      "Parameter-Efficient Fine-Tuning (PEFT/LoRA)",
      "Autonomous AI Agent Framework Development",
      "Multi-Modal Model Integration and Routing",
      "Cost-Per-Token Optimization Strategies"
    ],
    useCases: [
      "Enterprise knowledge base conversational search",
      "Automated software code generation and review",
      "Intelligent document processing (IDP) and extraction",
      "Customer support ticket routing and resolution",
      "Complex data query translation (Text-to-SQL)"
    ],
    outcomes: [
      "Minimize token-generation and hosting API costs",
      "Accelerate response times to improve user retention",
      "Deploy complex multi-agent workflows with high success rates",
      "Enforce structured JSON/XML outputs for enterprise API integration"
    ],
    metrics: [
      { label: "Inference Speed", value: "70% Faster" },
      { label: "Memory Footprint", value: "-60%" },
      { label: "Cost Per Token", value: "-80%" },
      { label: "Throughput Boost", value: "4-8x" }
    ]
  },
  {
    title: "AI Trust & Reliability Engineering",
    description: "Continuous observability, drift detection, and compliance.",
    introduction: "We establish institutional trust and system reliability. Our frameworks integrate rigorous statistical drift detection, safety guardrails, chaos engineering, and alignment workflows to guarantee compliance with global AI regulations.",
    capabilities: [
      "Statistical drift & outlier analysis",
      "Automated ML pipeline orchestration (CI/ML)",
      "Adversarial prompt resilience testing",
      "Deep traceability & data/model lineage tracking",
      "Chaos engineering for distributed AI systems"
    ],
    solutions: [
      "Continuous Model Drift Detection Systems",
      "End-to-End LLM Observability Stack",
      "AI Red-Teaming and Adversarial Stress Testing",
      "Automated CI/CD Retraining Pipelines",
      "AI-Specific SLA/SLO Definition & Enforcement"
    ],
    useCases: [
      "Fraud detection model degradation prevention in banking",
      "Healthcare diagnostic AI accuracy assurance and FDA compliance",
      "Chatbot toxicity and safety guardrail enforcement",
      "High-frequency trading algorithm stability monitoring",
      "Manufacturing predictive maintenance sensor drift correction"
    ],
    outcomes: [
      "Prevent catastrophic failures through robust cascade protection",
      "Attain audit readiness under EU AI Act and ISO 42001 guidelines",
      "Detect and resolve model degradation within minutes of data drift",
      "Integrate explainable AI (XAI) feature visualizations for operators"
    ],
    metrics: [
      { label: "Jailbreak Blocks", value: "99.9%" },
      { label: "Audit Readiness", value: "100%" },
      { label: "Proxy Latency", value: "<15ms" },
      { label: "Bias Mitigation", value: ">0.95" }
    ]
  },
  {
    title: "AI Cybersecurity",
    description: "Zero-Trust protection mesh and model hardening.",
    introduction: "We protect the full AI lifecycle, shielding proprietary model weights, application inputs, and training data from novel adversarial vectors. Our systems prevent extraction, inversion, and prompt injection.",
    capabilities: [
      "Penetration testing for neural networks",
      "Zero-Trust architecture for ML APIs",
      "Hardware-backed trusted execution environments (TEE)",
      "Differential privacy implementation and tuning",
      "Regulatory compliance mapping (NIST AI RMF, EU AI Act)"
    ],
    solutions: [
      "Adversarial Robustness Testing & Hardening",
      "Confidential Computing for Secure Inference",
      "Prompt Injection Defense Mechanisms",
      "AI/ML Supply Chain Vulnerability Scanning",
      "Model Inversion & Data Extraction Defense"
    ],
    useCases: [
      "Preventing prompt injection attacks on customer-facing chatbots",
      "Protecting proprietary LLM weights from theft by malicious insiders",
      "Securing healthcare AI against patient data reconstruction (HIPAA)",
      "Hardening biometric systems against adversarial presentation attacks",
      "Securing third-party ML model dependencies in enterprise software"
    ],
    outcomes: [
      "Eliminate prompt injections and jailbreak attacks at the gateway",
      "Secure sensitive user information from model extraction queries",
      "Audit HuggingFace pipelines and open-source models for hidden backdoors",
      "Run encrypted model predictions on untrusted cloud infrastructure"
    ],
    metrics: [
      { label: "Jailbreak Detection", value: "99.9%" },
      { label: "Execution Breakout", value: "0%" },
      { label: "Syscall Blocking", value: "100%" },
      { label: "Compliance Score", value: "100%" }
    ]
  },
  {
    title: "AI Infrastructure Engineering",
    description: "Cloud-native pipelines, storage, and sustainable compute.",
    introduction: "We build the high-performance foundations that power enterprise AI at scale. From automated MLOps pipelines and vector databases to energy, I/O, and memory optimizations, we ensure absolute stability.",
    capabilities: [
      "Cloud-native AI containerization and Kubernetes orchestration",
      "GPU cluster provisioning automation",
      "High-throughput data ingestion engineering",
      "Distributed storage system optimization (Lustre, GPFS)",
      "Infrastructure cost optimization (FinOps for AI)"
    ],
    solutions: [
      "End-to-End MLOps/LLMOps Pipeline Architecture",
      "Highly Available Scalable Vector Database Deployment",
      "Kubernetes for AI Workload Orchestration",
      "Serverless GPU Provisioning & Auto-Scaling",
      "Event-Driven AI Microservices Design",
      "Feature Store Architecture & Management",
      "Unified Data Lakehouse for AI Training",
      "Infrastructure-as-Code (IaC) for AI Environments",
      "Hybrid/Multi-Cloud AI Workload Routing",
      "Cost-Optimized Storage Tiering for ML Datasets"
    ],
    useCases: [
      "Building enterprise-scale internal ML platforms from scratch",
      "Orchestrating millions of daily LLM inferences with automatic failover",
      "Energy Optimization: carbon-aware training pipelines routing workloads dynamically",
      "I/O Optimization: GDS (GPU Direct Storage) and NVMe-oF clustering to eliminate checkpoints",
      "Memory Optimization: tuning shared architectures to load massive 100B+ models without partition"
    ],
    outcomes: [
      "Achieve seamless vertical scaling with minimal cluster overhead",
      "Minimize network power and cooling energy across server instances",
      "Bypass storage and CPU constraints for rapid model iteration",
      "Replicate complex GPU environments with Infrastructure-as-Code"
    ],
    metrics: [
      { label: "Network Power Saved", value: "-35%" },
      { label: "Electricity Cost Cut", value: "12%" },
      { label: "Cooling Energy Saved", value: "-25%" },
      { label: "Water Usage (WUE)", value: "Near-Zero" }
    ]
  }
];


/* ─── Engineering Domains Data ─────────────────────────────────────────── */

interface EngineeringDomain {
  id: string;
  domain: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  applicationAreas: string[];
}

const engineeringDomains: EngineeringDomain[] = [
  {
    id: "microwave-engineering",
    domain: "Microwave Engineering",
    icon: Radio,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    applicationAreas: ["RF Systems", "Signal Processing", "Antenna Design"]
  },
  {
    id: "thermal-engineering",
    domain: "Thermal Engineering",
    icon: Thermometer,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    applicationAreas: ["Heat Transfer Optimization", "Energy Systems", "HVAC"]
  },
  {
    id: "automotive-engineering",
    domain: "Automotive Engineering",
    icon: Car,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    applicationAreas: ["Autonomous Systems", "EV Design", "Predictive Maintenance"]
  },
  {
    id: "wireless-technologies",
    domain: "Wireless Technologies",
    icon: Wifi,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    applicationAreas: ["5G / 6G / 7G Networks", "IoT", "Satellite Communication"]
  },
  {
    id: "mechanical-engineering",
    domain: "Mechanical Engineering",
    icon: Wrench,
    color: "text-slate-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/30",
    applicationAreas: ["CAD/CAE", "Structural Analysis", "Digital Twins"]
  },
  {
    id: "robotics",
    domain: "Robotics",
    icon: Bot,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    applicationAreas: ["Industrial Automation", "Autonomous Drones", "Swarm Systems"]
  },
  {
    id: "marine-engineering",
    domain: "Marine Engineering",
    icon: Anchor,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    applicationAreas: ["Autonomous Vessels", "Underwater Systems"]
  },
  {
    id: "construction-engineering",
    domain: "Construction Engineering",
    icon: Building2,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    applicationAreas: ["Smart Infrastructure", "BIM-AI Integration", "Safety Analytics"]
  },
  {
    id: "mining-engineering",
    domain: "Mining Engineering",
    icon: Mountain,
    color: "text-stone-400",
    bgColor: "bg-stone-500/10",
    borderColor: "border-stone-500/30",
    applicationAreas: ["Predictive Geology", "Autonomous Equipment", "Safety AI"]
  },
  {
    id: "drones-aerospace",
    domain: "Drones & Aerospace",
    icon: PlaneTakeoff,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
    applicationAreas: ["UAV Design", "Flight Systems", "Aerospace AI"]
  },
  {
    id: "avionics",
    domain: "Avionics",
    icon: Navigation,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    applicationAreas: ["Flight Control Systems", "Navigation", "Embedded AI"]
  },
  {
    id: "mission-critical-systems",
    domain: "Mission-Critical Systems",
    icon: AlertCircle,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    applicationAreas: ["Fault-Tolerant Systems", "Real-Time Safety Systems"]
  },
  {
    id: "telecom",
    domain: "Telecom",
    icon: Network,
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
    borderColor: "border-fuchsia-500/30",
    applicationAreas: ["Network Optimization", "Edge Computing", "Future Telecom Infrastructure"]
  },
];

function EngineeringDomainsSection() {
  return (
    <section className="border-t border-border/40 bg-surface/5 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Engineering Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient font-display mb-4">
            Cross-Industry Engineering Application Domains
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            TrustGrid.AI's capabilities extend across the world's most technically demanding engineering disciplines — delivering AI-native optimization, reliability, and intelligence to each sector.
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {engineeringDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group relative rounded-2xl border ${domain.borderColor} bg-card/60 backdrop-blur-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 ${domain.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${domain.bgColor} border ${domain.borderColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${domain.color}`} />
                  </div>

                  {/* Domain Title */}
                  <h3 className={`text-sm font-bold text-foreground mb-3 group-hover:${domain.color} transition-colors duration-300`}>
                    {domain.domain}
                  </h3>

                  {/* Application Areas */}
                  <div className="space-y-1.5">
                    {domain.applicationAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 h-1 w-1 rounded-full ${domain.color} shrink-0 opacity-80`} />
                        <span className="text-xs text-muted-foreground leading-relaxed">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Objective Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent overflow-hidden p-8 md:p-10"
        >
          {/* Background decorative shimmer */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="shrink-0">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 shadow-inner">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Partnership Objective
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gradient font-display mb-3">
                🤝 TrustGrid.AI in Cross-Industry Engineering
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
                TrustGrid.AI's mission is to integrate its high-performance AI orchestration, GPU virtualization, MLOps automation, and AI cybersecurity capabilities into these cross-industry engineering application domains. By partnering with domain-expert companies, system integrators, and research institutions, TrustGrid.AI enables partners and customers to deploy{" "}
                <span className="font-semibold text-foreground">secure, fault-tolerant, and optimized AI systems</span>{" "}
                across microwave, thermal, automotive, wireless, mechanical, robotics, marine, construction, mining, aerospace, avionics, mission-critical, and telecom engineering disciplines.
              </p>

              {/* Key benefits row */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { label: "AI-Native Integration", desc: "Embed AI at every layer of the engineering stack" },
                  { label: "Sector-Specific Compliance", desc: "Fault-tolerant, real-time, and safety-certified systems" },
                  { label: "Co-Development Channels", desc: "Joint engineering & technology partnership programs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-foreground mb-0.5">{item.label}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesList() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
      {matrixCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="premium-card p-6 md:p-8 bg-card border border-border/60 rounded-xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* Category header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/40 pb-6 mb-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-accent mb-3">
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    <span>Category {index + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gradient font-display">
                    {category.emoji} {category.title}
                  </h3>
                </div>
                <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed md:pt-4">
                  {category.description}
                </p>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/50 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest font-mono bg-muted/20">
                      <th className="py-4 px-4 font-semibold w-1/4">Capability</th>
                      <th className="py-4 px-4 font-semibold w-1/3">Description</th>
                      <th className="py-4 px-4 font-semibold w-1/4">Key Outcomes</th>
                      <th className="py-4 px-4 font-semibold w-1/4">Relevance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {category.capabilities.map((row, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-accent/[0.015] transition-colors"
                      >
                        <td className="py-5 px-4 align-top font-semibold text-foreground text-sm leading-snug group-hover:text-accent transition-colors">
                          {row.capability}
                        </td>
                        <td className="py-5 px-4 align-top text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {row.description}
                        </td>
                        <td className="py-5 px-4 align-top text-xs md:text-sm font-semibold text-emerald-600 leading-relaxed font-mono">
                          {row.outcomes}
                        </td>
                        <td className="py-5 px-4 align-top text-xs md:text-sm text-muted-foreground/80 leading-relaxed border-l border-border/10">
                          {row.relevance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards View */}
              <div className="md:hidden space-y-6">
                {category.capabilities.map((row, i) => (
                  <div
                    key={i}
                    className="p-5 bg-background/50 border border-border/50 rounded-xl space-y-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {row.capability}
                      </h4>
                    </div>
                    <div className="space-y-3 pt-3 border-t border-border/40 text-[13px] leading-relaxed">
                      <div>
                        <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                          Description
                        </span>
                        <p className="text-muted-foreground">{row.description}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                          Key Outcomes
                        </span>
                        <p className="text-emerald-600 font-semibold">{row.outcomes}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                          Relevance
                        </span>
                        <p className="text-muted-foreground/80">{row.relevance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Strategic Why section */}
      <div className="pt-8">
        <div className="premium-card p-8 md:p-12 relative overflow-hidden bg-card border border-border/60 rounded-2xl shadow-elevated">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Strategic Alignment
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient mb-4 font-display">
              💡 Why These Capabilities Matter
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-10 leading-relaxed">
              At <span className="font-semibold text-foreground">TrustGrid</span>, we don’t just optimize AI systems—we transform them into strategic assets. Whether you’re scaling GPU clusters, deploying autonomous agents, or securing enterprise AI, our capabilities are designed to:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">Maximize Performance</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Achieve 3–15x speedups and near-linear scaling.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">Reduce Costs</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Cut infrastructure spend by 40–75% with FinOps and optimization.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">Ensure Security</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Deploy AI with Zero Trust, compliance-ready guardrails.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">Future-Proof</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Build scalable, sustainable infrastructure for long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Engineering AI systems that <br />
            scale from <span className="text-accent font-semibold">GPUs to autonomous enterprises</span>
          </>
        }
        description="Unlock peak performance, cut cloud infrastructure spend, secure sandbox runtimes, and coordinate resilient agent fleets with our production-grade engineering capabilities."
      />

      <div className="bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        
        {/* Render Capability Sections sequentially one by one */}
        <CapabilitiesList />

        {/* Divider / Heading for Deep Dive Sections */}
        <div className="border-t border-border/40 bg-surface/10 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-gradient mb-3 font-display">
              Deep Dive Competencies
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Explore detailed implementations, custom solutions, use cases, and performance metrics for each domain.
            </p>
          </div>
        </div>

        {/* Restore original detailed capability sections */}
        <div className="bg-background">
          {capabilitiesData.map((data, index) => (
            <SectionTemplate key={index} data={data} />
          ))}
        </div>
      </div>

      {/* Cross-Industry Engineering Application Domains & Partnership Objective */}
      <EngineeringDomainsSection />

      <CTA />
    </>
  );
}
