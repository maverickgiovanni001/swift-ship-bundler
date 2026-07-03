import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/track", label: t("nav.track") },
    { to: "/services", label: t("nav.services") },
    { to: "/book", label: t("nav.book") },
    { to: "/about", label: t("nav.about") },
    { to: "/reviews", label: t("nav.reviews") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="./images/logo-mark.png" alt="" className="h-8 w-8" width={32} height={32} />
          <span className="font-display text-lg font-bold tracking-tight">
            InterGlobe<span className="text-[color:var(--gold-deep)]">.cloud</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:bg-black/5 transition"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "EN / FR" : "FR / EN"}
          </button>
          <Link
            to="/book"
            className="hidden md:inline-flex items-center rounded-full bg-[color:var(--ink)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--cream)] hover:bg-black transition"
          >
            {t("cta.bookNow")}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
            aria-label="menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="mt-2 self-start rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold uppercase"
            >
              {lang === "en" ? "Switch to Français" : "Passer à English"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
