import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import {
  Shield,
  ShieldCheck,
  Eye,
  Target,
  CheckCircle2,
  ChevronRight,
  Lock,
  Radio,
  AlertTriangle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KpiRow {
  kpi: string;
  before: string;
  after: string;
}

interface ServiceComponent {
  id: string;
  title: string;
  bullets: string[];
}

interface ShieldOffering {
  id: string;
  number: string;
  title: string;
  nistFunction: string;
  nistColor: string;
  description: string;
  statementOfValue: string;
  before: string[];
  components: ServiceComponent[];
  kpis: KpiRow[];
  benefits: string[];
  timeline: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const offerings: ShieldOffering[] = [
  {
    id: "ai-grc",
    number: "01",
    title: "AI Governance, Risk & Compliance (AI-GRC) Platform",
    nistFunction: "GOVERN (GV)",
    nistColor: "text-violet-400 border-violet-400/30 bg-violet-400/10",
    description:
      "Enterprise-wide AI governance covering inventory, risk classification, policy management, and board-level risk reporting. Aligns with NIST CSF 2.0, NIST AI RMF, SOC 2, ISO/IEC 42001, and EU AI Act.",
    statementOfValue:
      "Establish the governance foundation that every AI deployment and compliance obligation depends upon.",
    before: [
      "No AI system inventory or risk classification",
      "Shadow AI proliferating across business units",
      "Board has zero visibility into AI risk",
      "Regulatory requirements undefined for AI systems",
    ],
    components: [
      {
        id: "discovery", title: "1.1 AI System Discovery & Inventory",
        bullets: ["Automated discovery of all AI systems, LLMs, agents, RAG pipelines, and model endpoints", "Shadow AI detection and AI-BOM generation", "Third-party AI vendor inventory and risk profiling"],
      },
      {
        id: "classification", title: "1.2 AI Risk Classification",
        bullets: ["Risk classification per EU AI Act (Unacceptable → Minimal risk tiers)", "NIST AI RMF Map-Measure-Manage alignment", "AI-specific threat modeling (STRIDE-AI, LINDDUN-AI)"],
      },
      {
        id: "governance", title: "1.3 AI Governance Framework",
        bullets: ["AI governance policy suite (acceptable use, data handling, model lifecycle)", "AI accountability and RACI matrix design", "Model versioning, deprecation, and retirement policies"],
      },
      {
        id: "compliance", title: "1.4 Regulatory Compliance Mapping",
        bullets: ["Multi-framework mapping: NIST CSF 2.0, SOC 2, ISO 27001/42001, EU AI Act, DORA, HIPAA", "Compliance roadmap with prioritized remediation", "Continuous compliance monitoring dashboard"],
      },
    ],
    kpis: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "Compliance Readiness", before: "40%", after: "100%" },
      { kpi: "Shadow AI Detection Rate", before: "0%", after: "95%+" },
      { kpi: "Regulatory Audit Prep Time", before: "Weeks", after: "Hours" },
      { kpi: "Board AI Risk Visibility", before: "None", after: "Real-Time Dashboard" },
    ],
    benefits: [
      "Complete AI system visibility and inventory",
      "Enterprise governance framework with clear accountability",
      "Multi-framework regulatory compliance",
      "Shadow AI elimination",
      "Audit-ready evidence collection",
    ],
    timeline: "8–12 Weeks",
  },
  {
    id: "ai-risk-posture",
    number: "02",
    title: "AI Risk Posture Management & Continuous Assessment",
    nistFunction: "IDENTIFY (ID)",
    nistColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    description:
      "Continuous automated assessment of AI systems, infrastructure, and model supply chains to identify vulnerabilities, misconfigurations, and emerging attack vectors in real time.",
    statementOfValue:
      "Transform AI risk from an annual snapshot to a real-time, continuously validated security posture.",
    before: [
      "Annual or ad hoc security assessments only",
      "No continuous monitoring of AI attack surfaces",
      "AI model vulnerabilities discovered only after exploitation",
      "Manual assessments cannot keep pace with AI deployment velocity",
    ],
    components: [
      {
        id: "surface", title: "2.1 AI Attack Surface Discovery",
        bullets: ["Continuous discovery of all AI endpoints, APIs, vector databases, and agent layers", "External AI attack surface monitoring (exposed endpoints, leaked keys)", "AI supply chain risk mapping (pre-trained models, third-party APIs, MCP servers)"],
      },
      {
        id: "vuln", title: "2.2 AI Vulnerability Assessment",
        bullets: ["Automated scanning of AI infrastructure (GPU clusters, model serving platforms, ML pipelines)", "OWASP Top 10 for LLM Applications and OWASP AI Exchange coverage", "Data pipeline security assessment (training data integrity, PII exposure, poisoning vectors)"],
      },
      {
        id: "quant", title: "2.3 AI Risk Quantification",
        bullets: ["FAIR-based AI risk quantification with adversarial threat likelihood scoring", "Risk heat maps with drill-down to individual AI systems", "Integration with enterprise GRC platforms (ServiceNow, Archer, OneTrust)"],
      },
    ],
    kpis: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "Vulnerability Assessment Frequency", before: "Annual", after: "Continuous" },
      { kpi: "Mean Time to Identify AI Risk", before: "Weeks", after: "Minutes" },
      { kpi: "AI Attack Surface Coverage", before: "15%", after: "95%" },
    ],
    benefits: [
      "Real-time AI risk posture visibility",
      "Continuous vulnerability discovery and prioritization",
      "AI attack surface reduction",
      "Quantified risk metrics for investment decisions",
    ],
    timeline: "6–8 Weeks → Ongoing",
  },
  {
    id: "ai-red-teaming",
    number: "03",
    title: "AI Red Teaming & Adversarial Security Testing",
    nistFunction: "IDENTIFY (ID) + PROTECT (PR)",
    nistColor: "text-red-400 border-red-400/30 bg-red-400/10",
    description:
      "Comprehensive adversarial testing using advanced offensive methodologies — prompt injection, jailbreaking, data extraction, agent manipulation, and supply chain attacks. Aligned with NIST AI RMF, MITRE ATLAS, and OWASP Top 10 for LLMs.",
    statementOfValue:
      "Break your AI before attackers do — using the same techniques nation-state adversaries will deploy.",
    before: [
      "Prompt injection vulnerabilities unknown and untested",
      "Jailbreak risks unquantified",
      "Agent abuse and data leakage pathways undetected",
      "No adversarial AI testing methodology in place",
    ],
    components: [
      {
        id: "llm-red", title: "3.1 LLM Red Teaming",
        bullets: ["Prompt injection (direct and indirect), jailbreak, and PII leakage testing", "System prompt extraction attempts and token smuggling attacks", "Model denial-of-service and resource exhaustion testing"],
      },
      {
        id: "agent-red", title: "3.2 AI Agent Red Teaming",
        bullets: ["Agent manipulation, prompt hijacking, and tool/API abuse testing", "Multi-agent collusion and privilege escalation", "MCP server and plugin security testing"],
      },
      {
        id: "adversarial-ml", title: "3.3 Adversarial ML Attacks",
        bullets: ["Model extraction, training data poisoning simulation", "Model inversion and membership inference attacks", "Backdoor and trojan detection testing"],
      },
      {
        id: "rag-red", title: "3.4 RAG & Infrastructure Testing",
        bullets: ["Knowledge base poisoning and retrieval manipulation", "Vector database access and cross-tenant data leakage", "GPU cluster and MLOps pipeline penetration testing"],
      },
    ],
    kpis: [
      { kpi: "Prompt Injection Success Rate", before: "65%", after: "<5%" },
      { kpi: "Jailbreak Vulnerability", before: "High", after: "Controlled" },
      { kpi: "Security Testing Coverage", before: "20%", after: "100%" },
      { kpi: "Adversarial Robustness Score", before: "Unmeasured", after: "Quantified" },
    ],
    benefits: [
      "Complete AI adversarial resilience",
      "Reduced exploitability across all AI attack vectors",
      "MITRE ATLAS-mapped attack coverage",
      "Regulatory compliance evidence (EU AI Act, NIST AI RMF)",
    ],
    timeline: "3–10 Weeks → Ongoing Red Teaming",
  },
  {
    id: "llm-agent-security",
    number: "04",
    title: "AI Security for LLMs, Agents, RAG & Copilots",
    nistFunction: "PROTECT (PR)",
    nistColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description:
      "End-to-end security architecture and hardening for the enterprise GenAI stack — LLMs, agents, RAG pipelines, copilots, MCP servers, vector databases, and autonomous workflows.",
    statementOfValue:
      "Secure the entire AI lifecycle — from data ingestion through model training, deployment, inference, and agent action.",
    before: [
      "LLMs deployed without input validation or output filtering",
      "AI agents with unrestricted tool access and no guardrails",
      "RAG pipelines with unprotected knowledge bases",
      "No model integrity verification or IP protection",
    ],
    components: [
      {
        id: "llm-harden", title: "4.1 LLM Security Hardening",
        bullets: ["Input validation, output filtering, and content safety guardrails", "System prompt protection and context window injection defense", "Rate limiting and secure prompt engineering templates"],
      },
      {
        id: "agent-arch", title: "4.2 AI Agent Security Architecture",
        bullets: ["Principle of least privilege for agent tool access", "Agent action sandboxing with human-in-the-loop controls for high-risk actions", "Kill switch and emergency shutdown mechanisms"],
      },
      {
        id: "rag-sec", title: "4.3 RAG Pipeline & Data Security",
        bullets: ["Knowledge base integrity controls and adversarial content filtering", "PII detection and redaction in training data", "Vector database encryption and cross-tenant isolation"],
      },
    ],
    kpis: [
      { kpi: "Prompt Injection Success Rate", before: "60%", after: "<5%" },
      { kpi: "OWASP LLM Top 10 Coverage", before: "10%", after: "100%" },
      { kpi: "AI API Abuse Detection", before: "None", after: "Real-Time" },
      { kpi: "Model IP Protection", before: "None", after: "Multi-Layer" },
    ],
    benefits: [
      "Defense-in-depth across the entire GenAI stack",
      "Regulatory compliance (EU AI Act, NIST AI RMF, SOC 2)",
      "Protected AI intellectual property",
      "Secure autonomous agent operations",
    ],
    timeline: "4–10 Weeks",
  },
  {
    id: "zero-trust-ai",
    number: "05",
    title: "AI Security Architecture & Zero Trust for AI",
    nistFunction: "PROTECT (PR)",
    nistColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description:
      "Design and implementation of Zero Trust security architecture for AI systems — covering model serving, agent orchestration, data pipelines, and inference infrastructure with AI-aware network segmentation and identity-centric access controls.",
    statementOfValue:
      "Architect AI systems so that no component — model, agent, pipeline, or API — operates with implicit trust.",
    before: [
      "AI systems deployed in flat network architectures",
      "Model endpoints accessible without authentication",
      "Agent-to-agent communication unrestricted",
      "AI infrastructure outside security architecture review",
    ],
    components: [
      {
        id: "zt-design", title: "5.1 AI Zero Trust Architecture",
        bullets: ["AI-aware Zero Trust blueprint with identity-centric access controls", "AI workload micro-segmentation and continuous verification", "Policy decision and enforcement points for all AI interactions"],
      },
      {
        id: "network", title: "5.2 AI Network & Identity Security",
        bullets: ["GPU/TPU cluster network isolation and AI data pipeline segmentation", "AI system identity management (model identities, agent identities)", "Machine-to-machine authentication and API key rotation for model endpoints"],
      },
      {
        id: "harden", title: "5.3 AI Infrastructure Hardening",
        bullets: ["Hardened AI platform configurations (Kubernetes, Docker, GPU drivers)", "Encryption for AI data at rest, in transit, and in use", "Secure enclaves and federated learning privacy architecture"],
      },
    ],
    kpis: [
      { kpi: "AI Zero Trust Maturity", before: "Level 0", after: "Level 4 (Optimal)" },
      { kpi: "AI Network Segmentation", before: "None", after: "Full Micro-Segmentation" },
      { kpi: "AI Infrastructure Hardening Score", before: "30%", after: "95%" },
      { kpi: "Lateral Movement (Red Team)", before: "80%", after: "<5%" },
    ],
    benefits: [
      "Zero Trust architecture for all AI workloads",
      "Reduced blast radius of AI system compromise",
      "AI-aware network and identity controls",
      "Regulatory compliance for AI infrastructure security",
    ],
    timeline: "6–10 Weeks",
  },
  {
    id: "ai-bas",
    number: "06",
    title: "AI-Driven Breach & Attack Simulation (AI-BAS)",
    nistFunction: "DETECT (DE) + IDENTIFY (ID)",
    nistColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    description:
      "Continuous AI-powered simulation of real-world attack scenarios — ransomware, phishing, lateral movement, privilege escalation, and AI-specific attacks — to continuously validate security defenses.",
    statementOfValue:
      "Continuously validate that every security control works — using AI attackers that never sleep.",
    before: [
      "Annual penetration testing as the only validation method",
      "Security controls untested between assessments",
      "Unknown detection gaps across the kill chain",
      "AI-specific attack paths never simulated",
    ],
    components: [
      {
        id: "attack-sim", title: "6.1 Continuous Attack Simulation",
        bullets: ["Automated simulation of the full MITRE ATT&CK kill chain (14 tactics, 200+ techniques)", "Ransomware, cloud, lateral movement, and data exfiltration simulation"],
      },
      {
        id: "ai-attack", title: "6.2 AI-Specific Attack Simulation",
        bullets: ["Prompt injection, agent manipulation, RAG poisoning simulation", "Model extraction and deepfake social engineering simulation"],
      },
      {
        id: "defense", title: "6.3 Defense Validation & Benchmarking",
        bullets: ["Detection coverage mapping (attacks detected vs. missed)", "SIEM/SOAR rule validation and EDR/XDR effectiveness measurement", "Board-level security effectiveness metrics and ROI quantification"],
      },
    ],
    kpis: [
      { kpi: "Security Validation Frequency", before: "Annual", after: "Daily" },
      { kpi: "Attack Coverage (MITRE ATT&CK)", before: "15%", after: "95%" },
      { kpi: "Detection Gaps", before: "Unknown", after: "Identified & Prioritized" },
      { kpi: "Security Effectiveness Score", before: "60%", after: "95%" },
    ],
    benefits: [
      "Continuous, automated security validation 24×7",
      "Complete MITRE ATT&CK coverage",
      "AI-specific attack path discovery",
      "Data-driven security investment decisions",
    ],
    timeline: "6–10 Weeks → Ongoing",
  },
  {
    id: "threat-hunting",
    number: "07",
    title: "Autonomous Threat Hunting Platform",
    nistFunction: "DETECT (DE)",
    nistColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    description:
      "AI-driven autonomous threat hunters that continuously search for indicators of compromise, insider threats, ransomware activity, APTs, and AI-specific threat indicators across the enterprise environment.",
    statementOfValue:
      "Find attackers before they trigger an incident — hunt threats proactively, not reactively.",
    before: [
      "Threat hunting is manual, ad hoc, and analyst-dependent",
      "Limited hunting coverage (~20% of environment)",
      "AI-specific threats never hunted",
      "APT dwell time averaging 200+ days",
    ],
    components: [
      {
        id: "hypothesis", title: "7.1 Autonomous Hypothesis Generation",
        bullets: ["AI-generated hunting hypotheses based on threat intelligence and TTP analysis", "MITRE ATT&CK-driven hypothesis library with automated prioritization"],
      },
      {
        id: "ueba", title: "7.2 Behavioral Analytics & AI Threat Hunting",
        bullets: ["User and entity behavior analytics (UEBA) for AI system interactions", "Model compromise, data poisoning, prompt injection pattern hunting in production logs"],
      },
      {
        id: "apt", title: "7.3 APT & Insider Threat Hunting",
        bullets: ["Nation-state TTP-based hunting campaigns and living-off-the-land detection", "Privileged user behavior analysis and data exfiltration indicator hunting"],
      },
    ],
    kpis: [
      { kpi: "Threat Discovery Time", before: "Weeks", after: "Hours" },
      { kpi: "Threat Hunting Coverage", before: "20%", after: "95%" },
      { kpi: "APT Dwell Time", before: "200+ Days", after: "<30 Days" },
      { kpi: "AI-Specific Threat Visibility", before: "None", after: "Comprehensive" },
    ],
    benefits: [
      "Early threat detection before incident impact",
      "Comprehensive environment visibility",
      "AI-specific threat detection capability",
      "Reduced analyst workload through AI automation",
    ],
    timeline: "6–8 Weeks → Ongoing",
  },
  {
    id: "ai-mdr",
    number: "08",
    title: "AI Managed Detection & Response (AI-MDR)",
    nistFunction: "DETECT (DE) + RESPOND (RS)",
    nistColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    description:
      "AI-powered MDR leveraging autonomous threat analysis, behavioral analytics, automated triage, and response orchestration — operating 24×7×365 with AI analysts augmenting human expertise.",
    statementOfValue:
      "Detect and respond to threats at machine speed, with human expertise where it matters most.",
    before: [
      "SOC analyst shortage (3.5M unfilled cybersecurity positions globally)",
      "Alert fatigue overwhelming remaining analysts",
      "Mean time to detect: hours to days",
      "Traditional MDR lacking AI-specific detection capabilities",
    ],
    components: [
      {
        id: "detection", title: "8.1 AI-Powered Detection & Triage",
        bullets: ["Multi-signal detection across endpoints, network, cloud, identity, and AI systems", "AI analyst-driven alert triage (80%+ L1 automation)", "AI-specific threat detection (model compromise, data poisoning, agent abuse)"],
      },
      {
        id: "response", title: "8.2 Automated Response Orchestration",
        bullets: ["Automated containment (host isolation, account disable, network quarantine)", "AI-specific response actions (model endpoint shutdown, agent suspension)", "Escalation workflows for human-in-the-loop decisions"],
      },
      {
        id: "experts", title: "8.3 24×7 Expert Oversight & Reporting",
        bullets: ["Human experts providing strategic oversight and complex incident handling", "Real-time security operations dashboard with MTTD/MTTR metrics", "Regular threat briefings and board-level risk summaries"],
      },
    ],
    kpis: [
      { kpi: "Mean Time to Detect (MTTD)", before: "8 Hours", after: "5 Minutes" },
      { kpi: "Mean Time to Respond (MTTR)", before: "2 Days", after: "20 Minutes" },
      { kpi: "L1 Triage Automation", before: "0%", after: "80%+" },
      { kpi: "AI-Specific Threat Detection", before: "None", after: "Comprehensive" },
    ],
    benefits: [
      "Machine-speed detection and response",
      "Eliminated alert fatigue",
      "24×7 coverage without SOC scaling costs",
      "AI-specific threat detection and response",
    ],
    timeline: "Ongoing MDR | 4–6 Week Onboarding",
  },
];

