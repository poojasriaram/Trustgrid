import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeuralBackground } from "./NeuralBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0">
        <NeuralBackground density={60} />
      </div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Full-Spectrum AI Engineering Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient leading-[1.05]"
        >
          Engineering AI Systems That Scale From GPUs to Autonomous Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          TRUSTGRID.AI helps enterprises design, optimize, secure, and scale next-generation
          AI systems—from high-performance GPU infrastructure and AI-native cloud platforms to
          autonomous agents and enterprise-scale AI operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground/80 leading-relaxed"
        >
          We bridge the gap between AI research and production reality by delivering AI
          infrastructure, Agentic AI, and intelligent automation solutions that create measurable
          business outcomes, reduce operational complexity, and accelerate innovation at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group">
              Book an Executive Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-wider text-muted-foreground/70 border-t border-border/20 pt-8"
        >
          <span>Trusted by Fortune 500 leaders</span>
          <span>·</span>
          <span>Financial Services</span>
          <span>·</span>
          <span>Government & Defense</span>
          <span>·</span>
          <span>Healthcare</span>
          <span>·</span>
          <span>Energy</span>
        </motion.div>
      </div>
    </section>
  );
}
