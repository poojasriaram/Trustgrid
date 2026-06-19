import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Zap } from "lucide-react";
import { SectionLink } from "@/components/site/Header";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

/* ─── Type Definitions ─────────────────────────────────────────── */

interface IndustryOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  roles: string[];
  solutions: string[];
  benefits: string[];
}

/* ─── Data Arrays ──────────────────────────────────────────────── */

const industryOfferings: IndustryOffering[] = [
  {
    id: "manufacturing-industrial",
    title: "1. Manufacturing & Industrial AI Solutions",
    tagline: "Intelligent Manufacturing Powered by AI",
    description: "Optimize production, maintenance, quality assurance, and supply chain operations using advanced AI infrastructure and autonomous agent systems.",
    roles: [
      "Automobiles",
      "Auto Components",
      "Engineering & Capital Goods",
      "Defence Manufacturing",
      "MSME"
    ],
    solutions: [
      "Automobiles Production AI",
      "Auto Components Analytics",
      "Engineering & Capital Goods Optimization",
      "Defence Manufacturing Systems",
      "MSME Scaling Tools"
    ],
    benefits: [
      "Reduced downtime & operations cost",
      "Improved production efficiency & equipment effectiveness",
      "Higher product quality and precision",
      "Lower overall maintenance overhead"
    ]
  },
  {
    id: "telecommunications-network",
    title: "2. Technology & Electronics AI Solutions",
    tagline: "Automation Systems & Semiconductor Design AI",
    description: "Accelerate technological operations, electronic hardware design, network traffic engineering, and EV fleet systems.",
    roles: [
      "IT & BPM",
      "Electronics & Semiconductor",
      "Telecommunications",
      "Science & Technology",
      "Electric Vehicles"
    ],
    solutions: [
      "IT & BPM Intelligent Automation",
      "Electronics & Semiconductor Accelerators",
      "Telecommunications Network Management",
      "Science & Technology Analytics",
      "Electric Vehicles Telemetry Models"
    ],
    benefits: [
      "Reduce hardware prototyping cycle times by 40%",
      "Automated customer support and ticketing agents",
      "High-capacity traffic intelligence models",
      "Real-time vehicle telemetry analytics"
    ]
  },
  {
    id: "infrastructure-construction",
    title: "3. Infrastructure & Construction AI Solutions",
    tagline: "Intelligent Construction and Project Orchestration",
    description: "Manage cement, steel, real estate, and public highway works with automated scheduling, safety metrics, and predictive material planning.",
    roles: [
      "Cement",
      "Steel",
      "Infrastructure",
      "Real Estate",
      "Highways"
    ],
    solutions: [
      "Cement Plant & Process Control",
      "Steel Facility Safety Computer Vision",
      "Infrastructure Asset Diagnostics",
      "Real Estate Analytics & Valuation",
      "Roads & Highways Flow Optimizers"
    ],
    benefits: [
      "Reduce safety incidents by up to 60%",
      "Predict project cost overruns beforehand",
      "Lower energy and raw materials waste",
      "Automated structural integrity records"
    ]
  },
  {
    id: "energy-utilities-sustainability",
    title: "4. Energy & Utilities AI Solutions",
    tagline: "Intelligent Infrastructure for the Energy Sector",
    description: "Deploy AI systems that optimize power generation, distribution, renewable forecasting, and sustainability initiatives.",
    roles: [
      "Oil & Gas",
      "Power",
      "Renewable Energy",
      "Ports",
      "Railways"
    ],
    solutions: [
      "Oil & Gas Refinery Agents",
      "Power Grid Distribution Diagnostics",
      "Renewable Energy Output Forecasting",
      "Ports & Cargo Flow Analytics",
      "Railways Transit Optimization"
    ],
    benefits: [
      "Improved grid reliability and output",
      "Lower carbon emissions tracking overhead",
      "Enhanced sustainability auditability",
      "Decreased port cargo processing delays"
    ]
  },
  {
    id: "banking-financial-services",
    title: "5. Financial Services AI Solutions",
    tagline: "Accelerate Financial Intelligence with Secure AI Infrastructure",
    description: "We help banks, insurance agencies, and investment firms deploy enterprise-grade AI platforms that improve risk assessment, fraud detection, and transaction processing.",
    roles: [
      "Banking",
      "Financial Services",
      "Insurance",
      "E-Commerce",
      "Gems & Jewellery"
    ],
    solutions: [
      "Banking Risk and Lending Assessment",
      "Financial Services Advisories",
      "Insurance Claim Processing Automation",
      "E-Commerce Transaction Security Mesh",
      "Gems & Jewellery Supply Blockchain AI"
    ],
    benefits: [
      "Reduce fraud losses by up to 70%",
      "Faster transaction and loan processing",
      "Enhanced GRC audit compliance",
      "Zero Trust customer support agents"
    ]
  },
  {
    id: "healthcare-life-sciences",
    title: "6. Healthcare & Life Sciences AI Solutions",
    tagline: "Transform Patient Care with Intelligent AI Systems",
    description: "Build secure, compliant, and scalable AI platforms for healthcare providers, pharmaceutical companies, research institutions, and diagnostic centers.",
    roles: [
      "Pharmaceuticals",
      "Healthcare",
      "Medical Devices",
      "Biotechnology",
      "Ayush"
    ],
    solutions: [
      "Pharmaceuticals & Drug Discovery AI",
      "Healthcare Clinical Data Intelligence",
      "Medical Devices Firmware Diagnostics",
      "Biotechnology Research Assistants",
      "Ayush Natural Medicine Models"
    ],
    benefits: [
      "Faster diagnosis and clinical lookups",
      "Improved patient outcome indicators",
      "Accelerated research lifecycle times",
      "HIPAA/HITECH ready security wrappers"
    ]
  },
  {
    id: "retail-e-commerce",
    title: "7. Consumer & Retail AI Solutions",
    tagline: "Personalized Consumer Experiences at Scale",
    description: "Empower retailers, FMCG operators, and durables brands with AI-driven customer engagement, recommendation engines, and inventory optimization.",
    roles: [
      "FMCG",
      "Retail",
      "Consumer Durables",
      "Textiles",
      "Food Processing"
    ],
    solutions: [
      "FMCG Demand Forecasting Models",
      "Retail Inventory Optimizers",
      "Consumer Durables Design Analytics",
      "Textiles Production Planning",
      "Food Processing Quality Scans"
    ],
    benefits: [
      "Increased sales conversion and margin",
      "Reduced dead stock by up to 30%",
      "Streamlined food product safety scans",
      "Accurate demand forecasting metrics"
    ]
  },
  {
    id: "education-learning-platforms",
    title: "8. Media & Services AI Solutions",
    tagline: "Intelligent Media Delivery and Training Ecosystems",
    description: "Optimize entertainment media, aviation routing, tourism operations, corporate training programs, and agricultural analytics.",
    roles: [
      "Media & Entertainment",
      "Tourism & Hospitality",
      "Aviation",
      "Education & Training",
      "Agriculture & Allied"
    ],
    solutions: [
      "Media & Entertainment Localization",
      "Tourism & Hospitality Guest Agents",
      "Aviation Crew Scheduling & Flight Plan AI",
      "Education & Training Platforms",
      "Agriculture & Allied Yield Models"
    ],
    benefits: [
      "50% faster media localization times",
      "Automated crew schedules with fewer delays",
      "Personalized employee training paths",
      "Smart farming crop yield forecasting"
    ]
  }
];

