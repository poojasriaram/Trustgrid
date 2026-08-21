import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, OfferingDetail } from "@/components/site/ServiceDetail";

const detailedOfferings: OfferingDetail[] = [
  {
    title: "1. Enterprise Kubernetes & GPU Cluster Orchestration",
    subtitle: "Scalable, high-density compute scheduling and automatic node management",
    description: "Deploying and optimizing Kubernetes operator frameworks (like KubeRay, TorchElastic, KServe) specifically tuned for parallel model training and multi-tenant slice partitioning. We orchestrate bare-metal and cloud-native GPU resources under strict reliability constraints.",
    keySituations: [
      "Dynamic spot-instance drops causing training loss or stalling distributed jobs.",
      "Inefficient multi-tenant GPU sharing leading to resource starvation or context overhead.",
      "Lack of unified infrastructure control planes for heterogeneous cloud/on-prem nodes."
    ],
    keyStatistics: [
      "GPU resource waste: Cut below 2% via dynamic MIG partitioning",
      "Epoch checkpoints recovery time: Reduced to under 45 seconds",
      "Manual DevOps infrastructure tickets: Decreased by 80% via automations",
      "Preemptible node recovery: 100% automated failover routing"
    ],
    offeringValue: "Transforms fragmented hardware servers into a unified, self-healing, high-performance supercomputing platform.",
    expectedOutcomes: [
      "GPU-aware Slurm or Kubernetes cluster configurations.",
      "Autonomous node fencing script setups that hot-swap active training states.",
      "Centralized Grafana/DCGM dashboard tracing cluster health, thermal levels, and queues."
    ]
  },
  {
    title: "2. Production MLOps / LLMOps Pipelines & AI FinOps",
    subtitle: "End-to-end model delivery orchestration and real-time cost attribution",
    description: "Engineering continuous integration and deployment pipelines (CI/CD) for machine learning, integrating centralized feature stores, and setting up token-level chargeback observability systems to control massive API and hosting bills.",
    keySituations: [
      "AI teams executing redundant features computations or losing model lineage records.",
      "Spiraling cloud GPU hosting fees with zero visibility into team-by-team cost allocation.",
      "Slow model-to-production deployment cycles slowing down feature releases."
    ],
    keyStatistics: [
      "Model deployment cycle: Reduced from 6 months to 6 weeks",
      "Average cloud GPU expenditure: Decreased by 42% via FinOps scheduling",
      "Feature computation redundancy: Cut by 90% using unified stores",
      "SLA response time stability: 99.9% uptime under peak traffic"
    ],
    offeringValue: "Enables organizations to establish high-velocity, cost-controlled, and audited AI deployment pipelines.",
    expectedOutcomes: [
      "Automated MLOps pipelines versioning training datasets and model weights.",
      "AI FinOps dashboard with customizable alert triggers and budget caps.",
      "Production-ready vector database indexing schemas tuned for sub-millisecond query retrieval."
    ]
  }
];

export const Route = createFileRoute("/ai-infrastructure-engineering")({
  head: () => ({
    meta: [
      { title: "AI Infrastructure Engineering — Cloud, Hybrid, On-Prem | TrustGrid.AI" },
      { name: "description", content: "Design and operate AI-native infrastructure across cloud, hybrid and on-premise environments. Kubernetes, distributed AI, MLOps, LLMOps and FinOps." },
      { property: "og:title", content: "AI Infrastructure Engineering | TrustGrid.AI" },
      { property: "og:description", content: "AI-native infrastructure engineered for cost, scale and security." },
      { property: "og:url", content: "/ai-infrastructure-engineering" },
    ],
    links: [{ rel: "canonical", href: "/ai-infrastructure-engineering" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AI Infrastructure"
      title="AI-native infrastructure engineered end-to-end"
      description="From bare-metal GPU clusters to multi-region inference fleets, we design and operate the infrastructure that powers enterprise AI."
      outcomes={[
        { value: "-60%", label: "Management Overhead" },
        { value: "99.99%", label: "Platform Uptime" },
        { value: "42%", label: "Average Cost Savings" },
        { value: "< 2%", label: "Resource Waste" },
      ]}
      capabilities={[
        { title: "Kubernetes for AI", desc: "GPU-aware scheduling, KServe, Kueue, and elastic inference." },
        { title: "Distributed Training", desc: "Multi-node training infrastructure on Ray, Slurm and Kubeflow." },
        { title: "MLOps", desc: "End-to-end pipelines for model lifecycle, lineage and reproducibility." },
        { title: "LLMOps", desc: "Prompt management, evaluation, fine-tuning and inference operations." },
        { title: "Cloud Engineering", desc: "AWS, Azure and GCP architectures optimized for AI workloads." },
        { title: "FinOps", desc: "Real-time cost attribution, budgets and GPU utilization optimization." },
      ]}
      stack={["Kubernetes", "Ray", "Kubeflow", "MLflow", "AWS", "Azure", "GCP", "Terraform", "ArgoCD"]}
      detailedOfferings={detailedOfferings}
      sliderType="infrastructure"
      bgImages={[
        "/images/ai_infra.png",
        "/images/gpu_cluster_1_1781677642098.png",
        "/images/gpu_cluster_2_1781677654723.png"
      ]}
    />
  ),
});
