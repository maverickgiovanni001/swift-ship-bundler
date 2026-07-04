/**
 * Returns the correct URL for a public-folder asset, respecting Vite's
 * configured `base` (e.g. "/swift-ship-bundler/" on GitHub Pages).
 *
 * Usage:  asset("/images/hero-plane.jpg")
 *         → "/swift-ship-bundler/images/hero-plane.jpg"  (production)
 *         → "/images/hero-plane.jpg"                     (dev)
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
