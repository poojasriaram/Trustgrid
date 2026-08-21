import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  bgImages,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  bgImages?: string[];
  children?: ReactNode;
}) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!bgImages || bgImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bgImages.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer);
  }, [bgImages]);

  return (
    <section className="relative overflow-hidden border-b border-border/30 bg-surface/5">
      {/* Sliding background images if provided */}
      {bgImages && bgImages.length > 0 && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImg}
              src={bgImages[currentImg]}
              alt="Background visual"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full object-cover object-right absolute inset-0 opacity-[0.35]"
            />
          </AnimatePresence>
        </div>
      )}

      {/* Premium subtle grid and glows */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-radial-glow z-0" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/15 blur-[120px] pointer-events-none z-0" />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-24 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-6 max-w-4xl text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient leading-[1.2] font-display"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
