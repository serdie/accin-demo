"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, Users, CodeSquare, LogIn } from "lucide-react";

export function RoleSelector() {
  const { login } = useAuth();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>(Role.TECNICO);

  const roles = [
    {
      id: Role.ADMIN,
      title: "Administrador",
      desc: "Acceso global. Producción y Control.",
      icon: ShieldAlert
    },
    {
      id: Role.GESTOR,
      title: "Gestor",
      desc: "Ver oficina/delegación entera.",
      icon: Users
    },
    {
      id: Role.TECNICO,
      title: "Técnico",
      desc: "Gestionar sus proyectos asignados.",
      icon: CodeSquare
    },
    {
      id: Role.PARTICIPANTE,
      title: "Participante",
      desc: "Portal externo para personas usuarias.",
      icon: LogIn
    }
  ];

  const handleLogin = () => {
    login(selectedRole);
    if (selectedRole === Role.PARTICIPANTE) {
      router.push("/participant");
    } else {
      router.push("/");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10 shadow-lg border-t-4 border-t-[#ea580c]">
      <CardHeader 
        title="Validación de Acceso" 
        subtitle="Selecciona un rol para iniciar la demo" 
        className="text-center"
      />
      <CardContent>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = selectedRole === r.id;
            return (
              <div 
                key={r.id}
                onClick={() => setSelectedRole(r.id as Role)}
                className={`cursor-pointer flex items-center p-4 border rounded-lg transition-all ${
                  isSelected 
                    ? "border-[#ea580c] bg-orange-50 ring-1 ring-[#ea580c]" 
                    : "border-slate-200 hover:border-[#ea580c] hover:bg-slate-50"
                }`}
              >
                <div className={`p-2 rounded-full mr-4 ${isSelected ? "bg-orange-100 text-[#ea580c]" : "bg-slate-100 text-slate-500"}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${isSelected ? "text-orange-800" : "text-slate-800"}`}>{r.title}</h4>
                  <p className="text-xs text-slate-500">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <Button onClick={handleLogin} className="w-full py-6 text-lg">
          Entrar a la Demo
        </Button>
        <p className="text-center text-xs text-slate-400 mt-4">
          Nota: En producción conectará vía SSO con Entra ID / Azure AD.
        </p>
      </CardContent>
    </Card>
  );
}
