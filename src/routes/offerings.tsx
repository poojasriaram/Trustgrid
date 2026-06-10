import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";

// Import sections from the separate service routes
import { GpuPerformanceEngineeringSection } from "./gpu-performance-engineering";
import { AiInfrastructureEngineeringSection } from "./ai-infrastructure-engineering";
import { PlatformSection } from "./platform";
import { AgenticAiDevelopmentSection } from "./agentic-ai-development";
import { MultiAgentSystemsSection } from "./multi-agent-systems";
import { LongMemoryAiSystemsSection } from "./long-memory-ai-systems";
import { AgentOpsServicesSection } from "./agentops-services";
import { LlmOpsSection } from "./llmops-services";
import { AiSecuritySection } from "./ai-security";

export const Route = createFileRoute("/offerings")({
  head: () => ({
    meta: [
      { title: "AI Engineering & Infrastructure Offerings | TrustGrid.AI" },
      {
        name: "description",
        content:
          "Explore TrustGrid.AI's full service portfolio: GPU Performance Engineering, AI Infrastructure, GPU-phi Platform, Agentic AI, Multi-Agent Systems, Long-Memory AI, AgentOps, LLMOps, and AI Security.",
      },
      { property: "og:title", content: "AI Engineering Offerings | TrustGrid.AI" },
      {
        property: "og:description",
        content: "Full-stack enterprise AI engineering and optimization services.",
      },
      { property: "og:url", content: "/offerings" },
    ],
    links: [{ rel: "canonical", href: "/offerings" }],
  }),
  component: OfferingsPage,
});

function OfferingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Service Portfolio"
        title={
          <>
            Full-Stack AI Engineering & <br />
            Infrastructure <span className="text-accent">Offerings</span>
          </>
        }
        description="A comprehensive, production-grade service portfolio designed to optimize cloud GPU architectures, scale domain-specific models, operate autonomous agent grids, and protect host infrastructure."
      />

      {/* Offering 1: GPU Performance Engineering */}
      <section id="gpu-performance-engineering" className="py-24 border-b border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 1"
            title="GPU Performance Engineering"
            description="From infrastructure assessment to custom CUDA kernel engineering — we squeeze every FLOP out of your hardware."
          />
        </div>
        <GpuPerformanceEngineeringSection />
      </section>

      {/* Offering 2: AI Infrastructure Engineering */}
      <section id="ai-infrastructure-engineering" className="py-24 border-b border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 2"
            title="AI Infrastructure Engineering"
            description="From bare-metal GPU clusters to multi-region inference fleets, we design and operate the infrastructure that powers enterprise AI."
          />
        </div>
        <AiInfrastructureEngineeringSection excludeHeroAndCta />
      </section>

      {/* Offering 3: GPU-phi Cloud Platform */}
      <section id="platform" className="py-24 border-b border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 3"
            title="GPU-phi Cloud Platform"
            description="Discover the intelligence behind our cloud-neutral orchestration, FinOps budgeting, and self-healing resilience."
          />
        </div>
        <PlatformSection />
      </section>

      {/* Offering 4: Agentic AI Development */}
      <section id="agentic-ai-development" className="py-24 border-b border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 4"
            title="Agentic AI Development"
            description="From single-agent copilots to orchestrated multi-agent fleets, we build production-grade agentic systems under robust policy guardrails."
          />
        </div>
        <AgenticAiDevelopmentSection excludeHeroAndCta />
      </section>

      {/* Offering 5: Multi-Agent Systems */}
      <section id="multi-agent-systems" className="py-24 border-b border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 5"
            title="Multi-Agent Systems"
            description="Coordinate fleets of specialized AI agents to deliver complex enterprise outcomes with planning, debate, and consensus."
          />
        </div>
        <MultiAgentSystemsSection excludeHeroAndCta />
      </section>

      {/* Offering 6: Long-Memory AI Systems */}
      <section id="long-memory-ai-systems" className="py-24 border-b border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 6"
            title="Long-Memory AI Systems"
            description="Hybrid memory architectures combining vector embeddings and knowledge graphs so your AI remembers and compounds value over time."
          />
        </div>
        <LongMemoryAiSystemsSection excludeHeroAndCta />
      </section>

      {/* Offering 7: AgentOps Services */}
      <section id="agentops-services" className="py-24 border-b border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 7"
            title="AgentOps Services"
            description="Industrial operations for autonomous agent fleets, trace observability, continuous evaluation, and cost governance."
          />
        </div>
        <AgentOpsServicesSection excludeHeroAndCta />
      </section>

      {/* Offering 8: LLMOps & LLM Engineering */}
      <section id="llmops-services" className="py-24 border-b border-border/40 bg-surface/5 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 8"
            title="LLMOps & LLM Engineering"
            description="Operate LLMs in production at enterprise scale, including custom fine-tuning, RAG pipelines, and model-variant routing."
          />
        </div>
        <LlmOpsSection />
      </section>

      {/* Offering 9: AI Security & Cyber Dom */}
      <section id="ai-security" className="py-24 border-b border-border/40 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <SectionHeading
            eyebrow="Offering 9"
            title="AI Security & Cyber Dom"
            description="Secure every layer of your AI stack, from governance and adversarial red teaming to zero-trust architecture."
          />
        </div>
        <AiSecuritySection />
      </section>

      {/* Implementation Approach */}
      <section className="py-24 bg-surface/20 border-b border-border/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient mb-4">
            Implementation Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our offerings can be engaged modularly or as integrated, full-stack programs. We tailor solutions precisely to your scale, security constraints, and operational workloads.
            Contact us for a complimentary assessment and customized roadmap.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
