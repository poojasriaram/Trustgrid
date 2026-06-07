import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, OfferingDetail } from "@/components/site/ServiceDetail";

const detailedOfferings: OfferingDetail[] = [
  {
    title: "1. Mega-Scale GPU Data Center Design & Fabric Tuning",
    subtitle: "For 10,000+ GPU sovereign and hyperscale deployments",
    description: "End-to-end design, implementation, and performance optimization of high-density GPU supercomputing clusters, specializing in Blackwell/Hopper architectures, liquid cooling integration, GPUDirect Storage, and non-blocking InfiniBand/RoCEv2 networks.",
    keySituations: [
      "Low Model FLOPs Utilization (MFU) due to network fabric or inter-switch bottlenecks.",
      "Power delivery and thermal constraints limiting rack densities to 60-120 kW.",
      "InfiniBand/RoCEv2 congestion leading to packet loss and collective operation delays."
    ],
    keyStatistics: [
      "Collective network fabric scaling efficiency: 95-97%+",
      "Sustained MFU (Model FLOPs Utilization): Boosted from 35-50% to 80-92%+",
      "TCO reduction: 25-40% via optimized topologies and power management",
      "Network packet loss: Reductions down to zero under high congestion workloads"
    ],
    offeringValue: "Translates millions in CapEx into raw performance by eliminating data path and inter-node bottlenecking.",
    expectedOutcomes: [
      "High-efficiency AI supercomputer architectures ready for large-scale training runs.",
      "Optimized network layouts preventing packet drops and maximizing throughput.",
      "Sovereign or enterprise training infrastructure operating at optimal FLOPs/watt."
    ]
  },
  {
    title: "2. Hybrid & Private GPU Cloud Orchestration",
    subtitle: "For enterprise clusters scaling from 512 to 4,096 GPUs",
    description: "Orchestration layer transformation to build a fully automated, multi-tenant GPU cloud. Incorporates SLA-based topology-aware scheduling, DCGM self-healing, and dynamic resource isolation.",
    keySituations: [
      "Fragmented physical GPU servers with high idle time and team scheduling conflicts.",
      "Noisy-neighbor interference in shared developer/production training runs.",
      "Lack of granular cost tracking and chargebacks across department lines."
    ],
    keyStatistics: [
      "Resource utilization rates: Scaled to 85%+",
      "Failures self-healed: 70%+ of node/GPU faults mitigated without engineer intervention",
      "Tenant density: 3.5x capacity multiplier through secure MIG partitioning",
      "Deployment provisioning time: Reduced from days to minutes"
    ],
    offeringValue: "Builds a public-cloud developer experience on private hardware, maximizing return on infrastructure assets.",
    expectedOutcomes: [
      "Fully automated, self-service enterprise AI developer portal.",
      "Continuous health monitoring, failure prevention, and job checkpointing.",
      "Transparent unit economics with exact cost attribution per workload/team."
    ]
  }
];

export const Route = createFileRoute("/gpu-performance-engineering")({
  head: () => ({
    meta: [
      { title: "GPU Performance & Data Center Engineering — 3–15x Speedups | TrustGrid.AI" },
      { name: "description", content: "Maximize AI infrastructure performance through CUDA optimization, TensorRT, quantization, NCCL tuning, private cloud orchestration, and multi-GPU scaling on NVIDIA H100 and Blackwell clusters." },
      { property: "og:title", content: "GPU Performance & Data Center Engineering | TrustGrid.AI" },
      { property: "og:description", content: "3–15x speedups. 40–75% cost reduction. Mega-scale GPU data center optimization." },
      { property: "og:url", content: "/gpu-performance-engineering" },
    ],
    links: [{ rel: "canonical", href: "/gpu-performance-engineering" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="GPU Performance & Data Center Engineering"
      title="Maximize every dollar of GPU spend"
      description="Advanced GPU optimization and data center scaling for enterprise AI workloads. We engineer 3–15x performance gains and 40–75% cost reductions across H100 and Blackwell supercomputing clusters."
      outcomes={[
        { value: "3–15x", label: "Speed improvement" },
        { value: "40–75%", label: "Cost reduction" },
        { value: "95-97%+", label: "Fabric scaling" },
        { value: "10,000+", label: "GPU cluster support" },
      ]}
      capabilities={[
        { title: "CUDA Kernel Optimization", desc: "Hand-tuned kernels, memory coalescing, warp-level primitives." },
        { title: "TensorRT Acceleration", desc: "Graph-level optimization for inference at production scale." },
        { title: "Quantization (FP8 / INT4)", desc: "Aggressive precision reduction without accuracy regression." },
        { title: "NCCL & RDMA Tuning", desc: "Collective communication tuning for multi-node training." },
        { title: "Multi-GPU Scaling", desc: "Tensor, pipeline and expert parallelism for 128+ GPU clusters." },
        { title: "H100 / Blackwell Optimization", desc: "Hopper transformer engine, FP8 GEMM, NVLink fabric tuning." },
      ]}
      stack={["NVIDIA H100", "Blackwell", "CUDA", "TensorRT", "Triton Inference", "NCCL", "vLLM", "TRT-LLM"]}
      detailedOfferings={detailedOfferings}
    />
  ),
});
