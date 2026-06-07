import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

const capabilitiesData: SectionData[] = [
  {
    title: "GPU Optimization",
    description: "Maximum hardware throughput and efficiency",
    introduction: "We empower enterprises to achieve peak hardware efficiency through comprehensive Black-Box Optimization (autonomous workload tuning) and White-Box Optimization (transparent kernel profiling).",
    capabilities: [
      "Kernel-level tuning and custom CUDA deployment",
      "Advanced CUDA stream concurrency",
      "TensorRT graph fusion optimization",
      "NCCL topology optimization for multi-GPU communication"
    ],
    solutions: [
      "Automated workload profiling and tuning",
      "Transparent white-box kernel acceleration",
      "Autonomous black-box workload orchestration",
      "Hybrid scaling architectures"
    ],
    useCases: [
      "Real-time inference pipelines requiring ultra-low latency",
      "Large-scale distributed training clusters",
      "Complex computational modeling in HFT and research"
    ],
    outcomes: [
      "Dramatically accelerate workload processing speeds",
      "Significant latency reduction across enterprise applications",
      "Massive throughput gains and hard cost savings"
    ],
    metrics: [
      { label: "Performance Gains", value: "3-15x" },
      { label: "Cost Reduction", value: "40-75%" },
      { label: "Latency Reduction", value: "50%+" },
      { label: "Hardware Utilization", value: "95%" }
    ]
  },
  {
    title: "Cloud GPU Optimization",
    description: "Cloud-neutral multi-cluster orchestration",
    introduction: "Positioning the GPU-phi platform as cloud-neutral and enterprise-ready, we transform fragmented multi-cloud deployments into unified, cost-aware AI factories.",
    capabilities: [
      "Seamless multi-cloud cluster orchestration",
      "Advanced GPU autoscaling with Kubernetes and Ray",
      "Enterprise-grade GPU FinOps strategies",
      "Cross-region workload mobility"
    ],
    solutions: [
      "Cloud-neutral GPU-phi orchestration integration",
      "Automated cost-aware scheduling policies",
      "Dynamic instance provisioning algorithms",
      "Multi-tenant resource isolation"
    ],
    useCases: [
      "Enterprise multi-cloud AI adoption",
      "Global scaling of real-time AI services",
      "Mitigating cloud vendor lock-in strategies"
    ],
    outcomes: [
      "Significantly faster deployment cycles",
      "Unmatched resilience with zero downtime updates",
      "Drastic reduction in cloud infrastructure spending"
    ],
    metrics: [
      { label: "Deployment Speed", value: "5x Faster" },
      { label: "Infrastructure Savings", value: "50%+" },
      { label: "Downtime", value: "Zero" },
      { label: "Cloud Flexibility", value: "100%" }
    ]
  },
  {
    title: "LLM Optimization",
    description: "Accelerating GenAI inference and training",
    introduction: "Unlock the full potential of Large Language Models with specialized hybrid black-box and white-box optimizations that reduce inference costs while accelerating response times.",
    capabilities: [
      "Parameter-Efficient Fine-Tuning (LoRA, QLoRA)",
      "Advanced model quantization (INT8/FP16/AWQ)",
      "Highly distributed inference pipeline orchestration",
      "Context-window memory management"
    ],
    solutions: [
      "Disaggregated serving architectures for LLMs",
      "Hybrid black-box + white-box scaling",
      "Custom kernel integration for transformer blocks",
      "RAG pipeline acceleration"
    ],
    useCases: [
      "Enterprise customer support conversational bots",
      "Automated compliance monitoring and document QA",
      "Real-time predictive analytics and decision engines"
    ],
    outcomes: [
      "Drastically reduces per-token inference cost",
      "Accelerates response times for fluid user experiences",
      "Empowers secure, on-premise foundation model deployment"
    ],
    metrics: [
      { label: "Inference Speed", value: "70% Faster" },
      { label: "Memory Footprint", value: "-60%" },
      { label: "Cost Per Token", value: "-80%" },
      { label: "Throughput", value: "4-8x+" }
    ]
  },
  {
    title: "AI Optimization",
    description: "Intelligent orchestration for AI infrastructure",
    introduction: "Emphasize workload orchestration across heterogeneous GPU clusters with AI-driven scheduling, predictive resource allocation, and automated scaling that guarantees resilience.",
    capabilities: [
      "Heterogeneous GPU cluster workload orchestration",
      "AI-driven workload scheduling algorithms",
      "Predictive resource allocation and capacity planning",
      "Automated and autonomous scaling frameworks"
    ],
    solutions: [
      "Autonomous resilience frameworks",
      "Intelligent capacity forecasting dashboards",
      "Continuous integration/deployment (CI/CD) for ML models",
      "Dynamic priority-based queue management"
    ],
    useCases: [
      "Foundational model training across diverse hardware",
      "Heterogeneous enterprise cluster management",
      "High-throughput internal AI R&D platforms"
    ],
    outcomes: [
      "ROI-driven outcomes with significantly faster model training",
      "Reduced energy consumption across the data center",
      "Improved resilience and fault tolerance for critical workloads"
    ],
    metrics: [
      { label: "Model Training", value: "3x Faster" },
      { label: "Energy Consumption", value: "-40%" },
      { label: "Cluster Uptime", value: "99.99%" },
      { label: "Job Completion", value: "99%+" }
    ]
  },
  {
    title: "Data Center Network Automation",
    description: "Sub-microsecond latency at multi-megawatt scale",
    introduction: "Eliminate network bottlenecks with AI-driven routing controllers, RDMA over InfiniBand, and NVLink topology optimization for autonomous, highly resilient orchestration.",
    capabilities: [
      "RDMA over InfiniBand architectural design",
      "NVLink topology optimization for massive scale",
      "AI-driven routing controllers and traffic management",
      "Adaptive network reflex layers"
    ],
    solutions: [
      "Autonomous network orchestration platforms",
      "Adaptive routing dashboards with real-time telemetry",
      "Congestion control and automated load balancing",
      "Resilient leaf-spine fabric configurations"
    ],
    useCases: [
      "Hyperscale AI training data center networking",
      "Low-latency financial trading (HFT) infrastructure",
      "National sovereign AI computing grid deployments"
    ],
    outcomes: [
      "Achieve absolute sub-microsecond latency",
      "Guarantee 99.9% uptime for business-critical operations",
      "Transform rigid networks into adaptive, self-healing fabrics"
    ],
    metrics: [
      { label: "Network Latency", value: "< 1μs" },
      { label: "Network Uptime", value: "99.9%" },
      { label: "Bandwidth Utilization", value: "95%+" },
      { label: "Packet Loss", value: "Near-Zero" }
    ]
  },
  {
    title: "Energy Optimization",
    description: "Sustainable AI scaling with ESG compliance",
    introduction: "Drive sustainable AI growth through energy-aware scheduling, comprehensive GPU FinOps dashboards, and automated thermal management that aligns with corporate ESG standards.",
    capabilities: [
      "Energy-aware workload scheduling algorithms",
      "Real-time GPU FinOps and sustainability dashboards",
      "Comprehensive sustainability metrics tracking",
      "Dynamic power capping and thermal profiling"
    ],
    solutions: [
      "ESG compliance reporting suites",
      "Intelligent workload time-shifting for off-peak execution",
      "Liquid cooling integration and management",
      "Carbon footprint reduction automation"
    ],
    useCases: [
      "Enterprise sustainability initiatives and ESG mandates",
      "Power-constrained data center environments",
      "Green AI research and development facilities"
    ],
    outcomes: [
      "Massively reduced total power consumption",
      "Proven carbon footprint reduction for enterprise reporting",
      "Strict compliance with evolving ESG standards and regulations"
    ],
    metrics: [
      { label: "Power Consumption", value: "-30%" },
      { label: "ESG Compliance", value: "100%" },
      { label: "Carbon Footprint", value: "-45%" },
      { label: "Cooling Efficiency", value: "2x" }
    ]
  },
  {
    title: "AI Security & Cyber Dom Protection Mesh",
    description: "Continuous Zero-Trust shielding and threat isolation",
    introduction: "Deploy generative AI and autonomous systems with absolute peace of mind. We protect applications, models, and execution hosts from adversarial threats, jailbreaks, and exfiltration attempts.",
    capabilities: [
      "Cyber Dom guardrails for real-time prompt injection blocking",
      "Zero-Trust policy enforcement for models and tools",
      "Cryptographic activity logging for every database read/write",
      "Automated red-teaming and adversarial simulation engines"
    ],
    solutions: [
      "Cyber Dom runtime injection filter mesh integration",
      "PII redaction and exfiltration prevention gateways",
      "Audit compliance tracking suites (SOC2, EU AI Act)",
      "Confidential computing and TEE infrastructure setups"
    ],
    useCases: [
      "Regulated banking systems deploying user-facing conversational LLMs",
      "Federal databases integrated with generative search engines",
      "SaaS systems executing user-supplied prompts with tool bindings"
    ],
    outcomes: [
      "Neutralize prompt injections and model jailbreaks at the gateway",
      "Maintain strict compliance standards in highly audited industries",
      "Guarantee privacy and zero leaks of proprietary enterprise data"
    ],
    metrics: [
      { label: "Jailbreak Block Rate", value: "99.9%" },
      { label: "Filter Latency Overhead", value: "< 5ms" },
      { label: "PII Leak Probability", value: "0%" },
      { label: "Compliance Score", value: "100%" }
    ]
  },
  {
    title: "Hardened Sandbox Shell & Agent Execution",
    description: "Hyper-secure runtimes for dynamic agent-generated code",
    introduction: "Unlock the full potential of shell automation and scripting. We build ephemeral, isolated execution environments that allow agents to write and run code securely without exposing host servers.",
    capabilities: [
      "gVisor, WebAssembly, and MicroVM container isolation",
      "Dynamic pre-execution Bash script parsing and syntax auditing",
      "Strict CPU, memory, and network namespace restrictions",
      "Real-time process telemetry and system call monitoring"
    ],
    solutions: [
      "Ephemeral runner sandboxes integrated with agent pipelines",
      "Blacklisted command and namespace isolation policies",
      "Automatic file system cleanup immediately post-execution",
      "MCP server bindings with restricted execution contexts"
    ],
    useCases: [
      "AI agents performing code correction and running automated tests",
      "Systems deploying shell-capable automation agents for server configs",
      "Data analytics agents writing and executing dynamic Python/Bash scripts"
    ],
    outcomes: [
      "Safe execution of dynamic, AI-generated terminal commands",
      "Zero host contamination or unauthorized lateral network movements",
      "Prevention of infinite loops, memory leaks, and CPU exhaustion"
    ],
    metrics: [
      { label: "Sandbox Breakout", value: "0%" },
      { label: "Container Boot Time", value: "< 10ms" },
      { label: "Blocked Banned Syscalls", value: "100%" },
      { label: "Resource Limits Enforced", value: "100%" }
    ]
  },
  {
    title: "Multi-Agent Fleet Orchestration",
    description: "Stateful coordination of specialist agent teams",
    introduction: "Decompose complex, long-running processes into reliable worker fleets. We engineer distributed multi-agent state machines with robust routing, conflict resolution, and human approval gates.",
    capabilities: [
      "Hierarchical and network multi-agent orchestration design",
      "LangGraph and CrewAI distributed workflow development",
      "Human-in-the-Loop Slack/Email action approval gates",
      "Model Context Protocol (MCP) server resource bindings"
    ],
    solutions: [
      "Stateful multi-agent supervisor systems",
      "Automated exception handling and compensation routines",
      "Interactive agent trace observability dashboards",
      "Real-time cost governance and token attribution controls"
    ],
    useCases: [
      "Autonomous coding, testing, and devops pipeline agents",
      "Multi-document financial report reconciliation systems",
      "Autonomous procurement workflows with authorization loops"
    ],
    outcomes: [
      "Scale operational automation without losing governance",
      "Prevent infinite agent loops and execution drift",
      "Seamlessly gate high-risk writes with real-time human reviews"
    ],
    metrics: [
      { label: "Complex Task Success", value: "92-96%" },
      { label: "Loop Failures Blocked", value: "85%+" },
      { label: "Tool Selector Accuracy", value: "98.5%" },
      { label: "Integration Speedup", value: "3x Faster" }
    ]
  }
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Competencies"
        title={
          <>
            Enterprise AI & <br />
            Infrastructure <span className="text-accent">Capabilities</span>
          </>
        }
        description="From low-level kernel tuning to mega-scale network automation, we provide the technical capabilities necessary to transform risk into resilience and empower the modern AI enterprise."
      />

      <div className="bg-background">
        {capabilitiesData.map((data, index) => (
          <SectionTemplate key={index} data={data} />
        ))}
      </div>

      <CTA />
    </>
  );
}
