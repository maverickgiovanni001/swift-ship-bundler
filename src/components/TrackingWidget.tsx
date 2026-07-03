import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function TrackingWidget({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { t } = useI18n();
  const nav = useNavigate();
  const [code, setCode] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) nav({ to: "/track", search: { c: code.trim() } as never });
  };
  const dark = variant === "dark";
  return (
    <form
      onSubmit={submit}
      className={`relative w-full rounded-2xl p-1.5 shadow-2xl ${
        dark ? "bg-white/10 backdrop-blur-xl" : "bg-white ring-1 ring-black/10"
      }`}
    >
      <div className="flex items-center">
        <span className={`pl-4 pr-2 ${dark ? "text-white/60" : "text-black/40"}`}>
          <Search className="h-5 w-5" />
        </span>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={t("track.placeholder")}
          className={`flex-1 bg-transparent px-2 py-4 text-base font-medium outline-none ${
            dark ? "text-white placeholder:text-white/50" : "text-ink placeholder:text-black/40"
          }`}
        />
        <button
          type="submit"
          className="rounded-xl bg-[color:var(--gold)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition"
        >
          {t("cta.trackNow")}
        </button>
      </div>
      <p className={`px-4 pb-2 pt-1 text-[11px] ${dark ? "text-white/50" : "text-black/45"}`}>
        {t("track.help")}
      </p>
    </form>
  );
}
