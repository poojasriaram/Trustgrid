import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/gpu-performance-engineering")({
  head: () => ({
    meta: [
      { title: "GPU Performance Engineering — 3–15x Speedups | TrustGrid.AI" },
      { name: "description", content: "Maximize AI infrastructure performance through CUDA optimization, TensorRT, quantization, NCCL tuning and multi-GPU scaling on NVIDIA H100." },
      { property: "og:title", content: "GPU Performance Engineering | TrustGrid.AI" },
      { property: "og:description", content: "3–15x speedups. 40–75% cost reduction. < 6 month ROI." },
      { property: "og:url", content: "/gpu-performance-engineering" },
    ],
    links: [{ rel: "canonical", href: "/gpu-performance-engineering" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="GPU Performance Engineering"
      title="Maximize every dollar of GPU spend"
      description="Advanced GPU optimization for enterprise AI workloads. We engineer 3–15x performance gains and 40–75% cost reductions across H100 and multi-GPU clusters."
      outcomes={[
        { value: "3–15x", label: "Speed improvement" },
        { value: "40–75%", label: "Cost reduction" },
        { value: "< 6 mo", label: "Time to ROI" },
        { value: "128+", label: "GPU scaling" },
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
    />
  ),
});
