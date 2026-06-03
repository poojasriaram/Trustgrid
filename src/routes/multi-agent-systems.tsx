import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/multi-agent-systems")({
  head: () => ({
    meta: [
      { title: "Multi-Agent Systems — Orchestrated AI Fleets | TrustGrid.AI" },
      { name: "description", content: "Coordinate fleets of specialized AI agents to deliver complex enterprise outcomes. Routing, planning, debate and consensus at production scale." },
      { property: "og:title", content: "Multi-Agent Systems | TrustGrid.AI" },
      { property: "og:description", content: "Orchestrated agent fleets for autonomous enterprise operations." },
      { property: "og:url", content: "/multi-agent-systems" },
    ],
    links: [{ rel: "canonical", href: "/multi-agent-systems" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Multi-Agent Orchestration"
      title="Orchestrating fleets of specialized AI agents"
      description="Multi-agent architectures that decompose complex business operations into specialist roles, coordinated through robust routing, planning and consensus protocols."
      capabilities={[
        { title: "Hierarchical Orchestration", desc: "Supervisor agents delegate to specialist worker agents." },
        { title: "Debate & Consensus", desc: "Multi-agent deliberation for high-stakes decisions." },
        { title: "Dynamic Routing", desc: "Skill-based and load-aware agent task routing." },
        { title: "Shared State", desc: "Conflict-free shared memory across concurrent agents." },
        { title: "Agent Marketplaces", desc: "Internal registries of approved enterprise agents." },
        { title: "Evaluation Harness", desc: "Continuous evaluation of multi-agent workflows." },
      ]}
      stack={["LangGraph", "CrewAI", "AutoGen", "Ray", "Redis", "Kafka", "Temporal"]}
    />
  ),
});
