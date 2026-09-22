// ============================================================
// FloatingQuickCTA — Global Quick Enquiry Button + Modal Form
// ============================================================
// Positioning:
//   Desktop (≥768px): fixed bottom-28 right-5  (above chatbot at bottom-4)
//   Mobile  (<768px): fixed bottom-[72px] right-4  (above mobile bar at bottom-0 h-14)
//
// Collision avoidance:
//   - Never placed over chatbot, cookie consent, mobile nav, or exit popup
//   - z-index: 45 — above chatbot (z-40) but below modals / cookie banner (z-50)
//
// Analytics:
//   - Tracks: FloatingCTA_Clicked, QuickForm_Opened, QuickForm_Started,
//             QuickForm_Submitted, QuickForm_Abandoned
//   - Submits lead data to existing ANALYTICS_CONFIG.ENDPOINT
//     with type "QuickEnquiryForm"
// ============================================================

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MessageSquarePlus,
  X,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ANALYTICS_CONFIG, trackEvent } from "@/lib/analytics/index";
import { getVisitorId, getSessionId } from "@/lib/analytics/visitor";

// ─── Page-context CTA label map ──────────────────────────────
const PAGE_CTA_MAP: Record<string, { button: string; heading: string; sub: string }> = {
  "/contact":              { button: "Quick Enquiry", heading: "Contact Our Team",               sub: "We'll respond within one business day." },
  "/consulting":           { button: "Book Session",  heading: "Discuss Your AI Requirements",   sub: "Talk to a principal AI architect." },
  "/ai-security":          { button: "Quick Enquiry", heading: "Discuss Security Requirements",  sub: "Zero-trust & SOC 2 experts ready." },
  "/gpu-performance-engineering": { button: "Get a Quote", heading: "GPU Optimization Enquiry", sub: "Achieve up to 15× performance gains." },
  "/llmops-services":      { button: "Quick Enquiry", heading: "Discuss LLMOps Requirements",    sub: "Production LLM experts at your service." },
  "/capabilities":         { button: "Quick Enquiry", heading: "Discuss Your Requirements",      sub: "Explore our full capability portfolio." },
  "/industries":           { button: "Quick Enquiry", heading: "Discuss Industry Requirements",  sub: "Tailored AI solutions for your sector." },
  "/partnership":          { button: "Become a Partner", heading: "Partnership Enquiry",         sub: "Explore collaboration opportunities." },
  "/sales-enquiry":        { button: "Get a Quote",   heading: "Request Sales Information",      sub: "Enterprise pricing & licensing." },
  "/platform":             { button: "Quick Enquiry", heading: "Explore the Platform",           sub: "GPU-phi cloud-neutral orchestration." },
  "/about":                { button: "Quick Enquiry", heading: "Get in Touch",                   sub: "We'd love to hear from you." },
  "/offerings":            { button: "Get a Quote",   heading: "Request Offering Details",       sub: "Tailored packages for every scale." },
  "/use-cases":            { button: "Quick Enquiry", heading: "Discuss Your Use Case",          sub: "Match your challenge to our solutions." },
};

const DEFAULT_CTA = { button: "Quick Enquiry", heading: "Send a Quick Enquiry", sub: "An enterprise architect will respond within one business day." };

function getCtaForPath(pathname: string) {
  // Exact match first
  if (PAGE_CTA_MAP[pathname]) return PAGE_CTA_MAP[pathname];
  // Prefix match (e.g. /solutions/free-space-optics → /solutions)
  const prefix = Object.keys(PAGE_CTA_MAP).find((k) => pathname.startsWith(k) && k !== "/");
  return prefix ? PAGE_CTA_MAP[prefix] : DEFAULT_CTA;
}

// ─── Zod schema — exactly 4 fields ───────────────────────────
const schema = z.object({
  name:        z.string().trim().min(2,  "Name is required").max(100),
  email:       z.string().trim().email("Enter a valid work email").max(255),
  phone:       z.string().trim().min(7,  "Phone number is required").max(30),
  requirement: z.string().trim().min(10, "Please describe your requirement (min. 10 chars)").max(2000),
});
type FormData = z.infer<typeof schema>;

