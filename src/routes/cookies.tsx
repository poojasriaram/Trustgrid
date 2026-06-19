import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | TrustGrid.AI" },
      { name: "description", content: "Read TrustGrid.AI's Cookie Policy regarding the minimal cookies and local storage tokens used on our platform." },
      { property: "og:title", content: "Cookie Policy | TrustGrid.AI" },
      { property: "og:description", content: "Read TrustGrid.AI's Cookie Policy regarding the minimal cookies and local storage tokens used on our platform." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Privacy"
        title="Cookie Policy"
        description="Last updated: June 19, 2026. Review how TrustGrid.AI uses cookies and local storage tokens to deliver our interactive web services."
      />

      <div className="bg-background py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-border/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              1. Cookie Governance Policy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TrustGrid.AI is a light-first, privacy-respecting enterprise platform. We believe in keeping data footprints minimal. We do not participate in behavioral ad-retargeting networks, pixel-tracking systems, or buy/sell consumer activity profiles. We use cookies and local storage tokens strictly for technical execution and telemetry optimization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              2. Types of Cookies & Local Storage Used
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We classify the storage tokens active on our domain into two functional categories:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-foreground">Essential Technical Cookies (Session & UI):</strong> These tokens are required for core site functions. They preserve your user preferences (e.g. exit intent popup suppression status) and allow the GridOS Architect Chatbot to maintain conversation state as you navigate between subpages.
                </li>
                <li>
                  <strong className="text-foreground">Performance & Telemetry Cookies:</strong> These tokens log basic page-load latency, click distributions, and interaction events. We analyze this data in aggregate to optimize layouts and debug server latency. These metrics contain no user credentials or business data.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              3. Consent and Telemetry Opt-Out
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By using our site, you consent to the placement of essential technical cookies. Opt-out controls are available for optional performance telemetry. Blocking essential cookies via your browser configurations may cause session fragmentation in the interactive chatbot window or loop the display of UI components.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight font-display border-b border-border/30 pb-3">
              4. Managing Preferences in Browsers
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can block, clear, or manage your cookie settings at any time within your browser settings. To do so, consult your browser's documentation (e.g. Chrome, Safari, Firefox, Edge).
            </p>
          </section>

        </div>
      </div>

      <CTA />
    </>
  );
}
