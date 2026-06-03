import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CaseStudies } from "@/components/site/CaseStudies";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Enterprise AI Outcomes | TrustGrid.AI" },
      { name: "description", content: "Production AI systems engineered by TrustGrid.AI for Fortune 500 enterprises and governments. Measurable outcomes in GPU performance, agentic AI and AI infrastructure." },
      { property: "og:title", content: "Enterprise AI Case Studies" },
      { property: "og:description", content: "Measured outcomes from production AI engagements." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Production AI, measured in outcomes"
        description="A selection of recent enterprise engagements. All client identities anonymized per NDA."
      />
      <CaseStudies />
      <CTA />
    </>
  ),
});
