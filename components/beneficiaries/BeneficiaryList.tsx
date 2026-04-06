import React from "react";
import Link from "next/link";
import { Beneficiary } from "@/data/beneficiaries";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, FileText, Calendar } from "lucide-react";

interface Props {
  beneficiaries: Beneficiary[];
}

export function BeneficiaryList({ beneficiaries }: Props) {
  if (beneficiaries.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-xl border border-slate-200">
        <p className="text-slate-500">No se encontraron beneficiarios con esos filtros.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {beneficiaries.map((b) => (
        <Card key={b.id} className="hover:-translate-y-1 transition-transform duration-200">
          <div className="p-5 border-b border-slate-100 flex items-start justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold mr-3">
                {b.firstName.charAt(0)}{b.lastName.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{b.firstName} {b.lastName}</h3>
                <p className="text-xs text-slate-500">{b.employmentStatus}</p>
              </div>
            </div>
            <Badge variant="success">Activo</Badge>
          </div>
          
          <div className="p-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500 text-xs">Proyecto</p>
              <p className="font-medium text-slate-700 truncate">
                {b.assignedProjectId === "p1" ? "Vives Emplea" : "Vives Emprende"}
              </p>
            </div>
            <div>
              <p className="text-slate-500 text-xs">Edad</p>
              <p className="font-medium text-slate-700">{b.age} años</p>
            </div>
            
            <div className="col-span-2 flex items-center text-xs text-slate-500">
              <Calendar size={14} className="mr-1" /> Última actividad: hace 4 días
            </div>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-b-lg border-t border-slate-100 font-medium">
            <Link 
              href={`/beneficiaries/${b.id}`}
              className="flex items-center justify-center w-full text-[#ea580c] hover:text-[#c2410c] transition-colors text-sm"
            >
              Ver Ficha Completa <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
