import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Trust Center | TrustGrid.AI" },
      { name: "description", content: "Review TrustGrid.AI's Zero-Trust AI cybersecurity measures, model safety guardrails, confidential computing VM protocols, and compliance standards." },
      { property: "og:title", content: "Security & Trust Center | TrustGrid.AI" },
      { property: "og:description", content: "Review TrustGrid.AI's Zero-Trust AI cybersecurity measures, model safety guardrails, confidential computing VM protocols, and compliance standards." },
      { property: "og:url", content: "/security" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Trust"
        title="Security & Trust Center"
        description="Last updated: June 19, 2026. Explore the architectural safeguards, continuous auditing, and model boundaries that protect our enterprise systems."
      />

      <div className="bg-background py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-card border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              1. Zero-Trust Hardware Isolation
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We engineer AI systems with absolute boundaries. Every customer deployment is logically and physically isolated at the hypervisor and virtualization level. We utilize hardware-enforced <strong className="text-foreground font-semibold">Confidential Computing</strong> (such as AMD SEV-SNP, Intel SGX, and NVIDIA H100 Confidential VMs) to ensure your model weights and fine-tuning adapters are encrypted in memory during runtime computation, protecting them from host-level interception.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              2. GridOS Prompt Injection & Toxicity Guardrails
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To defend LLM applications from security exploits, TrustGrid.AI deploys continuous, real-time input and output verification guardrails:
            </p>
            <ul className="space-y-3 list-disc pl-5 text-sm text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Adversarial Input Filtering:</strong> Algorithms analyze incoming queries, detecting and intercepting prompt injection exploits, system override requests, or token smuggling attempts before they hit the weights.
              </li>
              <li>
                <strong className="text-foreground">Confidentiality Protections:</strong> Outbound streams are dynamically scrubbed to prevent accidental leakage of PII, internal API structures, or database connection strings.
              </li>
              <li>
                <strong className="text-foreground">Safety Alignment checks:</strong> Responses are checked against customized enterprise safety taxonomies to block toxic or unaligned model assertions.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              3. Continuous Security Audits & Vulnerability Scans
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every system we deploy undergoes automated night-run checks, static application security testing (SAST), software composition analysis (SCA) for dependencies, and dynamic runtime container vulnerability scans. We collaborate with independent, CREST-accredited cybersecurity firms to perform quarterly penetration testing across all public API nodes and private orchestration controllers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              4. Industry Compliance Alignments
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Our infrastructure designs are built to conform to the highest regulatory audit baselines:
              </p>
              <ul className="space-y-2.5 list-disc pl-5">
                <li><strong className="text-foreground">SOC 2 Type II:</strong> Active verification controls governing data confidentiality, platform access, and incident logging procedures.</li>
                <li><strong className="text-foreground">HIPAA:</strong> Technical framework configurations (e.g. at-rest AES-256 and in-transit TLS 1.3 encryption) to secure health telemetry workloads.</li>
                <li><strong className="text-foreground">EU AI Act:</strong> Compliance toolkits enabling model lineage tracking, risk classification, and logging parameters for compliance reporting.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              5. Vulnerability Disclosure Program
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We value the contributions of the security research community. If you discover a vulnerability in our site, APIs, or custom platforms, please report it to us immediately by emailing <a href="mailto:security@trustgrid.ai" className="text-primary hover:underline font-medium">security@trustgrid.ai</a> or <a href="mailto:connect@trustgrid.ai" className="text-primary hover:underline font-medium">connect@trustgrid.ai</a>. All investigations are conducted under mutual confidentiality guidelines.
            </p>
          </section>

        </div>
      </div>

      <CTA />
    </>
  );
}
