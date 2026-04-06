"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { MOCK_PROJECTS, Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, Briefcase, Plus, Calendar, Euro, Users, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = MOCK_PROJECTS.filter(p => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return p.name.toLowerCase().includes(term) || p.code.toLowerCase().includes(term);
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Proyectos y Convocatorias</h1>
          <p className="text-sm font-medium text-[#ea580c] mt-1 flex items-center">
            {user?.role === Role.ADMIN && "Vista global ejecutiva de todos los proyectos."}
            {user?.role === Role.GESTOR && "Proyectos activos en tu zona geográfica."}
            {user?.role === Role.TECNICO && "Proyectos en los que estás asignado."}
          </p>
        </div>
        
        {user?.role !== Role.PARTICIPANTE && user?.role !== Role.TECNICO && (
          <Button variant="primary" className="flex items-center">
            <Plus size={18} className="mr-2" />
            Nuevo Proyecto
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <Input 
            className="pl-10 h-10 w-full" 
            placeholder="Buscar por código o nombre del proyecto..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <Card key={p.id} className="hover:shadow-md transition-shadow border-t-4 border-t-[#0f766e]">
            <div className="p-6 border-b border-slate-100 flexitems-start justify-between">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mr-4 shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{p.name}</h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">{p.code}</p>
                  </div>
                </div>
                <div>
                  <Badge variant={p.status === "Activo" ? "success" : "default"}>{p.status}</Badge>
                </div>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-2 gap-y-4 gap-x-2 text-sm bg-slate-50/50">
              <div>
                <p className="text-slate-500 text-xs mb-1 flex items-center"><Euro size={14} className="mr-1"/> Financiador</p>
                <p className="font-medium text-slate-700 truncate">{p.donor}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1 flex items-center"><Calendar size={14} className="mr-1"/> Duración</p>
                <p className="font-medium text-slate-700 text-xs">
                  {new Date(p.startDate).toLocaleDateString()} - {new Date(p.endDate).toLocaleDateString()}
                </p>
              </div>
              
              <div className="col-span-2">
                <div className="flex justify-between items-end mb-1">
                  <p className="text-slate-500 text-xs flex items-center"><Users size={14} className="mr-1"/> Plazas cubiertas</p>
                  <span className="text-xs font-bold text-slate-700">85 / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-white rounded-b-lg flex justify-end">
              <Button variant="ghost" className="text-teal-700 hover:text-teal-800 hover:bg-teal-50 text-sm h-8 px-3">
                Ver Detalles <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
