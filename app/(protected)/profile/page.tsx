"use client";

import React from "react";
import { useAuth } from "@/lib/auth";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Mi Área Personal</h1>
      
      <Card>
        <CardHeader title="Datos del Perfil" subtitle="Gestiona tu información interna en ACH" />
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Nombre de usuario" defaultValue={user.name} />
              <Input label="Correo corporativo" defaultValue={user.email} />
              <Input label="Rol asignado" defaultValue={user.role} readOnly className="bg-slate-50 text-slate-500" />
              <Input label="Oficina / Delegación" defaultValue={user.office || "No asignada"} />
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <Button variant="outline">Cambiar Contraseña</Button>
              <Button>Actualizar Perfil</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Preferencias del Sistema" />
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Idioma Preferido</label>
              <select className="flex h-10 w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="es">Español</option>
                <option value="en">English (Futuro)</option>
                <option value="fr">Français (Futuro)</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
