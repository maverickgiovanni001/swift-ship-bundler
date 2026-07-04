import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { TrackingWidget } from "@/components/TrackingWidget";
import { Voiceover } from "@/components/Voiceover";
import { useI18n } from "@/lib/i18n";
import { imgPath } from "@/lib/utils";
import {
  Plane, Ship, Truck, Zap, Warehouse, FileCheck2,
  ArrowUpRight, ShieldCheck, Clock3, Globe2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <Layout>
      <Voiceover />
      <Hero />
      <TrackStrip />
      <StatBand />
      <ServicesShowcase />
      <NetworkBand />
      <ProcessSection />
      <FleetSection />
      <CtaBand />
    </Layout>
  );

  function Hero() {
    return (
      <section className="relative overflow-hidden ink-panel">
        <div className="absolute inset-0">
          <img src={imgPath("/images/hero-plane.jpg")} alt="Cargo aircraft above clouds at golden hour" className="h-full w-full object-cover opacity-45" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--ink)] via-[color:var(--ink)]/70 to-transparent" />
        </div>

        {/* Geometry decoration */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full border border-[color:var(--gold)]/20" />
        <div className="pointer-events-none absolute -top-16 -right-8 h-[360px] w-[360px] rounded-full border border-[color:var(--gold)]/30" />
        <div className="pointer-events-none absolute top-40 right-40 h-3 w-3 rounded-full bg-[color:var(--gold)]" />

        <div className="container-page relative py-24 md:py-36">
          <div className="max-w-3xl fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> {t("hero.eyebrow")}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-white md:text-7xl text-balance">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75 text-pretty">{t("hero.sub")}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition">
                {t("cta.bookNow")} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                {t("cta.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function TrackStrip() {
    return (
      <section className="relative -mt-14 md:-mt-16 z-10">
        <div className="container-page">
          <div className="rounded-3xl bg-white p-4 md:p-6 shadow-2xl ring-1 ring-black/5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">{t("track.title")}</h2>
              <span className="hidden md:inline text-xs font-medium text-black/45">Real-time · Global</span>
            </div>
            <TrackingWidget />
          </div>
        </div>
      </section>
    );
  }

  function StatBand() {
    const items = [
      { icon: Globe2, label: t("hero.stat1") },
      { icon: Clock3, label: t("hero.stat3") },
      { icon: ShieldCheck, label: t("hero.stat2") },
    ];
    return (
      <section className="container-page pt-16 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-muted/40 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--ink)] text-[color:var(--gold)]">
                <it.icon className="h-5 w-5" />
              </span>
              <p className="font-display text-lg font-semibold">{it.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function ServicesShowcase() {
    const svc = [
      { icon: Plane,     img: imgPath("/images/air-freight.jpg"),  key: "air"       },
      { icon: Ship,      img: imgPath("/images/sea-freight.jpg"),  key: "sea"       },
      { icon: Truck,     img: imgPath("/images/road-freight.jpg"), key: "road"      },
      { icon: Zap,       img: imgPath("/images/courier.jpg"),      key: "express"   },
      { icon: Warehouse, img: imgPath("/images/warehouse.jpg"),    key: "warehouse" },
      { icon: FileCheck2,img: imgPath("/images/containers.jpg"),   key: "customs"   },
    ] as const;
    return (
      <section className="container-page py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Services</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl text-balance">{t("services.title")}</h2>
            <p className="mt-3 text-muted-foreground text-pretty">{t("services.sub")}</p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--ink)] underline decoration-[color:var(--gold)] decoration-2 underline-offset-4">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {svc.map((s, i) => (
            <article key={s.key} className={`group relative overflow-hidden rounded-3xl bg-[color:var(--ink)] ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}>
              <img src={s.img} alt="" className={`h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-70 ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)] text-[color:var(--ink)]">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">{t(`services.${s.key}.title`)}</h3>
                <p className="mt-1.5 max-w-md text-sm text-white/75">{t(`services.${s.key}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function NetworkBand() {
    return (
      <section className="relative overflow-hidden ink-panel">
        <img src={imgPath("/images/network.jpg")} alt="Global logistics network arcs over an illuminated globe" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/60 to-transparent" />
        <div className="container-page relative py-24 md:py-32 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Coverage</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-white md:text-5xl text-balance">
              A network that hasn't slept since 2011.
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              9,412 vehicles. 74 aircraft. 92 shipping lanes. 140 automated warehouses. One control tower.
              InterGlobe.cloud is engineered so freight keeps moving when everything else stops.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["220+", "Countries"],
              ["4.6M", "Monthly shipments"],
              ["99.2%", "On-time delivery"],
              ["24/7", "Control tower"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="font-display text-4xl font-bold text-[color:var(--gold)]">{n}</p>
                <p className="mt-1 text-sm text-white/70">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ProcessSection() {
    const steps = [
      { n: "01", t: "Book", d: "Complete a waybill in minutes. Instant pricing across every service class." },
      { n: "02", t: "Collect", d: "Our couriers arrive at the scheduled window. Sealed, scanned, insured." },
      { n: "03", t: "Move", d: "Airfreight, sea corridor or ground — routed through our AI-optimised network." },
      { n: "04", t: "Deliver", d: "Signed proof of delivery, live geolocation, and instant customer notification." },
    ];
    return (
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">How it works</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl text-balance">Four steps. One promise.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-black/5 bg-card p-6">
              <span className="font-mono text-xs text-[color:var(--gold-deep)]">{s.n}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[color:var(--gold)]" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  function FleetSection() {
    return (
      <section className="container-page pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl lg:col-span-2 aspect-[16/10]">
            <img src={imgPath("/images/control-room.jpg")} alt="Global operations control room with world route map" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Control Tower</p>
              <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">Every parcel, in view.</h3>
              <p className="mt-2 max-w-md text-sm text-white/75">Our operations centres in Dubai, Frankfurt and Singapore keep watch on 4.6 million monthly shipments — routing around weather, port congestion and customs holds in real time.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl aspect-[3/4] lg:aspect-auto">
            <img src={imgPath("/images/containers.jpg")} alt="Yellow shipping containers stacked at port" className="h-full w-full object-cover" loading="lazy" width={1280} height={1600} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Fleet</p>
              <h3 className="mt-1 font-display text-2xl font-bold">9,412 vehicles. 74 aircraft.</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function CtaBand() {
    return (
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl gold-panel p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full border-2 border-black/10" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full border-2 border-black/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl text-balance">Ready to move something?</h2>
            <p className="mt-3 text-[color:var(--ink)]/80">Get an instant quote and generate a waybill in under two minutes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-black">
                {t("cta.bookNow")} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--ink)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-[color:var(--ink)] hover:text-white transition">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
