import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.track": "Track",
  "nav.book": "Book a Shipment",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.terms": "Terms & Policy",
  "cta.getQuote": "Get a Quote",
  "cta.trackNow": "Track Now",
  "cta.bookNow": "Book Now",
  "cta.learnMore": "Learn more",

  "hero.eyebrow": "Global Logistics · Since 2011",
  "hero.title": "The world moves on our network.",
  "hero.sub": "InterGlobe.cloud delivers freight across oceans, skies and highways — engineered for certainty at global scale.",
  "hero.stat1": "220+ countries served",
  "hero.stat2": "4.6M shipments / month",
  "hero.stat3": "99.2% on-time delivery",

  "track.title": "Track a shipment",
  "track.placeholder": "Enter tracking number (e.g. IG-2026-004821)",
  "track.help": "Try sample: IG-2026-004821 · IG-2026-004822",
  "track.notFound": "No shipment matches that reference. Check the number and try again.",
  "track.status": "Status",
  "track.origin": "Origin",
  "track.destination": "Destination",
  "track.eta": "Estimated delivery",
  "track.timeline": "Shipment timeline",

  "services.title": "Services engineered for every distance.",
  "services.sub": "From same-day metropolitan runs to multi-modal transcontinental freight.",
  "services.air.title": "Air Freight",
  "services.air.desc": "Priority uplift across 480 airports with temperature-controlled and time-definite options.",
  "services.sea.title": "Sea Freight",
  "services.sea.desc": "Full-container and less-than-container loads on 92 principal trade lanes.",
  "services.road.title": "Road & Rail",
  "services.road.desc": "Dedicated fleets and rail corridors for continental cross-border cargo.",
  "services.express.title": "Express Courier",
  "services.express.desc": "Door-to-door parcel delivery in 24, 48 and 72-hour service classes.",
  "services.warehouse.title": "Warehousing",
  "services.warehouse.desc": "Bonded, automated warehouses with real-time inventory sync at 140 hubs.",
  "services.customs.title": "Customs & Clearance",
  "services.customs.desc": "Licensed brokerage in 74 jurisdictions; harmonised documentation and duty optimisation.",

  "book.title": "Book a shipment",
  "book.sub": "Complete the courier form to generate a waybill.",
  "book.step.sender": "Sender",
  "book.step.recipient": "Recipient",
  "book.step.parcel": "Parcel",
  "book.step.service": "Service",
  "book.step.review": "Review",
  "book.field.fullName": "Full name",
  "book.field.company": "Company (optional)",
  "book.field.email": "Email",
  "book.field.phone": "Phone",
  "book.field.address": "Street address",
  "book.field.city": "City",
  "book.field.country": "Country",
  "book.field.zip": "Postal code",
  "book.field.weight": "Weight (kg)",
  "book.field.dims": "Dimensions L×W×H (cm)",
  "book.field.contents": "Contents description",
  "book.field.value": "Declared value (USD)",
  "book.field.service": "Service level",
  "book.service.express": "Express — 24h",
  "book.service.priority": "Priority — 48h",
  "book.service.economy": "Economy — 5 days",
  "book.next": "Continue",
  "book.back": "Back",
  "book.submit": "Generate Waybill",
  "book.success": "Waybill generated",
  "book.trackingIs": "Your tracking number is",

  "footer.tag": "Engineered logistics for a connected planet.",
  "footer.rights": "© 2026 InterGlobe.cloud — All rights reserved.",
  "voice.play": "Play intro",
  "voice.mute": "Mute",
  "voice.hint": "Playing intro narration",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.track": "Suivi",
  "nav.book": "Envoyer un colis",
  "nav.services": "Services",
  "nav.about": "À propos",
  "nav.reviews": "Avis",
  "nav.contact": "Contact",
  "nav.terms": "Conditions",
  "cta.getQuote": "Obtenir un devis",
  "cta.trackNow": "Suivre",
  "cta.bookNow": "Réserver",
  "cta.learnMore": "En savoir plus",

  "hero.eyebrow": "Logistique Mondiale · Depuis 2011",
  "hero.title": "Le monde avance sur notre réseau.",
  "hero.sub": "InterGlobe.cloud achemine le fret par mer, air et route — pensé pour la fiabilité à l'échelle mondiale.",
  "hero.stat1": "220+ pays desservis",
  "hero.stat2": "4,6M expéditions / mois",
  "hero.stat3": "99,2% de livraisons à l'heure",

  "track.title": "Suivre un envoi",
  "track.placeholder": "Numéro de suivi (ex. IG-2026-004821)",
  "track.help": "Essayez : IG-2026-004821 · IG-2026-004822",
  "track.notFound": "Aucun envoi ne correspond à cette référence.",
  "track.status": "Statut",
  "track.origin": "Origine",
  "track.destination": "Destination",
  "track.eta": "Livraison prévue",
  "track.timeline": "Chronologie de l'envoi",

  "services.title": "Des services conçus pour toutes les distances.",
  "services.sub": "De la course urbaine au fret transcontinental multimodal.",
  "services.air.title": "Fret Aérien",
  "services.air.desc": "Envois prioritaires vers 480 aéroports, options à température contrôlée.",
  "services.sea.title": "Fret Maritime",
  "services.sea.desc": "Conteneurs complets ou groupage sur 92 lignes commerciales principales.",
  "services.road.title": "Route & Rail",
  "services.road.desc": "Flottes dédiées et corridors ferroviaires transfrontaliers.",
  "services.express.title": "Coursier Express",
  "services.express.desc": "Livraison porte-à-porte en 24, 48 ou 72 heures.",
  "services.warehouse.title": "Entreposage",
  "services.warehouse.desc": "140 hubs automatisés et sous douane, inventaire en temps réel.",
  "services.customs.title": "Douanes",
  "services.customs.desc": "Courtage agréé dans 74 juridictions ; documentation harmonisée.",

  "book.title": "Envoyer un colis",
  "book.sub": "Complétez le formulaire pour générer un bordereau.",
  "book.step.sender": "Expéditeur",
  "book.step.recipient": "Destinataire",
  "book.step.parcel": "Colis",
  "book.step.service": "Service",
  "book.step.review": "Résumé",
  "book.field.fullName": "Nom complet",
  "book.field.company": "Société (optionnel)",
  "book.field.email": "Courriel",
  "book.field.phone": "Téléphone",
  "book.field.address": "Adresse",
  "book.field.city": "Ville",
  "book.field.country": "Pays",
  "book.field.zip": "Code postal",
  "book.field.weight": "Poids (kg)",
  "book.field.dims": "Dimensions L×l×H (cm)",
  "book.field.contents": "Description du contenu",
  "book.field.value": "Valeur déclarée (USD)",
  "book.field.service": "Niveau de service",
  "book.service.express": "Express — 24h",
  "book.service.priority": "Prioritaire — 48h",
  "book.service.economy": "Économique — 5 jours",
  "book.next": "Continuer",
  "book.back": "Retour",
  "book.submit": "Générer le bordereau",
  "book.success": "Bordereau généré",
  "book.trackingIs": "Votre numéro de suivi est",

  "footer.tag": "Logistique d'ingénierie pour une planète connectée.",
  "footer.rights": "© 2026 InterGlobe.cloud — Tous droits réservés.",
  "voice.play": "Lire l'intro",
  "voice.mute": "Muet",
  "voice.hint": "Lecture de la narration d'introduction",
};

const dicts: Record<Lang, Dict> = { en, fr };

type Ctx = { lang: Lang; t: (k: string) => string; setLang: (l: Lang) => void };
const I18nCtx = createContext<Ctx>({ lang: "en", t: (k) => k, setLang: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ig_lang") as Lang | null;
      if (saved === "en" || saved === "fr") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("ig_lang", l); } catch {}
  };
  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;
  return <I18nCtx.Provider value={{ lang, t, setLang }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
