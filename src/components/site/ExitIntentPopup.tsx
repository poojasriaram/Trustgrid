import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail, Phone, Cpu, Sparkles, Compass, Terminal, BadgeDollarSign, MessageSquare, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ANALYTICS_CONFIG } from "@/lib/analytics/index";

const SESSION_KEY = "tg_exit_popup_shown";

interface ExitOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  responseTitle: string;
  responseBody: string;
  placeholder: string;
  leadDescription: string;
}

const EXIT_OPTIONS: ExitOption[] = [
  {
    id: "browsing",
    label: "I'm just browsing & researching",
    icon: Compass,
    responseTitle: "Grab our Enterprise AI Roadmap Playbook 📚",
    responseBody: "We compiled our internally used capability map, cost savings analysis, and security checklists into a 15-page playbook. Let us email you a copy.",
    placeholder: "your@company.com",
    leadDescription: "Exit Intent - Just researching (wants playbook)"
  },
  {
    id: "gpu_solution",
    label: "I need custom AI or GPU performance engineering",
    icon: Terminal,
    responseTitle: "Get connected with a Principal Engineer 💻",
    responseBody: "Skip the sales reps. Share your contact info, and one of our core infrastructure engineers will reach out to discuss your architecture within 24 hours.",
    placeholder: "your@company.com or phone number",
    leadDescription: "Exit Intent - Needs AI/GPU engineering help"
  },
  {
    id: "budget",
    label: "It seems too expensive / ROI is unclear",
    icon: BadgeDollarSign,
    responseTitle: "Let's perform a free GPU efficiency audit 📊",
    responseBody: "We typically identify 30% to 50% in waste across memory fragmentation, cold starts, and idle nodes. Leave your contact to get a custom ROI spreadsheet.",
    placeholder: "your@company.com",
    leadDescription: "Exit Intent - Budget concerns (wants GPU audit)"
  },
  {
    id: "consultation",
    label: "I want a technical consultation",
    icon: MessageSquare,
    responseTitle: "Schedule a direct engineer-to-engineer call ⚡",
    responseBody: "All initial consultations are protected under a mutual NDA. We'll map your opportunities and give you a capability assessment within 48 hours.",
    placeholder: "your@company.com or phone number",
    leadDescription: "Exit Intent - Wants technical consultation"
  }
];

async function sendExitLead(contact: string, option: ExitOption) {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const payload = [{
    type: "LeadForms",
    timestamp: new Date().toISOString(),
    payload: {
      SubmittedAt: new Date().toISOString(),
      FullName: "Exit Lead",
      Company: "",
      WorkEmail: isEmail ? contact : "",
      Phone: !isEmail ? contact : "",
      Country: "",
      Industry: "",
      ProjectBudget: "",
      ProjectDescription: option.leadDescription,
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
  const [selectedOption, setSelectedOption] = useState<ExitOption | null>(null);
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const hasShown = useRef(false);

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
    const handleBlur = () => {
      triggerPopup();
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("visibilitychange", handleVisibility);
      window.addEventListener("blur", handleBlur);
    }, 4000); // 4 seconds delay after page load

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const validate = () => {
    if (!contact.trim()) return "Please enter your contact details";
    const isEmail = contact.includes("@");
    if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      return "Please enter a valid email address";
    }
    if (!isEmail && !/^[+\d\s\-()\\.]{7,20}$/.test(contact)) {
      return "Please enter a valid email or phone number";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setSubmitting(true);
    await sendExitLead(contact, selectedOption);
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setVisible(false), 3500);
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
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-md"
            onClick={() => setVisible(false)}
          />

          {/* Modal Container */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-xl pointer-events-auto">
              {/* Card - Site Theme Matching */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-primary/15 shadow-2xl p-7 md:p-9">
                {/* Top Glowing Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-accent to-secondary" />

                {/* Close Button */}
                <button
                  onClick={() => setVisible(false)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-elevated/80 transition-all border border-transparent hover:border-border"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* ─── SUCCESS STATE ─── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-6"
                    >
                      <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 animate-pulse-glow">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground font-display">
                        We're on it! 🚀
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Your request has been routed directly to our principal engineering team. We'll connect with you within <strong className="text-foreground font-semibold">24 hours</strong>.
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/15 px-4.5 py-1.5 text-xs font-semibold text-primary">
                        <Cpu className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                        Engineering AI Systems at Scale
                      </div>
                    </motion.div>
                  ) : !selectedOption ? (
                    /* ─── STEP 1: CONVERSATIONAL CHOICE ─── */
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                          <Sparkles className="h-3 w-3 animate-pulse" /> Wait, before you go
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground font-display mt-2 leading-tight">
                          Why are you leaving? Let's make this visit count.
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Tell us what you're looking for, and we'll point you in the right direction. No sales pitches, just technical alignment.
                        </p>
                      </div>

                      <div className="grid gap-3 mt-4">
                        {EXIT_OPTIONS.map((opt) => {
                          const Icon = opt.icon;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => setSelectedOption(opt)}
                              className="w-full flex items-center justify-between p-4 rounded-xl bg-background border border-border hover:border-primary/45 hover:bg-primary/[0.02] shadow-sm hover:shadow transition-all group text-left cursor-pointer"
                            >
                              <div className="flex items-center gap-3.5">
                                <div className="p-2 rounded-lg bg-surface border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-all text-muted-foreground group-hover:text-primary">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-semibold text-foreground tracking-tight">
                                  {opt.label}
                                </span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                            </button>
                          );
                        })}
                      </div>

                      <div className="text-center pt-2">
                        <button
                          onClick={() => setVisible(false)}
                          className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-all cursor-pointer"
                        >
                          Just close this, I'm done
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* ─── STEP 2: EMAIL / PHONE CAPTURE ─── */
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      <button
                        onClick={() => { setSelectedOption(null); setContact(""); setError(""); }}
                        className="text-xs text-primary hover:text-primary/80 font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        ← Back to options
                      </button>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-display text-foreground leading-tight">
                          {selectedOption.responseTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {selectedOption.responseBody}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                        <div>
                          <Input
                            type="text"
                            value={contact}
                            onChange={(e) => { setContact(e.target.value); setError(""); }}
                            placeholder={selectedOption.placeholder}
                            className="h-11 bg-background border-border focus-visible:ring-primary placeholder:text-muted-foreground/45 text-sm"
                            autoFocus
                          />
                          {error && <p className="mt-1 text-xs text-destructive font-semibold">{error}</p>}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                          <Button
                            type="submit"
                            disabled={submitting}
                            className="flex-1 h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                          >
                            {submitting ? "Sending..." : "Submit"}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setVisible(false)}
                            className="h-11 border-border text-muted-foreground hover:text-foreground bg-background hover:bg-surface cursor-pointer"
                          >
                            No thanks
                          </Button>
                        </div>
                      </form>

                      <p className="text-[10px] text-muted-foreground/75 text-center leading-normal">
                        🔒 Protected by mutual NDA guidelines. We respect your inbox privacy.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
