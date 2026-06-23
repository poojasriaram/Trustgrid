import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "tg_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already set their cookie consent
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500); // 1.5 second delay after load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
    // Dispatch a custom event to notify listeners (such as analytics initializer) of the update
    window.dispatchEvent(new Event("cookie-consent-changed"));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:left-6 md:w-96 z-[998] pointer-events-none"
        >
          <div className="relative rounded-2xl overflow-hidden bg-card/95 backdrop-blur-md border border-border/80 shadow-2xl p-5 md:p-6 pointer-events-auto">
            {/* Top Glowing Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-secondary" />

            {/* Close Button */}
            <button
              onClick={() => handleConsent("rejected")}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-muted-foreground hover:text-foreground transition-all hover:bg-surface-elevated/50 cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-foreground tracking-tight">
                  Cookie Preferences
                </h4>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-sans">
                  We use cookies and local storage tokens to optimize performance telemetry and maintain security settings. Accept all or configure preferences. See our{" "}
                  <Link to="/cookies" className="text-primary hover:underline font-medium">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 mt-5">
              <Button
                onClick={() => handleConsent("accepted")}
                className="flex-1 h-9 text-xs bg-primary hover:bg-primary/95 text-primary-foreground font-semibold cursor-pointer shadow-sm"
              >
                Accept All
              </Button>
              <Button
                variant="outline"
                onClick={() => handleConsent("rejected")}
                className="flex-1 h-9 text-xs border-border text-muted-foreground hover:text-foreground bg-background hover:bg-surface cursor-pointer"
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
