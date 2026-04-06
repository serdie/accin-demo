export type Company = {
  id: string;
  name: string;
  sector: string;
  location: string;
  status: "Activa" | "Inactiva" | "Prospecto";
  contactName: string;
  contactEmail: string;
};

export const MOCK_COMPANIES: Company[] = [
  {
    id: "c1",
    name: "Logística Global Sur S.A.",
    sector: "Logística y Transporte",
    location: "Madrid",
    status: "Activa",
    contactName: "Javier Sánchez",
    contactEmail: "javier.s@logisticaglobal.example",
  },
  {
    id: "c2",
    name: "Tech Solutions Iberia",
    sector: "Tecnología",
    location: "Barcelona",
    status: "Activa",
    contactName: "Marta Ruiz",
    contactEmail: "mruiz@techsolutions.example",
  },
  {
    id: "c3",
    name: "Alimentación Saludable SL",
    sector: "Hostelería / Alimentación",
    location: "Sevilla",
    status: "Prospecto",
    contactName: "Luis Díaz",
    contactEmail: "contacto@alisaludable.example",
  },
  {
    id: "c4",
    name: "Construcciones y Reformas del Norte",
    sector: "Construcción",
    location: "Bilbao",
    status: "Activa",
    contactName: "Aitor Arana",
    contactEmail: "aarana@consnorte.example",
  },
];
