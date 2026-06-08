import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { CaseStudies } from "@/components/site/CaseStudies";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Cpu, 
  Layers, 
  Server, 
  TrendingUp, 
  Workflow, 
  Shield, 
  Activity, 
  Clock, 
  Settings, 
  CheckCircle2,
  Database,
  Network,
  Thermometer,
  ArrowRight,
  Filter
} from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  component: UseCasesPage,
});

// ─── Interfaces ────────────────────────────────────────────────────────────────

interface TechStackItem {
  name: string;
  category: string;
}

interface CapabilityItem {
  title: string;
  description: string;
}

interface OutcomeItem {
  title: string;
  metric: string;
  description: string;
}

interface TimelinePhase {
  phase: string;
  duration: string;
  title: string;
  details: string;
}

interface MetricSummaryItem {
  label: string;
  value: string;
  sublabel: string;
}

interface UseCase {
  id: string;
  title: string;
  category: string;
  tagline: string;
  challengeBrief: string;
  challengeDetailed1: string;
  challengeDetailed2: string;
  solutionBrief: string;
  solutionDetailed1: string;
  solutionDetailed2: string;
  hardwareConfig: string[];
  techStack: TechStackItem[];
  capabilities: CapabilityItem[];
  outcomes: OutcomeItem[];
  timeline: TimelinePhase[];
  metricsSummary: MetricSummaryItem[];
}

// ─── Dataset ───────────────────────────────────────────────────────────────────

