/**
 * Resolves a public-folder asset path relative to the Vite base URL.
 * Necessary because Vite only rewrites bundled imports — static `src="/images/..."`
 * strings in JSX are emitted as-is and will 404 when the site is deployed under
 * a sub-path (e.g. GitHub Pages at /swift-ship-bundler/).
 *
 * Usage:  src={asset("/images/logo-mark.png")}
 *         new Audio(asset("/audio/intro.mp3"))
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
