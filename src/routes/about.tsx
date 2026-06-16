import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Metrics } from "@/components/site/Metrics";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Insights } from "@/components/site/Insights";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

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

interface OfficeAddress {
  city: string;
  name?: string;
  addressLines: string[];
  email?: string;
  phone?: string;
}

const globalOffices: OfficeAddress[] = [
  {
    city: "Tampa, US Office",
    addressLines: [
      "501 E Kennedy Blvd Suite 1400",
      "Tampa, FL 33602, United States"
    ],
    email: "connect@trustgrid.ai",
    phone: "+91 9513288612"
  },
  {
    city: "Singapore Office",
    addressLines: [
      "5 Temasek Boulevard, 17th Floor",
      "Singapore 038985"
    ],
    email: "connect@trustgrid.ai",
    phone: "+65 6050 5235"
  },
  {
    city: "Bengaluru, India HQ",
    name: "TRUSTGRID.AI INNOVATION PVT LTD",
    addressLines: [
      "Suite : 32 , 235, BINNAMANGALA,",
      "2nd Floor, 13th Cross Road,",
      "Indira Nagar 2nd Stage, Hoysala Nagar,",
      "Bengaluru – 560038 , India"
    ]
  },
  {
    city: "Mumbai Office",
    addressLines: [
      "WeWork, Raheja Platinum,",
      "Road, off Andheri - Kurla Road,",
      "Sag Baug, Marol, Andheri East,",
      "Mumbai, Maharashtra 400059"
    ],
    email: "cs@trustgrid.in",
    phone: "+91 9513088612"
  },
  {
    city: "Bangalore Office",
    addressLines: [
      "WeWork, 13th floor, Tin Factory,",
      "Salarpuria Magnificia, 78, Old Madras Rd,",
      "next to KR Puram, Mahadevapura,",
      "Bengaluru, Karnataka 560016"
    ],
    email: "cs@trustgrid.in",
    phone: "+91 9513088612"
  }
];

function AboutPage() {
  return (
    <>
      <div id="about-info">
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
                  <div className="flex items-center gap-3"><Globe className="h-4 w-4 text-accent" /> 5 delivery centers worldwide</div>
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

      {/* Global Offices Section */}
      <section className="py-24 border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Presence"
            title="Global Operations & Offices"
            description="Our engineering clusters and offices operate in key international hubs to serve global enterprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {globalOffices.map((office, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    {office.city}
                  </h3>
                  {office.name && (
                    <p className="text-xs font-semibold text-foreground/90 mb-2 font-mono leading-relaxed">
                      {office.name}
                    </p>
                  )}
                  <div className="space-y-1 text-sm text-muted-foreground leading-relaxed">
                    {office.addressLines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {(office.email || office.phone) && (
                  <div className="border-t border-border/40 mt-5 pt-4 space-y-1.5 text-xs">
                    {office.email && (
                      <p className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        <Mail className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                        {office.email}
                      </p>
                    )}
                    {office.phone && (
                      <p className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        <Phone className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                        {office.phone}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* General Contacts Card */}
            <div className="premium-card p-6 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-accent shrink-0" />
                  General Inquiries
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  For corporate partnerships, vendor relations, and global business enquiries.
                </p>
              </div>

              <div className="space-y-3.5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-1">Email Us</p>
                  <a href="mailto:connect@trustgrid.ai" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
                    connect@trustgrid.ai
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-1">Call Us</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">+91 9513288612 (IN)</p>
                    <p className="text-sm font-semibold text-foreground">+65 6050 5235 (SG)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