const useCasesData: UseCase[] = [
  {
    id: "sovereign-ai",
    title: "Sovereign AI Initiatives",
    category: "Infrastructure & Scaling",
    tagline: "National-scale private cloud compute fabrics running air-gapped workloads.",
    challengeBrief: "National-scale AI infrastructure projects require deploying 10,000+ GPUs with absolute data sovereignty, high compute availability, and local regulatory alignment. Public clouds introduce security compliance gaps and lock-in risks.",
    challengeDetailed1: "In the modern geopolitical landscape, nation-states and sovereign entities face the imperative of building independent AI capabilities without relying on US-hosted commercial public hyperscalers. The primary challenge lies in establishing massive physical compute footprints—often containing upwards of 10,000 enterprise GPUs like the H100 and Blackwell architectures—while strictly guaranteeing that zero public internet pathways, third-party support tunnels, or cross-border data telemetry channels exist. These sovereign boundaries must comply with domestic security acts, public sector records mandates, and defense-grade data classification standards.",
    challengeDetailed2: "Furthermore, physical site orchestration at this scale introduces severe engineering challenges. Traditional virtualization hypervisors and commercial management software packages introduce unnecessary CPU scheduling overhead, reducing execution margins. Networking becomes a major bottleneck, as distributed model training runs are highly sensitive to inter-node communication latency and packet drop. Standard public cloud orchestrators cannot handle custom, hardware-level optimization, leading to thermal throttling, unbalanced load distributions, and frequent cluster-wide outages that wipe out days of training epochs.",
    solutionBrief: "We engineered private-cloud, containerized AI training and inference fabrics deployed on-premise. The network architecture leverages custom non-blocking InfiniBand topologies with RDMA over Converged Ethernet (RoCE v2) to completely eliminate inter-node communication packet drop.",
    solutionDetailed1: "To address these security and performance requirements, we engineered a fully air-gapped, sovereign AI orchestration platform running on bare-metal infrastructure. The physical deployment utilizes private Kubernetes clusters managed by a heavily customized, security-hardened Slurm schedule engine. Inter-node communications are managed via a custom-designed, non-blocking Clos network topology utilizing dedicated InfiniBand links. By implementing RDMA over Converged Ethernet (RoCE v2), we established zero-copy, direct memory access between GPU clusters, completely eliminating CPU kernel overhead and packet loss during critical gradient synchronization phases.",
    solutionDetailed2: "To prevent node-failure downtime, we built a proprietary DCGM-driven telemetry system that polls hardware states every 50 milliseconds. When a GPU exhibits abnormal thermal profiles or PCIe link errors, the scheduler dynamically hot-swaps the workload to active standby nodes, leveraging instant-checkpoint resume pipelines. We also optimized the physical data pipeline by deploying local high-performance NVMe storage caches directly attached to compute nodes, ensuring that training datasets are served with sub-microsecond access times and zero dependency on remote network file shares.",
    hardwareConfig: [
      "10,240x NVIDIA Blackwell B200 GPUs in custom liquid-cooled server enclosures",
      "Non-blocking Clos network topology with 800Gb/s InfiniBand links",
      "GPUDirect RDMA over RoCE v2 with custom high-speed switches",
      "Liquid-cooled datacenter cabinets with closed smart cooling loops",
      "Air-gapped on-premise storage arrays (100 PB+ high-throughput NVMe)"
    ],
    techStack: [
      { name: "Slurm Scheduler", category: "Orchestration" },
      { name: "Kubernetes / K3s", category: "Containerization" },
      { name: "NVIDIA DCGM SDK", category: "Telemetry" },
      { name: "InfiniBand / RDMA", category: "Networking" },
      { name: "PyTorch Distributed", category: "Framework" },
      { name: "gVisor Runtimes", category: "Security" }
    ],
    capabilities: [
      {
        title: "Air-gapped boundary isolation",
        description: "Complete isolation of physical compute resources with cryptographically signed software boundaries and zero external internet egress pathways."
      },
      {
        title: "Zero-drop Clos network fabric",
        description: "A non-blocking network architecture delivering high-throughput, low-latency inter-node communication specifically tuned for distributed LLM training."
      },
      {
        title: "Self-healing DCGM telemetry",
        description: "Custom monitoring agents using NVIDIA DCGM APIs to predict GPU hardware failures and dynamically hot-swap nodes without training interruption."
      },
      {
        title: "Dynamic thermal-aware scheduling",
        description: "Workload orchestrator that automatically redistributes active training workloads based on rack-level thermal profiles and PUE cooling metrics."
      }
    ],
    outcomes: [
      {
        title: "Scaling training efficiency",
        metric: "95%+",
        description: "Sustained near-linear scaling performance for 70B+ parameter model training runs across thousands of distributed nodes."
      },
      {
        title: "Carbon footprint reduction",
        metric: "30%",
        description: "Optimized liquid cooling strategies and dynamic load allocation reduced overall datacenter Power Usage Effectiveness (PUE) to 1.12."
      },
      {
        title: "Data protection verification",
        metric: "0% Leaks",
        description: "Independent national security audits confirmed absolute separation of sovereign state records and model weights."
      },
      {
        title: "Compute cluster availability",
        metric: "99.99%",
        description: "Minimized downtime through automated node recovery, decreasing epoch restart loss from days to under 60 seconds."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "4 Weeks",
        title: "Architecture & Threat Modeling",
        details: "Conduct physical site audits, design network topologies, and model sovereign security threat vectors."
      },
      {
        phase: "Phase 2",
        duration: "8 Weeks",
        title: "Bare-Metal Cluster Setup",
        details: "Provision compute racks, install custom liquid-cooling loops, and establish InfiniBand Clos fabrics."
      },
      {
        phase: "Phase 3",
        duration: "4 Weeks",
        title: "Hardened OS & Scheduler Deploys",
        details: "Install hardened Linux kernels, set up Slurm partitions, and deploy DCGM telemetry agents."
      },
      {
        phase: "Phase 4",
        duration: "4 Weeks",
        title: "Training Validation & Go-Live",
        details: "Execute benchmark training runs, run adversarial network tests, and secure independent compliance audits."
      }
    ],
    metricsSummary: [
      { label: "GPU Scaling", value: "95.4%", sublabel: "Near-linear efficiency" },
      { label: "PUE Rating", value: "1.12", sublabel: "Liquid-cooled average" },
      { label: "Data Leak Audit", value: "0", sublabel: "Absolute sovereignty" }
    ]
  },
  {
    id: "high-frequency-trading",
    title: "High-Frequency Trading",
    category: "Low-Latency Compute",
    tagline: "Sub-millisecond inference pipelines bypassing CPU boundaries using custom CUDA kernels.",
    challengeBrief: "Quantitative trading firms need sub-millisecond predictive inference speeds to execute orders before markets shift. Standard web serving LLMs or bloated frameworks introduce execution latency.",
    challengeDetailed1: "In high-frequency quantitative trading, the window of opportunity to execute arbitrage orders across major global exchanges is measured in microseconds. Quantitative researchers develop sophisticated deep learning models to predict market micro-structural movements based on order book state feeds. However, standard deep learning libraries like PyTorch and TensorFlow introduce unacceptable latency overhead. This overhead stems from Python interpreter locks, device-to-host memory copy cycles (PCIe bus bottlenecks), and standard CUDA kernel scheduling queues that introduce microsecond-level jitters.",
    challengeDetailed2: "Under extreme market volatility—such as market openings, interest rate announcements, or sudden macroeconomic shifts—trading volume spikes exponentially. Traditional serving systems experience queue buildup, thread starvation, and page-fault bottlenecks, causing latency to cascade into milliseconds. If a prediction is delayed by even 500 microseconds, the trade signal becomes stale, leading to failed execution and severe financial losses. Firms require an inference pipeline that remains deterministic and sub-millisecond, even during peak market stress.",
    solutionBrief: "We replaced heavy PyTorch execution paths with custom white-box CUDA kernel implementations and Graph-Compiled TensorRT inference engines, utilizing GPUDirect RDMA to bypass host-to-device copy bottlenecks.",
    solutionDetailed1: "To achieve sub-millisecond determinism, we completely bypassed traditional framework abstractions. We re-implemented the models' core mathematical operations—including custom self-attention, layer normalization, and matrix multiplications—using raw, white-box CUDA kernels optimized for the specific architecture of local GPU tensor cores. The entire execution graph was compiled into static, low-level TensorRT engines that pre-allocate all GPU memory blocks, eliminating runtime memory allocations and garbage collection sweeps.",
    solutionDetailed2: "We then eliminated the host-to-device memory copy bottleneck by integrating GPUDirect RDMA (GDR) and GPUDirect Storage (GDS). By allowing high-speed Mellanox NICs to read and write directly to GPU VRAM via PCIe switches, we bypassed the host CPU and system RAM entirely. Finally, we deployed custom CUDA stream scheduling that runs multiple inference pipelines asynchronously and in parallel. This guarantees that latency remains flat at under 800 microseconds, regardless of input request congestion.",
    hardwareConfig: [
      "NVIDIA H100 PCIe GPUs with NVLink bridges",
      "Mellanox ConnectX-7 400Gb/s SmartNICs",
      "PCIe Gen 5 Direct-Bypass Switches",
      "Hardened ultra-low-latency host servers with customized UEFI configuration",
      "GPUDirect RDMA & GPUDirect Storage SDKs"
    ],
    techStack: [
      { name: "Custom CUDA C++", category: "Inference Engine" },
      { name: "TensorRT Compiler", category: "Graph Optimization" },
      { name: "GPUDirect RDMA", category: "Hardware Bypass" },
      { name: "Mellanox OFED Drivers", category: "Networking" },
      { name: "C++20 Native Coroutines", category: "Concurrency" },
      { name: "Linux Real-Time Kernel", category: "Operating System" }
    ],
    capabilities: [
      {
        title: "FP4 & INT8 hybrid quantization",
        description: "Deep quantization of neural network weights utilizing custom scale factors to maintain trading signal precision while halving data retrieval latency."
      },
      {
        title: "Direct GPUDirect bypass routing",
        description: "Hardware-level bypass routing to allow ultra-low-latency data transfers directly from NIC to GPU VRAM, bypassing the host operating system."
      },
      {
        title: "Custom fused CUDA kernels",
        description: "Fusing activation, normalization, and multiplication operations into single-pass CUDA executions to save precious GPU memory bandwidth."
      },
      {
        title: "Asynchronous stream concurrency",
        description: "Multiple independent prediction lines executed concurrently using CUDA streams for zero-wait request queues under heavy market panic periods."
      }
    ],
    outcomes: [
      {
        title: "Latency reduction in signals",
        metric: "50%+",
        description: "Average end-to-end prediction latency dropped from 2.4 milliseconds to under 800 microseconds."
      },
      {
        title: "Throughput scaling under stress",
        metric: "10x Boost",
        description: "System handled massive market volatility spikes of up to 500,000 requests per second without latency degradation."
      },
      {
        title: "Tail latency stability",
        metric: "Sub-1ms",
        description: "Achieved stable, predictable execution tail latency (p99.9) under a millisecond during peak trading hours."
      },
      {
        title: "Trade execution capture",
        metric: "+15%",
        description: "Enhanced execution speed directly translated into capturing higher-margin trading opportunities across exchanges."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "3 Weeks",
        title: "Profiling & Bottleneck Analysis",
        details: "Measure microsecond latencies across existing PyTorch graphs and map PCIe transfer delays."
      },
      {
        phase: "Phase 2",
        duration: "5 Weeks",
        title: "CUDA Kernel Optimization",
        details: "Write custom C++/CUDA kernels for tensor operators and compile static TensorRT engines."
      },
      {
        phase: "Phase 3",
        duration: "4 Weeks",
        title: "Hardware Bypass Integration",
        details: "Deploy GPUDirect RDMA over ConnectX-7 NICs and configure direct PCIe routing."
      },
      {
        phase: "Phase 4",
        duration: "3 Weeks",
        title: "Volatility Stress Tests & Deployment",
        details: "Replay historical market panic feeds to validate sub-millisecond latency stability before pushing to production."
      }
    ],
    metricsSummary: [
      { label: "Inference p99.9", value: "< 800 μs", sublabel: "Sub-millisecond tail" },
      { label: "Peak Capacity", value: "500k/s", sublabel: "High volatility load" },
      { label: "Execution Win", value: "+15%", sublabel: "HFT trade capture gain" }
    ]
  },
  {
    id: "global-saas",
    title: "Global SaaS Platforms",
    category: "Infrastructure & Scaling",
    tagline: "Maximizing VRAM efficiency and request throughput with continuous KV-cache batching.",
    challengeBrief: "B2B SaaS companies introducing real-time LLM features suffer from severe margin erosion due to inefficient request concurrency, paged memory waste, and static GPU scheduling.",
    challengeDetailed1: "As enterprise B2B SaaS platforms rapidly roll out generative AI components—such as auto-generated drafts, smart search, and autonomous email flows—the cost of model serving scales exponentially. The standard model deployment architecture allocates a static, fixed memory block on the GPU for each concurrent request's Key-Value (KV) cache. Because prompt and completion lengths are highly variable, these static allocations lead to severe memory fragmentation, with up to 60-70% of GPU VRAM sitting wasted and unutilized.",
    challengeDetailed2: "This inefficiency limits the number of concurrent requests a single GPU can process before running out of memory (OOM), forcing SaaS companies to spin up expensive backup instances. During peak business hours, traffic spikes cause massive queue delays, spiking time-to-first-token (TTFT) and violating customer SLAs. To maintain profitability, SaaS companies must increase request concurrency per GPU by 5x-10x while maintaining rapid token delivery and shifting workloads dynamically based on cloud pricing fluctuations.",
    solutionBrief: "We deployed an LLM Inference Optimization Layer built on vLLM and Triton Inference Server. The serving stack implements continuous batching, paged KV-cache memory management, and cost-aware Spot instance routing.",
    solutionDetailed1: "To optimize SaaS margins, we designed and deployed a multi-tenant LLM Inference Optimization Layer utilizing the Triton Inference Server. We replaced static memory allocation with virtualized PagedAttention (built on vLLM). This technique partitions the KV-cache into small, fixed-size physical memory pages, mapping them dynamically as token generation progresses. This completely eliminated VRAM fragmentation, freeing up massive amounts of memory to support more concurrent user chats per card.",
    solutionDetailed2: "We then implemented an iteration-level scheduling algorithm that continuously batches new incoming prompts with active generation steps, avoiding the latency penalty of waiting for an entire batch to complete. Finally, we built a real-time FinOps instance broker. This system automatically schedules non-real-time batch requests (like document processing or email drafts) to cheaper, transient Spot instances, while instantly fallback-routing critical interactive sessions to reserved, on-demand GPU nodes when Spot resources are reclaimed.",
    hardwareConfig: [
      "Clusters of NVIDIA L40S and H100 SXM5 GPUs in auto-scaling cloud pools",
      "High-performance enterprise cloud instances with custom VM templates",
      "Decentralized model caches utilizing local fast storage (NVMe)",
      "Multi-region latency-aware load balancers",
      "Hybrid On-Demand / Spot compute pools"
    ],
    techStack: [
      { name: "vLLM Serving Engine", category: "Inference Server" },
      { name: "Triton Inference Server", category: "Model Management" },
      { name: "Ray Cluster Manager", category: "Compute Scaling" },
      { name: "Prometheus & Grafana", category: "Monitoring" },
      { name: "Docker Containers", category: "Deployment" },
      { name: "Terraform / Spot Broker", category: "FinOps Infrastructure" }
    ],
    capabilities: [
      {
        title: "Continuous request batching",
        description: "Iteration-level scheduler that groups incoming prompts dynamically to maximize GPU execution tensor core utilization and avoid queue pauses."
      },
      {
        title: "Paged KV-cache memory management",
        description: "Paged virtual memory routing for key-value cache matrices, minimizing memory allocation waste and preventing OOM events."
      },
      {
        title: "Dynamic speculative decoding",
        description: "Running small, fast draft models alongside main LLMs to accelerate token generation speed by up to 2.5x with mathematical guarantee."
      },
      {
        title: "FinOps automated Spot routing",
        description: "Cloud-agnostic broker that schedules workloads based on real-time instance pricing, reclaiming, and SLA constraints."
      }
    ],
    outcomes: [
      {
        title: "Infrastructure cost savings",
        metric: "70%",
        description: "Dramatically reduced monthly cloud spend by maximizing hardware density and using spot instance arbitrage."
      },
      {
        title: "Request concurrency boost",
        metric: "6.5x",
        description: "Expanded the capacity of active user connections per GPU node without degrading the token generation rate."
      },
      {
        title: "SLA compliance on latency",
        metric: "99.9%",
        description: "Stabilized Time-to-First-Token (TTFT) at under 150ms for thousands of concurrent enterprise API users."
      },
      {
        title: "Memory fragmentation crashes",
        metric: "Zero",
        description: "Eliminated Out-Of-Memory (OOM) errors during heavy usage spikes through dynamic virtual page caching."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "3 Weeks",
        title: "KV-Cache Audit & Baseline",
        details: "Measure VRAM waste, benchmark existing serving framework throughput, and capture traffic profiles."
      },
      {
        phase: "Phase 2",
        duration: "4 Weeks",
        title: "vLLM & Triton Integration",
        details: "Reconfigure models to use PagedAttention and continuous batching schedulers."
      },
      {
        phase: "Phase 3",
        duration: "3 Weeks",
        title: "Speculative Decoding Setup",
        details: "Fine-tune small draft models and set up parallel verification inference pipelines."
      },
      {
        phase: "Phase 4",
        duration: "4 Weeks",
        title: "Spot Broker Deploy & Go-Live",
        details: "Implement API telemetry, construct dynamic Spot instances fallback routes, and transition to live traffic."
      }
    ],
    metricsSummary: [
      { label: "VRAM Waste Cut", value: "70.2%", sublabel: "Zero fragmentation" },
      { label: "User Concurrency", value: "6.5x", sublabel: "Per active GPU node" },
      { label: "TTFT (interactive)", value: "120 ms", sublabel: "Continuous batching" }
    ]
  },
  {
    id: "autonomous-operations",
    title: "Autonomous Operations",
    category: "Enterprise Automation",
    tagline: "Hierarchical multi-agent worker fleets executing business workflows with human validation gates.",
    challengeBrief: "Enterprise supply chain and manufacturing operators waste hundreds of hours manually processing unstructured logistics requests, vendor contracts, and tracking data.",
    challengeDetailed1: "For global logistics, manufacturing, and supply chain operators, business efficiency depends on executing thousands of daily administrative workflows. These include parsing unstructured vendor contracts, matching invoices against complex bills of lading, resolving shipping delays, and updating enterprise resource planning (ERP) systems. Traditional robotic process automation (RPA) tools fail because they cannot handle semantic variations in text. Simple API calls to LLMs also fail at scale, as they struggle with context drift and state synchronization during multi-step processes.",
    challengeDetailed2: "When models operate independently without coordination, they suffer from context drift, resulting in errors like duplicate invoice payments or incorrect inventory routing. Furthermore, autonomous AI agents cannot be trusted to execute financial transactions or modify inventory records without oversight. Deploying autonomous agent networks requires a system that prevents state drift, coordinates actions across specialized sub-agents, and includes secure, human-in-the-loop validation gates.",
    solutionBrief: "We built specialized multi-agent worker fleets utilizing LangGraph and CrewAI. The agents execute context-aware roles, share state mappings, and include secure Slack/Email action gates for human verification.",
    solutionDetailed1: "To address these operational challenges, we built a multi-agent orchestration framework powered by LangGraph and CrewAI. The architecture uses a centralized, conflict-free state memory database. This allows individual sub-agents to share context, history, and goals in real-time, preventing state drift. We separated tasks among specialized agents: a Contract Reader, an Invoice Auditor, a Logistics Tracker, and an ERP Updater. Each agent executes micro-tools in isolated sandboxes to query databases, read PDFs, and run semantic queries.",
    solutionDetailed2: "We then secured the autonomous network by introducing Interactive Approval Gates. For any transaction exceeding specific risk thresholds (e.g., invoices over $5,000 or destination changes), the agent pauses execution and generates a secure Slack card with detailed reasoning. The logistics coordinator can approve, deny, or edit the transaction with a single click, updating the agent's memory database to resume execution instantly. This ensures humans maintain control over high-risk decisions.",
    hardwareConfig: [
      "Distributed microservices clusters running on Kubernetes in hybrid-cloud configurations",
      "Local vector database clusters (Qdrant) running in high-availability mode",
      "Secure sandboxed runtime environments (Docker/Wasm) for agent tool executions",
      "OAuth2 verification servers for Slack, Teams, and Email API integrations",
      "Enterprise database caches with low-latency transactional replication"
    ],
    techStack: [
      { name: "LangGraph Framework", category: "Agent Orchestration" },
      { name: "CrewAI SDK", category: "Multi-Agent Systems" },
      { name: "Qdrant / VectorDB", category: "Semantic Storage" },
      { name: "FastAPI / API Engine", category: "Microservices" },
      { name: "PostgreSQL / JSONB", category: "State Memory" },
      { name: "Docker / WebAssembly", category: "Tool Isolation" }
    ],
    capabilities: [
      {
        title: "Conflict-free shared state memory",
        description: "Graph-based transactional memory stores that prevent context degradation and state drift during complex, multi-step agent actions."
      },
      {
        title: "Interactive human-in-the-loop gates",
        description: "Secure OAuth2-backed Slack action buttons and interactive email cards that halt agents for validation and continue upon user approval."
      },
      {
        title: "Local vector-embedded RAG",
        description: "Semantic retrieval systems querying internal policy manuals, historical shipping logs, and vendor agreements with low latency."
      },
      {
        title: "Self-correcting agent execution",
        description: "Automated loop detection and feedback mechanisms that trace and correct failing API requests or parsing anomalies."
      }
    ],
    outcomes: [
      {
        title: "Automated invoice matching",
        metric: "90%",
        description: "Successfully ingested, validated, and matched invoices against purchase orders without human touch."
      },
      {
        title: "Routing logistics accuracy",
        metric: "99.5%",
        description: "Virtually eliminated shipping destination routing errors by double-checking semantic anomalies."
      },
      {
        title: "Workflow cycle compression",
        metric: "14 min",
        description: "Reduced invoice-to-payment cycle latency from three business days to a matter of minutes."
      },
      {
        title: "Operational efficiency gain",
        metric: "40%+",
        description: "Redirected skilled logistics personnel from data entry tasks to complex customer service operations."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "3 Weeks",
        title: "Workflow Audits & Mapping",
        details: "Map administrative processes, identify decision-making gates, and profile unstructured datasets."
      },
      {
        phase: "Phase 2",
        duration: "5 Weeks",
        title: "Multi-Agent System Design",
        details: "Construct agent graph nodes in LangGraph and code custom micro-tools."
      },
      {
        phase: "Phase 3",
        duration: "4 Weeks",
        title: "Human-in-the-Loop Integration",
        details: "Integrate OAuth2 Slack application and construct interactive dashboard endpoints."
      },
      {
        phase: "Phase 4",
        duration: "4 Weeks",
        title: "Pilot Test & System Hardening",
        details: "Run pilot runs on 10% of logistics queues, optimize agent memory states, and roll out to production."
      }
    ],
    metricsSummary: [
      { label: "Auto Processing", value: "90%", sublabel: "Direct matching" },
      { label: "Cycle Compression", value: "14m", sublabel: "Down from 3 days" },
      { label: "Routing Accuracy", value: "99.5%", sublabel: "State consistency" }
    ]
  },
  {
    id: "regulated-ai-security",
    title: "Regulated AI Security",
    category: "Security & HIPAA Compliance",
    tagline: "Adversarial threat protection and runtime container isolation under zero-trust guidelines.",
    challengeBrief: "Defense and intelligence networks face dangerous adversarial inputs, prompt injections, and data extraction attacks when integrating generative LLMs into regulated environments.",
    challengeDetailed1: "For national defense organizations, intelligence agencies, and tier-one financial institutions, the deployment of LLMs introduces unprecedented security risks. Traditional web security guardrails and network firewalls are completely blind to semantic attacks. Adversaries can bypass systems through prompt injection (direct commands to bypass guardrails) and indirect prompt injection (embedding commands in untrusted documents). These attacks can force models to leak system instructions, access backend tools, or compromise sensitive data.",
    challengeDetailed2: "Furthermore, model deployments are vulnerable to training data poisoning and membership inference attacks, where adversaries extract proprietary data. Standard software containers do not protect against kernel-level exploits if an attacker escapes the model serving application. Regulated networks require a comprehensive, multi-layered security framework that inspects prompts, runs models in isolated environments, and maintains cryptographically secure logs for regulatory compliance.",
    solutionBrief: "We integrated the AI Shield™ framework, implementing input/output validation guardrail layers and running inference tasks inside isolated WASM and gVisor Bash execution sandboxes.",
    solutionDetailed1: "To protect regulated AI environments, we implemented the AI Shield™ security architecture. All user prompts and model completions pass through high-speed, local classification layers that scan for injection patterns, jailbreak payloads, and sensitive information. The model serving applications run in fully isolated sandboxes using gVisor kernels and WebAssembly (WASM). This isolates the application from the host OS, preventing privilege escalation and escaping attempts.",
    solutionDetailed2: "We then secured the data layer by implementing differential privacy filters. These filters automatically mask Personally Identifiable Information (PII) and classified entities before prompts reach the model. All system operations, inputs, and outputs are written to an immutable, cryptographically signed ledger using hash-chain validation. This provides auditors with a tamper-proof trail that complies with NIST SP 800-218 and EU AI Act regulations.",
    hardwareConfig: [
      "Secure, air-gapped on-premise datacenter racks in defense boundaries",
      "FIPS 140-3 validated Hardware Security Modules (HSMs) for encryption",
      "Hardened bare-metal GPU clusters running customized Linux kernels",
      "gVisor-isolated container host architectures",
      "Hardware-encrypted storage volumes with automated zero-knowledge keys"
    ],
    techStack: [
      { name: "AI Shield™ Guardrails", category: "Security Layer" },
      { name: "gVisor Sandbox", category: "Container Isolation" },
      { name: "WebAssembly (Wasm)", category: "Runtime Security" },
      { name: "Llama-Guard Scanners", category: "Input Sanitization" },
      { name: "FIPS KMS Cryptography", category: "Data Security" },
      { name: "Hardened ELK Logs", category: "Audit Logging" }
    ],
    capabilities: [
      {
        title: "ML prompt injection filters",
        description: "Real-time semantic scanners detecting jailbreaks, system prompt overrides, and hidden adversarial inputs at the token level."
      },
      {
        title: "gVisor kernel API isolation",
        description: "Running inference engines inside sandboxed container environments that block direct access to host OS kernels, mitigating escape threats."
      },
      {
        title: "Signed zero-trust audit logging",
        description: "Writing all input prompts, outputs, and system calls to an immutable, cryptographically signed ledger for absolute non-repudiation."
      },
      {
        title: "Differential privacy masking",
        description: "Real-time PII and sensitive token identification layer that obfuscates data dynamically before model processing."
      }
    ],
    outcomes: [
      {
        title: "Jailbreak mitigation rate",
        metric: "99.9%",
        description: "Blocked advanced adversarial jailbreak payloads across rigorous automated red-teaming tests."
      },
      {
        title: "Privilege sandbox escapes",
        metric: "Zero",
        description: "Zero security incidents or privilege escalation attempts detected in isolated container runtimes."
      },
      {
        title: "Regulatory compliance certification",
        metric: "100%",
        description: "Delivered full compliance documentation matching SOC 2 Trust Criteria and European AI Act mandates."
      },
      {
        title: "Air-gapped deployment scope",
        metric: "100% Local",
        description: "Fully functional deployment in secure, air-gapped datacenters with zero external API dependencies."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "4 Weeks",
        title: "Red Teaming & Threat Profiling",
        details: "Perform automated prompt injection testing, map data leaks, and audit host OS kernel vulnerabilities."
      },
      {
        phase: "Phase 2",
        duration: "4 Weeks",
        title: "gVisor Sandbox Deployment",
        details: "Harden container configurations, deploy isolated model servers, and measure latency overheads."
      },
      {
        phase: "Phase 3",
        duration: "4 Weeks",
        title: "Guardrail Classifier Training",
        details: "Fine-tune classification models for input filtering and differential privacy masking rules."
      },
      {
        phase: "Phase 4",
        duration: "3 Weeks",
        title: "KMS Integration & Audit Go-Live",
        details: "Integrate FIPS-compliant HSM key rings and activate immutable audit log chains."
      }
    ],
    metricsSummary: [
      { label: "Jailbreak Blocks", value: "99.9%", sublabel: "Adversarial prevention" },
      { label: "Host Escapes", value: "0", sublabel: "gVisor protected" },
      { label: "Compliance Scope", value: "NIST/EU", sublabel: "Fully certified" }
    ]
  },
  {
    id: "secure-medical-llmops",
    title: "Secure Medical LLMOps",
    category: "Security & HIPAA Compliance",
    tagline: "Fine-tuned clinical models running in secure HIPAA-compliant environments.",
    challengeBrief: "Medical clinics must summarize patient charts and extract diagnostic code data but are legally barred by HIPAA guidelines from sending patient records to external public APIs.",
    challengeDetailed1: "Healthcare providers, clinics, and medical research institutes handle massive amounts of patient data. Clinicians spend up to 30% of their workday reading historical electronic health records (EHR), typing summaries, and mapping symptoms to ICD-10 diagnostic codes. Deploying generative LLMs can automate these workflows, but patient privacy laws like HIPAA legally prohibit transmitting Protected Health Information (PHI) to external, third-party model APIs.",
    challengeDetailed2: "At the same time, generic foundational models exhibit unacceptable hallucination rates. A model hallucinating a medical dosage or drug interaction poses serious risks to patient safety. Medical systems require a specialized clinical LLM that runs entirely within a secure, on-premise datacenter, processes complex EHR charts with high accuracy, and cross-references its decisions against verified medical databases.",
    solutionBrief: "We set up private-cloud model clusters running custom fine-tuned Llama 70B clinical models, quantized to FP8 using AutoAWQ and aligned with doctor annotations via clinical DPO.",
    solutionDetailed1: "To address these compliance and accuracy requirements, we built an isolated, on-premise clinical LLM cluster running customized Llama-3 70B models. We quantized the models to FP8 using AutoAWQ, reducing VRAM footprint by 50% so they run efficiently on local hardware. We aligned the models using Clinical Direct Preference Optimization (DPO), training them on expert-annotated clinical datasets to ensure proper medical terminology.",
    solutionDetailed2: "We then eliminated hallucinations by integrating a semantic validator. When the model generates a chart summary, the validator cross-references recommendations against a medical knowledge graph (UMLS and SNOMED-CT). If a conflict is detected, the validator flags the discrepancy and corrects it before output generation. The entire environment is air-gapped within the provider's private cloud, ensuring zero data leaks and full HIPAA compliance.",
    hardwareConfig: [
      "On-premise enterprise GPU racks (NVIDIA H100 or A100 SXM5)",
      "Air-gapped local storage clusters (HIPAA certified and encrypted)",
      "Encrypted local area networks with zero external routing",
      "Liquid cooling racks optimized for continuous inference loops",
      "Encrypted hardware key rings for local access authorization"
    ],
    techStack: [
      { name: "Llama-3 70B Model", category: "Foundational Model" },
      { name: "AutoAWQ Quantization", category: "Model Optimization" },
      { name: "Clinical DPO", category: "Alignment Tuning" },
      { name: "UMLS / SNOMED Graphs", category: "Knowledge Validation" },
      { name: "Qdrant Vector Cluster", category: "Retrieval Storage" },
      { name: "Hardened Debian OS", category: "Operating System" }
    ],
    capabilities: [
      {
        title: "AutoAWQ quantization execution",
        description: "Executing quantized FP8 models on local servers, preserving precision while cutting VRAM usage in half to optimize compute density."
      },
      {
        title: "Clinical DPO preference alignment",
        description: "Alignment loops utilizing verified medical datasets to optimize diagnostic logic and medical terminology comprehension."
      },
      {
        title: "Semantic knowledge validation",
        description: "Real-time cross-referencing of model assertions against medical ontologies (UMLS, SNOMED-CT) to eliminate critical hallucinations."
      },
      {
        title: "HIPAA isolated environment",
        description: "On-premise air-gapped deployments ensuring zero PHI leaks or external API network routes, satisfying healthcare audit gates."
      }
    ],
    outcomes: [
      {
        title: "Summarization cost reduction",
        metric: "80%",
        description: "Bypassing token-based external API pricing led to massive cost savings for large-scale chart summarization."
      },
      {
        title: "ICD-10 extraction accuracy",
        metric: "99%+",
        description: "Achieved high precision in identifying ICD-10 codes, patient history, and drug dosages from raw doctor notes."
      },
      {
        title: "HIPAA compliance infractions",
        metric: "Zero",
        description: "Passed rigorous healthcare compliance assessments with zero leaks of patient records."
      },
      {
        title: "Doctor chart review speedup",
        metric: "5x Comp",
        description: "Reduced the time required for physicians to synthesize historical EHR files, improving patient turnover."
      }
    ],
    timeline: [
      {
        phase: "Phase 1",
        duration: "4 Weeks",
        title: "Dataset Collection & Annotation",
        details: "Collect clinical transcripts and secure expert doctor annotations for preference learning."
      },
      {
        phase: "Phase 2",
        duration: "6 Weeks",
        title: "Fine-Tuning & Quantization",
        details: "Execute QLoRA training runs, perform DPO alignment, and quantize weights to FP8 formats."
      },
      {
        phase: "Phase 3",
        duration: "3 Weeks",
        title: "Knowledge Graph Integration",
        details: "Integrate SNOMED-CT dictionaries and code the semantic validation parser."
      },
      {
        phase: "Phase 4",
        duration: "3 Weeks",
        title: "Air-Gapped Cluster Deploy",
        details: "Install physical systems in clinical server rooms and execute HIPAA security verification audits."
      }
    ],
    metricsSummary: [
      { label: "ICD-10 Accuracy", value: "99.2%", sublabel: "Extraction rate" },
      { label: "Doctor Review Comp", value: "5x", sublabel: "Chart time compression" },
      { label: "Cost vs Public API", value: "80% Saved", sublabel: "Zero token pricing" }
    ]
  }
];

