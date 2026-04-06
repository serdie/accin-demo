"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Role } from "@/lib/roles";
import { MOCK_COMPANIES, Company } from "@/data/companies";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, Building2, Plus, MapPin, UserSquare, ArrowRight, Phone } from "lucide-react";

export default function CompaniesPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = MOCK_COMPANIES.filter(c => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return c.name.toLowerCase().includes(term) || c.sector.toLowerCase().includes(term);
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Empresas e Intermediación</h1>
          <p className="text-sm font-medium text-blue-700 mt-1 flex items-center">
            {user?.role === Role.ADMIN && "Gestión del tejido empresarial aliado en todas las sedes."}
            {user?.role === Role.GESTOR && "Gestión de alianzas estratégicas locales."}
            {user?.role === Role.TECNICO && "Módulo de prospección y gestión de convenios de prácticas."}
          </p>
        </div>
        
        {user?.role !== Role.PARTICIPANTE && (
          <Button variant="primary" className="flex items-center bg-blue-600 hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            Nueva Empresa
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
            placeholder="Buscar empresa por razón social o sector..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((c) => (
          <Card key={c.id} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-t-0 overflow-hidden group">
            <div className="h-2 w-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <Building2 size={20} className="text-slate-600" />
                </div>
                <Badge variant={c.status === "Activa" ? "success" : "warning"}>{c.status}</Badge>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg text-slate-800 line-clamp-1" title={c.name}>{c.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{c.sector}</p>
                <div className="flex items-center text-slate-500 text-xs">
                  <MapPin size={14} className="mr-1 opacity-70" /> {c.location}
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-3 mt-auto border border-slate-100">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">Contacto Principal</p>
                <div className="flex items-center text-sm text-slate-700 mb-1">
                  <UserSquare size={14} className="mr-2 text-slate-400" /> {c.contactName}
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <Phone size={14} className="mr-2 text-slate-400" /> {c.contactEmail}
                </div>
              </div>
              
              <button className="w-full mt-4 flex items-center justify-center py-2 text-sm text-slate-600 font-medium border border-slate-200 rounded-md hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                Ver Ficha CRM <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
