import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Brain, Bot, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    icon: Cpu,
    category: "GPU & AI HPC INFRASTRUCTURE",
    title: "Data Center & Performance Engineering",
    description: "Optimize multi-node fabrics, NCCL/RoCEv2 networks, and CUDA kernels to maximize hardware utilization and achieve linear scale up to 10,000+ GPUs.",
    tag: "NVIDIA Blackwell & InfiniBand",
    accentColor: "#60a5fa",
    glowColor: "rgba(96,165,250,0.18)",
    borderColor: "rgba(96,165,250,0.3)",
  },
  {
    icon: Brain,
    category: "LLM OPTIMIZATION & GEN AI",
    title: "Domain-Specific Models & Knowledge Systems",
    description: "Fine-tune open-weights models (LoRA/DPO), compress models using FP8/INT4 quantization, and build multi-hop RAG systems with enterprise knowledge graphs.",
    tag: "Llama, Mistral & pgvector",
    accentColor: "#a78bfa",
    glowColor: "rgba(167,139,250,0.18)",
    borderColor: "rgba(167,139,250,0.3)",
  },
  {
    icon: Bot,
    category: "AI AGENTS & AUTONOMOUS SYSTEMS",
    title: "Multi-Agent Orchestration & Tool Gating",
    description: "Orchestrate specialized agent fleets (LangGraph/CrewAI) with persistent memory, Model Context Protocol (MCP) tool integrations, and human-in-the-loop gating.",
    tag: "LangGraph, CrewAI & MCP",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.18)",
    borderColor: "rgba(192,132,252,0.3)",
  },
  {
    icon: ShieldCheck,
    category: "AI CYBERSECURITY & GOVERNANCE",
    title: "Zero-Trust Security Mesh & Sandboxing",
    description: "Secure model inference and agent execution with MicroVM / WASM sandboxes, protect against prompt injection, and audit decision lineage for SOC2/FedRAMP.",
    tag: "Zero-Trust & SOC2 Compliance",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.18)",
    borderColor: "rgba(52,211,153,0.3)",
  },
];

export function MovingSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const slide = slides[currentIndex];
  const IconComponent = slide.icon;

  return (
    <div className="w-full mt-10 md:mt-12 relative">
      <div
        className="relative overflow-hidden rounded-2xl px-8 py-6 flex items-center"
        style={{
          height: "clamp(150px, 22vw, 190px)",
          background: "linear-gradient(135deg, rgba(10,14,40,0.95) 0%, rgba(15,20,55,0.98) 100%)",
          border: `1px solid ${slide.borderColor}`,
          boxShadow: `0 0 32px ${slide.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Ambient glow behind icon */}
        <div
          className="absolute top-0 left-0 w-64 h-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 55% 80% at 8% 50%, ${slide.glowColor} 0%, transparent 70%)`,
            transition: "background 0.4s ease",
          }}
        />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="grid md:grid-cols-[1fr_auto] gap-6 items-center w-full relative z-10"
          >
            <div className="flex gap-4 md:gap-5 items-start">
              {/* Icon badge */}
              <div
                className="h-11 w-11 rounded-xl shrink-0 grid place-items-center"
                style={{
                  background: `${slide.glowColor}`,
                  border: `1px solid ${slide.borderColor}`,
                  color: slide.accentColor,
                  boxShadow: `0 0 16px ${slide.glowColor}`,
                }}
              >
                <IconComponent className="h-5 w-5" />
              </div>

              <div>
                {/* Category badge */}
                <span
                  className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md"
                  style={{
                    color: slide.accentColor,
                    background: slide.glowColor,
                    border: `1px solid ${slide.borderColor}`,
                  }}
                >
                  {slide.category}
                </span>

                {/* Title */}
                <h3
                  className="mt-2 text-sm md:text-base font-bold tracking-tight leading-snug"
                  style={{ color: "#f1f5f9" }}
                >
                  {slide.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-1.5 text-xs leading-relaxed max-w-3xl"
                  style={{ color: "rgba(203,213,225,0.8)" }}
                >
                  {slide.description}
                </p>
              </div>
            </div>

            {/* Stack tag — right side */}
            <div className="hidden md:flex flex-col items-end shrink-0">
              <span
                className="text-[9px] font-mono font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: "rgba(148,163,184,0.7)" }}
              >
                Platform Core Stack
              </span>
              <span
                className="rounded-lg px-3 py-1.5 text-[10px] font-bold"
                style={{
                  color: slide.accentColor,
                  background: slide.glowColor,
                  border: `1px solid ${slide.borderColor}`,
                  boxShadow: `0 0 10px ${slide.glowColor}`,
                }}
              >
                {slide.tag}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={slidePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-20"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(203,213,225,0.6)",
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-20"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(203,213,225,0.6)",
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={
              i === currentIndex
                ? {
                    width: "20px",
                    height: "5px",
                    background: s.accentColor,
                    boxShadow: `0 0 8px ${s.glowColor}`,
                  }
                : {
                    width: "5px",
                    height: "5px",
                    background: "rgba(255,255,255,0.2)",
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}
