import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import {
  Radio,
  Zap,
  Shield,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Gauge,
  Clock,
  Network,
  Activity,
  Eye,
  Crosshair,
  Maximize2,
  CloudRain,
  Landmark,
  Phone,
  Server,
  Hammer,
  HeartPulse,
  GraduationCap,
  Globe,
  Truck,
  FileText,
  Search,
  Filter,
  X,
  Target,
  BarChart3,
  TrendingUp,
  Users,
  Layers,
  ArrowUpRight,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ANALYTICS_CONFIG } from "@/lib/analytics/index";

export const Route = createFileRoute("/solutions/free-space-optics")({
  head: () => ({
    meta: [
      { title: "Free Space Optics (FSO) Solutions & Advisory | TRUSTGRID.AI" },
      {
        name: "description",
        content:
          "Explore Free Space Optics solutions with TRUSTGRID.AI for enterprise connectivity, FSO feasibility, network design, deployment, integration, monitoring, and optimization.",
      },
      {
        name: "keywords",
        content:
          "Free Space Optics, FSO solutions, FSO connectivity, Free Space Optical Communication, FSO network solutions, FSO deployment, FSO site survey, FSO consulting, FSO feasibility assessment, enterprise FSO connectivity, optical wireless communication",
      },
      { property: "og:title", content: "Free Space Optics (FSO) Enterprise Connectivity & Advisory | TRUSTGRID.AI" },
      {
        property: "og:description",
        content:
          "High-Speed Wireless Optical Connectivity Without Cables. Technology Advisory, Network Engineering, FSO Solution Design, Deployment & Optimization.",
      },
      { property: "og:url", content: "/solutions/free-space-optics" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/solutions/free-space-optics" }],
  }),
  component: FreeSpaceOpticsPage,
});

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */

interface KpiRow {
  kpi: string;
  impact: string;
  context: string;
}

interface Phase {
  name: string;
  duration: string;
  activities: string[];
  output: string;
}

interface Deliverable {
  name: string;
  description: string;
  audience: string;
}

interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

interface CaseStudy {
  title: string;
  profile: string;
  challenge: string;
  optimizations: string[];
  results: CaseStudyResult[];
  quote?: { text: string; attribution: string };
}

interface FsoOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  statementOfValue: string;
  kpis: KpiRow[];
  benefits: { title: string; description: string }[];
  phases: Phase[];
  totalDuration: string;
  deliverables: Deliverable[];
  caseStudies: CaseStudy[];
}

interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  icon: any;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

/* ─── OFFERINGS DATA ────────────────────────────────────────────────────────── */

const fsoOfferings: FsoOffering[] = [
  {
    id: "fso-strategy-feasibility",
    number: "01",
    title: "FSO Strategy, Site Survey & Feasibility Engineering",
    description:
      "A rigorous engineering evaluation that maps line-of-sight path geometry, distance constraints, structural stability, and atmospheric climate profiles to convert optical connectivity potential into a deterministic strategy.",
    statementOfValue:
      "De-risk optical wireless deployment — establishing 99.999% availability projections while bypassing $500K+ in civil fiber trenching costs.",
    kpis: [
      { kpi: "Site Feasibility Accuracy", impact: "100%", context: "3D LiDAR path geometry & line-of-sight validation" },
      { kpi: "Civil Trenching Cost Saved", impact: "-60% to -90%", context: "Eliminated municipal permits and road disruption" },
      { kpi: "Feasibility Assessment Turnaround", impact: "< 5 Days", context: "From initial coordinates to comprehensive report" },
      { kpi: "SLA Availability Modeling", impact: "99.99% - 99.999%", context: "Engineered link margins based on local fog data" },
      { kpi: "Right-of-Way Permit Delays", impact: "Eliminated", context: "100% wireless optical path across public roads" },
    ],
    benefits: [
      { title: "3D Line-of-Sight Path Modeling", description: "Precision LiDAR and elevation analysis ensuring zero optical obstructions between endpoints." },
      { title: "Atmospheric Climate Profiling", description: "Historical fog, rain, dust, and solar glare modeling to design weather-resilient link margins." },
      { title: "Structural Sway Analysis", description: "Roof and tower structural vibration measurements ensuring terminal mounting integrity under high wind loads." },
      { title: "Vendor-Agnostic Hardware Selection", description: "Objective technology recommendation matching bandwidth, distance, and environmental needs." },
    ],
    phases: [
      {
        name: "Phase 1: Line-of-Sight & Geographic Survey",
        duration: "1–2 days",
        activities: [
          "GPS coordinate verification & high-resolution 3D line-of-sight path analysis",
          "Elevation, Fresnel zone clearance, and physical obstruction evaluation",
          "Structural mounting location inspection (roof parapets, masts, towers)",
        ],
        output: "Line-of-Sight Path Geometry Map & Structural Assessment.",
      },
      {
        name: "Phase 2: Climate & Atmospheric Attenuation Analysis",
        duration: "2–3 days",
        activities: [
          "Historical microclimate data analysis (dense fog frequency, precipitation rates)",
          "Optical link margin calculation for target availability (99.99% vs 99.999%)",
          "Solar interference and ambient light vector positioning",
        ],
        output: "Atmospheric Link Margin & Climate Resilience Report.",
      },
      {
        name: "Phase 3: Financial & Technical Feasibility Report",
        duration: "2 days",
        activities: [
          "TCO comparison: FSO vs Leased Fiber vs Microwave RF",
          "Terminal hardware specification & auto-tracking requirement determination",
          "Drafting deployment roadmap and risk mitigation framework",
        ],
        output: "Executive FSO Strategy & Feasibility Master Document.",
      },
    ],
    totalDuration: "1 Week",
    deliverables: [
      { name: "LiDAR Line-of-Sight Path Atlas", description: "High-precision 3D optical path clearance diagram", audience: "Network Engineering" },
      { name: "Atmospheric Link Margin Matrix", description: "Weather attenuation modeling and target SLA link budget", audience: "VP Infrastructure / CTO" },
      { name: "FSO TCO & ROI Financial Model", description: "Comparative cost analysis against physical fiber trenching", audience: "Finance & Procurement" },
      { name: "Terminal Specification Guide", description: "Detailed hardware, mounting, and interface specifications", audience: "Operations Team" },
    ],
    caseStudies: [
      {
        title: "Global Financial Services — Metro HQ Campus",
        profile: "Major banking institution connecting two high-rise towers separated by a 6-lane urban highway.",
        challenge: "City permit delays for fiber trenching exceeded 14 months with quotes over $750,000. Microwave RF lacked required bandwidth and security.",
        optimizations: [
          "Performed 3D optical path modeling accounting for high-rise wind sway",
          "Engineered 10Gbps FSO point-to-point architecture with dual-laser redundancy",
          "Designed sub-milliradian auto-tracking mounts to absorb structural sway",
        ],
        results: [
          { metric: "Deployment Time", before: "14+ months (Fiber)", after: "4 days (FSO)", improvement: "99% faster" },
          { metric: "Infrastructure Capex", before: "$750,000", after: "$85,000", improvement: "-88% cost" },
          { metric: "Link Bandwidth", before: "1 Gbps Leased", after: "10 Gbps Native", improvement: "10x capacity" },
          { metric: "RF Spectrum Cost", before: "Licensed RF", after: "$0 (License-Free)", improvement: "100% free" },
        ],
        quote: {
          text: "TRUSTGRID.AI's optical survey allowed us to bypass a 14-month municipal permit delay and go live in less than a week.",
          attribution: "Head of Infrastructure, Global Financial Group",
        },
      },
    ],
  },
  {
    id: "fso-network-architecture",
    number: "02",
    title: "Point-to-Point FSO Network Architecture & Failover Engineering",
    description:
      "Designing multi-gigabit wireless optical network topologies with sub-millisecond transmission latency, auto-tracking beam alignment, and seamless carrier-grade fallback integration.",
    statementOfValue:
      "Deliver 1Gbps to 10Gbps+ optical speed through free space with <50ms failover routing — ensuring continuous network resilience.",
    kpis: [
      { kpi: "Optical Bandwidth Speed", impact: "1 Gbps – 10 Gbps+", context: "Full-duplex uncompressed throughput" },
      { kpi: "Transmission Latency", impact: "< 1 ms", context: "Sub-millisecond optical propagation speed" },
      { kpi: "Carrier Failover Speed", impact: "< 50 ms", context: "Sub-50ms automated backup path switching" },
      { kpi: "RF Interference Susceptibility", impact: "0%", context: "Immune to radio frequency noise & jamming" },
      { kpi: "Data Interception Risk", impact: "Zero Beam Leakage", context: "Narrow directional optical beam physics" },
    ],
    benefits: [
      { title: "Sub-Millisecond Speed", description: "Light-speed data transmission matching physical fiber optic cable performance." },
      { title: "Carrier-Grade Automatic Failover", description: "Seamless switching to secondary fiber or RF routes in under 50ms upon weather degradation." },
      { title: "Zero RF Spectrum Licensing", description: "Operates in unregulated optical spectrum, avoiding costly spectrum auction fees." },
      { title: "Air-Gapped Physical Security", description: "Impossible to intercept without physically breaking the optical beam path." },
    ],
    phases: [
      {
        name: "Phase 1: Network Topology & Bandwidth Design",
        duration: "3–5 days",
        activities: [
          "Designing point-to-point, ring, or mesh FSO network topology",
          "Selecting optical wavelength (850nm vs 1550nm for eye safety & fog resistance)",
          "Interface mapping (SFP+/QSFP28 direct switch binding)",
        ],
        output: "FSO Network Architecture Blueprint & Topology Diagram.",
      },
      {
        name: "Phase 2: Redundancy & Dynamic Failover Logic",
        duration: "3–4 days",
        activities: [
          "Configuring LACP / BGP / OSPF dynamic failover protocols",
          "Setting up secondary path thresholds based on real-time RSSI metrics",
          "Lab simulation of atmospheric degradation failover events",
        ],
        output: "Network Redundancy & Carrier Failover Configuration Package.",
      },
      {
        name: "Phase 3: Integration & Security Validation",
        duration: "2–3 days",
        activities: [
          "VLAN, MPLS, and zero-trust security policy alignment",
          "Latency & jitter benchmarking under full-load traffic",
          "Final architecture approval and sign-off",
        ],
        output: "Validated FSO Network Engineering Specification.",
      },
    ],
    totalDuration: "2 Weeks",
    deliverables: [
      { name: "FSO Network Topology Blueprint", description: "Comprehensive network diagram with switch bindings", audience: "Network Architects" },
      { name: "Dynamic Failover Configuration Guide", description: "Router failover policies and threshold parameters", audience: "Network Operations" },
      { name: "Optical Security & Compliance Spec", description: "Physical & cryptographic security validation doc", audience: "CISO / Security Team" },
    ],
    caseStudies: [
      {
        title: "Hyperscale Data Center Interconnect (DCI)",
        profile: "Data center operator needing rapid point-to-point link between two facilities 1.2km apart.",
        challenge: "Existing fiber route ran through a vulnerable construction zone prone to accidental cuts.",
        optimizations: [
          "Deployed dual 10Gbps FSO links across an independent aerial optical vector",
          "Configured sub-50ms failover between FSO primary and underground fiber secondary",
          "Implemented automated auto-tracking for dynamic building thermal alignment",
        ],
        results: [
          { metric: "Path Latency", before: "2.4 ms (Rerouted Fiber)", after: "0.4 ms (Direct FSO)", improvement: "6x faster" },
          { metric: "Network Uptime", before: "99.8% (Frequent cuts)", after: "99.999%", improvement: "Zero outages" },
          { metric: "Failover Transition", before: "Manual (Minutes)", after: "Automatic (<35 ms)", improvement: "Imperceptible" },
        ],
      },
    ],
  },
  {
    id: "fso-deployment-integration",
    number: "03",
    title: "FSO Turnkey Deployment, Mounting & Optical Alignment",
    description:
      "Turnkey physical installation, precise sub-milliradian optical terminal alignment, environmental enclosure hardening, and integration with existing enterprise switch infrastructure.",
    statementOfValue:
      "Rapid turnkey deployment completed in 1 to 3 days — zero downtime, zero civil excavation, and certified Class 1 eye-safe optical operation.",
    kpis: [
      { kpi: "Physical Deployment Time", impact: "1 – 3 Days", context: "From mounting bracket setup to live link" },
      { kpi: "Beam Alignment Precision", impact: "< 0.5 mrad", context: "Sub-milliradian fine optical alignment" },
      { kpi: "Network Integration Window", impact: "< 4 Hours", context: "Zero disruption to existing production LAN" },
      { kpi: "Laser Safety Standard", impact: "Class 1 / 1M", context: "100% Eye-Safe certified optical hardware" },
      { kpi: "Weather Enclosure Rating", impact: "IP66 / IP67", context: "Hardened against extreme rain & dust" },
    ],
    benefits: [
      { title: "Non-Invasive Structural Mounting", description: "Custom rooftop and wall mounts preserving building envelope and warranty integrity." },
      { title: "Sub-Milliradian Fine Alignment", description: "Precision optical scope and electronic RSSI alignment ensuring maximum signal strength." },
      { title: "Enterprise Router Compatibility", description: "Direct SFP+/QSFP+ fiber patch connection into Cisco, Arista, and Juniper switches." },
      { title: "Class 1 Eye-Safety Certified", description: "Compliant with international laser safety standards for unrestricted public deployment." },
    ],
    phases: [
      {
        name: "Phase 1: Mechanical Mounting & Power Setup",
        duration: "1 day",
        activities: [
          "Installing rigid, vibration-damped mounting brackets and mast assemblies",
          "Deploying outdoor-rated shielded Power-over-Ethernet (PoE) cabling",
          "Mounting optical transceiver terminals and weather housings",
        ],
        output: "Installed Terminal Mounting Hardware & Power Inspection.",
      },
      {
        name: "Phase 2: Optical Coarse & Fine Alignment",
        duration: "1 day",
        activities: [
          "Coarse optical scope alignment along line-of-sight vector",
          "Electronic fine alignment maximizing Rx optical power (dBm)",
          "Activating active auto-tracking & motorization mechanisms",
        ],
        output: "Optical Alignment & Signal Strength Certification.",
      },
      {
        name: "Phase 3: Integration, Bit-Error-Rate & Acceptance Testing",
        duration: "1 day",
        activities: [
          "24-hour Bit Error Rate Testing (BERT) at full rated bandwidth",
          "Ethernet switch port binding and failover trigger validation",
          "Handoff of operational documentation & monitoring dashboard",
        ],
        output: "Commissioned FSO Link Acceptance Certificate.",
      },
    ],
    totalDuration: "3 Days",
    deliverables: [
      { name: "As-Built Installation Documentation", description: "Mounting, cabling, and structural layout schematics", audience: "Facilities & Infrastructure" },
      { name: "Optical Alignment & BERT Test Certificate", description: "Signal quality verification & error-rate report", audience: "Network Operations" },
      { name: "Maintenance & Recalibration Manual", description: "Standard operating procedures for periodic checks", audience: "Site Maintenance Team" },
    ],
    caseStudies: [
      {
        title: "Industrial Manufacturing Complex",
        profile: "Automotive assembly plant connecting main facility with logistics warehouse across active rail lines.",
        challenge: "Heavy machinery created severe electromagnetic interference (EMI). Railroad authority prohibited cable overheads or underground trenching.",
        optimizations: [
          "Mounted IP67-rated optical terminals on factory roof parapets",
          "Connected optical link directly to core industrial switch fabric via SFP+",
          "Activated thermal compensation auto-tracking for summer heat waves",
        ],
        results: [
          { metric: "Installation Window", before: "6 months (Rail permit)", after: "2 days (FSO)", improvement: "Immediate" },
          { metric: "EMI Signal Distortion", before: "Severe (RF dropouts)", after: "0% (Optical)", improvement: "100% clean" },
          { metric: "Logistics Data Sync", before: "Manual batching", after: "Real-time 10Gbps", improvement: "Instant" },
        ],
      },
    ],
  },
  {
    id: "fso-monitoring-optimization",
    number: "04",
    title: "FSO Telemetry, Proactive Monitoring & Lifecycle Optimization",
    description:
      "Continuous 24/7 telemetry monitoring of optical signal strength (RSSI), atmospheric attenuation, thermal drift, and automated maintenance recalibration.",
    statementOfValue:
      "Maintain 99.999% SLA availability through real-time optical telemetry — reducing unscheduled link downtime by over 85%.",
    kpis: [
      { kpi: "Telemetry Monitoring Interval", impact: "Real-Time (< 1s)", context: "Continuous tracking of RSSI, SNR, temperature" },
      { kpi: "Unscheduled Link Downtime", impact: "-85%", context: "Predictive alerts prior to signal loss" },
      { kpi: "Recalibration Response Time", impact: "< 2 Hours", context: "Automated or remote motor realignment" },
      { kpi: "Long-Term SLA Compliance", impact: "99.999%", context: "Validated across multi-year weather cycles" },
      { kpi: "Maintenance Cost Reduction", impact: "-50%", context: "Elimination of unnecessary physical truck rolls" },
    ],
    benefits: [
      { title: "24/7 Optical Telemetry", description: "Real-time visibility into receive power (dBm), signal-to-noise ratio, and internal transceiver temperature." },
      { title: "Predictive Degradation Alerts", description: "Automated alerts triggered when atmospheric fog or optics dirtying approaches safety margins." },
      { title: "Automated Motorized Realignment", description: "Remote electronic beam re-centering to compensate for seasonal building thermal shifts." },
      { title: "Annual Optical Health Audit", description: "Comprehensive annual physical lens cleaning, alignment check, and throughput benchmark." },
    ],
    phases: [
      {
        name: "Phase 1: Telemetry Sensor Integration & Baseline",
        duration: "2–3 days",
        activities: [
          "SNMP/REST API integration with enterprise NMS (Datadog, SolarWinds, Zabbix)",
          "Establishing baseline optical receive power (Rx dBm) thresholds",
          "Configuring automated alert escalation rules",
        ],
        output: "Integrated FSO Telemetry & Monitoring System.",
      },
      {
        name: "Phase 2: Proactive Health Management",
        duration: "Ongoing",
        activities: [
          "Continuous analysis of weather events vs link margin degradation",
          "Automated secondary path switching triggers",
          "Remote optical head motor adjustments for building thermal drift",
        ],
        output: "Monthly Link Performance & Health Analytics Summary.",
      },
      {
        name: "Phase 3: Annual Lifecycle Recalibration",
        duration: "1 day / year",
        activities: [
          "On-site optical lens cleaning and window inspection",
          "Mechanical mount torque check & structural sway re-evaluation",
          "BERT re-certification and capacity expansion planning",
        ],
        output: "Annual Certified Link Audit Report.",
      },
    ],
    totalDuration: "Ongoing Managed Lifecycle",
    deliverables: [
      { name: "FSO Telemetry Integration Package", description: "SNMP MIBs, API connectors, and dashboard templates", audience: "NOC & DevOps Teams" },
      { name: "Monthly Optical Health & SLA Report", description: "Analytics detailing availability, RSSI trends, and weather impact", audience: "Infrastructure Leadership" },
      { name: "Annual Recalibration Audit Certificate", description: "Certified on-site maintenance and alignment validation", audience: "Operations & Compliance" },
    ],
    caseStudies: [
      {
        title: "Regional Healthcare System — Hospital Campus",
        profile: "Hospital network connecting main medical center with emergency outpatient facility.",
        challenge: "Winter fog and heavy snowfall caused occasional optical attenuation on an unmonitored legacy link.",
        optimizations: [
          "Integrated TRUSTGRID.AI real-time RSSI telemetry dashboard with NOC alerts",
          "Configured predictive switching to secondary microwave backup when fog density exceeded link margin",
          "Implemented automated motorized beam auto-tracking",
        ],
        results: [
          { metric: "Unscheduled Outages", before: "4–6 / winter", after: "0", improvement: "100% eliminated" },
          { metric: "EHR Data Availability", before: "99.2%", after: "99.999%", improvement: "Full SLA compliance" },
          { metric: "NOC Visibility", before: "Reactive", after: "Real-time Telemetry", improvement: "Proactive" },
        ],
      },
    ],
  },
];

/* ─── USE CASES MATRIX DATA ─────────────────────────────────────────────────── */

const useCases: UseCaseItem[] = [
  {
    id: "campus-connectivity",
    title: "Enterprise Campus Building Interconnect",
    category: "Campus Connectivity",
    industry: "Corporate / Tech Parks",
    icon: Building2,
    challenge: "Physical roads, parking structures, or third-party property make trenching fiber between corporate buildings prohibitively expensive and slow.",
    solution: "Roof-mounted optical transceivers providing 10Gbps point-to-point links with sub-millisecond latency.",
    outcome: "High-speed campus network established in 2 days without civil ground disruption or municipal road permits.",
    metrics: [
      { label: "Cost Saved", value: "$400K+" },
      { label: "Deploy Time", value: "48 Hours" },
      { label: "Speed", value: "10 Gbps" },
    ],
  },
  {
    id: "fiber-backup",
    title: "Fiber Path Diversity & Network Resilience",
    category: "Fiber Backup",
    industry: "Financial & Enterprise",
    icon: ShieldCheck,
    challenge: "Single underground fiber routes create single points of failure vulnerable to accidental construction cable cuts.",
    solution: "FSO deployed as an isolated, physically distinct secondary optical path through free space.",
    outcome: "True 100% physical path diversity that remains completely immune to underground dig-ins.",
    metrics: [
      { label: "Path Diversity", value: "100% Aerial" },
      { label: "Failover", value: "< 50 ms" },
      { label: "Uptime", value: "99.999%" },
    ],
  },
  {
    id: "data-center-dci",
    title: "Data Center Interconnect (DCI)",
    category: "Data Center",
    industry: "Data Centers / Cloud",
    icon: Server,
    challenge: "Need for rapid facility interconnects between adjacent data centers where fiber conduit expansion takes 6+ months.",
    solution: "Multi-gigabit point-to-point FSO link bridging adjacent facility structures across property boundaries.",
    outcome: "Immediate data path operationalization with ultra-low latency optical transmission.",
    metrics: [
      { label: "Latency", value: "< 0.5 ms" },
      { label: "Time Saved", value: "6 Months" },
      { label: "Bandwidth", value: "10-40 Gbps" },
    ],
  },
  {
    id: "industrial-plant",
    title: "Industrial & Manufacturing Facility Link",
    category: "Industrial",
    industry: "Manufacturing / Energy",
    icon: Hammer,
    challenge: "Heavy machinery, high-voltage transformers, and electromagnetic noise distort wireless RF cables and microwave links.",
    solution: "Optical laser beam links operating between production plants and administrative hubs unaffected by EMI.",
    outcome: "Zero EMI susceptibility with clean, uncompressed multi-gigabit data transfer.",
    metrics: [
      { label: "EMI Noise", value: "0% Impact" },
      { label: "Data Rate", value: "10 Gbps" },
      { label: "Reliability", value: "100%" },
    ],
  },
  {
    id: "smart-cities",
    title: "Municipal & Smart City Optical Backbone",
    category: "Smart Cities",
    industry: "Government / Public Sector",
    icon: Globe,
    challenge: "High-density urban environments where underground utility access is frozen and RF spectrum is completely saturated.",
    solution: "License-free optical wireless links connecting traffic nodes, surveillance hubs, and municipal buildings.",
    outcome: "High-capacity municipal backbone established without adding to crowded radio spectrums.",
    metrics: [
      { label: "Spectrum Cost", value: "$0" },
      { label: "RF Congestion", value: "None" },
      { label: "Security", value: "Class 1 Safe" },
    ],
  },
  {
    id: "temporary-event",
    title: "Rapid Project & Event Connectivity",
    category: "Temporary / Event",
    industry: "Construction / Events",
    icon: Clock,
    challenge: "Short-term construction sites or major event venues require enterprise fiber speeds for 3 to 12 months.",
    solution: "Quick-deploy tripod and mast optical terminals aligned for the project duration and easily relocated.",
    outcome: "Immediate high-capacity link with zero stranded civil cable capital upon project completion.",
    metrics: [
      { label: "Setup Time", value: "4 Hours" },
      { label: "Flexibility", value: "Reusable" },
      { label: "CAPEX Saved", value: "85%" },
    ],
  },
  {
    id: "healthcare-campus",
    title: "Hospital EHR & Imaging Interconnect",
    category: "Healthcare",
    industry: "Healthcare Systems",
    icon: HeartPulse,
    challenge: "Medical imaging (DICOM) and EHR data transfers require high bandwidth across hospital campus buildings.",
    solution: "HIPAA-compliant, air-gapped optical link transferring massive imaging files instantaneously.",
    outcome: "Sub-second radiology file transfers between hospital towers with 100% physical data security.",
    metrics: [
      { label: "Transfer Speed", value: "Sub-second" },
      { label: "Compliance", value: "HIPAA Safe" },
      { label: "Security", value: "Air-gapped" },
    ],
  },
  {
    id: "education-campus",
    title: "University Research & Student Network",
    category: "Education",
    industry: "Higher Education",
    icon: GraduationCap,
    challenge: "Connecting research laboratories across campus roadways without disrupting historic grounds.",
    solution: "Non-invasive optical endpoint mounting preserving historical building facades while delivering 10Gbps.",
    outcome: "Gigabit campus network extension preserving historical architectural compliance.",
    metrics: [
      { label: "Facade Impact", value: "Zero" },
      { label: "Throughput", value: "10 Gbps" },
      { label: "Road Digging", value: "None" },
    ],
  },
];

/* ─── FORM SCHEMA & SUBMISSION ─────────────────────────────────────────────── */

const fsoFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid work email required").max(255),
  company: z.string().trim().min(2, "Company is required").max(150),
  phone: z.string().trim().max(30).optional(),
  organizationType: z.string().trim().min(1, "Please select organization type"),
  connectivityRequirement: z.string().trim().min(1, "Please select connectivity requirement"),
  linkDistance: z.string().trim().min(1, "Please select link distance"),
  currentConnectivity: z.string().trim().min(1, "Please select current setup"),
  message: z.string().trim().min(15, "Please provide brief details (min 15 chars)").max(2000),
});

