import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/ai-security")({
  head: () => ({
    meta: [
      { title: "AI Security & Governance — Zero Trust for AI | TrustGrid.AI" },
      { name: "description", content: "Secure AI deployments with Zero Trust Architecture, confidential computing, IAM, compliance, audit trails and continuous security monitoring." },
      { property: "og:title", content: "AI Security & Governance | TrustGrid.AI" },
      { property: "og:description", content: "Enterprise-grade security and governance for production AI." },
      { property: "og:url", content: "/ai-security" },
    ],
    links: [{ rel: "canonical", href: "/ai-security" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AI Security & Governance"
      title="Zero-Trust security for enterprise AI"
      description="We engineer AI systems that meet the security and governance bar of regulated industries — financial services, healthcare, defense and government."
      capabilities={[
        { title: "Confidential Computing", desc: "TEE-backed training and inference (NVIDIA H100 CC, Intel TDX)." },
        { title: "Identity & Access", desc: "Fine-grained IAM for models, tools, agents and data sources." },
        { title: "Compliance", desc: "SOC2, HIPAA, ISO 27001, FedRAMP, EU AI Act readiness." },
        { title: "Audit Trails", desc: "Immutable logs for every model call, agent action and data access." },
        { title: "Security Monitoring", desc: "Threat detection for prompt injection, exfiltration and model abuse." },
        { title: "Red-Teaming", desc: "Adversarial testing of LLM and agent attack surfaces." },
      ]}
      stack={["NVIDIA Confidential Computing", "HashiCorp Vault", "Okta", "Wiz", "Lakera", "Robust Intelligence"]}
    />
  ),
});
