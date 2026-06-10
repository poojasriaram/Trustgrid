import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Metrics } from "@/components/site/Metrics";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Insights } from "@/components/site/Insights";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Mail, Phone, Globe2 } from "lucide-react";

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
      <div id="about-info">
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
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 border-t border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Production AI, measured in outcomes"
            description="A selection of recent enterprise engagements. All client identities anonymized per NDA."
          />
          <div className="mt-12">
            <CaseStudies />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 border-t border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Insights"
            title="Thought leadership from the AI engineering frontier"
            description="Long-form research, technical deep-dives and strategic perspectives for AI and technology leaders."
          />
          <div className="mt-12">
            <Insights />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact"
            title="Schedule an enterprise consultation"
            description="Speak with a TrustGrid.AI principal engineer about your AI roadmap. Most enterprise engagements begin with a tailored 48-hour capability assessment."
          />
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 mt-12">
            <ContactForm />
            <aside className="space-y-8">
              <div className="rounded-xl border border-border/60 bg-surface/30 p-6">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Global Coverage</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-accent" /> 5 delivery centers worldwide</div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> enterprise@trustgrid.ai</div>
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> 24/7 enterprise support</div>
                </div>
              </div>
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">For CTOs & CIOs</h3>
                <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                  Engagements led by principal engineers with experience deploying production AI at Fortune 500 scale.
                  All consultations are covered by a mutual NDA.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
