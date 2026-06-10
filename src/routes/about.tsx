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
      
      {/* Premium headquarters visual */}
      <section className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] border border-border/60 shadow-2xl bg-surface/10">
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="TRUSTGRID.AI Global Operations Headquarters"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="eager"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-xl font-semibold text-foreground">Global Operations Headquarters</h3>
            <p className="text-sm text-muted-foreground mt-1">Connecting 5 global delivery centers and datacenters worldwide</p>
          </div>
        </div>
      </section>

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