/* ─── Rendering Components ────────────────────────────────────── */

function DetailedIndustrySection({ data, index }: { data: IndustryOffering; index: number }) {
  return (
    <div id={data.id} className="py-24 border-b border-border/40 last:border-b-0 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header content with dynamic animations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent mb-4">
            Vertical 0{index + 1}
          </span>
          <h3 className="text-2xl md:text-3.5xl font-bold tracking-tight text-gradient mb-2 font-display">
            {data.title}
          </h3>
          <p className="text-accent font-semibold text-base md:text-lg mb-4 leading-snug">
            {data.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {data.roles.map((role) => (
              <span
                key={role}
                className="text-[10px] font-bold tracking-wide bg-accent/5 hover:bg-accent/10 border border-accent/20 text-accent px-2.5 py-1 rounded-full transition-all duration-200 cursor-default"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Dynamic side-by-side grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mt-10">
          
          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-border/40">
              <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-accent">
                <Target className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-foreground font-display">Tailored AI Solutions</h4>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {data.solutions.map((sol, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 p-3.5 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-sm transition-all duration-200 text-[13px] md:text-sm font-semibold leading-relaxed"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse-glow" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-surface/30 p-8 space-y-6"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-border/40">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-foreground font-display">Targeted Business Benefits</h4>
            </div>

            <ul className="space-y-4">
              {data.benefits.map((benefit, i) => {
                // Highlight percentages if present
                const matchPercent = benefit.match(/(\d+%)/);
                let renderedText = <span>{benefit}</span>;
                if (matchPercent) {
                  const percentStr = matchPercent[1];
                  const parts = benefit.split(percentStr);
                  renderedText = (
                    <span>
                      {parts[0]}
                      <span className="text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded text-[11px] md:text-xs">{percentStr}</span>
                      {parts[1]}
                    </span>
                  );
                }

                return (
                  <li key={i} className="flex gap-3 text-foreground font-medium text-[13px] md:text-sm leading-relaxed items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{renderedText}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

/* ─── Main Industries Page Component ───────────────────────────── */

function IndustriesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Sovereign & Secure <br />
            Enterprise AI by <span className="text-accent">Industry</span>
          </>
        }
        description="We build and deploy compliant, domain-specific AI platforms designed for maximum reliability and Zero-Trust data governance."
      />

      {/* Grouped sticky category navigation */}
      <div className="sticky top-14 z-30 bg-background/90 backdrop-blur-md border-b border-border/40 py-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 w-full sm:w-auto sm:mr-3">
              Industry Verticals:
            </span>
            {industryOfferings.map((cat) => (
              <SectionLink
                key={cat.id}
                href={`/industries#${cat.id}`}
                className="px-3.5 py-1.5 rounded-full border border-border/60 hover:border-primary/45 bg-surface/20 hover:bg-surface/50 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                {cat.title.replace(/^\d+\. /, "").replace(" AI Solutions", "").replace(" AI", "").replace(" Platforms", "")}
              </SectionLink>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background">
        
        {/* Industry-Specific AI Solutions */}
        <div>
          {industryOfferings.map((data, index) => (
            <DetailedIndustrySection key={data.id} data={data} index={index} />
          ))}
        </div>

      </div>

      <div className="py-24 bg-surface/20 border-b border-border/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
            Custom Industrial Adaptations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            All industry solutions are deployed on private, sovereign, or hybrid cloud infrastructure with strict network segmentation and human-in-the-loop gating for write operations.
            Contact our engineering specialists to design a model custom-aligned to your domain standards.
          </p>
        </div>
      </div>

      <CTA />
    </>
  );
}
