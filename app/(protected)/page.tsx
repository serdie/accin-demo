"use client";

import React from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Users, Briefcase, Building2, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">
          Hola, {user.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Beneficiarios Activos</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {user.role === Role.ADMIN ? "1,245" : (user.role === Role.GESTOR ? "342" : "45")}
              </h3>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-teal-100 text-teal-600 rounded-full">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Proyectos Asignados</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {user.role === Role.ADMIN ? "34" : (user.role === Role.GESTOR ? "12" : "2")}
              </h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Empresas Colaboradoras</p>
              <h3 className="text-2xl font-bold text-slate-800">128</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Inserciones este mes</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {user.role === Role.ADMIN ? "89" : (user.role === Role.GESTOR ? "24" : "5")}
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader title="Actividades Recientes" />
          <CardContent>
            <div className="space-y-4">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                </div>
              </div>
              <p className="text-sm text-slate-500 italic mt-4 text-center">Gráfico simulado de actividad</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Próximas Sesiones" />
          <CardContent>
            <ul className="divide-y divide-slate-100">
              <li className="py-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-800">Taller Habilidades Digitales</p>
                  <p className="text-xs text-slate-500">Vives Emplea Sur</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-700">Mañana</p>
                  <p className="text-xs text-orange-500">10:00 AM</p>
                </div>
              </li>
              <li className="py-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-800">Entrevista Inicial (Carlos G.)</p>
                  <p className="text-xs text-slate-500">Vives Emprende</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-700">Jueves</p>
                  <p className="text-xs text-orange-500">12:30 PM</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
