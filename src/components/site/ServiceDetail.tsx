import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTA } from "./CTA";

export interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: { title: string; desc: string }[];
  stack: string[];
  outcomes?: { value: string; label: string }[];
}

export function ServiceDetail({ eyebrow, title, description, capabilities, stack, outcomes }: ServiceDetailProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      {outcomes && (
        <section className="border-b border-border/40 bg-surface/20">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label}>
                <div className="text-3xl md:text-4xl font-semibold text-gradient-primary font-display">{o.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{o.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient">Capabilities</h2>
          <div className="mt-10 grid gap-px bg-border/30 border border-border/40 rounded-xl overflow-hidden md:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 shrink-0 rounded-md bg-primary/15 grid place-items-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-surface/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient">Technology stack</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span key={t} className="rounded-md border border-border/60 bg-surface/40 px-3 py-1.5 text-sm text-foreground/90">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
