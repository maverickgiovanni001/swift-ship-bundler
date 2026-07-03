import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — InterGlobe.cloud" },
      { name: "description", content: "Reach InterGlobe.cloud's global operations, sales, and support teams." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Rotterdam", addr: "Wilhelminakade 909, 3072 AP", tel: "+31 10 200 1000" },
  { city: "Dubai",     addr: "DAFZA, Building 6W, Office 405", tel: "+971 4 299 8800" },
  { city: "Singapore", addr: "1 Raffles Quay, #24-01", tel: "+65 6100 4400" },
  { city: "New York",  addr: "200 Vesey Street, Floor 22", tel: "+1 212 555 0102" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="ink-panel">
        <div className="container-page py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Contact</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold text-white md:text-7xl text-balance">Talk to a human. Any hour.</h1>
          <p className="mt-4 max-w-xl text-white/70">Sales, operations and account support — reachable in your time zone, in your language, seven days a week.</p>
        </div>
      </section>

      <section className="container-page py-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-card p-8 md:p-10 ring-1 ring-black/5">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[color:var(--gold-deep)]" />
              <h2 className="mt-4 font-display text-2xl font-bold">Message received</h2>
              <p className="mt-2 text-muted-foreground">A member of our team will reply within one business hour.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold">Send another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full name" />
                <Input label="Company" />
                <Input label="Email" type="email" />
                <Input label="Phone" />
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How can we help?</span>
                <textarea rows={5} required className="mt-1.5 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
              </label>
              <button className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-black">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-[color:var(--gold)]/10 border border-[color:var(--gold)]/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">General enquiries</p>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@interglobe.cloud</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +31 10 200 1000</p>
            </div>
          </div>
          {offices.map((o) => (
            <div key={o.city} className="rounded-2xl border border-black/5 bg-muted/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">{o.city}</p>
              <p className="mt-2 text-sm flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {o.addr}</p>
              <p className="mt-1 text-sm flex items-center gap-2"><Phone className="h-4 w-4" /> {o.tel}</p>
            </div>
          ))}
        </aside>
      </section>
    </Layout>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input type={type} required className="mt-1.5 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
    </label>
  );
}
