export type Project = {
  id: string;
  name: string;
  code: string;
  donor: string;
  startDate: string;
  endDate: string;
  status: "Activo" | "Cerrado" | "En preparación";
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Vives Emplea Madrid Sur",
    code: "VE-MAD-24",
    donor: "Fondo Social Europeo",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Activo"
  },
  {
    id: "p2",
    name: "Vives Emprende Nacional",
    code: "VEMP-NAC-24",
    donor: "Ministerio de Trabajo",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    status: "Activo"
  }
];
