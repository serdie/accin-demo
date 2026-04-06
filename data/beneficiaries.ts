export type Activity = {
  id: string;
  date: string;
  type: string; // Ej: "Entrevista", "Taller", "Derivación"
  description: string;
};

export type DocumentMock = {
  id: string;
  name: string;
  uploadDate: string;
  type: string;
};

export type Beneficiary = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  employmentStatus: string;
  educationLevel: string;
  assignedProjectId: string;
  assignedTechnicianId?: string;
  activities: Activity[];
  documents: DocumentMock[];
};

export const MOCK_BENEFICIARIES: Beneficiary[] = [
  {
    id: "b1",
    firstName: "Ana",
    lastName: "Martínez",
    email: "ana.martinez@ejemplo.com",
    phone: "600123456",
    age: 34,
    employmentStatus: "Desempleada > 1 año",
    educationLevel: "Educación Secundaria Obligatoria",
    assignedProjectId: "p1",
    assignedTechnicianId: "u-tecnico",
    activities: [
      { id: "a1", date: "2024-01-15", type: "Entrevista Inicial", description: "Entrevista de diagnóstico sociolaboral." },
      { id: "a2", date: "2024-02-01", type: "Taller", description: "Taller de CV y marca personal." },
    ],
    documents: [
      { id: "d1", name: "DNI.pdf", uploadDate: "2024-01-15", type: "Identificación" },
      { id: "d2", name: "Curriculum_v2.pdf", uploadDate: "2024-02-02", type: "CV" }
    ]
  },
  {
    id: "b2",
    firstName: "Carlos",
    lastName: "García",
    email: "carlos.g@ejemplo.com",
    phone: "611223344",
    age: 42,
    employmentStatus: "Desempleado < 6 meses",
    educationLevel: "Formación Profesional",
    assignedProjectId: "p2",
    assignedTechnicianId: "u-tecnico",
    activities: [
      { id: "a3", date: "2024-03-10", type: "Entrevista Inicial", description: "Evaluación para Vives Emprende." },
      { id: "a4", date: "2024-03-15", type: "Sesión grupal", description: "Generación de ideas de negocio." }
    ],
    documents: []
  },
  {
    id: "b3",
    firstName: "Lucía",
    lastName: "Fernández",
    email: "lucia.f@ejemplo.com",
    phone: "622334455",
    age: 25,
    employmentStatus: "Primer empleo",
    educationLevel: "Bachillerato",
    assignedProjectId: "p1",
    assignedTechnicianId: "u-tecnico2",
    activities: [],
    documents: []
  }
];
