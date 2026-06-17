// ============================================================
// TRUSTGRID.AI — Analytics SDK
// Comprehensive 100-point behavioral tracking system
// ============================================================

// ─── Configuration ────────────────────────────────────────────
export const ANALYTICS_CONFIG = {
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbxD-Z1pKI9kXAdlnoH6x3eMFL7KjqUg4QYa13ruoeXghugzZ7Hw1CGEdHE8YVSPuMIc/exec',
  BATCH_INTERVAL_MS: 8000,  // Send events every 8 seconds
  MAX_BATCH_SIZE: 30,       // Max events per batch
  ENABLED: true,
  DEBUG: true,              // Enable to verify in browser console
};

// ─── Event Queue ──────────────────────────────────────────────
let eventQueue: AnalyticsEvent[] = [];
let batchTimer: ReturnType<typeof setInterval> | null = null;

export interface AnalyticsEvent {
  type: string;
  payload: Record<string, unknown>;
  timestamp: string;
}

export function trackEvent(type: string, payload: Record<string, unknown>) {
  if (!ANALYTICS_CONFIG.ENABLED) return;
  if (ANALYTICS_CONFIG.DEBUG) console.log('[Analytics] Queued:', type, payload);

  eventQueue.push({
    type,
    payload,
    timestamp: new Date().toISOString(),
  });

  if (eventQueue.length >= ANALYTICS_CONFIG.MAX_BATCH_SIZE) {
    flushEvents();
  }
}

export function flushEvents() {
  if (eventQueue.length === 0) return;
  if (!ANALYTICS_CONFIG.ENDPOINT || ANALYTICS_CONFIG.ENDPOINT.includes('YOUR_APPS')) return;

  const batch = [...eventQueue];
  eventQueue = [];

  if (ANALYTICS_CONFIG.DEBUG) console.log('[Analytics] Flushing', batch.length, 'events to Google Sheets...');

  // ─── Google Apps Script requires no-cors mode from browsers ───
  // This is because Apps Script redirects POST requests, and
  // standard CORS fetch blocks cross-origin redirects.
  // no-cors sends the data silently (we can't read the response,
  // but the data DOES arrive in the Google Sheet).
  try {
    fetch(ANALYTICS_CONFIG.ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',          // KEY FIX: bypasses CORS preflight
      redirect: 'follow',
      body: JSON.stringify(batch),
      // Note: no Content-Type header — no-cors restricts custom headers.
      // Apps Script parses the raw body regardless.
    }).then(() => {
      if (ANALYTICS_CONFIG.DEBUG) console.log('[Analytics] ✅ Batch sent successfully');
    }).catch((err) => {
      if (ANALYTICS_CONFIG.DEBUG) console.warn('[Analytics] ⚠️ Fetch error:', err);
      // Re-queue on failure
      eventQueue = [...batch, ...eventQueue];
    });
  } catch (err) {
    if (ANALYTICS_CONFIG.DEBUG) console.warn('[Analytics] ⚠️ Send error:', err);
    eventQueue = [...batch, ...eventQueue];
  }
}

// ─── Start / Stop ─────────────────────────────────────────────
export function startAnalytics() {
  if (typeof window === 'undefined') return;

  // Start batch flush timer
  batchTimer = setInterval(flushEvents, ANALYTICS_CONFIG.BATCH_INTERVAL_MS);

  // Flush immediately when tab is hidden or user leaves
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushEvents();
  });

  window.addEventListener('pagehide', () => flushEvents());
  window.addEventListener('beforeunload', () => flushEvents());
}

export function stopAnalytics() {
  if (batchTimer) {
    clearInterval(batchTimer);
    batchTimer = null;
  }
  flushEvents();
}
