import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, OfferingDetail } from "@/components/site/ServiceDetail";

const detailedOfferings: OfferingDetail[] = [
  {
    title: "1. Production-Grade LLM Fine-Tuning & Quantization",
    subtitle: "Domain-specific adaptation and compression",
    description: "Custom training pipelines for fine-tuning open weights models (Llama-3, Qwen, Mistral) using parameter-efficient methods (LoRA, QLoRA) and preference alignment (DPO, RLHF), coupled with post-training quantization (FP8, INT4) for high-throughput execution.",
    keySituations: [
      "Generic models failing to grasp proprietary terminologies, business rules, or tone of voice.",
      "High inference latency and API costs scaling linearly with volume, hurting gross margins.",
      "Strict data residency rules preventing the transfer of raw data to third-party model APIs."
    ],
    keyStatistics: [
      "Inference cost-per-token: Reduced by 50-80% compared to frontier APIs",
      "Throughput boost: 4-8x faster token generation via vLLM/TRT-LLM optimization",
      "Accuracy retention: 99%+ performance match to FP16 baselines under FP8 quantization",
      "Training cycle speed: 3x faster using optimized 3D parallelism"
    ],
    offeringValue: "Own your models and run them at a fraction of third-party API costs with tailored enterprise capability.",
    expectedOutcomes: [
      "Proprietary, domain-adapted model weights optimized for your specific tasks.",
      "High-throughput inference stack configured for instant scaling.",
      "Quantized models running efficiently on cost-effective hardware (e.g. single-GPU nodes)."
    ]
  },
  {
    title: "2. Enterprise LLM Evaluation & Guardrails Gateway",
    subtitle: "Reliable, secure, and compliant model deployment",
    description: "Deployment of comprehensive prompt-eval harnesses and real-time proxy gateways that filter inputs/outputs for prompt injection, PII leakages, model hallucinations, and corporate policy compliance.",
    keySituations: [
      "Security teams blocking LLM features due to potential data leaks or prompt injection concerns.",
      "Lack of objective metrics to measure regression when prompts or model versions change.",
      "Unpredictable or offensive output risk in user-facing customer support applications."
    ],
    keyStatistics: [
      "Prompt injection mitigation: 99.8% capture rate at the gateway",
      "Gateway latency overhead: Under 15ms addition to token latency",
      "PII leakage probability: Reduced to 0% through context-aware filtering",
      "Regression detection: Automated verification of 100+ business rules per release"
    ],
    offeringValue: "Enables safe, confident deployment of generative AI features under a Zero Trust security framework.",
    expectedOutcomes: [
      "Continuous testing pipelines matching model upgrades to performance criteria.",
      "Real-time guardrail gateway blocking malicious prompts and monitoring usage.",
      "Audit logs of model compliance, hallucination rates, and security health."
    ]
  }
];

export const Route = createFileRoute("/llmops-services")({
  head: () => ({
    meta: [
      { title: "LLMOps & LLM Engineering — Production LLM Operations | TrustGrid.AI" },
      { name: "description", content: "End-to-end LLMOps: domain adaptation, prompt management, evaluation, fine-tuning, quantization, inference operations, and guardrails for enterprise LLM deployments." },
      { property: "og:title", content: "LLMOps & LLM Engineering | TrustGrid.AI" },
      { property: "og:description", content: "Operate LLMs in production at Fortune 500 scale. Custom fine-tuning and secure gateway integration." },
      { property: "og:url", content: "/llmops-services" },
    ],
    links: [{ rel: "canonical", href: "/llmops-services" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="LLMOps & LLM Engineering"
      title="Operate LLMs in production at enterprise scale"
      description="Industrial-grade LLMOps and LLM engineering practices for domain adaptation, prompt engineering, evaluation, fine-tuning, inference scaling, and observability."
      outcomes={[
        { value: "50-80%", label: "Token cost savings" },
        { value: "4-8x", label: "Throughput gains" },
        { value: "99.8%", label: "Security capture" },
        { value: "<15ms", label: "Gateway latency" },
      ]}
      capabilities={[
        { title: "Prompt Management", desc: "Versioning, A/B testing and rollback for prompts at scale." },
        { title: "Evaluation", desc: "Offline + online evals, regression suites, golden datasets." },
        { title: "Fine-Tuning", desc: "LoRA, QLoRA, DPO and full fine-tuning workflows." },
        { title: "Inference Operations", desc: "Autoscaling, caching, routing and cost optimization." },
        { title: "Observability", desc: "Token-level tracing, drift detection and quality monitoring." },
        { title: "Guardrails & Gateways", desc: "Input/output filtering, PII redaction and policy enforcement." },
      ]}
      stack={["vLLM", "TGI", "LangSmith", "Arize", "OpenLLMetry", "Helicone", "Modal"]}
      detailedOfferings={detailedOfferings}
    />
  ),
});
