import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/llmops-services")({
  head: () => ({
    meta: [
      { title: "LLMOps Services — Production LLM Operations | TrustGrid.AI" },
      { name: "description", content: "End-to-end LLMOps: prompt management, evaluation, fine-tuning, inference operations and observability for enterprise LLM deployments." },
      { property: "og:title", content: "LLMOps Services | TrustGrid.AI" },
      { property: "og:description", content: "Operate LLMs in production at Fortune 500 scale." },
      { property: "og:url", content: "/llmops-services" },
    ],
    links: [{ rel: "canonical", href: "/llmops-services" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="LLMOps"
      title="Operate LLMs in production at enterprise scale"
      description="Industrial-grade LLMOps practices for prompt engineering, evaluation, fine-tuning, inference scaling and observability."
      capabilities={[
        { title: "Prompt Management", desc: "Versioning, A/B testing and rollback for prompts at scale." },
        { title: "Evaluation", desc: "Offline + online evals, regression suites, golden datasets." },
        { title: "Fine-Tuning", desc: "LoRA, QLoRA, DPO and full fine-tuning workflows." },
        { title: "Inference Operations", desc: "Autoscaling, caching, routing and cost optimization." },
        { title: "Observability", desc: "Token-level tracing, drift detection and quality monitoring." },
        { title: "Guardrails", desc: "Input/output filtering, PII redaction and policy enforcement." },
      ]}
      stack={["vLLM", "TGI", "LangSmith", "Arize", "OpenLLMetry", "Helicone", "Modal"]}
    />
  ),
});
