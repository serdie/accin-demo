"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, Users, Search, MoreVertical, Edit2, Shield, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";

export default function AdminUsersPage() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (user?.role !== Role.ADMIN) {
    return (
      <div className="p-10 text-center bg-red-50 text-red-800 rounded-xl border border-red-200 flex flex-col items-center justify-center h-full">
        <AlertTriangle size={64} className="mb-4 text-red-500 opacity-80" />
        <h2 className="text-3xl font-black mb-2">Acceso Restringido</h2>
        <p className="text-lg">Esta área administrativa es exclusiva para perfiles globales de Control y Producción.</p>
      </div>
    );
  }

  // Lista mock de usuarios de la organización
  const orgUsers = [
    { id: "u-1", name: "María Pérez", email: "mperez@ach.org", role: Role.GESTOR, office: "Andalucía", status: "Activo", lastLogin: "Hoy, 10:23 AM" },
    { id: "u-2", name: "Juan Gomez", email: "jgomez@ach.org", role: Role.TECNICO, office: "Madrid Sur", status: "Activo", lastLogin: "Ayer, 16:45 PM" },
    { id: "u-3", name: "Laura Sánchez", email: "lsanchez@ach.org", role: Role.TECNICO, office: "Madrid Norte", status: "Inactivo", lastLogin: "Hace 2 semanas" },
    { id: "u-4", name: "Admin Global", email: "admin@ach.org", role: Role.ADMIN, office: "Sede Central", status: "Activo", lastLogin: "Ahora" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 text-white p-8 rounded-2xl shadow-xl gap-4 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <ShieldAlert size={28} className="text-red-400 mr-3" />
            <h1 className="text-3xl font-black tracking-tight">Centro de Control de Identidades</h1>
          </div>
          <p className="text-slate-400 ml-10">Panel avanzado de gestión de roles, permisos y estructura de la organización.</p>
        </div>
        <div className="relative z-10 flex space-x-3">
          <Button variant="outline" className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white">Exportar Accesos</Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-900/50" onClick={() => setIsModalOpen(true)}>Nuevo Empleado</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-red-500 rounded-xl">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1">Cuentas Internas</p>
              <h3 className="text-3xl font-black text-slate-800">452</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center"><Users size={24} className="text-red-500"/></div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-slate-800 rounded-xl">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1">Administradores</p>
              <h3 className="text-3xl font-black text-slate-800">14</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"><Shield size={24} className="text-slate-800"/></div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-xl overflow-hidden shadow-sm border-slate-200">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3 top-3 text-slate-400"/>
            <Input className="pl-9 bg-white" placeholder="Buscar por email o nombre..." />
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            <select className="flex-1 sm:flex-none h-10 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Cualquier Rol</option>
              <option value="TECNICO">Técnicos</option>
              <option value="GESTOR">Gestores</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-white border-b-2 border-slate-100">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">Usuario</th>
                <th className="px-6 py-4 font-bold tracking-wider">Delegación</th>
                <th className="px-6 py-4 font-bold tracking-wider">Último Acceso</th>
                <th className="px-6 py-4 font-bold tracking-wider">Nivel de Acceso</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right">Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 bg-white">
              {orgUsers.map(u => (
                <tr key={u.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 mr-3">
                        {u.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{u.name} {u.status === 'Inactivo' && <span className="text-[10px] text-red-500 bg-red-50 px-1.5 py-0.5 rounded ml-2 uppercase font-bold">Inactivo</span>}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-700 font-medium">{u.office}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">
                    {u.lastLogin}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold">
                    <span className={`px-2.5 py-1 rounded-md border ${
                      u.role === Role.ADMIN ? "bg-red-50 text-red-700 border-red-200" :
                      u.role === Role.GESTOR ? "bg-blue-50 text-blue-700 border-blue-200" :
                      "bg-slate-100 text-slate-700 border-slate-200"
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 size={16} className="text-slate-400 hover:text-slate-800" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical size={16} className="text-slate-400" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start border border-blue-100">
        <Shield size={20} className="mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-sm">Integración con Directorio Activo (Entra ID)</h4>
          <p className="text-xs mt-1 opacity-90">En el ámbito productivo, la tabla superior reflejará sincronización bi-direccional con el servicio de identidad en Cloud. La asignación granular de políticas (RBAC avanzado) será manipulable a nivel de grupos de seguridad.</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Invitar Nuevo Empleado (Mock)">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Notificación enviada al empleado con sus credenciales de SSO."); }}>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Nombre de Empleado" placeholder="María Lopez" required />
            <Input label="Email Corporativo" type="email" placeholder="mlopez@ach.org" required />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">Rol a Asignar</label>
            <select className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="TECNICO">Técnico / Orientador</option>
              <option value="GESTOR">Gestor de Oficina</option>
              <option value="ADMIN">Administrador (Alerta: Permisos Totales)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">Oficina / Hub Asignado</label>
            <Input placeholder="Ej. Madrid Sur, Comunidad de Andalucía..." required />
          </div>

          <div className="bg-yellow-50 text-yellow-800 p-3 rounded text-sm mt-4 border border-yellow-200">
            <strong>Atención:</strong> Las credenciales temporales se generarán a través de Azure Active Directory y se enviará un enlace de verificación al empleado.
          </div>
          
          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Enviar Invitación</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
