import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright & Trademarks | TrustGrid.AI" },
      { name: "description", content: "Review TrustGrid.AI's trademark guidelines, copyright ownership rules, third-party attribution policies, and DMCA procedures." },
      { property: "og:title", content: "Copyright & Trademarks | TrustGrid.AI" },
      { property: "og:description", content: "Review TrustGrid.AI's trademark guidelines, copyright ownership rules, third-party attribution policies, and DMCA procedures." },
      { property: "og:url", content: "/copyright" },
    ],
    links: [{ rel: "canonical", href: "/copyright" }],
  }),
  component: CopyrightPage,
});

function CopyrightPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Compliance"
        title="Copyright & Trademarks"
        description="Last updated: June 19, 2026. Review our intellectual property guidelines, copyright declarations, and DMCA notice procedures."
      />

      <div className="bg-background py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              1. Copyright Ownership
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All content displayed on this website, including but not limited to textual content, source code templates, page layouts, interactive scripts, animated canvas backdrop designs, graphics, and brand logotypes, is the exclusive intellectual property of <strong className="text-foreground font-semibold">TrustGrid.AI</strong>. All rights are reserved. Any unauthorized reproduction, redistribution, or mirroring of these materials is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              2. Trademarks
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">TrustGrid.AI</strong>, <strong className="text-foreground">GPU-phi</strong>, <strong className="text-foreground">GridOS</strong>, and the stylized neural network grid logotype are registered or pending trademarks of TrustGrid.AI.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our trademarks may not be used in connection with any third-party product or service in a manner that is likely to cause confusion among clients, or in any manner that discredits or disparages TrustGrid.AI. Authorized partner use of our trademarks requires written consent from our communications team.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              3. Third-Party Library Attribution
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This website incorporates various open-source libraries (including React, Tailwind CSS, TanStack Router, Lucide Icons, and Framer Motion) which are the properties of their respective copyright holders. All such third-party dependencies are compiled and utilized in accordance with their respective MIT or Apache licenses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              4. DMCA Copyright Infringement Claims
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you believe that any material hosted on our site infringes upon your copyright, you may submit a formal notification under the Digital Millennium Copyright Act (DMCA) to our designated agent:
            </p>
            <div className="bg-surface/30 border border-border/40 rounded-xl p-5 text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p><strong className="text-foreground">Designated Agent:</strong> TrustGrid.AI Intellectual Property Officer</p>
              <p><strong className="text-foreground">Email:</strong> <a href="mailto:connect@trustgrid.ai" className="text-primary hover:underline font-medium">connect@trustgrid.ai</a></p>
              <p><strong className="text-foreground">Mailing Address:</strong> 400 N Ashley Dr, Suite 1900, Tampa, FL 33602, USA</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To be processed, your notice must include a physical or electronic signature, identification of the infringed work, details of the infringing URL, your contact details, and a statement made under penalty of perjury that the claimant is authorized to act on behalf of the owner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              5. User Generated Weights & Output copyright
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All outputs, model weights, custom fine-tuning parameters, and network weights configured by our clients during their operational engagements with TrustGrid.AI belong exclusively to those clients. TrustGrid.AI claims no copyright or proprietary interest in client model iterations or custom data products.
            </p>
          </section>

        </div>
      </div>

      <CTA />
    </>
  );
}
