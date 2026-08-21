import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TrustGrid.AI" },
      { name: "description", content: "Learn how TrustGrid.AI processes, protects, and governs enterprise model weights, prompt telemetry, and operational metadata." },
      { property: "og:title", content: "Privacy Policy | TrustGrid.AI" },
      { property: "og:description", content: "Learn how TrustGrid.AI processes, protects, and governs enterprise model weights, prompt telemetry, and operational metadata." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Compliance"
        title="Privacy Policy"
        description="Last updated: June 19, 2026. Review how TrustGrid.AI handles, protects, and governs client model weights, prompt telemetry, and operational metadata."
      />

      <div className="bg-background py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-card border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              1. Zero-Trust Privacy Commitment
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At TrustGrid.AI, we serve Fortune 500 organizations, government entities, and high-performance labs operating under strict Non-Disclosure Agreements (NDAs). Our privacy framework is built on a Zero-Trust architecture: we assume all networks are hostile, and we enforce strict cryptographic boundary isolation for all user data, prompt streams, and model parameters.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              2. Data Processing Domains
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We classify the data processed on our website, products, and cloud platforms into three distinct domains:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-foreground">Model Inputs & Outputs (Prompts & Tokens):</strong> All textual queries, files, and generated response tokens processed by our interactive chatbot or customized enterprise models are handled locally in client-isolated virtual private clouds (VPCs) or secure hardware enclaves. We <em className="text-foreground">never</em> persist prompt history on shared systems or use client data to train public foundation models.
                </li>
                <li>
                  <strong className="text-foreground">GPU-phi Telemetry:</strong> For clients utilizing our GPU-phi platform, we collect operational telemetry metrics (e.g., GPU temperature, CUDA core utilization, kernel execution latency, and scheduling queues). This telemetry contains purely hardware-level diagnostics and excludes all business logic, text, or Personally Identifiable Information (PII).
                </li>
                <li>
                  <strong className="text-foreground">Operational Visitor Data:</strong> We collect basic technical logs (IP addresses, browser configurations, session identifiers) to optimize page-load performance and prevent malicious network events.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              3. Regulatory Compliance & Industry Standards
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TrustGrid.AI aligns with international security and compliance frameworks, including <strong className="text-foreground font-semibold">GDPR</strong> (General Data Protection Regulation), <strong className="text-foreground font-semibold">CCPA</strong> (California Consumer Privacy Act), and <strong className="text-foreground font-semibold">HIPAA</strong> (Health Insurance Portability and Accountability Act). For healthcare workloads, we sign formal Business Associate Agreements (BAAs) to secure Protected Health Information (PHI) within hardware-isolated compute VMs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              4. Data Sharing & Third-Party Disclosure
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell, rent, or trade customer data or visitor activity profiles. Technical details are shared only with subcontractors or cloud infrastructure partners (e.g., AWS, GCP, CoreWeave) explicitly contracted under NDAs to host our isolated GPU nodes, subject to the client's preferred hosting region and residency constraints.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              5. Data Retention & Erasure Guidelines
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data retention timelines are governed by individual Master Service Agreements (MSAs). Telemetry logs are automatically rolled over and purged after 90 days. Visitors can request the erasure of any website communication records by contacting our data protection representative directly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              6. Enterprise Contact & Audits
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For privacy-related inquiries, data access requests, or to arrange a compliance audit of our host infrastructure, please contact our Data Protection Officer (DPO) at <a href="mailto:connect@trustgrid.ai" className="text-primary hover:underline font-medium">connect@trustgrid.ai</a>.
            </p>
          </section>

        </div>
      </div>

      <CTA />
    </>
  );
}
