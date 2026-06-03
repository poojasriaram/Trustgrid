import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, Globe2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Enterprise Consultation — TrustGrid.AI" },
      { name: "description", content: "Schedule a strategy session with TrustGrid.AI principal engineers. Tailored capability assessment within 48 hours." },
      { property: "og:title", content: "Enterprise Consultation — TrustGrid.AI" },
      { property: "og:description", content: "Schedule a strategy session with TrustGrid.AI principal engineers." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule an enterprise consultation"
        description="Speak with a TrustGrid.AI principal engineer about your AI roadmap. Most enterprise engagements begin with a tailored 48-hour capability assessment."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1fr_400px] gap-12">
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
      </section>
    </>
  );
}
