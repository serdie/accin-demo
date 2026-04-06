"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function AdminUsersPage() {
  const { user } = useAuth();
  
  if (user?.role !== Role.ADMIN) {
    return (
      <div className="p-8 text-center bg-red-50 text-red-800 rounded-lg border border-red-200">
        <h2 className="text-xl font-bold">Acceso Denegado</h2>
        <p>Esta sección está reservada para Administradores Globales.</p>
      </div>
    );
  }

  // Lista mock de usuarios de la organización
  const orgUsers = [
    { id: "u-1", name: "María Pérez", email: "mperez@ach.org", role: Role.GESTOR, office: "Andalucía" },
    { id: "u-2", name: "Juan Gomez", email: "jgomez@ach.org", role: Role.TECNICO, office: "Madrid" },
    { id: "u-3", name: "Laura Sánchez", email: "lsanchez@ach.org", role: Role.TECNICO, office: "Madrid" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Administración de Usuarios</h1>
          <p className="text-sm text-slate-500">Gestión de roles y permisos internos</p>
        </div>
        <Button>Invitar Usuario</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Nombre Completo</th>
                  <th className="px-6 py-4 font-medium">Delegación / Oficina</th>
                  <th className="px-6 py-4 font-medium">Rol Actual</th>
                  <th className="px-6 py-4 font-medium text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orgUsers.map(u => (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{u.name}</div>
                      <div className="text-slate-500 text-xs">{u.email}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">{u.office}</td>
                    <td className="px-6 py-4">
                      {u.role === Role.GESTOR && <Badge variant="warning">{u.role}</Badge>}
                      {u.role === Role.TECNICO && <Badge variant="info">{u.role}</Badge>}
                      {u.role === Role.ADMIN && <Badge variant="danger">{u.role}</Badge>}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <select className="border-slate-300 rounded text-xs py-1 px-2 border bg-white focus:outline-none focus:ring-1 focus:ring-primary">
                        <option value="TECNICO">Cambiar a Técnico</option>
                        <option value="GESTOR">Cambiar a Gestor</option>
                        <option value="ADMIN">Cambiar a Admin</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <p className="text-xs text-center text-slate-500 italic">
        Esta interfaz de administración es un mock. En el sistema final se integrará con la gestión de Active Directory y roles granulares por proyecto.
      </p>
    </div>
  );
}
