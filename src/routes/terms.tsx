import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | TrustGrid.AI" },
      { name: "description", content: "Review the Terms of Service governing the procurement of TrustGrid.AI engineering services and the licensing of the GPU-phi cloud platform." },
      { property: "og:title", content: "Terms of Service | TrustGrid.AI" },
      { property: "og:description", content: "Review the Terms of Service governing the procurement of TrustGrid.AI engineering services and the licensing of the GPU-phi cloud platform." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Compliance"
        title="Terms of Service"
        description="Last updated: June 19, 2026. Standard terms governing website access, custom engineering consults, and our platform orchestration tools."
      />

      <div className="bg-background py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-card border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By accessing this website or utilizing our interactive systems (including chatbot models, code playgrounds, and capability portals), you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a corporation or governmental entity, you represent that you possess the formal authority to bind that entity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              2. Engineering Services & Capability Consultations
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All professional custom engineering consults, low-level GPU kernel tunings, and model deployments are executed under separate Statements of Work (SOWs) and Master Services Agreements (MSAs). Our initial 48-hour capability assessments are technical, engineer-to-engineer discussions protected by mutual Non-Disclosure Agreements (NDAs).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              3. GPU-phi Platform License
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Subject to these terms and payment of subscription fees, TrustGrid.AI grants a non-exclusive, non-transferable, revocable license to access our proprietary GPU-phi multi-cluster orchestration platform. This license is bounded by container partition limits, MIG scaling thresholds, and safety governance VM guidelines specified in your purchase order.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              4. Client Intellectual Property (IP)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-semibold text-foreground">
              We respect your code ownership. All customized model weights, fine-tuning adapters (LoRA/QLoRA), specialized RAG vector databases, and proprietary client source code compiled during our collaborations remain 100% the exclusive property of the client.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TrustGrid.AI retains ownership only of its pre-existing library utilities, core CUDA scheduling templates, GPU-phi base platform codes, and generic kernel compiler enhancements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              5. Acceptable Use Guidelines
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You agree not to utilize our infrastructure, platforms, or services to:
            </p>
            <ul className="space-y-2.5 list-disc pl-5 text-sm text-muted-foreground leading-relaxed">
              <li>Deploy workloads violating national security or international weapon non-proliferation guidelines.</li>
              <li>Bypass model safety guardrails or toxicity filters to generate harmful, illegal, or deceptive content.</li>
              <li>Execute malicious prompt-injection attacks targeting other tenants on our platform.</li>
              <li>Engage in cryptographic mining or illegal GPU node farming without direct authorization.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              6. Service Level Agreements (SLAs) & Liability
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While our self-healing software scheduler optimizes node recovery under 45 seconds, physical GPU uptime is bounded by the SLAs of the contracted hardware clouds (e.g. AWS, GCP, CoreWeave). TrustGrid.AI is not liable for indirect or consequential damages resulting from cloud provider node outages or global silicon supply chain latency.
            </p>
          </section>

        </div>
      </div>

      <CTA />
    </>
  );
}
