import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { Challenges } from "@/components/site/Challenges";
import { Approach } from "@/components/site/Approach";
import { Services } from "@/components/site/Services";
import { ServicesExpanded } from "@/components/site/ServicesExpanded";
import { Landscape } from "@/components/site/Landscape";
import { Compare } from "@/components/site/Compare";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Industries } from "@/components/site/Industries";
import { TechEcosystem } from "@/components/site/TechEcosystem";
import { WhyTrustGrid } from "@/components/site/WhyTrustGrid";
import { EngagementJourney } from "@/components/site/EngagementJourney";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustGrid.AI — Engineering AI Systems That Scale From GPUs to Autonomous Enterprises" },
      {
        name: "description",
        content:
          "Full-Spectrum AI Engineering. TrustGrid.AI designs, builds, optimizes and secures enterprise AI infrastructure, Agentic AI systems and autonomous business operations.",
      },
      { property: "og:title", content: "TrustGrid.AI — Full-Spectrum AI Engineering" },
      {
        property: "og:description",
        content: "Engineering AI systems that scale from GPUs to autonomous enterprises.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Challenges />
      <Approach />
      <Services />
      <ServicesExpanded />
      <Landscape />
      <Compare />
      <CaseStudies />
      <Industries />
      <TechEcosystem />
      <WhyTrustGrid />
      <EngagementJourney />
      <Insights />
      <CTA />
    </>
  );
}
