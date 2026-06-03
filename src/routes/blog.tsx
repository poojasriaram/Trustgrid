import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — AI Engineering Thought Leadership | TrustGrid.AI" },
      { name: "description", content: "Research and insights on Agentic AI, GPU performance engineering, AI infrastructure, MLOps, LLMOps, AgentOps and enterprise AI security." },
      { property: "og:title", content: "TrustGrid.AI Insights" },
      { property: "og:description", content: "Thought leadership from the AI engineering frontier." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thought leadership from the AI engineering frontier"
        description="Long-form research, technical deep-dives and strategic perspectives for AI and technology leaders."
      />
      <Insights />
      <CTA />
    </>
  ),
});
