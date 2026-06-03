import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/agentic-ai-development")({
  head: () => ({
    meta: [
      { title: "Agentic AI Development — Autonomous Systems | TrustGrid.AI" },
      { name: "description", content: "Build autonomous AI agents capable of planning, reasoning, learning and acting across enterprise workflows. Single-agent and multi-agent systems." },
      { property: "og:title", content: "Agentic AI Development | TrustGrid.AI" },
      { property: "og:description", content: "Autonomous AI agents engineered for enterprise scale." },
      { property: "og:url", content: "/agentic-ai-development" },
    ],
    links: [{ rel: "canonical", href: "/agentic-ai-development" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Agentic AI"
      title="Engineering autonomous AI agents for the enterprise"
      description="From single-agent copilots to multi-agent fleets, we build production-grade agentic systems that plan, reason, use tools and operate under human oversight."
      capabilities={[
        { title: "Single-Agent Systems", desc: "Goal-directed agents with planning, tool use and reflection loops." },
        { title: "Multi-Agent Systems", desc: "Specialist agent teams coordinated via routing, debate and consensus." },
        { title: "Agent Memory", desc: "Episodic, semantic and procedural memory across sessions and years." },
        { title: "Tool Integration", desc: "Function calling, API binding, MCP servers and secure execution sandboxes." },
        { title: "Agent Governance", desc: "Policy engines, action gating, evaluation harnesses and audit trails." },
        { title: "Human Oversight", desc: "Approval gates, interruptibility, observability dashboards." },
      ]}
      stack={["LangGraph", "CrewAI", "AutoGen", "OpenAI Agents SDK", "MCP", "LangSmith"]}
    />
  ),
});
