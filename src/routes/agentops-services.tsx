import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/agentops-services")({
  head: () => ({
    meta: [
      { title: "AgentOps Services — Operate Autonomous Agents | TrustGrid.AI" },
      { name: "description", content: "AgentOps for production agent fleets: orchestration, observability, evaluation, cost control and governance for autonomous AI systems." },
      { property: "og:title", content: "AgentOps Services | TrustGrid.AI" },
      { property: "og:description", content: "Industrial operations for autonomous agent fleets." },
      { property: "og:url", content: "/agentops-services" },
    ],
    links: [{ rel: "canonical", href: "/agentops-services" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AgentOps"
      title="Industrial operations for autonomous agent fleets"
      description="The operating discipline for production agentic AI — orchestration, evaluation, observability, cost governance and lifecycle management."
      capabilities={[
        { title: "Agent Orchestration", desc: "Workflow engines, retries, compensations and timeouts." },
        { title: "Trace Observability", desc: "End-to-end traces across tools, models and sub-agents." },
        { title: "Continuous Evaluation", desc: "Live scoring of agent decisions against business KPIs." },
        { title: "Cost Governance", desc: "Per-agent, per-tenant cost attribution and budget enforcement." },
        { title: "Safety & Policy", desc: "Action gating, sandbox enforcement, kill switches." },
        { title: "Lifecycle Management", desc: "Versioning, canary rollouts and rollback for agent fleets." },
      ]}
      stack={["Temporal", "LangSmith", "AgentOps.ai", "Datadog", "OpenTelemetry", "Kafka"]}
    />
  ),
});
