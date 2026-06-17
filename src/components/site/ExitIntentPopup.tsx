import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail, Phone, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ANALYTICS_CONFIG } from "@/lib/analytics/index";

const SESSION_KEY = "tg_exit_popup_shown";

// ─── Rotating persuasive messages ────────────────────────────
const MESSAGES = [
  {
    eyebrow: "Wait — don't go yet 👋",
    headline: "Still figuring out your\nAI strategy?",
    sub: "Most enterprises waste 6–18 months before finding the right AI partner. Let us save you that time — in one free call.",
  },
  {
    eyebrow: "Hold on a second ⚡",
    headline: "Your competitors are\nalready using AI.",
    sub: "TrustGrid.AI has deployed AI at Fortune 500 scale. One conversation could change your roadmap entirely.",
  },
  {
    eyebrow: "Before you leave 🚀",
    headline: "Get a free AI readiness\nassessment — today.",
    sub: "Drop your contact and a principal engineer will personally map your AI opportunity within 24 hours. No sales pitch.",
  },
];

async function sendExitLead(contact: string, type: "email" | "phone") {
  const payload = [{
    type: "LeadForms",
    timestamp: new Date().toISOString(),
    payload: {
      SubmittedAt: new Date().toISOString(),
      FullName: "",
      Company: "",
      WorkEmail: type === "email" ? contact : "",
      Phone: type === "phone" ? contact : "",
      Country: "",
      Industry: "",
      ProjectBudget: "",
      ProjectDescription: "Exit intent popup lead",
      PageURL: window.location.href,
      Referrer: document.referrer || "Direct",
      UTMSource: new URLSearchParams(window.location.search).get("utm_source") || "",
      UTMMedium: new URLSearchParams(window.location.search).get("utm_medium") || "",
      UTMCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      SessionID: sessionStorage.getItem("tg_session_id") || "",
      VisitorID: localStorage.getItem("tg_visitor_id") || "",
      DeviceType: /mobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      Browser: navigator.userAgent.includes("Chrome") ? "Chrome" : "Other",
      LeadScore: sessionStorage.getItem("tg_lead_score") || "0",
      IntentScore: sessionStorage.getItem("tg_intent_score") || "0",
      Status: "Exit Intent Lead",
    },
  }];

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

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [contact, setContact] = useState("");
  const [contactType, setContactType] = useState<"email" | "phone">("email");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const hasShown = useRef(false);
  const msgIndex = useRef(Math.floor(Math.random() * MESSAGES.length));
  const msg = MESSAGES[msgIndex.current];

  const triggerPopup = () => {
    if (hasShown.current) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    hasShown.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  };

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) triggerPopup();
    };
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") triggerPopup();
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("visibilitychange", handleVisibility);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const validate = () => {
    if (!contact.trim()) return "Please enter your contact";
    if (contactType === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact))
      return "Please enter a valid email address";
    if (contactType === "phone" && !/^[+\d\s\-()\\.]{7,20}$/.test(contact))
      return "Please enter a valid phone number";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setSubmitting(true);
    await sendExitLead(contact, contactType);
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-md"
            onClick={() => setVisible(false)}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto">

              {/* Card — matches site theme: white bg, border, subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden bg-background border border-border shadow-2xl">

                {/* Decorative top accent line using site primary/accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setVisible(false)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-all"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {submitted ? (
                  /* ─── Success state ─── */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-10 text-center"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                      <Sparkles className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-display">You're in!</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      A TrustGrid.AI principal engineer will personally reach out within <strong className="text-foreground">24 hours</strong>. Keep an eye on your inbox.
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold text-primary">
                      <Cpu className="h-3.5 w-3.5" />
                      Your AI journey starts now
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col md:flex-row">

                    {/* ─── Left panel — visual/brand ─── */}
                    <div className="relative md:w-44 shrink-0 bg-gradient-to-br from-primary/90 to-primary p-6 flex flex-col justify-between overflow-hidden">
                      {/* Subtle grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mb-4">
                          <Cpu className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">TrustGrid.AI</p>
                        <p className="mt-1 text-sm font-semibold text-white/90 leading-snug">Enterprise AI Engineers</p>
                      </div>
                      <div className="relative z-10 space-y-2.5">
                        {["48-hr Assessment", "Fortune 500 Scale", "Mutual NDA"].map((t) => (
                          <div key={t} className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                            <div className="w-1 h-1 rounded-full bg-white/60" />
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ─── Right panel — copy + form ─── */}
                    <div className="flex-1 p-7">
                      {/* Eyebrow */}
                      <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3">
                        {msg.eyebrow}
                      </span>

                      {/* Headline */}
                      <h2 className="text-xl font-bold text-foreground font-display leading-tight whitespace-pre-line">
                        {msg.headline}
                      </h2>

                      {/* Sub-copy */}
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                        {msg.sub}
                      </p>

                      {/* Toggle Email / Phone */}
                      <div className="mt-5 flex rounded-lg bg-surface/60 border border-border p-1 gap-1">
                        {(["email", "phone"] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => { setContactType(type); setContact(""); setError(""); }}
                            className={`flex-1 flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold capitalize transition-all ${
                              contactType === type
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {type === "email"
                              ? <><Mail className="h-3 w-3" /> Email</>
                              : <><Phone className="h-3 w-3" /> Phone</>
                            }
                          </button>
                        ))}
                      </div>

                      {/* Input + Submit */}
                      <form onSubmit={handleSubmit} className="mt-3 space-y-2.5">
                        <div>
                          <Input
                            type={contactType === "email" ? "email" : "tel"}
                            value={contact}
                            onChange={(e) => { setContact(e.target.value); setError(""); }}
                            placeholder={contactType === "email" ? "your@company.com" : "+1 555 000 0000"}
                            className="h-10 bg-background border-border placeholder:text-muted-foreground/50 focus-visible:ring-primary"
                            autoFocus
                          />
                          {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
                        </div>

                        <Button
                          type="submit"
                          disabled={submitting}
                          className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                        >
                          {submitting ? "Sending..." : "Connect me with an Expert"}
                          <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Button>

                        <button
                          type="button"
                          onClick={() => setVisible(false)}
                          className="w-full text-center text-[11px] text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          No thanks, I'll figure it out myself
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
