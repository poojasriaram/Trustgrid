// ============================================================
// Analytics SDK — Initialization
// ============================================================
import { ANALYTICS_CONFIG } from './index';

let initialized = false;

/**
 * Initializes analytics. Clarity is loaded directly via index.html unconditionally.
 */
export async function initAnalytics() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('[Analytics] Initialized. Microsoft Clarity is loaded unconditionally via index.html.');
  }
}

/**
 * Stub function kept for compatibility with router configuration.
 * Clarity handles SPA route changes automatically.
 */
export function resetScrollTracking() {
  // Kept for backward compatibility
}


