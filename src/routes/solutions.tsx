import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});

const solutionsData: SectionData[] = [
  {
    title: "Mega-Scale GPU Data Center & Private GPU Cloud Architecture",
    description: "Maximum hardware efficiency at supercomputing scale",
    introduction: "We engineer and design AI supercomputer facilities from the ground up, optimizing InfiniBand/RoCEv2 fabrics, liquid cooling integrations, and topology-aware schedulers to unlock peak GPU density and performance.",
    capabilities: [
      "InfiniBand/RoCEv2 non-blocking network fabric design",
      "Liquid cooling (up to 120 kW/rack) and thermal management",
      "Dynamic MIG/vGPU resource partitioning",
      "DCGM self-healing clusters with automated failovers"
    ],
    solutions: [
      "Hyperscale GPU Data Center commissioning",
      "Sovereign AI private cloud deployment",
      "Dynamic GPUDirect Storage pipelines",
      "FinOps SKU right-sizing and spot orchestration"
    ],
    useCases: [
      "National sovereign AI supercomputing projects",
      "Hyperscalers scaling clusters to 10,000+ Blackwell GPUs",
      "Enterprises consolidating fragmented GPU assets into private clouds"
    ],
    outcomes: [
      "Maximize Model FLOPs Utilization (MFU) across large training runs",
      "Eliminate communication bottlenecks and switch packet drops",
      "Lower Total Cost of Ownership (TCO) in power-restricted environments"
    ],
    metrics: [
      { label: "Fabric Efficiency", value: "95-97%+" },
      { label: "Sustained MFU", value: "85-92%" },
      { label: "GPU Cost Savings", value: "40-70%" },
      { label: "Cluster Downtime", value: "< 1%" }
    ]
  },
  {
    title: "Production-Grade LLM Engineering & Finetuning Systems",
    description: "Operationalizing generative models at enterprise scale",
    introduction: "Bridge the gap between generic APIs and highly specialized, domain-specific open models. We build custom training, DPO preference alignment, evaluation, and quantized serving systems.",
    capabilities: [
      "Domain-specific fine-tuning (LoRA, QLoRA, DPO)",
      "Model quantization (FP8, INT4, AWQ) for fast serving",
      "High-throughput inference scaling (vLLM, TRT-LLM)",
      "Continuous prompt evaluation and regression tracking"
    ],
    solutions: [
      "Custom legal, financial, and medical model adaptation",
      "Dedicated high-throughput model endpoints",
      "Automated Golden Dataset evaluation suites",
      "Compliance-ready local model serving"
    ],
    useCases: [
      "Medical groups processing patient data securely on-premise",
      "FinTech companies requiring sub-millisecond classification models",
      "Legal firms building highly accurate search and document QA engines"
    ],
    outcomes: [
      "Reduce token cost by replacing generic public APIs",
      "Dramatically accelerate generation speeds for real-time flows",
      "Eliminate hallucination risks on enterprise workflows"
    ],
    metrics: [
      { label: "Token Cost Savings", value: "50-80%" },
      { label: "Throughput Gains", value: "4-8x+" },
      { label: "Accuracy Retained", value: "99%+" },
      { label: "Latency Overhead", value: "< 15ms" }
    ]
  },
  {
    title: "Cyber Dom AI Security Mesh & Sandbox Execution",
    description: "Zero-Trust protection for dynamic AI workloads",
    introduction: "Shield models and systems from dynamic execution threats. We implement Cyber Dom, an intelligent protection mesh, alongside hardened microVM and WASM sandboxes to isolate script executions.",
    capabilities: [
      "Cyber Dom real-time prompt injection blocking",
      "Zero-Trust fine-grained identity & access governance",
      "Secure gVisor and WASM script sandboxing",
      "Cryptographic logging and immutable compliance trails"
    ],
    solutions: [
      "Prompt injection and jailbreak mitigation proxy",
      "Secure Bash/shell execution runner sandboxes",
      "Automated adversarial red-teaming",
      "Compliance readiness monitoring (SOC2, FedRAMP, EU AI Act)"
    ],
    useCases: [
      "Regulated institutions connecting LLMs to write-capable APIs",
      "Autonomous coding assistants running generated shell commands",
      "Government bodies executing complex calculations on isolated networks"
    ],
    outcomes: [
      "Enable agents to run shell operations without exposing root nodes",
      "Prevent data leakage and exfiltration through model gateways",
      "Maintain a 100% compliant, audited record of all system executions"
    ],
    metrics: [
      { label: "Jailbreak Block Rate", value: "99.9%" },
      { label: "Sandbox Escape", value: "0%" },
      { label: "Syscall Filtering", value: "100%" },
      { label: "Compliance Score", value: "100%" }
    ]
  },
  {
    title: "Autonomous Agentic Workflows & Multi-Agent Orchestration",
    description: "Coordinating fleets of specialized business agents",
    introduction: "Decompose complex enterprise tasks into reliable multi-agent grids. We build supervisor-worker systems with stateful routing, shared memory, and human-in-the-loop action gating.",
    capabilities: [
      "Stateful multi-agent system design (LangGraph, CrewAI)",
      "Model Context Protocol (MCP) server integration",
      "Human-in-the-loop email/slack gating gateways",
      "Persistent agent episodic and semantic memory architectures"
    ],
    solutions: [
      "Autonomous procurement and order processing grids",
      "Customer success agent squads with escalation logic",
      "Multi-document reconciliation and reporting pipelines",
      "Automated DevOps and self-healing systems"
    ],
    useCases: [
      "Global manufacturing companies automating procurement cycles",
      "Customer support centers moving from simple chat to action bots",
      "Engineering organizations automating pipeline deployment loops"
    ],
    outcomes: [
      "Automate high-stakes processes with precise quality controls",
      "Avoid infinite execution loops and agent drift",
      "Streamline operations with intuitive manager review gates"
    ],
    metrics: [
      { label: "Task Success Rate", value: "92-96%" },
      { label: "Workflow Automation", value: "10x" },
      { label: "Loop Failures Blocked", value: "85%+" },
      { label: "Tool Call Precision", value: "98.5%" }
    ]
  }
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title={
          <>
            Transformative <span className="text-accent">AI Solutions</span> <br />
            for the Enterprise
          </>
        }
        description="Bespoke, outcome-oriented solutions designed to optimize cloud GPU orchestration, scale domain-specific models, secure runtime interfaces, and coordinate multi-agent business operations."
      />

      <div className="bg-background">
        {solutionsData.map((data, index) => (
          <SectionTemplate key={index} data={data} />
        ))}
      </div>

      <CTA />
    </>
  );
}
