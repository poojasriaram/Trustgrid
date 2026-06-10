import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/platform")({
  component: PlatformPage,
});

const platformData: SectionData[] = [
  {
    title: "GPU-phi Cloud-Neutral Orchestration",
    description: "The autonomous brain for your AI infrastructure",
    introduction: "GPU-phi is our proprietary, cloud-neutral orchestration platform designed to sit above your diverse infrastructure—whether on-premise, multi-cloud, or edge—to provide unified governance, extreme resilience, and intelligent resource allocation.",
    capabilities: [
      "Cloud-neutral multi-cluster management (AWS, GCP, Azure, CoreWeave, Lambda Labs)",
      "Real-time cluster telemetry, hardware metrics, and deep NVIDIA DCGM SDK integration",
      "Dynamic multi-tenant policy enforcement with multi-instance GPU (MIG) and vGPU partitioning",
      "Automated workload profiling and target hardware capability matching patterns"
    ],
    solutions: [
      "Single-pane-of-glass infrastructure control planes and unified cluster dashboards",
      "Automated spot instance lifecycle brokers and preemptible GPU orchestration rules",
      "Predictive node failure isolation, automated fence scripting, and failover self-healing",
      "Unified AI identity governance with federated enterprise Access Management (IAM) integrations"
    ],
    useCases: [
      "Enterprises migrating from single-cloud lock-in to multi-cloud AI workload distributions",
      "Internal platform engineering teams building self-service AI developer portals and templates",
      "Large-scale AI model training deployments requiring extreme hardware fault tolerance"
    ],
    outcomes: [
      "Eliminate cloud vendor lock-in and optimize pricing leverage across distinct providers",
      "Transform disparate physical clusters into a single, cohesive high-performance supercomputer",
      "Drastically reduce the operational burden on DevOps/MLOps teams through automated scheduling"
    ],
    metrics: [
      { label: "Management Overhead", value: "-60%" },
      { label: "Platform Uptime", value: "99.99%" },
      { label: "Cross-Cloud Latency", value: "< 15ms" },
      { label: "Resource Waste", value: "< 2%" }
    ]
  },
  {
    title: "GPU FinOps Dashboard",
    description: "Optimize GPU spending and cloud resource efficiency",
    introduction: "Our GPU FinOps platform provides deep, real-time visibility into GPU spending, scheduling efficiency, and capacity utilization. It helps enterprise finance and engineering teams track, allocate, and reduce cloud costs via automated resource optimization.",
    capabilities: [
      "Granular cost allocation and showback/chargeback reporting by team, department, and project",
      "Real-time GPU idle detection, automated alerts, and policy-driven instance shutdown rules",
      "Spot instance arbitrage scheduling that automatically maps batch jobs to lowest-cost regions",
      "Predictive spend forecasting using custom machine learning algorithms and usage history"
    ],
    solutions: [
      "Real-time cost visualization dashboards with customizable budget limits and Slack warnings",
      "Automated instance purchasing recommendations (Reserved vs Spot vs On-Demand options)",
      "Zero-touch idle instance hibernation and instant-state restoration upon user request",
      "Direct API integrations with billing engines of major public hyperscalers and GPU clouds"
    ],
    useCases: [
      "Finance directors needing to audit and allocate massive cloud AI budgets with transparency",
      "MLOps teams looking to eliminate cost waste from forgotten or stalled training sessions",
      "SaaS providers seeking to optimize inference cost margins per incoming API request"
    ],
    outcomes: [
      "Reduce overall cloud GPU spend by up to 50% without impacting workload throughput",
      "Achieve 100% accountability and audit readiness for AI research and development budgets",
      "Maximize return on investment (ROI) for expensive hardware leases and cloud commitments"
    ],
    metrics: [
      { label: "Average Cost Savings", value: "42%" },
      { label: "Idle Waste Reduction", value: "95%" },
      { label: "Reporting Granularity", value: "Container" },
      { label: "Budget Visibility", value: "Real-Time" }
    ]
  },
  {
    title: "Self-Healing Clusters",
    description: "Zero-downtime resilience for large-scale training runs",
    introduction: "At scale, GPU hardware failures are not a matter of 'if' but 'when'. Our self-healing engine continuously monitors cluster health, isolates failing nodes, and hot-swaps active workloads to ensure training epochs never lose progress.",
    capabilities: [
      "Predictive node failure analysis using DCGM sensors and kernel system logs",
      "Automated sub-30s checkpoint-and-resume orchestration pipelines saving states to NVMe",
      "Fast node isolation (fencing) and dynamic workspace rescheduling without run crashes",
      "Automated hardware diagnostic runs, memory checks, and GPU burn-in testing sweeps"
    ],
    solutions: [
      "Telemetry-driven Slurm partitions and custom Kubernetes scheduler custom integrations",
      "Sub-minute distributed checkpoint engines direct-to-local NVMe cache directories",
      "Automated incident alert notifications via Slack, PagerDuty, and email integration",
      "Self-healing driver restarts and automated network interface configuration recovery scripts"
    ],
    useCases: [
      "Foundation model developers running month-long training epochs on thousands of GPUs",
      "Enterprise research labs operating shared, multi-tenant academic supercomputers",
      "Automated data center managers looking to reduce manual ticket resolution backlogs"
    ],
    outcomes: [
      "Reduce epoch loss from days/hours to under 60 seconds per hardware failure event",
      "Virtually eliminate manual DevOps and infrastructure team pager alerts for node failures",
      "Ensure flat training schedules, meeting critical launch commitments on time"
    ],
    metrics: [
      { label: "Workload Recovery Time", value: "< 45s" },
      { label: "DevOps Manual Tickets", value: "-80%" },
      { label: "Unsaved State Loss", value: "< 1%" },
      { label: "Failures Handled Auto", value: "98%" }
    ]
  }
];

export function PlatformSection() {
  return (
    <div className="bg-background">
      {platformData.map((data, index) => (
        <SectionTemplate key={index} data={data} />
      ))}
    </div>
  );
}

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The GPU-phi Platform"
        title={
          <>
            Autonomous AI <br />
            <span className="text-accent">Infrastructure Orchestration</span>
          </>
        }
        description="Discover the intelligence behind our enterprise-scale optimizations. The GPU-phi platform delivers cloud-neutral scheduling, advanced GPU FinOps, and self-healing resilience for the modern AI data center."
      />

      <PlatformSection />

      <CTA />
    </>
  );
}
