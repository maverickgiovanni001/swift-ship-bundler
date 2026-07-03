import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Plane, Ship, Truck, Zap, Warehouse, FileCheck2, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — InterGlobe.cloud" },
      { name: "description", content: "Air, sea, road, express, warehousing and customs services from InterGlobe.cloud across 220+ countries." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  const items = [
    { key: "air", icon: Plane, img: "/images/air-freight.jpg" },
    { key: "sea", icon: Ship, img: "/images/sea-freight.jpg" },
    { key: "road", icon: Truck, img: "/images/road-freight.jpg" },
    { key: "express", icon: Zap, img: "/images/courier.jpg" },
    { key: "warehouse", icon: Warehouse, img: "/images/warehouse.jpg" },
    { key: "customs", icon: FileCheck2, img: "/images/containers.jpg" },
  ] as const;

  return (
    <Layout>
      <section className="ink-panel">
        <div className="container-page py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">{t("nav.services")}</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold text-white md:text-6xl text-balance">{t("services.title")}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{t("services.sub")}</p>
        </div>
      </section>

      <section className="container-page py-20 space-y-16">
        {items.map((s, i) => (
          <article key={s.key} className={`grid gap-8 items-center lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img src={s.img} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--ink)] text-[color:var(--gold)]"><s.icon className="h-6 w-6" /></span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t(`services.${s.key}.title`)}</h2>
              <p className="mt-3 text-muted-foreground">{t(`services.${s.key}.desc`)}</p>
              <p className="mt-3 max-w-md text-muted-foreground">
                Integrated with our real-time control tower, every {t(`services.${s.key}.title`).toLowerCase()} shipment is
                visible from booking to signed delivery — with proactive alerts on weather, congestion and customs holds.
              </p>
              <Link to="/book" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-[color:var(--gold)] decoration-2 underline-offset-4">
                Book this service <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
