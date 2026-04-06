export enum Role {
  ADMIN = "ADMIN",
  GESTOR = "GESTOR",
  TECNICO = "TECNICO",
  PARTICIPANTE = "PARTICIPANTE",
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  office?: string;
};

// Helpers de permisos simplificados para el prototipo
export const canViewAllBeneficiaries = (role: Role) => {
  return [Role.ADMIN, Role.GESTOR].includes(role);
};

export const canViewAssignedBeneficiaries = (role: Role) => {
  return role === Role.TECNICO;
};

export const isInternalUser = (role: Role) => {
  return [Role.ADMIN, Role.GESTOR, Role.TECNICO].includes(role);
};

export const canManageUsers = (role: Role) => {
  return role === Role.ADMIN;
};