// ─── Lead submission — same pattern as ContactForm / ConsultingForm ──
async function submitQuickEnquiry(data: FormData, pagePath: string) {
  const payload = [{
    type: "QuickEnquiryForm",
    timestamp: new Date().toISOString(),
    payload: {
      SubmittedAt:   new Date().toISOString(),
      FullName:      data.name,
      WorkEmail:     data.email,
      Phone:         data.phone,
      Requirement:   data.requirement,
      PageURL:       window.location.href,
      PagePath:      pagePath,
      Referrer:      document.referrer || "Direct",
      UTMSource:     new URLSearchParams(window.location.search).get("utm_source")   || "",
      UTMMedium:     new URLSearchParams(window.location.search).get("utm_medium")   || "",
      UTMCampaign:   new URLSearchParams(window.location.search).get("utm_campaign") || "",
      SessionID:     getSessionId(),
      VisitorID:     getVisitorId(),
      DeviceType:    /mobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      Browser:       navigator.userAgent.includes("Chrome") ? "Chrome" : navigator.userAgent.includes("Firefox") ? "Firefox" : "Other",
      LeadScore:     sessionStorage.getItem("tg_lead_score")  || "0",
      IntentScore:   sessionStorage.getItem("tg_intent_score") || "0",
      Status:        "New Quick Enquiry",
    },
  }];

  try {
    await fetch(ANALYTICS_CONFIG.ENDPOINT, {
      method:   "POST",
      mode:     "no-cors",
      redirect: "follow",
      body:     JSON.stringify(payload),
    });
  } catch {
    // Image beacon fallback
    const encoded = encodeURIComponent(JSON.stringify(payload));
    const img = new Image();
    img.src = `${ANALYTICS_CONFIG.ENDPOINT}?data=${encoded}`;
  }
}

