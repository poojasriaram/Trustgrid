import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Metrics } from "@/components/site/Metrics";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TrustGrid.AI — Full-Spectrum AI Engineering Company" },
      { name: "description", content: "TrustGrid.AI is a Full-Spectrum AI Engineering Company serving Fortune 500 organizations and governments across 20+ industries." },
      { property: "og:title", content: "About TrustGrid.AI" },
      { property: "og:description", content: "A Full-Spectrum AI Engineering Company serving the world's most demanding enterprises." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A Full-Spectrum AI Engineering Company"
        description="TrustGrid.AI engineers production AI systems for the world's most demanding enterprises — from GPU clusters to autonomous agent fleets, across 20+ regulated industries."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 prose-invert">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gradient">Our mandate</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We exist to transform AI infrastructure from a cost center into a strategic competitive advantage.
              Where most vendors deliver chatbots and pilots, TrustGrid.AI engineers the full stack — from CUDA
              kernels to autonomous enterprise workflows.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gradient">How we operate</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Principal engineers lead every engagement. Five global delivery centers provide follow-the-sun
              coverage. Every system we ship is production-graded, security-reviewed and built for audit.
            </p>
          </div>
        </div>
      </section>
      <Metrics />
      <CTA />
    </>
  );
}
