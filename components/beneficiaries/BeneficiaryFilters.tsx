import React from "react";
import { Input } from "@/components/ui/Input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
  onSearch: (term: string) => void;
}

export function BeneficiaryFilters({ onSearch }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400" />
        </div>
        <Input 
          className="pl-10 h-10" 
          placeholder="Buscar por nombre, apellidos, o documento..." 
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex space-x-2">
        <select className="h-10 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Todos los Proyectos</option>
          <option value="p1">Vives Emplea</option>
          <option value="p2">Vives Emprende</option>
        </select>
        
        <select className="h-10 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Estado Itinerario</option>
          <option value="activo">Activo</option>
          <option value="cerrado">Cerrado (Inserción)</option>
        </select>
        
        <Button variant="outline" className="h-10">
          <Filter size={18} className="mr-2" />
          Más Filtros
        </Button>
      </div>
    </div>
  );
}
