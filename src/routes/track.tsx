import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { TrackingWidget } from "@/components/TrackingWidget";
import { SAMPLE_SHIPMENTS, type Shipment } from "@/lib/tracking";
import { useI18n } from "@/lib/i18n";
import { MapPin, Package, Clock, CheckCircle2, Truck } from "lucide-react";

const search = z.object({ c: z.string().optional() });

export const Route = createFileRoute("/track")({
  validateSearch: (s) => search.parse(s),
  head: () => ({
    meta: [
      { title: "Track your shipment — InterGlobe.cloud" },
      { name: "description", content: "Enter your InterGlobe.cloud tracking number to see real-time status, location and estimated delivery." },
    ],
  }),
  component: TrackPage,
});

function TrackPage() {
  const { t } = useI18n();
  const { c } = Route.useSearch();
  const [shipment, setShipment] = useState<Shipment | null | "notfound">(null);

  useEffect(() => {
    if (!c) { setShipment(null); return; }
    const found = SAMPLE_SHIPMENTS[c.trim().toUpperCase()];
    setShipment(found ?? "notfound");
  }, [c]);

  return (
    <Layout>
      <section className="ink-panel">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">{t("nav.track")}</p>
          <h1 className="mt-2 font-display text-5xl font-bold text-white md:text-6xl">{t("track.title")}</h1>
          <p className="mt-4 max-w-xl text-white/70">Enter your reference below. Sample codes: <span className="font-mono text-[color:var(--gold)]">IG-2026-004821</span>, <span className="font-mono text-[color:var(--gold)]">IG-2026-004822</span>.</p>
          <div className="mt-8 max-w-3xl">
            <TrackingWidget variant="dark" />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        {shipment === null && (
          <div className="rounded-3xl border border-black/5 bg-muted/40 p-12 text-center">
            <Package className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-3 text-muted-foreground">Enter a tracking number above to see results.</p>
          </div>
        )}
        {shipment === "notfound" && (
          <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-8 text-center">
            <p className="font-semibold text-destructive">{t("track.notFound")}</p>
          </div>
        )}
        {shipment && shipment !== "notfound" && <ShipmentView s={shipment} />}
      </section>
    </Layout>
  );

  function ShipmentView({ s }: { s: Shipment }) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <aside className="rounded-3xl bg-card p-7 ring-1 ring-black/5 h-fit">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-xs font-bold uppercase text-[color:var(--ink)]">{s.status}</span>
            <span className="font-mono text-xs text-muted-foreground">{s.code}</span>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("track.origin")} → {t("track.destination")}</p>
          <p className="mt-1 font-display text-2xl font-bold">{s.origin}</p>
          <p className="font-display text-2xl font-bold text-[color:var(--gold-deep)]">↓ {s.destination}</p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-t border-black/5 pt-3"><dt className="text-muted-foreground">Service</dt><dd className="font-semibold">{s.service}</dd></div>
            <div className="flex justify-between border-t border-black/5 pt-3"><dt className="text-muted-foreground">{t("track.eta")}</dt><dd className="font-semibold">{s.eta}</dd></div>
            <div className="flex justify-between border-t border-black/5 pt-3"><dt className="text-muted-foreground">Weight</dt><dd className="font-semibold">{s.weightKg} kg</dd></div>
          </dl>
        </aside>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-black/5">
          <h2 className="font-display text-xl font-bold">{t("track.timeline")}</h2>
          <ol className="mt-6 relative border-l-2 border-dashed border-black/10 pl-6 space-y-6">
            {s.events.map((e, i) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full ${i === 0 ? "bg-[color:var(--gold)] text-[color:var(--ink)]" : "bg-[color:var(--ink)] text-white"}`}>
                  {i === 0 ? <Truck className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                </span>
                <p className="text-xs font-mono text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {e.ts}</p>
                <p className="mt-1 font-semibold">{e.status}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.location} · {e.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
