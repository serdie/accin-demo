"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Role, User } from "./roles";

// Usuarios mock para simulación
export const MOCK_USERS: Record<Role, User> = {
  [Role.ADMIN]: { id: "u-admin", name: "Admin Global", email: "admin@ach.org", role: Role.ADMIN },
  [Role.GESTOR]: { id: "u-gestor", name: "Gestora Sede", email: "gestor@ach.org", role: Role.GESTOR, office: "Madrid" },
  [Role.TECNICO]: { id: "u-tecnico", name: "Técnico de Empleo", email: "tecnico@ach.org", role: Role.TECNICO, office: "Madrid - Vives Emplea" },
  [Role.PARTICIPANTE]: { id: "b1", name: "Ana Martínez", email: "ana.martinez@ejemplo.com", role: Role.PARTICIPANTE },
};

type AuthContextType = {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Para evitar hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedRole = localStorage.getItem("accin_demo_role") as Role | null;
    if (storedRole && MOCK_USERS[storedRole]) {
      setUser(MOCK_USERS[storedRole]);
    }
  }, []);

  const login = (role: Role) => {
    setUser(MOCK_USERS[role]);
    localStorage.setItem("accin_demo_role", role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accin_demo_role");
  };

  if (!mounted) return null; // Evita el renderizado del servidor de las rutas protegidas

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
