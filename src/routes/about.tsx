import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Metrics } from "@/components/site/Metrics";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Insights } from "@/components/site/Insights";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Mail, Phone, Globe, MapPin, Target, Eye, Wrench, Activity, Users, Cpu, Shield, Zap, TrendingUp, Anchor, CheckCircle, Leaf, Lock, Server, Database, BarChart } from "lucide-react";

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
  { initials: "SK", name: "Shiva Kumar", role: "Senior Product Architect" },
  { initials: "N", name: "Natarajan", role: "Sr Blockchain Architect" },
  { initials: "R", name: "Ritin", role: "Senior AI Architect" },
  { initials: "V", name: "Viswanath", role: "Sr DevOps Engineer" },
  { initials: "SK", name: "Subashini Kaushik", role: "AI Engineer - LLM / RAG" },
  { initials: "SP", name: "Sonu Priyadharshini", role: "Chief Financial Officer ( CFO)" },
  { initials: "TBH", name: "To be hired", role: "HR Manager" },
  { initials: "NH", name: "Neha Hebber", role: "FinTech Platform Engineer (IIT Bombay)" },
  { initials: "SI", name: "Swathi Iyer", role: "IIT Madras - BTech" },
  { initials: "AL", name: "Aiswhwarya L Bhatt", role: "AI Performance Marketing & Strategy" },
  { initials: "CL", name: "Chintiya Liu", role: "Industry Consultant" },
  { initials: "KP", name: "Kallol Pal", role: "Technology Advisor" },
  { initials: "SS", name: "Soumya S", role: "Company Secretary & Advisor" },
  { initials: "AN", name: "Aswathi Nair", role: "Corporate Counsel" },
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
          title="A Full-Spectrum AI Engineering Company"
          description="TrustGrid.AI engineers production AI systems for the world's most demanding enterprises — from GPU clusters to autonomous agent fleets, across 20+ regulated industries."
        />

        {/* Mission & Vision */}
        <section className="relative mx-auto max-w-7xl px-6 py-24">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Mission Card */}
            <div className="group relative rounded-3xl border border-blue-500/20 bg-background/60 backdrop-blur-2xl p-8 lg:p-12 overflow-hidden shadow-[0_8px_40px_-12px_rgba(59,130,246,0.1)] hover:shadow-[0_16px_60px_-15px_rgba(59,130,246,0.2)] hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 transform">
                <Target className="w-48 h-48 text-blue-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Target className="h-8 w-8 text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Our Mission
                </h2>
                <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed font-semibold">
                  To engineer the resilient, hyper-optimized infrastructure that sustainably accelerates the AI revolution.
                </p>
                <div className="h-px w-12 bg-blue-500/40 my-6 transition-all duration-500 group-hover:w-24" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  We transform raw, power-hungry compute into trustworthy intelligence—empowering enterprises to scale AI without limits or compromise.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative rounded-3xl border border-violet-500/20 bg-background/60 backdrop-blur-2xl p-8 lg:p-12 overflow-hidden shadow-[0_8px_40px_-12px_rgba(139,92,246,0.1)] hover:shadow-[0_16px_60px_-15px_rgba(139,92,246,0.2)] hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 transform">
                <Eye className="w-48 h-48 text-violet-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/30 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Eye className="h-8 w-8 text-violet-500 drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Our Vision
                </h2>
                <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed font-semibold">
                  To be the invisible, unbreakable architectural backbone of the global AI economy.
                </p>
                <div className="h-px w-12 bg-violet-500/40 my-6 transition-all duration-500 group-hover:w-24" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  We envision a future where massive GPU superclusters and autonomous agents deliver absolute reliability, driving human progress while respecting planetary boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization */}
        <section className="border-t border-border/30 bg-surface/10 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-foreground font-display mb-4">
                Specialization
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We do not build AI models; we build the engines that make AI work at scale. TRUSTGRID.AI specializes in deep-tech professional services across five interconnected verticals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "GPU & Compute Optimization", icon: Cpu, desc: "Super-scaling global clusters, engineering ultra-low latency HPC network fabrics, and extracting maximum FLOPS/Watt from high-density silicon." },
                { title: "LLM & AI Agent Engineering", icon: Server, desc: "Architecting high-fidelity RAG pipelines, deploying efficient fine-tuning (PEFT/LoRA), and orchestrating reliable autonomous agents." },
                { title: "AI Infrastructure Engineering", icon: Database, desc: "Designing MLOps/LLMOps pipelines and solving the holy trinity of data center constraints: Energy, I/O, and Memory optimization." },
                { title: "AI Cybersecurity", icon: Shield, desc: "Hardening the AI lifecycle against novel threat vectors—from prompt injection and adversarial attacks to model IP protection and confidential computing." },
                { title: "Reliability Engineering", icon: Activity, desc: "Ensuring AI trust through continuous drift detection, chaos engineering, and rigorous red-teaming to guarantee enterprise-grade SLAs." },
              ].map((spec, i) => (
                <div key={i} className="premium-card p-6 flex flex-col gap-4 bg-background/50 hover:bg-background transition-colors group">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    <spec.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating at Global Scale */}
        <section className="py-24 border-t border-border/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
                Our Metrics Footprint
              </span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-foreground font-display mb-4">
                Operating at Global Scale
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TRUSTGRID.AI engineers solutions for the frontier of the AI build-out. Our advisory and implementation frameworks are designed to impact global infrastructure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Compute Scale", value: "100,000+", suffix: " GPUs", desc: "Architecting and tuning clusters exceeding 100K+ GPUs, navigating thermal limits of ExaFLOP-class supercomputers.", icon: Globe },
                { title: "Energy Impact", value: "15-30", suffix: "%", desc: "Reducing GPU power consumption by 15%–30% per cluster—saving tens of megawatts (MW) at the campus level.", icon: Zap },
                { title: "Performance", value: "40-60", suffix: "%", desc: "Shrinking LLM inference latency by 40%–60% and increasing training throughput by 2x–3x.", icon: TrendingUp },
                { title: "Economic Efficiency", value: "Millions", suffix: " Saved", desc: "Recovering stranded cloud spend by optimizing token generation, storage tiering, and GPU right-sizing.", icon: BarChart },
                { title: "Reliability", value: "99.999", suffix: "%", desc: "Engineering systems that achieve Five Nines availability for mission-critical AI, reducing failures to near-zero.", icon: CheckCircle },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/30 border border-border/40 relative overflow-hidden group">
                  <div className="h-12 w-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 text-accent/80 group-hover:text-accent transition-colors z-10">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl font-extrabold text-foreground font-display flex items-baseline justify-center gap-1 mb-1">
                      {stat.value}<span className="text-lg text-primary">{stat.suffix}</span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">{stat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Addition */}
        <section className="py-24 border-t border-border/30 bg-surface/5">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-4xl mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
                Accelerating AI for Society
              </span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-foreground font-display mb-4">
                The TRUSTGRID.AI Value Addition
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The bottleneck to humanity's next great leap forward is no longer algorithmic—it is physical. TRUSTGRID.AI serves as the critical catalyst between theoretical AI and real-world societal impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card p-8 flex flex-col gap-4 border-l-4 border-l-primary hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><TrendingUp className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold text-foreground">The Acceleration Multiplier</h3>
                </div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1">Value to AI Progress</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Without optimized infrastructure, AI progress stalls. By flattening network topologies, optimizing GPU memory, and streamlining I/O, we take the "friction" out of AI. We enable our clients to train foundational models in weeks instead of months, and deploy life-saving AI at true real-time speeds.
                </p>
              </div>

              <div className="premium-card p-8 flex flex-col gap-4 border-l-4 border-l-emerald-500 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500"><Leaf className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold text-foreground">The Sustainability Shield</h3>
                </div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1">Value to the Planet</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The AI boom is an energy crisis in disguise. Through carbon-aware workload routing, DVFS tuning, and liquid cooling transitions, we ensure the massive carbon footprint of AI is drastically curtailed. We help companies build green AI, protecting global power grids from collapse.
                </p>
              </div>

              <div className="premium-card p-8 flex flex-col gap-4 border-l-4 border-l-blue-500 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Anchor className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold text-foreground">The Trust Anchor</h3>
                </div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1">Value to Human Safety</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As AI is integrated into healthcare, finance, and critical infrastructure, "good enough" is dangerous. By hardening models against cyber attacks, eliminating hallucinations, and engineering relentless reliability, we ensure AI systems are safe, fair, and verifiable.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">The Net Societal Outcome</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  TRUSTGRID.AI ensures that the immense capital and energy being poured into AI actually translates into societal goods—faster drug discovery, affordable clean energy, and safe automation—rather than being lost to inefficiency, blackouts, or cyber-breaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-24 border-t border-border/30 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-foreground font-display mb-4">
                Radical Engineering Precision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                We are a collective of systems architects, hardware hackers, and AI strategists who thrive in the deeply technical trenches of the world's most complex data centers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-5 p-6 rounded-2xl bg-surface/40 border border-border/40 hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-surface border border-border/50 flex items-center justify-center shrink-0 text-foreground">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Systems-Level Thinking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We do not patch symptoms. Our engineers look at the entire stack—from the power grid and NVLink interconnects, through Kubernetes orchestration, up to the attention mechanisms of an LLM—to find the optimal leverage point.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-surface/40 border border-border/40 hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-surface border border-border/50 flex items-center justify-center shrink-0 text-foreground">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Relentless Optimization</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Good enough" is the enemy. We cultivate a culture where shaving 2 milliseconds of latency, saving 5 watts per GPU, or reducing a false positive by a fraction of a percent is celebrated as a monumental win.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-surface/40 border border-border/40 hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-surface border border-border/50 flex items-center justify-center shrink-0 text-foreground">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Truth over Trend</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While the market chases hype, we are anchored in physics, mathematics, and empirical data. We prioritize deterministic outcomes over flashy demos.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-surface/40 border border-border/40 hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-surface border border-border/50 flex items-center justify-center shrink-0 text-foreground">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">High-Trust, High-Ownership</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We operate as an elite, embedded extension of our clients' engineering teams. We grant deep autonomy, expect total accountability, and foster an environment where raising a "red flag" on a flawed architecture is rewarded.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-surface/40 border border-border/40 hover:border-primary/30 transition-colors md:col-span-2">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Impact-Driven Focus</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every line of code we write and every cooling loop we balance is viewed through the lens of global impact. We are not just building tech; we are building the sustainable foundation for the next century of human progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Talent / Leadership & Teams Section */}
        <section id="teams" className="border-t border-border/30 bg-surface/5 py-24 scroll-mt-20">
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

      {/* Strategic Partners Section */}
      <section className="py-20 border-t border-border/30 bg-surface/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
              Our Ecosystem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display">
              Strategic Partners
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 opacity-80">
            {/* NVIDIA */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" alt="NVIDIA Logo" className="h-5 md:h-7 object-contain" />
            </div>
            {/* AMD */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" alt="AMD Logo" className="h-5 md:h-7 object-contain" />
            </div>
            {/* INTEL */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg" alt="Intel Logo" className="h-6 md:h-8 object-contain" />
            </div>
            {/* IBM */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="h-5 md:h-7 object-contain" />
            </div>
            {/* CISCO */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" alt="Cisco Logo" className="h-5 md:h-7 object-contain" />
            </div>
            {/* NETAPP */}
            <div className="flex justify-center items-center h-10 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/NetApp_logo.svg" alt="NetApp Logo" className="h-8 md:h-10 object-contain" />
            </div>
          </div>
        </div>
      </section>

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
      <section id="presence" className="py-24 border-t border-border/40 bg-background scroll-mt-20">
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
