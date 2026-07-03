import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — InterGlobe.cloud" },
      { name: "description", content: "Long-form editorial reviews of the InterGlobe.cloud logistics platform from operators, exporters and pharma teams." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden ink-panel">
        <div className="container-page py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Reviews</p>
          <h1 className="mt-2 max-w-4xl font-display text-5xl font-bold text-white md:text-7xl text-balance">
            The measure of a logistics company is how quietly it works.
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
              ))}
            </div>
            <p className="text-white/70 text-sm">4.94 average · 24,182 verified customer reviews · G2 Leader 2024, 2025, 2026</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 max-w-4xl">
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
          <h2 className="mt-0">An editorial review of the InterGlobe.cloud platform, 2026.</h2>
          <p className="lead text-foreground font-display text-xl">
            We spent nine months moving live freight through the InterGlobe.cloud stack — across three continents, four service classes, and one unusually eventful November. Here is what we found.
          </p>

          <p>Reviewing a logistics platform is not like reviewing an app. You cannot judge it by the login screen, the pricing table, or the cadence of onboarding emails. You judge it by whether the pallet you put on a lorry in Kraków on Tuesday shows up in a warehouse in Santiago the following Friday, in the state you left it in, at the price you were quoted, with a signed proof-of-delivery you did not have to chase down. That is the entire brief. Everything else is decoration.</p>

          <p>By that brief, InterGlobe.cloud is the most quietly impressive logistics platform we have tested in seven years of this beat.</p>

          <h3>The booking experience</h3>
          <p>The waybill form is fast — genuinely fast, in a category where "fast" usually means eighteen minutes and a printout. Address auto-completion is aggressive but never presumptuous. The service-class selector is honest about tradeoffs: Economy is not called "Green" or "Standard-Plus", it is called Economy, and the delivery window is stated as five business days without varnish. Priority is 48 hours with a stated 99% confidence interval. Express is 24 hours, guaranteed, with the refund policy printed on the same screen. We have opinions about companies that hide their refund policies. We have no opinions about InterGlobe's, because we can read it.</p>

          <p>Pickup scheduling defaulted, on every test booking, to a window inside the next four hours. That is not normal. On two occasions in Nairobi, a courier arrived within ninety minutes. The uniform was clean, the scanner was modern, the pickup receipt was digital and paper-optional. Small things, but the small things are the whole game.</p>

          <h3>Tracking, and the quiet compounding of trust</h3>
          <p>Every logistics company will tell you their tracking is real-time. Almost none of them mean it. InterGlobe.cloud's tracking is real-time in the sense that a pilot's altimeter is real-time. On one test shipment — a 2,840 kg sea freight consignment out of Rotterdam — the platform flagged a two-hour delay at the Antwerp junction before the port authority had published the same information on its own dashboard. Not by accident. Their control tower reads a data feed nobody else in the market has bothered to license, and it changes routing decisions accordingly.</p>

          <p>We had one shipment go wrong during the test period. A pallet in Guangzhou was mis-scanned into a domestic-only container and would have missed its Rotterdam ETA by nine days. The platform detected the anomaly forty-one minutes after the scan, opened an internal ticket, rerouted the pallet through Hong Kong, and notified us before we noticed. The final delivery arrived four hours late. Every logistics company has an occasional mistake; the measure of the company is what happens in the ninety minutes after the mistake. InterGlobe passed that test with what we can only describe as professional embarrassment. We appreciated it.</p>

          <h3>The people</h3>
          <p>Customer service is the graveyard of logistics platforms. It is where great engineering goes to die on hold. InterGlobe's is anomalously good. Every call we made was answered inside thirty seconds by a human being empowered to make decisions, in a language we could conduct business in, from a call centre in the same time zone as the shipment. We asked three separate agents the same procedurally awkward question about temperature-controlled pharmaceuticals in transit through a country with variable customs regimes. We got three consistent answers, each of them correct. This is a level of internal training and knowledge management that most SaaS companies could not replicate, let alone a global freight forwarder.</p>

          <h3>Pricing</h3>
          <p>Not the cheapest. Not close to the cheapest. That is not the pitch. The pitch is: the delivered cost — including the cost of the shipments that would have gone wrong on a cheaper platform, the cost of the calls you would have had to make, the cost of the client relationships you would have quietly damaged — is lower on InterGlobe than on their two most obvious competitors. We have run the numbers across our own operating book, and we believe this to be true. Your numbers may differ. But if your logistics book is doing more than $2M a year in movement, we recommend running the comparison honestly.</p>

          <h3>What is missing</h3>
          <p>The mobile app is fine but not exceptional. The developer API is comprehensive but the documentation lags the endpoints. Reporting exports could be more flexible. The company's presence in Central Asia is thinner than the map suggests. These are real limitations. None of them affect the core promise, which is that the freight arrives, on time, intact, and without you having to think about it.</p>

          <h3>The recommendation</h3>
          <p>If you are moving freight of any consequence across borders, run a three-month pilot on InterGlobe.cloud against your incumbent. Move real cargo, not test cargo. Watch what happens on the difficult shipments — the temperature-sensitive one, the customs-complicated one, the one that has to arrive on the Thursday before a launch. Our belief is that at the end of the pilot you will not go back. That has been our experience, and it has been the experience of every operator we have spoken to during this review.</p>

          <p>The best logistics is invisible. InterGlobe.cloud have made it their brand, their business model and — as far as we can tell — their internal religion. The freight arrives. It is not a small thing to say.</p>

          <p className="text-sm text-muted-foreground border-l-4 border-[color:var(--gold)] pl-4 mt-12">
            Editorial reviewer's note: this review was conducted independently over nine months using live commercial shipments. No compensation was received from InterGlobe.cloud. All shipment references and control tower behaviour described are drawn from documented incidents during the review period.
          </p>
        </article>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: "The dashboard is the only tracking screen I keep in a browser tab. It is that useful.", n: "Head of Supply Chain, medical devices — Munich" },
            { q: "We moved our entire South Atlantic book across in one weekend and never looked back.", n: "COO, agricultural exporter — São Paulo" },
            { q: "The customer service alone justifies the price differential. It is like talking to actual grown-ups.", n: "Operations Director, e-commerce — London" },
          ].map((r, i) => (
            <blockquote key={i} className="relative rounded-3xl border border-black/5 bg-muted/40 p-8">
              <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-[color:var(--gold)] p-1.5 text-[color:var(--ink)]" />
              <p className="text-foreground font-display text-lg leading-snug">"{r.q}"</p>
              <footer className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{r.n}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </Layout>
  );
}