// ─── NIST CSF Colors ──────────────────────────────────────────────────────────

const nistFunctionBadge: Record<string, string> = {
  "GOVERN (GV)": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  "IDENTIFY (ID)": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "IDENTIFY (ID) + PROTECT (PR)": "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  "PROTECT (PR)": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "DETECT (DE) + IDENTIFY (ID)": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "DETECT (DE)": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "DETECT (DE) + RESPOND (RS)": "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function KpiTable({ kpis }: { kpis: KpiRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground w-2/5">KPI</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground/70 w-[28%]">Before</th>
            <th className="text-left px-4 py-3 font-semibold text-primary">After</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row, i) => (
            <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
              <td className="px-4 py-3 font-medium text-foreground">{row.kpi}</td>
              <td className="px-4 py-3 text-foreground/65">{row.before}</td>
              <td className="px-4 py-3 font-semibold text-primary">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OfferingSection({ offering }: { offering: ShieldOffering }) {
  const iconMap: Record<string, React.ElementType> = {
    "GOVERN (GV)": Shield,
    "IDENTIFY (ID)": Eye,
    "IDENTIFY (ID) + PROTECT (PR)": Target,
    "PROTECT (PR)": ShieldCheck,
    "DETECT (DE) + IDENTIFY (ID)": Radio,
    "DETECT (DE)": Radio,
    "DETECT (DE) + RESPOND (RS)": AlertTriangle,
  };
  const Icon = iconMap[offering.nistFunction] ?? Shield;

  return (
    <section id={offering.id} className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-4xl font-black font-display bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              {offering.number}
            </span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 ${nistFunctionBadge[offering.nistFunction] ?? "bg-primary/10 text-primary border-primary/30"}`}>
              <Icon className="h-3 w-3" />
              NIST CSF 2.0 — {offering.nistFunction}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3.5xl font-semibold tracking-tight text-foreground mb-3">{offering.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4">{offering.description}</p>
          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 inline-block">
            <p className="text-sm font-medium text-primary">Value: {offering.statementOfValue}</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          {/* Before state */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-red-400" /> Before Implementation
            </h3>
            <ul className="space-y-2">
              {offering.before.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              {offering.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Timeline: {offering.timeline}
            </div>
          </div>

          {/* KPI Table */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Performance Impact</h3>
            <KpiTable kpis={offering.kpis} />
          </div>
        </div>

        {/* Service Components */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-4">Service Components</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {offering.components.map((comp) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border/50 bg-surface/20 p-5"
              >
                <h4 className="font-semibold text-foreground text-sm mb-3">{comp.title}</h4>
                <ul className="space-y-1.5">
                  {comp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function AiSecuritySection() {
  return (
    <div className="bg-background">
      {offerings.map((offering) => (
        <OfferingSection key={offering.id} offering={offering} />
      ))}
    </div>
  );
}

function AiSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Security & Cyber Dom"
        title={
          <>
            Comprehensive AI Security <br />
            <span className="text-accent">for the Enterprise</span>
          </>
        }
        description="From AI governance and red teaming to zero-trust architecture and 24×7 managed detection — we secure every layer of your AI stack."
      />

      <AiSecuritySection />

      <CTA />
    </>
  );
}

export const Route = createFileRoute("/ai-security")({
  component: AiSecurityPage,
});