type FSOFormData = z.infer<typeof fsoFormSchema>;

async function sendFSOLeadToSheet(data: FSOFormData) {
  const payload = [
    {
      type: "LeadForms",
      timestamp: new Date().toISOString(),
      payload: {
        SubmittedAt: new Date().toISOString(),
        FullName: data.name,
        Company: data.company,
        WorkEmail: data.email,
        Phone: data.phone || "",
        OrganizationType: data.organizationType,
        ConnectivityRequirement: data.connectivityRequirement,
        LinkDistance: data.linkDistance,
        CurrentConnectivity: data.currentConnectivity,
        ProjectDescription: `FSO Inquiry - ${data.connectivityRequirement} | Dist: ${data.linkDistance} | Current: ${data.currentConnectivity} | Msg: ${data.message}`,
        Service: "Free Space Optics (FSO)",
        PageURL: window.location.href,
        Referrer: document.referrer || "Direct",
        UTMSource: new URLSearchParams(window.location.search).get("utm_source") || "",
        UTMMedium: new URLSearchParams(window.location.search).get("utm_medium") || "",
        UTMCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        SessionID: sessionStorage.getItem("tg_session_id") || "",
        VisitorID: localStorage.getItem("tg_visitor_id") || "",
        DeviceType: /mobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
        Status: "New Lead",
      },
    },
  ];

  try {
    await fetch(ANALYTICS_CONFIG.ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify(payload),
    });
  } catch {
    const encoded = encodeURIComponent(JSON.stringify(payload));
    const img = new Image();
    img.src = `${ANALYTICS_CONFIG.ENDPOINT}?data=${encoded}`;
  }
}

