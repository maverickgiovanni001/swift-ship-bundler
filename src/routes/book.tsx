import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import {
  User, MapPin, Package, Zap, CheckCircle2, ArrowRight, ArrowLeft, Building2, Mail, Phone as PhoneIcon,
} from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a shipment — InterGlobe.cloud" },
      { name: "description", content: "Generate a waybill and book a courier pickup in under two minutes." },
    ],
  }),
  component: BookPage,
});

type Form = {
  sName: string; sCompany: string; sEmail: string; sPhone: string; sAddress: string; sCity: string; sCountry: string; sZip: string;
  rName: string; rCompany: string; rEmail: string; rPhone: string; rAddress: string; rCity: string; rCountry: string; rZip: string;
  weight: string; dims: string; contents: string; value: string; service: "express" | "priority" | "economy";
};

const empty: Form = {
  sName: "", sCompany: "", sEmail: "", sPhone: "", sAddress: "", sCity: "", sCountry: "", sZip: "",
  rName: "", rCompany: "", rEmail: "", rPhone: "", rAddress: "", rCity: "", rCountry: "", rZip: "",
  weight: "", dims: "", contents: "", value: "", service: "priority",
};

function BookPage() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [waybill, setWaybill] = useState<string | null>(null);

  const steps = [
    { icon: User,     label: t("book.step.sender")    },
    { icon: MapPin,   label: t("book.step.recipient") },
    { icon: Package,  label: t("book.step.parcel")    },
    { icon: Zap,      label: t("book.step.service")   },
    { icon: CheckCircle2, label: t("book.step.review") },
  ] as const;

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    const n = Math.floor(100000 + Math.random() * 899999);
    setWaybill(`IG-2026-${n}`);
  };

  if (waybill) {
    return (
      <Layout>
        <section className="container-page py-24">
          <div className="mx-auto max-w-2xl rounded-3xl bg-card p-10 ring-1 ring-black/5 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)]">
              <CheckCircle2 className="h-8 w-8 text-[color:var(--ink)]" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold">{t("book.success")}</h1>
            <p className="mt-2 text-muted-foreground">{t("book.trackingIs")}</p>
            <p className="mt-4 font-mono text-2xl font-bold text-[color:var(--gold-deep)]">{waybill}</p>
            <p className="mt-6 text-sm text-muted-foreground">Save this reference. A confirmation email has been sent to {form.sEmail || "your inbox"}.</p>
            <div className="mt-8 flex justify-center gap-3">
              <a href={`./track?c=${waybill}`} className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white">Track this shipment</a>
              <button onClick={() => { setWaybill(null); setStep(0); setForm(empty); }} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold">Book another</button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="ink-panel">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">{t("nav.book")}</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white md:text-5xl">{t("book.title")}</h1>
          <p className="mt-3 max-w-xl text-white/70">{t("book.sub")}</p>
        </div>
      </section>

      <section className="container-page py-12">
        <ol className="grid grid-cols-5 gap-2 md:gap-4 mb-10">
          {steps.map((s, i) => (
            <li key={i} className={`flex flex-col items-center gap-2 rounded-2xl border p-3 md:p-4 text-center transition ${i === step ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10" : i < step ? "border-black/10 bg-muted/50" : "border-black/5 opacity-60"}`}>
              <span className={`grid h-9 w-9 place-items-center rounded-xl ${i <= step ? "bg-[color:var(--ink)] text-[color:var(--gold)]" : "bg-muted"}`}>
                <s.icon className="h-4 w-4" />
              </span>
              <span className="hidden md:block text-xs font-semibold">{s.label}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-3xl bg-card p-6 md:p-10 ring-1 ring-black/5">
          {step === 0 && (
            <PartyForm prefix="s" title={t("book.step.sender")} form={form} set={set} />
          )}
          {step === 1 && (
            <PartyForm prefix="r" title={t("book.step.recipient")} form={form} set={set} />
          )}
          {step === 2 && (
            <div className="grid gap-4 md:grid-cols-2">
              <SectionHeader icon={Package} title={t("book.step.parcel")} />
              <Field label={t("book.field.weight")} value={form.weight} onChange={(v) => set("weight", v)} />
              <Field label={t("book.field.dims")} value={form.dims} onChange={(v) => set("dims", v)} placeholder="40×30×20" />
              <Field label={t("book.field.value")} value={form.value} onChange={(v) => set("value", v)} />
              <div className="md:col-span-2">
                <Field label={t("book.field.contents")} value={form.contents} onChange={(v) => set("contents", v)} />
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <SectionHeader icon={Zap} title={t("book.field.service")} />
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {(["express", "priority", "economy"] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => set("service", k)}
                    className={`text-left rounded-2xl border-2 p-6 transition ${form.service === k ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10" : "border-black/10 hover:border-black/25"}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">{k}</p>
                    <p className="mt-1 font-display text-xl font-bold">{t(`book.service.${k}`)}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {k === "express" ? "Same-day pickup, 24-hour delivery. Insured up to $10,000." :
                       k === "priority" ? "Guaranteed 48-hour transit. Ideal for time-critical freight." :
                       "Cost-optimised standard delivery across 5 business days."}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <SectionHeader icon={CheckCircle2} title={t("book.step.review")} />
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <ReviewBlock title={t("book.step.sender")}>
                  {form.sName || "—"} · {form.sCompany || ""}<br />
                  {form.sAddress}, {form.sCity}, {form.sCountry} {form.sZip}<br />
                  {form.sEmail} · {form.sPhone}
                </ReviewBlock>
                <ReviewBlock title={t("book.step.recipient")}>
                  {form.rName || "—"} · {form.rCompany || ""}<br />
                  {form.rAddress}, {form.rCity}, {form.rCountry} {form.rZip}<br />
                  {form.rEmail} · {form.rPhone}
                </ReviewBlock>
                <ReviewBlock title={t("book.step.parcel")}>
                  Weight: {form.weight || "—"} kg · Dimensions: {form.dims || "—"} cm<br />
                  Contents: {form.contents || "—"} · Value: ${form.value || "—"}
                </ReviewBlock>
                <ReviewBlock title={t("book.field.service")}>
                  {t(`book.service.${form.service}`)}
                </ReviewBlock>
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <button
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> {t("book.back")}
            </button>
            {step < 4 ? (
              <button onClick={() => setStep((s) => Math.min(4, s + 1))} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                {t("book.next")} <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={submit} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[color:var(--ink)]">
                {t("book.submit")} <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--ink)] text-[color:var(--gold)]"><Icon className="h-5 w-5" /></span>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, icon: Icon }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="mt-1.5 flex items-center gap-2 rounded-xl bg-input px-4 py-3">
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-transparent text-sm outline-none" />
      </span>
    </label>
  );
}

function PartyForm({ prefix, title, form, set }: { prefix: "s" | "r"; title: string; form: Record<string, string>; set: (k: never, v: never) => void }) {
  const k = (n: string) => `${prefix}${n}` as keyof Form;
  return (
    <div>
      <SectionHeader icon={prefix === "s" ? User : MapPin} title={title} />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" value={form[k("Name")]} onChange={(v) => set(k("Name") as never, v as never)} icon={User} />
        <Field label="Company" value={form[k("Company")]} onChange={(v) => set(k("Company") as never, v as never)} icon={Building2} />
        <Field label="Email" value={form[k("Email")]} onChange={(v) => set(k("Email") as never, v as never)} icon={Mail} />
        <Field label="Phone" value={form[k("Phone")]} onChange={(v) => set(k("Phone") as never, v as never)} icon={PhoneIcon} />
        <div className="md:col-span-2">
          <Field label="Street address" value={form[k("Address")]} onChange={(v) => set(k("Address") as never, v as never)} icon={MapPin} />
        </div>
        <Field label="City" value={form[k("City")]} onChange={(v) => set(k("City") as never, v as never)} />
        <Field label="Country" value={form[k("Country")]} onChange={(v) => set(k("Country") as never, v as never)} />
        <Field label="Postal code" value={form[k("Zip")]} onChange={(v) => set(k("Zip") as never, v as never)} />
      </div>
    </div>
  );
}

function ReviewBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-muted/40 p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-deep)]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