// ─── Field wrapper ────────────────────────────────────────────
function Field({ label, htmlId, error, required, children }: {
  label: string;
  htmlId: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={htmlId}
        className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1"
      >
        {label}
        {required && <span className="text-destructive text-xs" aria-hidden="true">*</span>}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive leading-snug">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export function FloatingQuickCTA() {
  const router    = useRouter();
  const pathname  = router.state.location.pathname;
  const cta       = getCtaForPath(pathname);

  const [isOpen,      setIsOpen]      = useState(false);
  const [submitting,  setSubmitting]  = useState(false);
  const [done,        setDone]        = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  // Track if the button has been seen (for abandoned tracking on close)
  const openedAt     = useRef<number | null>(null);
  const triggerRef   = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // ─── Analytics helpers ──────────────────────────────────────
  const track = useCallback((eventType: string, extra?: Record<string, unknown>) => {
    trackEvent(eventType, {
      SessionID:   getSessionId(),
      VisitorID:   getVisitorId(),
      PageURL:     window.location.href,
      PagePath:    pathname,
      CTALabel:    cta.button,
      FormContext: cta.heading,
      ...extra,
    });
  }, [pathname, cta]);

  // ─── Open / close handlers ──────────────────────────────────
  const openModal = useCallback(() => {
    setIsOpen(true);
    openedAt.current = Date.now();
    track("FloatingCTA_Clicked");
    track("QuickForm_Opened");
    // Boost lead score
    const lead = Math.min(100, parseFloat(sessionStorage.getItem("tg_lead_score") || "0") + 12);
    sessionStorage.setItem("tg_lead_score", String(lead));
    // Focus first field after animation frame
    requestAnimationFrame(() => {
      setTimeout(() => firstFieldRef.current?.focus(), 80);
    });
  }, [track]);

  const closeModal = useCallback((reason: "escape" | "backdrop" | "button" | "success" = "button") => {
    if (formStarted && !done && reason !== "success") {
      track("QuickForm_Abandoned", {
        TimeOpenMs: openedAt.current ? Date.now() - openedAt.current : 0,
        CloseReason: reason,
      });
    }
    setIsOpen(false);
    setFormStarted(false);
    // Return focus to trigger button
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, [formStarted, done, track]);

  // ─── Keyboard handling ──────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); closeModal("escape"); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  // ─── Reset state when route changes ────────────────────────
  useEffect(() => {
    setIsOpen(false);
    setDone(false);
    setFormStarted(false);
  }, [pathname]);

  // ─── Form ───────────────────────────────────────────────────
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Detect form start on any field change
  const watchedValues = watch();
  useEffect(() => {
    if (!formStarted) {
      const hasInput = Object.values(watchedValues).some((v) => v && String(v).length > 0);
      if (hasInput) {
        setFormStarted(true);
        track("QuickForm_Started");
        const lead = Math.min(100, parseFloat(sessionStorage.getItem("tg_lead_score") || "0") + 10);
        sessionStorage.setItem("tg_lead_score", String(lead));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedValues]);

  const onSubmit = async (data: FormData) => {
    if (submitting) return; // prevent double-submit
    setSubmitting(true);
    track("QuickForm_Submitted", { TimeOpenMs: openedAt.current ? Date.now() - openedAt.current : 0 });
    try {
      await submitQuickEnquiry(data, pathname);
    } catch {
      // Never block the user
    }
    // Boost conversion lead score
    const lead = Math.min(100, parseFloat(sessionStorage.getItem("tg_lead_score") || "0") + 30);
    sessionStorage.setItem("tg_lead_score", String(lead));
    setSubmitting(false);
    setDone(true);
    // Auto-close after 3.5 s on success
    setTimeout(() => closeModal("success"), 3500);
  };

  // ─── Focus trap ─────────────────────────────────────────────
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    const trap  = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [isOpen]);

  return (
    <>
      {/* ── Floating Trigger Button ─────────────────────────────
          Desktop: bottom-28 right-5 (above chatbot at bottom-4 right-4)
          Mobile:  bottom-[72px] right-4 (above mobile bottom bar ~56px tall)
          z-[45]: above chatbot (z-40), below cookie/exit modals (z-50)
      ─────────────────────────────────────────────────────── */}
      <motion.button
        ref={triggerRef}
        id="floating-quick-cta"
        aria-label="Open quick enquiry form"
        aria-expanded={isOpen}
        aria-controls="quick-enquiry-modal"
        data-floating-cta="true"
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1,   x: 0  }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 22 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{  scale: 0.96 }}
        className={[
          // Base
          "fixed z-[45] flex items-center gap-2 rounded-full shadow-xl",
          "bg-primary text-primary-foreground font-semibold text-sm",
          "border border-primary/30 backdrop-blur-sm",
          "transition-shadow duration-200 hover:shadow-primary/30 hover:shadow-2xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          // Desktop: right pill with label
          "md:bottom-28 md:right-5 md:px-4 md:py-2.5",
          // Mobile: compact icon-only button (above mobile bar at bottom-0 ~56px)
          "bottom-[72px] right-4 px-3 py-3 md:py-2.5",
        ].join(" ")}
      >
        <MessageSquarePlus className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden md:inline whitespace-nowrap">{cta.button}</span>
      </motion.button>

      {/* ── Modal Overlay + Panel ───────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="quick-cta-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[46] bg-background/70 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => closeModal("backdrop")}
            />

            {/* Panel */}
            <motion.div
              key="quick-cta-panel"
              ref={panelRef}
              id="quick-enquiry-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quick-cta-title"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className={[
                "fixed z-[47]",
                // Desktop: anchored near the button (bottom-right)
                "md:bottom-28 md:right-16 md:max-w-md md:w-full",
                // Mobile: centred, constrained height with scroll
                "bottom-[72px] left-2 right-2 max-h-[calc(100dvh-140px)] overflow-y-auto",
                // Card
                "rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl",
              ].join(" ")}
            >
              {/* ── Header ─────────────────────────────────── */}
              <div className="flex items-start justify-between gap-3 p-5 pb-4 border-b border-border/40">
                <div>
                  <h2 id="quick-cta-title" className="text-base font-bold text-foreground font-display leading-snug">
                    {cta.heading}
                  </h2>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                    {cta.sub}
                  </p>
                </div>
                <button
                  onClick={() => closeModal("button")}
                  aria-label="Close quick enquiry form"
                  className="mt-0.5 shrink-0 rounded-lg p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* ── Body ───────────────────────────────────── */}
              <div className="p-5">
                <AnimatePresence mode="wait">
                  {done ? (
                    // Success state
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 text-center space-y-3"
                    >
                      <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground font-display">Enquiry Sent!</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A TrustGrid.AI enterprise architect will review your message and respond within one business day.
                      </p>
                      <p className="text-xs text-muted-foreground/70">This window will close automatically…</p>
                    </motion.div>
                  ) : (
                    // Form state
                    <motion.form
                      key="form"
                      id="quick-enquiry-form"
                      aria-label="Quick enquiry form"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      {/* Field 1 — Name */}
                      <Field
                        label="Full Name"
                        htmlId="qcta-name"
                        error={errors.name?.message}
                        required
                      >
                        <Input
                          id="qcta-name"
                          autoComplete="name"
                          placeholder="Jane Doe"
                          className="bg-background border-border"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "qcta-name-err" : undefined}
                          {...register("name")}
                          ref={(el) => {
                            register("name").ref(el);
                            (firstFieldRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
                          }}
                        />
                      </Field>

                      {/* Field 2 — Work Email */}
                      <Field
                        label="Work Email"
                        htmlId="qcta-email"
                        error={errors.email?.message}
                        required
                      >
                        <Input
                          id="qcta-email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@company.com"
                          className="bg-background border-border"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          {...register("email")}
                        />
                      </Field>

                      {/* Field 3 — Phone */}
                      <Field
                        label="Phone Number"
                        htmlId="qcta-phone"
                        error={errors.phone?.message}
                        required
                      >
                        <Input
                          id="qcta-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 555 000 0000"
                          className="bg-background border-border"
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          {...register("phone")}
                        />
                      </Field>

                      {/* Field 4 — Requirement */}
                      <Field
                        label="Requirement / Message"
                        htmlId="qcta-requirement"
                        error={errors.requirement?.message}
                        required
                      >
                        <Textarea
                          id="qcta-requirement"
                          placeholder="Briefly describe your AI, GPU, or infrastructure requirement…"
                          className="bg-background border-border min-h-[90px] resize-none"
                          aria-required="true"
                          aria-invalid={!!errors.requirement}
                          {...register("requirement")}
                        />
                      </Field>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary group"
                        aria-live="polite"
                      >
                        {submitting ? (
                          <>
                            <ChevronDown className="mr-2 h-4 w-4 animate-bounce" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </>
                        )}
                      </Button>

                      {/* Trust signal */}
                      <p className="text-center text-[10px] text-muted-foreground/70">
                        🔒 SOC 2 · Zero-Trust · 24-hr Enterprise SLA
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
