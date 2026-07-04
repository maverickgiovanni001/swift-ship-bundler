import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Resolves a public asset path against the Vite base URL so it works on GitHub Pages. */
export function imgPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