const categories = [
  "All Use Cases",
  "Infrastructure & Scaling",
  "Low-Latency Compute",
  "Enterprise Automation",
  "Security & HIPAA Compliance"
];

// ─── Component ─────────────────────────────────────────────────────────────────

function UseCasesPage() {
  const [activeCategory, setActiveCategory] = useState("All Use Cases");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [detailTab, setDetailTab] = useState<"deep-dive" | "capabilities" | "timeline">("deep-dive");

  const filteredUseCases = useCasesData.filter(item => {
    if (activeCategory === "All Use Cases") return true;
    return item.category === activeCategory;
  });

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

      <div className="py-20 bg-background border-b border-border/40 relative">
        {/* Glow decorative effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          {/* Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-border/20">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Filter className="w-4 h-4 text-accent" />
              <span>Filter cases by enterprise focus:</span>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                      isActive
                        ? "bg-accent/15 border-accent text-accent shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        : "bg-surface/30 border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredUseCases.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-2xl border border-border/60 bg-surface/30 p-8 flex flex-col hover:border-primary/40 hover:bg-surface/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground/60 font-mono">
                      CASE #{item.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient-primary transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground italic mb-6">
                    {item.tagline}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.challengeBrief}
                  </p>

                  {/* Quick Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 bg-surface/40 rounded-xl p-4 border border-border/20 mb-8 mt-auto">
                    {item.metricsSummary.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-extrabold text-foreground font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-accent font-semibold uppercase tracking-wider mt-0.5">
                          {m.label}
                        </div>
                        <div className="text-[9px] text-muted-foreground/70 hidden sm:block">
                          {m.sublabel}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedUseCase(item);
                      setDetailTab("deep-dive");
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/15 hover:border-primary text-xs font-bold tracking-wider uppercase text-foreground transition-all duration-300"
                  >
                    <span>View Architecture & Timeline</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide-over Drawer Backdrop & Panel */}
      <AnimatePresence>
        {selectedUseCase && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUseCase(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-3xl bg-surface border-l border-border/40 shadow-2xl overflow-y-auto flex flex-col p-8 md:p-10 font-sans"
            >
              {/* Close & Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-wider font-bold text-accent bg-accent/10 px-3 py-1 rounded-md border border-accent/20">
                  {selectedUseCase.category}
                </span>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="p-2 rounded-xl bg-surface-hover/80 hover:bg-surface-hover border border-border/40 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gradient-primary mb-2">
                  {selectedUseCase.title}
                </h2>
                <p className="text-sm text-muted-foreground italic">
                  {selectedUseCase.tagline}
                </p>
              </div>

              {/* Hardware Config Bar */}
              <div className="bg-surface/50 rounded-2xl border border-border/30 p-5 mb-8">
                <div className="flex items-center gap-2.5 mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Server className="w-4 h-4 text-primary" />
                  <span>Hardware Deployment Stack</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {selectedUseCase.hardwareConfig.map((hw, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="font-mono text-foreground/80 leading-relaxed">{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-border/30 mb-8 gap-2">
                <button
                  onClick={() => setDetailTab("deep-dive")}
                  className={`pb-4 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    detailTab === "deep-dive"
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Engineering Deep-Dive
                </button>
                <button
                  onClick={() => setDetailTab("capabilities")}
                  className={`pb-4 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    detailTab === "capabilities"
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Capabilities
                </button>
                <button
                  onClick={() => setDetailTab("timeline")}
                  className={`pb-4 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    detailTab === "timeline"
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Deployment Journey
                </button>
              </div>

              {/* Tab Contents */}
              <div className="flex-grow">
                {detailTab === "deep-dive" && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                        <Activity className="w-4 h-4 text-accent" />
                        <span>The Operational Challenge</span>
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {selectedUseCase.challengeDetailed1}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedUseCase.challengeDetailed2}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                        <Settings className="w-4 h-4 text-primary" />
                        <span>Engineering Solution Design</span>
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {selectedUseCase.solutionDetailed1}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedUseCase.solutionDetailed2}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                        Technologies & Protocols Integrated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedUseCase.techStack.map((tech, idx) => (
                          <div
                            key={idx}
                            className="bg-surface-hover/80 border border-border/40 px-3.5 py-1.5 rounded-lg flex flex-col gap-0.5"
                          >
                            <span className="text-xs font-bold text-foreground">{tech.name}</span>
                            <span className="text-[9px] text-muted-foreground/80 uppercase tracking-wide">
                              {tech.category}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {detailTab === "capabilities" && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                      Technical Capabilities Delivered
                    </h4>
                    <div className="grid gap-5">
                      {selectedUseCase.capabilities.map((cap, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-border/40 bg-surface/30 flex gap-4 items-start"
                        >
                          <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0 mt-0.5">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-foreground mb-1.5">
                              {cap.title}
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {cap.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {detailTab === "timeline" && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
                        Implementation & Deployment Journey
                      </h4>
                      
                      <div className="relative pl-6 border-l-2 border-border/40 space-y-8">
                        {selectedUseCase.timeline.map((t, idx) => (
                          <div key={idx} className="relative">
                            {/* Bullet dot */}
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-accent">
                                  {t.phase} ({t.duration})
                                </span>
                              </div>
                              <h5 className="font-bold text-sm text-foreground mb-1.5">
                                {t.title}
                              </h5>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {t.details}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/20 pt-8 mt-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                        Measurable Outcomes & Business Impact
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {selectedUseCase.outcomes.map((out, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl border border-border/30 bg-surface/20 flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-foreground/90">
                                {out.title}
                              </span>
                              <span className="text-sm font-extrabold text-accent font-mono">
                                {out.metric}
                              </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {out.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer Stats */}
              <div className="border-t border-border/30 pt-8 mt-8 grid grid-cols-3 gap-4">
                {selectedUseCase.metricsSummary.map((m, idx) => (
                  <div key={idx} className="text-center bg-surface/30 rounded-xl p-3 border border-border/20">
                    <div className="text-xl font-extrabold text-foreground font-mono">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-accent font-semibold uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CaseStudies />
      <CTA />
    </>
  );
}
