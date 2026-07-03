export type TrackingEvent = {
  ts: string;
  location: string;
  status: string;
  detail: string;
};

export type Shipment = {
  code: string;
  origin: string;
  destination: string;
  service: string;
  status: "In Transit" | "Out for Delivery" | "Delivered" | "Customs";
  eta: string;
  weightKg: number;
  events: TrackingEvent[];
};

export const SAMPLE_SHIPMENTS: Record<string, Shipment> = {
  "IG-2026-004821": {
    code: "IG-2026-004821",
    origin: "Rotterdam, NL",
    destination: "Lagos, NG",
    service: "Sea Freight — Priority",
    status: "In Transit",
    eta: "2026-07-14",
    weightKg: 2840,
    events: [
      { ts: "2026-07-02 09:12", location: "Rotterdam Port", status: "Departed origin", detail: "Vessel MV Aurelia sailed" },
      { ts: "2026-07-01 18:40", location: "Rotterdam DC", status: "Loaded on vessel", detail: "Container IGCU 8842119" },
      { ts: "2026-07-01 07:22", location: "Rotterdam DC", status: "Customs cleared", detail: "Export declaration approved" },
      { ts: "2026-06-30 14:03", location: "Rotterdam DC", status: "Received at origin", detail: "Booking IG-2026-004821 registered" },
    ],
  },
  "IG-2026-004822": {
    code: "IG-2026-004822",
    origin: "Shenzhen, CN",
    destination: "Paris, FR",
    service: "Air Freight — Express",
    status: "Out for Delivery",
    eta: "2026-07-03",
    weightKg: 18.4,
    events: [
      { ts: "2026-07-03 07:41", location: "Paris CDG", status: "Out for delivery", detail: "Courier Vehicle 214" },
      { ts: "2026-07-03 04:12", location: "Paris CDG", status: "Arrived destination airport", detail: "Flight IG881" },
      { ts: "2026-07-02 22:30", location: "Shenzhen SZX", status: "Departed origin airport", detail: "Flight IG881" },
      { ts: "2026-07-02 15:10", location: "Shenzhen Hub", status: "Loaded on aircraft ULD", detail: "PMC AKE47" },
      { ts: "2026-07-02 08:04", location: "Shenzhen Hub", status: "Received at origin", detail: "Booking registered" },
    ],
  },
};
