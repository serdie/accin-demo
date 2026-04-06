"use client";

import React from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Users, Briefcase, Building2, TrendingUp, Calendar as CalendarIcon, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function DashboardPage() {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Hola, {user.name}
          </h1>
          <p className="text-slate-500 mt-1">Resumen general de tu área de influencia</p>
        </div>
        <div className="text-sm bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-2 text-slate-600 flex items-center">
          <CalendarIcon size={16} className="mr-2 text-teal-600" />
          {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-t-4 border-t-orange-500 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Beneficiarios Activos</p>
                <h3 className="text-3xl font-black text-slate-800">
                  {user.role === Role.ADMIN ? "1.245" : (user.role === Role.GESTOR ? "342" : "45")}
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  {user.role === Role.TECNICO && "En tus grupos actuales"}
                  {user.role === Role.GESTOR && "En tu sede / delegación"}
                  {user.role === Role.ADMIN && "A nivel global ONG"}
                </p>
              </div>
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <Users size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-teal-600 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Proyectos</p>
                <h3 className="text-3xl font-black text-slate-800">
                  {user.role === Role.ADMIN ? "34" : (user.role === Role.GESTOR ? "12" : "2")}
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  {user.role === Role.TECNICO && "Asignados a ti"}
                  {user.role === Role.GESTOR && "Activos en delegación"}
                  {user.role === Role.ADMIN && "En ejecución general"}
                </p>
              </div>
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                <Briefcase size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-blue-500 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Empresas Aliadas</p>
                <h3 className="text-3xl font-black text-slate-800">128</h3>
                <p className="text-xs text-slate-400 mt-2">Convenios y prácticas</p>
              </div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Building2 size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-purple-500 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Inserciones Mes</p>
                <h3 className="text-3xl font-black text-slate-800">
                  {user.role === Role.ADMIN ? "89" : (user.role === Role.GESTOR ? "24" : "5")}
                </h3>
                <p className="text-xs text-green-600 font-medium mt-2 flex items-center">
                  <TrendingUp size={14} className="mr-1" /> +12% respecto al mes anterior
                </p>
              </div>
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                <TrendingUp size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card className="shadow-sm border-slate-200">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-lg">
            <h3 className="text-lg font-bold text-slate-800 flex items-center">
              <Clock size={18} className="mr-2 text-[#ea580c]" /> Actividades Recientes
            </h3>
            <span className="text-xs text-[#0f766e] font-semibold cursor-pointer hover:underline">Ver todo</span>
          </div>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-slate-50 transition-colors flex gap-4">
                <div className="mt-1 bg-green-100 p-2 rounded-full h-8 w-8 flex justify-center items-center flex-shrink-0">
                  <CheckCircle size={16} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Carlos García completó "Taller Curriculum"</p>
                  <p className="text-xs text-slate-500 mt-1">Proyecto Vives Emprende - Hace 2 horas</p>
                </div>
              </div>
              
              <div className="p-5 hover:bg-slate-50 transition-colors flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full h-8 w-8 flex justify-center items-center flex-shrink-0">
                  <Building2 size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Nueva oferta publicada: Mozo de Almacén</p>
                  <p className="text-xs text-slate-500 mt-1">Empresa Mercadona (Madrid Sur) - Hace 4 horas</p>
                  <Badge variant="info" className="mt-2 text-[10px]">Match con 3 perfiles</Badge>
                </div>
              </div>

              <div className="p-5 hover:bg-slate-50 transition-colors flex gap-4">
                <div className="mt-1 bg-yellow-100 p-2 rounded-full h-8 w-8 flex justify-center items-center flex-shrink-0">
                  <AlertCircle size={16} className="text-yellow-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Alerta: Riesgo de abandono (Ana Martínez)</p>
                  <p className="text-xs text-slate-500 mt-1">IA detectó ausencia injustificada en 2 sesiones seguidas. - Ayer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
           <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-lg">
            <h3 className="text-lg font-bold text-slate-800 flex items-center">
              <CalendarIcon size={18} className="mr-2 text-[#0f766e]" /> Próximas Citas y Talleres
            </h3>
          </div>
          <CardContent className="p-0">
            <ul className="divide-y divide-slate-100">
              <li className="p-5 flex justify-between items-center hover:bg-slate-50 transition-colors">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-orange-50 border border-orange-100 rounded-lg w-12 h-12 flex-shrink-0">
                    <span className="text-xs font-bold text-orange-600 uppercase">NOV</span>
                    <span className="text-lg font-black text-orange-800 leading-none">12</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Taller Habilidades Digitales</p>
                    <p className="text-xs text-slate-500 mt-0.5">Vives Emplea Sur · Aula 3</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="default" className="bg-slate-200">Mañana</Badge>
                  <p className="text-xs font-semibold mt-1 text-slate-600">10:00 AM</p>
                </div>
              </li>
              
              <li className="p-5 flex justify-between items-center hover:bg-slate-50 transition-colors">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-lg w-12 h-12 flex-shrink-0">
                    <span className="text-xs font-bold text-slate-500 uppercase">NOV</span>
                    <span className="text-lg font-black text-slate-700 leading-none">14</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Entrevista Inicial (Carlos G.)</p>
                    <p className="text-xs text-slate-500 mt-0.5">Vives Emprende · Online (Teams)</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="border-slate-300">Jueves</Badge>
                  <p className="text-xs font-semibold mt-1 text-slate-600">12:30 PM</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
