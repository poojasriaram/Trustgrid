import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, OfferingDetail } from "@/components/site/ServiceDetail";

const detailedOfferings: OfferingDetail[] = [
  {
    title: "1. Agent Observability, Tracing & Live Evaluation Harness",
    subtitle: "Step-level tracing, loop validation, and execution cost analytics",
    description: "Deploying production-grade monitoring systems (using OpenTelemetry, LangSmith, or custom agents telemetry pipelines) to trace every tool call, reasoning step, and database transaction. We build real-time evaluation frameworks that benchmark agent decisions against business KPIs.",
    keySituations: [
      "Multi-turn agents spinning in infinite loops, draining token budgets without achieving tasks.",
      "Difficult debugging for agent failures since execution steps are black-box API runs.",
      "Unquantified agent drift or regression on new model updates."
    ],
    keyStatistics: [
      "Evaluation latency overhead: < 15ms per agent transition",
      "Mean Time to Resolve (MTTR): Reduced by 82% with structured tracebooks",
      "Runaway loop detection accuracy: 99.8% prompt safety enforcement",
      "KPI scoring speed: Real-time telemetry sync"
    ],
    offeringValue: "Gives engineers the visibility needed to debug, trace, and audit complex agent behaviors in production.",
    expectedOutcomes: [
      "Trace dashboards tracing prompt tokens, latency, cost, and tool validation errors.",
      "Continuous regression benchmarking suites gating agent version updates.",
      "Slack / PagerDuty webhook alert triggers flagging loop anomalies or failed tool executions."
    ]
  },
  {
    title: "2. Agent Fleet Governance, Security & Lifecycle Operations",
    subtitle: "Isolated runtime environments, least-privilege tool access, and dynamic routing",
    description: "Engineering zero-trust runtime environments (e.g. gVisor, WebAssembly) for agent code execution, configuring OAuth2 tool gates, and deploying semantic routers that dispatch queries to optimal model sizes based on task complexity.",
    keySituations: [
      "Agents running unverified Python code or API writes that threaten backend databases.",
      "Uncontrolled token spend due to agents calling expensive models for simple tasks.",
      "Lack of structured rollback capabilities when deploying updated agent roles."
    ],
    keyStatistics: [
      "Unauthorized write containment: 100% via sandbox gating",
      "Average cost per resolution: Reduced by 80% via step-level model routing",
      "Lifecycle rollout downtime: Zero-downtime canary deployments",
      "Token consumption efficiency: Improved by 40% using prefix-cache shares"
    ],
    offeringValue: "Hardens autonomous agent operations to meet enterprise compliance, budget, and security mandates.",
    expectedOutcomes: [
      "Hardened sandboxed environments where agents execute tools.",
      "Unified agent registry allowing hot-swapping or rolling back agent configurations.",
      "Least-privilege permission schemas mapped to each active agent identity."
    ]
  }
];

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
      outcomes={[
        { value: "< 20m", label: "Incident Containment" },
        { value: "99.8%", label: "Loop Detection Rate" },
        { value: "80%", label: "Cost Per Resolution Cut" },
        { value: "0", label: "Sandbox Escapes" },
      ]}
      capabilities={[
        { title: "Agent Orchestration", desc: "Workflow engines, retries, compensations and timeouts." },
        { title: "Trace Observability", desc: "End-to-end traces across tools, models and sub-agents." },
        { title: "Continuous Evaluation", desc: "Live scoring of agent decisions against business KPIs." },
        { title: "Cost Governance", desc: "Per-agent, per-tenant cost attribution and budget enforcement." },
        { title: "Safety & Policy", desc: "Action gating, sandbox enforcement, kill switches." },
        { title: "Lifecycle Management", desc: "Versioning, canary rollouts and rollback for agent fleets." },
      ]}
      stack={["Temporal", "LangSmith", "AgentOps.ai", "Datadog", "OpenTelemetry", "Kafka"]}
      detailedOfferings={detailedOfferings}
    />
  ),
});
