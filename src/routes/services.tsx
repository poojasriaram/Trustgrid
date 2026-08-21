import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { TechEcosystem } from "@/components/site/TechEcosystem";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Enterprise AI Engineering | TrustGrid.AI" },
      { name: "description", content: "Full-Spectrum AI Engineering services: AI infrastructure, GPU performance engineering, Agentic AI, multi-agent systems, long-memory AI, LLMOps, AgentOps and AI security." },
      { property: "og:title", content: "Enterprise AI Engineering Services" },
      { property: "og:description", content: "Eight integrated capability domains for Fortune 500 AI engineering." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (<><PageHero eyebrow="Services" title="Eight integrated capability domains" description="One engineering partner across every layer of the enterprise AI stack." /><Services /><TechEcosystem /><CTA /></>),
});
