import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="ink-panel mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src="./images/logo-mark.png" alt="" className="h-9 w-9" width={36} height={36} />
            <span className="font-display text-xl font-bold">InterGlobe.cloud</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">{t("footer.tag")}</p>
          <p className="mt-8 text-xs text-white/40">{t("footer.rights")}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link to="/reviews" className="hover:text-white">{t("nav.reviews")}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t("nav.contact")}</Link></li>
            <li><Link to="/terms" className="hover:text-white">{t("nav.terms")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white">{t("services.air.title")}</Link></li>
            <li><Link to="/services" className="hover:text-white">{t("services.sea.title")}</Link></li>
            <li><Link to="/services" className="hover:text-white">{t("services.road.title")}</Link></li>
            <li><Link to="/track" className="hover:text-white">{t("nav.track")}</Link></li>
            <li><Link to="/book" className="hover:text-white">{t("nav.book")}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
