import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About InterGlobe.cloud — Engineered Logistics for a Connected Planet" },
      { name: "description", content: "InterGlobe.cloud is a global logistics network born in 2011, moving 4.6 million shipments a month with 99.2% on-time delivery across 220+ countries." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="ink-panel relative overflow-hidden">
        <img src={asset("/images/hq.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] to-transparent" />
        <div className="container-page relative py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">About</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold text-white md:text-7xl text-balance">
            We are the network that never sleeps.
          </h1>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_2fr]">
        <aside className="lg:sticky lg:top-24 h-fit space-y-6 text-sm">
          <div className="rounded-2xl border border-black/5 bg-muted/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Founded</p>
            <p className="mt-1 font-display text-3xl font-bold">2011</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-muted/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Team</p>
            <p className="mt-1 font-display text-3xl font-bold">18,400+</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-muted/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">Head office</p>
            <p className="mt-1 font-display text-xl font-bold">Rotterdam · Dubai · Singapore</p>
          </div>
        </aside>

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
          <p className="lead font-display text-2xl leading-snug text-foreground">
            InterGlobe.cloud began as a single reroute — a family exporter in Rotterdam who needed a container of temperature-sensitive pharmaceuticals in Lagos before Monday, and had run out of options. Fifteen years later, we run one of the most quietly relentless logistics networks on the planet.
          </p>

          <h2>The story, in short.</h2>
          <p>What started as a two-person freight forwarding desk above a bakery in the Kop van Zuid is now a network of 18,400 people, 9,412 vehicles, 74 aircraft, 92 principal shipping lanes and 140 automated warehouses. We are not the loudest company in logistics. We are — measurably — one of the most dependable. Our on-time delivery rate held at 99.2% through the pandemic, the Suez blockage, three major port strikes, and the reshoring wave. We plan for those days. That is the entire idea.</p>

          <h2>What we actually believe.</h2>
          <p>The best logistics is invisible. When it works, the customer never thinks about you. They think about the surgeon who has the implant, the retailer who has the season's stock, the family who has the shipping-container home they saved seven years to build. We measure ourselves against invisibility, not applause. Every process, every route, every escalation ladder is designed around one question: how do we make certainty a feature you never notice?</p>

          <h2>Engineering-first.</h2>
          <p>We employ more software engineers than any comparably sized freight company. Our control tower reads live weather, port slot data, customs queues and vehicle telemetry, and reroutes freight before delay is measurable. We built our own EDI translator when the industry wouldn't standardise. We open-sourced our carbon accounting model in 2023 because our clients asked for it, and secrecy would have been petty. Engineering is not a department at InterGlobe — it is the shape of the company.</p>

          <h2>People, not headcount.</h2>
          <p>Our couriers are salaried. Our warehouse teams are salaried. Our long-haul drivers own equity through a profit-share programme that has paid out every year since 2016. We are aware this is not the industry norm. We think the industry norm is a mistake. The logistics industry has spent two decades treating labour as a cost line and then wondering why service quality erodes. We treat labour as an investment, and it shows up in every metric we care about.</p>

          <h2>Responsibility.</h2>
          <p>We operate at a scale where our climate impact is not rhetorical. We committed to a fully verified net-zero freight book by 2035, and we publish quarterly against it — including the quarters where we fall behind. 62% of our short-haul fleet is now electric. We are the largest single-source purchaser of certified sustainable aviation fuel in the freight sector. This is a work in progress; we would rather be honest about the pace than optimistic about the marketing.</p>

          <h2>What comes next.</h2>
          <p>Autonomous cross-dock operations at all 140 hubs by 2028. A doubling of our sub-Saharan African capacity. Deeper integration with rail corridors in India and South America. Expanded cold-chain and pharma-grade infrastructure. And — because our clients keep asking — a customer-facing waybill product that does not require a logistics degree to operate. That last one is closer than you think.</p>

          <h2>A final note.</h2>
          <p>We know brochures. This one has probably read like one. So — plainly: if you have freight that has to arrive, and it has to arrive on time, and it has to arrive intact, and the person who signs for it should never once have needed to worry about it — we would like to be your logistics partner. If we cannot do that better than everyone else in the room, we do not want the account. That is not a slogan. It is how we have made every decision since 2011, and it is how we will make every decision from tomorrow.</p>
        </div>
      </section>
    </Layout>
  );
}
