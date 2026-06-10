import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export function AiInfrastructureEngineeringSection({ excludeHeroAndCta = false }: { excludeHeroAndCta?: boolean }) {
  return (
    <ServiceDetail
      eyebrow="AI Infrastructure"
      title="AI-native infrastructure engineered end-to-end"
      description="From bare-metal GPU clusters to multi-region inference fleets, we design and operate the infrastructure that powers enterprise AI."
      capabilities={[
        { title: "Kubernetes for AI", desc: "GPU-aware scheduling, KServe, Kueue, and elastic inference." },
        { title: "Distributed Training", desc: "Multi-node training infrastructure on Ray, Slurm and Kubeflow." },
        { title: "MLOps", desc: "End-to-end pipelines for model lifecycle, lineage and reproducibility." },
        { title: "LLMOps", desc: "Prompt management, evaluation, fine-tuning and inference operations." },
        { title: "Cloud Engineering", desc: "AWS, Azure and GCP architectures optimized for AI workloads." },
        { title: "FinOps", desc: "Real-time cost attribution, budgets and GPU utilization optimization." },
      ]}
      stack={["Kubernetes", "Ray", "Kubeflow", "MLflow", "AWS", "Azure", "GCP", "Terraform", "ArgoCD"]}
      excludeHeroAndCta={excludeHeroAndCta}
    />
  );
}

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
  component: () => <AiInfrastructureEngineeringSection />,
});
