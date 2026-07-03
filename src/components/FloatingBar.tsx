import { Link } from "@tanstack/react-router";
import { PackageSearch, Send, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function FloatingBar() {
  const { t } = useI18n();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-[color:var(--ink)]/95 p-1.5 shadow-2xl backdrop-blur-xl">
        <Link to="/track" className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white hover:bg-white/10">
          <PackageSearch className="h-4 w-4" /> {t("cta.trackNow")}
        </Link>
        <Link to="/book" className="flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-4 py-2 text-xs font-semibold text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)]">
          <Send className="h-4 w-4" /> {t("cta.bookNow")}
        </Link>
        <Link to="/contact" className="hidden sm:flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white hover:bg-white/10">
          <Phone className="h-4 w-4" /> {t("nav.contact")}
        </Link>
      </div>
    </div>
  );
}
