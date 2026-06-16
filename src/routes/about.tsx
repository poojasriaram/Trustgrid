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

interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { initials: "BV", name: "Balaji Venkatraman", role: "Director Growth" },
  { initials: "LS", name: "Lavanya Seshadri", role: "Engineering Head" },
  { initials: "VK", name: "Vignesh KS", role: "Product Lead" },
  { initials: "DK", name: "Dinesh Kumar", role: "Lead AI Engineer" },
  { initials: "H", name: "Hemalata", role: "AI Engineer & Tech Lead" },
  { initials: "PL", name: "Prithivin L", role: "Project Lead - EscrowChain" },
  { initials: "NU", name: "Nirmal Ullas", role: "Project Leader - Full Stack AI/ML" },
  { initials: "SK", name: "Shiva Kumar", role: "Senior Product Architect" },
  { initials: "N", name: "Natarajan", role: "Sr Blockchain Architect" },
  { initials: "R", name: "Ritin", role: "Senior AI Architect" },
  { initials: "V", name: "Viswanath", role: "Sr DevOps Engineer" },
  { initials: "SK", name: "Subashini Kaushik", role: "AI Engineer - LLM / RAG" },
  { initials: "SB", name: "Shwatha B", role: "Full Stack AI Engineer" },
  { initials: "SY", name: "Sharyas Yagna", role: "AI Engineer" },
  { initials: "PK", name: "Pranav Kapoor", role: "AI Engineer" },
  { initials: "SP", name: "Sonu Priyadarshini", role: "RPA Engineer" },
  { initials: "NH", name: "Neha Hebber", role: "FinTech Platform Engineer (IIT Bombay)" },
  { initials: "SI", name: "Swathi Iyer", role: "IIT Madras - BTech" },
  { initials: "AL", name: "Aiswhwarya L Bhatt", role: "AI Performance Marketing & Strategy" },
  { initials: "CL", name: "Chintiya Liu", role: "Industry Consultant" },
  { initials: "KP", name: "Kallol Pal", role: "Technology Advisor" },
  { initials: "SS", name: "Soumya S", role: "Company Secretary & Advisor" },
  { initials: "A", name: "Annapoorani", role: "Automation Engineering (Intern)" },
  { initials: "P", name: "Poojasri", role: "AI Engineering (Intern)" },
  { initials: "HK", name: "HariKrishnan K", role: "AI Engineering (Intern)" },
  { initials: "PK", name: "Praveen Kumar R", role: "AI Engineering (Intern)" },
  { initials: "SS", name: "Santhosh S", role: "AI Engineering (Intern)" },
];

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

      {/* World-Class Talent / Leadership & Teams Section */}
      <section className="border-t border-border/30 bg-surface/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
              World-Class Talent
            </span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-foreground font-display mb-4">
              Leadership & Teams
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A powerhouse of AI architects, blockchain experts, and industry consultants building the future of autonomous revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="premium-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border/50 group-hover:border-primary/30 text-accent font-display text-sm font-bold transition-all duration-300">
                  {member.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300 truncate">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-medium truncate">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Metrics />
      <CTA />
    </>
  );
}
