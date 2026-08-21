import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const articles = [
  { cat: "Agentic AI", title: "The State of Agentic AI in 2026", read: "12 min read" },
  { cat: "GPU Engineering", title: "Enterprise GPU Optimization: A Practical Guide to H100 at Scale", read: "18 min read" },
  { cat: "Autonomous Systems", title: "The Future of Autonomous Enterprises", read: "9 min read" },
  { cat: "Memory Systems", title: "Building Long-Memory AI Systems with Vector & Graph Hybrids", read: "14 min read" },
  { cat: "AI Infrastructure", title: "AI Infrastructure at Scale: Lessons from 128+ GPU Deployments", read: "16 min read" },
];

const categories = ["Agentic AI", "GPU Engineering", "AI Infrastructure", "MLOps", "LLMOps", "AgentOps", "Enterprise AI", "Security"];

export function Insights() {
  return (
    <section id="insights" className="relative border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Thought Leadership"
            title="Insights from the AI engineering frontier"
          />
          <Link to="/blog" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
            All insights <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-border/30 border border-border/40 rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-background p-6 hover:bg-surface/60 transition-colors cursor-pointer"
            >
              <div className="text-[10px] uppercase tracking-widest text-accent font-mono">
                {a.cat}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                {a.title}
              </h3>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{a.read}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