/* ─── OFFERING SECTION COMPONENT ───────────────────────────────────────────── */

function OfferingSection({ offering }: { offering: FsoOffering }) {
  const [activeTab, setActiveTab] = useState<"kpis" | "benefits" | "phases" | "deliverables" | "caseStudies">("kpis");

  return (
    <section id={offering.id} className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black font-mono text-primary">{offering.number}</span>
              <div className="h-6 w-px bg-border/60" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                FSO Engineering Pillar
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display tracking-tight">
              {offering.title}
            </h2>
          </div>
          <a href="#fso-form">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm">
              Request Advisory
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        {/* Description & Statement of Value */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10 items-stretch">
          <div className="lg:col-span-7 p-6 rounded-xl border border-border/60 bg-surface/30 flex flex-col justify-between">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {offering.description}
            </p>
            <div className="mt-4 pt-4 border-t border-border/30 flex items-center gap-2 text-xs font-semibold text-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Standard Execution Timeline: <strong className="text-primary">{offering.totalDuration}</strong></span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl border border-primary/30 bg-primary/[0.03] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-2">Statement of Value</span>
              <p className="text-sm font-semibold text-foreground leading-relaxed italic">
                "{offering.statementOfValue}"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary">
              <CheckCircle2 className="w-4 h-4" />
              <span>Enterprise SLA Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto gap-2 border-b border-border/40 pb-3 mb-8 scrollbar-none">
          {[
            { id: "kpis", label: "Impact KPIs", icon: BarChart3 },
            { id: "benefits", label: "Key Benefits", icon: Target },
            { id: "phases", label: "Phased Execution", icon: Layers },
            { id: "deliverables", label: "Deliverables", icon: FileText },
            { id: "caseStudies", label: "Enterprise Case Study", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[280px]">
          {/* TAB 1: KPIs */}
          {activeTab === "kpis" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {offering.kpis.map((row, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/60 bg-surface/40 hover:border-primary/40 transition-colors">
                  <div className="text-xs text-muted-foreground font-semibold mb-1">{row.kpi}</div>
                  <div className="text-2xl font-bold text-primary font-mono mb-2">{row.impact}</div>
                  <div className="text-[11px] text-muted-foreground/80 leading-snug">{row.context}</div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: BENEFITS */}
          {activeTab === "benefits" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {offering.benefits.map((b, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/60 bg-surface/40 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1">{b.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PHASES */}
          {activeTab === "phases" && (
            <div className="space-y-4">
              {offering.phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/60 bg-surface/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold">{p.name}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 font-semibold">
                        <Clock className="w-3 h-3 text-muted-foreground" /> {p.duration}
                      </span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-1.5 pt-1">
                      {p.activities.map((act, actIdx) => (
                        <li key={actIdx} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border/40 text-xs shrink-0 max-w-xs">
                    <span className="font-bold text-primary block uppercase text-[10px] mb-0.5">Phase Output</span>
                    <span className="text-foreground">{p.output}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === "deliverables" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {offering.deliverables.map((d, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/60 bg-surface/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-primary shrink-0" />
                      <h4 className="text-xs font-bold text-foreground">{d.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{d.description}</p>
                  </div>
                  <div className="pt-3 border-t border-border/30 text-[10px] text-muted-foreground font-semibold flex items-center justify-between">
                    <span>Target Audience:</span>
                    <span className="text-primary font-bold">{d.audience}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: CASE STUDIES */}
          {activeTab === "caseStudies" && (
            <div className="space-y-6">
              {offering.caseStudies.map((cs, i) => (
                <div key={i} className="p-6 rounded-xl border border-border/80 bg-surface/60 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/40 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">Enterprise Implementation</span>
                      <h3 className="text-base font-bold text-foreground font-display">{cs.title}</h3>
                      <p className="text-xs text-muted-foreground">{cs.profile}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-2">
                      <span className="font-bold text-destructive uppercase tracking-wider text-[10px] block">THE CHALLENGE</span>
                      <p className="text-muted-foreground leading-relaxed p-3 rounded-lg bg-background/60 border border-border/30">
                        {cs.challenge}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-bold text-primary uppercase tracking-wider text-[10px] block">ENGINEERING OPTIMIZATIONS</span>
                      <ul className="space-y-1.5 p-3 rounded-lg bg-background/60 border border-border/30">
                        {cs.optimizations.map((opt, optIdx) => (
                          <li key={optIdx} className="flex items-center gap-1.5 text-foreground/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {cs.results.map((r, rIdx) => (
                      <div key={rIdx} className="p-3 rounded-lg bg-background border border-border/40 text-center">
                        <div className="text-[10px] text-muted-foreground font-semibold">{r.metric}</div>
                        <div className="text-sm font-bold text-primary font-mono my-0.5">{r.after}</div>
                        <div className="text-[10px] text-emerald-400 font-bold">{r.improvement}</div>
                      </div>
                    ))}
                  </div>

                  {cs.quote && (
                    <div className="p-4 rounded-lg bg-primary/[0.04] border border-primary/20 text-xs italic text-foreground flex items-center justify-between">
                      <span>"{cs.quote.text}"</span>
                      <span className="font-bold text-primary not-italic text-[10px]">— {cs.quote.attribution}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── FILTERABLE USE CASE MATRIX SECTION ───────────────────────────────────── */

function UseCaseMatrixSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = ["All Categories", "Campus Connectivity", "Fiber Backup", "Data Center", "Industrial", "Smart Cities", "Healthcare"];

  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => {
      const matchesCategory = selectedCategory === "All Categories" || uc.category === selectedCategory;
      const matchesSearch =
        uc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.industry.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 border-b border-border/40 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-xs uppercase tracking-wider font-semibold text-primary mb-3">
            Real-World Deployments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            Interactive FSO Deployment Use Case Matrix
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore how Free Space Optics solves complex enterprise connectivity challenges across industries.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search use cases, industries..."
              className="pl-9 bg-background/80 border-border text-xs h-10"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex overflow-x-auto gap-1.5 w-full sm:w-auto scrollbar-none pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUseCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div key={uc.id} className="premium-card p-6 rounded-xl border border-border/70 bg-surface/40 flex flex-col justify-between text-left hover:border-primary/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted/40 border border-border/40">
                      {uc.industry}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground font-display mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{uc.challenge}</p>

                  <div className="p-3 rounded-lg bg-background/60 border border-border/30 text-xs mb-4">
                    <span className="font-bold text-primary block text-[10px] uppercase mb-0.5">FSO Solution</span>
                    <span className="text-foreground/90">{uc.solution}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-3 border-t border-border/30 text-center">
                  {uc.metrics.map((m, i) => (
                    <div key={i} className="p-1.5 rounded bg-background/80 border border-border/20">
                      <div className="text-[9px] text-muted-foreground font-semibold">{m.label}</div>
                      <div className="text-xs font-bold text-primary font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredUseCases.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-xs">
            No FSO deployment scenarios match your query.
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── FORM SECTION ─────────────────────────────────────────────────────────── */

function FSOFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FSOFormData>({
    resolver: zodResolver(fsoFormSchema),
    defaultValues: {
      organizationType: "Enterprise Campus",
      connectivityRequirement: "Building-to-Building Link",
      linkDistance: "< 500m",
      currentConnectivity: "Leased Fiber Line",
    },
  });

  const onSubmit = async (data: FSOFormData) => {
    setIsSubmitting(true);
    try {
      await sendFSOLeadToSheet(data);
    } catch {
      // Continue gracefully
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div id="fso-form" className="w-full max-w-4xl mx-auto rounded-2xl border border-border/80 bg-surface/60 backdrop-blur-xl p-6 md:p-12 shadow-elevated text-left scroll-mt-20">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 space-y-4"
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground font-display">Feasibility Assessment Request Received</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-xs leading-relaxed">
            Thank you. A TRUSTGRID.AI FSO Network Engineer will evaluate your site coordinates and line-of-sight parameters and get in touch within 24 hours.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="border-border text-foreground hover:bg-muted/20 text-xs"
            >
              Submit Another Request
            </Button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" value="Free Space Optics (FSO)" name="service" />

          <div className="border-b border-border/40 pb-4 mb-6">
            <h3 className="text-xl font-bold text-foreground font-display">Talk to an FSO Expert / Request Feasibility Assessment</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Provide your location and connectivity requirements for a 3D line-of-sight evaluation by TRUSTGRID.AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="fso-name" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Full Name *
              </Label>
              <Input id="fso-name" placeholder="Alex Morgan" {...register("name")} className="bg-background/80 border-border text-xs" />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-email" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Work Email *
              </Label>
              <Input id="fso-email" type="email" placeholder="alex@enterprise.com" {...register("email")} className="bg-background/80 border-border text-xs" />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-company" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Company / Organization *
              </Label>
              <Input id="fso-company" placeholder="Acme Technologies Inc." {...register("company")} className="bg-background/80 border-border text-xs" />
              {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-phone" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Phone Number (Optional)
              </Label>
              <Input id="fso-phone" type="tel" placeholder="+1 (555) 019-2834" {...register("phone")} className="bg-background/80 border-border text-xs" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-org" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Organization Type *
              </Label>
              <select
                id="fso-org"
                {...register("organizationType")}
                className="w-full h-10 px-3 py-2 rounded-md bg-background/80 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Enterprise Campus">Enterprise Campus</option>
                <option value="Data Center Operator">Data Center Operator</option>
                <option value="Telecom / ISP Service Provider">Telecom / ISP Service Provider</option>
                <option value="Industrial / Manufacturing Facility">Industrial / Manufacturing Facility</option>
                <option value="Government & Public Infrastructure">Government & Public Infrastructure</option>
                <option value="Healthcare / Educational Institute">Healthcare / Educational Institute</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-req" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Connectivity Requirement *
              </Label>
              <select
                id="fso-req"
                {...register("connectivityRequirement")}
                className="w-full h-10 px-3 py-2 rounded-md bg-background/80 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Building-to-Building Link">Building-to-Building Link</option>
                <option value="Fiber Redundancy / Backup Path">Fiber Redundancy / Backup Path</option>
                <option value="Last-Mile Connectivity Extension">Last-Mile Connectivity Extension</option>
                <option value="Temporary / Rapid Deployment Link">Temporary / Rapid Deployment Link</option>
                <option value="Data Center Interconnect (DCI)">Data Center Interconnect (DCI)</option>
                <option value="RF Spectrum Independent Link">RF Spectrum Independent Link</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-dist" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Approximate Link Distance *
              </Label>
              <select
                id="fso-dist"
                {...register("linkDistance")}
                className="w-full h-10 px-3 py-2 rounded-md bg-background/80 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="< 300 meters">&lt; 300 meters</option>
                <option value="300m - 1 kilometer">300m - 1 kilometer</option>
                <option value="1km - 3 kilometers">1km - 3 kilometers</option>
                <option value="3km - 5+ kilometers">3km - 5+ kilometers</option>
                <option value="Unsure / Needs Survey">Unsure / Needs Survey</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fso-curr" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Current Connectivity Setup *
              </Label>
              <select
                id="fso-curr"
                {...register("currentConnectivity")}
                className="w-full h-10 px-3 py-2 rounded-md bg-background/80 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Leased Fiber Line">Leased Fiber Line</option>
                <option value="Microwave / RF Point-to-Point">Microwave / RF Point-to-Point</option>
                <option value="Standard Ethernet / Cable">Standard Ethernet / Cable</option>
                <option value="No Existing Connectivity (Greenfield)">No Existing Connectivity (Greenfield)</option>
                <option value="Public Cellular / Satellite">Public Cellular / Satellite</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fso-msg" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Project Context & Line-of-Sight Overview *
            </Label>
            <Textarea
              id="fso-msg"
              rows={4}
              placeholder="Describe your endpoint locations, line-of-sight status, bandwidth targets, site constraints, and timeline..."
              {...register("message")}
              className="bg-background/80 border-border min-h-24 text-xs"
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-md px-8 py-3 rounded-lg w-full sm:w-auto"
            >
              {isSubmitting ? "Submitting Request..." : "Request FSO Feasibility Assessment"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
              <span>🔒 Confidential Assessment</span>
              <span>⚡ 24-Hour SLA Response</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

/* ─── MAIN PAGE COMPONENT ─────────────────────────────────────────────────── */

export function FreeSpaceOpticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Free Space Optics <span className="text-primary">(FSO) Solutions</span>
          </>
        }
        description="High-speed wireless optical connectivity without cables. We deliver turnkey FSO strategy, site survey engineering, optical network design, precision deployment, and continuous 24/7 telemetry optimization."
      />

      {/* Main Offerings Stack */}
      <div className="bg-background">
        {fsoOfferings.map((offering) => (
          <OfferingSection key={offering.id} offering={offering} />
        ))}
      </div>

      {/* Interactive Use Case Matrix */}
      <UseCaseMatrixSection />

      {/* FSO vs Traditional Comparison Matrix */}
      <section className="py-20 border-b border-border/40 text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-xs uppercase tracking-wider font-semibold text-primary mb-3">
              Technology Benchmark
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
              FSO vs Traditional Enterprise Connectivity
            </h2>
            <p className="text-sm text-muted-foreground">
              A side-by-side engineering comparison of transmission media across core performance metrics.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/80 bg-background">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface/80 border-b border-border/60 font-display">
                <tr>
                  <th className="p-4 font-bold text-foreground uppercase tracking-wider">Metric / Parameter</th>
                  <th className="p-4 font-bold text-muted-foreground uppercase tracking-wider">Fiber Optics</th>
                  <th className="p-4 font-bold text-muted-foreground uppercase tracking-wider">Microwave / 60GHz RF</th>
                  <th className="p-4 font-bold text-primary uppercase tracking-wider">Free Space Optics (FSO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { param: "Physical Cabling", fiber: "Extensive (digging required)", rf: "None", fso: "None (Wireless Light Beam)" },
                  { param: "Spectrum Dependency", fiber: "None", rf: "High (Licensed/Unlicensed RF)", fso: "Zero (Unregulated Optical Spectrum)" },
                  { param: "Line of Sight Need", fiber: "N/A", rf: "Required for High Capacity", fso: "Strictly Required" },
                  { param: "Deployment Speed", fiber: "Months (Permits/Civil work)", rf: "Days to Weeks", fso: "1 to 3 Days" },
                  { param: "Transmission Latency", fiber: "< 1 ms", rf: "2 – 10 ms", fso: "< 1 ms (Speed of Light)" },
                  { param: "Bandwidth Capacity", fiber: "10 – 100+ Gbps", rf: "100 Mbps – 2 Gbps", fso: "1 Gbps – 10 Gbps+" },
                  { param: "Data Security", fiber: "Physical Tapping Risk", rf: "Interceptable RF Radiation", fso: "Air-Gapped Optical Beam (Zero Leakage)" },
                  { param: "Installation CAPEX", fiber: "High ($500K+ / km)", rf: "Moderate", fso: "Low (70–90% Savings)" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/40 transition-colors">
                    <td className="p-4 font-bold text-foreground">{row.param}</td>
                    <td className="p-4 text-muted-foreground">{row.fiber}</td>
                    <td className="p-4 text-muted-foreground">{row.rf}</td>
                    <td className="p-4 text-foreground font-semibold bg-primary/[0.02]">{row.fso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 border-b border-border/40 bg-surface/20 text-left">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-display mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-muted-foreground">
              Technical answers regarding Free Space Optics implementation and site feasibility.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is Free Space Optics (FSO)?",
                a: "Free Space Optics is an optical wireless communication technology that uses focused laser beams to transmit high-speed data through free space between two line-of-sight endpoints."
              },
              {
                q: "Does FSO require license permits or spectrum fees?",
                a: "No. FSO operates in unregulated optical light frequencies, requiring zero RF spectrum licenses or recurring government frequency fees."
              },
              {
                q: "How does FSO handle fog and heavy precipitation?",
                a: "FSO links are engineered with optical link margins based on local microclimate data. In locations prone to dense fog, links are paired with dynamic sub-50ms carrier failover to secondary microwave or fiber paths."
              },
              {
                q: "Are FSO laser beams safe for humans and birds?",
                a: "Yes. All enterprise FSO transceivers deployed by TRUSTGRID.AI comply with IEC 60825-1 Class 1 and Class 1M eye-safety standards, making them completely eye-safe."
              },
              {
                q: "How fast can an FSO link be deployed?",
                a: "Once site feasibility is confirmed, physical installation, mounting, and optical alignment are typically completed within 1 to 3 days."
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-border/80 bg-background overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left text-xs font-bold text-foreground font-display hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-primary" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <FSOFormSection />
      </section>

      {/* Final CTA */}
      <CTA />
    </div>
  );
}
