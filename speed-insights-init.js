// Vercel Speed Insights initialization for CKS Wallpaper
// This script imports and initializes Vercel Speed Insights

import { injectSpeedInsights } from './dist/speed-insights.js';

// Initialize Speed Insights when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights();
  });
} else {
  // DOM is already ready
  injectSpeedInsights();
}
