import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Eye,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Users,
  Lock,
  Search,
  Radio,
  ArrowRight,
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

interface RegulatoryRow {
  requirement: string;
  coverage: string;
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
  situation: string;
  components: ServiceComponent[];
  regulatory: RegulatoryRow[];
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
      "Enterprise-wide AI governance framework covering AI system inventory, risk classification, policy management, accountability structures, regulatory mapping, and board-level AI risk reporting. Aligns with NIST CSF 2.0 Govern function, NIST AI RMF, SOC 2 TSC (CC1–CC9), ISO/IEC 42001, and EU AI Act compliance requirements.",
    statementOfValue:
      "Establish the governance foundation that every AI deployment, security control, and compliance obligation depends upon.",
    before: [
      "No AI system inventory or classification",
      "Shadow AI usage proliferating across business units",
      "No AI governance policies or accountability structures",
      "Regulatory requirements undefined for AI systems",
      "Board has zero visibility into AI risk posture",
      "AI procurement lacks security gatekeeping",
    ],
    situation:
      "Organizations deploy GenAI, LLMs, AI agents, and copilots at enterprise scale without governance guardrails. Regulators worldwide — EU AI Act, NIST AI RMF, SEC cyber disclosure rules, DORA for financial services — now mandate documented AI risk management. Without governance, every downstream security control operates in a vacuum.",
    components: [
      {
        id: "discovery", title: "1.1 AI System Discovery & Inventory",
        bullets: ["Automated discovery of all AI systems, LLMs, agents, RAG pipelines, copilots, MCP servers, and model endpoints", "Shadow AI detection and cataloging", "AI model bill of materials (AI-BOM) generation", "Third-party AI vendor inventory and risk profiling", "Data pipeline mapping for training, fine-tuning, and inference"],
      },
      {
        id: "classification", title: "1.2 AI Risk Classification & Tiering",
        bullets: ["Risk classification per EU AI Act (Unacceptable, High, Limited, Minimal)", "NIST AI RMF Map-Measure-Manage alignment", "AI-specific threat modeling (STRIDE-AI, LINDDUN-AI)", "Risk scoring integrating adversarial AI threat intelligence"],
      },
      {
        id: "governance", title: "1.3 AI Governance Framework Design",
        bullets: ["AI governance policy suite (acceptable use, data handling, model lifecycle, incident response, human oversight)", "AI accountability and RACI matrix design", "AI ethics board and review committee establishment", "Model versioning, deprecation, and retirement policies"],
      },
      {
        id: "compliance", title: "1.4 Regulatory Compliance Mapping",
        bullets: ["Multi-framework mapping: NIST CSF 2.0, NIST AI RMF, SOC 2, ISO 27001/42001, EU AI Act, DORA, PCI-DSS, HIPAA, FedRAMP, CMMC, NCA, PDPA, LGPD", "Compliance roadmap with prioritized remediation", "Evidence collection automation for audit readiness", "Continuous compliance monitoring dashboard"],
      },
      {
        id: "reporting", title: "1.5 Board-Level AI Risk Reporting",
        bullets: ["Executive AI risk dashboard with quantified metrics", "AI risk heat maps and trend analysis", "Regulatory compliance scorecards", "Benchmarking against industry peers"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Govern (GV.OC, GV.RM, GV.RR, GV.PO, GV.SC)", coverage: "Full" },
      { requirement: "NIST AI RMF — Map, Measure, Manage", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC1 (Control Environment), CC2 (Communication), CC3 (Risk Assessment), CC5 (Monitoring)", coverage: "Full" },
      { requirement: "ISO/IEC 42001 — AI Management System", coverage: "Full" },
      { requirement: "EU AI Act — Article 9 (Risk Management), Article 17 (Quality Mgmt), Article 72 (Post-Market Monitoring)", coverage: "Full" },
      { requirement: "DORA — ICT Risk Management Framework", coverage: "Full" },
      { requirement: "FedRAMP — AI System Authorization", coverage: "Mapped" },
    ],
    kpis: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "AI Risk Identification", before: "Reactive", after: "Proactive & Continuous" },
      { kpi: "Compliance Readiness (Multi-Framework)", before: "40%", after: "100%" },
      { kpi: "AI Governance Maturity (CMMI Level)", before: "Level 1 – Initial", after: "Level 4 – Managed" },
      { kpi: "Board AI Risk Visibility", before: "None", after: "Real-Time Dashboard" },
      { kpi: "Shadow AI Detection Rate", before: "0%", after: "95%+" },
      { kpi: "Regulatory Audit Preparation Time", before: "Weeks", after: "Hours" },
      { kpi: "AI Policy Coverage", before: "Ad Hoc", after: "Enterprise-Grade, 100%" },
    ],
    benefits: [
      "Complete AI system visibility and inventory",
      "Enterprise-grade governance framework with clear accountability",
      "Multi-framework regulatory compliance (NIST, SOC 2, ISO, EU AI Act, DORA)",
      "Quantified, board-ready AI risk posture",
      "Shadow AI elimination",
      "Audit-ready evidence collection",
      "Foundation for all downstream AI security controls",
    ],
    timeline: "8–12 Weeks (Implementation) → Ongoing (Managed Governance) | Phase 1: AI Discovery (Wks 1–2) → Phase 2: Risk Classification (Wks 2–4) → Phase 3: Governance Design (Wks 3–6) → Phase 4: Regulatory Mapping (Wks 5–8) → Phase 5: Board Reporting Setup (Wks 7–10)",
  },
  {
    id: "ai-risk-posture",
    number: "02",
    title: "AI Risk Posture Management & Continuous Assessment",
    nistFunction: "IDENTIFY (ID)",
    nistColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    description:
      "Continuous, automated assessment of enterprise AI systems, infrastructure, and model supply chains to identify vulnerabilities, misconfigurations, data exposure risks, compliance gaps, and emerging AI-specific attack vectors in real time. Integrates AI-driven penetration testing for proactive risk discovery.",
    statementOfValue:
      "Transform AI risk from an annual snapshot to a real-time, continuously validated security posture.",
    before: [
      "Annual or ad hoc security assessments",
      "Hundreds of AI applications with unknown risk profiles",
      "No continuous monitoring of AI attack surfaces",
      "AI model vulnerabilities discovered only after exploitation",
      "Manual risk assessments cannot keep pace with AI deployment velocity",
    ],
    situation:
      "Enterprise AI systems change continuously — models are retrained, fine-tuned, agents are modified, RAG knowledge bases are updated, new integrations are deployed. Point-in-time assessments become obsolete within weeks. Organizations need continuous, AI-powered risk posture management that adapts at the speed of AI development.",
    components: [
      {
        id: "surface", title: "2.1 AI Attack Surface Discovery",
        bullets: ["Continuous discovery and classification of all AI endpoints, APIs, model serving infrastructure, vector databases, embedding services, and agent orchestration layers", "External AI attack surface monitoring (publicly exposed model endpoints, leaked API keys, model artifacts)", "AI supply chain risk mapping (pre-trained models, third-party APIs, data sources, plugins, MCP servers)", "Model dependency graph generation and risk scoring"],
      },
      {
        id: "vuln", title: "2.2 AI Vulnerability Assessment",
        bullets: ["Automated vulnerability scanning of AI infrastructure (GPU clusters, model serving platforms, ML pipelines)", "OWASP Top 10 for LLM Applications and OWASP AI Exchange", "Prompt injection surface mapping and risk classification", "Data pipeline security assessment (training data integrity, PII exposure, data poisoning vectors)"],
      },
      {
        id: "drift", title: "2.3 AI Configuration & Drift Monitoring",
        bullets: ["Continuous monitoring for model configuration drift", "AI infrastructure misconfiguration detection", "Access control validation for AI systems", "API security configuration assessment"],
      },
      {
        id: "quant", title: "2.4 AI Risk Quantification & Scoring",
        bullets: ["FAIR-based AI risk quantification (Factor Analysis of Information Risk)", "AI-specific risk scoring incorporating adversarial threat likelihood and business impact", "Risk heat maps with drill-down to individual AI systems", "Integration with enterprise GRC platforms (ServiceNow, Archer, OneTrust)"],
      },
      {
        id: "monitor", title: "2.5 Continuous Compliance Monitoring",
        bullets: ["Automated control validation against NIST CSF 2.0, SOC 2, ISO 42001, EU AI Act", "Evidence generation for auditors", "Compliance drift detection and alerting", "Regulatory change impact analysis"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Identify (ID.AM, ID.RA, ID.IM)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC3.1 (Risk Assessment), CC3.2 (Fraud Risk), CC3.4 (Change Management)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.9, A.5.23 (Information Security Risk)", coverage: "Full" },
      { requirement: "EU AI Act — Article 9 (Risk Management System)", coverage: "Full" },
      { requirement: "NIST AI RMF — Map 1–4, Measure 1–2", coverage: "Full" },
      { requirement: "DORA — Article 6 (ICT Risk Management)", coverage: "Full" },
    ],
    kpis: [
      { kpi: "AI Asset Visibility", before: "20%", after: "100%" },
      { kpi: "Vulnerability Assessment Frequency", before: "Annual", after: "Continuous" },
      { kpi: "Security Coverage", before: "35%", after: "95%" },
      { kpi: "Compliance Readiness", before: "40%", after: "100%" },
      { kpi: "Mean Time to Identify AI Risk", before: "Weeks", after: "Minutes" },
      { kpi: "AI Attack Surface Coverage", before: "15%", after: "95%" },
      { kpi: "Risk Quantification Accuracy", before: "Qualitative Only", after: "FAIR-Quantified" },
    ],
    benefits: [
      "Real-time AI risk posture visibility",
      "Continuous vulnerability discovery and prioritization",
      "AI attack surface reduction",
      "Compliance drift detection and remediation",
      "Quantified risk metrics for investment decisions",
      "Integration with existing GRC and SIEM platforms",
      "Dramatically reduced window of exposure",
    ],
    timeline: "6–8 Weeks (Deployment) → Ongoing (Continuous Monitoring & AI-PTaaS) | Phase 1: AI Discovery & Baseline (Wks 1–3) → Phase 2: Continuous Monitoring Deployment (Wks 2–4) → Phase 3: AI-PTaaS Activation (Wks 3–5) → Phase 4: Risk Quantification & Dashboards (Wks 4–6) → Phase 5: Compliance Integration (Wks 5–8)",
  },
  {
    id: "ai-red-teaming",
    number: "03",
    title: "AI Red Teaming & Adversarial Security Testing",
    nistFunction: "IDENTIFY (ID) + PROTECT (PR)",
    nistColor: "text-red-400 border-red-400/30 bg-red-400/10",
    description:
      "Comprehensive adversarial testing of enterprise AI systems using advanced offensive security methodologies — including prompt injection, jailbreaking, data extraction, model extraction, adversarial ML attacks, agent manipulation, supply chain poisoning, and social engineering via AI. Aligned with NIST AI RMF adversarial testing guidance, MITRE ATLAS, and OWASP Top 10 for LLMs.",
    statementOfValue:
      "Break your AI before attackers do — using the same techniques, tools, and tradecraft that nation-state adversaries will deploy.",
    before: [
      "Prompt injection vulnerabilities unknown and untested",
      "Jailbreak risks unquantified",
      "Data leakage pathways through AI systems undetected",
      "Agent abuse vectors undefined",
      "Model extraction and theft risks unaddressed",
      "AI supply chain integrity unverified",
      "No adversarial AI testing methodology",
    ],
    situation:
      "AI systems — particularly LLMs, autonomous agents, RAG pipelines, and copilots — introduce entirely new attack surfaces that traditional penetration testing cannot assess. Prompt injection, data poisoning, model extraction, and agent manipulation require specialized adversarial AI security expertise and tooling.",
    components: [
      {
        id: "llm-red", title: "3.1 LLM Red Teaming",
        bullets: ["Prompt injection testing (direct and indirect)", "Jailbreak testing (multi-turn, encoding-based, multi-language)", "Data extraction and PII leakage testing", "System prompt extraction attempts", "Token smuggling and context window attacks", "Model denial-of-service (resource exhaustion)"],
      },
      {
        id: "agent-red", title: "3.2 AI Agent & Autonomous System Red Teaming",
        bullets: ["Agent manipulation and prompt hijacking", "Tool/API abuse testing (unauthorized function calling)", "Multi-agent collusion and privilege escalation", "Memory poisoning and context manipulation", "MCP server and plugin security testing"],
      },
      {
        id: "rag-red", title: "3.3 RAG System Security Testing",
        bullets: ["Knowledge base poisoning testing", "Retrieval manipulation and context injection", "Vector database access and data exfiltration", "Cross-tenant data leakage testing", "Embedding inversion attacks"],
      },
      {
        id: "adversarial-ml", title: "3.4 Adversarial Machine Learning Attacks",
        bullets: ["Model extraction and intellectual property theft", "Training data poisoning simulation", "Model inversion and membership inference attacks", "Adversarial input crafting (FGSM, PGD, C&W)", "Backdoor and trojan detection testing"],
      },
      {
        id: "social", title: "3.5 AI-Powered Social Engineering Testing",
        bullets: ["Deepfake voice and video generation for social engineering", "AI-crafted spear phishing campaigns", "Synthetic identity creation and testing", "AI-powered vishing (voice phishing) simulation", "Business email compromise using AI-generated content"],
      },
      {
        id: "infra-red", title: "3.6 AI Infrastructure Penetration Testing",
        bullets: ["GPU cluster and TPU infrastructure security", "Model serving platform exploitation (MLflow, SageMaker, Vertex AI)", "MLOps pipeline compromise testing", "Training environment isolation testing"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Identify (ID.RA), Protect (PR.DS, PR.AA)", coverage: "Full" },
      { requirement: "NIST AI RMF — Measure 2.4, 2.6, 2.7 (Adversarial Robustness)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC3.1, CC4.1 (Monitoring), CC7.1 (System Operations)", coverage: "Full" },
      { requirement: "ISO/IEC 42001 — Annex B.8 (AI System Security)", coverage: "Full" },
      { requirement: "EU AI Act — Article 15 (Accuracy, Robustness, Cybersecurity)", coverage: "Full" },
      { requirement: "OWASP Top 10 for LLMs — All Categories", coverage: "Full" },
      { requirement: "MITRE ATLAS — All Mapped Techniques", coverage: "Full" },
    ],
    kpis: [
      { kpi: "Prompt Injection Success Rate", before: "65%", after: "<5%" },
      { kpi: "Data Leakage Risk", before: "High", after: "Minimal" },
      { kpi: "Jailbreak Vulnerability", before: "High", after: "Controlled" },
      { kpi: "AI Attack Exposure", before: "Unknown", after: "Fully Quantified" },
      { kpi: "Security Testing Coverage", before: "20%", after: "100%" },
      { kpi: "Mean Time to Identify AI Vulnerability", before: "Weeks", after: "Hours" },
      { kpi: "Adversarial Robustness Score", before: "Unmeasured", after: "Quantified (0–1)" },
      { kpi: "AI Supply Chain Risk", before: "Unknown", after: "Mapped & Scored" },
    ],
    benefits: [
      "Complete AI adversarial resilience",
      "Reduced exploitability across all AI attack vectors",
      "Regulatory compliance evidence (EU AI Act Article 15, NIST AI RMF)",
      "Security validation with quantified metrics",
      "MITRE ATLAS-mapped attack coverage",
      "Executive risk quantification",
      "Defense improvement through purple teaming",
      "Continuous adversarial readiness",
    ],
    timeline: "3–10 Weeks (Engagement) → Ongoing (Continuous Red Teaming) | Phase 1: AI System Profiling & Threat Modeling (Wks 1–2) → Phase 2: LLM & Agent Red Teaming (Wks 2–4) → Phase 3: Adversarial ML & Infrastructure Testing (Wks 3–6) → Phase 4: Supply Chain & Social Engineering (Wks 5–7) → Phase 5: Purple Team & Remediation (Wks 6–8) → Phase 6: Continuous Testing Setup (Wks 7–10)",
  },
  {
    id: "llm-agent-security",
    number: "04",
    title: "AI Security for LLMs, Agents, RAG & Copilots",
    nistFunction: "PROTECT (PR)",
    nistColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description:
      "End-to-end security architecture, hardening, and protective controls for the enterprise GenAI stack — LLMs, AI agents, RAG pipelines, copilots, MCP servers, vector databases, embedding services, model serving platforms, and autonomous workflows. Implements defense-in-depth across the entire AI lifecycle.",
    statementOfValue:
      "Secure the entire AI lifecycle — from data ingestion through model training, deployment, inference, and agent action.",
    before: [
      "LLMs deployed without input validation or output filtering",
      "AI agents with unrestricted tool access and no guardrails",
      "RAG pipelines with unprotected knowledge bases",
      "Vector databases accessible without authentication",
      "No model integrity verification",
      "Copilots with excessive permissions and data access",
      "AI workflows lacking human-in-the-loop controls",
    ],
    situation:
      "Enterprise GenAI deployments create a layered attack surface spanning data, models, APIs, orchestration layers, and autonomous agent actions. Each layer requires specialized security controls that traditional application security does not address.",
    components: [
      {
        id: "llm-harden", title: "4.1 LLM Security Hardening",
        bullets: ["Input validation and sanitization frameworks", "Output filtering and content safety guardrails", "System prompt protection and isolation", "Context window management and injection defense", "Rate limiting and abuse prevention", "Secure prompt engineering best practices and templates"],
      },
      {
        id: "agent-arch", title: "4.2 AI Agent Security Architecture",
        bullets: ["Principle of least privilege for agent tool access", "Agent action sandboxing and isolation", "Human-in-the-loop controls for high-risk actions", "Agent memory security and compartmentalization", "Multi-agent trust boundaries and authentication", "Kill switch and emergency shutdown mechanisms"],
      },
      {
        id: "rag-sec", title: "4.3 RAG Pipeline Security",
        bullets: ["Knowledge base integrity controls", "Document sanitization and adversarial content filtering", "Cross-tenant isolation and access controls", "Vector database encryption at rest and in transit", "Source attribution and provenance tracking"],
      },
      {
        id: "mcp-sec", title: "4.4 MCP Server & Plugin Security",
        bullets: ["MCP server authentication and authorization", "Plugin security assessment and sandboxing", "Tool registration security validation", "Cross-plugin isolation", "Plugin supply chain integrity verification"],
      },
      {
        id: "data-sec", title: "4.5 AI Data Security & Privacy",
        bullets: ["PII detection and redaction in training data", "Data poisoning detection and prevention", "Differential privacy implementation guidance", "Data retention and right-to-be-forgotten for AI systems", "Data lineage tracking and provenance verification"],
      },
      {
        id: "model-ip", title: "4.6 AI Model Security & IP Protection",
        bullets: ["Model watermarking and fingerprinting", "Model extraction attack prevention", "Inference API access control", "Model registry security hardening", "Intellectual property protection strategies"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Protect (PR.AA, PR.DS, PR.PS, PR.IR)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC6.1 (Logical Access), CC6.2 (Authentication), CC6.3 (Authorization), CC6.7 (Data Disposal)", coverage: "Full" },
      { requirement: "ISO/IEC 42001 — Annex B.2 (Data), B.5 (AI Development), B.6 (AI Deployment)", coverage: "Full" },
      { requirement: "EU AI Act — Article 10 (Data Governance), Article 14 (Human Oversight), Article 15 (Cybersecurity)", coverage: "Full" },
      { requirement: "GDPR — Article 22 (Automated Decision-Making), Article 25 (Data Protection by Design)", coverage: "Full" },
      { requirement: "OWASP Top 10 for LLM Applications — All Categories", coverage: "Full" },
    ],
    kpis: [
      { kpi: "Prompt Injection Success Rate", before: "60%", after: "<5%" },
      { kpi: "Data Leakage Risk", before: "High", after: "Low" },
      { kpi: "AI Governance Coverage", before: "30%", after: "100%" },
      { kpi: "Agent Security Controls", before: "Limited", after: "Enterprise-Grade" },
      { kpi: "RAG Pipeline Security", before: "Unprotected", after: "Defense-in-Depth" },
      { kpi: "OWASP LLM Top 10 Coverage", before: "10%", after: "100%" },
      { kpi: "AI API Abuse Detection", before: "None", after: "Real-Time" },
      { kpi: "Model IP Protection", before: "None", after: "Multi-Layer" },
    ],
    benefits: [
      "Secure AI deployments from model to agent",
      "Defense-in-depth across the entire GenAI stack",
      "Regulatory compliance (EU AI Act, NIST AI RMF, SOC 2)",
      "Reduced AI-specific attack surface",
      "Enterprise trust in AI systems",
      "Protected AI intellectual property",
      "Secure autonomous agent operations",
      "Privacy-preserving AI data handling",
    ],
    timeline: "4–10 Weeks | Phase 1: GenAI Architecture Security Review (Wks 1–2) → Phase 2: LLM & RAG Hardening (Wks 2–5) → Phase 3: Agent Security Architecture (Wks 4–7) → Phase 4: API & Integration Security (Wks 6–8) → Phase 5: Data Security & Privacy Controls (Wks 7–9) → Phase 6: Validation & Continuous Testing (Wks 8–10)",
  },
  {
    id: "zero-trust-ai",
    number: "05",
    title: "AI Security Architecture & Zero Trust for AI",
    nistFunction: "PROTECT (PR)",
    nistColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description:
      "Design and implementation of security architecture for AI systems grounded in Zero Trust principles — never trust, always verify — applied to AI model serving, agent orchestration, data pipelines, and inference infrastructure. Includes AI-aware network segmentation, micro-segmentation, identity-centric access controls, and AI-specific security patterns.",
    statementOfValue:
      "Architect AI systems so that no component — model, agent, data pipeline, or API — operates with implicit trust.",
    before: [
      "AI systems deployed in flat network architectures",
      "Model endpoints accessible without authentication",
      "Agent-to-agent communication unrestricted",
      "Training and inference environments sharing resources",
      "No AI-specific network segmentation",
      "AI infrastructure outside security architecture review",
    ],
    situation:
      "AI systems introduce new communication patterns — model-to-model, agent-to-agent, agent-to-tool, RAG retrieval-to-inference — that traditional network security architectures do not account for. Zero Trust must extend to every AI interaction.",
    components: [
      {
        id: "zt-design", title: "5.1 AI Zero Trust Architecture Design",
        bullets: ["AI-aware Zero Trust architecture blueprint", "Identity-centric access control for models, agents, and APIs", "AI workload micro-segmentation strategy", "AI-specific policy decision points (PDP) and policy enforcement points (PEP)", "Continuous verification for all AI system interactions"],
      },
      {
        id: "network", title: "5.2 AI Network Security Architecture",
        bullets: ["AI infrastructure network segmentation (training, inference, data)", "GPU/TPU cluster network isolation", "Model serving platform network controls", "Agent communication network policies", "AI data pipeline network segmentation"],
      },
      {
        id: "identity", title: "5.3 AI Identity & Access Management",
        bullets: ["AI system identity management (model identities, agent identities)", "Machine-to-machine authentication for AI components", "API key management and rotation for model endpoints", "Service mesh security for AI microservices", "AI workload certificate management"],
      },
      {
        id: "harden", title: "5.4 AI Infrastructure Hardening",
        bullets: ["Hardened AI platform configurations (Kubernetes, Docker, GPU drivers)", "Model serving platform security hardening", "MLOps pipeline security controls", "AI development environment isolation"],
      },
      {
        id: "crypto", title: "5.5 AI-Aware Encryption & Key Management",
        bullets: ["Encryption for AI data at rest, in transit, and in use", "Homomorphic encryption evaluation for AI inference", "Secure enclaves for model protection", "Federated learning privacy architecture"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Protect (PR.AA, PR.DS, PR.PS, PR.IR)", coverage: "Full" },
      { requirement: "NIST SP 800-207 (Zero Trust Architecture)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC6.1, CC6.2, CC6.3, CC6.6 (System Boundaries)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.15, A.8.20 (Network Security), A.8.21 (Web Services)", coverage: "Full" },
      { requirement: "EU AI Act — Article 15 (Cybersecurity)", coverage: "Full" },
      { requirement: "DORA — Article 9 (Protection & Prevention)", coverage: "Full" },
      { requirement: "CMMC — AC, SC Domains", coverage: "Full" },
    ],
    kpis: [
      { kpi: "AI Zero Trust Maturity", before: "Level 0", after: "Level 4 (Optimal)" },
      { kpi: "AI Network Segmentation", before: "None", after: "Full Micro-Segmentation" },
      { kpi: "AI Identity Management", before: "Ad Hoc", after: "Enterprise IAM Integration" },
      { kpi: "AI Infrastructure Hardening Score", before: "30%", after: "95%" },
      { kpi: "Lateral Movement Success (Red Team)", before: "80%", after: "<5%" },
    ],
    benefits: [
      "Zero Trust architecture for all AI workloads",
      "Reduced blast radius of AI system compromise",
      "AI-aware network and identity controls",
      "Hardened AI infrastructure",
      "Regulatory compliance for AI infrastructure security",
      "Defense-in-depth for AI attack surfaces",
    ],
    timeline: "6–10 Weeks (Design & Implementation)",
  },
  {
    id: "ai-bas",
    number: "06",
    title: "AI-Driven Breach & Attack Simulation Platform (AI-BAS)",
    nistFunction: "DETECT (DE) + IDENTIFY (ID)",
    nistColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    description:
      "Continuous, AI-powered simulation of real-world attack scenarios — ransomware, phishing, insider threats, lateral movement, privilege escalation, cloud attacks, AI-specific attacks, and nation-state TTPs — across the entire enterprise environment to continuously validate security defenses and identify exploitable attack paths.",
    statementOfValue:
      "Continuously validate that every security control works — using AI attackers that never sleep.",
    before: [
      "Annual penetration testing as the only validation method",
      "Security controls untested between assessments",
      "Unknown detection gaps across the kill chain",
      "Security effectiveness unquantified",
      "New attack techniques not tested against existing defenses",
      "AI-specific attack paths never simulated",
    ],
    situation:
      "Attackers operate continuously. A single annual penetration test leaves 364 days of unvalidated security exposure. AI-BAS provides continuous, automated attack simulation that validates every security control, detects configuration drift, and quantifies security effectiveness in real time.",
    components: [
      {
        id: "attack-sim", title: "6.1 Continuous Attack Simulation Engine",
        bullets: ["Automated simulation of the full MITRE ATT&CK kill chain (14 tactics, 200+ techniques)", "Ransomware attack path simulation", "Phishing and social engineering simulation", "Cloud attack simulation (AWS, Azure, GCP)", "Lateral movement and privilege escalation simulation", "Data exfiltration simulation"],
      },
      {
        id: "ai-attack", title: "6.2 AI-Specific Attack Simulation",
        bullets: ["Prompt injection simulation against deployed LLMs", "AI agent manipulation and abuse simulation", "RAG poisoning and retrieval manipulation simulation", "Model extraction attempt simulation", "AI supply chain compromise simulation", "Deepfake social engineering simulation"],
      },
      {
        id: "graph", title: "6.3 Attack Path Analysis & Graph Visualization",
        bullets: ["Automated attack graph generation showing all viable paths from initial access to objective", "Critical path identification and prioritization", "Attack path cost-efficiency analysis (effort-aware scoring)", "Visual attack graph dashboards", "What-if analysis for proposed security changes"],
      },
      {
        id: "defense", title: "6.4 Defense Validation & Gap Analysis",
        bullets: ["Detection coverage mapping (which attacks are detected vs. missed)", "SIEM/SOAR rule validation and tuning recommendations", "EDR/XDR effectiveness measurement", "AI security control validation"],
      },
      {
        id: "benchmark", title: "6.5 Continuous Security Benchmarking",
        bullets: ["Security effectiveness scoring over time", "Industry benchmarking (sector-specific comparisons)", "ROI quantification for security investments", "Board-level security effectiveness metrics"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM), Identify (ID.RA)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC4.1 (Monitoring), CC7.1 (System Operations), CC7.2 (Anomaly Evaluation)", coverage: "Full" },
      { requirement: "DORA — Article 25 (ICT Testing), Article 26 (TLPT)", coverage: "Full" },
      { requirement: "PCI-DSS 4.0 — Requirement 11.3 (Penetration Testing)", coverage: "Full" },
      { requirement: "NIST SP 800-53 — CA-8 (Penetration Testing), SI-4 (System Monitoring)", coverage: "Full" },
    ],
    kpis: [
      { kpi: "Security Validation Frequency", before: "Annual", after: "Daily" },
      { kpi: "Attack Coverage (MITRE ATT&CK)", before: "15%", after: "95%" },
      { kpi: "Detection Gaps", before: "Unknown", after: "Identified & Prioritized" },
      { kpi: "Security Effectiveness Score", before: "60%", after: "95%" },
      { kpi: "Mean Validation Time", before: "Weeks", after: "Minutes" },
      { kpi: "Attack Path Visibility", before: "None", after: "Full Graph" },
      { kpi: "Defense Tuning Accuracy", before: "Guesswork", after: "Data-Driven" },
      { kpi: "Security ROI Quantification", before: "None", after: "Continuous" },
    ],
    benefits: [
      "Continuous, automated security validation 24×7",
      "Real-time detection and prevention gap identification",
      "Complete MITRE ATT&CK coverage (14 tactics, 200+ techniques)",
      "AI-specific attack path discovery",
      "Quantified security effectiveness metrics",
      "Data-driven security investment decisions",
      "Board-level risk and effectiveness dashboards",
      "Dramatically reduced mean time to discover security weaknesses",
    ],
    timeline: "6–10 Weeks (Deployment) → Ongoing (Continuous Simulation) | Phase 1: Environment Profiling & Integration (Wks 1–3) → Phase 2: Attack Scenario Configuration (Wks 2–4) → Phase 3: AI Attack Agent Deployment (Wks 3–5) → Phase 4: Dashboard & Reporting (Wks 4–6) → Phase 5: Continuous Operation",
  },
  {
    id: "threat-hunting",
    number: "07",
    title: "Autonomous Threat Hunting Platform",
    nistFunction: "DETECT (DE)",
    nistColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    description:
      "Deploy AI-driven autonomous threat hunters that continuously search for indicators of compromise, anomalous behaviors, insider threats, ransomware activity, advanced persistent threats, and AI-specific threat indicators across the enterprise environment. Powered by behavioral analytics, machine learning, and autonomous AI reasoning.",
    statementOfValue:
      "Find attackers before they trigger an incident — hunt threats proactively, not reactively.",
    before: [
      "Threat hunting is manual, ad hoc, and analyst-dependent",
      "Limited hunting coverage (20% of environment)",
      "High false positive rates consuming analyst time",
      "Insider threats discovered weeks or months after activity",
      "AI-specific threats (model compromise, data poisoning) not hunted",
      "APT dwell time averaging 200+ days",
    ],
    situation:
      "Sophisticated attackers evade automated detection by living off the land, using legitimate credentials, and exploiting trusted processes. AI-specific threats — model compromise, data poisoning, agent manipulation — generate subtle indicators that traditional detection misses entirely. Autonomous AI threat hunters can continuously generate and test hypotheses at machine scale.",
    components: [
      {
        id: "hypothesis", title: "7.1 Autonomous Hypothesis Generation",
        bullets: ["AI-generated hunting hypotheses based on threat intelligence, TTP analysis, and environmental context", "MITRE ATT&CK-driven hunting hypothesis library", "AI threat intelligence integration (dark web, vulnerability databases, AI-specific threat feeds)", "Automated hypothesis prioritization by likelihood and impact"],
      },
      {
        id: "ueba", title: "7.2 Behavioral Analytics & Anomaly Detection",
        bullets: ["User and entity behavior analytics (UEBA) for AI system interactions", "AI model behavior baseline and anomaly detection", "Data flow anomaly detection (unusual data access by AI systems)", "Agent behavior deviation detection", "API call pattern analysis"],
      },
      {
        id: "ai-hunt", title: "7.3 AI-Specific Threat Hunting",
        bullets: ["Model compromise indicator detection", "Data poisoning signal identification", "Prompt injection pattern hunting in production logs", "AI agent abuse pattern detection", "Unauthorized model access and extraction attempt detection", "LLM abuse and misuse pattern detection"],
      },
      {
        id: "insider", title: "7.4 Insider Threat Hunting",
        bullets: ["Privileged user behavior analysis", "Data exfiltration indicator hunting", "Credential abuse detection", "Shadow IT and shadow AI detection"],
      },
      {
        id: "apt", title: "7.5 Advanced Persistent Threat (APT) Hunting",
        bullets: ["Nation-state TTP-based hunting campaigns", "Living-off-the-land technique detection", "Covert channel identification", "Long-duration compromise indicator hunting"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC4.1 (Monitoring), CC7.1 (System Operations), CC7.2 (Anomaly Evaluation)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.25 (Assessment & Decision on InfoSec Events), A.8.16 (Monitoring)", coverage: "Full" },
      { requirement: "DORA — Article 10 (Detection)", coverage: "Full" },
      { requirement: "NIST SP 800-53 — SI-4 (System Monitoring), AU-6 (Audit Record Review)", coverage: "Full" },
    ],
    kpis: [
      { kpi: "Threat Discovery Time", before: "Weeks", after: "Hours" },
      { kpi: "False Positives", before: "High", after: "Reduced 70%" },
      { kpi: "Threat Hunting Coverage", before: "20%", after: "95%" },
      { kpi: "Insider Threat Detection", before: "Limited", after: "Continuous" },
      { kpi: "APT Dwell Time", before: "200+ Days", after: "<30 Days" },
      { kpi: "Hunting Hypotheses per Week", before: "5–10 (manual)", after: "500+ (AI-Generated)" },
      { kpi: "AI-Specific Threat Visibility", before: "None", after: "Comprehensive" },
    ],
    benefits: [
      "Early threat detection before incident impact",
      "Proactive defense posture",
      "Comprehensive environment visibility",
      "Reduced breach probability and dwell time",
      "AI-specific threat detection capability",
      "Continuous insider threat monitoring",
      "Reduced analyst workload through AI automation",
    ],
    timeline: "6–8 Weeks (Deployment) → Ongoing (Continuous Hunting) | Phase 1: Telemetry Integration & Baseline (Wks 1–2) → Phase 2: Hunting Hypothesis & Playbook Development (Wks 2–4) → Phase 3: AI Hunter Deployment & Tuning (Wks 3–6) → Phase 4: Validation & Optimization (Wks 5–8)",
  },
  {
    id: "ai-mdr",
    number: "08",
    title: "AI Managed Detection & Response (AI-MDR)",
    nistFunction: "DETECT (DE) + RESPOND (RS)",
    nistColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    description:
      "AI-powered Managed Detection and Response service leveraging autonomous threat analysis, behavioral analytics, attack correlation, automated triage, intelligent investigation, and response orchestration — operating 24×7×365 with AI analysts augmenting human expertise.",
    statementOfValue:
      "Detect and respond to threats at machine speed, with human expertise where it matters most.",
    before: [
      "SOC analyst shortage (3.5M unfilled cybersecurity positions globally)",
      "Alert fatigue overwhelming remaining analysts",
      "Mean time to detect: hours to days",
      "Mean time to respond: days to weeks",
      "High operational costs for 24×7 SOC coverage",
      "Traditional MDR lacking AI-specific detection capabilities",
    ],
    situation:
      "Enterprise security operations generate millions of daily events. Human analysts cannot keep pace. AI-MDR combines autonomous AI analysts that handle L1 triage, L2 investigation, and initial response with human experts providing strategic oversight, complex incident handling, and adversarial resilience.",
    components: [
      {
        id: "detection", title: "8.1 AI-Powered Detection Engine",
        bullets: ["Multi-signal detection correlation across endpoints, network, cloud, identity, and AI systems", "AI/ML-based behavioral detection models", "AI-specific threat detection (model compromise, data poisoning, agent abuse)", "Custom detection rule development and optimization"],
      },
      {
        id: "triage", title: "8.2 Autonomous Triage & Investigation",
        bullets: ["AI analyst-driven alert triage (L1 automation: 80%+)", "Automated investigation and evidence collection", "Attack chain reconstruction and timeline analysis", "Contextual enrichment with threat intelligence and asset criticality", "False positive elimination through AI reasoning"],
      },
      {
        id: "response", title: "8.3 Automated Response Orchestration",
        bullets: ["Automated containment actions (host isolation, account disable, network quarantine)", "Response playbook orchestration across SOAR platforms", "AI-specific response actions (model endpoint shutdown, agent suspension, RAG isolation)", "Escalation workflows for human-in-the-loop decision making"],
      },
      {
        id: "experts", title: "8.4 24×7 Expert Oversight",
        bullets: ["Human security experts providing strategic oversight", "Complex incident handling and advanced threat response", "Threat hunting integration and proactive search", "Regular threat briefings and posture updates"],
      },
      {
        id: "reporting", title: "8.5 AI-MDR Reporting & Metrics",
        bullets: ["Real-time security operations dashboard", "Detection and response metrics (MTTD, MTTR, containment time)", "Threat trend analysis and intelligence briefings", "Board-level risk summaries"],
      },
    ],
    regulatory: [
      { requirement: "NIST CSF 2.0 — Detect (DE.AE, DE.CM), Respond (RS.AN, RS.MI, RS.CO)", coverage: "Full" },
      { requirement: "SOC 2 TSC — CC7.1 (System Operations), CC7.2 (Anomaly Evaluation), CC7.3 (Incident Response)", coverage: "Full" },
      { requirement: "ISO 27001 — A.5.24, A.5.25, A.5.26 (Incident Response), A.8.16", coverage: "Full" },
      { requirement: "DORA — Article 10 (Detection), Article 11 (Response & Recovery)", coverage: "Full" },
      { requirement: "PCI-DSS 4.0 — Req 12.10 (Incident Response)", coverage: "Full" },
      { requirement: "HIPAA — §164.308(a)(6) (Security Incident Procedures)", coverage: "Full" },
      { requirement: "NIST SP 800-61 (Incident Handling)", coverage: "Full" },
    ],
    kpis: [
      { kpi: "Mean Time to Detect (MTTD)", before: "8 Hours", after: "5 Minutes" },
      { kpi: "Mean Time to Respond (MTTR)", before: "2 Days", after: "20 Minutes" },
      { kpi: "Analyst Productivity", before: "Baseline", after: "5X" },
      { kpi: "Alert Fatigue", before: "High", after: "Low" },
      { kpi: "Incident Containment Time", before: "Hours", after: "Minutes" },
      { kpi: "L1 Triage Automation", before: "0%", after: "80%+" },
      { kpi: "24×7 Coverage Cost", before: "Very High", after: "Optimized" },
      { kpi: "AI-Specific Threat Detection", before: "None", after: "Comprehensive" },
    ],
    benefits: [
      "Machine-speed detection and response",
      "Dramatically reduced MTTD and MTTR",
      "Eliminated alert fatigue",
      "24×7 coverage without SOC scaling costs",
      "AI-specific threat detection and response",
      "Human expertise applied to highest-value activities",
      "Quantified security operations performance",
    ],
    timeline: "Ongoing MDR Service | Onboarding: 4–6 Weeks | Phase 1: Telemetry Integration (Wks 1–2) → Phase 2: Detection Tuning (Wks 2–3) → Phase 3: Playbook Configuration (Wks 3–4) → Phase 4: Full Operations Go-Live (Wks 4–6)",
  },
];

// ─── NIST CSF Colours ─────────────────────────────────────────────────────────

const nistFunctionBadge: Record<string, string> = {
  "GOVERN (GV)": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "IDENTIFY (ID)": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "IDENTIFY (ID) + PROTECT (PR)": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  "PROTECT (PR)": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "DETECT (DE) + IDENTIFY (ID)": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "DETECT (DE)": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "DETECT (DE) + RESPOND (RS)": "bg-orange-500/15 text-orange-300 border-orange-500/30",
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

function RegulatoryTable({ rows }: { rows: RegulatoryRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface/60 border-b border-border/40">
            <th className="text-left px-4 py-3 font-semibold text-foreground">Regulatory / Framework Requirement</th>
            <th className="text-left px-4 py-3 font-semibold text-emerald-400 w-24">Coverage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
              <td className="px-4 py-3 text-foreground/75">{row.requirement}</td>
              <td className="px-4 py-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.coverage === "Full" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" : "bg-primary/10 text-primary border border-primary/20"}`}>
                  {row.coverage}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OfferingSection({ offering }: { offering: ShieldOffering }) {
  const badgeClass = nistFunctionBadge[offering.nistFunction] ?? "bg-primary/10 text-primary border-primary/20";

  return (
    <section id={offering.id} className="py-24 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-5xl font-black leading-none font-display bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
              {offering.number}
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badgeClass}`}>
              NIST CSF 2.0 — {offering.nistFunction}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-4">{offering.title}</h2>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">{offering.description}</p>
        </motion.div>

        {/* Statement of Value */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Statement of Value</p>
              <p className="text-xl font-medium text-foreground leading-relaxed">{offering.statementOfValue}</p>
            </div>
          </div>
        </motion.div>

        {/* Before / Situation */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-4">Before</h3>
            <ul className="space-y-2">
              {offering.before.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400/60 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-4">Situation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{offering.situation}</p>
          </div>
        </motion.div>

        {/* Service Components */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" /> Service Components
          </h3>
          <div className="space-y-4">
            {offering.components.map((comp, i) => (
              <motion.div key={comp.id} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border/40 bg-surface/20 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 border-b border-border/30 bg-surface/30 border-l-2 border-l-primary/50">
                  <span className="text-xl font-black leading-none font-display shrink-0 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent min-w-[2rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-semibold text-foreground text-sm">{comp.title}</h4>
                </div>
                <div className="px-5 py-4">
                  <ul className="space-y-1.5">
                    {comp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                        <div className="h-1 w-1 rounded-full bg-accent shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regulatory Alignment */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" /> Regulatory Alignment Matrix
          </h3>
          <RegulatoryTable rows={offering.regulatory} />
        </motion.div>

        {/* KPI Table */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" /> Key Performance Indicators — Before vs. After
          </h3>
          <KpiTable kpis={offering.kpis} />
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" /> Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            {offering.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-lg px-4 py-3 border border-border/30 bg-surface/20">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl border border-border/50 bg-surface/20 p-6">
          <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3">Engagement Timeline</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{offering.timeline}</p>
        </motion.div>

      </div>
    </section>
  );
}

// ─── OWASP Coverage Table ─────────────────────────────────────────────────────

const owaspRows = [
  { risk: "LLM01: Prompt Injection", control: "Input validation, prompt isolation, context management" },
  { risk: "LLM02: Insecure Output Handling", control: "Output filtering, content safety, sandboxed rendering" },
  { risk: "LLM03: Training Data Poisoning", control: "Data provenance, integrity verification, anomaly detection" },
  { risk: "LLM04: Model Denial of Service", control: "Rate limiting, resource monitoring, input size limits" },
  { risk: "LLM05: Supply Chain Vulnerabilities", control: "Model provenance, dependency scanning, AI-BOM" },
  { risk: "LLM06: Sensitive Information Disclosure", control: "PII redaction, access controls, output filtering" },
  { risk: "LLM07: Insecure Plugin Design", control: "Plugin sandboxing, least privilege, input validation" },
  { risk: "LLM08: Excessive Agency", control: "Action boundaries, human-in-the-loop, kill switches" },
  { risk: "LLM09: Overreliance", control: "Confidence scoring, source attribution, human review" },
  { risk: "LLM10: Model Theft", control: "Extraction prevention, access controls, watermarking" },
];

const atlasRows = [
  { technique: "AML.T0051 — LLM Prompt Injection", coverage: "Full" },
  { technique: "AML.T0054 — LLM Jailbreak", coverage: "Full" },
  { technique: "AML.T0024 — Exfiltration via ML Inference API", coverage: "Full" },
  { technique: "AML.T0043 — Craft Adversarial Data", coverage: "Full" },
  { technique: "AML.T0020 — Poison Training Data", coverage: "Full" },
  { technique: "AML.T0044 — Full ML Model Access", coverage: "Full" },
  { technique: "AML.T0048 — Plugin Compromise", coverage: "Full" },
  { technique: "AML.T0034 — Logical Backdoor", coverage: "Full" },
];

function CoverageSection() {
  return (
    <section id="coverage-matrices" className="py-24 bg-surface/10 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Coverage Matrices</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-4">OWASP LLM Top 10 & MITRE ATLAS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">Complete countermeasure mapping across the two leading AI security frameworks.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* OWASP */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-accent" /> OWASP Top 10 for LLM Applications
            </h3>
            <div className="rounded-xl border border-border/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface/60 border-b border-border/40">
                    <th className="text-left px-4 py-3 font-semibold text-foreground/80 w-2/5">OWASP LLM Risk</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground/80">AI Shield™ Countermeasure</th>
                  </tr>
                </thead>
                <tbody>
                  {owaspRows.map((row, i) => (
                    <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
                      <td className="px-4 py-3 font-medium text-primary text-xs">{row.risk}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{row.control}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MITRE ATLAS */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-red-400" /> MITRE ATLAS — Attack Technique Coverage
            </h3>
            <div className="rounded-xl border border-border/60 overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface/60 border-b border-border/40">
                    <th className="text-left px-4 py-3 font-semibold text-foreground/80">MITRE ATLAS Technique</th>
                    <th className="text-left px-4 py-3 font-semibold text-emerald-400 w-24">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {atlasRows.map((row, i) => (
                    <tr key={i} className={`border-b border-border/20 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`}>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{row.technique}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">{row.coverage}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* NIST CSF 2.0 Function legend */}
            <div className="rounded-xl border border-border/50 bg-surface/20 p-5">
              <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">NIST CSF 2.0 Function Coverage</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { fn: "GOVERN", color: "bg-violet-500/15 text-violet-300 border-violet-500/30" },
                  { fn: "IDENTIFY", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
                  { fn: "PROTECT", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
                  { fn: "DETECT", color: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
                  { fn: "RESPOND", color: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
                  { fn: "RECOVER", color: "bg-rose-500/15 text-rose-300 border-rose-500/30" },
                ].map((f) => (
                  <span key={f.fn} className={`text-xs font-bold px-2.5 py-1 rounded-full border ${f.color}`}>{f.fn}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">All 6 NIST CSF 2.0 functions covered across the AI Shield™ portfolio. Additional offerings (O9–O15) cover RESPOND, RECOVER, and Quantum-Safe readiness.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/ai-security")({
  head: () => ({
    meta: [
      { title: "AI Shield™ — Comprehensive AI Security Services Portfolio | Summit AI Architects" },
      { name: "description", content: "15-offering AI security portfolio: NIST CSF 2.0 aligned, SOC 2 compliant, Quantum-Safe ready. Covering AI-GRC, red teaming, Zero Trust, BAS, MDR, threat hunting, LLM/Agent/RAG security, and sovereign AI platforms." },
      { property: "og:title", content: "AI Shield™ — AI Security Services Portfolio | Summit AI Architects" },
      { property: "og:description", content: "End-to-end AI security value chain: governance, adversarial testing, Zero Trust, breach simulation, autonomous threat hunting, and AI-MDR." },
      { property: "og:url", content: "/ai-security" },
    ],
    links: [{ rel: "canonical", href: "/ai-security" }],
  }),
  component: AiSecurityPage,
});

function AiSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Shield™ — AI Security Services Portfolio"
        title="End-to-End AI Security Value Chain"
        description="15 integrated security offerings spanning the complete AI security lifecycle — from governance and identification through protection, detection, response, recovery, and quantum-safe readiness. Every offering is NIST CSF 2.0 aligned, SOC 2 compliant, and EU AI Act mapped."
      />

      {/* Summary stats bar */}
      <section className="border-b border-border/40 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "15", label: "Integrated security offerings" },
            { value: "6", label: "NIST CSF 2.0 functions covered" },
            { value: "12+", label: "Regulatory frameworks mapped" },
            { value: "99.9%", label: "Prompt injection block rate" },
          ].map((o) => (
            <div key={o.label}>
              <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">{o.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive summary */}
      <section className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Radio className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Executive Summary</p>
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
                  Traditional cybersecurity services — SOC, SIEM, MDR, and annual penetration testing — cannot address the attack surfaces introduced by enterprise AI systems, LLMs, autonomous agents, RAG pipelines, and agentic workflows. Simultaneously, regulatory bodies worldwide are mandating AI-specific security controls, from the EU AI Act and NIST AI RMF to SOC 2 AI trust criteria and emerging quantum-computing threats.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">AI Shield™</strong> delivers a comprehensive, NIST CSF 2.0-structured portfolio spanning 15 integrated offerings that cover the complete AI security lifecycle — from governance and identification through protection, detection, response, recovery, and quantum-safe readiness. Every offering incorporates AI-driven penetration testing, continuous validation, and multi-framework regulatory alignment.
                </p>
              </div>
            </div>

            {/* Framework badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
              {["NIST CSF 2.0", "NIST AI RMF", "SOC 2 TSC", "ISO 27001", "ISO/IEC 42001", "EU AI Act", "DORA", "PCI-DSS 4.0", "HIPAA", "FedRAMP", "CMMC", "Quantum-Safe (NIST PQC)"].map((f) => (
                <span key={f} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface/80 border border-border/70 text-foreground/80">{f}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky nav */}
      <nav className="border-b border-border/60 bg-background backdrop-blur-md sticky top-16 z-30 shadow-[0_1px_0_hsl(var(--border))]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {offerings.map((o) => (
              <a key={o.id} href={`#${o.id}`}
                className="shrink-0 rounded-md px-3 py-1.5 text-xs text-foreground/70 hover:text-foreground hover:bg-surface/60 transition-colors whitespace-nowrap">
                <span className="font-bold text-primary mr-1">{o.number}</span>
                {o.title.split("(")[0].trim().slice(0, 32)}{o.title.length > 32 ? "…" : ""}
              </a>
            ))}
            <a href="#coverage-matrices"
              className="shrink-0 rounded-md px-3 py-1.5 text-xs text-foreground/70 hover:text-foreground hover:bg-surface/60 transition-colors whitespace-nowrap border-l border-border/60 ml-2 pl-4">
              Coverage Matrices
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-background">
        {offerings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      <CoverageSection />
      <CTA />
    </>
  );
}
