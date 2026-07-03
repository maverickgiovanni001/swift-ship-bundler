import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Policy — InterGlobe.cloud" },
      { name: "description", content: "Terms of service, privacy policy, shipping policy, and liability terms for InterGlobe.cloud." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    id: "acceptance",
    h: "1. Acceptance of terms",
    p: `By booking a shipment, requesting a quote, creating an account, or otherwise using any service branded InterGlobe.cloud (the "Services"), you agree to be bound by these Terms & Policy (the "Terms") and by every schedule, tariff, and policy expressly incorporated into them by reference. If you are entering into the Terms on behalf of an organisation, you warrant that you have authority to bind that organisation. If you do not accept the Terms in their entirety, you must not use the Services.`
  },
  {
    id: "scope",
    h: "2. Scope of Services",
    p: `InterGlobe.cloud offers international and domestic freight forwarding, express courier delivery, warehousing, customs brokerage, and adjacent logistics services. The Services are performed by InterGlobe.cloud B.V., its subsidiaries, and its authorised contractors. Reference in these Terms to "we", "us" or "our" is to the InterGlobe.cloud entity contracting for the shipment, as identified on the applicable waybill or booking confirmation.`
  },
  {
    id: "booking",
    h: "3. Bookings and waybills",
    p: `Each shipment is governed by the waybill generated at booking. The waybill is the authoritative record of the shipment particulars, service class, declared value, and applicable liability regime. You are responsible for the accuracy of the information supplied at booking, including the description and value of goods, the sender and recipient details, and any customs classification. Incorrect or incomplete information may result in delay, additional charges, or refusal to carry.`
  },
  {
    id: "prohibited",
    h: "4. Prohibited and restricted goods",
    p: `We do not carry currency, negotiable instruments, unset precious stones, live animals, human remains, controlled substances, weapons, radioactive material, or any goods whose carriage is prohibited by the origin, transit, or destination jurisdiction. Additional categories including lithium batteries, temperature-sensitive pharmaceuticals, and perishables are carried only under specific service classes and pre-approval. A full and current list of prohibited and restricted goods is available in the Shipper's Handbook and is incorporated into these Terms by reference.`
  },
  {
    id: "pricing",
    h: "5. Pricing, fees and payment",
    p: `Charges are quoted at booking on the basis of the information supplied and are subject to adjustment if the actual particulars (dimensions, weight, service class, address correction, remote-area surcharge, hazardous-goods handling, customs valuation) differ from those declared. Fuel, security, peak-season and regulatory surcharges may apply and are published on our tariff pages. Invoices are payable in full without deduction within fourteen (14) days of the invoice date unless otherwise agreed in writing. We reserve the right to charge statutory interest on late payments.`
  },
  {
    id: "delivery",
    h: "6. Delivery, transit and force majeure",
    p: `Stated transit times are estimates and, save where a service is expressly sold as guaranteed, are not contractual commitments. We shall not be liable for delay or non-performance caused by circumstances beyond our reasonable control, including but not limited to weather, industrial action, port congestion, civil unrest, cyber-attack, epidemic, embargo, act of state, or the closure of air, sea, or ground corridors by any competent authority.`
  },
  {
    id: "liability",
    h: "7. Liability",
    p: `Our liability for loss, damage, or delay is limited in accordance with the applicable international convention. Air freight is governed by the Montreal Convention 1999. Road freight in Europe is governed by the CMR Convention 1956. Sea freight is governed by the Hague-Visby Rules where applicable. Where no convention applies, our liability is capped at USD 22.00 per kilogram of the affected consignment. Higher liability may be purchased at booking through our declared-value protection product. We do not accept liability for consequential loss, loss of profit, or loss of business opportunity.`
  },
  {
    id: "claims",
    h: "8. Claims",
    p: `Claims for visible loss or damage must be noted on the proof of delivery at the point of receipt. All claims — including for concealed damage and non-delivery — must be submitted in writing, with supporting documentation, within twenty-one (21) days of the actual or scheduled delivery date. Claims received outside this window are time-barred.`
  },
  {
    id: "customs",
    h: "9. Customs and regulatory compliance",
    p: `Where InterGlobe.cloud acts as customs broker or agent, we do so on the basis of the information you supply. You warrant that all export, import, sanctions, and dual-use declarations are true and complete. You agree to indemnify us against any duty, tax, fine, penalty, or seizure arising from a misdeclaration attributable to you.`
  },
  {
    id: "privacy",
    h: "10. Privacy and data",
    p: `We process personal data in accordance with our Privacy Notice, incorporated into these Terms by reference. In summary: we collect the personal data necessary to perform the Services (sender/recipient names, addresses, contact details, government identifiers where required by customs), we retain it for the periods required by law, and we do not sell it. Our data protection officer can be reached at dpo@interglobe.cloud.`
  },
  {
    id: "acceptable-use",
    h: "11. Acceptable use of the platform",
    p: `You may not use the InterGlobe.cloud platform to move goods in breach of law; to attempt to circumvent sanctions or export controls; to scrape, reverse-engineer, or overload our services; or to impersonate another party. We reserve the right to suspend or terminate access where we reasonably suspect a breach.`
  },
  {
    id: "governing-law",
    h: "12. Governing law and jurisdiction",
    p: `These Terms are governed by the laws of the Netherlands, without regard to conflict-of-laws principles. The courts of Rotterdam have exclusive jurisdiction over any dispute arising out of or in connection with the Terms, except that we retain the right to bring proceedings in the courts of your habitual residence where required by mandatory consumer protection law.`
  },
  {
    id: "changes",
    h: "13. Changes to these terms",
    p: `We may amend these Terms from time to time. The current version is always available at interglobe.cloud/terms. Material changes will be notified by email to account holders at least thirty (30) days before they take effect. Continued use of the Services after the effective date constitutes acceptance of the amended Terms.`
  },
  {
    id: "contact",
    h: "14. Contact",
    p: `Questions about these Terms should be addressed to legal@interglobe.cloud or to InterGlobe.cloud B.V., Wilhelminakade 909, 3072 AP Rotterdam, Netherlands.`
  },
];

function TermsPage() {
  return (
    <Layout>
      <section className="ink-panel">
        <div className="container-page py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Legal</p>
          <h1 className="mt-2 font-display text-5xl font-bold text-white md:text-7xl text-balance">Terms & Policy</h1>
          <p className="mt-4 max-w-2xl text-white/70">Effective 1 January 2026. Version 6.2. Plain-language commentary is provided alongside each clause for clarity but does not override the operative text.</p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 h-fit">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contents</p>
          <ol className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-foreground/70 hover:text-foreground">{s.h}</a></li>
            ))}
          </ol>
        </aside>
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </section>
          ))}
          <p className="text-xs text-muted-foreground border-t border-black/10 pt-6">© 2026 InterGlobe.cloud B.V. Registered in Rotterdam, KvK 54321987. All rights reserved.</p>
        </div>
      </section>
    </Layout>
  );
}
